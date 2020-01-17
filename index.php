<?php

require './vendor/autoload.php';

$loader = new \Twig\Loader\FilesystemLoader('./src/Templates');
$twig = new \Twig\Environment($loader, [
    // 'cache' => ('./cache'),
    'cache' => false,
    'debug' => true,
]);

// GLOBAL URL VARIABLES
$twig->addGlobal('base_url', Config::BASE_URL);

$pages = get_class_methods('PageController');
$urls = array();
foreach ($pages as $page) {
    $pageUrl = 'http://' . Config::BASE_URL . "/?page=" . $page;
    $twig->addGlobal($page . "_url", $pageUrl);
    // array_push($urls, $pageUrl);
}

// NAVIGATION
$page = SuperGlobalManager::get('get', 'page');

if (!isset($page) || null == $page) {
    $page = 'home';
}

$twig->addGlobal('page_name', $page);
PageController::{$page}($twig, $page);
