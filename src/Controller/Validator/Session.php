<?php

namespace App\Controller\Validator;

/**
 * Class Session
 * @package App\Controller\Validator
 *
 * Use sessions for flash messages and formdata persister
 */
class Session
{
    private $data;

    /**
     * Session constructor.
     * @param $data
     */
    public function __construct($data = null)
    {
        if (!session_status() == PHP_SESSION_ACTIVE) {
            session_start();
        }
        $this->data = $data;
    }

    /**
     * Set a flash message
     */
    public function setMessages()
    {
        $_SESSION['flash'] = $this->data;
    }

    /**
     * @return array|null
     *
     * Get all flash messages
     */
    public function getMessages() : ?array
    {
        if (isset($_SESSION['flash'])) {
            return $_SESSION['flash'];
        } else {
            return null;
        }
    }

    /**
     * Delete all flash messages
     */
    public function deleteMessages()
    {
        if (isset($_SESSION['flash'])) {
            unset($_SESSION['flash']);
        }
    }

    /**
     * Set formdata for persistance
     */
    public function setFormdata(){
        $_SESSION['formdata'] = $this->data;
    }

    /**
     * @return array|null
     *
     * Get form data
     */
    public function getFormdata() : ?array
    {
        if (isset($_SESSION['formdata'])) {
            return $_SESSION['formdata'];
        } else {
            return null;
        }
    }

    /**
     * Delete form data
     */
    public function deleteFormdata(){
        if (isset($_SESSION['formdata'])) {
            unset($_SESSION['formdata']);
        }
    }
}