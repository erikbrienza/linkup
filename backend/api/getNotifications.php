<?php
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Credentials: true");
header("Content-Type: application/json");

require_once("../config.php");

$user_id = $_GET['user_id'];

$stmt = $conn->prepare("SELECT COUNT(*) as unread FROM messages WHERE receiver_id = ? AND is_read = 0");
$stmt->bind_param("i", $user_id);
$stmt->execute();
$result = $stmt->get_result();
$data = $result->fetch_assoc();

echo json_encode(["unreadMessages" => $data['unread']]);

$stmt->close();
$conn->close();
?>