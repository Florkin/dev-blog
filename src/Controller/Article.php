<?php

class Article
{
    private $id_article;
    private $title;
    private $intro;
    private $content;

    private function __construct($id_article)
    {
        $this->id_article = $id_article;
        $article = new ArticleManager($id_article);
        $content = $article->getContent($this->id_article);

        $this->title = $content['title'];
        $this->intro = $content['intro'];
        $this->content = $content['content'];
    }
}
