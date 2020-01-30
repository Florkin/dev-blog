<?php

use FormManager\Factory as F;

class Form
{
    private $formType;
    private $emailField;
    private $passwordField;
    private $usernameField;
    private $submitButton;
    private $emailFieldLogin;
    private $passwordFieldLogin;
    private $rememberCheckLogin;
    private $submitButtonLogin;
    private $actionLink;
    private $rememberCheck;
    private $rgpdCheck;
    private $articleContent;
    private $articleTitle;
    private $articleSubtitle;
    private $articleImg;

    public function __construct($type)
    {
        $this->formType = $type;
    }

    public function setFormFields()
    {
        // ================= Register Formfields ===================
        if ($this->formType == 'register') {
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

            // ================= Login Formfields ===================
        } elseif ($this->formType == 'login') {
            $this->emailFieldLogin =
            F::email('Votre Email', [
                'class' => 'email form-control',
                'name' => 'email',
                'required' => 'required',
                'autocomplete' => 'username',
            ]);

            $this->passwordFieldLogin =
            F::password('Votre mot de passe', [
                'class' => 'password form-control',
                'name' => 'password',
                'required' => 'required',
                'autocomplete' => 'current-password',
            ]);

            $this->submitButtonLogin =
            F::submit('Connectez vous!', [
                'class' => 'btn btn-dark btn-md text-white',
            ]);

            $this->rememberCheckLogin =
            F::checkbox('Se souvenir de moi', [
                'class' => 'custom-control-input',
                'name' => 'remember',
            ]);

            $this->rememberCheckLogin->label->setAttribute('class', 'custom-control-label');
            $this->rememberCheckLogin->setTemplate('{{ input }} {{ label }}');
            $this->rememberCheckLogin->setTemplate('<div class="custom-control custom-checkbox">{{ template }}</div>');

            // ================= Article Formfields ===================
        } elseif ($this->formType == 'article') {
            $this->articleContent =
            F::textarea('Contenu', [
                'class' => 'tiny-mce',
                'id' => 'tinymce',
                'name' => 'content',
                'required' => 'required',
            ]);
            $this->articleTitle =
            F::text('Titre', [
                'class' => 'article-title form-control',
                'name' => 'title',
                'required' => 'required',
            ]);
            $this->articleSubtitle =
            F::text('Phrase d\'accroche', [
                'class' => 'article-subtitle form-control',
                'name' => 'subtitle',
                'required' => 'required',
            ]);
            $this->articleImg =
            F::file('Votre Image d\'en-tête', [
                'class' => 'image-field form-control',
                'name' => 'image',
            ]);
            $this->submitButton =
            F::submit('Soumettre', [
                'class' => 'btn btn-dark btn-md text-white',
            ]);
        };

        // Create fields array for Twig
        switch ($this->formType) {
            case 'login':
                $this->actionLink = Config::BASE_URL . "/?page=login";
                return array(
                    'action' => $this->actionLink,
                    'form' => array(
                        $this->emailFieldLogin,
                        $this->passwordFieldLogin,
                        $this->rememberCheckLogin,
                        $this->submitButtonLogin,
                    ),
                );
                break;
            case 'register':
                $this->actionLink = Config::BASE_URL . "/?page=registration&action=register";
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
                break;
            case 'article':
                $this->actionLink = Config::BASE_URL . "/?page=articleform&action=add";
                return array(
                    'action' => $this->actionLink,
                    'form' => array(
                        $this->articleImg,
                        $this->articleTitle,
                        $this->articleSubtitle,
                        $this->articleContent,
                        $this->submitButton,
                    ),
                );
                break;
        };
    }

    public function renderForm()
    {
        $form = $this->setFormFields($this->formType);
        return $form;
    }

}
