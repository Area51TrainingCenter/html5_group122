/*https://latinademo.s3.amazonaws.com/app/programas/contenido/yosoy.json
https://latinademo.s3.amazonaws.com/app/programas/contenido/90central.json
https://latinademo.s3.amazonaws.com/app/programas/contenido/wasapjb.json*/


$(window).load(function(){

$("#opcion1").click(function(){
	let url="https://latinademo.s3.amazonaws.com/app/programas/contenido/yosoy.json";
	/*$.getJSON(url,function(data){
		console.log(data);
	})*/

	/*$.ajax({
		url:"https://latinademo.s3.amazonaws.com/app/programas/contenido/wasapjb.json",
		success:function(data){
			console.log(data);
		},
		error:function(data){

		},
		method:"GET"
	})*/
	obtenerDatos(url)
})

$("#opcion2").click(function(){
	/*$.ajax({
		url:"https://latinademo.s3.amazonaws.com/app/programas/contenido/wasapjb.json",
		success:function(data){
			console.log(data);
		},
		error:function(data){

		},
		method:"GET"
	})*/
	let url="https://latinademo.s3.amazonaws.com/app/programas/contenido/wasapjb.json";
	obtenerDatos(url)
})

$("#opcion3").click(function(){
	/*$.ajax({
		url:"https://latinademo.s3.amazonaws.com/app/programas/contenido/90central.json",
		success:function(data){
			console.log(data);
		},
		error:function(data){

		},
		method:"GET"
	})*/
	let url="https://latinademo.s3.amazonaws.com/app/programas/contenido/90central.json";
	obtenerDatos(url)

})



function obtenerDatos(url_destino){
	
	$("#contenido").html("");
	$.ajax({
		url:url_destino,
		success:function(data){
			
			for(var item of data){
				console.log(item.title);
				console.log(item.image);
				$("#contenido").append(`<article>
					<img src="${item.image}" alt="">
					<h2>${item.title}</h2>
				</article>`)
			}
		},
		error:function(data){

		},
		method:"GET"
	})



}

})