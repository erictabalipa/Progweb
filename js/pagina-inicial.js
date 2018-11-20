$(document).ready(function(){

    $('#search').on('keyup', function () {
        var search = $(this).val().toLowerCase();
        $('#emailTable').find('tr').each(function () {
            var content = $(this).find('td').text();
            var result = content.toLowerCase().indexOf(search) >= 0;
            $(this).css('display', result ? '' : 'none');
        });
    });

    $.ajax({
        type: "POST",
        dataType: "json",
        url: "../paginas/php/pagina_principal.php",
        success:function(retorno){

        for(var i = 0 ; i < retorno.length ; i++){
            	$("#emailTable").append("<tr class='bodyEmail'><td>"+retorno[i].to+"</td>"+"<td>"+retorno[i].subject+"</td>"+"<td class='tdText'>"+retorno[i].text+"</td>"+"<td style='widght=3px'><button class='deleteButton'><i class='fa fa-trash'></i></button></td>"+"</tr>")
            }
        }

    });
    
});