
$(window).load(function(){
	$("#consultar").click(function(){
	
		$.ajax({
			url:"https://jsonplaceholder.typicode.com/users",
			success:function(valor){
				// valor // []
				console.log(valor)
				/*$("#listado").html("<li>"+valor[0].name+"</li>");
				$("#listado").html("<li>"+valor[1].name+"</li>");
				$("#listado").html("<li>"+valor[2].name+"</li>");
				*/
				/*$("#listado").append("<li>"+valor[0].name+"</li>");
				$("#listado").append("<li>"+valor[1].name+"</li>");
				$("#listado").append("<li>"+valor[2].name+"</li>");
				console.log(valor[2].name);
				console.log(valor[3].name);
				console.log(valor[4].name);
				console.log(valor[5].name);
				console.log(valor[6].name);
				console.log(valor[7].name);
				console.log(valor[8].name);
				console.log(valor[9].name);*/


				/*for(var i=0;i<valor.length;i++){
					// contenido
					$("#listado").append("<li>"+valor[i].name+"</li>");

				}*/

				//valor[] 
				for(var item of valor){
					$("#listado").append("<li>"+item.name+"<a href='http://"+item.website+"'>Visita su sitio web</a></li>");
				}


				/*

				var contenido=["hola","adios","aqui estoy"];


				for (var item in contenido){
					console.log(item)
				}*/











			},
			error:function(){
				console.log("la petición presento un error");
			},
			method:"GET"
		});
	

	//$.getJSON(url,function(){});

	let url="https://jsonplaceholder.typicode.com/posts/1";
	
	$.getJSON(url,function(valor){
		
			let title=valor.title;
			let contenido=valor.body;
			$("#resultado").html("<h2>"+title+"</h2><p>"+contenido+"</p>")



	})



	})
})


/*
https://latinademo.s3.amazonaws.com/app/programas/contenido/yosoy.json
https://latinademo.s3.amazonaws.com/app/programas/contenido/90central.json
https://latinademo.s3.amazonaws.com/app/programas/contenido/wasapjb.json
*/



