//$() // funcion jquery

$("#enceder").click(function(){
	//presionarInteruptor()
	$(".bonbilla").addClass("prendido")
})

$("#apagar").click(function(){
	//presionarInteruptor()
	$(".bonbilla").removeClass("prendido")
})

function presionarInteruptor(){
	//$(".bonbilla").addClass('prendido')
		//$(".bonbilla").toggleClass("prendido");
}





/*
$("#inicio").click(function(){
	//let valor=$("#inicio").attr("class") // obtiene el valor del atributo class
	//console.log(valor)
	
	//$("#inicio").attr("class","nuevoclase") // actualizas el valor del atributo class
	let opcion=$("#inicio").attr("data-opcion");
	console.log(opcion);

	$(".nav-site ul li").removeClass("activado");
	$("#inicio").addClass("activado");
})
$("#nosotros").click(function(){
	$(".nav-site ul li").removeClass("activado");
	$("#nosotros").addClass("activado");
})
$("#contacto").click(function(){
	$(".nav-site ul li").removeClass("activado");
	$("#contacto").addClass("activado");
})*/

$(".opcion").click(function(){
	$(".nav-site ul li").removeClass("activado");
	$(this).addClass("activado");
	//let valor=$(this).attr("data-opcion")
	/*if(valor==1){
		$("#inicio").addClass('activado')
	}
	if(valor==2){

	}*/
})

// evento generado por el usuario

$("span").click(function(){
 //console.log("click");
})

// eventos generados por el navegador

$(window).load(function(){
 //console.log("")
 // cunado el navegador no solo carga el documento si no tambien los recuros
});

$(document).ready(function(){
 // se ejecuta cuando tu documento o tu estructura html carga
})




