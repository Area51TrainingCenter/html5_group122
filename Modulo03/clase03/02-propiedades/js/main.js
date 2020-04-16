var elemento=document.getElementById('opcion');
var titulo=document.getElementById('titulo');

elemento.addEventListener("click",tarea)
function tarea(){
	titulo.innerText // obtiene el texto dentro del elemento
	titulo.innerHTML // obtiene el html dentro del elemento
	titulo.classList // obtiene el conjuto de clases del elemento;
	console.log(titulo.classList[0])
	console.log(titulo.classList[1])
	console.log(titulo.classList[2])
	titulo.classList.add("seleccionado") // agregar una clase al elemento
	titulo.classList.remove("clase1")    // quitar clase del elemento
	titulo.classList.remove("clase2")
}


var opcion1=document.getElementById('opcion1');

opcion1.addEventListener("click",tarea1);
function tarea1(){
	limpiarActivado();
	opcion1.classList.add("activado");
	
}


var opcion2=document.getElementById('opcion2');

opcion2.addEventListener("click",tarea2);

function tarea2(){
	limpiarActivado();
	opcion2.classList.add("activado");
}


var opcion3=document.getElementById('opcion3');

opcion3.addEventListener("click",tarea3);

function tarea3(){
	limpiarActivado();
	opcion3.classList.add("activado");
}


function limpiarActivado(){
	opcion1.classList.remove("activado");
	opcion2.classList.remove("activado");
	opcion3.classList.remove("activado");
}




function nombre(){

}



nombre();

var calculo=num1+num2;
var suma=calculo+10;

var suma=num1+num2+10;

var opcionx=document.getElementById('opcionx');
opcionx.addEventListener("click",function(){
	// tarea
})


var opciony=document.getElementById('opciony')
opciony.addEventListener("click",function(){

})


calcularIGV(100,3.29,function(){})

function avisar(){
	// avisame cuando acabe
}



function calcularIGV(monto,tipo_cambio,callback){
	//// 1000 lineas
	// 10 segundos

}