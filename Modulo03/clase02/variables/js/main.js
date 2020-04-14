var dato;
let nombre;
const tipo_cambio=10;

dato=10; // numero
dato="12300"; // cadena

//bool (true o false)
let estado;
estado=true;

if(estado)
{
	// true, se ejecuta este codigo
}
else{
	// false, se ejecuta aquí
}

// fecha

let fecha="13/04/2020"; // no es una fecha , esto es una cadena que tiene un valor
console.log(fecha);

let fecha_actual=new Date();
console.log(fecha_actual);

let anio=fecha_actual.getFullYear(); // año actual;
let dia=fecha_actual.getDate(); // dia del mes;
let mes=fecha_actual.getMonth(); // mes actual;
let texto_fecha=dia+" de "+(mes+1)+" del "+anio;

let hora = fecha_actual.getHours();
let minuto=fecha_actual.getMinutes();
let segundo=fecha_actual.getSeconds();

console.log(texto_fecha);
console.log(hora + ":"+minuto+":"+segundo);

//"08 de 04 del 2020"


// 
let nombre1="Juan";
let nombre2="Diego";
let nombre3="Martin";

let nombres=["Juan","Diego","Martin","Luis"];

console.log(nombres);
console.log(nombres.length);
nombres[0] // Juan

nombres[3] // Luis


nombres[4] // ??


// le puse 6 notas; // cantidad de notas
// el indice del el ultimo elemento es cantidad de notas - 1; 
let notas=[10,20,13,15,12,18];


let valores=[10,2,3,456,234,50,304,506,34,0,5,4,86,1];
let cantidad=valores.length;
let indice_ultimo=cantidad-1;
valores[indice_ultimo];




//let persona=["Juan","0012",33,"jramos@gmail.com",23402305];


// Objeto


let persona1={
	nombre:"Juan Carlos",
	codigo:"0012",
	edad:33,
	correo:"jramos@gmail.com",
	seguro:123123123,
	bloqueado:false
}

let persona2={
	nombre:"Diego",
	codigo:"0013",
	edad:33,
	correo:"Diego@gmail.com",
	seguro:123123123,
	bloqueado:false
}

let persona3={
	nombre:"Martin",
	codigo:"0232",
	edad:20,
	correo:"martin@gmail.com",
	seguro:123123123,
	bloqueado:false
}



let listado_personas=[persona1,persona2,persona3];

console.log(listado_personas);

listado_personas[0].nombre
// nombre de la 1era persona
// el correo de la 2da persona
listado_personas[1].correo
// la edad de la segudna persona
listado_personas[2].edad

