// JS selecionando elemento
/*var ele=document.getElementById('item1');

// Jquery seleccionando elemento
$("#item")



// JS agregando escuchador
ele.addEventListener("click",tarea)
function tarea(){
	console.log("click en boton")
}

//Jquery agregando escuchador */
/*

$("#item").click(function(){

})
*/






/*
var ele=document.getElementById('item1');
ele.addEventListener("click",tarea)
function tarea(){
	console.log("click en boton")
}
*/

$("#item1").click(function(){
	
	$("#estado").text("Encendido") 
	$("#estado").removeClass();
	$("#estado").addClass("encendido");// agregar Texto al elemento
	//let valor=$("#estado").text() // devulve el valor del texto 
	//$("#estado").text("<span>Estado</span><strong>Encendido</strong>")
	//$("#estado").html("<span>Estado: </span><strong>Encendido</strong>")

})

$("#item2").click(function(){
	$("#estado").text("Apagado");
	$("#estado").removeClass();
	$("#estado").addClass("apagado");
})