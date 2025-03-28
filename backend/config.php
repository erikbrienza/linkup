<?php
$servername = "localhost";
$username = "root";  
$password = "root";  
$dbname = "linkup_db";
$port = 8889; // Porta MySQL di MAMP

// Creiamo la connessione
$conn = new mysqli("localhost", "root", "root", "linkup_db");

// Controlliamo la connessione
if ($conn->connect_error) {
    die(json_encode(["error" => "Connessione fallita: " . $conn->connect_error]));
}
?>