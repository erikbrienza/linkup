<?php
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Credentials: true");
header("Content-Type: application/json");

require_once("../config.php");

$user_id = $_GET['user_id'];

$stmt = $conn->prepare("SELECT 
    SUM(CASE WHEN sender_id = ? THEN 1 ELSE 0 END) AS sent_messages,
    SUM(CASE WHEN receiver_id = ? THEN 1 ELSE 0 END) AS received_messages
    FROM messages");

$stmt->bind_param("ii", $user_id, $user_id);
$stmt->execute();
$stmt->bind_result($sent_messages, $received_messages);
$stmt->fetch();

echo json_encode(["sent" => $sent_messages, "received" => $received_messages]);

$stmt->close();
$conn->close();
?>