$('#login').submit(function(){	
	$.ajax({
        url: 'php/login.php',
        data: {
        	usuario: document.getElementById('usuario').value,
        	pass: document.getElementById('pass').value
        },
        async: false,
        type: 'POST',
        dataType: 'json',        
        success: function(datos) {
            console.log(datos);
            if (datos['estado']){
            	window.location.href = 'index.html';
            }
        },
        error:function(e){
            console.log(e.responseText);            
        }
    });
    return false;
})
