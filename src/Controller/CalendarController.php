<?php

namespace App\Controller;

use App\Entity\Teacher;
use App\Form\CalendarQueryType;
use App\Repository\TeacherRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Attribute\MapQueryParameter;
use Symfony\Component\Routing\Attribute\Route;

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


}


