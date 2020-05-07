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

    public function notEmpty(string...$keys)
    {
        foreach ($keys as $key) {
            $value = $this->getValue($key);
            if (is_null($value) || empty($value)) {
                $this->errors[$key] = "Le champs $key ne peut être vide";
            }
        }
    }

    public function email(string $key): self
    {
        if (!filter_var($this->params[$key], FILTER_VALIDATE_EMAIL)) {
            $this->errors[$key] = "L'email n'est pas valide";
        };
        return $this;
    }

    public function password(string $key): self
    {
        $pattern = '/^[a-zA-Z0-9]{8,30}$/'; //8 characters minimum
        if (!preg_match($pattern, $this->params[$key])) {
            $this->errors[$key] = "Le mot de passe doit contenir au moins 8 caractères et 30 caractères maximum";
        };
        return $this;
    }

    public function length(string $key, ?int $min, ?int $max = null): self
    {
        $value = $this->getValue($key);
        $length = mb_strlen($value);
        if (!is_null($min) &&
            !is_null($max) &&
            ($length < $min || $length > $max)
        ) {
            $this->errors[$key] = "Le champs $key doit contenir au moins $min caractères et $max caractères maximum";
            return $this;
        }
        if (!is_null($min) &&
            ($length < $min)
        ) {
            $this->errors[$key] = "Le champs $key doit contenir au moins $min caractères";
            return $this;
        }
        return $this;

    }

    public function username(string $key): self
    {
        $pattern = '/^[a-zA-Z0-9]{4,16}$/';
        if (!preg_match($pattern, $this->params[$key])) {
            $this->errors[$key] = "Le username doit contenir entre 4 et 16 caractères";
        };
        return $this;
    }

    public function author(string $key): self
    {
        if (isset($this->params[$key])){
            $pattern = '/^[a-zA-Z0-9]{4,16}$/';
            if (!preg_match($pattern, $this->params[$key])) {
                $this->errors[$key] = "Le username doit contenir entre 4 et 16 caractères";
            };
        }

        return $this;
    }

    public function isCleanHtml($key)
    {
        $events = 'onmousedown|onmousemove|onmmouseup|onmouseover|onmouseout|onload|onunload|onfocus|onblur|onchange';
        $events .= '|onsubmit|ondblclick|onclick|onkeydown|onkeyup|onkeypress|onmouseenter|onmouseleave|onerror|onselect|onreset|onabort|ondragdrop|onresize|onactivate|onafterprint|onmoveend';
        $events .= '|onafterupdate|onbeforeactivate|onbeforecopy|onbeforecut|onbeforedeactivate|onbeforeeditfocus|onbeforepaste|onbeforeprint|onbeforeunload|onbeforeupdate|onmove';
        $events .= '|onbounce|oncellchange|oncontextmenu|oncontrolselect|oncopy|oncut|ondataavailable|ondatasetchanged|ondatasetcomplete|ondeactivate|ondrag|ondragend|ondragenter|onmousewheel';
        $events .= '|ondragleave|ondragover|ondragstart|ondrop|onerrorupdate|onfilterchange|onfinish|onfocusin|onfocusout|onhashchange|onhelp|oninput|onlosecapture|onmessage|onmouseup|onmovestart';
        $events .= '|onoffline|ononline|onpaste|onpropertychange|onreadystatechange|onresizeend|onresizestart|onrowenter|onrowexit|onrowsdelete|onrowsinserted|onscroll|onsearch|onselectionchange';
        $events .= '|onselectstart|onstart|onstop';
        if (preg_match('/<[\s]*script/ims', $this->params[$key]) ||
            preg_match('/(' . $events . ')[\s]*=/ims', $this->params[$key])
            || preg_match('/.*script\:/ims', $this->params[$key])) {
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

    public function isValid(): bool
    {
        return empty($this->errors);
    }
}
