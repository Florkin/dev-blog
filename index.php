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

// ============================ ROUTES ============================
$router = new AltoRouter;

$router->map('GET', '/', function ($twig) {
    return PageController::home($twig);
}, 'home');

$router->map('GET', '/inscription', function ($twig) {
    return PageController::registration($twig);
}, 'registration');

$router->map('GET', '/ajouter-un-article', function ($twig) {
    return PageController::postform($twig);
}, 'postform');

$router->map('GET', '/articles', function ($twig) {
    return PageController::postslist($twig);
}, 'postlist');

$router->map('GET', '/articles/[i:id]', function ($id, $twig) {
    return PageController::post($id, $twig);
}, 'post');

// ============================ ROUTING MATCHES ============================
$match = $router->match();

if ($match) {
    try {
        array_push($match['params'], $twig);
        call_user_func_array($match['target'], $match['params']);

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
