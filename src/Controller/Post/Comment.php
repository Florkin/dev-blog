<?php

namespace App\Controller\Post;


use App\Model\Manager\CommentManager;
use App\Model\Manager\UserManager;

class Comment
{
    private $author;
    private $authorId;
    private $comment;
    private $post_id;

    public function __construct($id_post, $data)
    {
        $this->post_id = $id_post;
        if (UserManager::checkIsLogged()) {
            $this->author = UserManager::getUsername();
            $this->authorId = UserManager::getUserId();
        } else {
            $this->author = $data['comment_name'];
        }

        $this->comment = $data['comment'];
    }

    public function addComment()
    {
        $comment = new CommentManager();
        $comment->addComment(
            $this->comment,
            $this->authorId,
            $this->author,
            $this->post_id

        );
    }
}