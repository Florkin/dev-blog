<?php

namespace App\Controller;

use App\Controller\Form\PostForm;
use App\Controller\Form\UserForm;
use App\Controller\Form\CommentForm;
use App\Controller\Post\Comment;
use App\Controller\Post\Post;
use App\Controller\Post\PostsList;
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
        $commentForm = Self::getCommentForm($id);
        echo $twig->render('pages/post.twig', ['post' => $post->displaypost(), 'commentForm' => $commentForm['form'], 'actionComment' => $commentForm['action']]);

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
     * If getting POST from form, call register() function.
     * Else, display register form
     *
     * @param object $twig
     * @return void
     * @throws \Delight\Auth\AuthError
     */
    public static function registration(object $twig)
    {

        if (null !== Input::get('action') && null !== Input::post() && Input::get('action') == "register") {
            // case: register user
            $formData = Input::post();
            $user = new UserManager;
            $validator = $user->getValidator('register', $formData);
            if ($validator->isValid()) {
                $user->register($formData, $twig);
            } else {
                $messages = $validator->getErrors();
                $messages["status"] = "error";
                echo json_encode($messages);
            }

        } else {
            // case: Display user registration form
            $registerForm = Self::getRegisterForm();
            echo $twig->render('pages/registration.twig', ['registerForm' => $registerForm['form'], 'actionRegister' => $registerForm['action']]);
        };
    }

    public static function getRegisterForm(): array
    {
        $registerForm = new UserForm;
        return $registerForm->renderForm();
    }

    public function addComment($id_post)
    {
        $formData = Input::post();
        $comment = new Comment($id_post, $formData);
        $validator = $comment->getValidator($formData);
        if ($validator->isValid()) {
            $comment->addComment();
        } else {
            $messages = $validator->getErrors();
            $messages["status"] = "error";
            echo json_encode($messages);
        }

    }

    public static function getCommentForm($id): array
    {
        $commentForm = new CommentForm($id);
        return $commentForm->renderForm();
    }

    /**
     * Get login form data and call login() function
     *
     * @param $twig
     * @return void
     * @throws \Delight\Auth\AttemptCancelledException
     * @throws \Delight\Auth\AuthError
     */
    public static function login($twig)
    {
        $formData = Input::post();
        $user = new UserManager;

        $validator = $user->getValidator('login', $formData);
        if ($validator->isValid()) {
            $user->login($formData, $twig);
        } else {
            $messages = $validator->getErrors();
            $messages["status"] = "error";
            echo json_encode($messages);
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
