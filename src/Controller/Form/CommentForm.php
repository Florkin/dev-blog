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

    public function __construct($post_id = null)
    {
        $this->post_id = $post_id;
    }

    /**
     * Create fields for login form
     *
     * @return array
     */
    public function setFormFields($comment = null): array
    {
        $modify = isset($comment['id_comment']) ? true : false;
        $id_comment = isset($comment['id_comment']) ? $comment['id_comment'] : null;

        $formDataGetter = new Session();
        $formData = $formDataGetter->getFormdata();
        isset($formData) ? $comment = $formData : null;

        $this->nameField =
            F::text('Votre nom', [
                'class' => 'comment-name form-control',
                'name' => 'guest_author',
                'required' => 'required',
                'value' => $comment["comment_name"] ?? null
            ]);


        $this->commentField =
            F::textarea('Commentaire', [
                'class' => 'comment form-control',
                'name' => 'comment',
                'required' => 'required',
            ]);

        if (isset($comment["comment"])) {
            $this->commentField->setValue(html_entity_decode($comment["comment"], ENT_QUOTES | ENT_HTML5));
        }

        $this->submitButton =
            F::submit('Soumettre', [
                'class' => 'btn btn-dark btn-md text-white',
            ]);

        $formDataGetter->deleteFormdata();


        if ($modify) {
            $this->actionLink = _BASE_URL_ . "/modifier-commentaire/" . $id_comment;
        } else {
            $this->actionLink = _BASE_URL_ . "/ajouter-commentaire/" . $this->post_id;
        }


        if (UserManager::checkIsLogged() || isset($comment)) {
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
    public function renderForm($comment = null): array
    {
        $form = $this->setFormFields($comment);
        return $form;
    }

}
