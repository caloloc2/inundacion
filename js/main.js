$(document).ready(function(){	
	Verificar();	
})

function Verificar(){
	$.ajax({
        url: 'php/verificar.php',
        dataType: 'json',        
        success: function(datos) {
            console.log(datos);
            if (datos['estado']){
            	Leer_Valores();
            }else{
            	window.location.href = 'login.html';
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
		            var val = [];
		            var lista_valores = '';

		            datos['datos'].forEach(function(item, index){
		            	val.push(parseFloat(item['valor']));
						lista_valores += '<tr>';
						lista_valores += '<td>'+item['fecha']+'</td>';
						lista_valores += '<td>'+item['hora']+'</td>';
						lista_valores += '<td>'+item['valor']+'</td>';
						lista_valores += '</tr>';
		            });

		            valores.push({
		            	name: "Rio",
		            	data: val
		            })

		            Graficar(valores);
		            $('#lista_valores').html(lista_valores);
		            $('.tabla').show();
            	}else{
            		$('#grafico').html('');
            		$('.tabla').hide();
            	}
            }
        },
        error:function(e){
            console.log(e.responseText);            
        }
    });
}

function Graficar(valores){
	Highcharts.chart('grafico', {

	    title: {
	        text: 'Niveles de Crecimiento del Caudal'
	    },	    

	    yAxis: {
	        title: {
	            text: 'Nivel del rio'
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