<?php

namespace App;

/**
 * Set global constants
 */
abstract class Config {

    const DB_NAME = "dev-blog";
    const DB_USER = "root";
    const DB_PASSWORD = "";
    const DB_HOST = "localhost";
    const BASE_URL = "http://dev-blog.tristan-florin.fr";
    const BASE_ADMIN_URL = Self::BASE_URL . "/admin";
    const DEBUG = true;

}