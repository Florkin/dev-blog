<?php

namespace App\Controller\Form;

use \App\Config;
use FormManager\Factory as F;

class PostForm
{
    private $postContent;
    private $postTitle;
    private $postIntro;
    private $postImg;

    public function setFormFields()
    {

        $this->postContent =
        F::textarea('Contenu', [
            'class' => 'tiny-mce',
            'id' => 'tinymce',
            'name' => 'content',
            'required' => 'required',
        ]);
        $this->postTitle =
        F::text('Titre', [
            'class' => 'post-title form-control',
            'name' => 'title',
            'required' => 'required',
        ]);
        $this->postIntro =
        F::textarea('Introduction', [
            'class' => 'post-intro form-control',
            'name' => 'intro',
            'required' => 'required',
        ]);
        $this->postImg =
        F::file('Votre Image d\'en-tête', [
            'class' => 'image-field form-control',
            'name' => 'image',
        ]);
        $this->submitButton =
        F::submit('Soumettre', [
            'class' => 'btn btn-dark btn-md text-white',
        ]);

        // Create fields array for Twig
        $this->actionLink = Config::BASE_URL . "/ajouter-un-article?action=add";
        return array(
            'action' => $this->actionLink,
            'form' => array(
                $this->postImg,
                $this->postTitle,
                $this->postIntro,
                $this->postContent,
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
