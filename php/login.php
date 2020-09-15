<?php

$respuesta['estado'] = false;

try{
	require 'meta.php';

	$correo = $_REQUEST['correo'];
	$password = $_REQUEST['password'];

	$inicio = Meta::Consulta_Unico("SELECT * FROM usuarios WHERE ((correo='".$correo."') AND (clave='".$password."'))");

	if ($inicio['id_usuario']!=''){
		$respuesta['usuario'] = $inicio;		
	}
	
}catch(Exception $e){
	$respuesta['error'] = $e->getMessage();
}

echo json_encode($respuesta);