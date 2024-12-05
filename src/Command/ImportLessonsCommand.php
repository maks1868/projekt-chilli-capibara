<?php
// src/Command/ImportLessonsCommand.php

namespace App\Command;

use App\Entity\Course;
use App\Entity\Department;
use App\Entity\Group;
use App\Entity\Lesson;
use App\Entity\Room;
use App\Entity\Teacher;
use App\Repository\CourseRepository;
use App\Repository\DepartmentRepository;
use App\Repository\GroupRepository;
use App\Repository\RoomRepository;
use App\Repository\TeacherRepository;
use App\Repository\LessonRepository;
use DateTime;
use Doctrine\ORM\EntityManagerInterface;
use Exception;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;

class ImportLessonsCommand extends Command
{
    protected static $defaultName = 'app:import-lessons';
    protected static $defaultDescription = 'Import lessons from a JSON file into the database';

    private EntityManagerInterface $entityManager;
    private CourseRepository $courseRepository;
    private TeacherRepository $teacherRepository;
    private GroupRepository $groupRepository;
    private RoomRepository $roomRepository;
    private DepartmentRepository $departmentRepository;
    private LessonRepository $lessonRepository;

    // In-memory caches
    private array $courseCache = [];
    private array $teacherCache = [];
    private array $groupCache = [];
    private array $departmentCache = [];
    private array $roomCache = [];

    public function __construct(
        EntityManagerInterface $entityManager,
        CourseRepository       $courseRepository,
        TeacherRepository      $teacherRepository,
        GroupRepository        $groupRepository,
        RoomRepository         $roomRepository,
        DepartmentRepository   $departmentRepository,
        LessonRepository       $lessonRepository
    ) {
        parent::__construct();

        $this->entityManager = $entityManager;
        $this->courseRepository = $courseRepository;
        $this->teacherRepository = $teacherRepository;
        $this->groupRepository = $groupRepository;
        $this->roomRepository = $roomRepository;
        $this->departmentRepository = $departmentRepository;
        $this->lessonRepository = $lessonRepository;
    }

    protected function configure(): void
    {
        $this
            ->addArgument('jsonFile', InputArgument::REQUIRED, 'Path to the JSON file containing lessons data');
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $jsonFile = $input->getArgument('jsonFile');

        if (!file_exists($jsonFile)) {
            $output->writeln("<error>JSON file not found at path: $jsonFile</error>");
            return Command::FAILURE;
        }

        $jsonData = file_get_contents($jsonFile);
        $lessonsData = json_decode($jsonData, true);

        if (json_last_error() !== JSON_ERROR_NONE) {
            $output->writeln("<error>Invalid JSON format.</error>");
            return Command::FAILURE;
        }

        // Begin Transaction
        $this->entityManager->beginTransaction();
        try {
            foreach ($lessonsData as $index => $lessonData) {
                $lesson = $this->processLessonData($lessonData);

                // Check if lesson already exists
                $existingLesson = $this->lessonRepository->findOneBy([
                    'course' => $lesson->getCourse(),
                    'teacher' => $lesson->getTeacher(),
                    'group' => $lesson->getGroup(),
                    'room' => $lesson->getRoom(),
                    'start_time' => $lesson->getStartTime(),
                    'end_time' => $lesson->getEndTime(),
                    'type' => $lesson->getType()
                ]);

                if ($existingLesson) {
                    $output->writeln("<comment>Duplicate lesson found for lesson #" . ($index + 1) . ", skipping.</comment>");
                    continue;
                }

                $this->entityManager->persist($lesson);
                $output->writeln("<info>Processed lesson #" . ($index + 1) . " successfully.</info>");
            }

            $this->entityManager->flush();
            $this->entityManager->commit();

            $output->writeln("<info>Lessons imported successfully.</info>");
            return Command::SUCCESS;
        } catch (Exception $e) {
            $this->entityManager->rollback();
            $output->writeln("<error>Import failed: {$e->getMessage()}</error>");
            return Command::FAILURE;
        }
    }

