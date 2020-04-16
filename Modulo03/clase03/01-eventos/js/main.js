var elemento1=document.getElementById('opcion1');
console.log(elemento1);

elemento1.addEventListener("keypress",tarea1)

function tarea1(){
	
	var titulo=document.getElementById('titulo');	
	titulo.innerText="Inicio";
}

var elemento2=document.getElementById('opcion2');
elemento2.addEventListener("dblclick",tarea2);
function tarea2(){
	var titulo=document.getElementById('titulo');	
	titulo.innerText="Nosotros";
}

var elemento3=document.getElementById('opcion3');
elemento3.addEventListener("dblclick",tarea3);
function tarea3(){
	var titulo=document.getElementById('titulo');	
	titulo.innerText="Servicios";
}

var elemento4=document.getElementById('opcion4');
elemento4.addEventListener("dblclick",tarea4);
function tarea4(){
	var titulo=document.getElementById('titulo');	
	titulo.innerText="Contacto";
}
//console.log(elemento1.innerText); // obtienes el texto interno
//console.log(elemento1.innerText="Texto Actualizado") // actualizadnoe l texto interno
