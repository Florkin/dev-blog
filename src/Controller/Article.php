<?php

class Article
{
    private $id_article;
    private $title;
    private $subtitle;
    private $content;

    function __construct($id_article, $title, $subtitle, $content)
    {
        $this->id_article = $id_article;
        $article = new ArticleManager($id_article);
        $articleContent = $article->getContent();
    }

}
