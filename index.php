<?php

require './vendor/autoload.php';

$loader = new \Twig\Loader\FilesystemLoader('./src/Templates');
$twig = new \Twig\Environment($loader, [
    // 'cache' => ('./cache'),
    'cache' => false,
    'debug' => true,
]);

$twig->addExtension(new \Twig\Extension\DebugExtension());

// GLOBAL VARIABLES
$twig->addGlobal('isLogged', UserManager::checkIsLogged());
$twig->addGlobal('base_url', Config::BASE_URL);
// add global user info
$twig->addGlobal('username', UserManager::getUsername());
$twig->addGlobal('userEmail', UserManager::getEmail());

$pages = get_class_methods('PageController');
$urls = array();
foreach ($pages as $page) {
    $pageUrl = Config::BASE_URL . "/?page=" . $page;
    $twig->addGlobal($page . "_url", $pageUrl);
}

// NAVIGATION
$page = Globals::get('get', 'page');

if (!isset($page) || null == $page) {
    $page = 'home';
}

$twig->addGlobal('page_name', $page);

// LOGIN FORM
$loginForm = new Form('login');
$loginForm = $loginForm->renderForm($twig);
$twig->addGlobal('loginForm', $loginForm['form']);
$twig->addGlobal('actionLogin', $loginForm['action']);

// CALL PAGE FUNCTION
PageController::{$page}($twig, $page);
