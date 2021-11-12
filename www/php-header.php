<?php

$environments = array(
    'local' => 'sessions-suspendues.lpg',
    'production'     => 'sourdoreille.net'
);

$server_name = $_SERVER['SERVER_NAME'];

foreach ($environments as $key => $env) {
    if ($server_name == $env) {
        define('ENVIRONMENT', $key);
        break;
    }
}

// If no environment is set default to production
if (!defined('ENVIRONMENT')) {
    define('ENVIRONMENT', 'production');
}

$BASE_URL = "";
$VERSION = 2;
if (ENVIRONMENT == "production") {
    $BASE_URL = "/sessions-suspendues";
}
