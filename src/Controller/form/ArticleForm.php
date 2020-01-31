<?php

use FormManager\Factory as F;

class ArticleForm
{
    private $articleContent;
    private $articleTitle;
    private $articleSubtitle;
    private $articleImg;

    public function setFormFields()
    {

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

        // Create fields array for Twig
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
    }

    public function renderForm()
    {
        $form = $this->setFormFields();
        return $form;
    }
}
