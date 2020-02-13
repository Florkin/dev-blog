<?php

abstract class PageController
{
    public static function post($twig, $id){
        $post = new Post($id);
        echo $twig->render('pages/post.twig', ['post' => $post->displaypost()]);
    }

    public static function postslist($twig)
    {
        $postslist = new PostsList('all');
        $posts = $postslist->getPosts();
        echo $twig->render('pages/posts-list.twig', ['posts' => $posts]);        
        return true;
    }

    public static function postform($twig)
    {
        // If getting post form POST
        if (null !== Globals::get('get', 'action') && null!==Globals::get('post', null) && Globals::get('get', 'action') == "add") {            
            $post = new PostManager();
            $post->addpost();
        } else {
            $postForm = new PostForm;
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
            $user = new UserManager;
            $user->register($formData);
        } else {
            $registerForm = new UserForm;            
            $registerForm = $registerForm->renderForm();
            echo $twig->render('pages/registration.twig', ['registerForm' => $registerForm['form'], 'actionRegister' => $registerForm['action']]);
        };

        return true;
    }

    public static function login($twig)
    {
        $formData = Globals::get('post', null);
        $user = new UserManager;
        $user->login($formData, $twig);
    }

    public static function logout($twig)
    {
        $user = new UserManager;
        $user->logout();
        return true;
    }


    public static function home($twig)
    {        
        $postslist = new PostsList(3);
        $posts = $postslist->getPosts();
        echo $twig->render('pages/home.twig', ['posts' => $posts]);        
        return true;
    }

}
