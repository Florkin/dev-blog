<?php

require '../vendor/autoload.php';

use Symfony\Component\ErrorHandler\Debug;
use \App\Config;
use \App\Model\Manager\UserManager;
use \Admin\AdminRoutes as Routes;

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

// ===================== URL VARIABLES TO TWIG GLOBALS ===============

$admin_url = array(
    "base_url" => Config::BASE_ADMIN_URL,
);
$twig->addGlobal('admin_url', $admin_url);

$islogged = UserManager::checkIsLogged();
$roles = UserManager::getUserRole();

UserManager::isAdmin() ? $twig->addGlobal('is_admin', true) : $twig->addGlobal('is_admin', false);
$twig->addGlobal('user_id', UserManager::getUserId());


if (!$islogged){
    die("Connectez vous a un compte utilisateur pour pouvoir accèder à l'administration du site.");
} else {
    $router = Routes::setRoutes($twig);
}


