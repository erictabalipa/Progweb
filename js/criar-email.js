var id=0;

$(document).ready(function(){


	$("#bCriarEmail").click(function(){
		$("#id").val(id);
		id++;
	});

	$("#bCriarEmail").click(function(){
		createEmail();
		return false;
	});

});

function createEmail(){

	if($("#to").val() == ""){
		$("#divError").html("Preencha o email de destino.");
		return false;
	}

	if($("#subject").val() == ""){
		$("#divError").html("Preencha o assunto do email.");
		return false;
	}

	if($("#text").val() == ""){
		$("#divError").html("Preencha o corpo do email.");
		return false;
	}else{
		$("#divError").html("");
		$.ajax({
			type: "POST",
			dataType: "html",
			url: "php/criar-email.php",
			data:{
				id: $("#id").val(),
				cc: $("#cc").val(),
				to: $("#to").val(),
				subject: $("#subject").val(),
				text: $("#text").val()
			},
			success:function(data){
				$("#divSuccess").html(data);
			}
		});
	}
}
