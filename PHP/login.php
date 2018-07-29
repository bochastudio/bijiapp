<?php
header("Access-Control-Allow-Origin: *");
require "conexion.php";

$usuario = mysqli_real_escape_string($cnx, $_POST['usuario']);
$clave = mysqli_real_escape_string($cnx, $_POST['clave']);

//$usuario = "pepe";
//$clave = 123;

$consulta = "SELECT * FROM usuarios WHERE usuario='$usuario' AND clave='$clave'";

$fila = mysqli_query($cnx, $consulta);

$columnas = mysqli_fetch_assoc( $fila );
$datos = array();

if($columnas == false){
	$datos['mensaje'] = 'error';
	echo json_encode($datos);
	exit;
}


$datos['mensaje'] = 'exito';


echo json_encode($datos);
mysqli_close($cnx);
?>