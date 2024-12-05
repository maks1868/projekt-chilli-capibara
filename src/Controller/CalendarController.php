<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Attribute\MapQueryParameter;
use Symfony\Component\Routing\Attribute\Route;

class CalendarController extends AbstractController
{
    #[Route('/calendar', name: 'app_calendar')]
    public function index(
//        #[MapQueryParameter(name: 'query')]
//        array $queries,
    ): Response
    {
        $cssContent = file_get_contents('../assets/styles/app.css');
        $jsContent = file_get_contents('../assets/app.js');

//        print_r($queries);



        return $this->render('calendar/index.html.twig', [
            'cssContent' => $cssContent,
            'jsContent' => $jsContent,
//            'queries' => $queries,
        ]);
    }
}


