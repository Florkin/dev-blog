<?php

namespace Admin;

use Admin\Controller\BackController;

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
    public static function setRoutes(object $twig) : object
    {
        $router = new \AltoRouter;

        Self::setGetRoutes($twig, $router);
        Self::setPostRoutes($router);
        Self::MatchesRoutes($twig, $router);

        return $router;
    }

    /**
     * Set GET routes
     *
     * @param object $twig
     * @param object $router
     * @return void
     */
    public static function setGetRoutes(object $twig, object $router)
    {
        $router->map('GET', '/admin/', function ($twig) {
            return BackController::adminList($twig);
        }, 'Administration');

        $router->map('GET', '/admin/ecrire-un-article', function ($twig) {
            return BackController::writeArticle($twig);
        }, 'write-article');


        return $router;
    }

    /**
     * Set POST routes
     *
     * @param object $router
     * @return void
     */
    public static function setPostRoutes(object $router)
    {
        $router->map('POST', '/admin/ecrire-un-article', function ($twig) {
            return BackController::writeArticle($twig);
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