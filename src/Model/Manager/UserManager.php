<?php

namespace App\Model\Manager;

use App\Controller\FrontController;
use App\Controller\Mails\Mail;
use App\Controller\User\User;
use App\Controller\Validator\Validator;
use Delight\Auth\Administration;
use Delight\Auth\Auth as Auth;
use App\Tools;
use Twig\Environment;

class UserManager
{

    private $id_user = null;
    private $user_email = null;
    private $user_data = null;

    /**
     * UserManager constructor.
     * @param null $id_user
     * @param null $user_email
     */
    public function __construct($id_user = null, $user_email = null)
    {
        if (Self::checkIfUserExist(null, $id_user)) {
            if (isset($id_user) and $id_user != null) {
                $this->id_user = $id_user;
                $this->user_data = $this->getUserDataById();
            } else if (isset($user_email) and $user_email != null) {
                $this->user_email = $user_email;
                $this->user_data = $this->getUserDataByEmail();
            }
        }
    }

    /**
     * Create users related table if don't exist
     *
     * @param object $db
     */
    public static function createTables(\PDO $db)
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

    /**
     * @return bool|null
     *
     * Check if logged user is admin
     */
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

    /**
     * @return array|null
     *
     * Check logged user role
     */
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
     * @param Environment $twig
     * @return array
     * @throws \Delight\Auth\AuthError
     */
    public function register(array $formData, Environment $twig): array
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
            $userId = $auth->registerWithUniqueUsername($email, $password, $username, function ($selector, $token) use ($email, $username) {
                $url = _BASE_URL_ . '/verify_email/' . urlencode($selector) . '/' . urlencode($token);
                Mail::sendMail(
                    [$username => $email],
                    null,
                    null,
                    "[Space-Blog] Confirmez votre email",
                    "<h1>Bonjour " . $username . " </h1>"
                    . "<p>Veuillez confirmer votre email en cliquant sur <a href='" . $url . "'>ce lien</a></p>",
                    "Bonjour " . $username . ", Veuillez copier ce lien pour activer votre compte: " . $url
                );
            });

            $messages["status"] = "success";
            $messages['message'] = "Votre compte a bien été enregistré. Vous allez recevoir un email pour l'activer.";

//            echo json_encode($messages);

