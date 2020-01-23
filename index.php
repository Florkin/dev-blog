<?php

require './vendor/autoload.php';

$loader = new \Twig\Loader\FilesystemLoader('./src/Templates');
$twig = new \Twig\Environment($loader, [
    // 'cache' => ('./cache'),
    'cache' => false,
    'debug' => true,
]);

$twig->addExtension(new \Twig\Extension\DebugExtension());

// GLOBAL URL VARIABLES
$twig->addGlobal('base_url', Config::BASE_URL);

$pages = get_class_methods('PageController');
$urls = array();
foreach ($pages as $page) {
    $pageUrl = Config::BASE_URL . "/?page=" . $page;
    $twig->addGlobal($page . "_url", $pageUrl);
    // array_push($urls, $pageUrl);
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
echo $twig->render('_partials/login.twig', ['loginForm' => $loginForm['form'], 'actionLogin' => $loginForm['action']]);

// CALL PAGE FUNCTION
PageController::{$page}($twig, $page);





