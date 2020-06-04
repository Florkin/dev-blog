<?php

namespace App\Controller\Form;

use App\Controller\Validator\Session;
use FormManager\Factory as F;
use \App\Config;

class UserForm
{
    private $emailField;
    private $passwordField;
    private $usernameField;
    private $submitButton;
    private $actionLink;
    private $rgpdCheck;
    private $role;

    /**
     * Create form fields for user registration /modification
     *
     * @return array
     */
    public function setFormFields($values = null, $modify = false): array
    {
        $formDataGetter = new Session();
        $formData = $formDataGetter->getFormdata();
        isset($formData) ? $values = $formData : null;

        $this->usernameField =
            F::text('Votre Pseudo', [
                'class' => 'username form-control',
                'name' => 'username',
                'required' => 'required',
                'autocomplete' => 'username',
                'value' => $values["username"] ?? null
            ]);

        $this->emailField =
            F::email('Votre Email', [
                'class' => 'email form-control',
                'name' => 'email',
                'required' => 'required',
                'autocomplete' => 'email',
                'value' => $values["email"] ?? null
            ]);

        $this->passwordField =
            F::password('Mot de passe', [
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
        $this->role =
            F::radioGroup([
                'admin' => 'Admin',
                'author' => 'Author',
            ]);
        $this->role->setName('role');
        $this->role->setValue(strtolower($values['role']));


        $this->rgpdCheck->label->setAttribute('class', 'custom-control-label');
        $this->rgpdCheck->setTemplate('{{ input }} {{ label }}');
        $this->rgpdCheck->setTemplate('<div class="custom-control custom-checkbox">{{ template }}</div>');

        $this->submitButton =
            F::submit('Valider', [
                'class' => 'btn btn-dark btn-md text-white',
                'id' => 'submitButton',
            ]);

        $formDataGetter->deleteFormdata();

        // Create fields array for Twig
        if ($modify) {
            $this->actionLink = _BASE_URL_ . "/inscription?action=register";
            return array(
                'action' => $this->actionLink,
                'form' => array(
                    $this->emailField,
                    $this->usernameField,
                    $this->passwordField,
                    $this->role,
                    $this->submitButton,
                ),
            );
        } else {
            $this->actionLink = _ADMIN_URL_ . "/modifier-utilisateur?action=modify";
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

    }

    /**
     * Render form fields for user registration /modification
     *
     * @return array
     */
    public function renderForm($values = null, $modify = false): array
    {
        $form = $this->setFormFields($values, $modify);
        return $form;
    }

}
