<?php

namespace App\Controller\Post;

class Post
{
    private $id_post;
    private $title;
    private $intro;
    private $content;
    private $date_add;
    private $date_update;
    private $img_url;

    public function __construct($id_post)
    {
        $this->id_post = $id_post;
        $post = new \App\Model\Manager\PostManager($id_post);
        $content = $post->getContent($this->id_post);

        $this->title = $content['title'];
        $this->intro = $content['intro'];
        $this->content = $content['content'];
        $this->date_add = $content['date_add'];
        $this->date_update = $content['date_update'];
        $this->img_url = $content['img_url'];
    }

    public function displayPost()
    {
        return array(
            'id_post' => $this->id_post,
            'title' => $this->title,
            'intro' => $this->intro,
            'content' => html_entity_decode($this->content),
            'date_add' => $this->date_add,
            'date_update' => $this->date_update,
            'img_url' => $this->img_url
        );
    }
}
