<?php

namespace App\Controller\Form;

use \App\Config;
use App\Controller\Validator\Session;
use FormManager\Factory as F;

class PasswordResetForm
{
    private $emailField;
    private $submitButton;
    private $actionLink;

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

        $this->submitButton =
            F::submit('Réinitiliser le mot de passe', [
                'class' => 'btn btn-dark btn-md text-white',
            ]);

        $this->actionLink = _BASE_URL_ . "/reset-password";

        $formDataGetter->deleteFormdata();

        return array(
            'action' => $this->actionLink,
            'form' => array(
                $this->emailField,
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
