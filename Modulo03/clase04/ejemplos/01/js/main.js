$("#home").click(function(){
	removeClase();

	$("#home").addClass("activado")

	
	
	ocultarsecciones();
	//$("#sec-home").show();
	$("#sec-home").fadeIn();
	//$("#sec-home").removeClass("ocultar");

})

$("#page").click(function(){
	removeClase();
	$("#page").addClass("activado");
	
	ocultarsecciones();
	//$("#sec-page").show();
	$("#sec-page").fadeIn();
})

$("#recipes").click(function(){
		removeClase();
	$("#recipes").addClass("activado")
	ocultarsecciones();
	//$("#sec-recetas").show();
	$("#sec-recetas").fadeIn();
})

$("#contact").click(function(){
		removeClase();
	$("#contact").addClass("activado")

	ocultarsecciones();
	//$("#sec-contacto").show();
	$("#sec-contacto").fadeIn();

})

function removeClase(){
	/*$("#home").removeClass("activado")
	$("#page").removeClass("activado");
	$("#recipes").removeClass("activado")
	$("#recipes").removeClass("activado")*/
	$(".nav-site ul li").removeClass("activado")

}
function ocultarsecciones(){
	//$(".js-seccion").addClass("ocultar");
	$(".js-seccion").hide();
}


$("#btn-enviar").click(function(){
	event.preventDefault();
	
	let nombres=$("#inp-nombres").val();
	let correo=$("#inp-correo").val();

	let nombres_sin_espacios=$.trim(nombres)
	let correo_sin_espacios=$.trim(correo)
	//nombres=$.trim(nombres);
	//console.log($.trim(nombres))
	if(nombres_sin_espacios==""){
			$("#error-nombre").html("Debes ingresar tu nombre para continuar")
	}else{
		$("#error-nombre").html("");
	}


	if(correo_sin_espacios==""){
			$("#error-correo").html("Debes ingresar tu correo para continuar")
	}
	else{
		$("#error-correo").html("")
	}

	if(nombres_sin_espacios=="" && correo_sin_espacios==""){
		// me faltan datos
	}
	else{
		$("#box-modal").fadeIn();
	}
	/*if(nombres_sin_espacios=="admin" && correo=="correo123"){

	}*/
	/*if(nombres==""){
		alert("ingresa tu nombre por favor")
	}*/
	 "    asdasdasdas"  //asdasdasdas
	"    asdasdasdas    " //asdasdasdas
	"    asdasdasdas    a" //asdasdasdas    a
	
})

$("#cerrar-modal").click(function() {
	$("#box-modal").fadeOut();
	$("#inp-nombres").val(""); //obtienes
	$("#inp-correo").val("");
});