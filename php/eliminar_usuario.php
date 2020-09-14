<?php 

$respuesta['estado'] = false;

try{
    require 'meta.php';
    
    $id = $_POST['id'];

    $nuevo = Meta::Ejecutar("DELETE FROM usuarios WHERE id_usuario=".$id);

    $respuesta['estado'] = true;		
	
}catch(Exception $e){
	$respuesta['error'] = $e->getMessage();
}

echo json_encode($respuesta);