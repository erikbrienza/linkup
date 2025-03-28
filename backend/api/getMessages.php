<?php
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Credentials: true");
header("Content-Type: application/json");

require_once("../config.php");

$user_id = $_GET['user_id'];

$stmt = $conn->prepare("SELECT m.*, u.name AS sender_name 
                        FROM messages m
                        JOIN users u ON m.sender_id = u.id
                        WHERE m.receiver_id = ?
                        ORDER BY m.timestamp DESC");

$stmt->bind_param("i", $user_id);
$stmt->execute();
$result = $stmt->get_result();

$messages = [];
while ($row = $result->fetch_assoc()) {
    $messages[] = $row;
}

echo json_encode($messages);

$stmt->close();
$conn->close();
?>