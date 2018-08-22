<?php

$respuesta['estado'] = false;

try{
	session_start();
	$_SESSION['id_usuario'] = 1;
	$_SESSION['usuario'] = 'Administrador';
	$respuesta['estado'] = true;		
}catch(Exception $e){
	$respuesta['error'] = $e->getMessage();
}

echo json_encode($respuesta);