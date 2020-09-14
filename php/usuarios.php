<?php

$respuesta['estado'] = false;

try{
	require 'meta.php';		

	$datos = Meta::Consulta("SELECT * FROM usuarios ORDER BY id_usuario DESC");

	$respuesta['datos'] = $datos;

	$respuesta['estado'] = true;
}catch(Exception $e){
	$respuuesta['error'] = $e-getMessage();
}

echo json_encode($respuesta);