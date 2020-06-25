<?php

namespace App\Controller\Form;

use \App\Config;
use App\Controller\Validator\Session;
use FormManager\Factory as F;

class PasswordResetForm
{
    private $emailField;
    private $passwordField;
    private $passwordConfirmField;
    private $selectorField;
    private $tokenField;
    private $submitButton;
    private $actionLink;

    public function setFormFields(bool $password, string $selector = null, string $token = null): array
    {
        $this->emailField =
            F::email('Votre Email', [
                'class' => 'email form-control',
                'name' => 'email',
                'required' => 'required',
                'placeholder' => 'Email',
                'autocomplete' => 'username',
            ]);

        $this->passwordField =
            F::password('Nouveau mot de passe', [
                'class' => 'password form-control',
                'name' => 'password',
                'required' => 'required',
                'placeholder' => 'Nouveau mot de passe',
                'autocomplete' => 'username',
            ]);

        $this->passwordConfirmField =
            F::password('Confirmez votre mot de passe', [
                'class' => 'password form-control',
                'name' => 'password-confirm',
                'required' => 'required',
                'placeholder' => 'Confirmez votre mot de passe',
                'autocomplete' => 'username',
            ]);

        $this->selectorField =
            F::hidden('selector', [
                'class' => 'selector form-control',
                'name' => 'selector',
                'required' => 'required',
            ]);
        $this->selectorField->setValue($selector);

        $this->tokenField =
            F::hidden('token', [
                'class' => 'token form-control',
                'name' => 'token',
                'required' => 'required',
                'value' => $token,
            ]);
        $this->tokenField->setValue($token);


        $this->submitButton =
            F::submit('Réinitiliser le mot de passe', [
                'class' => 'btn btn-primary btn-md text-white',
            ]);

        $this->actionLink = $password == true ? _BASE_URL_ . "/reset-password-send-password" : _BASE_URL_ . "/reset-password-send-email";

        if ($password == true) {
            return array(
                'action' => $this->actionLink,
                'form' => array(
                    $this->passwordField,
                    $this->passwordConfirmField,
                    $this->selectorField,
                    $this->tokenField,
                    $this->submitButton,
                ),
            );
        } else {
            return array(
                'action' => $this->actionLink,
                'form' => array(
                    $this->emailField,
                    $this->submitButton,
                ),
            );
        }
    }

    /**
     * Render login form
     *
     * @return array
     */
    public function renderForm(bool $password, string $selector = null, string $token = null): array
    {
        $form = $this->setFormFields($password, $selector, $token);
        return $form;
    }

}
