<?php 

$respuesta['estado'] = false;

try{
    require 'meta.php';
    
    $nombres = $_POST['nombres'];
    $correo = $_POST['correo'];
    $clave = $_POST['clave'];
    $estado = $_POST['estado'];

    $consulta = Meta::Consulta_Unico("SELECT id_usuario FROM usuarios WHERE (correo='".$correo."') LIMIT 1");

    if ($consulta['id_usuario']==''){
        $nuevo = Meta::Nuevo_Usuario($nombres, $correo, $clave, $estado);
        $respuesta['estado'] = true;
    }

}catch(Exception $e){
	$respuesta['error'] = $e->getMessage();
}

echo json_encode($respuesta);