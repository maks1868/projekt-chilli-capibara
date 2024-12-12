<?php

namespace App\Controller;

use App\Entity\Teacher;
use App\Form\CalendarQueryType;
use App\Repository\CourseRepository;
use App\Repository\GroupRepository;
use App\Repository\StudentRepository;
use App\Repository\TeacherRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Attribute\MapQueryParameter;
use Symfony\Component\Routing\Attribute\Route;
use App\Repository\RoomRepository;
use App\Repository\LessonRepository;
use Symfony\Component\HttpFoundation\Request;

class CalendarController extends AbstractController
{
    #[Route('/calendar', name: 'app_calendar')]
    public function index(
//        #[MapQueryParameter(name: 'query')]
//        array $queries,
    \Symfony\Component\HttpFoundation\Request $request
    ): Response
    {
        // Tworzenie formularza
        $form = $this->createForm(CalendarQueryType::class);

        // Obsługa żądania (np. przesłanie danych z formularza)
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            // Pobierz dane z formularza
            $formData = $form->getData();

            // Przykładowa logika z użyciem danych
            // Możesz tutaj przetworzyć formularz, zapisać dane w bazie itp.
            return $this->redirectToRoute('app_calendar', [
                'submitted' => true, // Przykładowy parametr w URL
            ]);
        }

        // Wczytanie treści CSS i JS (jeśli konieczne)
        $cssContent = file_get_contents('../assets/styles/app.css');
        $jsContent = file_get_contents('../assets/app.js');

        // Renderowanie widoku
        return $this->render('calendar/index.html.twig', [
            'cssContent' => $cssContent,
            'jsContent' => $jsContent,
            'form' => $form->createView(), // Przekazanie formularza do widoku




        ]);
    }


    #[Route('/calendar/autocomplete-teacher', name: 'autocomplete_teacher')]
    public function autocompleteTeacher(\Symfony\Component\HttpFoundation\Request $request, TeacherRepository $repository): JsonResponse
    {
        $query = $request->query->get('q', ''); // Domyślnie puste zapytanie

        // Wyszukiwanie nauczycieli według zapytania
        $teachers = $repository->findBySearchQuery($query);

        // Zwracanie wyników w formacie JSON
        $results = array_map(static function (Teacher $teacher) {
            return [
                'id' => $teacher->getId(),
                'text' => $teacher->getName(),
            ];
        }, $teachers);

        return new JsonResponse(['results' => $results]);
    }


    #[Route('/calendar/search', name: 'calendar_search')]
    public function search(
        Request $request,
        TeacherRepository $teacherRepository,
        RoomRepository $roomRepository,
        CourseRepository $courseRepository,
        GroupRepository $groupRepository,
        StudentRepository $studentRepository,
        LessonRepository $lessonRepository
    ): JsonResponse {
        // Pobierz parametry filtrów z zapytania
        $teacherParam = $request->query->get('teacher');
        $roomParam = $request->query->get('room');
        $courseParam = $request->query->get('course');
        $groupParam = $request->query->get('group');
        $studentParam = $request->query->get('student');

        // Budowanie dynamicznego zapytania za pomocą QueryBuilder
        $queryBuilder = $lessonRepository->createQueryBuilder('l');

        if ($teacherParam) {
            $queryBuilder
                ->join('l.teacher', 't')
                ->andWhere('t.name = :teacher')
                ->setParameter('teacher', $teacherParam);
        }

        if ($roomParam) {
            $queryBuilder
                ->join('l.room', 'r')
                ->andWhere('r.name = :room')
                ->setParameter('room', $roomParam);
        }

        if ($courseParam) {
            $queryBuilder
                ->join('l.course', 'c')
                ->andWhere('c.name = :course')
                ->setParameter('course', $courseParam);
        }

        if ($groupParam) {
            $queryBuilder
                ->join('l.group', 'g')
                ->andWhere('g.name = :group')
                ->setParameter('group', $groupParam);
        }

        if ($studentParam) {
            $queryBuilder
                ->join('l.group', 'g_student')
                ->join('g_student.students', 's')
                ->andWhere('s.name = :student')
                ->setParameter('student', $studentParam);
        }

        // Pobranie wyników
        $lessons = $queryBuilder->getQuery()->getResult();

        // Przygotowanie danych do zwrotu
        $lessonsData = array_map(function ($lesson) {
            return [
                'id' => $lesson->getId(),
                'course' => $lesson->getCourse()->getName(),
                'teacher' => $lesson->getTeacher()->getName(),
                'group' => $lesson->getGroup()->getName(),
                'room' => $lesson->getRoom()->getName(),
                'start_time' => $lesson->getStartTime()->format('Y-m-d H:i:s'),
                'end_time' => $lesson->getEndTime()->format('Y-m-d H:i:s'),
                'type' => $lesson->getType(),
            ];
        }, $lessons);

        // Zwrot JSON z danymi
        return new JsonResponse([
            'status' => 'success',
            'message' => count($lessonsData) > 0 ? 'Lessons found.' : 'No lessons found.',
            'data' => $lessonsData,
        ]);
    }

}

