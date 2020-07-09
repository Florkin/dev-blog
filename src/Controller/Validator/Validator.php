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

    /**
     * Validator constructor.
     * @param array $params
     */
    public function __construct(array $params)
    {
        foreach($params as $key => $param){
            $this->params[$key] = trim($param);
        }
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
            if ($value === null) {
                $this->errors[$key] = "Le champs $key est vide";
            }
        }
        return $this;
    }

    /**
     * @param string ...$keys
     * @return $this
     *
     * Check if not empty
     */
    public function notEmpty(string...$keys): self
    {
        foreach ($keys as $key) {
            $value = $this->getValue($key);
            if ($value === null || empty($value)) {
                $this->errors[$key] = "Le champs $key ne peut être vide";
            }
        }
        return $this;
    }

    /**
     * @param string $key
     * @return $this
     *
     * Check emails
     */
    public function email(string $key): self
    {
        if (!filter_var($this->params[$key], FILTER_VALIDATE_EMAIL)) {
            $this->errors[$key] = "L'email n'est pas valide";
        };
        return $this;
    }

    /**
     * @param string $key
     * @return $this
     *
     * Check passwords
     */
    public function password(string $key): self
    {
        $pattern = '/^[a-zA-Z0-9]{8,30}$/'; //8 characters minimum
        if (!preg_match($pattern, $this->params[$key])) {
            $this->errors[$key] = "Le mot de passe doit contenir au moins 8 caractères et 30 caractères maximum";
        };
        return $this;
    }

    /**
     * @param string $key
     * @param int|null $min
     * @param int|null $max
     * @return $this
     *
     * Check length
     */
    public function length(string $key, ?int $min, ?int $max = null): self
    {
        $value = $this->getValue($key);
        $length = mb_strlen($value);
        if ($min !== null &&
            $max !== null &&
            ($length < $min || $length > $max)
        ) {
            $this->errors[$key] = "Le champs $key doit contenir au moins $min caractères et $max caractères maximum";
            return $this;
        }
        if ($min !== null &&
            ($length < $min)
        ) {
            $this->errors[$key] = "Le champs $key doit contenir au moins $min caractères";
            return $this;
        }
        return $this;

    }

    /**
     * @param string $key
     * @return $this
     *
     * Check if is username
     */
    public function username(string $key): self
    {
        $pattern = '/^[a-zA-Z0-9]{4,16}$/';
        if (!preg_match($pattern, $this->params[$key])) {
            $this->errors[$key] = "Le username doit contenir entre 4 et 16 caractères";
        };
        return $this;
    }

    /**
     * @param string $key
     * @return $this
     *
     * Check if is author name
     */
    public function author(string $key): self
    {
        if (isset($this->params[$key])){
            $pattern = '/^[a-zA-Z0-9]{4,16}$/';
            if (!preg_match($pattern, $this->params[$key])) {
                $this->errors[$key] = "Le nom doit contenir entre 4 et 16 caractères";
            };
        }

        return $this;
    }

    /**
     * @param string $key
     * @return $this
     *
     * Check if checkbox is checked
     */
    public function isChecked(string $key): self
    {
        if (!(isset($this->params[$key]) && $this->params[$key] == "on")){
            $this->errors[$key] = "Vous devez accepter la politique de confidentialité";
        }

        return $this;
    }

    /**
     * @param string $key
     * @return $this
     *
     * Check if field is checkbox
     */
    public function isCheckbox(string $key): self
    {
        if (isset($this->params[$key]) && $this->params[$key] != "on"){
            $this->errors[$key] = "Bien tenté, mais ce n'est vraiment pas très gentil.";
        }

        return $this;
    }

    /**
     * @param $key
     * @return $this
     *
     * Check if Html is clean
     */
    public function isCleanHtml($key): self
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

    /**
     * @param string $key
     * @return mixed|null
     *
     * get one value with key
     */
    private function getValue(string $key)
    {
        if (array_key_exists($key, $this->params)) {
            return $this->params[$key];
        }

        return null;
    }

    /**
     * @return bool
     *
     * Check if form is valid
     */
    public function isValid(): bool
    {
        return empty($this->errors);
    }
}
