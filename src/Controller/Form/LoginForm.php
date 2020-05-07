<?php

namespace App\Controller\Form;

use \App\Config;
use App\Controller\Validator\Session;
use FormManager\Factory as F;

class LoginForm
{
    private $emailField;
    private $passwordField;
    private $rememberCheck;
    private $submitButton;
    private $actionLink;

    /**
     * Create fields for login form
     *
     * @return array
     */
    public function setFormFields() : array
    {
        $formDataGetter = new Session();
        $formData = $formDataGetter->getFormdata();
        isset($formData) ? $post = $formData : null;

        $this->emailField =
        F::email('Votre Email', [
            'class' => 'email form-control',
            'name' => 'email',
            'required' => 'required',
            'autocomplete' => 'username',
            'value' => $post["email"] ?? null
        ]);

        $this->passwordField =
        F::password('Votre mot de passe', [
            'class' => 'password form-control',
            'name' => 'password',
            'required' => 'required',
            'autocomplete' => 'current-password',
        ]);

        $this->submitButton =
        F::submit('Connectez vous!', [
            'class' => 'btn btn-dark btn-md text-white',
        ]);

        $this->rememberCheck =
        F::checkbox('Se souvenir de moi', [
            'class' => 'custom-control-input',
            'name' => 'remember',
        ]);

        $this->rememberCheck->label->setAttribute('class', 'custom-control-label');
        $this->rememberCheck->setTemplate('{{ input }} {{ label }}');
        $this->rememberCheck->setTemplate('<div class="custom-control custom-checkbox">{{ template }}</div>');

        $this->actionLink = Config::BASE_URL . "/login";

//        $formDataGetter->deleteFormdata();

        return array(
            'action' => $this->actionLink,
            'form' => array(
                $this->emailField,
                $this->passwordField,
                $this->rememberCheck,
                $this->submitButton,
            ),
        );

    }

    /**
     * Render login form
     *
     * @return array
     */
    public function renderForm() : array
    {
        $form = $this->setFormFields();
        return $form;
    }

}
