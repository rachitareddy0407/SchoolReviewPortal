<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "discussion_forum";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$name = $_POST['name'];
$message = $_POST['message'];

$sql = "INSERT INTO posts (name, message) VALUES ('$name', '$message')";

if ($conn->query($sql) === TRUE) {
    echo "Post saved successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>

