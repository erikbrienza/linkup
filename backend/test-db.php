<?php
$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "linkup_db";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connessione fallita: " . $conn->connect_error);
}
echo "Connessione al database riuscita!";
$conn->close();
?>
