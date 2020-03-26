<?php

namespace App\Controller;

use App\Controller\Form\PostForm;
use App\Controller\Form\UserForm;
use App\Controller\Post\Post;
use App\Controller\Post\PostsList;
use App\Model\Manager\PostManager;
use App\Model\Manager\UserManager;
use \Balambasik\Input;

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
        $post = new Post($id);
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
        $postslist = new PostsList(0);
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
    public static function postform(object $twig, array $messages = null)
    {
        if (null !== Input::get('action') && null !== Input::post() && Input::get('action') == "add") {
            // add post according to form data
            $post = new PostManager;
            $formData = Input::post();            
            $validator = $post->getValidator($formData);
            if ($validator->isValid()){
                $post->addpost($formData, $twig);
            } else {
                $messages = $validator->getErrors();
                $messages["status"] = "error";
                echo json_encode($messages);
            }
            
        } else {
            // display post form
            $postForm = Self::getPostForm();
            echo $twig->render('Pages/postform.twig', ['postForm' => $postForm['form'], 'actionAddpost' => $postForm['action']], $messages);
        }
    }

    public static function getPostForm()
    {
        $postForm = new PostForm;
        return $postForm->renderForm();
    }

    /**
     * If getting POST from form, call register() function.
     * Else, display register form
     *
     * @param object $twig
     * @return void
     */
    public static function registration(object $twig)
    {
        // case: register user
        if (null !== Input::get('action') && null !== Input::post() && Input::get('action') == "register") {
            $formData = Input::post();
            $user = new UserManager;
            $validator = $user->getValidator('register', $formData);
            if ($validator->isValid()) {
                $user->register($formData, $twig);                
            } else {
                $registerForm = Self::getRegisterForm();
                echo $twig->render('pages/registration.twig', ['registerForm' => $registerForm['form'], 'actionRegister' => $registerForm['action'], 'messages' => $validator->getErrors()]);
            }
            // case: Display user registration form
        } else {
            $registerForm = Self::getRegisterForm();
            echo $twig->render('pages/registration.twig', ['registerForm' => $registerForm['form'], 'actionRegister' => $registerForm['action']]);
        };

    }

    public static function getRegisterForm() : array
    {
        $registerForm = new UserForm;
        return $registerForm->renderForm();
    }

    /**
     * Get login form data and call login() function
     *
     * @param $twig
     * @return void
     */
    public static function login($twig)
    {
        $formData = Input::post();
        $user = new UserManager;
        
        $validator = $user->getValidator('login', $formData);
            if ($validator->isValid()) {
                $user->login($formData, $twig);                
            } else {
                echo $twig->render('pages/home.twig', ['messages' => $validator->getErrors()]);
            }

    }

    /**
     * Call logout() function
     *
     * @return void
     */
    public static function logout()
    {
        $user = new UserManager;
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
        $postslist = new PostsList(3);
        $posts = $postslist->getPosts();
        echo $twig->render('pages/home.twig', ['posts' => $posts]);

    }

}
