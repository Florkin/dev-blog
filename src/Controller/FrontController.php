<?php

namespace App\Controller;

use App\Controller\Form\PasswordResetForm;
use App\Controller\Form\PostForm;
use App\Controller\Form\UserForm;
use App\Controller\Form\CommentForm;
use App\Controller\Post\Comment;
use App\Controller\Post\Post;
use App\Controller\Post\PostsList;
use App\Controller\Validator\Session;
use App\Model\Manager\CommentManager;
use App\Model\Manager\ContactManager;
use App\Model\Manager\PasswordManager;
use App\Model\Manager\UserManager;
use App\Tools;
use GuzzleHttp\Client;
use \Balambasik\Input;
use Twig\Environment;

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
     * @param Environment $twig
     * @return void
     */
    public static function post(int $id, Environment $twig)
    {
        $post = new Post($id);
        $commentForm = Self::getCommentForm($id);
        $getComments = new CommentManager();
        $comments = $getComments->getActiveCommentsByPostId($id);
        print_r($twig->render('pages/post.twig', ['post' => $post->displaypost(), 'comments' => $comments, 'commentForm' => $commentForm['form'], 'actionComment' => $commentForm['action']]));

    }

    /**
     * Display listing posts page
     *
     * @param Environment $twig
     * @return void
     */
    public static function postslist(Environment $twig)
    {
        $postslist = new PostsList(0);
        $posts = $postslist->getPosts();
        print_r($twig->render('pages/posts-list.twig', ['posts' => $posts]));

    }

    /**
     * If getting POST from form, call register() function.
     * Else, display register form
     *
     * @param Environment $twig
     * @return void
     * @throws \Delight\Auth\AuthError
     */
    public static function registration(Environment $twig)
    {

        if (null !== Input::get('action') && null !== Input::post() && Input::get('action') == "register") {
            // case: register user
            $formData = Input::post();
            $user = new UserManager;
            $validator = $user->getValidator('register', $formData);
            if ($validator->isValid()) {
                $messages = $user->register($formData, $twig);
            } else {
                $messages = $validator->getErrors();
                $messages["status"] = "error";
            }

            $flash = new Session($messages);
            $flash->setMessages();

            // If error, get form data to refill form
            if ($messages["status"] == "error") {
                unset($formData['password']);
                $formDataGetter = new Session($formData);
                $formDataGetter->setFormdata();
            }
            Tools::redirect(_CURRENT_URL_,301);


        } else {
            // case: Display user registration form
            $registerForm = Self::getRegisterForm();
            print_r($twig->render('pages/registration.twig', ['registerForm' => $registerForm['form'], 'actionRegister' => $registerForm['action']]));
        };
    }

    /**
     * @return array
     *
     * Get register form elements
     */
    public static function getRegisterForm(): array
    {
        $registerForm = new UserForm;
        return $registerForm->renderForm();
    }

    /**
     * @param int $id
     * @param bool $modify Is modification or add?
     */
    public function addComment(int $id, bool $modify = false)
    {
        $formData = Input::post();
        $comment = new CommentManager();

        $validator = $comment->getValidator($formData);
        if ($validator->isValid()) {
            $messages = $comment->addComment($formData, $id, $modify);
        } else {
            $messages = $validator->getErrors();
            $messages["status"] = "error";
        }

        $flash = new Session($messages);
        $flash->setMessages();

        // If error, get form data to refill form
        $formDataGetter = new Session($formData);
        if ($messages["status"] == "error") {
            $formDataGetter->setFormdata();
        } else {
            $formDataGetter->deleteFormdata();
        }
        Tools::redirect(_CURRENT_URL_ . "#comments",301);


    }

    /**
     * @param int $id
     * @return array
     *
     * Get comment form elements
     */ 
    public static function getCommentForm(int $id): array
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
            $messages = $user->login($formData, $twig);
        } else {
            $messages = $validator->getErrors();
            $messages["status"] = "error";
        }

        $flash = new Session($messages);
        $flash->setMessages();

        // If error, get form data to refill form
        if ($messages["status"] == "error") {
            unset($formData['password']);
            $formDataGetter = new Session($formData);
            $formDataGetter->setFormdata();
        }
        Tools::redirect(_ADMIN_URL_,301);
    }

    /**
     * Call logout() function
     *
     * @return void
     */
    public static function logout()
    {
        $user = new UserManager;
        $messages = $user->logout();
        $flash = new Session($messages);
        $flash->setMessages();

        Tools::redirect(_BASE_URL_,301);
    }

    /**
     * Send message from contact form
     */
    public static function sendMessage()
    {
        $formData = Input::post();
        $contact = new ContactManager($formData);
        $validator = $contact->getValidator();

        if ($validator->isValid()) {
            $messages = $contact->sendMessage();
        } else {
            $messages = $validator->getErrors();
            $messages["status"] = "error";
        }

        $flash = new Session($messages);
        $flash->setMessages();

        // If error, get form data to refill form
        if ($messages["status"] == "error") {
            $formDataGetter = new Session($formData);
            $formDataGetter->setFormdata();
        }
        Tools::redirect(_CURRENT_URL_,301);
    }

    /**
     * @param string $selector
     * @param string $token
     * @throws \Delight\Auth\AuthError
     *
     * Email verifying
     */
    public function verifyEmail(string $selector, string $token)
    {
        $messages = UserManager::verifyEmail($selector, $token);
        $flash = new Session($messages);
        $flash->setMessages();
        Tools::redirect(_CURRENT_URL_,301);
    }

    /**
     * @param bool $post
     * @param Environment|null $twig
     * @throws \Delight\Auth\AuthError
     *
     * Send email for reset password
     */
    public function resetPasswordSendEmail(bool $post = false, Environment $twig = null)
    {
        if ($post) {
            $formData = Input::post();
            $password = new PasswordManager;
            $validator = $password->getValidator('email', $formData);
            if ($validator->isValid()) {
                $messages = $password->sendResetPasswordEmail(Input::post('email'));

            } else {
                $messages = $validator->getErrors();
                $messages["status"] = "error";
            }

            $flash = new Session($messages);
            $flash->setMessages();
            Tools::redirect(_BASE_URL_,301);

        } else {
            $passwordResetForm = Self::getPasswordResetForm(false);
            print_r($twig->render('pages/password-reset.twig', ['passwordResetForm' => $passwordResetForm['form'], 'actionResetPassword' => $passwordResetForm['action']]));
        }
    }

    /**
     * @param string|null $selector
     * @param string|null $token
     * @param bool $post
     * @param Environment|null $twig
     * @throws \Delight\Auth\AuthError
     *
     * Set new password
     */
    public function newPassword(string $selector = null, string $token = null, $post = false, Environment $twig = null)
    {
        $password = new PasswordManager;

        if ($post) {
            $formData = Input::post();
            $validator = $password->getValidator('password', $formData);
            if ($validator->isValid()) {
                if ($formData['password'] === $formData['password-confirm']){
                    $messages = $password->changePassword($formData);
                } else {
                    $messages["status"] = "error";
                    $messages["message"] = "Les mots de passe ne sont pas identiques";
                }
            } else {
                $messages = $validator->getErrors();
                $messages["status"] = "error";
            }

            $flash = new Session($messages);
            $flash->setMessages();

            if ($messages["status"] == "error"){
                Tools::redirect(_CURRENT_URL_,301);
            } else {
                Tools::redirect(_BASE_URL_,301);

            }

        } else {
            if ($password->canResetPassword($selector, $token) == true) {
                $passwordResetForm = Self::getPasswordResetForm(true, $selector, $token);
                print_r($twig->render('pages/password-reset.twig', ['passwordResetForm' => $passwordResetForm['form'], 'actionResetPassword' => $passwordResetForm['action']]));
            } else {
                $messages = $password->canResetPassword($selector, $token);
                $flash = new Session($messages);
                $flash->setMessages();
                Tools::redirect(_CURRENT_URL_,301);
            }
        }
    }

    /**
     * @param bool $password
     * @param string|null $selector
     * @param string|null $token
     * @return array
     *
     * Get password reset form elements
     */
    public function getPasswordResetForm(bool $password = false, string $selector = null, string $token = null) : array
    {
        $passwordResetForm = new PasswordResetForm();
        return $passwordResetForm->renderForm($password, $selector, $token);
    }

    /**
     * Display Home page with $quantity of last articles (PostList($quantity))
     *
     * @param Environment $twig
     * @return void
     */
    public static function home(Environment $twig)
    {
        $postslist = new PostsList(3);
        $posts = $postslist->getPosts();

        // ======================== CONTACT FORM =============================
        $contactForm = new \App\Controller\Form\ContactForm;
        $contactForm = $contactForm->renderForm();

        print_r($twig->render('pages/home.twig', ['posts' => $posts]));
    }

    /**
     * @param Environment $twig
     *
     * Display contact page
     */
    public static function contact(Environment $twig)
    {
        $contactForm = new \App\Controller\Form\ContactForm;
        $contactForm = $contactForm->renderForm();

        print_r($twig->render('pages/contact.twig', ['contactForm' => $contactForm['form'], 'actionContact' => $contactForm['action']]));
    }

    /**
     * @param Environment $twig
     * @param string $message
     *
     * Display page for unauthorized action
     */
    public function unauthorized(Environment $twig, string $message)
    {
        print_r($twig->render('pages/unauthorized.twig', ['message' => $message]));
    }

    /**
     * @param Environment $twig
     *
     * 404 page
     */
    public function notFound(Environment $twig)
    {
        print_r($twig->render('pages/notfound.twig'));
    }
}
