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

    /**
     * User constructor.
     * @param int|null $id_user
     * @param string|null $user_email
     * @throws \Delight\Auth\UnknownIdException
     */
    function __construct(int $id_user = null, string $user_email = null)
    {
        if (isset($id_user) && $id_user != null) {
            $user = new UserManager($id_user);
        } else if (isset($user_email) && $user_email != null) {
            $user = new UserManager(null, $user_email);
        }

        $this->id_user = isset($id_user) && $id_user != null ? $id_user : $user->getIdByEmail();
        $this->username = $user->getUsernameById();
        $this->email = isset($user_email) && $user_email != null ? $user_email : $user->getEmailById();
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
     * @return string
     */
    public function getRole(): string
    {
        return $this->role;
    }

    /**
     * @return string
     */
    public function getLastLogin(): string
    {
        return $this->last_login;
    }

    /**
     * @return string
     */
    public function getRegistered(): string
    {
        return $this->registered;
    }

    /**
     * @return bool
     */
    public function isVerified(): bool
    {
        return $this->verified;
    }

    /**
     * @return string|null
     */
    public function getIdUser(): ?string
    {
        return $this->id_user;
    }

}