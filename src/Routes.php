<?php

namespace App;

use \App\Controller\FrontController;

/**
 * Routing class
 */
abstract class Routes
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
     * @return object|object
     */
    public static function setGetRoutes(object $twig, object $router)
    {

        $router->map('GET', '/', function ($twig) {
            return FrontController::home($twig);
        }, 'Accueil');

        $router->map('GET', '/inscription', function ($twig) {
            return FrontController::registration($twig);
        }, 'formulaire-inscription');

        $router->map('GET', '/articles', function ($twig) {
            return FrontController::postslist($twig);
        }, 'articles');

        $router->map('GET', '/articles/[i:id]', function ($id, $twig) {
            return FrontController::post($id, $twig);
        }, 'article');

        $router->map('GET', '/logout', function () {
            return FrontController::logout();
        }, 'logout');

        return $router;
    }

    /**
     * Set POST routes
     *
     * @param object $router
     * @return object|object
     */
    public static function setPostRoutes(object $router)
    {
        $router->map('POST', '/inscription', function ($twig) {
            return FrontController::registration($twig);
        }, 'inscription');

        $router->map('POST', '/login', function ($twig) {
            return FrontController::login($twig);
        }, 'login');

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
