<?php

namespace App\Controller\User;

use App\Model\Manager\UserManager;

class User
{
    private $id_user;
    private $username;
    private $email;

    function __construct($id_user)
    {
        $user = new UserManager($id_user);

        $this->id_user = $id_user;
        $this->username = $user->getUsernameById();
        $this->email = $user->getEmailById();
    }

    /**
     * @return string
     */
    public function getEmail() : string
    {
        return $this->email;
    }

    /**
     * @return string
     */
    public function getUsername() :string
    {
        return $this->username;
    }

}