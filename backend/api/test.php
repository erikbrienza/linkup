<?php
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Credentials: true");
header("Content-Type: application/json");

require_once("../config.php");

$data = json_decode(file_get_contents("php://input"), true);

$sender_id = $data['sender_id'];
$receiver_id = $data['receiver_id'];
$message = $data['message'];

if (empty($sender_id) || empty($receiver_id) || empty($message)) {
    echo json_encode(["error" => "Tutti i campi sono richiesti."]);
    exit();
}

$stmt = $conn->prepare("INSERT INTO messages (sender_id, receiver_id, message) VALUES (?, ?, ?)");
$stmt->bind_param("iis", $sender_id, $receiver_id, $message);

if ($stmt->execute()) {
    echo json_encode(["success" => "Messaggio inviato con successo"]);
} else {
    echo json_encode(["error" => "Errore durante l'invio"]);
}

$stmt->close();
$conn->close();
?>