$(document).ready(function() {
  $("#mensajeSuccess").css("display","none");
  $("#mensajeError").css("display","none");
	console.log("entro a guardar_comentarios");
		$("#enviar").click(function() {

			var nombre = $("#nombre").val();
			var telefono = $("#telefono").val();
			var genero = $("#genero").val()
			var email = $("#email").val();
			var comentarios = $("#comentarios").val();

			if(nombre ==""){
				$("#mensajeCampo").html("Captura tu nombre");
			}
			else if(telefono == ""){
				$("#mensajeCampo").html("Captura tu telefono");
			}
			else if(genero == ""){
				$("#mensajeCampo").html("Selecciona tu genero");
			}
			else if(email == ""){
				$("#mensajeCampo").html("Captura tu correo");
			}
			else if (comentarios == "") {
				$("#mensajeCampo").html("Captura algunos comentarios");
			}
			else{

			//alert("los datos son:" + nombre + "telefono" + telefono + "genero" + genero + "email" + email + "comentarios" + comentarios);

				//Construimos la variable que se guardará en el data del Ajax para pasar al archivo php que procesará los datos
			 var dataString = 'nombre=' + nombre + '&telefono=' + telefono + '&genero=' + genero + '&email=' + email + '&comentarios=' + comentarios;

					$.ajax({
						type: "POST",
						url: "php/php_7.php",
						data: dataString,
						success: function() {
					    	//$('#mainform').html("<div id='message'></div>");
					        //$('#message').html("<h2>Tus datos han sido guardados correctamente!</h2>");
					        $("#mensajeCampo").html("");
					        $("#mensajeSuccess").css("display","block");
							//$('#form1')[0].reset(); // To reset form fields
					    }
					});
					return true;
				}
		});
});
