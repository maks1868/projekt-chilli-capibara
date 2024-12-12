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

    // Increase or adjust as needed
    private const BATCH_SIZE = 100;

    // Simple caches for frequently requested entities within a batch
    private array $courseCache = [];
    private array $groupCache = [];
    private array $roomCache = [];

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
        ini_set('memory_limit', '1024M');

        $start = '2024-10-01';
        $end = '2025-02-28';

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
            $httpClient = HttpClient::create();

            $startEncoded = urlencode($start . 'T00:00:00+01:00');
            $endEncoded = urlencode($end . 'T00:00:00+01:00');
            foreach ($teachers as $originalTeacher) {
                $teacherId = $originalTeacher->getId();
                $teacherName = $originalTeacher->getName();
                $teacherEncoded = urlencode($teacherName);

                $url = "https://plan.zut.edu.pl/schedule_student.php?teacher={$teacherEncoded}&start={$startEncoded}&end={$endEncoded}";

                $response = $httpClient->request('GET', $url);
                if ($response->getStatusCode() !== 200)
                    continue;


                $data = $response->toArray();

                if (empty($data) || $data === [[]])
                    continue;


                foreach ($data as $lessonData) {
                    if (($batch_count % self::BATCH_SIZE) === 0 && $batch_count > 0) {
                        $this->entityManager->flush();
                        $this->entityManager->clear();

                        $this->courseCache = [];
                        $this->groupCache = [];
                        $this->roomCache = [];

                        $teacher = $this->teacherRepository->find($teacherId);
                        if (!$teacher)
                            continue;

                        $output->writeln("<info>Processed {$batch_count} lessons so far</info>");
                    }
                    else
                        $teacher = $originalTeacher;


                    $lesson = $this->processLessonData($lessonData, $teacher);
                    if (!$lesson)
                        continue;


                    $this->entityManager->persist($lesson);
                    $batch_count++;
                }
            }

            $this->entityManager->flush();
            $this->entityManager->commit();

            $output->writeln("<info>All teacher schedules imported successfully. Total lessons: {$batch_count}</info>");
            return Command::SUCCESS;
        } catch (Exception $e) {
            $this->entityManager->rollback();
            $output->writeln('<error>Failed to import teacher schedules: ' . $e->getMessage() . '</error>');
            return Command::FAILURE;
        }
    }

    private function processLessonData(array $data, Teacher $teacher): ?Lesson
    {
        if (!isset($data['start']) || !isset($data['end']))
            return null;


        $courseName = $data['subject'] ?? null;
        $course = $this->getCourse($courseName);

        $group = null;
        $groupName = $data['group_name'] ?? null;
        if ($groupName) {
            $tokName = $data['tok_name'] ?? '';
            $isStationary = $this->determineStationary($tokName);
            $group = $this->getGroup($groupName, $isStationary);
        }

        $roomName = $data['room'] ?? null;
        $room = $this->getRoom($roomName);

        $lessonType = $this->determineLessonType($data['lesson_form'] ?? null);
        $lessonStatus = $this->determineLessonStatus($data['status_item'] ?? null);

        $teacherId = $teacher->getId();
        $teacher = $this->teacherRepository->find($teacherId);
        if (!$teacher)
            return null;


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
    }

    private function getCourse(?string $name): ?Course
    {
        if (!$name) return null;

        if (isset($this->courseCache[$name]))
            return $this->courseCache[$name];

        $course = $this->courseRepository->findOneBy(['name' => $name]);
        if (!$course) {
            $course = new Course();
            $course->setName($name);
            $this->entityManager->persist($course);
        }

        $this->courseCache[$name] = $course;
        return $course;
    }

    private function getGroup(string $name, bool $stationary): ?Group
    {
        $groupKey = $name . '|' . ($stationary ? '1' : '0');
        if (isset($this->groupCache[$groupKey]))
            return $this->groupCache[$groupKey];

        $group = $this->groupRepository->findOneBy(['name' => $name, 'stationary' => $stationary]);
        if ($group) {
            $this->groupCache[$groupKey] = $group;
            return $group;
        }

        $group = $this->groupRepository->findOneBy(['name' => $name, 'stationary' => null]);
        if ($group) {
            $group->setStationary($stationary);
            $this->entityManager->persist($group);
            $this->groupCache[$groupKey] = $group;
            return $group;
        }

        $group = new Group();
        $group->setName($name);
        $group->setStationary($stationary);
        $this->entityManager->persist($group);
        $this->groupCache[$groupKey] = $group;

        return $group;
    }

    private function getRoom(?string $name): ?Room
    {
        if (!$name) return null;

        if (isset($this->roomCache[$name]))
            return $this->roomCache[$name];

        $name_array = explode(' ', $name);
        array_shift($name_array);
        $cleanRoomName = implode(' ', $name_array);

        $room = $this->roomRepository->findOneBy(['name' => $cleanRoomName]);
        if (!$room)
            return null;

        $this->roomCache[$name] = $room;
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
        return $d && $d->format('Y-m-d') === $date;
    }

    private function determineLessonType(?string $lesson_form): int
    {
        return match($lesson_form) {
            'laboratorium' => Lesson::TYPE_LAB,
            'audytoryjne' => Lesson::TYPE_AUDITORY,
            'lektorat' => Lesson::TYPE_LECTORATE,
            'seminarium' => Lesson::TYPE_SEMINAR,
            'projekt' => Lesson::TYPE_PROJECT,
            default => Lesson::TYPE_LECTURE,
        };
    }

    private function determineLessonStatus(?string $lesson_status): int
    {
        return match($lesson_status) {
            'konsultacje' => Lesson::STATUS_COSNULT,
            'wyjątek' => Lesson::STATUS_EXCEPT,
            default => Lesson::STATUS_NORMAL,
        };
    }
}
