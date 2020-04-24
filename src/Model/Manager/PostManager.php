<?php

namespace App\Model\Manager;

use \App\Config;
use App\Controller\Validator\Validator;
use Intervention\Image\ImageManagerStatic as Image;

class PostManager
{
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
                'id_user' => $data['id_user'],
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
    public function getActivePostsList(int $quantity): ?array
    {
        if (!isset($db) || $db == null) {
            $db = DbManager::openDB();
        }
        if (DbManager::tableExists($db, 'posts')) {

            if ($quantity !== 0) {
                $sql = "SELECT id_post, title, intro, id_user, date_add, date_update FROM posts WHERE active = 1 LIMIT " . $quantity;
            } else {
                $sql = "SELECT id_post, title, intro, id_user, date_add, date_update FROM posts WHERE active = 1";
            }

            $response = $db->query($sql);
            if ($response){
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



}
