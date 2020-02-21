<?php

namespace App\Controller;

use \App\Model\Globals;

abstract class RouteController
{
    public static function post($id, $twig){
        $post = new \App\Controller\Post\Post($id);
        echo $twig->render('pages/post.twig', ['post' => $post->displaypost()]);
    }

    public static function postslist($twig)
    {
        $postslist = new \App\Controller\Post\PostsList('all');
        $posts = $postslist->getPosts();
        echo $twig->render('pages/posts-list.twig', ['posts' => $posts]);        
        return true;
    }

    public static function postform($twig = null)
    {        
        // If getting post form POST
        if (null !== Globals::get('get', 'action') && null!==Globals::get('post', null) && Globals::get('get', 'action') == "add") {
            $post = new \App\Model\Manager\PostManager;
            $post->addpost();
        } else {
            $postForm = new \App\Controller\Form\PostForm;
            $postForm = $postForm->renderForm();
            echo $twig->render('pages/postform.twig', ['postForm' => $postForm['form'], 'actionAddpost' => $postForm['action']]);
        }
        return true;
    }

    public static function registration($twig)
    {
        // If getting registration form POST
        if (null !== Globals::get('get', 'action') && null!==Globals::get('post', null) && Globals::get('get', 'action') == "register") {            
            $formData = Globals::get('post', null);         
            $user = new \App\Model\Manager\UserManager;
            $user->register($formData);
        } else {
            $registerForm = new \App\Controller\Form\UserForm;            
            $registerForm = $registerForm->renderForm();
            echo $twig->render('pages/registration.twig', ['registerForm' => $registerForm['form'], 'actionRegister' => $registerForm['action']]);
        };

        return true;
    }

    public static function login()
    {
        $formData = Globals::get('post', null);
        $user = new \App\Model\Manager\UserManager;
        $user->login($formData);
    }

    public static function logout()
    {
        $user = new \App\Model\Manager\UserManager;
        $user->logout();
        return true;
    }


    public static function home($twig)
    {        
        $postslist = new \App\Controller\Post\PostsList(3);
        $posts = $postslist->getPosts();
        echo $twig->render('pages/home.twig', ['posts' => $posts]);        
        return true;
    }

}
