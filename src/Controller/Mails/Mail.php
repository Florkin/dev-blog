<?php

namespace App\Controller\Mails;

use App\Config;
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

class Mail
{
    public static function sendMail(array $to, array $cc = null, array $cci = null, string $subject, string $body, string $altbody = null, array $attachements = null, string $replyTo = null)
    {
        $mail = new PHPMailer(true);

        try {
            //Server settings
            $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      // Enable verbose debug output
            // $mail->isSMTP();                                            // Send using SMTP
            $mail->Host = Config::EMAIL_HOST;                    // Set the SMTP server to send through
            $mail->SMTPAuth = true;                                   // Enable SMTP authentication
            $mail->Username = Config::EMAIL_USERNAME;                     // SMTP username
            $mail->Password = Config::EMAIL_PASSWORD;           // SMTP password
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
            $mail->Port = 587;                                    // TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above

            //Recipients
            $mail->setFrom(Config::EMAIL_FROM, Config::EMAIL_USERNAME);
            foreach ($to as $key => $address) {
                $mail->addAddress($address, $key);     // Add a recipient
            }
            if (isset($cc) && !empty($cc)) {
                foreach ($cc as $key => $address) {
                    $mail->addCC($address, $key);     // Add a recipient
                }
            }

            if (isset($cci) && !empty($cci)) {
                foreach ($cci as $key => $address) {
                    $mail->addBCC($address, $key);     // Add a recipient
                }
            }
            if (isset($attachements) && !empty($attachements)) {
                foreach ($attachements as $key => $path) {
                    $mail->addAttachment($path, $key);     // Add a recipient
                }
            }

            if (isset($replyTo) && !empty($replyTo)) {
                $mail->addReplyTo($replyTo);
            }

            // Content
            $mail->isHTML(true);                                  // Set email format to HTML
            $mail->Subject = $subject;
            $mail->Body = $body;
            if (isset($altbody) && !empty($altbody)) {
                $mail->AltBody = $altbody;
            }

            $mail->send();
            return 'Le message a bien été envoyé';
        } catch (Exception $e) {
            return "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
        }
    }
}