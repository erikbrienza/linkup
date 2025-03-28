<?php
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Credentials: true");
header("Content-Type: application/json");

require_once("../config.php");

$user_id = $_POST['user_id'];
$name = $_POST['name'];
$bio = $_POST['bio'] ?? "";
$password = $_POST['password'] ?? "";
$photo = $_FILES['photo'] ?? null;

// Controllo se aggiornare la password
if (!empty($password)) {
    $hashed_password = password_hash($password, PASSWORD_BCRYPT);
    $updatePass = $conn->prepare("UPDATE users SET password=? WHERE id=?");
    $updatePass->bind_param("si", $hashed_password, $user_id);
    $updatePass->execute();
}

// Controllo se c’è un'immagine da caricare
if ($photo) {
    $targetDir = "../uploads/";
    $fileName = time() . "_" . basename($photo["name"]);
    $targetFilePath = $targetDir . $fileName;
    
    if (move_uploaded_file($photo["tmp_name"], $targetFilePath)) {
        $updateImg = $conn->prepare("UPDATE users SET photo=? WHERE id=?");
        $updateImg->bind_param("si", $fileName, $user_id);
        $updateImg->execute();
    }
}

// Aggiorna i dati di nome e bio
$updateUser = $conn->prepare("UPDATE users SET name=?, bio=? WHERE id=?");
$updateUser->bind_param("ssi", $name, $bio, $user_id);
$updateUser->execute();

// Recupera i nuovi dati aggiornati
$userQuery = $conn->prepare("SELECT id, name, email, bio, photo FROM users WHERE id=?");
$userQuery->bind_param("i", $user_id);
$userQuery->execute();
$userQuery->bind_result($id, $name, $email, $bio, $photo);
$userQuery->fetch();

echo json_encode(["success" => "Profilo aggiornato!", "user" => ["id" => $id, "name" => $name, "email" => $email, "bio" => $bio, "photo" => $photo]]);

$conn->close();
?>