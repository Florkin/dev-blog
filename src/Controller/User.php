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
            ]),

        );
    }

    public static function displayLoginForm($twig)
    {
        $form = self::loginForm();
        $actionLogin = Config::BASE_URL . "/?page=login&action=login";
        $twig->addGlobal('loginForm', $form);
        $twig->addGlobal('actionLogin', $actionLogin);
    }

    public static function loginForm()
    {
        $rememberCheck= F::checkbox('Se souvenir de moi', [
            'class' => 'custom-control-input',
            'name' => 'remember',
        ]);

        $rememberCheck->label->setAttribute('class', 'custom-control-label');
        $rememberCheck->setTemplate('{{ input }} {{ label }}');
        $rememberCheck->setTemplate('<div class="custom-control custom-checkbox">{{ template }}</div>');

        $loginForm = array(
            F::email('Votre Email', [
                'class' => 'email form-control',
                'name' => 'email',
                'required' => 'required',
            ]),

            F::password('Votre mot de passe', [
                'class' => 'password form-control',
                'name' => 'password',
                'required' => 'required',
            ]),

            $rememberCheck,

            F::submit('Se connecter', [
                'class' => 'btn btn-dark btn-md text-white',
            ]),

        );

        return $loginForm;
    }

    public static function register($formData)
    {
        $email = $formData['email'];
        $password = $formData['password'];
        $username = $formData['username'];

        $auth = new \Delight\Auth\Auth(DbManager::openDB(), null, null, false);

        try {
            $userId = $auth->register($email, $password, $username 
            // function ($selector, $token) {
            //     echo 'Send ' . $selector . ' and ' . $token . ' to the user (e.g. via email)';
            // }
        );

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

    public static function login($formData)
    {
        $email = $formData['email'];
        $password = $formData['password'];
        $remember = (empty($formData['remember']) ? 0 : 1);

        $auth = new \Delight\Auth\Auth(DbManager::openDB(), null, null, false);
        if (isset($remember) && $remember == 1) {
            // keep logged in for one year
            $rememberDuration = (int) (60 * 60 * 24 * 365.25);
        }
        else {
            // do not keep logged in after session ends
            $rememberDuration = null;
        }

        try {            
            $auth->login($email, $password, $rememberDuration);
        
            echo 'User is logged in';
        }
        catch (\Delight\Auth\InvalidEmailException $e) {
            die('Wrong email address');
        }
        catch (\Delight\Auth\InvalidPasswordException $e) {
            die('Wrong password');
        }
        catch (\Delight\Auth\EmailNotVerifiedException $e) {
            die('Email not verified');
        }
        catch (\Delight\Auth\TooManyRequestsException $e) {
            die('Too many requests');
        }
    }

}
