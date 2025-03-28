<?php
session_start();
session_destroy();
setcookie(session_name(), '', time() - 3600, '/'); // Cancella il cookie della sessione

header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Credentials: true");
header("Content-Type: application/json");

echo json_encode(["success" => "Logout effettuato con successo"]);
?>