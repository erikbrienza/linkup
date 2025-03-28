<?php
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Credentials: true");
header("Content-Type: application/json");

session_start();

if (isset($_SESSION["user"])) {
    echo json_encode(["user" => $_SESSION["user"]]);
} else {
    echo json_encode(["error" => "Nessun utente loggato"]);
}
?>