            $auth->admin()->addRoleForUserById($userId, \Delight\Auth\Role::AUTHOR);

        } catch (\Delight\Auth\InvalidEmailException $e) {
            $messages["status"] = "error";
            $messages['message'] = "Cette adresse email n'est pas valide";
        } catch (\Delight\Auth\InvalidPasswordException $e) {
            $messages["status"] = "error";
            $messages['message'] = "Ce mot de passe n'est pas valide";
        } catch (\Delight\Auth\UserAlreadyExistsException $e) {
//            $registerForm = FrontController::getRegisterForm();
            $messages["status"] = "error";
            $messages['message'] = "Cette adresse email a déjà été enregistrée sur le site";
//            echo json_encode($messages);
        } catch (\Delight\Auth\TooManyRequestsException $e) {
//            $registerForm = FrontController::getRegisterForm();
            $messages["status"] = "error";
            $messages['message'] = "Trop de requètes";
        } catch (\Delight\Auth\DuplicateUsernameException $e) {
//            $registerForm = FrontController::getRegisterForm();
            $messages["status"] = "error";
            $messages['message'] = "Ce nom d'utilisateur existe déjà.";
        }

        return $messages;
    }


    /**
     * @param array $formData
     * @param Environment|null $twig
     * @return array
     * @throws \Delight\Auth\AuthError
     *
     * Modify user informations
     */
    public function modify(array $formData, Environment $twig = null): array
    {
        $db = DbManager::openDB();
        if (!DbManager::tableExists($db, 'Users')) {
            Self::createTables($db);
        }

        $password = $formData['password'];
        $oldPassword = $formData['oldpassword'];
        $email = $formData['email'];
        $username = $formData['username'];

        if (!isset($auth)) {
            $auth = new Auth($db, null, null, false);
        }

        if (isset($formData['role']) && $formData['role'] == "admin") {
            try {
                $auth->admin()->addRoleForUserById($this->id_user, \Delight\Auth\Role::ADMIN);
            } catch (\Delight\Auth\UnknownIdException $e) {
                $messages['message'] = 'Unknown user ID';
            }
        } else {
            try {
                $auth->admin()->removeRoleForUserById($this->id_user, \Delight\Auth\Role::ADMIN);
            } catch (\Delight\Auth\UnknownIdException $e) {
                $messages['message'] = 'Unknown user ID';
            }
        }

        if (isset($password) && $password !== null && $password != "") {
            try {
                $auth->changePassword($oldPassword, $password);
            } catch (\Delight\Auth\NotLoggedInException $e) {
                $messages['status'] = 'error';
                $messages['message'] = 'Vous nêtes pas connectés';
                return $messages;
            } catch (\Delight\Auth\InvalidPasswordException $e) {
                $messages['status'] = 'error';
                $messages['message'] = 'Mot de passe invalide';
                return $messages;
            } catch (\Delight\Auth\TooManyRequestsException $e) {
                $messages['status'] = 'error';
                $messages['message'] = 'Trop de requètes';
                return $messages;
            }
        }

        $query = "UPDATE users SET email = '" . $email . "', username = '" . $username . "' WHERE id = " . $this->id_user;

        if ($db->exec($query) || (int)$db->errorInfo()[0] == 0) {
            $messages['status'] = "success";
            $messages['message'] = "Utilisateur correctement mis a jour";
        } else {
            $messages['status'] = "error";
            $messages['message'] = "Problème lors de la mise a jour";
        }

        return $messages;
    }

    /**
     * User Login function
     *
     * @param array $formData
     * @param Environment $twig
     * @return array
     * @throws \Delight\Auth\AttemptCancelledException
     * @throws \Delight\Auth\AuthError
     */
    public function login(array $formData, Environment $twig): array
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
//            echo json_encode($messages);
        } catch (\Delight\Auth\InvalidEmailException $e) {
            $messages["status"] = "error";
            $messages['message'] = "Cet email n'existe pas";
//            echo json_encode($messages);
        } catch (\Delight\Auth\InvalidPasswordException $e) {
            $messages["status"] = "error";
            $messages['message'] = "Ce mot de passe est faux";
//            echo json_encode($messages);
        } catch (\Delight\Auth\EmailNotVerifiedException $e) {
            $messages["status"] = "error";
            $messages['message'] = "Cette adresse mail n'est pas vérifiée";
//            echo json_encode($messages);
        } catch (\Delight\Auth\TooManyRequestsException $e) {
            $messages["status"] = "error";
            $messages['message'] = "Trop de requètes";
//            echo json_encode($messages);
        }
        return $messages;
    }

    /**
     * Logout function
     *
     * @return array
     * @throws \Delight\Auth\AuthError
     */
    public function logout(): array
    {
        if (!isset($auth)) {
            $auth = new Auth(DbManager::openDB(), null, null, false);
        }

        try {
            $auth->logOutEverywhere();
            $messages['status'] = 'success';
            $messages['message'] = 'Vous êtes déconnecté de votre compte. A bientôt';

        } catch (\Delight\Auth\NotLoggedInException $e) {
            $messages['status'] = 'error';
            $messages['message'] = 'Vous n\'êtes pas connecté a un compte utilisateur';
        }

        return $messages;
    }

    /**
     * @param string $action
     * @param array $formData
     * @return Validator
     *
     * Get user form validator
     */
    public function getValidator(string $action, array $formData)
    {
        if ($action == 'register') {
            return (new Validator($formData))
                ->required('email', 'username', 'password')
                ->email('email')
                ->password('password')
                ->username('username')
                ->isChecked('remember')
                ->isCheckbox('remember');
        } elseif ($action == 'login') {
            return (new Validator($formData))
                ->required('email', 'password')
                ->email('email')
                ->password('password')
                ->isCheckbox('remember');
        } elseif ($action == 'modify') {
            return (new Validator($formData))
                ->required('email', 'username')
                ->email('email')
//                ->password('password')
                ->username('username');
        }
    }

    /**
     * @return array|null
     *
     * Get user data by id
     */
    public function getUserDataById(): ?array
    {
        if (isset($this->id_user)) {
            $sql = "SELECT * FROM users WHERE id = " . $this->id_user;
            $db = DbManager::openDB();
            $response = $db->query($sql);
            $data = $response->fetch();

            return $data;
        }
    }

    /**
     * @return array|null
     *
     * Get user data by email
     */
    public function getUserDataByEmail(): ?array
    {
        if (isset($this->user_email) && $this->user_email != null) {
            $sql = "SELECT * FROM users WHERE email = '" . $this->user_email . "'";
            $db = DbManager::openDB();
            $response = $db->query($sql);
            $data = $response->fetch();

            if (gettype($data) == "boolean") {
                return null;
            }
            return $data;
        }
    }

    /**
     * @return string|null
     *
     * Get user email by Id
     */
    public function getEmailById(): ?string
    {
        $data = $this->user_data;
        return $data['email'];
    }

    /**
     * @return string|null
     *
     * Get user ID by email
     */
    public function getIdByEmail(): ?string
    {
        $data = $this->user_data;
        return $data['id'];
    }

    /**
     * @return string|null
     *
     * Get username by ID
     */
    public function getUsernameById(): ?string
    {
        $data = $this->user_data;
        return $data['username'];
    }

    /**
     * @return string|null
     * @throws \Delight\Auth\UnknownIdException
     *
     * Get role by user ID
     */
    public function getRoleById(): ?string
    {
        $db = DbManager::openDB();
        $user = new Administration($db);

        if (isset($this->id_user) and $this->id_user != null) {
            $role = $user->getRolesForUserById($this->id_user);
        } else if (isset($this->user_email) and $this->user_email != null) {
            $role = $user->getRolesForUserById($this->getIdByEmail());
        } else {
            return null;
        }
        if (in_array('ADMIN', $role)) {
            return 'ADMIN';
        } else {
            return 'AUTHOR';
        }
    }

    /**
     * @return string|null
     */
    public function getLastLoginById(): ?string
    {
        $data = $this->user_data;
        if ($data['last_login']) {
            return date('d/m/Y', $data['last_login']);
        }
        return null;
    }

    /**
     * @return string|null
     */
    public function getRegisteredDateById(): ?string
    {
        $data = $this->user_data;
        if ($data['registered']) {
            return date('d/m/Y', $data['registered']);
        }
        return null;
    }

    /**
     * @return bool
     *
     * Check if user account with ID is verified
     */
    public function getVerifiedById(): bool
    {
        $data = $this->user_data;
        if ($data['verified'] == 1) {
            return true;
        } else {
            return false;
        }
    }


    /**
     * @return array|null
     * @throws \ReflectionException
     *
     * Return array with users id list
     */
    public static function getUsersList(): ?array
    {
        $db = DbManager::openDB();
        $auth = new Auth($db);

        if (DbManager::tableExists($db, 'users')) {
            $query = "SELECT id FROM users";
            $response = $db->query($query);
            $users = [];
            while ($data = $response->fetch()) {
                $user = new User($data['id']);
                $users[$data['id']] = Tools::objectToArray($user);
            }

            return $users;
        }
    }

    /**
     * @return array
     * @throws \Delight\Auth\AuthError
     */
    public function deleteUserById(): array
    {
        $db = DbManager::openDB();
        $auth = new Auth($db);
        try {
            if ($this->id_user == Self::getUserId()) {
                Self::logout();
            }
            $auth->admin()->deleteUserById($this->id_user);
            $messages['status'] = 'success';
            $messages['message'] = 'l\'utilisateur a bien été supprimé';
        } catch (\Delight\Auth\UnknownIdException $e) {
            $messages['status'] = 'error';
            $messages['message'] = 'Unknown ID';
        }

        return $messages;
    }

    /**
     * @param string $selector
     * @param string $token
     * @return array
     * @throws \Delight\Auth\AuthError
     *
     * Process user email verification
     */
    public static function verifyEmail(string $selector, string $token): array
    {
        $rememberDuration = (int)(60 * 60 * 24 * 365.25);
        $db = DbManager::openDB();
        $auth = new Auth($db);

        try {
            $auth->confirmEmailAndSignIn($selector, $token, $rememberDuration);

            $messages['status'] = 'success';
            $messages['messages'] = 'Votre compte a bien été activé';
        } catch (\Delight\Auth\InvalidSelectorTokenPairException $e) {
            $messages['status'] = 'error';
            $messages['messages'] = 'Token invalide';
        } catch (\Delight\Auth\TokenExpiredException $e) {
            $messages['status'] = 'error';
            $messages['messages'] = 'Token expiré';
        } catch (\Delight\Auth\UserAlreadyExistsException $e) {
            $messages['status'] = 'error';
            $messages['messages'] = 'L\'email existe déjà';
        } catch (\Delight\Auth\TooManyRequestsException $e) {
            $messages['status'] = 'error';
            $messages['messages'] = 'Trop de requètes';
        }

        return $messages;
    }

    public static function checkIfUserExist(string $email = null, int $id = null)
    {
        $db = DbManager::openDB();

        if (isset($email) && $email != null){
            $sql = $db->prepare("SELECT id FROM users WHERE email=?");
            $sql->execute([$email]);
        } else {
            $sql = $db->prepare("SELECT id FROM users WHERE id=?");
            $sql->execute([$id]);
        }
        $return = $sql->fetch();
        if ($return) {
            return true;
        }

        return false;
    }
}
