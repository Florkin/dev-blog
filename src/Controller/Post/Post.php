<?php

namespace App\Controller\Post;

use App\Controller\User\User;
use App\Model\Manager\PostManager;
use App\Model\Manager\UserManager;

class Post
{
    private $id_post;
    private $title;
    private $intro;
    private $content;
    private $id_user;
    private $date_add;
    private $date_update;
    private $active;
    private $img_url;
    private $comments;


    /**
     * set post object
     *
     * @param integer $id_post
     */
    public function __construct(int $id_post)
    {
        $this->id_post = $id_post;
        $post = new PostManager($id_post);
        $content = $post->getContent($this->id_post);
        $comments = new Comment($this->id_post);

        $this->title = $content['title'];
        $this->intro = $content['intro'];
        $this->content = $content['content'];
        $this->id_user = $content['id_user'];
        $this->date_add = $content['date_add'];
        $this->date_update = $content['date_update'];
        $this->active = $content['active'];
        $this->img_url = $content['img_url'];
//        $this->comments = $comments->getActiveComments();
    }

    /**
     * Return array ready for twig post template
     *
     * @return array
     */
    public function displayPost() : array
    {
        $author = new User($this->id_user);
        $authorName = $author->getUsername();
        return array(
            'id_post' => $this->id_post,
            'title' => $this->title,
            'intro' => $this->intro,
            'content' => html_entity_decode($this->content, ENT_QUOTES | ENT_HTML5),
            'author' => $authorName,
            'date_add' => $this->date_add,
            'date_update' => $this->date_update,
            'img_url' => $this->img_url,
            "active" => $this->active,
            "comments" => $this->comments
        );
    }

    public function isActive()
    {
        return $this->active;
    }
}
