<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "rosticeria";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);

/* change character set to utf8 */
mysqli_set_charset($conn,"utf8");

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

$nombre = $_POST['nombre'];
$telefono = $_POST['telefono'];
$genero = $_POST['genero'];
$email = $_POST['email'];
$comentarios = $_POST['comentarios'];

$sql = "INSERT INTO informacion (nombre, telefono, genero, email, comentarios)
VALUES ('$nombre', '$telefono', '$genero', '$email', '$comentarios')";

if (mysqli_query($conn, $sql)) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

mysqli_close($conn);
?>