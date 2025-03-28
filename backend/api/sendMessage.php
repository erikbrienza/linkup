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

if (!$sender_id || !$receiver_id || !$message) {
    echo json_encode(["error" => "Dati mancanti"]);
    exit;
}

$stmt = $conn->prepare("INSERT INTO messages (sender_id, receiver_id, message, created_at) VALUES (?, ?, ?, NOW())");
$stmt->bind_param("iis", $sender_id, $receiver_id, $message);
$stmt->execute();

if ($stmt->affected_rows > 0) {
    echo json_encode(["success" => "Messaggio inviato"]);
} else {
    echo json_encode(["error" => "Errore durante l'invio"]);
}

$stmt->close();
$conn->close();
?>