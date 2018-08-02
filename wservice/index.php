<?php    
    require_once "lib/nusoap.php";

    $server = new soap_server();    
    $server->configureWSDL("Octopus", "urn:WS_Octupus");

    function Verificacion($id_cuenta) {
        $DATABASE = $id_cuenta;
        require "php/meta.php";

        $consulta = Meta::Consulta_Unico('SELECT * FROM usuarios');            
        if ($consulta['id_user']!=''){            
            $retorno = $consulta['usuario'];
        }            

        return $retorno;
    }
        
    $server->register("Verificacion",
        array("id_cuenta" => "xsd:string"),        
        array('return' => 'xsd:string'),
        "urn:WS_Octupus",
        "urn:WS_Octupus#Verificacion",
        "rpc",
        "encoded",
        "Realiza la verificacion de la cuenta."
    );
  	
  	/*$HTTP_RAW_POST_DATA = isset($HTTP_RAW_POST_DATA) ? $HTTP_RAW_POST_DATA : '';
    $server->service($HTTP_RAW_POST_DATA);*/

    /*$HTTP_RAW_POST_DATA = isset($GLOBALS['HTTP_RAW_POST_DATA']) ? $GLOBALS['HTTP_RAW_POST_DATA'] : '';
    $server->service($HTTP_RAW_POST_DATA);*/

    //


    /*$HTTP_RAW_POST_DATA = isset($HTTP_RAW_POST_DATA) ? $HTTP_RAW_POST_DATA : '';
    $server->service($HTTP_RAW_POST_DATA);*/ 

    $server->service(file_get_contents("php://input"));
?>