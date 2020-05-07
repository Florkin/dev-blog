<?php

namespace App\Controller\Post;


use App\Controller\Validator\Validator;
use App\Model\Manager\CommentManager;
use App\Model\Manager\UserManager;

class Comment
{
    private $author;
    private $authorId;
    private $comment;
    private $post_id;

    public function __construct($id_post, $data = null)
    {
        $this->post_id = $id_post;

        if (isset($data)) {
            if (UserManager::checkIsLogged()) {
                $this->author = UserManager::getUsername();
                $this->authorId = UserManager::getUserId();
            } else {
                $this->author = $data['comment_name'];
            }

            $this->comment = $data['comment'];
        }
    }

    public function addComment()
    {
        $comment = new CommentManager();
        $messages = $comment->addComment(
            $this->comment,
            $this->authorId,
            $this->author,
            $this->post_id
        );
        return $messages;
    }

    public function getActiveComments()
    {
        $comment = new CommentManager();
        $comments = $comment->getActiveComments($this->post_id);
        return $comments;
    }

    public function getAllPostComments()
    {
        $comment = new CommentManager();
        $comments = $comment->getAllPostComments($this->post_id);
        return $comments;
    }

    public function getAllInactiveComments()
    {
        $comment = new CommentManager();
        $comments = $comment->getAllInactiveComments($this->post_id);
        return $comments;
    }

    public function getValidator($formData)
    {
        return (new Validator($formData))
            ->required('comment')
            ->length('comment', 2, 1000)
            ->author('comment_name');

    }
}