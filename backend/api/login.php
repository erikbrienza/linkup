<?php
session_start(); // Attiviamo la sessione

header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Credentials: true");
header("Content-Type: application/json");

require_once("../config.php");

$data = json_decode(file_get_contents("php://input"), true);
$email = $data['email'];
$password = $data['password'];

$stmt = $conn->prepare("SELECT id, name, email, photo, password FROM users WHERE email = ?");
$stmt->bind_param("s", $email);
$stmt->execute();
$stmt->store_result();
$stmt->bind_result($id, $name, $email, $photo, $hashed_password);
$stmt->fetch();

if ($stmt->num_rows > 0 && password_verify($password, $hashed_password)) {
    $userData = ["id" => $id, "name" => $name, "email" => $email, "photo" => $photo];
    $_SESSION['user'] = $userData; // Salviamo l'utente nella sessione
    echo json_encode(["success" => "Login riuscito", "user" => $userData]);
} else {
    echo json_encode(["error" => "Email o password errati"]);
}

$stmt->close();
$conn->close();
?>