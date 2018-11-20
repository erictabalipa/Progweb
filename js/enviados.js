$(document).ready(function(){

    $('#search').on('keyup', function () {
        var search = $(this).val().toLowerCase();
        $('#tableEnviados').find('tr').each(function () {
            var content = $(this).find('td').text();
            var result = content.toLowerCase().indexOf(search) >= 0;
            $(this).css('display', result ? '' : 'none');
        });
    });

    $.ajax({
        type: "POST",
        dataType: "json",
        url: "../paginas/php/enviados.php",
        success:function(retorno){

        for(var i = 0 ; i < retorno.length ; i++){
            	$("#tableEnviados").append("<tr class='bodyEmail'><td>"+retorno[i].to+"</td>"+"<td>"+retorno[i].subject+"</td>"+"<td class='tdText'>"+retorno[i].text+"</td>"+"</tr>")
            }
        }

    });
   
});