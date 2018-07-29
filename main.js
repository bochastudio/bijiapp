//THEME

    var temaActual = "a";
	
	
	$('#submenu1').css('background-image','url(img/'+temaActual+'.jpg)');
	$('#v2').css('background-image','url(img/'+temaActual+'t.jpg)');
	$('#v3').css('background-image','url(img/'+temaActual+'t.jpg)');
	$('#v4').css('background-image','url(img/'+temaActual+'t.jpg)');
	$('#v1').css('background-image','url(img/fondos/'+temaActual+'t.png)').css('background-size','auto 100%');
	$('#v5').css('background-image','url(img/fondos/'+temaActual+'t.png)').css('background-size','auto 100%');
	$('#v6').css('background-image','url(img/fondos/'+temaActual+'t.png)').css('background-size','auto 100%');
	
	
    $('#cambio').on('change', function(){
        var tema = $(this).val();
        $('div[data-role="page"]').removeClass( "ui-page ui-page-theme-"+temaActual)
								  .addClass( "ui-page ui-page-theme-"+tema);
		$('#submenu1').css('background-image','url(img/'+tema+'.jpg)');
		$('#v2').css('background-image','url(img/'+tema+'t.jpg)');
		$('#v3').css('background-image','url(img/'+tema+'t.jpg)');
		$('#v4').css('background-image','url(img/'+tema+'t.jpg)');
		temaActual = tema;
		guardartema();
		
    });

	
	
	function guardartema(){
		localStorage.setItem('nuevotema',temaActual);
		
	}

	
	$(document).on('ready',function(){
		var temasave = window.localStorage.getItem('nuevotema');
		if(temasave != null && temasave != 'undefined' && temasave != ''){
			temaActual=temasave;
				 $('div[data-role="page"]').removeClass( "ui-page ui-page-theme-"+temaActual)
								  .addClass( "ui-page ui-page-theme-"+temasave);
				$('#submenu1').css('background-image','url(img/'+temasave+'.jpg)');
		$('#v2').css('background-image','url(img/'+temasave+'t.jpg)');
		$('#v3').css('background-image','url(img/'+temasave+'t.jpg)');
		$('#v4').css('background-image','url(img/'+temasave+'t.jpg)');	
		$('#cambio').val(temasave);
			}
		
	});
	
	
		

	
	
	
//LOGIN

var usuario;
	var clave;

	$('#enviar').on('click', function(){
		if(($('#entradaUsuario').val()=='')||($('#entradaClave').val()=='')){
		alert('Faltan completar datos');
	}else{
		usuario = $('#entradaUsuario').val();
		clave = $('#entradaClave').val();
		
		$('#load').css('display', 'block');
		
		$.post( "https://inuyashainthepatch.000webhostapp.com/login.php", {"usuario" : usuario, "clave": clave}, guardarDatos, "json" )
			.done(function(){
				
				$('#entradaUsuario').val('');
				$('#entradaClave').val('');
				$('#load').css('display', 'none')
			})
			.fail(function(){
				
				$("#estado").text("No se pudo enviar")
							.show(1000)
							.delay(3000)
							.hide(2000);
			});
	}});
	
	function guardarDatos(data){

		if(data.mensaje == "exito"){

			localStorage.setItem("usuario", usuario);
			localStorage.setItem("clave", clave);
			
			$('#login').css('display', 'none');
			$.mobile.navigate("#v1");
		}else{

			$('#estado').text("Usuario o clave incorrectos")
						.show(1000)
						.delay(3000)
						.hide(2000);
		}
	}
	
	$(document).on("ready", function(){
		usuario = localStorage.getItem("usuario");
		clave = localStorage.getItem("clave");
		
		if(usuario != null && usuario != "undefined" && usuario != ""){
			$.post( "https://inuyashainthepatch.000webhostapp.com/login.php", {"usuario" : usuario, "clave": clave}, guardarDatos, "json" )
				.done(function(){
					$('#load').css('display', 'none')
				})
				.fail(function(){
					$("#estado").text("No se pudo enviar")
								.show(1000)
								.delay(3000)
								.hide(2000);
				});
		}else{
		
			$('#home').css('display', 'block');
			$('#home').css('display', 'none');
		}
	});
	
	$("#logout").on('click', function(){
		var salir = confirm('¿Querés cerrar tu sesión?');
		if(salir){
		localStorage.removeItem("usuario");
		localStorage.removeItem("clave");
		$.mobile.navigate("#logueo");
		$('#login').css('display', 'block');}
		
	});	
	
