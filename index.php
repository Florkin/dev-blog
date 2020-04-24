<?php

require './vendor/autoload.php';

use Symfony\Component\ErrorHandler\Debug;
use \App\Config;
use \App\Model\Manager\UserManager;
use \App\Routes;

if (Config::DEBUG) {
    Debug::enable();
}

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

// ======================== LOGIN FORM =============================
$loginForm = new \App\Controller\Form\LoginForm;
$loginForm = $loginForm->renderForm($twig);
$twig->addGlobal('loginForm', $loginForm['form']);
$twig->addGlobal('actionLogin', $loginForm['action']);

// ===================== URL VARIABLES TO TWIG GLOBALS ===============

$url = array(
    "base_url" => Config::BASE_URL,
    "post_form" => Config::BASE_URL . "/ajouter-un-article",
    "posts_list" => Config::BASE_URL . "/articles",
    "register_form" => Config::BASE_URL . "/inscription",
    "logout" => Config::BASE_URL . "/logout",
);

$twig->addGlobal('url', $url);

// ===================== ROUTING =====================
$router = Routes::setRoutes($twig);

