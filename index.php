<?php

require './vendor/autoload.php';

// ============================ TWIG ============================
$loader = new \Twig\Loader\FilesystemLoader('./src/Templates');
$twig = new \Twig\Environment($loader, [
    // 'cache' => ('./cache'),
    'cache' => false,
    'debug' => true,
]);

$twig->addExtension(new \Twig\Extension\DebugExtension());

// ============================ GLOBAL VARIABLES ============================
$twig->addGlobal('isLogged', UserManager::checkIsLogged());
$twig->addGlobal('username', UserManager::getUsername());
$twig->addGlobal('userEmail', UserManager::getEmail());
$twig->addGlobal('base_url', Config::BASE_URL);

// ============================ LOGIN FORM ============================
$loginForm = new LoginForm;
$loginForm = $loginForm->renderForm($twig);
$twig->addGlobal('loginForm', $loginForm['form']);
$twig->addGlobal('actionLogin', $loginForm['action']);

// ============================ ROUTING ============================
$uri = $_SERVER['REQUEST_URI'];
$router = new AltoRouter;

$router->map('GET', '/', function(){
    PageController::home($twig);
}, 'home');

$router->map('GET', '/inscription/', function(){
    PageController::registration($twig);
}, 'inscription');

$router->map('GET', '/articles/article-[i:id]/', function(){
    PageController::post($twig, $id);
}, 'article');

// var_dump($router);

$match = $router->match($uri);
var_dump($match);