    private function processLessonData(array $data): Lesson
    {
        // 1. Handle Course
        $courseName = $data['subject'] ?? $data['title'] ?? null;
        if (!$courseName) {
            throw new Exception("Course name is missing in lesson data.");
        }
        $course = $this->getCourse($courseName);

        // 2. Handle Teacher
        $teacherName = $data['worker'] ?? null;
        if (!$teacherName) {
            throw new Exception("Teacher name is missing in lesson data.");
        }
        $teacher = $this->getTeacher($teacherName);

        // 3. Handle Group
        $groupName = $data['group_name'] ?? null;
        if (!$groupName) {
            throw new Exception("Group name is missing in lesson data.");
        }
        $tokName = $data['tok_name'] ?? '';
        $isStationary = $this->determineStationary($tokName);
        $group = $this->getGroup($groupName, $isStationary);

        // 4. Handle Room
        $roomName = $data['room'] ?? null;
        if (!$roomName) {
            throw new Exception("Room name is missing in lesson data.");
        }
        $room = $this->getRoom($roomName);

        // 5. Handle Lesson Type
        $lessonType = $data['lesson_form'] ?? 'Unknown';

        // 6. Create Lesson
        $lesson = new Lesson();
        $lesson->setCourse($course);
        $lesson->setTeacher($teacher);
        $lesson->setGroup($group);
        $lesson->setRoom($room);
        $lesson->setStartTime(new DateTime($data['start']));
        $lesson->setEndTime(new DateTime($data['end']));
        $lesson->setType($lessonType);

        return $lesson;
    }

    private function getCourse(string $name): Course
    {
        if (isset($this->courseCache[$name])) {
            return $this->courseCache[$name];
        }

        $course = $this->courseRepository->findOneBy(['name' => $name]);
        if (!$course) {
            $course = new Course();
            $course->setName($name);
            $this->entityManager->persist($course);
            $this->courseCache[$name] = $course;
        }

        return $course;
    }

    private function getTeacher(string $name): Teacher
    {
        if (isset($this->teacherCache[$name])) {
            return $this->teacherCache[$name];
        }

        $teacher = $this->teacherRepository->findOneBy(['name' => $name]);
        if (!$teacher) {
            $teacher = new Teacher();
            $teacher->setName($name);
            $this->entityManager->persist($teacher);
            $this->teacherCache[$name] = $teacher;
        }

        return $teacher;
    }

    private function getGroup(string $name, bool $stationary): Group
    {
        $key = $name . '|' . ($stationary ? '1' : '0');

        if (isset($this->groupCache[$key])) {
            return $this->groupCache[$key];
        }

        $group = $this->groupRepository->findOneBy(['name' => $name, 'stationary' => $stationary]);
        if (!$group) {
            $group = new Group();
            $group->setName($name);
            $group->setStationary($stationary);
            $this->entityManager->persist($group);
            $this->groupCache[$key] = $group;
        }

        return $group;
    }

    private function getRoom(string $name): Room
    {
        if (isset($this->roomCache[$name])) {
            return $this->roomCache[$name];
        }

        $room = $this->roomRepository->findOneBy(['name' => $name]);
        if (!$room) {
            $departmentName = $this->getDepartmentName($name);
            if (!$departmentName) {
                throw new Exception("Department name could not be extracted from room name: $name");
            }

            $department = $this->getDepartment($departmentName);
            $room = new Room();
            $room->setName($name);
            $room->setDepartment($department);
            $this->entityManager->persist($room);
            $this->roomCache[$name] = $room;
        }

        return $room;
    }

    private function getDepartment(string $name): Department
    {
        if (isset($this->departmentCache[$name])) {
            return $this->departmentCache[$name];
        }

        $department = $this->departmentRepository->findOneBy(['name' => $name]);
        if (!$department) {
            $department = new Department();
            $department->setName($name);
            $this->entityManager->persist($department);
            $this->departmentCache[$name] = $department;
        }

        return $department;
    }

    private function getDepartmentName(string $roomName): string
    {
        // Trim any leading/trailing whitespace
        $trimmedRoomName = trim($roomName);

        // Check if the room name is empty after trimming
        if (empty($trimmedRoomName)) {
            return '';
        }

        // Split the room name by space
        $parts = explode(' ', $trimmedRoomName);

        // Return the first part as the department name, normalized to uppercase
        return strtoupper($parts[0]);
    }

    private function determineStationary(string $tokName): bool
    {
        $parts = explode('_', $tokName);
        return isset($parts[2]) && strtoupper($parts[2]) === 'S';
    }
}
