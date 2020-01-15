<?php

require './vendor/autoload.php';

$loader = new \Twig\Loader\FilesystemLoader('./src/Templates');
$twig = new \Twig\Environment($loader, [
    // 'cache' => ('./cache'),
    'cache' => false,
    'debug' => true,
]);
// GLOBAL VARIABLES
$twig->addGlobal('base_url', Config::BASE_URL);

// NAVIGATION
$page = SuperGlobalManager::get('get', 'page');

if (isset($page)) {
    $twig->addGlobal('page_name', $page);
    PageController::{$page}($twig, $page);

} elseif (!isset($page)) {
    $page = 'home';    
    PageController::{$page}($twig, $page);
}
