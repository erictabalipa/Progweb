<?php
	

	$diretorio = dir("../../xml/enviados/");
	$cont = 0;
	while($arquivo = $diretorio->read()){
		
		

			if($arquivo != "." && $arquivo != ".."){
				
				$xml_string = file_get_contents("../../xml/enviados/".$arquivo);
				$xml_objeto[$cont] = simplexml_load_string($xml_string);
				

			}

		$cont++;

	}
	echo $arquivo;

	echo json_encode($xml_objeto);


?>