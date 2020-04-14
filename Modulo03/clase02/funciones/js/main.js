
console.log(sumarNumeros(10,5,10));

let res2=sumarNumeros(2,19,2);
let res3=sumarNumeros(12,29,11);
console.log(res2);
console.log(res3);
//obtenerhoraactual();


function sumarNumeros(valor1,valor2,valor3){
	var suma=valor1+valor2+valor3;
	return suma;
}

function calcularIGV(valor){
	var igv=valor*0.18;
}
calcularIGV(9);
calcularIGV(190);


function obtenerhoraactual(){
	let fecha=new Date();
	let hora=fecha.getHours()+":"+fecha.getMinutes()+":"+fecha.getSeconds();
	console.log(hora)
}


function suma(valor1,valor2){
	var suma=valor1+valor2;
	return suma;
}

function sumar2(valor1,valor2){
	var suma=valor1+valor2;
	
}
// agregar al carrito
// calcular y mostrar en el listado
// calcular total acumulado
/*
calcularIGV();

calcularIGV();


calcularIGV();


function calcularIGV(){
	igv=producto*0.19;
}*/





 // le pido su edad edad al usario 
var edad=prompt("ingresa tu edad"); //19
var estado_validacion=validarEdad(edad) // true
// mostrar mensaje al usuairo 

if(estado_validacion==true){
	// muestras el mensaje de bienvenida
}
else{
	// muestras el mensaje de rechazo
}




function validarEdad(valor){
 	estado=true;
 	if(edad>18){
 		edad=true;
 	}
 	else{
 		edad=false;
 	}
 	return estado;
	
 }


