<?php

namespace App\Model\Manager;

use App\Config;
use App\Controller\Mails\Mail;
use App\Controller\Validator\Validator;

/**
 * Class ContactManager
 * @package App\Model\Manager
 *
 * Handle contact form
 */
class ContactManager
{

    private $formData;

    /**
     * ContactManager constructor.
     * @param $formData
     */
    public function __construct($formData)
    {
        foreach($formData as $key => $data){
            $this->formData[$key] = htmlentities($data, ENT_QUOTES, 'ISO-8859-1');
        }
    }

    /**
     * @return Validator
     *
     * Contact form validator
     */
    public function getValidator()
    {
        return (new Validator($this->formData))
            ->required('email', 'firstname', 'lastname', 'subject', 'message')
            ->notEmpty('email', 'firstname', 'lastname', 'subject', 'message')
            ->email('email')
            ->length('firstname', 2, 40)
            ->length('lastname', 2, 40)
            ->length('subject', 2, 200)
            ->length('message', 5, 5000);
    }

    /**
     * @return array
     *
     * Send message
     */
    public function sendMessage() : array
    {
        $result = Mail::sendMail(
            [$this->formData['firstname'] => Config::EMAIL_CONTACT],
            null,
            null,
            $this->formData['subject'],
            '<p>' . $this->formData['message'] . '</p>',
            $this->formData['message'],
            null,
            $this->formData['email']
        );

        return $result;
    }
}