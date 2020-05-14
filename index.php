<?php

if ('session_status' == PHP_SESSION_NONE) {
    session_start();
}

require './vendor/autoload.php';

use Symfony\Component\ErrorHandler\Debug;
use \App\Config;
use \App\Model\Manager\UserManager;
use \App\Routes;

if (Config::DEBUG) {
    Debug::enable();
}

define("_BASE_URL_", $_SERVER['REQUEST_SCHEME'] . '://' . $_SERVER['HTTP_HOST']);
define("_ADMIN_URL_", _BASE_URL_ . "/admin");
define("_CURRENT_URL_", _BASE_URL_ . $_SERVER['REQUEST_URI']);

// ========================= TWIG =======================
$loader = new \Twig\Loader\FilesystemLoader('./src/Templates');
$twig = new \Twig\Environment($loader, [
    // 'cache' => ('./cache'),
    'cache' => false,
    'debug' => true,
]);

$twig->addExtension(new \Twig\Extension\DebugExtension());

// ========================= GLOBAL VARIABLES =======================
$twig->addGlobal('isLogged', UserManager::checkIsLogged());
if (UserManager::checkIsLogged()) {
    $twig->addGlobal('username', UserManager::getUsername());
    $twig->addGlobal('userEmail', UserManager::getEmail());
};

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
    "logout" => _BASE_URL_ . "/logout",
);

$twig->addGlobal('url', $url);

// ===================== ROUTING =====================
$router = Routes::setRoutes($twig);



