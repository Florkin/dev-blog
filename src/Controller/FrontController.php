<?php

namespace App\Controller;

use \App\Model\Globals;

/**
 * FrontController for navigation
 * Every function is called from App/Routes
 */
abstract class FrontController
{
    /**
     * Display Post page depending of post id
     *
     * @param integer $id
     * @param object $twig
     * @return void
     */
    public static function post(int $id, object $twig)
    {
        $post = new \App\Controller\Post\Post($id);
        echo $twig->render('pages/post.twig', ['post' => $post->displaypost()]);

    }

    /**
     * Display listing posts page
     *
     * @param object $twig
     * @return void
     */
    public static function postslist(object $twig)
    {
        $postslist = new \App\Controller\Post\PostsList('all');
        $posts = $postslist->getPosts();
        echo $twig->render('pages/posts-list.twig', ['posts' => $posts]);

    }

    /**
     * If getting POST from form, call addpost() function.
     * Else, display post form
     *
     * @param object $twig
     * @return void
     */
    public static function postform(object $twig = null)
    {
        if (null !== Globals::get('get', 'action') && null !== Globals::get('post', null) && Globals::get('get', 'action') == "add") {
            $formData = Globals::get('post', null);
            $post = new \App\Model\Manager\PostManager;
            $post->addpost($formData);
        } else {
            $postForm = new \App\Controller\Form\PostForm;
            $postForm = $postForm->renderForm();
            echo $twig->render('pages/postform.twig', ['postForm' => $postForm['form'], 'actionAddpost' => $postForm['action']]);
        }

    }

    /**
     * If getting POST from form, call register() function.
     * Else, display register form
     *
     * @param object $twig
     * @return void
     */
    public static function registration(object $twig = null)
    {
        if (null !== Globals::get('get', 'action') && null !== Globals::get('post', null) && Globals::get('get', 'action') == "register") {
            $formData = Globals::get('post', null);
            $user = new \App\Model\Manager\UserManager;
            $user->register($formData);
        } else {
            $registerForm = new \App\Controller\Form\UserForm;
            $registerForm = $registerForm->renderForm();
            echo $twig->render('pages/registration.twig', ['registerForm' => $registerForm['form'], 'actionRegister' => $registerForm['action']]);
        };

    }

    /**
     * Get login form data and call login() function
     *
     * @return void
     */
    public static function login()
    {
        $formData = Globals::get('post', null);
        $user = new \App\Model\Manager\UserManager;
        $user->login($formData);

    }

    /**
     * Call logout() function
     *
     * @return void
     */
    public static function logout()
    {
        $user = new \App\Model\Manager\UserManager;
        $user->logout();

    }

    /**
     * Display Home page with $quantity of last articles (PostList($quantity))
     *
     * @param object $twig
     * @return void
     */
    public static function home(object $twig)
    {
        $postslist = new \App\Controller\Post\PostsList(3);
        $posts = $postslist->getPosts();
        echo $twig->render('pages/home.twig', ['posts' => $posts]);

    }

}
