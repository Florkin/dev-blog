<?php

class ArticleManager
{

    public function createTable($db)
    {
        $sql = "CREATE TABLE IF NOT EXISTS `articles` (
            `id_article` int(11) NOT NULL AUTO_INCREMENT,
            `title` varchar(70) NOT NULL,
            `intro` text NOT NULL,
            `content` text NOT NULL,
            `date_add` date DEFAULT NULL,
            `date_update` date DEFAULT NULL,
            PRIMARY KEY (`id_article`)
          ) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;";
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

        $sql = "INSERT INTO articles (title, intro, content, date_add, date_update)
        VALUES ('" . $title . "', '" . $intro . "', '" . $content . "', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)";

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
                'id_article' => $data['id_article'],
                'title' => $data['title'],
                'intro' => $data['intro'],
                'content' => $data['content'],
                'date_add' => $data['date_add'],
                'date_update' => $data['date_update'],
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
            
            if ($quantity !== 'all'){
                $sql = "SELECT id_article, title, intro, date_add, date_update FROM articles LIMIT " . $quantity;
            } else {
                $sql = "SELECT id_article, title, intro, date_add, date_update FROM articles";
            }

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
