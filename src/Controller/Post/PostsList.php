<?php

namespace App\Controller\Post;

use App\Model\Manager\PostManager;

class PostsList
{
    /**
     * Quantity of posts to display
     *
     * @var int
     */
    private $quantity;

    public function __construct($quantity)
    {
        $this->quantity = $quantity;
    }

    /**
     * Return lasts posts, number of posts depending of $this->quantity
     *
     * @return array
     */
    public function getPosts(): ?array
    {
        $postsList = new PostManager;
        return $postsList->getActivePostsList($this->quantity);
    }

}
