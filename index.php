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

$router->map('GET', '/', null, 'home');

$router->map('GET', '/inscription', null, 'registration');

$router->map('GET', '/ajouter-un-article', null, 'postform');

// ============================ ROUTING MATCHES ============================
$match = $router->match();

if ($match) {
    try {
        PageController::{$match['name']}($twig);

        // Handle all possible errors
    } catch (Twig_Error_Loader $e) {
        header('Content-type: application/json');
        echo json_encode('Error [1]: ' . $e);
    } catch (Twig_Error_Runtime $e) {
        header('Content-type: application/json');
        echo json_encode('Error [2]: ' . $e);
    } catch (Twig_Error_Syntax $e) {
        header('Content-type: application/json');
        echo json_encode('Error [3]: ' . $e);
    }
} else {
    header($_SERVER['SERVER_PROTOCOL'] . ' 404 Not Found');
    echo var_export($match);
}
