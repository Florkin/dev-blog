<?php

namespace App\Model;

abstract class Globals
{
    /**
     * Set global variable
     *
     * @param string $type
     * @param string $key
     * @param string $value
     * @return void
     */
    public static function put(string $type, string $key, string $value)
    {
        switch ($type) {
            case 'get':
                break;
            case 'post':
                $_POST[$key] = $value;
                break;
            case 'session':
                $_SESSION[$key] = $value;
                break;
            case 'cookie':
                $_COOKIE[$key] = $value;
                break;
        }
    }

    /**
     * Get globals variables
     *
     * @param string $type
     * @param string $key
     * @return void
     */
    public static function get(string $type, string $key)
    {
        switch ($type) {
            case 'get':
                return (isset($_GET[$key]) ? $_GET[$key] : null);
                break;
            case 'post':
                return (isset($_POST[$key]) ? $_POST[$key] : $_POST);
                break;
            case 'session':
                return (isset($_SESSION[$key]) ? $_SESSION[$key] : null);
                break;
            case 'cookie':
                return (isset($_COOKIE[$key]) ? $_COOKIE[$key] : null);
                break;
            case 'files':
                return (isset($_FILES[$key]) ? $_FILES[$key] : null);
                break;
        }
    }

    /**
     * Forget global variable
     *
     * @param string $type
     * @param string $key
     * @return void
     */
    public static function forget(string $type, string $key)
    {
        switch ($type) {
            case 'get':
                break;
            case 'session':
                unset($_SESSION[$key]);
                break;
            case 'post':
                break;
            case 'cookie':
                unset($_COOKIE[$key]);
                break;
        }
    }
}
