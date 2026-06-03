<?php

$nombre = $_POST['nombre'];
$correo = $_POST['correo'];
$password = $_POST['password'];

if(empty($nombre)){
    die("Error: Nombre obligatorio");
}

if(!filter_var($correo, FILTER_VALIDATE_EMAIL)){
    die("Error: Correo inválido");
}

if(strlen($password) < 8){
    die("Error: Contraseña muy corta");
}

echo "Registro exitoso";

?>