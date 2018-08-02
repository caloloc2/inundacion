<?php 

$respuesta['estado'] = false;

try{
	require 'meta.php';

	$id = Meta::Consulta_Unico("SELECT * FROM alarma LIMIT 1");

	if ($id['id_alarma']!=''){
		$estado = abs($id['estado'] -1);
		$actualiza = Meta::Actualizar_Campo('alarma', 'estado', $estado, 'id_alarma', $id['id_alarma']);
		$respuesta['estado'] = true;
		$respuesta['msg'] = "modificado";
		$respuesta['valor'] = $estado;
	}else{
		$crea = Meta::Alarma();
		$respuesta['estado'] = true;
		$respuesta['msg'] = "creado";
		$respuesta['valor'] = 0;
	}
}catch(Exception $e){
	$respuesta['error'] = $e->getMessage();
}

echo json_encode($respuesta);