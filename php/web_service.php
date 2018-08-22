<?php

try{
	require 'meta.php';

	$fecha_inicio = $_POST['fecha_inicio'];
	$fecha_final = $_POST['fecha_final'];	

	$datos = Meta::Consulta("SELECT * FROM datos WHERE (fecha BETWEEN '".$fecha_inicio."' AND '".$fecha_final."') ORDER BY id_dato ASC");	

	$respuesta = $datos;

}catch(Exception $e){
	$respuuesta['error'] = $e-getMessage();
}

echo json_encode($respuesta);
