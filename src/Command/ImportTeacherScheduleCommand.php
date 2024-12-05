<?php
// src/Command/ImportTeacherScheduleCommand.php

namespace App\Command;

use App\Entity\Course;
use App\Entity\Group;
use App\Entity\Lesson;
use App\Entity\Room;
use App\Entity\Teacher;
use App\Repository\CourseRepository;
use App\Repository\GroupRepository;
use App\Repository\LessonRepository;
use App\Repository\RoomRepository;
use App\Repository\TeacherRepository;
use Doctrine\ORM\EntityManagerInterface;
use Exception;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\HttpClient\HttpClient;

#[AsCommand(
    name: 'app:import-teacher-schedule'
)]
class ImportTeacherScheduleCommand extends Command
{
    private EntityManagerInterface $entityManager;
    private TeacherRepository $teacherRepository;
    private GroupRepository $groupRepository;
    private CourseRepository $courseRepository;
    private RoomRepository $roomRepository;
    private LessonRepository $lessonRepository;

    private const BATCH_SIZE = 100;

    public function __construct(
        EntityManagerInterface $entityManager,
        TeacherRepository $teacherRepository,
        GroupRepository $groupRepository,
        CourseRepository $courseRepository,
        RoomRepository $roomRepository,
        LessonRepository $lessonRepository
    ) {
        parent::__construct();

        $this->entityManager = $entityManager;
        $this->teacherRepository = $teacherRepository;
        $this->groupRepository = $groupRepository;
        $this->courseRepository = $courseRepository;
        $this->roomRepository = $roomRepository;
        $this->lessonRepository = $lessonRepository;
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        ini_set('memory_limit', '256M');

//        $start = '2024-10-01';
//        $end = '2025-02-28';

        $start = '2024-12-02';
        $end = '2024-12-03';
        if (!$this->validateDate($start) || !$this->validateDate($end)) {
            $output->writeln('<error>Start and End dates must be in YYYY-MM-DD format</error>');
            return Command::FAILURE;
        }

        $teachers = $this->teacherRepository->findAll();

        if (empty($teachers)) {
            $output->writeln('<info>No teachers in database</info>');
            return Command::FAILURE;
        }

        $this->entityManager->beginTransaction();

        try {
            $batch_count = 0;

            foreach ($teachers as $teacher) {
                $teacherName = $teacher->getName();

                $teacherEncoded = urlencode($teacherName);
                $startEncoded = urlencode($start . 'T00:00:00+01:00');
                $endEncoded = urlencode($end . 'T00:00:00+01:00');

                $url = "https://plan.zut.edu.pl/schedule_student.php?teacher={$teacherEncoded}&start={$startEncoded}&end={$endEncoded}";

                $httpClient = HttpClient::create();
                $response = $httpClient->request('GET', $url);

                if ($response->getStatusCode() !== 200) {
                    $output->writeln("<error>Failed to fetch schedule data for teacher '{$teacherName}'</error>");
                    continue;
                }

                $data = $response->toArray();

                foreach ($data as $lessonData) {
                    $lesson = $this->processLessonData($lessonData, $teacher, $output);

                    if (!$lesson) {
                        continue;
                    }

                    $existingLesson = $this->lessonRepository->findOneBy([
                        'course' => $lesson->getCourse(),
                        'teacher' => $lesson->getTeacher(),
                        'group' => $lesson->getGroup(),
                        'room' => $lesson->getRoom(),
                        'start_time' => $lesson->getStartTime(),
                        'end_time' => $lesson->getEndTime(),
                        'type' => $lesson->getType(),
                        'status' => $lesson->getStatus()
                    ]);

                    if (!$existingLesson) {
                        $this->entityManager->persist($lesson);
                        $output->writeln("<info>Imported lesson for '{$teacherName}': {$lesson->getCourse()->getName()}</info>");
                    } else {
                        $output->writeln("<info>This lesson exists for '{$teacherName}': {$lesson->getCourse()->getName()}</info>");
                    }

                    $batch_count++;

                    if (($batch_count % self::BATCH_SIZE) === 0) {
                        $this->entityManager->flush();
                        $this->entityManager->clear();

                        $teacher = $this->teacherRepository->findOneBy(['name' => $teacherName]);

                        $output->writeln("<info>Processed {$batch_count} lessons</info>");
                    }
                }
            }

            $this->entityManager->flush();
            $this->entityManager->commit();

            $output->writeln('<info>All teacher schedules imported successfully.</info>');
            return Command::SUCCESS;
        } catch (Exception $e) {
            $this->entityManager->rollback();
            $output->writeln('<error>Failed to import teacher schedules: ' . $e->getMessage() . '</error>');
            return Command::FAILURE;
        }
    }

