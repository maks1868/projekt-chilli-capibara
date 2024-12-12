<?php
namespace App\Command;

use App\Entity\Teacher;
use App\Repository\TeacherRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\HttpClient\HttpClient;

#[AsCommand(
    name: 'app:import-teachers'
)]
class ImportTeachersCommand extends Command
{
    private EntityManagerInterface $entityManager;
    private TeacherRepository $teacherRepository;
    private const BATCH_SIZE = 100;


    public function __construct(EntityManagerInterface $entityManager, TeacherRepository $teacherRepository)
    {
        parent::__construct();

        $this->entityManager = $entityManager;
        $this->teacherRepository = $teacherRepository;
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        ini_set('memory_limit', '256M');

        $url = "https://plan.zut.edu.pl/schedule.php?kind=teacher&query=+";

        $httpClient = HttpClient::create();
        $response = $httpClient->request('GET', $url);

        if ($response->getStatusCode()  !== 200) {
            $output->writeln('<error>Failed to fetch data.</error>');
            return Command::FAILURE;
        }

        $data = $response->toArray();

        $this->entityManager->beginTransaction();
        try {
            $batch_count = 0;

            foreach ($data as $item) {
                $teacherName = $item['item'];

                $existingTeacher = $this->teacherRepository->findOneBy(['name' => $teacherName]);

                if ($existingTeacher) {
                    $output->writeln("<comment>Teacher '{$teacherName}' already exists</comment>");
                    continue;
                }

                $teacher = new Teacher();
                $teacher->setName($teacherName);
                $this->entityManager->persist($teacher);

                $output->writeln("<info> Imported teacher: {$teacherName}</info>");
                $batch_count++;

                if ($batch_count % self::BATCH_SIZE === 0) {
                    $this->entityManager->flush();
                    $this->entityManager->clear();
                    $output->writeln("<info>{$batch_count} Teachers imported successfully.</info>");
                }
            }
            $this->entityManager->flush();
            $this->entityManager->commit();
            $output->writeln('<info>All teachers imported successfully</info>');

            return Command::SUCCESS;
        } catch (\Exception $e) {
            $this->entityManager->rollback();
            $output->writeln('<error>Failed to import teachers: ' . $e->getMessage() . '</error>');
            return Command::FAILURE;
        }
    }
}
