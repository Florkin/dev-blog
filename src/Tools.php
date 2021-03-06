<?php

namespace App;

abstract class Tools
{
    /**
     * @param object $object
     * @return array
     * @throws \ReflectionException
     *
     * Transform an object into an array
     */
    public function objectToArray(object $object)
    {
        $reflectionClass = new \ReflectionClass(get_class($object));
        $array = array();
        foreach ($reflectionClass->getProperties() as $property) {
            $property->setAccessible(true);
            $array[$property->getName()] = $property->getValue($object);
            $property->setAccessible(false);
        }
        return $array;
    }


    /**
     * @param string $url
     * @param int $code
     *
     * Handle redirections
     */
    function Redirect(string $url, int $code = 302)
    {
        if (strncmp('cli', PHP_SAPI, 3) !== 0)
        {
            if (headers_sent() !== true)
            {
                if (strlen(session_id()) > 0) // If using sessions
                {
                    session_regenerate_id(true); // Avoids session fixation attacks
                    session_write_close(); // Avoids having sessions lock other requests
                }

                if (strncmp('cgi', PHP_SAPI, 3) === 0)
                {
                    header(sprintf('Status: %03u', $code), true, $code);
                }

                header('Location: ' . $url, true, (preg_match('~^30[1237]$~', $code) > 0) ? $code : 302);
            }
        }
    }
}