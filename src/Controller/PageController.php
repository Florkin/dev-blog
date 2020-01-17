<?php

class PageController
{
    public static function listing($twig, $page)
    {
        echo $twig->render('pages/listing.twig', ['title' => $page]);
        return true;
    }

    public static function article($twig, $page)
    {
        $ex = array(
            'name' => 'Tristan',
            'age' => '30',
        );
        echo $twig->render('pages/article.twig', ['ex' => $ex]);
        return true;
    }

    public static function registration($twig, $page)
    {
        // If getting registration form
        if (null !== SuperGlobalManager::get('get', 'action') && SuperGlobalManager::get('get', 'action') == "register") {
            $formData = SuperGlobalManager::get('post', null);
            User::register($formData);
        } else {
            $form = User::registrationForm();
            $actionRegister = Config::BASE_URL . "/?page=registration&action=register";

            echo $twig->render('pages/registration.twig', ['form' => $form, 'actionRegister' => $actionRegister]);
        };

        return true;
    }

    public static function login()
    {
        $formData = SuperGlobalManager::get('post', null);
        User::login($formData);
    }


    public static function home($twig, $page)
    {
        echo $twig->render('pages/home.twig', ['name' => 'Fabien']);
        return true;
    }

}
