<?php
session_start();

header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Credentials: true");
header("Content-Type: application/json");

if (isset($_SESSION['user'])) {
    echo json_encode(["user" => $_SESSION['user']]);
} else {
    echo json_encode(["user" => null]);
}
?>