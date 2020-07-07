<?php

namespace App;

/**
 * Set global constants
 *
 * Fill values and rename file ad Config.php
 *
 * !!!!!! BEWARE: Config.php is git ignored, BUT NOT ConfigLocal.php!
 * Don't send personal data on github !!!!!!!
 */
abstract class Config {

    const DB_NAME = "dev-blog"; // Database name
    const DB_USER = "root"; // Database user
    const DB_PASSWORD = ""; // Database password
    const DB_HOST = "localhost"; // Database Host
    const DEBUG = true; // boolean: true enable Debug mode and disable Twig cache
    const EMAIL_HOST = ""; // ex: "smtp.gmail.com"
    const EMAIL_FROM = ""; // // Address from which the emails will be sent
    const EMAIL_PASSWORD = ""; // To connect to gmail account, for example
    const EMAIL_USERNAME = ""; // To connect to gmail account, for example
    const EMAIL_CONTACT = ""; // Contact form will send mails at this address

}