<?php

namespace App\Controller\Validator;

class FlashMessages
{
    private $messages;

    public function __construct($messages = null)
    {
        if (!session_status() == PHP_SESSION_ACTIVE) {
            session_start();
        }
        $this->messages = $messages;
    }

    public function setMessages()
    {
        $_SESSION['flash'] = $this->messages;
    }

    public function getMessages()
    {
        if (isset($_SESSION['flash'])) {
            return $_SESSION['flash'];
        } else {
            return null;
        }
    }

    public function deleteMessages()
    {
        unset($_SESSION['flash']);
    }
}