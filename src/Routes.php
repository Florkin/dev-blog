<?php

namespace App;

use Admin\Controller\BackController;
use Admin\Model\Manager\AdminPostManager;
use \App\Controller\FrontController;
use App\Model\Manager\CommentManager;

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
    public static function setRoutes(object $twig = null): object
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
    public static function setGetRoutes(object $twig = null, object $router)
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

        $router->map('GET', '/verify_email/[:selector]/[:token]', function ($selector, $token) {
            return FrontController::verifyEmail($selector, $token);
        }, 'verify_email');

        $router->map('GET', '/mot-de-passe-oublie', function ($twig) {
            return FrontController::resetPasswordSendEmail(false, $twig);
        }, 'mot-de-passe-oublie');

        $router->map('GET', '/nouveau-mot-de-passe/[:selector]/[:token]', function ($selector, $token, $twig) {
            return FrontController::newPassword($selector, $token, false, $twig);
        }, 'nouveau-mot-de-passe');

        // =======================ADMIN ROUTES =======================
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

        $router->map('GET', '/admin/supprimer-commentaire/[i:id]', function ($id) {
            return BackController::deleteComment($id);
        }, 'delete-comment');

        $router->map('GET', '/admin/commentaires-a-valider', function ($twig) {
            return BackController::inactiveCommentsList($twig);
        }, 'inactive-comments-list');

        $router->map('GET', '/admin/articles-a-valider', function ($twig) {
            return BackController::inactivePostList($twig);
        }, 'inactive-posts-list');

        $router->map('GET', '/admin/activation-article/[i:id]', function ($id) {
            return AdminPostManager::postToggleActivation($id);
        }, 'activation-article');

        $router->map('GET', '/admin/activation-commentaire/[i:id]', function ($id) {
            return CommentManager::commentToggleActivation($id);
        }, 'activation-commentaire');

        $router->map('GET', '/admin/articles/[i:id]', function ($id, $twig) {
            return BackController::post($id, $twig);
        }, 'admin-article');

        $router->map('GET', '/admin/modifier-commentaire/[i:id]', function ($id, $twig) {
            return BackController::modifyComment($id, $twig);
        }, 'modification-commentaire');

        $router->map('GET', '/admin/utilisateurs', function ($twig) {
            return BackController::usersList($twig);
        }, 'utilisateurs');

        $router->map('GET', '/admin/utilisateurs/[i:id]', function ($id, $twig) {
            return BackController::userProfile($id, $twig);
        }, 'utilisateur');

        $router->map('GET', '/admin/modifier-utilisateur/[i:id]', function ($id, $twig) {
            return BackController::userModify($id, $twig);
        }, 'modifier-utilisateur');

        $router->map('GET', '/admin/supprimer-utilisateur/[i:id]', function ($id, $twig) {
            return BackController::userDelete($id, $twig);
        }, 'supprimer-utilisateur');

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

        $router->map('POST', '/ajouter-commentaire/[i:id]', function ($id) {
            return FrontController::addComment($id);
        }, 'ajouter-commentaire');

        $router->map('POST', '/modifier-commentaire/[i:id]', function ($id) {
            return FrontController::addComment($id, true);
        }, 'modifier-commentaire');

        $router->map('POST', '/envoyer-message', function () {
            return FrontController::sendMessage();
        }, 'envoyer-message');

        $router->map('POST', '/reset-password-send-email', function () {
            return FrontController::resetPasswordSendEmail(true);
        }, 'reset-password-send-email');

        $router->map('POST', '/reset-password-send-password', function ($twig) {
            return FrontController::newPassword(null, null, true);
        }, 'reset-password-send-password');

        // =======================ADMIN ROUTES =======================
        $router->map('POST', '/admin/ecrire-un-article', function ($twig) {
            return BackController::writePost($twig);
        }, 'ajouter-article');

        $router->map('POST', '/admin/modifier-utilisateur/[i:id]', function ($id, $twig) {
            return BackController::userModify($id, $twig);
        }, 'modifier-utilisateur-post');

        return $router;
    }

    /**
     * Verify matches and get parameters
     *
     * @param object $twig
     * @param object $router
     * @return void
     */
    public static function MatchesRoutes(object $twig = null, object $router)
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
//                echo json_encode('Error [1]: ' . $e);
            } catch (Twig_Error_Runtime $e) {
                header('Content-type: application/json');
//                echo json_encode('Error [2]: ' . $e);
            } catch (Twig_Error_Syntax $e) {
                header('Content-type: application/json');
//                echo json_encode('Error [3]: ' . $e);
            }
        } else {
            // no route was matched
            header($_SERVER["SERVER_PROTOCOL"] . ' 404 Not Found');
        }
    }
}
