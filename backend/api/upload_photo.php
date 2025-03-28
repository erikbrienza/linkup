<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

require_once("../config.php");

$user_id = $_POST['user_id'];
$target_dir = "../uploads/";
$target_file = $target_dir . basename($_FILES["photo"]["name"]);

if (move_uploaded_file($_FILES["photo"]["tmp_name"], $target_file)) {
    $photo_name = basename($_FILES["photo"]["name"]);
    $stmt = $conn->prepare("UPDATE users SET photo = ? WHERE id = ?");
    $stmt->bind_param("si", $photo_name, $user_id);
    $stmt->execute();

    echo json_encode(["success" => "Foto aggiornata", "photo" => $photo_name]);
} else {
    echo json_encode(["error" => "Errore nel caricamento"]);
}

$conn->close();
?>