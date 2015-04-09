<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
$json = file_get_contents("http://data.nantes.fr/api/publication/24440040400129_NM_NM_00022/LOC_EQUIPUB_MOBILITE_NM_STBL/content/?format=json");
echo $json;
?>