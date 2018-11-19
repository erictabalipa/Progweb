$(document).ready(function(){

    $("#loginButton").click(function(){
        
        $.ajax({
            type: "POST",
            dataType: "json",
            url: "http://localhost/progweb/paginas/php/login.php",
            success:function(retornoLogin){
                var usuario = retornoLogin.user;
                var senha = retornoLogin.password;

                
                    if($("#userInput").val() === usuario && $("#passwordInput").val() === senha){
                        $(location).attr('href', 'paginas/pagina_principal.html')
                    }else{
                        if($("#userInput").val() === ""){
                            $("#divMensagem").html("Preencha seu usuário....");
                        }else{
                            if($("#passwordInput").val() === ""){
                                $("#divMensagem").html("Preencha sua senha.");    
                            }else{
                                $("#divMensagem").html("Usuário ou senha incorretos.");
                            }
                        }
                    }

                    if($("#userInput").val() ==""){
                        
                        $("#userInput").addClass("inputErro");
                       
                    }else{
                        $("#userInput").removeClass("inputErro");
                    }

                    if($("#passwordInput").val() ==""){
                        
                        $("#passwordInput").addClass("inputErro");
                       
                    }else{
                        $("#passwordInput").removeClass("inputErro");
                    }
                        }
                    });

       
          
    })

});