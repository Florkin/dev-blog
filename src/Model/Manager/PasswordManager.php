<?php

namespace App\Model\Manager;

use App\Controller\Mails\Mail;
use App\Controller\User\User;
use App\Controller\Validator\Validator;
use Delight\Auth\Auth;

class PasswordManager
{
    public function sendResetPasswordEmail($email)
    {
        $auth = new Auth(DbManager::openDB(), null, null, false);
        $user = new User(null, $email);
        $username = $user->getUsername();

        try {
            $auth->forgotPassword($email, function ($selector, $token) use ($email, $username) {
                $url = _BASE_URL_ . '/reset_password/' . urlencode($selector) . '/' . urlencode($token);
                Mail::sendMail(
                    [$username => $email],
                    null,
                    null,
                    htmlentities("[Dev-Blog] Réinitialisez votre mot de passe", ENT_QUOTES, 'UTF-8'),
                    "<h1>Bonjour " . $username . " </h1>"
                    . "<p>Veuillez suivre <a href='" . $url . "'>ce lien</a> pour réinitialiser votre mot de passe</p>",
                    "Bonjour " . $username . ", Veuillez copier ce lien pour réinitialiser votre mot de passe: " . $url
                );
            }, 600);

            $messages["status"] = "success";
            $messages['message'] = "Un email vous a été envoyé. Suivez le lien pour créer un nouveau mot de passe";

        } catch (\Delight\Auth\InvalidEmailException $e) {
            $messages["status"] = "error";
            $messages['message'] = "Cette adresse email n'est pas valide";
        } catch (\Delight\Auth\EmailNotVerifiedException $e) {
            $messages["status"] = "error";
            $messages['message'] = "Cette adresse email n'est pas vérifiée";
        } catch (\Delight\Auth\ResetDisabledException $e) {
            $messages["status"] = "error";
            $messages['message'] = "La réinitialisation de mot de passe n'est pas activée";
        } catch (\Delight\Auth\TooManyRequestsException $e) {
            $messages["status"] = "error";
            $messages['message'] = "Vous ne pouvez demander un nouveau mot de passe que toutes les 10 minutes";
        }
        return $messages;
    }

    function getValidator($action, $formData)
    {
        if ($action == 'email') {
            return (new Validator($formData))
                ->required('email')
                ->email('email');
        } elseif ($action == 'password') {
            return (new Validator($formData))
                ->required('password', 'password-confirm')
                ->password('password', 'password-confirm');
        }
    }
}