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
    public function setFormFields(): array
    {
        $formDataGetter = new Session();
        $formData = $formDataGetter->getFormdata();
        isset($formData) ? $persist = $formData : null;

        $this->lastnameField =
            F::text('Nom', [
                'class' => 'form-control',
                'name' => 'lastname',
                'required' => 'required',
                'placeholder' => "Nom",
                'value' => $persist["lastname"] ?? null
            ]);

        $this->firstnameField =
            F::text('Prénom', [
                'class' => 'form-control',
                'name' => 'firstname',
                'required' => 'required',
                'placeholder' => "Prénom",
                'value' => $persist["firstname"] ?? null
            ]);

        $this->emailField =
            F::email('Email', [
                'class' => 'form-control',
                'name' => 'email',
                'required' => 'required',
                'placeholder' => "Email",
                'value' => $persist["email"] ?? null
            ]);

        $this->subjectField =
            F::text('sujet', [
                'class' => 'form-control',
                'name' => 'subject',
                'required' => 'required',
                'placeholder' => "Sujet",
                'value' => $persist["subject"] ?? null
            ]);

        $this->messageField =
            F::textarea('message', [
                'class' => 'form-control',
                'name' => 'message',
                'placeholder' => "Message",
                'required' => 'required',
            ]);

        isset($persist["message"]) ? $this->messageField->setValue($persist["message"]) : null;


        $this->submitButton =
            F::submit('Soumettre', [
                'class' => 'btn btn-primary mt-4',
                'id' => 'sendMessageButton',
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
     * Render Contact form
     *
     * @return array
     */
    public function renderForm(): array
    {
        $form = $this->setFormFields();
        return $form;
    }

}
