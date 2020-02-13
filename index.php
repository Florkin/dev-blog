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
$router = new AltoRouter;

$router->map('GET', '/', function($twig){
    PageController::home($twig);
}, 'home');

$router->map('GET', '/inscription', function($twig){
    PageController::registration($twig);
}, 'inscription');

$router->map('GET', '/articles/[i:id]', function($id, $twig){
    PageController::post($twig, $id);
}, 'article');

$router->map('GET', '/ajouter-un-article', function($twig){
    PageController::postform($twig);
}, 'ajouter-un-article');




// ============================ ROUTING MATCHES ============================
$match = $router->match();
if ($match !== null){
    array_push($match['params'], $twig);
    call_user_func_array($match['target'], $match['params']);
}


