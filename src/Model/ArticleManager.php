<?php

class ArticleManager
{

    public function createTable($db)
    {
        $sql = "CREATE TABLE articles(
            id_article INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
            title VARCHAR(70) NOT NULL,
            intro TEXT NOT NULL,
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
        if (!isset($db) || $db == null) {
            $db = DbManager::openDB();
        }

        if (!DbManager::tableExists($db, 'articles')) {
            Self::createTable($db);
        }

        $title = htmlspecialchars(Globals::get('post', 'title'));
        $intro = htmlspecialchars(Globals::get('post', 'intro'));
        $content = Globals::get('post', 'content');


        $sql = "INSERT INTO articles (title, intro, content)
        VALUES ('" . $title . "', '" . $intro . "', '" . $content . "')";

        if ($db->exec($sql)) {
            echo "Article added successfully.";
        } else {
            echo "\nPDO::errorInfo():\n";
            print_r($db->errorInfo());
        }
    }

    public function getContent($id_article)
    {
        if (!isset($db) || $db == null) {
            $db = DbManager::openDB();
        }
        if (DbManager::tableExists($db, 'articles')) {
            $sql = "SELECT * FROM articles WHERE id_article = " . $id_article;
            $response = $db->query($sql);
            $data = $response->fetch();
            $response->closeCursor();

            return array(
                'title' => $data['title'],
                'intro' => $data['intro'],
                'content' => $data['content'],
            );
        } else {
            return false;
        }
    }

    public function getArticlesList($quantity)
    {
        if (!isset($db) || $db == null) {
            $db = DbManager::openDB();
        }
        if (DbManager::tableExists($db, 'articles')) {
            $sql = "SELECT title, intro FROM articles LIMIT " . $quantity;
            $response = $db->query($sql);

            $list = array();

            while ($data = $response->fetch()) {
                array_push($list, $data);
            };

            $response->closeCursor();

            return $list;
        } else {
            return false;
        }
    }
}
