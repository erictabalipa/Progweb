<?php

$xml_string = file_get_contents("../../xml/login.xml");
$xml_object = simplexml_load_string($xml_string);

echo json_encode($xml_object);
?>