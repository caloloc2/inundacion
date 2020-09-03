<?php 

$respuesta['estado'] = false;

try{
	require 'meta.php';

	if (isset($_GET['valor'])){
		$fecha = date('Y-m-d');
		$hora = date('H:i:s');

		$valor = $_GET['valor'];
		$valor2 = $_GET['valor2'];

		$nuevo = Meta::Nuevo_Dato($valor, $valor2, $fecha, $hora);

		$respuesta['estado'] = true;	
	}else{
		$respuesta['error'] = 'Sin datos';
	}
	
}catch(Exception $e){
	$respuesta['error'] = $e->getMessage();
}

echo json_encode($respuesta);