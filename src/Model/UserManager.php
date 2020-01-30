<?php

class UserManager
{

    public static function checkIsLogged()
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

    public static function getUsername()
    {
        if (!isset($auth)) {
            $auth = new \Delight\Auth\Auth(DbManager::openDB(), null, null, false);
        }

        return $auth->getUsername();
    }

    public static function getEmail()
    {
        if (!isset($auth)) {
            $auth = new \Delight\Auth\Auth(DbManager::openDB(), null, null, false);
        }

        return $auth->getEmail();
    }

   
    public function register($formData)
    {
        $email = $formData['email'];
        $password = $formData['password'];
        $username = $formData['username'];

        if (!isset($auth)) {
            $auth = new \Delight\Auth\Auth(DbManager::openDB(), null, null, false);
        }

        try {
            $userId = $auth->register($email, $password, $username
                // function ($selector, $token) {
                //     echo 'Send ' . $selector . ' and ' . $token . ' to the user (e.g. via email)';
                // }
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

    public function login($formData, $twig)
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

    public function logout()
    {
        if (!isset($auth)) {
            $auth = new \Delight\Auth\Auth(DbManager::openDB(), null, null, false);
        }
        
        try {
            $auth->logOutEverywhere();
            die('Logged out');
        }
        catch (\Delight\Auth\NotLoggedInException $e) {
            die('Not logged in');
        }

    }
}
