$(document).ready(function(){
    $('#search').on('keyup', function () {
        var search = $(this).val().toLowerCase();
        $('#emailTable').find('tr').each(function () {
            var content = $(this).find('td').text();
            var result = content.toLowerCase().indexOf(search) >= 0;
            $(this).css('display', result ? '' : 'none');
        });
    });
    
    $("#control").click(function(){
        $(this).find('td').each(function(i) {
          $td = $("tr td")[i];
          alert( $(this).html())
        });                  
    })
});