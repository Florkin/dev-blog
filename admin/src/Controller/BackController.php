<?php


namespace Admin\Controller;

use Admin\Controller\Form\PostForm;
use Admin\Model\Manager\AdminPostManager;
use Admin\Controller\Post\AdminPostsList;
use App\Config;
use Admin\Controller\Post\AdminPost;
use App\Controller\Form\CommentForm;
use App\Controller\Form\UserForm;
use App\Controller\FrontController;
use App\Controller\User\User;
use App\Controller\Validator\Session;
use App\Model\Manager\CommentManager;
use App\Model\Manager\UserManager;
use App\Tools;
use Balambasik\Input;
use Twig\Environment;

/**
 * Class BackController
 * @package Admin\Controller
 *
 * Front Controller to get values and call templates (Admin only)
 *
 */
class BackController
{

    /**
     * @param int $id
     * @param object $twig
     *
     * Display Post and asociated comments (Admin only)
     */
    public static function post(int $id, Environment $twig)
    {
        $post = new AdminPost($id);
        $getComments = new CommentManager();
        $comments = $getComments->getAllCommentsByPostId($id);

        print_r($twig->render('admin/pages/admin-post.twig', ['post' => $post->displayPost(), 'comments' => $comments]));

    }

    /**
     * @param object $twig
     *
     * Display Post list (Admin only)
     */
    public static function adminList(Environment $twig)
    {
        $postslist = new AdminPostsList(0);
        $posts = $postslist->getPosts();
        print_r($twig->render('admin/pages/admin-list.twig', ['posts' => $posts]));
    }

    /**
     * @param object|null $twig
     * @param int|null $id_post
     * @param array|null $messages
     *
     * Display Post form (add post or modify)
     * POST request: Add or modify post process
     */
    public static function writePost(Environment $twig = null, int $id_post = null, array $messages = null)
    {
        if (null !== Input::get('action') && null !== Input::post() && Input::get('action') == "add") {
            // add post according to form data
            $post = new AdminPostManager;
            $formData = Input::post();

            $validator = $post->getValidator($formData);

            if ($validator->isValid()) {
                $messages = $post->addpost($formData, $twig);
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
            Tools::redirect(_CURRENT_URL_, 301);

        } else {
            // display post form
            $postForm = Self::getPostForm($id_post);
            print_r($twig->render('admin/pages/postform.twig', ['modifyPost' => $postForm['modifyPost'], 'postForm' => $postForm['form'], 'actionAddpost' => $postForm['action']]));
        }
    }

    /**
     * @param int $id_post
     * @return array
     *
     * Return post form elements
     */
    public static function getPostForm(int $id_post = null): array
    {
        $postForm = new PostForm;

        if (isset($id_post)) {
            $post = new AdminPostManager();
            return $postForm->renderForm($post->getContent($id_post));
        }
        return $postForm->renderForm();
    }

    /**
     * @param int $id
     * @param object $twig
     *
     * Display comment form
     */
    public function modifyComment(int $id, Environment $twig)
    {
        $commentForm = Self::getCommentForm($id);
        $comment = new CommentManager();
        print_r($twig->render('admin/pages/commentForm.twig', [
            'commentForm' => $commentForm['form'],
            'actionAddComment' => $commentForm['action'],
            'comment' => $comment->getContent($id)]));

    }

    /**
     * @param int $id_comment
     * @return array
     *
     * Return comment form elements
     */
    public static function getCommentForm(int $id_comment): array
    {
        $commentForm = new CommentForm;

        if (isset($id_comment)) {
            $comment = new CommentManager();
            return $commentForm->renderForm($comment->getContent($id_comment));
        }
        return $commentForm->renderForm();
    }

    /**
     * @param int $id_post
     *
     * Delete post handle request
     */
    public function deletePost(int $id_post)
    {
        $post = new AdminPostManager($id_post);
        if ($post->deletePost()) {
            Tools::redirect(_CURRENT_URL_, 301);
        }
    }

    /**
     * @param int $id_comment
     *
     * Delete comment handle request
     */
    public function deleteComment(int $id_comment)
    {
        $comment = new CommentManager();
        $comment->deleteComment($id_comment);
    }

    /**
     * @param object $twig
     *
     * List inactive comments handle request
     */
    public function inactiveCommentsList(Environment $twig)
    {
        $comment = new CommentManager();
        $comments = $comment->getAllInactiveComments();

        print_r($twig->render('admin/pages/admin-comments-list.twig', ['comments' => $comments]));
    }

    /**
     * @param object $twig
     *
     * List inactive posts handle request
     */
    public function inactivePostList(Environment $twig)
    {
        $postslist = new AdminPostsList();
        $posts = $postslist->getInactivePosts();
        print_r($twig->render('admin/pages/admin-inactive-list.twig', ['posts' => $posts]));
    }

    /**
     * @param object $twig
     *
     * Display user list
     */
    public function usersList(Environment $twig)
    {
        $users = UserManager::getUsersList();
        print_r($twig->render('admin/pages/usersList.twig', ['users' => $users]));
    }

    /**
     * @param int $id
     * @param object $twig
     *
     * Display User profile informations
     */
    public function userProfile(int $id, Environment $twig)
    {
        $user = new User($id);
        $userData = Tools::objectToArray($user);
        print_r($twig->render('admin/pages/user.twig', ['user' => $userData]));
    }

    /**
     * @param int $id
     * @param object $twig
     *
     * Display User modify form
     * POST request: Process user modify, get errors or sucess messages
     */
    public function userModify(int $id, Environment $twig)
    {
        $post = Input::post();

        if (!UserManager::isAdmin()) {
            unset($post["role"]);
        }

        if (isset($post) && $post !== null && $post !== []) {

            // change password
            $user = new UserManager($id);

            $validator = $user->getValidator('modify', $post);

            if ($validator->isValid()) {
                $messages = $user->modify($post);
            } else {
                $messages = $validator->getErrors();
            }

            $flash = new Session($messages);
            $flash->setMessages();

            Tools::redirect(_CURRENT_URL_, 301);

        } else {
            $user = new User($id);
            $values = Tools::objectToArray($user);
            $userForm = Self::getUserForm($values, $id);
            print_r($twig->render('admin/pages/userForm.twig', ['userForm' => $userForm['form'], 'actionUser' => $userForm['action']]));
        }
    }

    /**
     * @param array $values
     * @param null $id_user
     * @return array
     *
     * return user form elements
     */
    public function getUserForm(array $values, $id_user = null): array
    {
        $userForm = new UserForm();
        return $userForm->renderForm($values, true, $id_user);
    }

    /**
     * @param int $id
     *
     * Handle user delete request
     */
    public function userDelete(int $id)
    {
        $user = new UserManager($id);
        $messages = $user->deleteUserById();

        $flash = new Session($messages);
        $flash->setMessages();

        Tools::redirect(_ADMIN_URL_ . '/utilisateurs', 301);
    }

}
