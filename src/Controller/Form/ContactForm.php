<?php

namespace App\Controller\Form;

use \App\Config;
use App\Controller\Validator\Session;
use App\Model\Manager\UserManager;
use FormManager\Factory as F;

class ContactForm
{
    private $firstnameField;
    private $lastnameField;
    private $emailField;
    private $subjectField;
    private $messageField;
    private $submitButton;
    private $actionLink;


    /**
     * Create fields for login form
     *
     * @return array
     */
    public function setFormFields($comment = null): array
    {
        $formDataGetter = new Session();
        $formData = $formDataGetter->getFormdata();
        isset($formData) ? $persist = $formData : null;

        $this->lastnameField =
            F::text('Nom', [
                'class' => 'form-control',
                'name' => 'lastname',
                'required' => 'required',
                'value' => $persist["lastname"] ?? null
            ]);

        $this->firstnameField =
            F::text('Prénom', [
                'class' => 'form-control',
                'name' => 'firstname',
                'required' => 'required',
                'value' => $persist["firstname"] ?? null
            ]);

        $this->emailField =
            F::email('Email', [
                'class' => 'form-control',
                'name' => 'email',
                'required' => 'required',
                'value' => $persist["email"] ?? null
            ]);

        $this->subjectField =
            F::text('sujet', [
                'class' => 'form-control',
                'name' => 'subject',
                'required' => 'required',
                'value' => $persist["subject"] ?? null
            ]);

        $this->messageField =
            F::textarea('message', [
                'class' => 'form-control',
                'name' => 'message',
                'required' => 'required',
            ]);

        isset($persist["message"]) ? $this->messageField->setValue($persist["message"]) : null;


        $this->submitButton =
            F::submit('Soumettre', [
                'class' => 'btn btn-dark btn-md text-white',
            ]);

        $formDataGetter->deleteFormdata();

        $this->actionLink = _BASE_URL_ . "/envoyer-message";

        return array(
            'action' => $this->actionLink,
            'form' => array(
                $this->firstnameField,
                $this->lastnameField,
                $this->emailField,
                $this->subjectField,
                $this->messageField,
                $this->submitButton,
            ),
        );
    }


    /**
     * Render login form
     *
     * @return array
     */
    public function renderForm(): array
    {
        $form = $this->setFormFields();
        return $form;
    }

}
