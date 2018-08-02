<?php

$respuesta['estado'] = false;

try{
	require 'meta.php';

	$fecha_inicio = $_POST['fecha_inicio'];
	$fecha_final = $_POST['fecha_final'];

	$respuesta['send'] = $_POST;

	$datos = Meta::Consulta("SELECT * FROM datos WHERE (fecha BETWEEN '".$fecha_inicio."' AND '".$fecha_final."') ORDER BY id_dato ASC");

	$respuesta['datos'] = $datos;

	$respuesta['estado'] = true;
}catch(Exception $e){
	$respuuesta['error'] = $e-getMessage();
}

echo json_encode($respuesta);