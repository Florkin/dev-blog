<?php


namespace Admin\Controller;

use Admin\Controller\Form\PostForm;
use Admin\Model\Manager\AdminPostManager;
use Admin\Controller\Post\AdminPostsList;
use App\Config;
use Admin\Controller\Post\AdminPost;
use App\Controller\Validator\Session;
use App\Model\Manager\CommentManager;
use App\Model\Manager\UserManager;
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
        if(UserManager::isAdmin()){
            $comments = $getComments->getAllCommentsByPostId($id);
        } else{
            $comments = $getComments->getActiveCommentsByPostId($id);
        }

        echo $twig->render('pages/admin-post.twig', ['post' => $post->displayPost(), 'comments' => $comments]);

    }

    public static function adminList($twig)
    {
        $postslist = new AdminPostsList(0);
        $posts = $postslist->getPosts();
        echo $twig->render('pages/admin-list.twig', ['posts' => $posts]);
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
            header('Location: ' . $_SERVER['HTTP_REFERER']);

        } else {
            // display post form
            $postForm = Self::getPostForm($id_post);
            echo $twig->render('pages/postform.twig', ['postForm' => $postForm['form'], 'actionAddpost' => $postForm['action']]);
        }
    }

    /**
     * @param int $id_post
     */
    public function deletePost(int $id_post)
    {
        $post = new AdminPostManager($id_post);
        if ($post->deletePost()) {
            header('Location: ' . _ADMIN_URL_);
        }
    }

    public function deleteComment(int $id_comment)
    {
        $comment = new CommentManager();
        $comment->deleteComment($id_comment);
    }

    public function inactiveCommentsList($twig){
        $comment = new CommentManager();
        $comments = $comment->getAllInactiveComments();

        echo $twig->render('pages/admin-comments-list.twig', ['comments' => $comments]);
    }

    public function inactivePostList($twig){
        $postslist = new AdminPostsList();
        $posts = $postslist->getInactivePosts();
        echo $twig->render('pages/admin-inactive-list.twig', ['posts' => $posts]);
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

}