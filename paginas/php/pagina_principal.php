<?php
	

	$diretorio = dir("../../xml/caixaentrada/");
	$cont = 0;
	while($arquivo = $diretorio->read()){

		if($arquivo != "." && $arquivo != ".."){	
			$xml_string = file_get_contents("../../xml/caixaentrada/".$arquivo);
			$xml_objeto[$cont] = simplexml_load_string($xml_string);	
			$cont++;
		}

	}

	echo json_encode($xml_objeto);
?>