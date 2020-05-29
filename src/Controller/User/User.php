<?php

namespace App\Controller\User;

use App\Model\Manager\UserManager;

class User
{
    private $id_user;
    private $username;
    private $email;
    private $role;
    private $last_login;
    private $registered;
    private $verified;

    function __construct($id_user)
    {
        $user = new UserManager($id_user);

        $this->id_user = $id_user;
        $this->username = $user->getUsernameById();
        $this->email = $user->getEmailById();
        $this->role = $user->getRoleById();
        $this->last_login = $user->getLastLoginById();
        $this->registered = $user->getRegisteredDateById();
        $this->verified = $user->getVerifiedById();
    }

    /**
     * @return string
     */
    public function getEmail(): string
    {
        return $this->email;
    }

    /**
     * @return string
     */
    public function getUsername(): string
    {
        return $this->username;
    }

    /**
     * @return mixed
     */
    public function getRole()
    {
        return $this->role;
    }

    /**
     * @return mixed
     */
    public function getLastLogin()
    {
        return $this->last_login;
    }

    /**
     * @return mixed
     */
    public function getRegistered()
    {
        return $this->registered;
    }

    /**
     * @return mixed
     */
    public function isVerified()
    {
        return $this->verified;
    }


}