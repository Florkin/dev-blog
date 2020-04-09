<?php

namespace Admin\Model\Manager;

use \App\Config;
use App\Controller\Post\Post;
use App\Model\Manager\DbManager;
use App\Controller\Validator\Validator;
use Intervention\Image\ImageManagerStatic as Image;

/**
 * Class AdminPostManager
 * @package Admin\Model\Manager
 */
class AdminPostManager
{
    /**
     * Create posts table if not exist
     *
     * @param object $db
     * @return void
     */
    public function createTable(object $db)
    {
        $sql = "CREATE TABLE IF NOT EXISTS `posts` (
            `id_post` int(11) NOT NULL AUTO_INCREMENT,
            `title` varchar(70) NOT NULL,
            `intro` text NOT NULL,
            `content` text NOT NULL,
            `date_add` date DEFAULT NULL,
            `date_update` date DEFAULT NULL,
            `active` tinyint(1) DEFAULT 0,
            PRIMARY KEY (`id_post`)
          ) ENGINE=MyISAM AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;";

        try {
            $db->exec($sql);
        } catch (Error $e) {
            echo "\nPDO::errorInfo():\n";
            print_r($db->errorInfo());
        };
    }

    /**
     * Upload post header image
     *
     * @param integer $id_post
     * @return boolean
     */
    public function uploadImg(int $id_post): bool
    {
        $file = isset($_FILES['image']) ? $_FILES['image'] : null;

        if ($file !== null && isset($file)) {
            $img = Image::make($file['tmp_name']);
            $img->fit(800, 450);

            if ($img->save($_SERVER["DOCUMENT_ROOT"] . 'img/posts_headers/post_' . $id_post . '.jpg')) {
                return true;
            } else {
                return false;
            };
        } else {
            return true;
        }
    }

    /**
     * Add post to database
     *
     * @param array $formData
     * @return void
     */
    public function addPost(array $formData, $twig)
    {
        if (!isset($db) || $db == null) {
            $db = DbManager::openDB();
        }

        if (!DbManager::tableExists($db, 'posts')) {
            Self::createTable($db);
        }

        $title = addslashes(htmlspecialchars($formData['title']));
        $intro = addslashes(htmlspecialchars($formData['intro']));
        $content = $formData['content'];

        $sql = "INSERT INTO posts (title, intro, content, date_add, date_update)
        VALUES ('" . $title . "', '" . $intro . "', '" . $content . "', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)";

        if ($db->exec($sql)) {
            $id_post = $db->lastInsertId();
            if ($this->uploadImg($id_post)) {
                $messages["status"] = "success";
                $messages['message'] = "Votre article a bien été envoyé et soumis a validation";
                echo json_encode($messages);
            } else {
                $messages["status"] = "error";
                $messages['message'] = "Il y a eu un problème d'upload avec l'image";
                echo json_encode($messages);
            }

        } else {
            $messages["status"] = "error";
            $messages['message'] = $db->errorInfo();
            echo json_encode($messages);
        }
    }

    /**
     * Get post content from database and img folder
     *
     * @param integer $id_post
     * @return array for twig template
     */
    public function getContent(int $id_post): array
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
                'active' => $data['active'],
                'img_url' => Config::BASE_URL . '/img/posts_headers/post_' . $data['id_post'] . '.jpg',
            );
        } else {
            return false;
        }
    }

    /**
     * Get last active posts or all posts list depending of $quantity
     *
     * @param integer $quantity
     * @return array list of articles with content
     */
    public function getPostsList(int $quantity): ?array
    {
        if (!isset($db) || $db == null) {
            $db = DbManager::openDB();
        }
        if (DbManager::tableExists($db, 'posts')) {

            if ($quantity !== 0) {
                $sql = "SELECT id_post, title, intro, date_add, date_update, active FROM posts LIMIT" . $quantity;
            } else {
                $sql = "SELECT id_post, title, intro, date_add, date_update, active FROM posts";
            }

            $response = $db->query($sql);

            $list = array();

            while ($data = $response->fetch()) {
                array_push($list, $data);
            };

            $response->closeCursor();
            return $list;

        } else {
            return null;
        }
    }

    /**
     * @param int $id_post
     */
    public static function postToggleActivation(int $id_post): void
    {
        $post = new Post($id_post);
        if ($post->isActive()) {
            Self::setActive($id_post, 0);
        } else {
            Self::setActive($id_post, 1);
        }

        header('Location: ' . Config::BASE_ADMIN_URL);
    }

    /**
     * @param $id_post
     * @param $active
     */
    public function setActive(int $id_post, int $active): void
    {
        if (!isset($db) || $db == null) {
            $db = DbManager::openDB();
        }

        $sql = "UPDATE posts SET active = " . $active . " WHERE id_post = " . $id_post;
        $response = $db->query($sql);
    }

    /**
     * @param $formData
     * @return Validator
     */
    public function getValidator(array $formData)
    {
        return (new Validator($formData))
            ->required('title', 'intro', 'content')
            ->isCleanHtml('content')
            ->length('intro', 10, 255)
            ->length('title', 5, 255)
            ->length('content', 200, 50000);
    }

}