//FOTO PERFIL

		var rutaFoto;
		var tipoArchivo;
		
		document.addEventListener( "deviceready", iniciarCamara, false );

		function iniciarCamara() {
			rutaFoto = navigator.camera.PictureSourceType;
			tipoArchivo = navigator.camera.DestinationType;
		}
		
		function sacarFoto() {

			navigator.camera.getPicture( sacoFotoOk, falloCamara, { quality: 50,
			destinationType: tipoArchivo.DATA_URL } );
		}
		

		function sacoFotoOk(imgDatos) {
		  
		  var foto = document.getElementById('foto');

		  foto.src = "data:image/jpeg;base64," + imgDatos;
		  
		  var imagen = $('#foto').attr('src');
		  localStorage.setItem('foto', imagen);
		}
		
		function falloCamara(mensaje) {
		  alert('No se pudo abrir la cámara porque: ' + mensaje);
		}
		
		$(document).on("ready", function() {
			var foto = localStorage.getItem('foto');
			if(foto != null && foto != 'undefined' && foto != ''){
				$('#foto').attr('src', foto).css('transform','rotate(90deg)');
			}
		});
	
	
//SPINNER

$('#spinner').on('tap', function(){
				$('#abajo').slideToggle();
			});
			
$('#abajo').on('tap', function(){
				$('#abajo').slideToggle();
			});
			
$('.ui-content, div[data-role=header]').on('tap', function(){
				$('#abajo').slideUp();
			});
			

var botoneliminar = '<br>'+'<a href="#" data-role="button" class="borrarnota ui-link ui-btn ui-icon-minus ui-btn-icon-notext ui-shadow ui-corner-all" data-icon="minus" data-iconpos="notext">Borrar Nota</a>';
var botoneliminar2 = '<br>'+'<a href="#" data-role="button" class="borrarnota ui-link ui-btn ui-icon-minus ui-btn-icon-notext ui-shadow ui-corner-all" data-icon="minus" data-iconpos="notext">Borrar Nota</a>';



// NOTA 1


$('#guardarnota').on('tap', function(){
	
	if(($('#titulo').val()=='')||($('#nota').val()=='')){
		alert('Faltan completar datos');
	}else{
		var titulo = $('#titulo').val();
	var nota = $('#nota').val();
	
	var contnota = $("<div></div>");
	
	var conttitulo = $('<h3></h3>');
	conttitulo.text( titulo );
	
	var contcontenido = $('<p>'+nota+'</p>');
	
	contnota.prepend(contcontenido)
			 .prepend(conttitulo)
			 .append(botoneliminar)
			 .css({ margin: "20px auto",
					boxShadow: "#8b043b 5px 5px 0px",
					background: "white",
					padding: "5px 10px",
					borderRadius: "5px",
					color:"black",					
					minHeight: "50px"});

	$('#filter').prepend(contnota);
	
	$('#titulo').val('');
	$('#nota').val('');
	
	guardarnotas();
	
	$.mobile.navigate("#v1");
	}
	
	
	
});


//NOTAS2


$('#nuevoitem').on('tap', function(){
			var nota2 = $('#nota2').val();
			$('#listatemporal').append( '<li>'+nota2+'</li>' );
			$('#nota2').val('');
			$('#nota2').focus();
		}
	);
	
		
$('#guardarnota2').on('tap', function(){
	
	if(($('#titulo2').val()=='')){
		alert('Faltan completar datos');
	}else{
		var contnota2 = $("<div></div>");

	var titulo2 = $('#titulo2').val();
	
	var conttitulo2 = $('<h3></h3>');
	conttitulo2.text( titulo2 );
	
	var contcontenido2 = $('<ul></ul>');
	
	contnota2.append('<ul>'+ $('#listatemporal').html()+'</ul>')
			 .prepend(contcontenido2)
			 .prepend(conttitulo2)
			 .append(botoneliminar2)
			 .css({ margin: "20px auto",
					boxShadow: "#8b043b 5px 5px 0px",
					background: "white",
					padding: "5px 10px",
					borderRadius: "5px",
					color:"black",						
					minHeight: "50px"});
	
	$('#listatemporal li').remove();
	
	$('#filter').prepend(contnota2);
	
	$('#titulo2').val('');
	$('#nota2').val('');
	
	guardarnotas();
	
	$.mobile.navigate("#v1");
	}
	
	
});


