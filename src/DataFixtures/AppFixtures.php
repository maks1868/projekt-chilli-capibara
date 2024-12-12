<?php

namespace App\DataFixtures;

use App\Entity\Course;
use App\Entity\Department;
use App\Entity\Group;
use App\Entity\Lesson;
use App\Entity\Room;
use App\Entity\Student;
use App\Entity\Teacher;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class AppFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {

        // Tworzenie działów
        $department1 = new Department();
        $department1->setName("Nauki Ścisłe");
        $manager->persist($department1);

        $department2 = new Department();
        $department2->setName("Humanistyka");
        $manager->persist($department2);

        // Tworzenie sal
        $room1 = new Room();
        $room1->setName("Sala 101");
        $room1->setDepartment($department1);
        $manager->persist($room1);

        $room2 = new Room();
        $room2->setName("Sala 102");
        $room2->setDepartment($department2);
        $manager->persist($room2);

        // Tworzenie kursów
        $course1 = new Course();
        $course1->setName("Matematyka");
        $manager->persist($course1);

        $course2 = new Course();
        $course2->setName("Historia");
        $manager->persist($course2);

        // Tworzenie nauczycieli
        $teacher1 = new Teacher();
        $teacher1->setName("Jan Kowalski");
        $manager->persist($teacher1);

        $teacher2 = new Teacher();
        $teacher2->setName("Anna Nowak");
        $manager->persist($teacher2);

        // Tworzenie grup
        $group1 = new Group();
        $group1->setName("Grupa A");
        $group1->setStationary(true);
        $manager->persist($group1);

        $group2 = new Group();
        $group2->setName("Grupa B");
        $group2->setStationary(false);
        $manager->persist($group2);

        // Tworzenie studentów
        $student1 = new Student();
        $student1->setId(12345); // Identyfikator studenta
        $student1->setGroup($group1);
        $manager->persist($student1);

        $student2 = new Student();
        $student2->setId(67890);
        $student2->setGroup($group1);
        $manager->persist($student2);

        $student3 = new Student();
        $student3->setId(11223);
        $student3->setGroup($group2);
        $manager->persist($student3);

        $student4 = new Student();
        $student4->setId(44556);
        $student4->setGroup($group2);
        $manager->persist($student4);


        // Tworzenie lekcji
        $lesson1 = new Lesson();
        $lesson1->setCourse($course1);
        $lesson1->setGroup($group1);
        $lesson1->setTeacher($teacher1);
        $lesson1->setRoom($room1);
        $lesson1->setStartTime(new \DateTime('2024-12-12 08:00:00'));
        $lesson1->setEndTime(new \DateTime('2024-12-12 09:30:00'));
        $lesson1->setType("Wykład");
        $manager->persist($lesson1);

        $lesson2 = new Lesson();
        $lesson2->setCourse($course2);
        $lesson2->setGroup($group2);
        $lesson2->setTeacher($teacher2);
        $lesson2->setRoom($room2);
        $lesson2->setStartTime(new \DateTime('2024-12-12 10:00:00'));
        $lesson2->setEndTime(new \DateTime('2024-12-12 11:30:00'));
        $lesson2->setType("Ćwiczenia");
        $manager->persist($lesson2);

        // Dodanie kolejnych lekcji
        $lesson3 = new Lesson();
        $lesson3->setCourse($course1);
        $lesson3->setGroup($group2);
        $lesson3->setTeacher($teacher2);
        $lesson3->setRoom($room1);
        $lesson3->setStartTime(new \DateTime('2024-12-13 08:00:00'));
        $lesson3->setEndTime(new \DateTime('2024-12-13 09:30:00'));
        $lesson3->setType("Laboratorium");
        $manager->persist($lesson3);

        $lesson4 = new Lesson();
        $lesson4->setCourse($course2);
        $lesson4->setGroup($group1);
        $lesson4->setTeacher($teacher1);
        $lesson4->setRoom($room2);
        $lesson4->setStartTime(new \DateTime('2024-12-13 10:00:00'));
        $lesson4->setEndTime(new \DateTime('2024-12-13 11:30:00'));
        $lesson4->setType("Seminarium");
        $manager->persist($lesson4);


        // Zapis danych do bazy
        $manager->flush();
    }
}
