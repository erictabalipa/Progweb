<?php

	$id = $_POST["id"];
	$to = $_POST["to"];
    $cc = $_POST["cc"];
    $subject = $_POST["subject"];
    $text = $_POST["text"];

	$xml = new DOMDocument("1.0");
	$root_tag = $xml->createElement("email");
    $to_tag = $xml->createElement("to", $to);
    $cc_tag = $xml->createElement("cc", $cc);
    $subject_tag = $xml->createElement("subject", $subject);
    $text_tag = $xml->createElement("text", $text);

	$root_tag->appendChild($to_tag);
    $root_tag->appendChild($cc_tag);
    $root_tag->appendChild($subject_tag);
    $root_tag->appendChild($text_tag);
	$xml->appendChild($root_tag);
    
	$xml->save("../../xml/enviados/".$id.$to.".xml");

    echo "Seu email foi enviado com êxito !";
?>