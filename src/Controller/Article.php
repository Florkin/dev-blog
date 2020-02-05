<?php

class Article
{
    private $id_article;
    private $title;
    private $intro;
    private $content;
    private $date_add;
    private $date_update;

    public function __construct($id_article)
    {
        $this->id_article = $id_article;
        $article = new ArticleManager($id_article);
        $content = $article->getContent($this->id_article);

        $this->title = $content['title'];
        $this->intro = $content['intro'];
        $this->content = $content['content'];
        $this->date_add = $content['date_add'];
        $this->date_update = $content['date_update'];
    }

    public function displayArticle()
    {
        return array(
            'id_article' => $this->id_article,
            'title' => $this->title,
            'intro' => $this->intro,
            'content' => html_entity_decode($this->content),
            'date_add' => $this->date_add,
            'date_update' => $this->date_update
        );
    }
}
