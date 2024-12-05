<?php
// src/Command/ImportCoursesCommand.php

namespace App\Command;

use App\Entity\Course;
use App\Repository\CourseRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\HttpClient\HttpClient;

#[AsCommand(
    name: 'app:import-courses',
)]
class ImportCoursesCommand extends Command
{
    private EntityManagerInterface $entityManager;
    private CourseRepository $courseRepository;
    private const BATCH_SIZE = 100;

    public function __construct(EntityManagerInterface $entityManager, CourseRepository $courseRepository)
    {
        parent::__construct();

        $this->entityManager = $entityManager;
        $this->courseRepository = $courseRepository;
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        ini_set('memory_limit', '256M');

        $url = 'https://plan.zut.edu.pl/schedule.php?kind=subject&query=+';

        $httpClient = HttpClient::create();
        $response = $httpClient->request('GET', $url);

        if ($response->getStatusCode() !== 200) {
            $output->writeln('<error>Failed to fetch data</error>');
            return Command::FAILURE;
        }

        $data = $response->toArray();

        $this->entityManager->beginTransaction();

        try {
            $batch_count = 0;
            $lastElement = null;

            foreach ($data as $item) {
                $originalCourseName = $item['item'];

                $courseName = preg_replace('/\s*\(.*?\)/', '', $originalCourseName);
                $courseName = trim($courseName);

                if (empty($courseName)) {
                    $output->writeln("<info>Course name after cleaning is empty'{$originalCourseName}'.</info>");
                    continue;
                }

                if($courseName == $lastElement){
                    $output->writeln("<info>Duplicate course name</info>");
                    continue;
                }

                $existingCourse = $this->courseRepository->findOneBy(['name' => $courseName]);

                if ($existingCourse) {
                    $output->writeln("<info>Course '{$courseName}' already exists</info>");
                    continue;
                }

                $course = new Course();
                $course->setName($courseName);
                $this->entityManager->persist($course);
                $output->writeln("<info>Imported course: {$courseName}</info>");

                $batch_count++;
                $lastElement = $courseName;

                if ($batch_count % self::BATCH_SIZE === 0) {
                    $this->entityManager->flush();
                    $this->entityManager->clear();
                    $output->writeln("<info>{$batch_count} Courses imported successfully</info>");
                }
            }

            $this->entityManager->flush();
            $this->entityManager->commit();

            $output->writeln('<info>All courses imported successfully</info>');
            return Command::SUCCESS;
        } catch (\Exception $e) {
            $this->entityManager->rollback();
            $output->writeln('<error>Failed to import courses: ' . $e->getMessage() . '</error>');
            return Command::FAILURE;
        }
    }
}
