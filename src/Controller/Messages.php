<?php

namespace App\Controller;

class Messages
{
    /**
     * Get session information
     *
     * @param string $key
     * @param mixed $default
     * @return mixed
     */
    public function get(string $key, $default = null)
    {
        $this->ensureStarted();
        if (array_key_exist($key, $_SESSION))
        {
            return $_SESSION[$key];
        }
        return $default;
    }

    /**
     * Set session information
     *
     * @param string $key
     * @param mixed $value
     * @return void
     */
    public function set(string $key, $value): void
    {
        $this->ensureStarted();
        $_SESSION[$key] = $value;
    }

    /**
     * Delete session information
     *
     * @param string $key
     * @return void
     */
    public function delete(string $key): void
    {
        $this->ensureStarted();
        unset($_SESSION[$key]);
    }

    /**
     * Ensure session is started
     *
     * @return boolean
     */
    private function ensureStarted() : bool
    {
        if (session_status() === PHP_SESSION_NONE){
            session_start();
        }
    }
}
