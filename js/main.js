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
            console.log(datos);
            if (datos['estado']){            	
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
						lista_valores += '<td>'+item['valor_2']+'</td>';
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
					Graficar('grafico2', 'Nivel de Lluvia', valores2);
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