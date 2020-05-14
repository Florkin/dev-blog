<?php

namespace App\Controller\Form;

use \App\Config;
use App\Controller\Validator\Session;
use App\Model\Manager\UserManager;
use FormManager\Factory as F;

class CommentForm
{
    private $post_id;
    private $nameField;
    private $commentField;
    private $submitButton;
    private $actionLink;

    public function __construct($post_id)
    {
        $this->post_id = $post_id;
    }

    /**
     * Create fields for login form
     *
     * @return array
     */
    public function setFormFields(): array
    {
        $formDataGetter = new Session();
        $formData = $formDataGetter->getFormdata();
        isset($formData) ? $post = $formData : null;

        $this->nameField =
            F::text('Votre nom', [
                'class' => 'comment-name form-control',
                'name' => 'comment_name',
                'required' => 'required',
                'value' => $post["comment_name"] ?? null
            ]);

        $this->commentField =
            F::textarea('Ajouter un commentaire', [
                'class' => 'comment form-control',
                'name' => 'comment',
                'required' => 'required',
            ]);

        if (isset($post["comment"])){
            $this->commentField->setValue(html_entity_decode($post["comment"], ENT_QUOTES | ENT_HTML5));
        }

        $this->submitButton =
            F::submit('Soumettre!', [
                'class' => 'btn btn-dark btn-md text-white',
            ]);

        $this->actionLink = _BASE_URL_ . "/add-comment/" . $this->post_id;

        $formDataGetter->deleteFormdata();

        if (UserManager::checkIsLogged()) {
            return array(
                'action' => $this->actionLink,
                'form' => array(
                    $this->commentField,
                    $this->submitButton,
                ),
            );
        } else {
            return array(
                'action' => $this->actionLink,
                'form' => array(
                    $this->nameField,
                    $this->commentField,
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
    public function renderForm(): array
    {
        $form = $this->setFormFields();
        return $form;
    }

}
