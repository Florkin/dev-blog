<?php

namespace Admin\Controller\Post;

use Admin\Model\Manager\AdminPostManager;

/**
 * Class AdminPostsList
 * @package Admin\Controller\Post
 *
 * Class to handle post listing in BackOffice
 */
class AdminPostsList
{
    /**
     * Quantity of posts to display
     * @var int
     */
    private $quantity;

    /**
     * AdminPostsList constructor.
     * @param null $quantity
     */
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

    /**
     * @return array|null
     *
     * return inactive posts
     */
    public function getInactivePosts(): ?array
    {
        $postsList = new AdminPostManager;
        return $postsList->getInactivePostsList();
    }

}
