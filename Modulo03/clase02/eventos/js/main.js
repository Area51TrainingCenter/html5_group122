var elemento=document.getElementById("titulo");
//elemento.innerText="Texto modificado desdeJS";
var opcion1=document.getElementById("opcion1");

var opcion2=document.getElementById('opcion2');

console.log(opcion1);
console.log(opcion2);

var contenido=document.getElementById('detalle_contenido');

//opcion1.addEventListener(nombre evento,nombre la funciona quieres ejecutar)
opcion1.addEventListener("click",cambioOpcion1);


function cambioOpcion1(){
	contenido.innerText="te debo mostrar el contenido 1";
}


opcion2.addEventListener("click",cambioOpcion2)

function cambioOpcion2(){
	contenido.innerText="te debo mostrar el contenido 2";
}