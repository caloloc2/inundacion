<?php

$respuesta['estado'] = false;

try{
	$usuario = $_POST['usuario'];
	$pass = $_POST['pass'];

	if (($usuario=='admin')&&($pass=='12345')){
		session_start();
		$_SESSION['id_usuario'] = 1;
		$_SESSION['usuario'] = 'Administrador';
		$respuesta['estado'] = true;	
	}

	
}catch(Exception $e){
	$respuesta['error'] = $e->getMessage();
}

echo json_encode($respuesta);