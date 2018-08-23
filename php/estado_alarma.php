<?php 

try{
	require 'meta.php';

	$id = Meta::Consulta_Unico("SELECT * FROM alarma LIMIT 1");

	if ($id['id_alarma']!=''){
		echo $id['estado'];
	}else{
		$crea = Meta::Alarma();
		echo "0";
	}
}catch(Exception $e){
	echo $e->getMessage();
}