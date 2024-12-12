<?php
namespace App\Command;

use App\Entity\Student;
use App\Repository\GroupRepository;
use App\Repository\StudentRepository;
use Doctrine\ORM\EntityManagerInterface;
use Exception;
use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\HttpClient\HttpClient;

#[AsCommand(
    name: 'app:import-students',
)]
class ImportStudentsCommand extends Command
{
    private EntityManagerInterface $entityManager;
    private StudentRepository $studentRepository;
    private GroupRepository $groupRepository;
    private const BATCH_SIZE = 100;

    public function __construct(
        EntityManagerInterface $entityManager,
        StudentRepository $studentRepository,
        GroupRepository $groupRepository
    ) {
        parent::__construct();
        $this->entityManager = $entityManager;
        $this->studentRepository = $studentRepository;
        $this->groupRepository = $groupRepository;
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        ini_set('memory_limit', '1024M');

        $startId = 30000;
        $endId = 60000;
//        $startDate = '2024-10-01';
//        $endDate = '2025-02-28';
        $startDate = '2024-10-01';
        $endDate = '2025-02-28';
        if (!$this->validateDate($startDate) || !$this->validateDate($endDate)) {
            $output->writeln('<error>Start and End dates must be in YYYY-MM-DD format.</error>');
            return Command::FAILURE;
        }

        $httpClient = HttpClient::create();

        $this->entityManager->beginTransaction();

        try {
            $batch_count = 0;
            $startEncoded = urlencode($startDate . 'T00:00:00+01:00');
            $endEncoded = urlencode($endDate . 'T00:00:00+01:00');

            for ($id = $startId; $id <= $endId; $id++) {
                $idEncoded = urlencode($id);

                $url = "https://plan.zut.edu.pl/schedule_student.php?number={$idEncoded}&start={$startEncoded}&end={$endEncoded}";
                $response = $httpClient->request('GET', $url);

                if ($response->getStatusCode() !== 200) {
                    $output->writeln("<error>Failed to fetch schedule for student ID {$id}</error>");
                    continue;
                }

                $data = $response->toArray();

                if (empty($data) || $data === [[]])
                    continue;


                $uniqueGroupNames = [];
                foreach ($data as $lesson)
                    if (isset($lesson['group_name']))
                        $uniqueGroupNames[] = $lesson['group_name'];

                $uniqueGroupNames = array_unique($uniqueGroupNames);

                $student = $this->studentRepository->findOneBy(['student_id' => $id]);
                if (!$student) {
                    $student = new Student();
                    $student->setStudentId($id);
                    $this->entityManager->persist($student);
                }

                foreach ($uniqueGroupNames as $groupName) {
                    $group = $this->groupRepository->findOneBy(['name' => $groupName]);

                    if (!$group) {
                        $output->writeln("<info>Group '{$groupName}' not found for student {$id}</info>");
                        continue;
                    }

                    $student->addGroup($group);
                }

                $batch_count++;

                if ($batch_count % self::BATCH_SIZE === 0) {
                    $this->entityManager->flush();
                    $this->entityManager->clear();
                    $output->writeln("<info>Processed {$batch_count} students</info>");
                }
            }

            $this->entityManager->flush();
            $this->entityManager->commit();

            $output->writeln('<info>Students imported and assigned to groups successfully.</info>');
            return Command::SUCCESS;
        } catch (Exception $e) {
            $this->entityManager->rollback();
            $output->writeln('<error>Failed to import students: ' . $e->getMessage() . '</error>');
            return Command::FAILURE;
        }
    }

    private function validateDate(string $date): bool
    {
        return (bool) \DateTime::createFromFormat('Y-m-d', $date);
    }
}
