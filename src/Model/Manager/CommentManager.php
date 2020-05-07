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

        if (isset($user_id)) {
            $sql = "INSERT INTO comments (comment, id_user, author, post_id, date_add, date_update, active) VALUES ('" . $comment . "', '" . $user_id . "', '" . $author . "', '" . $post_id . "', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, " . $active . ")";
        } else {
            $sql = "INSERT INTO comments (comment, author, post_id, date_add, date_update, active) VALUES ('" . $comment . "', '" . $author . "', '" . $post_id . "', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, " . $active . ")";
        }

        try {
            $db->exec($sql);
            $messages["status"] = "success";
            $messages['message'] = "Votre commentaire a bien été envoyé et soumis a validation";
        } catch (Error $e) {
            $messages["status"] = "error";
            $messages['message'] = $db->errorInfo();
        };

        return $messages;
    }

    public function getActiveComments($post_id)
    {
        $db = DbManager::openDB();
        $sql = "SELECT * FROM comments WHERE post_id = " . $post_id . " AND active = 1 ORDER BY date_add DESC";

        $response = $db->query($sql);
        if ($response){
            $comments = [];
            while ($data = $response->fetch()) {
                array_push($comments, $data);
            }

            return $comments;
        } else {
            return null;
        }

    }

    public function getAllInactiveComments($post_id)
    {
        $db = DbManager::openDB();
        $sql = "SELECT * FROM comments WHERE active = 0 ORDER BY date_add DESC";

        $response = $db->query($sql);
        if ($response){
            $comments = [];
            while ($data = $response->fetch()) {
                array_push($comments, $data);
            }

            return $comments;
        } else {
            return null;
        }

    }

    public function getAllPostComments($post_id)
    {
        $db = DbManager::openDB();
        $sql = "SELECT * FROM comments WHERE post_id = " . $post_id . " ORDER BY date_add DESC";

        $response = $db->query($sql);
        if ($response){
            $comments = [];
            while ($data = $response->fetch()) {
                array_push($comments, $data);
            }

            return $comments;
        } else {
            return null;
        }

    }

}