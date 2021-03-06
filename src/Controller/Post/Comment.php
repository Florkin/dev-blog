<?php

namespace App\Controller\Post;


use App\Controller\Validator\Validator;
use App\Model\Manager\CommentManager;
use App\Model\Manager\UserManager;

class Comment
{
    private $isActive;
    private $id_comment;
    private $author;
    private $id_user;
    private $comment;
    private $id_post;
    private $date_add;
    private $date_update;

    /**
     * Comment constructor.
     * @param int $id_comment
     */
    public function __construct(int $id_comment)
    {
        $this->id_comment = $id_comment;
        $comment = new CommentManager();
        $content = $comment->getContent($id_comment);

        $this->isActive = $content['active'];
        $this->id_comment = $content['id_comment'];
        $this->author = $content['author'];
        $this->id_user = $content['id_user'];
        $this->comment = $content['comment'];
        $this->id_post = $content['id_post'];
        $this->date_add = $content['date_add'];
        $this->date_update = $content['date_update'];
    }

    /**
     * @return array
     *
     * return comment data
     */
    public function displayComment(): array
    {
        return array(
            'isActive' => $this->isActive,
            'id_comment' => $this->id_comment,
            'author' => $this->author,
            'id_user' => $this->id_user,
            'comment' => $this->comment,
            'date_add' => $this->date_add,
            'date_update' => $this->date_update,
            'id_post' => $this->id_post,
        );
    }

    /**
     * @return bool
     */
    public function isActive() : bool
    {
        if (!isset($this->isActive)){
            return false;
        }
        return $this->isActive;
    }

    /**
     * @return int
     */
    public function getPostId() : int
    {
        return $this->id_post;
    }

    /**
     * @return int
     */
    public function getAuthorId() : int
    {
        return $this->id_user;

    }
}