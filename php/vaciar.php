<?php

$respuesta['estado'] = false;

try{
	require 'meta.php';

	$vaciar = Meta::Ejecutar("TRUNCATE TABLE datos");

	$respuesta['estado'] = true;
}catch(Exception $e){
	$respuesta['error'] = $e->getMessage();
}

echo json_encode($respuesta);