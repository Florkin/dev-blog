<?php

namespace App\Model\Manager;

use App\Controller\Mails\Mail;
use App\Controller\User\User;
use App\Controller\Validator\Validator;
use Delight\Auth\Auth;

/**
 * Class PasswordManager
 * @package App\Model\Manager
 *
 * Class to manage passwords
 */
class PasswordManager
{
    /**
     * @param string $email
     * @return array
     * @throws \Delight\Auth\AuthError
     *
     * Send email with url to reset password
     */
    public function sendResetPasswordEmail(string $email) : array
    {
        $auth = new Auth(DbManager::openDB(), null, null, false);
        $user = new User(null, $email);
        $username = $user->getUsername();

        try {
            $auth->forgotPassword($email, function ($selector, $token) use ($email, $username) {
                $url = _BASE_URL_ . '/nouveau-mot-de-passe/' . urlencode($selector) . '/' . urlencode($token);
                Mail::sendMail(
                    [$username => $email],
                    null,
                    null,
                    utf8_decode("[Dev-Blog] Réinitialisez votre mot de passe"),
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

    /**
     * @param string $selector
     * @param string $token
     * @return mixed
     * @throws \Delight\Auth\AuthError
     *
     * Check if password can be reset
     */
    public function canResetPassword(string $selector, string $token)
    {
        try {
            $auth = new Auth(DbManager::openDB(), null, null, false);

            $auth->canResetPasswordOrThrow($selector, $token);

            return true;

        }
        catch (\Delight\Auth\InvalidSelectorTokenPairException $e) {
            $messages["status"] = "error";
            $messages['message'] = "Token invalide";
        }
        catch (\Delight\Auth\TokenExpiredException $e) {
            $messages["status"] = "error";
            $messages['message'] = "Token expiré";
        }
        catch (\Delight\Auth\ResetDisabledException $e) {
            $messages["status"] = "error";
            $messages['message'] = "Reset password désactivé";
        }
        catch (\Delight\Auth\TooManyRequestsException $e) {
            $messages["status"] = "error";
            $messages['message'] = "Vous ne pouvez changer de mot de passe que toutes les 10 minutes";
        }

        return $messages;
    }

    /**
     * @param $formData
     * @return array
     * @throws \Delight\Auth\AuthError
     *
     * Process password change
     */
    public function changePassword($formData)
    {
        try {
            $auth = new Auth(DbManager::openDB(), null, null, false);

            $auth->resetPasswordAndSignIn($formData['selector'], $formData['token'], $formData['password']);

            $messages["status"] = "success";
            $messages['message'] = "Votre mot de passe a bien été changé";
        }
        catch (\Delight\Auth\InvalidSelectorTokenPairException $e) {
            $messages["status"] = "error";
            $messages['message'] = "Token invalide";
        }
        catch (\Delight\Auth\TokenExpiredException $e) {
            $messages["status"] = "error";
            $messages['message'] = "Token expiré";
        }
        catch (\Delight\Auth\ResetDisabledException $e) {
            $messages["status"] = "error";
            $messages['message'] = "Reset password désactivé";
        }
        catch (\Delight\Auth\InvalidPasswordException $e) {
            $messages["status"] = "error";
            $messages['message'] = "Mot de passe invalide";
        }
        catch (\Delight\Auth\TooManyRequestsException $e) {
            $messages["status"] = "error";
            $messages['message'] = "Vous ne pouvez changer de mot de passe que toutes les 10 minutes";
        }
        return $messages;
    }

    /**
     * @param string $action
     * @param array $formData
     * @return Validator
     *
     * Password form validator
     */
    function getValidator(string $action, array $formData)
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