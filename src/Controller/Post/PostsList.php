<?php

namespace App\Controller\Post;

use \App\Model\Manager\PostManager;

class PostsList
{
    private $quantity;

    public function __construct($quantity)
    {
        $this->quantity = $quantity;
    }

    public function getPosts()
    {
        $postsList = new PostManager;
        return $postsList->getPostsList($this->quantity);
    }

}