<?php

namespace App\Controller\Form;

use \App\Config;
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

        $this->nameField =
            F::text('Votre nom', [
                'class' => 'comment-name form-control',
                'name' => 'comment_name',
                'required' => 'required',
            ]);

        $this->commentField =
            F::textarea('Ajouter un commentaire', [
                'class' => 'comment form-control',
                'name' => 'comment',
                'required' => 'required',
            ]);

        $this->submitButton =
            F::submit('Soumettre!', [
                'class' => 'btn btn-dark btn-md text-white',
            ]);

        $this->actionLink = Config::BASE_URL . "/add-comment/" . $this->post_id;

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