//ELIMINAR NOTAS

$('#filter').on('tap','.borrarnota',function(){
	var eliminarlo = confirm("¿Querés eliminar esta nota? (esta acción no se puede deshacer)");
			if(eliminarlo){$(this).parent().remove();
			}
			guardarnotas();
		});


//LOCAL STORAGE

//localStorage.clear();

var notasActuales = new Array();
	
function guardarnotas(){
	
	notasActuales.length = 0;
		
	
	$('#filter div').each(function() {
		
		notasActuales.push( $(this).html() );
		
	});
		
	
	var notasGuardadas = JSON.stringify( notasActuales );
		
		localStorage.setItem( 'notassave',notasGuardadas );
		
}

$( document ).on( 'ready', function(){
	
	var itemGuardado = window.localStorage.getItem( "notassave" );
		
	
	if (itemGuardado != "undefined" && itemGuardado != null && itemGuardado != ""){
	
		var notassave = JSON.parse(itemGuardado); 
			
		
		$.each(notassave, function(indice, valor){
			
			var contnota = $('<div></div>');
			
			contnota.html( valor ).css({margin: "20px auto",
					boxShadow: "#8b043b 5px 5px 0px",
					background: "white",
					padding: "5px 10px",
					borderRadius: "5px",
					color:"black",						
					minHeight: "50px"});
			
			$('#filter').append(contnota);
				
				
			
		});
	}
});


//IMAGEN


$('#archivo').on('change', function(e){
		var archivoSeleccionado = e.target.files[0],
		tipoDeArchivo = /image.*/;
	
		if (!archivoSeleccionado.type.match( tipoDeArchivo )){ return; }
	
		var reader = new FileReader();
		reader.readAsDataURL( archivoSeleccionado );
		
		reader.onload = leerImagen;
	});

	function leerImagen(e){
		var imgBase64 = e.target.result;
		
		var canvas = document.createElement('canvas');
		var ctxCanvas = canvas.getContext('2d');
		
		if(ctxCanvas){
			
			var img = new Image();
	
			img.src = imgBase64;
			
			img.onload = function(){
				
				var ancho = parseInt( img.width );
				var alto = parseInt( img.height );
				
				var ancho_chica = 150;
				
				var alto_chica = Math.round( ancho_chica * alto / ancho );
				
				canvas.width  = ancho_chica;
				canvas.height = alto_chica;
			
				ctxCanvas.drawImage( img, 0, 0, ancho_chica , alto_chica );
				
				var nueva_imagen = $("<img>");
				
				var dataURL = canvas.toDataURL();

				nueva_imagen.attr( "src", dataURL );
				
				$("#salida").append(nueva_imagen);
			}
		}
     }
	 
	 $("#vaciar").on("click", function(){
		$("#salida img").remove();
	 });

//NOTA3
	 
$('#guardarnota3').on('tap', function(){
	
	if(($('#titulo3').val()=='')){
		alert('Faltan completar datos');
	}else{
		var titulo3 = $('#titulo3').val();
	
	var contnota3 = $("<div></div>");
	
	var conttitulo3 = $('<h3></h3>');
	conttitulo3.text( titulo3 );
	
	var contcontenido3 = $('<div></div>');
	
	contnota3.prepend($('#salida').html())
			 .prepend(conttitulo3)
			 .append(botoneliminar)
			 .css({ margin: "20px auto",
					boxShadow: "#8b043b 5px 5px 0px",
					background: "white",
					padding: "5px 10px",
					borderRadius: "5px",
					color:"black",						
					minHeight: "50px"});

	$('#filter').prepend(contnota3);
	
	$('#titulo3').val('');
	$('#salida img').remove();
	$("#archivo").val('');
	
	guardarnotas();
	
	$.mobile.navigate("#v1");
	}
	
	
	
});