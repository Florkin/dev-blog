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
    private $session;
    private $session_factory;

    /**
     * Session constructor.
     * @param $data
     */
    public function __construct($data = null)
    {
        $this->session_factory = new \Aura\Session\SessionFactory;
        $this->session = $this->session_factory->newInstance($_COOKIE);
        $this->data = $data;
    }

    /**
     * Set a flash message
     */
    public function setMessages()
    {
        $flash = $this->session->getSegment('flash\messages');
        $flash->set("flash", $this->data);
    }

    /**
     * @return array|null
     *
     * Get all flash messages
     */
    public function getMessages(): ?array
    {
        $flash = $this->session->getSegment('flash\messages');
        return $flash->get("flash");
    }

    /**
     * Delete all flash messages
     */
    public function deleteMessages()
    {
        $flash = $this->session->getSegment('flash\messages');
        $flash->clear("flash");
    }

    /**
     * Set formdata for persistance
     */
    public function setFormdata()
    {
        $flash = $this->session->getSegment('flash\formdata');
        $flash->set("formdata", $this->data);
    }

    /**
     * @return array|null
     *
     * Get form data
     */
    public function getFormdata(): ?array
    {
        $flash = $this->session->getSegment('flash\formdata');
        return $flash->get("formdata");
    }

    /**
     * Delete form data
     */
    public function deleteFormdata()
    {
        $flash = $this->session->getSegment('flash\formdata');
        $flash->clear("formdata");
    }
}