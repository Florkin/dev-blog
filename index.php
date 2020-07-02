<?php

if ('session_status' == PHP_SESSION_NONE) {
    session_start();
}

require './vendor/autoload.php';

use Balambasik\Input;
use Symfony\Component\ErrorHandler\Debug;
use \App\Config;
use \App\Model\Manager\UserManager;
use \App\Routes;

if (Config::DEBUG) {
    Debug::enable();
}

define("_BASE_URL_", Input::server('REQUEST_SCHEME') . '://' . Input::server('HTTP_HOST'));
define("_ADMIN_URL_", _BASE_URL_ . "/admin");
define("_ROOT_", Input::server('DOCUMENT_ROOT'));
$referer = Input::server('HTTP_REFERER');
if (isset ($referer) && $referer != null && $referer != "") {
    define("_CURRENT_URL_", Input::server('HTTP_REFERER'));
} else {
    define("_CURRENT_URL_", _BASE_URL_);
}


// ========================= TWIG =======================
$loader = new \Twig\Loader\FilesystemLoader('./src/Templates');

if (Config::DEBUG) {
    $twig = new \Twig\Environment($loader, [
        'cache' => false,
        'debug' => true,
    ]);

    $twig->addExtension(new \Twig\Extension\DebugExtension());
} else {
    $twig = new \Twig\Environment($loader, [
        'cache' => ('./cache'),
        'debug' => true,
    ]);
}

$twig->getExtension(\Twig\Extension\CoreExtension::class)->setTimezone('Europe/Paris');

// ========================= GLOBAL VARIABLES =======================
$twig->addGlobal('isLogged', UserManager::checkIsLogged());
if (UserManager::checkIsLogged()) {
    $twig->addGlobal('username', UserManager::getUsername());
    $twig->addGlobal('userEmail', UserManager::getEmail());
};

UserManager::isAdmin() ? $twig->addGlobal('is_admin', true) : $twig->addGlobal('is_admin', false);
$twig->addGlobal('user_id', UserManager::getUserId());

$flash = new \App\Controller\Validator\Session();
$twig->addGlobal('messages', $flash->getMessages());
$flash->deleteMessages();

// ======================== LOGIN FORM =============================
$loginForm = new \App\Controller\Form\LoginForm;
$loginForm = $loginForm->renderForm($twig);
$twig->addGlobal('loginForm', $loginForm['form']);
$twig->addGlobal('actionLogin', $loginForm['action']);


// ===================== URL VARIABLES TO TWIG GLOBALS ===============

$url = array(
    "base_url" => _BASE_URL_,
    "post_form" => _BASE_URL_ . "/ajouter-un-article",
    "posts_list" => _BASE_URL_ . "/articles",
    "register_form" => _BASE_URL_ . "/inscription",
    "lost_password" => _BASE_URL_ . "/mot-de-passe-oublie",
    "contact" => _BASE_URL_ . "/contact",
    "logout" => _BASE_URL_ . "/logout",
);
$admin_url = array(
    "base_url" => _ADMIN_URL_,
);

$twig->addGlobal('root', _ROOT_);
$twig->addGlobal('url', $url);
$twig->addGlobal('admin_url', $admin_url);

// ===================== ROUTING =====================

$router = Routes::setRoutes($twig);




