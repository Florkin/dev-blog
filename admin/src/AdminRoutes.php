<?php

namespace Admin;

use Admin\Controller\BackController;
use Admin\Model\Manager\AdminPostManager;
use App\Model\Manager\UserManager;

/**
 * Routing class
 */
abstract class AdminRoutes
{
    /**
     * Set all routing system
     *
     * @param object $twig
     * @return object
     * @throws \Exception
     */
    public static function setRoutes(object $twig): object
    {
        $router = new \AltoRouter;

        Self::setGetRoutes($twig, $router);
        Self::setPostRoutes($twig, $router);
        Self::MatchesRoutes($twig, $router);

        return $router;
    }

    /**
     * Set GET routes
     *
     * @param object $twig
     * @param object $router
     * @return object|object
     */
    public static function setGetRoutes(object $twig, object $router)
    {
        $router->map('GET', '/admin/', function ($twig) {
            return BackController::adminList($twig);
        }, 'Administration');

        $router->map('GET', '/admin/ecrire-un-article', function ($twig) {
            return BackController::writePost($twig);
        }, 'write-post');

        $router->map('GET', '/admin/modifier-article/[i:id]', function ($id, $twig) {
            return BackController::writePost($twig, $id);
        }, 'modify-post');

        $router->map('GET', '/admin/supprimer-article/[i:id]', function ($id) {
            return BackController::deletePost($id);
        }, 'delete-post');

        $router->map('GET', '/admin/activation-article/[i:id]', function ($id) {
            return AdminPostManager::postToggleActivation($id);
        }, 'activation-article');

        $router->map('GET', '/admin/activation-commentaire/[i:id]', function ($id) {
            return AdminPostManager::commentToggleActivation($id);
        }, 'activation-commentaire');

        $router->map('GET', '/admin/articles/[i:id]', function ($id, $twig) {
            return BackController::post($id, $twig);
        }, 'article');


        return $router;
    }

    /**
     * Set POST routes
     *
     * @param object $router
     * @return object|object
     */
    public static function setPostRoutes(object $twig, object $router)
    {
        $router->map('POST', '/admin/ecrire-un-article', function ($twig) {
            return BackController::writePost($twig);
        }, 'ajouter-article');

        return $router;
    }

    /**
     * Verify matches and get parameters
     *
     * @param object $twig
     * @param object $router
     * @return void
     */
    public static function MatchesRoutes(object $twig, object $router)
    {
        $match = $router->match();

        // call closure or throw 404 status
        if (is_array($match) && is_callable($match['target'])) {
            try {
                array_push($match['params'], $twig);
                call_user_func_array($match['target'], $match['params']);

                // Handle all possible errors
            } catch (Twig_Error_Loader $e) {
                header('Content-type: application/json');
                echo json_encode('Error [1]: ' . $e);
            } catch (Twig_Error_Runtime $e) {
                header('Content-type: application/json');
                echo json_encode('Error [2]: ' . $e);
            } catch (Twig_Error_Syntax $e) {
                header('Content-type: application/json');
                echo json_encode('Error [3]: ' . $e);
            }
        } else {
            // no route was matched
            header($_SERVER["SERVER_PROTOCOL"] . ' 404 Not Found');
        }
    }
}
