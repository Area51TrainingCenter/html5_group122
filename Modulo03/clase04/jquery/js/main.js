// JS selecionando elemento
/*var ele=document.getElementById('item1');

// Jquery seleccionando elemento
$("#item")



// JS agregando escuchador
ele.addEventListener("click",tarea)
function tarea(){
	console.log("click en boton")
}

//Jquery agregando escuchador
$("#item").click(function(){

})


var ele=document.getElementById('item1');
ele.addEventListener("click",tarea)
function tarea(){
	console.log("click en boton")
}
*/

$("#item1").click(function(){
	$("#estado").text("Encendido")
})

$("#item2").click(function(){
	$("#estado").text("Apagado")
})