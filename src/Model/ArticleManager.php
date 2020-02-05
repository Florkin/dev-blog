<?php

class ArticleManager
{

    public function createTable($db)
    {
        $sql = "CREATE TABLE articles(
            id_article INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
            title VARCHAR(70) NOT NULL,
            subtitle VARCHAR(255) NOT NULL,
            content TEXT NOT NULL
        ) DEFAULT CHARSET=utf8";
        if ($db->exec($sql)) {
            echo "Table created successfully.";
        } else {
            echo "\nPDO::errorInfo():\n";
            print_r($db->errorInfo());
        }
    }

    public function addArticle()
    {
        $db = DbManager::openDB();
        if (!DbManager::tableExists($db, 'articles')) {
            Self::createTable($db);
        }

        $title = addslashes(htmlspecialchars(Globals::get('post', 'title')));
        $subtitle = addslashes(htmlspecialchars(Globals::get('post', 'subtitle')));
        $content = Globals::get('post', 'content');

        $sql = "INSERT INTO articles (title, subtitle, content)
        VALUES ('" . $title . "', '" . $subtitle . "', '" . $content . "')";

        if ($db->exec($sql)) {
            echo "Article added successfully.";
        } else {
            echo "\nPDO::errorInfo():\n";
            print_r($db->errorInfo());
        }
    }
}
