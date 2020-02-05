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

    public function displayList($twig)
    {
        $articlesList = $this->getArticles();
        echo $twig->render('_partials/listing.twig', ['articles' => $articlesList]);
    }

}