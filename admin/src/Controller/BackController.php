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

/**
 * Class BackController
 * @package Admin\Controller
 */
class BackController
{

    public static function post(int $id, object $twig)
    {
        $post = new AdminPost($id);
        $getComments = new CommentManager();
//        if (UserManager::isAdmin()) {
            $comments = $getComments->getAllCommentsByPostId($id);
//        } else {
//            $comments = $getComments->getActiveCommentsByPostId($id);
//        }

        print_r($twig->render('admin/pages/admin-post.twig', ['post' => $post->displayPost(), 'comments' => $comments]));

    }

    public static function adminList($twig)
    {
        $postslist = new AdminPostsList(0);
        $posts = $postslist->getPosts();
        print_r($twig->render('admin/pages/admin-list.twig', ['posts' => $posts]));
    }

    public static function writePost(object $twig = null, int $id_post = null, array $messages = null)
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
            header('Location: ' . _CURRENT_URL_);

        } else {
            // display post form
            $postForm = Self::getPostForm($id_post);
            print_r($twig->render('admin/pages/postform.twig', ['postForm' => $postForm['form'], 'actionAddpost' => $postForm['action']]));
        }
    }

    /**
     * @param int $id_post
     */
    public function deletePost(int $id_post)
    {
        $post = new AdminPostManager($id_post);
        if ($post->deletePost()) {
            header('Location: ' . _CURRENT_URL_);
        }
    }

    public function deleteComment(int $id_comment)
    {
        $comment = new CommentManager();
        $comment->deleteComment($id_comment);
    }

    public function inactiveCommentsList($twig)
    {
        $comment = new CommentManager();
        $comments = $comment->getAllInactiveComments();

        print_r($twig->render('admin/pages/admin-comments-list.twig', ['comments' => $comments]));
    }

    public function inactivePostList($twig)
    {
        $postslist = new AdminPostsList();
        $posts = $postslist->getInactivePosts();
        print_r($twig->render('admin/pages/admin-inactive-list.twig', ['posts' => $posts]));
    }

    public static function getPostForm($id_post)
    {
        $postForm = new PostForm;

        if (isset($id_post)) {
            $post = new AdminPostManager();
            return $postForm->renderForm($post->getContent($id_post));
        }
        return $postForm->renderForm();
    }

    public function modifyComment(int $id, object $twig)
    {
        $commentForm = Self::getCommentForm($id);
        $comment = new CommentManager();
        print_r($twig->render('admin/pages/commentForm.twig', [
            'commentForm' => $commentForm['form'],
            'actionAddComment' => $commentForm['action'],
            'comment' => $comment->getContent($id)]));

    }

    public static function getCommentForm($id_comment)
    {
        $commentForm = new CommentForm;

        if (isset($id_comment)) {
            $comment = new CommentManager();
            return $commentForm->renderForm($comment->getContent($id_comment));
        }
        return $commentForm->renderForm();
    }

    public function usersList($twig)
    {
        $users = UserManager::getUsersList();
        print_r($twig->render('admin/pages/usersList.twig', ['users' => $users]));
    }

    public function userProfile($id, $twig)
    {
        $user = new User($id);
        $userData = Tools::objectToArray($user);
        print_r($twig->render('admin/pages/user.twig', ['user' => $userData]));
    }

    public function userModify($id, $twig)
    {
        $post = Input::post();

        if (!UserManager::isAdmin()){
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

            header('Location: ' . _CURRENT_URL_);

        } else {
            $user = new User($id);
            $values = Tools::objectToArray($user);
            $userForm = Self::getUserForm($values, $id);
            print_r($twig->render('admin/pages/userForm.twig', ['userForm' => $userForm['form'], 'actionUser' => $userForm['action']]));
        }
    }

    public function getUserForm($values, $id_user = null)
    {
        $userForm = new UserForm();
        return $userForm->renderForm($values, true, $id_user);
    }

    public function userDelete($id)
    {
        $user = new UserManager($id);
        $messages = $user->deleteUserById();

        $flash = new Session($messages);
        $flash->setMessages();

        header('Location: ' . _ADMIN_URL_ . '/utilisateurs');
    }

}