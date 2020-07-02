<?php


namespace App\Model\Manager;


use App\Controller\Post\Comment;
use App\Controller\Validator\Session;
use App\Controller\Validator\Validator;
use App\Tools;

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

    public function addComment(array $formData, int $id, bool $modify = false)
    {
        if (!isset($db) || $db == null) {
            $db = DbManager::openDB();
        }

        if (!DbManager::tableExists($db, 'comments')) {
            Self::createTable($db);
        }

        $comment = addslashes(htmlspecialchars($formData['comment']));
        if (!$modify) {
            if (isset($formData['guest_author']) && $formData['guest_author'] != null) {
                $author = addslashes(htmlspecialchars($formData['guest_author']));
                $id_user = 0;
            } else {
                $id_user = UserManager::getUserId();
                $author = UserManager::getUserName();
            }
        }

        if (UserManager::isAdmin()) {
            $active = 1;
        } else {
            $active = 0;
        }

        if (!$modify) {
            $sql = "INSERT INTO comments(comment, id_user, author, post_id, active, date_add, date_update)
        VALUES('" . $comment . "', " . $id_user . ", '" . $author . "', '" . $id . "' ,'" . $active . "', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)";
        } else {
            $sql = "UPDATE comments
            SET comment = '" . $comment . "', date_update = CURRENT_TIMESTAMP
            WHERE id_comment = $id";
        }


        if ($db->exec($sql)) {
            $messages["status"] = "success";
            $messages['message'] = "Votre commentaire a bien été envoyé et soumis a validation";

        } else {
            $messages["status"] = "error";
            $messages['message'] = "Il y a eu un problème lors de l'ajout du commentaire";
        }

        return $messages;

    }

    public function getActiveCommentsByPostId(int $post_id)
    {
        $db = DbManager::openDB();
        $sql = "SELECT * FROM comments WHERE post_id = " . $post_id . " AND active = 1 ORDER BY date_add DESC";

        $response = $db->query($sql);
        if ($response) {
            $comments = [];
            while ($data = $response->fetch()) {
                array_push($comments, $data);
            }

            return $comments;
        } else {
            return null;
        }
    }

    public function getAllCommentsByPostId(int $post_id)
    {
        $db = DbManager::openDB();
        $sql = "SELECT * FROM comments WHERE post_id = " . $post_id . " ORDER BY date_add DESC";

        $response = $db->query($sql);
        if ($response) {
            $comments = [];
            while ($data = $response->fetch()) {
                array_push($comments, $data);
            }

            return $comments;
        } else {
            return null;
        }
    }

    public static function commentToggleActivation(int $id_comment): void
    {
        $comment = new Comment($id_comment);
        $post_id = $comment->getPostId();
        if ($comment->isActive()) {
            Self::setActive($id_comment, 0);
            $messages["messages"] = "Le commentaire a été désactivé";
        } else {
            Self::setActive($id_comment, 1);
            $messages["messages"] = "Le commentaire a été activé";
        }

        $messages["status"] = "success";

        $flash = new Session($messages);
        $flash->setMessages();

        Tools::redirect(_CURRENT_URL_ . "#comment-" . $id_comment, 301);
    }

    public static function deleteComment(int $id_comment): void
    {
        if (!isset($db) || $db == null) {
            $db = DbManager::openDB();
        }
//        $comment = new Comment($id_comment);
//        $id_post = $comment->getPostId();
//        $sql = "DELETE FROM `comments` WHERE id_comment = " . $id_comment;
//        if ($db->exec($sql)) {
        Tools::redirect(_CURRENT_URL_ . "#comments", 301);

//        };
    }

    public static function setActive(int $id, int $active): void
    {
        if (!isset($db) || $db == null) {
            $db = DbManager::openDB();
        }

        $sql = "UPDATE comments SET active = " . $active . " WHERE id_comment = " . $id;

        $response = $db->query($sql);
    }

    public function getAllInactiveComments()
    {
        $db = DbManager::openDB();
        $sql = "SELECT * FROM comments WHERE active = 0 ORDER BY date_add DESC";

        $response = $db->query($sql);
        if ($response) {
            $comments = [];
            while ($data = $response->fetch()) {
                array_push($comments, $data);
            }

            return $comments;
        } else {
            return null;
        }
    }

    public function getContent($id_comment)
    {
        if (!isset($db) || $db == null) {
            $db = DbManager::openDB();
        }

        if (DbManager::tableExists($db, 'comments')) {
            $sql = "SELECT * FROM comments WHERE id_comment = " . $id_comment;
            $response = $db->query($sql);
            $data = $response->fetch();
            $response->closeCursor();

            return array(
                'id_comment' => $data['id_comment'],
                'id_post' => $data['post_id'],
                'id_user' => $data['id_user'],
                'author' => $data['author'],
                'comment' => $data['comment'],
                'date_add' => $data['date_add'],
                'date_update' => $data['date_update'],
                'active' => $data['active'],
            );
        } else {
            return false;
        }
    }

    public function getValidator($formData)
    {
        return (new Validator($formData))
            ->required('comment')
            ->length('comment', 2, 1000)
            ->author('comment_name');

    }
}