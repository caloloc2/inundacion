<?php

$respuesta['estado'] = false;

try{
	session_start();
	
	if (isset($_SESSION['id_usuario'])){
		$respuesta['id_usuario'] = $_SESSION['id_usuario'];
		$respuesta['usuario'] = $_SESSION['usuario'];
		$respuesta['acceso'] = $_SESSION['acceso'];
		$respuesta['estado'] = true;	
	}

}catch(Exception $e){
	$respuesta['error'] = $e->getMessage();
}

echo json_encode($respuesta);