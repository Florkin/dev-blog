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
            'name' => 'Tristan',
            'age' => '30',
        );
        echo $twig->render('pages/article.twig', ['ex' => $ex]);
        return true;
    }

    public static function registration($twig, $page)
    {
        // If getting registration form
        if (null !== Globals::get('get', 'action') && null!==Globals::get('post', null) && Globals::get('get', 'action') == "register") {
            $formData = Globals::get('post', null);
            $user = new UserManager();
            $user->register($formData);
        } else {
            $registerForm = new Form('register');            
            $registerForm = $registerForm->renderForm();
            echo $twig->render('pages/registration.twig', ['registerForm' => $registerForm['form'], 'actionRegister' => $registerForm['action']]);
        };

        return true;
    }

    public static function login($twig)
    {
        $formData = Globals::get('post', null);
        $user = new UserManager();
        $user->login($formData, $twig);
    }

    public static function logout($twig)
    {
        $user = new UserManager();
        $user->logout();
    }


    public static function home($twig, $page)
    {
        echo $twig->render('pages/home.twig');
        return true;
    }

}
