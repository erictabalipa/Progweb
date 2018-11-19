$(document).ready(function(){

    $.ajax({
        type: "POST",
        dataType: "json",
        url: "../paginas/php/enviados.php",
        success:function(retorno){
		console.log(retorno);
        

        	$("#tableEnviados").html("<tr class='bodyEmail'><td>"+retorno[0].to+"</td>"+"<td>"+retorno[0].subject+"</td>"+"<td>"+retorno[0].text+"</td>"+"</tr>")
        
           
     	
        }

    });
   

});