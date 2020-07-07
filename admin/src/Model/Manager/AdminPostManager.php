<?php

namespace Admin\Model\Manager;

use \App\Config;
use App\Controller\Post\Comment;
use App\Controller\Post\Post;
use App\Controller\Validator\Session;
use App\Model\Manager\DbManager;
use App\Controller\Validator\Validator;
use App\Model\Manager\UserManager;
use App\Routes;
use App\Tools;
use Intervention\Image\Exception\NotReadableException;
use Intervention\Image\ImageManagerStatic as Image;
use Twig\Environment;

/**
 * Class AdminPostManager
 * @package Admin\Model\Manager
 */
class AdminPostManager
{
    private $id_post = null;

    public function __construct($id_post = null)
    {
        $this->id_post = $id_post;
    }

    /**
     * @param \PDO $db
     *
     * Create posts table if not exist
     */
    public function createTable(\PDO $db)
    {
        $sql = "CREATE TABLE IF NOT EXISTS `posts` (
            `id_post` int(11) NOT NULL AUTO_INCREMENT,
            `title` varchar(255) NOT NULL,
            `intro` text NOT NULL,
            `content` text NOT NULL,
            `id_user` int(11) NOT NULL,
            `date_add` date DEFAULT NULL,
            `date_update` date DEFAULT NULL,
            `active` tinyint(1) DEFAULT 0,
            PRIMARY KEY (`id_post`)
          ) ENGINE=MyISAM AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;";

