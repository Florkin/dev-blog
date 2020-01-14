<?php

require_once './vendor/autoload.php';
include './src/Config.php';
include './src/Model/SuperglobalManager.php';
include './src/Controller/PageController.php';

$loader = new \Twig\Loader\FilesystemLoader('./src/Templates');
$twig = new \Twig\Environment($loader, [
    // 'cache' => ('./cache'),
    'cache' => false,
    'debug' => true,
]);
// GLOBAL VARIABLES
$twig->addGlobal('base_url', Config::BASE_URL);

// NAVIGATION
$page = SuperglobalManager::get('get', 'page');

if (isset($page)) {
    $twig->addGlobal('page_name', $page);
    PageController::{$page}($twig, $page);

} elseif (!isset($page)) {
    echo $twig->render('pages/home.twig', ['name' => 'Fabien']);
}
