<?php


namespace App\Model\Manager;


class CommentManager
{

    public function createTable(object $db)
    {
        $sql = "CREATE TABLE IF NOT EXISTS `comments` (
            `id_comment` int(11) NOT NULL AUTO_INCREMENT,
            `comment` text NOT NULL,
            `id_user` int(11) DEFAULT NULL,
            `author` varchar(70) NOT NULL,
            `post_id` int(11),
            `date_add` date DEFAULT NULL,
            `date_update` date DEFAULT NULL,
            `active` tinyint(1) DEFAULT 0,
            PRIMARY KEY (`id_comment`)
          ) ENGINE=MyISAM AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;";

        $db->exec($sql);
    }

    public function addComment($comment, $user_id, $author, $post_id)
    {
        $db = DbManager::openDB();
        if (!DbManager::tableExists($db, 'comments')) {
            $this->createTable($db);
        }
        $active = UserManager::checkIsLogged() && UserManager::isAdmin() ? 1 : 0;

        if (isset($user_id)){
            $sql = "INSERT INTO comments (comment, id_user, author, post_id, date_add, date_update, active) VALUES ('" . $comment . "', '" . $user_id . "', '" . $author . "', '" . $post_id . "', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, " . $active . ")";
        } else {
            $sql = "INSERT INTO comments (comment, author, post_id, date_add, date_update, active) VALUES ('" . $comment . "', '" . $author . "', '" . $post_id . "', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, " . $active . ")";
        }

        try {
           $db->exec($sql);
        } catch (Error $e) {
            echo "\nPDO::errorInfo():\n";
            print_r($db->errorInfo());
        };

        header('Location: ' . $_SERVER['HTTP_REFERER'] . '#comments');
    }

}