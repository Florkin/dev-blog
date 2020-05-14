<?php

namespace App\Model\Manager;

use App\Controller\FrontController;
use App\Controller\Validator\Validator;
use Delight\Auth\Auth as Auth;

class UserManager
{

    private $id_user = null;

    public function __construct($id_user = null)
    {
        $this->id_user = $id_user;
    }

    /**
     * Create users related table if don't exist
     *
     * @param object $db
     * @return void
     */
    public static function createTables(object $db)
    {
        $sql = "CREATE TABLE IF NOT EXISTS `users` (
            `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
            `email` varchar(249) COLLATE utf8mb4_unicode_ci NOT NULL,
            `password` varchar(255) CHARACTER SET latin1 COLLATE latin1_general_cs NOT NULL,
            `username` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
            `status` tinyint(2) unsigned NOT NULL DEFAULT '0',
            `verified` tinyint(1) unsigned NOT NULL DEFAULT '0',
            `resettable` tinyint(1) unsigned NOT NULL DEFAULT '1',
            `roles_mask` int(10) unsigned NOT NULL DEFAULT '0',
            `registered` int(10) unsigned NOT NULL,
            `last_login` int(10) unsigned DEFAULT NULL,
            `force_logout` mediumint(7) unsigned NOT NULL DEFAULT '0',
            PRIMARY KEY (`id`),
            UNIQUE KEY `email` (`email`)
          ) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
          
          CREATE TABLE IF NOT EXISTS `users_confirmations` (
            `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
            `user_id` int(10) unsigned NOT NULL,
            `email` varchar(249) COLLATE utf8mb4_unicode_ci NOT NULL,
            `selector` varchar(16) CHARACTER SET latin1 COLLATE latin1_general_cs NOT NULL,
            `token` varchar(255) CHARACTER SET latin1 COLLATE latin1_general_cs NOT NULL,
            `expires` int(10) unsigned NOT NULL,
            PRIMARY KEY (`id`),
            UNIQUE KEY `selector` (`selector`),
            KEY `email_expires` (`email`,`expires`),
            KEY `user_id` (`user_id`)
          ) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
          
          CREATE TABLE IF NOT EXISTS `users_remembered` (
            `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
            `user` int(10) unsigned NOT NULL,
            `selector` varchar(24) CHARACTER SET latin1 COLLATE latin1_general_cs NOT NULL,
            `token` varchar(255) CHARACTER SET latin1 COLLATE latin1_general_cs NOT NULL,
            `expires` int(10) unsigned NOT NULL,
            PRIMARY KEY (`id`),
            UNIQUE KEY `selector` (`selector`),
            KEY `user` (`user`)
          ) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
          
          CREATE TABLE IF NOT EXISTS `users_resets` (
            `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
            `user` int(10) unsigned NOT NULL,
            `selector` varchar(20) CHARACTER SET latin1 COLLATE latin1_general_cs NOT NULL,
            `token` varchar(255) CHARACTER SET latin1 COLLATE latin1_general_cs NOT NULL,
            `expires` int(10) unsigned NOT NULL,
            PRIMARY KEY (`id`),
            UNIQUE KEY `selector` (`selector`),
            KEY `user_expires` (`user`,`expires`)
          ) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
          
          CREATE TABLE IF NOT EXISTS `users_throttling` (
            `bucket` varchar(44) CHARACTER SET latin1 COLLATE latin1_general_cs NOT NULL,
            `tokens` float unsigned NOT NULL,
            `replenished_at` int(10) unsigned NOT NULL,
            `expires_at` int(10) unsigned NOT NULL,
            PRIMARY KEY (`bucket`),
            KEY `expires_at` (`expires_at`)
          ) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;";

