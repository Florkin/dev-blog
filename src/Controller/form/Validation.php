<?php

namespace App\Controller\Form;

use Respect\Validation\Validator as v;

class Validation
{

    private $username;
    private $password;
    // private $email;
    // private $title;
    // private $intro;
    // private $content;

    public function __construct($form)
    {
        switch ($form) {
            case 'login':
                break;
            case 'register':
                $this->username = v::alnum('- _')->noWhitespace()->length(4, 20);
                $this->password = v::alnum('-_?./§,;:!&é"-è_çà()=}]@^`|[{#')->noWhitespace()->length(8, 30);
                break;
            case 'post':
                break;
        }
    }

    public function validate($datas)
    {
       
    }
}