    private function processLessonData(array $data, Teacher $teacher, OutputInterface $output): ?Lesson
    {
        try {
            $courseName = $data['subject'] ?? null;
            if (!$courseName) {
                $output->writeln('<info>No course name in lesson data</info>');
                return null;
            }
            $course = $this->getCourse($courseName, $output);

            $group = null;
            $groupName = $data['group_name'] ?? null;
            if ($groupName) {
                $tokName = $data['tok_name'] ?? '';
                $isStationary = $this->determineStationary($tokName);
                $group = $this->getGroup($groupName, $isStationary, $output);
            }

            $roomName = $data['room'] ?? null;
            if (!$roomName) {
                $output->writeln('<info>No room name in lesson data</info>');
                return null;
            }

            $room = $this->getRoom($roomName, $output);
            if (!$room) {
                return null;
            }

            $lessonType = $data['lesson_form'] ?? null;
            $lessonStatus = $data['status_item'] ?? 'normalne';

            $lesson = new Lesson();
            $lesson->setCourse($course);
            $lesson->setTeacher($teacher);
            $lesson->setGroup($group);
            $lesson->setRoom($room);
            $lesson->setStartTime(new \DateTime($data['start']));
            $lesson->setEndTime(new \DateTime($data['end']));
            $lesson->setType($lessonType);
            $lesson->setStatus($lessonStatus);

            return $lesson;
        } catch (Exception $e) {
            $output->writeln('<error>Error processing lesson data: ' . $e->getMessage() . '</error>');
            return null;
        }
    }

    private function getCourse(string $name, OutputInterface $output): ?Course
    {
        $course = $this->courseRepository->findOneBy(['name' => $name]);
        if (!$course) {
            $output->writeln("<info>Room '{$name}' not found in database</info>");
            return null;
        }

        return $course;
    }

    private function getGroup(string $name, bool $stationary, OutputInterface $output): ?Group
    {
        $group = $this->groupRepository->findOneBy([
            'name' => $name,
            'stationary' => $stationary
        ]);

        if ($group) {
            return $group;
        }

        $group = $this->groupRepository->findOneBy([
            'name' => $name,
            'stationary' => null
        ]);

        if ($group) {
            $group->setStationary($stationary);
            $this->entityManager->persist($group);
            $output->writeln("<info>Updated group '{$name}' stationary = " . ($stationary ? 'true' : 'false') . ".</info>");
            return $group;
        }

        $group = new Group();
        $group->setName($name);
        $group->setStationary($stationary);
        $this->entityManager->persist($group);
        $output->writeln("<info>Created new group '{$name}' stationary = " . ($stationary ? 'true' : 'false') . ".</info>");

        return $group;
    }

    private function getRoom(string $name, OutputInterface $output): ?Room
    {
        $room = $this->roomRepository->findOneBy(['name' => $name]);
        if (!$room) {
            $output->writeln("<info>Room '{$name}' not found in database</info>");
            return null;
        }

        return $room;
    }

    private function determineStationary(string $tokName): bool
    {
        $parts = explode('_', $tokName);
        return isset($parts[2]) && strtoupper($parts[2]) === 'S';
    }

    private function validateDate(string $date): bool
    {
        $d = \DateTime::createFromFormat('Y-m-d', $date);
        return $d->format('Y-m-d') === $date;
    }
}
