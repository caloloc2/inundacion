<?php

$respuesta['estado'] = false;

try{
	require 'meta.php';

	$usuario = $_POST['usuario'];
	$pass = $_POST['pass'];	

    $datos = Meta::Consulta_Unico("SELECT * FROM usuarios WHERE ((correo='".$usuario."') AND (clave='".$pass."')) LIMIT 1");
    
    if ($datos['id_usuario'] != ''){
        session_start();
        $_SESSION['id_usuario'] = $datos['id_usuario'];
        $_SESSION['usuario'] = $datos['nombres'];
        
        $respuesta['estado'] = true;
    }

    $respuesta['datos'] = $datos;
}catch(Exception $e){
	$respuuesta['error'] = $e-getMessage();
}

echo json_encode($respuesta);