<?php

class DbManager
{
    public static function openDB()
    {
        try
        {
            $bdd = new PDO('mysql:host='. Config::DB_HOST .';dbname='. Config::DB_NAME .';charset=utf8', ''. Config::DB_USER .'', ''. Config::DB_PASSWORD .'');
        } catch (Exception $e) {
            die('Erreur : ' . $e->getMessage());
        }
    }
}
