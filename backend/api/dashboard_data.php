<?php
session_start();

header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Credentials: true");
header("Content-Type: application/json");

if (!isset($_SESSION['user'])) {
    echo json_encode(["error" => "Utente non loggato"]);
    exit;
}

require_once("../config.php");

$user_id = $_SESSION['user']['id'];

// Simuliamo dei dati della dashboard
$data = [
    "connections" => rand(50, 200), // Simuliamo il numero di connessioni
    "messages" => rand(10, 100), // Simuliamo il numero di messaggi ricevuti
    "suggestedUsers" => [
        ["id" => 3, "name" => "Alessandro Rossi", "email" => "alessandro.rossi@example.com"],
        ["id" => 4, "name" => "Marta Bianchi", "email" => "marta.bianchi@example.com"]
    ]
];

echo json_encode($data);
?>