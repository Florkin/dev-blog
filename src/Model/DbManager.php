<?php

abstract class DbManager
{
    public static function openDB()
    {
        try
        {
            $db = new PDO('mysql:host='. Config::DB_HOST .';dbname='. Config::DB_NAME .';charset=utf8', ''. Config::DB_USER .'', ''. Config::DB_PASSWORD .'');
        } catch (Exception $e) {
            die('Erreur : ' . $e->getMessage());
        }
        return $db;
    }

    public static function tableExists($db, $table) {
        try {
            $result = $db->query("SELECT 1 FROM $table LIMIT 1");
        } catch (Exception $e) {
            return false;
        }   

        return $result !== false;
    }
}