        $db->exec($sql);
    }

    /**
     * Check if user is logged
     *
     * @return bool
     */
    public static function checkIsLogged(): bool
    {
        $db = DbManager::openDB();
        if (!DbManager::tableExists($db, 'Users')) {
            Self::createTables($db);
        }

        if (!isset($auth)) {
            $auth = new Auth(DbManager::openDB(), null, null, false);
        }

        if ($auth->isLoggedIn()) {
            $isLogged = true;
        } else {
            $isLogged = false;
        }
        return $isLogged;
    }

    public static function isAdmin(): ?bool
    {
        if (Self::checkIsLogged()) {
            $roles = Self::getUserRole();
            if (in_array("ADMIN", $roles)) {
                return true;
            }
            return false;
        } else {
            return null;
        }
    }

    public static function getUserRole(): ?array
    {
        if (Self::checkIsLogged()) {
            if (!isset($auth)) {
                $auth = new Auth(DbManager::openDB(), null, null, false);
            }

            $roles = $auth->getRoles();
            return $roles;
        } else {
            return null;
        }
    }

    /**
     * Get logged user id
     *
     * @return integer
     */
    public static function getUserId(): ?string
    {
        if (Self::checkIsLogged()) {
            if (!isset($auth)) {
                $auth = new Auth(DbManager::openDB(), null, null, false);
            }
            return $auth->getUserId();
        } else {
            return null;
        }

    }

    /**
     * Get logged user username
     *
     * @return string
     */
    public static function getUsername(): ?string
    {
        if (Self::checkIsLogged()) {
            if (!isset($auth)) {
                $auth = new Auth(DbManager::openDB(), null, null, false);
            }
            return $auth->getUsername();
        } else {
            return null;
        }
    }

    /**
     * Get logged user email
     *
     * @return string
     */
    public static function getEmail(): ?string
    {
        if (Self::checkIsLogged()) {
            if (!isset($auth)) {
                $auth = new Auth(DbManager::openDB(), null, null, false);
            }

            return $auth->getEmail();
        } else {
            return null;
        }
    }

    /**
     * User register function
     *
     * @param array $formData
     * @param $twig
     * @return void
     * @throws \Delight\Auth\AuthError
     */
    public function register(array $formData, $twig)
    {
        $db = DbManager::openDB();
        if (!DbManager::tableExists($db, 'Users')) {
            Self::createTables($db);
        }

        $email = $formData['email'];
        $password = $formData['password'];
        $username = $formData['username'];

        if (!isset($auth)) {
            $auth = new Auth($db, null, null, false);
        }

        try {
            $userId = $auth->register($email, $password, $username);

            $messages["status"] = "success";
            $messages['message'] = "Votre compte a bien été enregistré. Vous allez recevoir un email pour l'activer.";

            echo json_encode($messages);

            $auth->admin()->addRoleForUserById($userId, \Delight\Auth\Role::AUTHOR);

        } catch (\Delight\Auth\InvalidEmailException $e) {
            die('Invalid email address');
        } catch (\Delight\Auth\InvalidPasswordException $e) {
            die('Invalid password');
        } catch (\Delight\Auth\UserAlreadyExistsException $e) {
            $registerForm = FrontController::getRegisterForm();
            $messages["status"] = "error";
            $messages['message'] = "Cette adresse email a déjà été enregistrée sur le site";
            echo json_encode($messages);
        } catch (\Delight\Auth\TooManyRequestsException $e) {
            $registerForm = FrontController::getRegisterForm();
            $messages["status"] = "error";
            $messages['message'] = "Trop de requètes";
        }

        return $messages;
    }

    /**
     * User Login function
     *
     * @param array $formData
     * @param $twig
     * @return void
     * @throws \Delight\Auth\AttemptCancelledException
     * @throws \Delight\Auth\AuthError
     */
    public function login(array $formData, $twig)
    {
        $email = $formData['email'];
        $password = $formData['password'];
        $remember = (empty($formData['remember']) ? 0 : 1);

        if (!isset($auth)) {
            $auth = new Auth(DbManager::openDB(), null, null, false);
        }

        if (isset($remember) && $remember == 1) {
            // keep logged in for one year
            $rememberDuration = (int)(60 * 60 * 24 * 365.25);
        } else {
            // do not keep logged in after session ends
            $rememberDuration = null;
        }

        try {
            $auth->login($email, $password, $rememberDuration);

            $messages["status"] = "success";
            $messages['message'] = "Vous êtes maintenant connectés à votre compte";
            echo json_encode($messages);
        } catch (\Delight\Auth\InvalidEmailException $e) {
            $messages["status"] = "error";
            $messages['message'] = "Cet email n'existe pas";
            echo json_encode($messages);
        } catch (\Delight\Auth\InvalidPasswordException $e) {
            $messages["status"] = "error";
            $messages['message'] = "Ce mot de passe est faux";
            echo json_encode($messages);
        } catch (\Delight\Auth\EmailNotVerifiedException $e) {
            $messages["status"] = "error";
            $messages['message'] = "Cette adresse mail n'est pas vérifiée";
            echo json_encode($messages);
        } catch (\Delight\Auth\TooManyRequestsException $e) {
            $messages["status"] = "error";
            $messages['message'] = "Trop de requètes";
            echo json_encode($messages);
        }
        return $messages;
    }

    /**
     * Logout function
     *
     * @return void
     * @throws \Delight\Auth\AuthError
     */
    public function logout()
    {
        if (!isset($auth)) {
            $auth = new Auth(DbManager::openDB(), null, null, false);
        }

        try {
            $auth->logOutEverywhere();
            $messages['status'] = 'success';
            $messages['message'] = 'Vous êtes déconnecté de votre compte. A bientôt';
            return $messages;
        } catch (\Delight\Auth\NotLoggedInException $e) {
            $messages['status'] = 'error';
            $messages['message'] = 'Vous n\'êtes pas connecté a un compte utilisateur';
            return $messages;
        }

    }

    public function getValidator($action, $formData)
    {
        if ($action == 'register') {
            return (new Validator($formData))
                ->required('email', 'username', 'password')
                ->email('email')
                ->password('password')
                ->username('username');
        } elseif ($action == 'login') {
            return (new Validator($formData))
                ->required('email', 'password')
                ->email('email')
                ->password('password');
        }
    }

    public function getUserDataById()
    {
        $sql = "SELECT *FROM users WHERE id = " . $this->id_user;
        $db = DbManager::openDB();
        $response = $db->query($sql);
        $data = $response->fetch();

        return $data;
    }

    public function getEmailById(): ?string
    {
        $data = $this->getUserDataById();
        return $data['email'];
    }

    public function getUsernameById(): ?string
    {
        $data = $this->getUserDataById();
        return $data['username'];
    }

}
