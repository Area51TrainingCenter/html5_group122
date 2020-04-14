/*
"funcion que me devuelva la fecha actual en el siguiente formato"
"hoy 13 de abril del 2020"
*/
let fecha=obtenerFechaActual();
console.log(fecha);


function obtenerFechaActual(){
	let fecha=new Date();

	let anio=fecha.getFullYear();
	let mes=fecha.getMonth();
	let dia=fecha.getDate();

	let listado_meses=[ "Enero",
				"Febrero",
				"Marzo",
				"Abril",
				"Mayo",
				"Junio",
				"Julio",
				"Agosto",
				"Septiembre",
				"Noviembre",
				"Diciembre"];
	
	let nombre_mes=listado_meses[mes];

	let fecha_formato="hoy "+dia + " de "+ nombre_mes + " del "+anio;
	return fecha_formato;
}


