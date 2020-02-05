<?php

class ArticlesList
{
    private $quantity;

    public function __construct($quantity)
    {
        $this->quantity = $quantity;
    }

    public function getArticles()
    {
        $articlesList = new ArticleManager;
        return $articlesList->getArticlesList($this->quantity);
    }

}