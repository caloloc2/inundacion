$(document).ready(function(){
	document.getElementById('fecha_inicio').value = Fechas();
	document.getElementById('fecha_final').value = Fechas();
	Verificar();
})

function Fechas(){
	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth()+1; //January is 0!

	var yyyy = today.getFullYear();
	if(dd<10){
	    dd='0'+dd;
	} 
	if(mm<10){
	    mm='0'+mm;
	} 
	var today = yyyy+'-'+mm+'-'+dd;
	return today;
}

function Verificar(){
	$.ajax({
        url: 'php/verificar.php',
        dataType: 'json',        
        success: function(datos) {
            // console.log(datos);
            if (datos['estado']){
				if (datos['acceso']==1){
					$("#c_usuario").hide();
				}
            	setInterval(function(){
            		Leer_Valores();	
            	}, 15000)
            }else{
            	window.location.href = 'login.html';
            }
        },
        error:function(e){
            console.log(e.responseText);            
        }
    });
}

function Vaciar(){
	$.ajax({
        url: 'php/vaciar.php',
        dataType: 'json',        
        success: function(datos) {
            console.log(datos);
            if (datos['estado']){
            	alert("Todos los valores se han eliminado del sistema.");
            }
        },
        error:function(e){
            console.log(e.responseText);            
        }
    });
}

function Salir(){
	$.ajax({
        url: 'php/salir.php',
        dataType: 'json',        
        success: function(datos) {
            console.log(datos);
            window.location.href = 'login.html';
        },
        error:function(e){
            console.log(e.responseText);            
        }
    });
}

function Usuarios(){
	$.ajax({
        url: 'php/usuarios.php',
        dataType: 'json',        
        success: function(datos) {
            console.log(datos);
            if (datos['estado']){
				var items = '';
				datos['datos'].forEach(element => {
					items+= '<li><span class="icon-delete" onclick="Eliminar('+element['id_usuario']+'); return false;"></span> '+element['nombres']+'</li>';
				});
				$("#listado_usuarios").html(items);				
				$("#modal").fadeIn(350);				
			}
        },
        error:function(e){
            console.log(e.responseText);            
        }
    });
}

$("#nuevo_usuario").submit(function(e){
	e.preventDefault();
	var campos = {
		nombres : document.getElementById('nombres').value,
		correo : document.getElementById('correo').value,
		clave : document.getElementById('clave').value,
		estado : document.getElementById('estado').value
	}

	if ((campos.nombres!='') && (campos.correo!='') && (campos.clave!='')){
		$.ajax({
			url: 'php/nuevo_usuario.php',
			dataType: 'json',
			data: campos,
			type: "POST",
			success: function(datos) {
				console.log(datos);
				if (datos['estado']){
					document.getElementById('nombres').value = "";
					document.getElementById('correo').value = "";
					document.getElementById('clave').value = "";
					document.getElementById('estado').value = 0;
					Usuarios();
				}else{
					alert("Ya existe un usuario con el correo asignado. Cambie de correo.");
				}
			},
			error:function(e){
				console.log(e.responseText);            
			}
		});
	}else{
		alert("Debe ingresar todos los campos.");
	}
})

function Eliminar(id){
	$.ajax({
		url: 'php/eliminar_usuario.php',
		data: {
			id
		},
		type: "POST",
        dataType: 'json',        
        success: function(datos) {
            console.log(datos);
            if (datos['estado']){
				Usuarios();
			}
        },
        error:function(e){
            console.log(e.responseText);            
        }
    });
}

function Cerrar_Modal(){
	$('#modal').fadeOut(350);
}

$('#busca').submit(function(){
	Leer_Valores();
	return false;
});

function Leer_Valores(){
	$.ajax({
        url: 'php/leer_datos.php',
        data: {
        	fecha_inicio: document.getElementById('fecha_inicio').value,
			fecha_final: document.getElementById('fecha_final').value
        },
        type: 'POST',        
        dataType: 'json',        
        success: function(datos) {
            console.log(datos);
            
            if (datos['estado']){
            	if (datos['datos'].length>0){
					var valores = [];
					var valores2 = [];
					var val = [];
					var val2 = [];
		            var lista_valores = '';

		            datos['datos'].forEach(function(item, index){
						val.push(parseFloat(item['valor']));
						val2.push(parseFloat(item['valor_2']));
						lista_valores += '<tr>';
						lista_valores += '<td>'+item['fecha']+'</td>';
						lista_valores += '<td>'+item['hora']+'</td>';
						lista_valores += '<td>'+item['valor']+'</td>';
						lista_valores += '<td>'+item['valor_2']+' %</td>';
						lista_valores += '</tr>';
		            });

		            valores.push({
		            	name: "Rio",
		            	data: val
		            })

					valores2.push({
						name: "Lluvia",
		            	data: val2
					})

					Graficar('grafico', 'Nivel de Rio', valores);
					Graficar('grafico2', 'Nivel de Lluvia [%]', valores2);
		            $('#lista_valores').html(lista_valores);
		            $('.tabla').show();
            	}else{
            		//$('#grafico').html('');
            		$('.tabla').hide();
            	}
            }
        },
        error:function(e){
            console.log(e.responseText);            
        }
    });
}

function Graficar(tag, titulo, valores){
	Highcharts.chart(tag, {

	    title: {
	        text: 'Niveles de Crecimiento del Caudal'
	    },	    

	    yAxis: {
	        title: {
	            text: titulo
	        }
	    },
	    legend: {
	        layout: 'vertical',
	        align: 'right',
	        verticalAlign: 'middle'
	    },

	    plotOptions: {
	        series: {
	            label: {
	                connectorAllowed: false
	            },	            
	        }
	    },

	    series: valores,

	    responsive: {
	        rules: [{
	            condition: {
	                maxWidth: 500
	            },
	            chartOptions: {
	                legend: {
	                    layout: 'horizontal',
	                    align: 'center',
	                    verticalAlign: 'bottom'
	                }
	            }
	        }]
	    }

	});
}

function Alarma(){
	$.ajax({
        url: 'php/alarma.php',
        dataType: 'json',        
        success: function(datos) {
            if (datos['estado']){
            	if (datos['valor']==1){
            		alert('Alarma Activada');
            	}else{
            		alert('Alarma Desactivada');
            	}
            }
        },
        error:function(e){
            console.log(e.responseText);            
        }
    });	
}

function Imprimir(){
	$('header').hide();
	$('footer').hide();
	window.print();
	$('header').show();
	$('footer').show();
}