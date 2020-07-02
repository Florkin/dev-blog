<?php

namespace App;

use Admin\Controller\BackController;
use Admin\Model\Manager\AdminPostManager;
use \App\Controller\FrontController;
use App\Controller\Post\Comment;
use App\Controller\Post\Post;
use App\Controller\User\User;
use App\Model\Manager\CommentManager;
use App\Model\Manager\UserManager;

/**
 * Routing class
 */
abstract class Routes
{

    const NOT_LOGGED_MESSAGE = "Vous devez être connecté a votre compte pour accèder à cette fonctionnalité";
    const NOT_ADMIN_MESSAGE = "Vous devez être administrateur pour accèder à cette fonctionnalité";
    const NOT_AUTHOR_MESSAGE = "Vous devez être l'auteur ou un administrateur pour modifier ceci";
    const NOT_USER_MESSAGE = "Vous devez être l'utilisateur concerné ou un administrateur pour modifier ceci";
    const ALREADY_LOGGED = "Vous êtes déjà loggés";

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
            if (!UserManager::checkIsLogged()) {
                return FrontController::registration($twig);
            } else {
                return FrontController::unauthorized($twig, Self::NOT_LOGGED_MESSAGE);
            }
        }, 'formulaire-inscription');

        $router->map('GET', '/articles', function ($twig) {
            return FrontController::postslist($twig);
        }, 'articles');

        $router->map('GET', '/articles/[i:id]', function ($id, $twig) {
            $post = new Post($id);
            if ($post->isActive() == 1){
                return FrontController::post($id, $twig);
            } else {
                return FrontController::unauthorized($twig, Self::notActiveMessage);
            }
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

        $router->map('GET', '/contact', function ($twig) {
            return FrontController::contact($twig);
        }, 'contact');

        // =======================ADMIN ROUTES =======================

        $router->map('GET', '/admin/', function ($twig) {
            if (UserManager::checkIsLogged()) {
                return BackController::adminList($twig);
            } else {
                return FrontController::unauthorized($twig, Self::NOT_LOGGED_MESSAGE);
            }
        }, 'Administration');

        $router->map('GET', '/admin/ecrire-un-article', function ($twig) {
            if (UserManager::checkIsLogged()) {
                return BackController::writePost($twig);                ;
            } else {
                return FrontController::unauthorized($twig, Self::NOT_LOGGED_MESSAGE);
            }
        }, 'write-post');

        $router->map('GET', '/admin/modifier-article/[i:id]', function ($id, $twig) {
            $post = new Post($id);
            if (UserManager::checkIsLogged() && (UserManager::isAdmin() || UserManager::getUserId() == $post->getAuthorId())) {
                return BackController::writePost($twig, $id);
            } else {
                return FrontController::unauthorized($twig, Self::NOT_AUTHOR_MESSAGE);
            }
        }, 'modify-post');

        $router->map('GET', '/admin/supprimer-article/[i:id]', function ($id, $twig) {
            $post = new Post($id);
            if (UserManager::checkIsLogged() && (UserManager::isAdmin() || UserManager::getUserId() == $post->getAuthorId())) {
                return BackController::deletePost($id);
            } else {
                return FrontController::unauthorized($twig, Self::NOT_AUTHOR_MESSAGE);
            }
        }, 'delete-post');

        $router->map('GET', '/admin/supprimer-commentaire/[i:id]', function ($id, $twig) {
            $comment = new Comment($id);
            if (UserManager::checkIsLogged() && (UserManager::isAdmin() || UserManager::getUserId() == $comment->getAuthorId())) {
                return BackController::deleteComment($id);
            } else {
                return FrontController::unauthorized($twig, Self::NOT_AUTHOR_MESSAGE);
            }
        }, 'delete-comment');

        $router->map('GET', '/admin/commentaires-a-valider', function ($twig) {
            if (UserManager::checkIsLogged() && UserManager::isAdmin()){
                return BackController::inactiveCommentsList($twig);
            } else {
                return FrontController::unauthorized($twig, Self::NOT_ADMIN_MESSAGE);
            }
        }, 'inactive-comments-list');

        $router->map('GET', '/admin/articles-a-valider', function ($twig) {
            if (UserManager::checkIsLogged() && UserManager::isAdmin()){
                return BackController::inactivePostList($twig);
            } else {
                return FrontController::unauthorized($twig, Self::NOT_ADMIN_MESSAGE);
            }
        }, 'inactive-posts-list');

        $router->map('GET', '/admin/activation-article/[i:id]', function ($id, $twig) {
            if (UserManager::checkIsLogged() && UserManager::isAdmin()){
                return AdminPostManager::postToggleActivation($id);
            } else {
                return FrontController::unauthorized($twig, Self::NOT_ADMIN_MESSAGE);
            }
        }, 'activation-article');

        $router->map('GET', '/admin/activation-commentaire/[i:id]', function ($id, $twig) {
            if (UserManager::checkIsLogged() && UserManager::isAdmin()){
                return CommentManager::commentToggleActivation($id);
            } else {
                return FrontController::unauthorized($twig, Self::NOT_ADMIN_MESSAGE);
            }
        }, 'activation-commentaire');

        $router->map('GET', '/admin/articles/[i:id]', function ($id, $twig) {
            $post = new Post($id);
            if (UserManager::checkIsLogged() && (UserManager::isAdmin() || UserManager::getUserId() == $post->getAuthorId())) {
                return BackController::post($id, $twig);
            } else {
                return FrontController::unauthorized($twig, Self::NOT_AUTHOR_MESSAGE);
            }
        }, 'admin-article');

        $router->map('GET', '/admin/modifier-commentaire/[i:id]', function ($id, $twig) {
            $comment = new Comment($id);
            if (UserManager::checkIsLogged() && (UserManager::isAdmin() || UserManager::getUserId() == $comment->getAuthorId())) {
                return BackController::modifyComment($id, $twig);
            } else {
                return FrontController::unauthorized($twig, Self::NOT_AUTHOR_MESSAGE);
            }
        }, 'modification-commentaire');

        $router->map('GET', '/admin/utilisateurs', function ($twig) {
            if (UserManager::checkIsLogged() && UserManager::isAdmin()){
                return BackController::usersList($twig);
            } else {
                return FrontController::unauthorized($twig, Self::NOT_ADMIN_MESSAGE);
            }
        }, 'utilisateurs');

        $router->map('GET', '/admin/utilisateurs/[i:id]', function ($id, $twig) {
            $user = new User($id);
            if (UserManager::checkIsLogged() && (UserManager::isAdmin() || UserManager::getUserId() == $user->getIdUser())){
                return BackController::userProfile($id, $twig);
            } else {
                return FrontController::unauthorized($twig, Self::NOT_USER_MESSAGE);
            }
        }, 'utilisateur');

        $router->map('GET', '/admin/modifier-utilisateur/[i:id]', function ($id, $twig) {
            $user = new User($id);
            if (UserManager::checkIsLogged() && (UserManager::isAdmin() || UserManager::getUserId() == $user->getIdUser())){
                return BackController::userModify($id, $twig);
            } else {
                return FrontController::unauthorized($twig, Self::NOT_USER_MESSAGE);
            }
        }, 'modifier-utilisateur');

        $router->map('GET', '/admin/supprimer-utilisateur/[i:id]', function ($id, $twig) {
            $user = new User($id);
            if (UserManager::checkIsLogged() && (UserManager::isAdmin() || UserManager::getUserId() == $user->getIdUser())){
                return BackController::userDelete($id, $twig);
            } else {
                return FrontController::unauthorized($twig, Self::NOT_USER_MESSAGE);
            }
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
            if (!UserManager::checkIsLogged()) {
                return FrontController::registration($twig);
            } else {
                return FrontController::unauthorized($twig, Self::ALREADY_LOGGED);
            }
        }, 'inscription');

        $router->map('POST', '/login', function ($twig) {
            return FrontController::login($twig);
        }, 'login');

        $router->map('POST', '/ajouter-commentaire/[i:id]', function ($id) {
            return FrontController::addComment($id);
        }, 'ajouter-commentaire');

        $router->map('POST', '/modifier-commentaire/[i:id]', function ($id, $twig) {
            $comment = new Comment($id);
            if (UserManager::checkIsLogged() && (UserManager::isAdmin() || UserManager::getUserId() == $comment->getAuthorId())) {
                return FrontController::addComment($id, true);
            } else {
                return FrontController::unauthorized($twig, Self::NOT_AUTHOR_MESSAGE);
            }
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
            if (UserManager::checkIsLogged()) {
                return BackController::writePost($twig);
            } else {
                return FrontController::unauthorized($twig, Self::NOT_LOGGED_MESSAGE);
            }
        }, 'ajouter-article');

        $router->map('POST', '/admin/modifier-utilisateur/[i:id]', function ($id, $twig) {
            $user = new User($id);
            if (UserManager::checkIsLogged() && (UserManager::isAdmin() || UserManager::getUserId() == $user->getIdUser())){
                return BackController::userModify($id, $twig);
            } else {
                return FrontController::unauthorized($twig, Self::NOT_USER_MESSAGE);
            }
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
//            header(Input::server("SERVER_PROTOCOL") . ' 404 Not Found');
            return FrontController::notFound($twig);
        }
    }
}
