<?php

class User
{
    public static function register()
    {
        $email = SuperGlobalManager::get('POST', 'email');
        $password = SuperGlobalManager::get('POST', 'password');
        $username = SuperGlobalManager::get('POST', 'username');

        $auth = new \Delight\Auth\Auth(DbManager::openDB(), null, null, false);

        try {
            $userId = $auth->register($email, $password, $username, function ($selector, $token) {
                echo 'Send ' . $selector . ' and ' . $token . ' to the user (e.g. via email)';
            });

            echo 'We have signed up a new user with the ID ' . $userId;
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

}
