<?php

namespace Admin\Controller\Form;

use App\Controller\Validator\Session;
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
        $formDataGetter = new Session();
        $formData = $formDataGetter->getFormdata();
        isset($formData) ? $post = $formData : null;

        $this->postContent =
            F::textarea('Contenu', [
                'class' => 'tiny-mce',
                'id' => 'tinymce',
                'name' => 'content',
                'required' => 'required',
                'placeholder' => 'Contenu',
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
                'placeholder' => 'Titre',
                'value' => $post["title"] ?? null
            ]);
        $this->postIntro =
            F::textarea('Introduction', [
                'class' => 'post-intro form-control',
                'name' => 'intro',
                'required' => 'required',
                'placeholder' => 'Introduction',
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

        $modifyPost = false;
        if (isset($post['id_post'])){
            $this->modify->setValue($post['id_post']);
            $modifyPost = true;
        }

        $this->submitButton =
            F::submit('Soumettre', [
                'class' => 'btn btn-primary btn-md text-white',
            ]);

        $this->actionLink = _ADMIN_URL_ . "/ecrire-un-article?action=add";

        $formDataGetter->deleteFormdata();

        return array(
            'modifyPost' => $modifyPost,
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
     * @param null $post
     * @return array
     */
    public function renderForm($post = null): array
    {
        $form = $this->setFormFields($post);
        return $form;
    }
}
