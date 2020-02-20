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

// ============================ LOGIN FORM ============================
$loginForm = new LoginForm;
$loginForm = $loginForm->renderForm($twig);
$twig->addGlobal('loginForm', $loginForm['form']);
$twig->addGlobal('actionLogin', $loginForm['action']);

// ============================ URL VARIABLES ============================
$url = array(
    "base_url" => Config::BASE_URL,
    "post_form" => Config::BASE_URL . "/ajouter-un-article",
    "posts_list" => Config::BASE_URL . "/articles",
    "register_form" => Config::BASE_URL . "/inscription",
    "logout" => Config::BASE_URL . "/logout",
);
$twig->addGlobal('url', $url);

// ============================ ROUTES ============================

$router = new AltoRouter;

// -- GET ----------------------------------
$router->map('GET', '/', function ($twig) {
    return RouteController::home($twig);
}, 'Accueil');

$router->map('GET', '/inscription', function ($twig) {
    return RouteController::registration($twig);
}, 'formulaire-inscription');

$router->map('GET', '/ajouter-un-article', function ($twig) {
    return RouteController::postform($twig);
}, 'formulaire-article');

$router->map('GET', '/articles', function ($twig) {
    return RouteController::postslist($twig);
}, 'articles');

$router->map('GET', '/articles/[i:id]', function ($id, $twig) {
    return RouteController::post($id, $twig);
}, 'article');

$router->map('GET', '/logout', function () {
    return RouteController::logout();
}, 'logout');

// -- POST --------------------------------------------
$router->map('POST', '/ajouter-un-article', function () {
    return RouteController::postform();
}, 'ajouter-un-article');

$router->map('POST', '/inscription', function ($twig) {
    return RouteController::registration($twig);
}, 'inscription');

$router->map('POST', '/login', function () {
    return RouteController::login();
}, 'login');

// ============================ ROUTING MATCHES ============================
$match = $router->match();

// call closure or throw 404 status
if( is_array($match) && is_callable( $match['target'] ) ) {
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
	// no route was matched
    header( $_SERVER["SERVER_PROTOCOL"] . ' 404 Not Found');
    echo var_export($match);
}


