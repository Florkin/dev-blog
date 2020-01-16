<?php

class SuperGlobalManager
{

    public function __construct()
    {}

    public static function put($type, $key, $value)
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

    public static function get($type, $key)
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
        }
    }

    public static function forget($type, $key)
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
