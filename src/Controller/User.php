<?php

use FormManager\Factory as F;

abstract class User
{
    public static function registrationForm()
    {
        return array(

            F::email('Votre Email', [
                'class' => 'email form-control',
                'name' => 'email',
                'required' => 'required',
            ]),

            F::text('Votre Pseudo', [
                'class' => 'username form-control',
                'name' => 'username',
                'required' => 'required',
            ]),

            F::password('Votre mot de passe', [
                'class' => 'password form-control',
                'name' => 'password',
                'required' => 'required',
            ]),

            F::submit('Inscrivez vous!', [
                'class' => 'btn btn-dark btn-md text-white',
                'required' => 'required',
            ])
        
        );
    }

    public static function register($formData)
    {
        $email = $formData['email'];
        $password = $formData['password'];
        $username = $formData['username'];

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
