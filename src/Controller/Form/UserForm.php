<?php

namespace App\Controller\Form;

use App\Controller\Validator\Session;
use App\Model\Manager\UserManager;
use App\Tools;
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
    public function setFormFields($values = null, $modify = false, $id_user = null): array
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
                'placeholder' => 'Pseudonyme',
                'value' => $values["username"] ?? null
            ]);

        $this->emailField =
            F::email('Votre Email', [
                'class' => 'email form-control',
                'name' => 'email',
                'required' => 'required',
                'placeholder' => 'Email',
                'autocomplete' => 'email',
                'value' => $values["email"] ?? null
            ]);

        $this->passwordField =
            F::password('Mot de passe', [
                'class' => 'password form-control',
                'name' => 'password',
                'required' => 'required',
                'placeholder' => 'Mot de passe',
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
        isset($values['role']) ? $this->role->setValue(strtolower($values['role'])) : null;


        $this->rgpdCheck->label->setAttribute('class', 'custom-control-label');
        $this->rgpdCheck->setTemplate('{{ input }} {{ label }}');
        $this->rgpdCheck->setTemplate('<div class="custom-control custom-checkbox">{{ template }}</div>');

        $this->submitButton =
            F::submit('Valider', [
                'class' => 'btn btn-primary',
                'id' => 'submitButton',
            ]);

        $formDataGetter->deleteFormdata();

        // Create fields array for Twig
        if ($modify) {
            $this->passwordField->required = false;
            $this->actionLink = _ADMIN_URL_ . "/modifier-utilisateur/" . $values['id_user'];

            $formFieldsRenderingArray['email'] =  $this->emailField;
            $formFieldsRenderingArray['username'] =  $this->usernameField;

            // can manage roles if admin, add radio buttons
            if (UserManager::isAdmin()) {
                $formFieldsRenderingArray['role'] =  $this->role;
            }

            // can change password if same user, add field
            if (UserManager::getUserId() == $id_user) {
                $formFieldsRenderingArray['password'] = $this->passwordField;
            }
            $formFieldsRenderingArray['submit'] =  $this->submitButton;


            return array(
                'action' => $this->actionLink,
                'form' => $formFieldsRenderingArray,
            );


        } else {
            $this->actionLink = _BASE_URL_ . "/inscription?action=register";
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
    public function renderForm($values = null, $modify = false, $id_user = null): array
    {
        $form = $this->setFormFields($values, $modify, $id_user);
        return $form;
    }

}
