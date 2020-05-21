<?php

namespace Admin\Controller\Post;

use Admin\Model\Manager\AdminPostManager;

class AdminPostsList
{
    /**
     * Quantity of posts to display
     *
     * @var int
     */
    private $quantity;

    public function __construct($quantity = null)
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
        $postsList = new AdminPostManager;
        return $postsList->getPostsList($this->quantity);
    }

    public function getInactivePosts(): ?array
    {
        $postsList = new AdminPostManager;
        return $postsList->getInactivePostsList();
    }

}
