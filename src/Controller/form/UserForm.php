<?php

namespace App\Controller\Form;

use \App\Config;
use FormManager\Factory as F;

class UserForm
{
    private $emailField;
    private $passwordField;
    private $usernameField;
    private $submitButton;
    private $actionLink;
    private $rgpdCheck;

    public function setFormFields()
    {

        $this->usernameField =
        F::text('Votre Pseudo', [
            'class' => 'username form-control',
            'name' => 'username',
            'required' => 'required',
            'autocomplete' => 'username',
        ]);

        $this->emailField =
        F::email('Votre Email', [
            'class' => 'email form-control',
            'name' => 'email',
            'required' => 'required',
            'autocomplete' => 'email',
        ]);

        $this->passwordField =
        F::password('Votre mot de passe', [
            'class' => 'password form-control',
            'name' => 'password',
            'required' => 'required',
            'autocomplete' => 'current-password',
        ]);

        $this->rgpdCheck =
        F::checkbox('J\'accepte les conditions générales et la politique de confidentialité', [
            'class' => 'custom-control-input',
            'name' => 'remember',
            'required' => true,
        ]);

        $this->rgpdCheck->label->setAttribute('class', 'custom-control-label');
        $this->rgpdCheck->setTemplate('{{ input }} {{ label }}');
        $this->rgpdCheck->setTemplate('<div class="custom-control custom-checkbox">{{ template }}</div>');

        $this->submitButton =
        F::submit('Inscrivez vous!', [
            'class' => 'btn btn-dark btn-md text-white',
            'id' => 'submitButton',
        ]);

        // Create fields array for Twig

        $this->actionLink = Config::BASE_URL . "/inscription?action=register";
        return array(
            'action' => $this->actionLink,
            'form' => array(
                $this->emailField,
                $this->usernameField,
                $this->passwordField,
                $this->rgpdCheck,
                $this->submitButton,
            ),
        );
    }

    public function renderForm()
    {
        $form = $this->setFormFields();
        return $form;
    }

}
