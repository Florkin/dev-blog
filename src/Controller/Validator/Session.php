<?php

namespace App\Controller\Validator;

class Session
{
    private $data;

    public function __construct($data = null)
    {
        if (!session_status() == PHP_SESSION_ACTIVE) {
            session_start();
        }
        $this->data = $data;
    }

    public function setMessages()
    {
        $_SESSION['flash'] = $this->data;
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
        if (isset($_SESSION['flash'])) {
            unset($_SESSION['flash']);
        }
    }

    public function setFormdata(){
        $_SESSION['formdata'] = $this->data;
    }

    public function getFormdata(){
        if (isset($_SESSION['formdata'])) {
            return $_SESSION['formdata'];
        } else {
            return null;
        }
    }

    public function deleteFormdata(){
        if (isset($_SESSION['formdata'])) {
            unset($_SESSION['formdata']);
        }
    }
}