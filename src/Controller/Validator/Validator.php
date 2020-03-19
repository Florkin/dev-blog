<?php

namespace App\Controller\Validator;

class Validator
{
    /**
     * @var array
     */
    private $params;

    /**
     * @var string[]
     */
    private $errors = [];

    public function __construct(array $params)
    {
        $this->params = $params;
    }

    /**
     * Vérifie que les champs sont présents dans le tableau
     *
     * @param string ...$keys
     * @return self
     */
    public function required(string...$keys): self
    {
        foreach ($keys as $key) {
            $value = $this->getValue($key);
            if (is_null($value)) {
                $this->errors[$key] = "Le champs $key est vide";
            }
        }
        return $this;
    }

    public function notEmpty(){
        foreach ($keys as $key){
            $value = $this->getValue($key);
            if (is_null($value) || empty($value)){
                $this->errors[$key] = "Le champs $key ne peut être vide";
            }
        }
    }

    public function password(string $key): self
    {
        $pattern = '(?=.{8,})'; //8 characters minimum
        if (!preg_match($pattern, $this->params[$key])) {
            $this->errors[$key] = "Le mot de passe doit contenir au moins 8 caractères";
        };

        return $this;
    }

    public function isCleanHtml($key)
	{
		$jsEvent = 'onmousedown|onmousemove|onmmouseup|onmouseover|onmouseout|onload|onunload|onfocus|onblur|onchange|onsubmit|ondblclick|onclick|onkeydown|onkeyup|onkeypress|onmouseenter|onmouseleave';
        if (!preg_match('/<[ \t\n]*script/ui', $this->params[$key]) && !preg_match('/<.*('.$jsEvent.')[ \t\n]*=/ui', $this->params[$key])  && !preg_match('/.*script\:/ui', $this->params[$key])){
            $this->errors[$key] = "Le texte de l'article n'est pas valide, le javascript est interdit.";
        };

        return $this;
	}

    /**
     * Récupère les erreurs
     *
     * @return array
     */
    public function getErrors(): array
    {
        return $this->errors;
    }

    private function getValue(string $key)
    {
        if (array_key_exists($key, $this->params)) {
            return $this->params[$key];
        }

        return null;
    }
}
