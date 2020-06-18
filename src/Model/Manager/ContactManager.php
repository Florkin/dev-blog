<?php

namespace App\Model\Manager;

use App\Config;
use App\Controller\Mails\Mail;
use App\Controller\Validator\Validator;

class ContactManager
{

    private $formData;

    public function __construct($formData)
    {
        foreach($formData as $key => $data){
            $this->formData[$key] = htmlentities($data, ENT_QUOTES, 'ISO-8859-1');
        }
    }

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
     * @return mixed
     */
    public function sendMessage()
    {
        $result = Mail::sendMail(
            ['Contact dev-blog' => Config::EMAIL_CONTACT],
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