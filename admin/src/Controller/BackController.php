<?php


namespace Admin\Controller;

use Admin\Controller\Form\PostForm;
use App\Controller\Post\Post;
use App\Controller\Post\PostsList;
use App\Model\Manager\PostManager;
use Balambasik\Input;

class BackController
{

    public static function adminList($twig)
    {
        $postslist = new PostsList(0);
        $posts = $postslist->getPosts();
        echo $twig->render('pages/admin-list.twig', ['posts' => $posts]);
    }

    public static function writeArticle(object $twig, array $messages = null)
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

}