<?php

require_once './src/Config.php';
require_once './vendor/autoload.php';

$loader = new \Twig\Loader\FilesystemLoader('./src/Templates');
$twig = new \Twig\Environment($loader, [
    // 'cache' => ('./cache'),
    'cache' => false,
    'debug' => true,
]);
// GLOBAL VARIABLES
$twig->addGlobal('base_url', Config::BASE_URL);

// NAVIGATION
if (isset($_GET['page'])) {
    $page = $_GET['page'];
    $twig->addGlobal('page_name', $page);
}

if (isset($page)) {
    switch ($page) {
        case 'listing':
            echo $twig->render('pages/listing.twig', ['title' => $page]);
            break;
        case 'article':
            echo $twig->render('pages/article.twig', ['title' => $page]);
            break;
    }

} else {
    echo $twig->render('pages/home.twig', ['name' => 'Fabien']);
}