        try {
            $db->exec($sql);
        } catch (Error $e) {
            print_r($db->errorInfo());
        };
    }

    /**
     * @param string $type
     * @return bool
     *
     * Verify with MIME type if file is really img
     */
    public function fileIsImg(string $type)
    {
        $validMimeTypes = array('image/png', 'image/jpg', 'image/jpeg', 'image/webp');
        if (in_array($type, $validMimeTypes)) {
            return true;
        }
        return false;
    }

    /**
     * @return bool|\Intervention\Image\Image
     *
     * Resize and upload image
     */
    public function uploadImg()
    {
        $storage = new \Upload\Storage\FileSystem(_ROOT_ . "");
        $file = new \Upload\File('image', $storage);
        if (!$file->isFile()) {
            return true;
        };
        $isImg = $this->fileIsImg($file->getMimetype(), $file);

        if (!$isImg) {
            return false;
        }

        return Image::make($file->getRealPath())
            ->fit(1920, 800)
            ->encode('webp');
    }


    /**
     * @param array $formData
     * @param Environment $twig
     * @return array
     *
     * Add Post to database
     */
    public function addPost(array $formData, Environment $twig) : array
    {
        if (!isset($db) || $db == null) {
            $db = DbManager::openDB();
        }

        if (!DbManager::tableExists($db, 'posts')) {
            Self::createTable($db);
        }

        $title = addslashes(htmlspecialchars($formData['title']));
        $intro = addslashes(htmlspecialchars($formData['intro']));
        $content = htmlentities($formData['content'], ENT_QUOTES | ENT_HTML5);
        $id_post_to_modify = $formData['modify'];
        $id_user = UserManager::getUserId();
        $isActive = UserManager::isAdmin() ? 1 : 0;

        if ($id_post_to_modify !== "modify") {

            $sql = "UPDATE posts 
                    SET title = '" . $title . "',
                    intro = '" . $intro . "', 
                    content = '" . $content . "', 
                    date_update = CURRENT_TIMESTAMP,
                    active = " . $isActive . " 
                    WHERE id_post = " . (int)$id_post_to_modify;

        } else {

            $sql = "INSERT INTO posts(title, intro, content, id_user, date_add, date_update)
        VALUES('" . $title . "', '" . $intro . "', '" . $content . "','" . $id_user . "' , CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)";

        }

        if (!$this->uploadImg()) {
            $messages["status"] = "error";
            $messages['message'] = "Il y a eu un problème lors de l'upload de l'image";

            return $messages;
        };

        if ($db->exec($sql) || $db->errorInfo()[0] == 0) {
            if ($id_post_to_modify == "modify") {
                $id_post = $db->lastInsertId();
            } else {
                $id_post = $id_post_to_modify;
            }
            $path = _ROOT_ . "/img/posts_headers/post_" . $id_post . ".webp";

            if (gettype($this->uploadImg()) == "object") {
                $this->uploadImg()->save($path);
            };

            $messages["status"] = "success";
            $messages['message'] = "Votre article a bien été envoyé et soumis a validation";
            return $messages;
        }
        $messages["status"] = "error";
        $messages['message'] = "Il y a eu un problème lors de l'ajout a la base de donnée";

        return $messages;
    }


    /**
     * @return bool
     *
     * Delete post
     */
    public function deletePost(): bool
    {
        if (!isset($db) || $db == null) {
            $db = DbManager::openDB();
        }

        $id = $this->id_post;
        $sql = "DELETE FROM `posts` WHERE id_post = " . $id;
        if ($db->exec($sql)) {
            return true;
        };

        return false;
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
                'img_url' => _BASE_URL_ . '/img/posts_headers/post_' . $data['id_post'] . '.webp',
            );
        }

        return false;
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
            if (UserManager::checkIsLogged() && UserManager::isAdmin()) {
                $sql = "SELECT id_post, title, intro, id_user, date_add, date_update, active FROM posts";
            } else {
                $sql = "SELECT id_post, title, intro, id_user, date_add, date_update, active FROM posts WHERE id_user = " . UserManager::getUserId();
            }


            $response = $db->query($sql);

            if ($response) {
                $list = array();

                while ($data = $response->fetch()) {
                    $user = new UserManager($data['id_user']);
                    $data['author'] = $user->getUsernameById();
                    array_push($list, $data);
                };

                $response->closeCursor();
                return $list;
            } else {
                return null;
            }


        } else {
            return null;
        }
    }

    /**
     * @return array|null
     *
     * Return list of all inactive posts
     */
    public function getInactivePostsList(): ?array
    {
        if (!isset($db) || $db == null) {
            $db = DbManager::openDB();
        }
        if (DbManager::tableExists($db, 'posts')) {
            if (UserManager::checkIsLogged() && UserManager::isAdmin()) {
                $sql = "SELECT id_post, title, intro, id_user, date_add, date_update, active FROM posts WHERE active = 0";
            } else {
                return null;
            }

            $response = $db->query($sql);

            if ($response) {
                $list = array();

                while ($data = $response->fetch()) {
                    $user = new UserManager($data['id_user']);
                    $data['author'] = $user->getUsernameById();
                    array_push($list, $data);
                };

                $response->closeCursor();
                return $list;
            } else {
                return null;
            }


        } else {
            return null;
        }
    }

    /**
     * @param int $id_post
     *
     * Toggle post activation
     */
    public static function postToggleActivation(int $id_post): void
    {
        $post = new Post($id_post);
        if ($post->isActive()) {
            Self::setActive($id_post, 0);
            $messages["message"] = "L'article a été desactivé";
        } else {
            Self::setActive($id_post, 1);
            $messages["message"] = "L'article a été activé";
        };

        $messages["status"] = "success";

        $flash = new Session($messages);
        $flash->setMessages();

        Tools::redirect(_CURRENT_URL_, 301);
    }


    /**
     * @param $id_post
     * @param $active
     *
     * Set post activation
     */
    public static function setActive(int $id, int $active): void
    {
        if (!isset($db) || $db == null) {
            $db = DbManager::openDB();
        }

        $sql = "UPDATE posts SET active = " . $active . " WHERE id_post = " . $id;

        $response = $db->query($sql);
    }

    /**
     * @param $formData
     * @return Validator
     *
     * get post data validator
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
