<?php

require_once './vendor/autoload.php';

$loader = new \Twig\Loader\FilesystemLoader('./src/Templates');
$twig = new \Twig\Environment($loader, [
    // 'cache' => ('./cache'),
    'cache' => false,
    'debug' => true,
]);

echo $twig->render('pages/home.twig', ['name' => 'Fabien']);