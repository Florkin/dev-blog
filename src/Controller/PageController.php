<?php

abstract class PageController
{
    public static function listing($twig, $page)
    {
        echo $twig->render('pages/listing.twig', ['title' => $page]);
        return true;
    }

    public static function article($twig, $page)
    {
        $ex = array(
            'name'=>'Tristan',
            'age' => '30',
        );
        echo $twig->render('pages/article.twig', ['ex' => $ex]);
        return true;
    }

    public static function home($twig, $page)
    {
        echo $twig->render('pages/home.twig', ['name' => 'Fabien']);
        return true;
    }

    
}