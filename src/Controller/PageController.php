<?php

abstract class PageController
{
    public static function articleslist($twig, $page)
    {
        $articleslist = new ArticlesList('all');
        $articles = $articleslist->getArticles();
        echo $twig->render('pages/articles-list.twig', ['articles' => $articles]);        
        return true;
    }

    public static function articleform($twig, $page)
    {
        // If getting article form POST
        if (null !== Globals::get('get', 'action') && null!==Globals::get('post', null) && Globals::get('get', 'action') == "add") {            
            $article = new ArticleManager();
            $article->addArticle();
        } else {
            $articleForm = new ArticleForm;
            $articleForm = $articleForm->renderForm();
            echo $twig->render('pages/articleform.twig', ['articleForm' => $articleForm['form'], 'actionAddArticle' => $articleForm['action']]);
        }
        return true;
    }

    public static function registration($twig, $page)
    {
        // If getting registration form POST
        if (null !== Globals::get('get', 'action') && null!==Globals::get('post', null) && Globals::get('get', 'action') == "register") {            
            $formData = Globals::get('post', null);         
            $user = new UserManager;
            $user->register($formData);
        } else {
            $registerForm = new UserForm;            
            $registerForm = $registerForm->renderForm();
            echo $twig->render('pages/registration.twig', ['registerForm' => $registerForm['form'], 'actionRegister' => $registerForm['action']]);
        };

        return true;
    }

    public static function login($twig)
    {
        $formData = Globals::get('post', null);
        $user = new UserManager;
        $user->login($formData, $twig);
    }

    public static function logout($twig)
    {
        $user = new UserManager;
        $user->logout();
        return true;
    }


    public static function home($twig, $page)
    {        
        $articleslist = new ArticlesList(3);
        $articles = $articleslist->getArticles();
        echo $twig->render('pages/home.twig', ['articles' => $articles]);        
        return true;
    }

}
