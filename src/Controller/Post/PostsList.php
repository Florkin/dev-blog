<?php

namespace App\Controller\Post;

class PostsList
{
    private $quantity;

    public function __construct($quantity)
    {
        $this->quantity = $quantity;
    }

    public function getPosts()
    {
        $postsList = new \App\Model\Manager\PostManager;
        return $postsList->getPostsList($this->quantity);
    }

}