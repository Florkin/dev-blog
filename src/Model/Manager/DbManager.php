<?php

namespace App\Model\Manager;

use \PDO;
use \App\Config;

abstract class DbManager
{
    /**
     * Open database according to constants set in App/Config
     *
     * @return object
     */
    public static function openDB() : object
    {
        try
        {
            $db = new PDO('mysql:host='. Config::DB_HOST .';dbname='. Config::DB_NAME .';charset=utf8', ''. Config::DB_USER .'', ''. Config::DB_PASSWORD .'');
        } catch (Exception $e) {
            die('Erreur : ' . $e->getMessage());
        }
        return $db;
    }

    /**
     * Check if a table exists
     *
     * @param object $db
     * @param string $table
     * @return boolean
     */
    public static function tableExists(object $db, string $table) : boolean
    {
        try {
            $result = $db->query("SELECT 1 FROM $table LIMIT 1");
        } catch (Exception $e) {
            return false;
        }   

        return $result !== false;
    }
}


