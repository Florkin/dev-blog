<?php

use Intervention\Image\ImageManagerStatic as Image;

class PostManager
{

    public function createTable($db)
    {
        $sql = "CREATE TABLE IF NOT EXISTS `posts` (
            `id_post` int(11) NOT NULL AUTO_INCREMENT,
            `title` varchar(70) NOT NULL,
            `intro` text NOT NULL,
            `content` text NOT NULL,
            `date_add` date DEFAULT NULL,
            `date_update` date DEFAULT NULL,
            PRIMARY KEY (`id_post`)
          ) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;";
        if ($db->exec($sql)) {
            echo "Table created successfully.";
        } else {
            echo "\nPDO::errorInfo():\n";
            print_r($db->errorInfo());
        }
    }

    public function uploadImg($id_post)
    {
        $file= Globals::get('files', 'image');
        $img = Image::make($file['tmp_name']);
        $img->fit(800, 450);
        if ($img->save('img/posts_headers/post_'.$id_post.'.jpg')){
            return true;
        } else {
            return false;
        };
    }

    public function addPost()
    {
        if (!isset($db) || $db == null) {
            $db = DbManager::openDB();
        }

        if (!DbManager::tableExists($db, 'posts')) {
            Self::createTable($db);
        }

        $title = htmlspecialchars(Globals::get('post', 'title'));
        $intro = htmlspecialchars(Globals::get('post', 'intro'));
        $content = Globals::get('post', 'content');

        $sql = "INSERT INTO posts (title, intro, content, date_add, date_update)
        VALUES ('" . $title . "', '" . $intro . "', '" . $content . "', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)";

        if ($db->exec($sql)) {
            $id_post = $db->lastInsertId();
            if($this->uploadImg($id_post)){
                echo "Post added successfully.";
            } else {
                echo 'image upload problem';
            }
           
        } else {
            echo "\nPDO::errorInfo():\n";
            print_r($db->errorInfo());
        }
    }

    public function getContent($id_post)
    {
        if (!isset($db) || $db == null) {
            $db = DbManager::openDB();
        }
        if (DbManager::tableExists($db, 'posts')) {
            $sql = "SELECT * FROM posts WHERE id_post = " . $id_post;
            $response = $db->query($sql);
            $data = $response->fetch();
            $response->closeCursor();

            return array(
                'id_post' => $data['id_post'],
                'title' => $data['title'],
                'intro' => $data['intro'],
                'content' => $data['content'],
                'date_add' => $data['date_add'],
                'date_update' => $data['date_update'],
                'img_url' => Config::BASE_URL.'/img/posts_headers/post_'.$data['id_post'].'.jpg'
            );
        } else {
            return false;
        }
    }

    public function getPostsList($quantity)
    {
        if (!isset($db) || $db == null) {
            $db = DbManager::openDB();
        }
        if (DbManager::tableExists($db, 'posts')) {
            
            if ($quantity !== 'all'){
                $sql = "SELECT id_post, title, intro, date_add, date_update FROM posts LIMIT " . $quantity;
            } else {
                $sql = "SELECT id_post, title, intro, date_add, date_update FROM posts";
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
