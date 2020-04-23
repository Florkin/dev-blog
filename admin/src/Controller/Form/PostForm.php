<?php

namespace Admin\Controller\Form;

use FormManager\Factory as F;
use \App\Config;

class PostForm
{
    private $postContent;
    private $postTitle;
    private $postIntro;
    private $postImg;
    private $modify;

    /**
     * Create fields for post add form
     *
     * @param null $post
     * @return array
     */
    public function setFormFields($post = null): array
    {
        $this->postContent =
            F::textarea('Contenu', [
                'class' => 'tiny-mce',
                'id' => 'tinymce',
                'name' => 'content',
                'required' => 'required',
                'value' => $post["content"] ?? null
            ]);
        if (isset($post["content"])){
            $this->postContent->setValue(html_entity_decode($post["content"], ENT_QUOTES | ENT_HTML5));
        }

        $this->postTitle =
            F::text('Titre', [
                'class' => 'post-title form-control',
                'name' => 'title',
                'required' => 'required',
                'value' => $post["title"] ?? null
            ]);
        $this->postIntro =
            F::textarea('Introduction', [
                'class' => 'post-intro form-control',
                'name' => 'intro',
                'required' => 'required',
            ]);
        if (isset($post["intro"])){
            $this->postIntro->setValue(html_entity_decode($post["intro"], ENT_QUOTES | ENT_HTML5));
        }

        $this->postImg =
            F::file('Votre Image d\'en-tête', [
                'class' => 'image-field form-control',
                'name' => 'image',
            ]);
        $this->modify =
            F::hidden('modify', [
                'name' => 'modify',
            ]);
        if (isset($post['id_post'])){
            $this->modify->setValue($post['id_post']);
        }

        $this->submitButton =
            F::submit('Soumettre', [
                'class' => 'btn btn-dark btn-md text-white',
            ]);

        $this->actionLink = Config::BASE_ADMIN_URL . "/ecrire-un-article?action=add";
        return array(
            'action' => $this->actionLink,
            'form' => array(
                $this->postImg,
                $this->postTitle,
                $this->postIntro,
                $this->postContent,
                $this->modify,
                $this->submitButton,
            ),
        );
    }

    /**
     * render post form
     *
     * @return array
     */
    public function renderForm($post = null): array
    {
        $form = $this->setFormFields($post);
        return $form;
    }
}
