<?php

namespace App\Model\Manager;

class UserManager
{
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
     * @return boolean
     */
    public static function checkIsLogged() : boolean
    {
        if (!isset($auth)) {
            $auth = new \Delight\Auth\Auth(DbManager::openDB(), null, null, false);
        }

        if ($auth->isLoggedIn()) {
            $isLogged = true;
        } else {
            $isLogged = false;
        }
        return $isLogged;
    }

    /**
     * Get logged user username
     *
     * @return string
     */
    public static function getUsername() : string
    {
        if (!isset($auth)) {
            $auth = new \Delight\Auth\Auth(DbManager::openDB(), null, null, false);
        }

        return $auth->getUsername();
    }

    /**
     * Get logged user email
     *
     * @return string
     */
    public static function getEmail() : string
    {
        if (!isset($auth)) {
            $auth = new \Delight\Auth\Auth(DbManager::openDB(), null, null, false);
        }

        return $auth->getEmail();
    }

    /**
     * User register function
     *
     * @param array $formData
     * @return void
     */
    public function register(array $formData)
    {
        $db = DbManager::openDB();
        if (!DbManager::tableExists($db, 'Users')){
            Self::createTables($db);
        }

        $email = $formData['email'];
        $password = $formData['password'];
        $username = $formData['username'];

        if (!isset($auth)) {
            $auth = new \Delight\Auth\Auth($db, null, null, false);
        }

        try {
            $userId = $auth->register($email, $password, $username
        );

            echo 'We have signed up a new UserManager with the ID ' . $userId;
        } catch (\Delight\Auth\InvalidEmailException $e) {
            die('Invalid email address');
        } catch (\Delight\Auth\InvalidPasswordException $e) {
            die('Invalid password');
        } catch (\Delight\Auth\UserAlreadyExistsException $e) {
            die('User already exists');
        } catch (\Delight\Auth\TooManyRequestsException $e) {
            die('Too many requests');
        }
    }

    /**
     * User Login function
     *
     * @param array $formData
     * @return void
     */
    public function login(array $formData)
    {
        $email = $formData['email'];
        $password = $formData['password'];
        $remember = (empty($formData['remember']) ? 0 : 1);

        if (!isset($auth)) {
            $auth = new \Delight\Auth\Auth(DbManager::openDB(), null, null, false);
        }

        if (isset($remember) && $remember == 1) {
            // keep logged in for one year
            $rememberDuration = (int) (60 * 60 * 24 * 365.25);
        } else {
            // do not keep logged in after session ends
            $rememberDuration = null;
        }

        try {
            $auth->login($email, $password, $rememberDuration);

            echo 'User is logged in';
        } catch (\Delight\Auth\InvalidEmailException $e) {
            die('Wrong email address');
        } catch (\Delight\Auth\InvalidPasswordException $e) {
            die('Wrong password');
        } catch (\Delight\Auth\EmailNotVerifiedException $e) {
            die('Email not verified');
        } catch (\Delight\Auth\TooManyRequestsException $e) {
            die('Too many requests');
        }

    }

    /**
     * Logout function
     *
     * @return void
     */
    public function logout()
    {
        if (!isset($auth)) {
            $auth = new \Delight\Auth\Auth(DbManager::openDB(), null, null, false);
        }

        try {
            $auth->logOutEverywhere();
            die('Logged out');
        } catch (\Delight\Auth\NotLoggedInException $e) {
            die('Not logged in');
        }

    }
}
