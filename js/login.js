$('#login').submit(function(){
    if ((document.getElementById('usuario').value=='vinicioismael1694@gmail.com')&&(document.getElementById('pass').value=='12345')){
        $.ajax({
            url: 'php/login.php',            
            async: false,            
            dataType: 'json',    
            success: function(datos) {
                console.log(datos);                
                window.location.href = 'index.html';                
            },
            error:function(e){
                console.log(e.responseText);            
            }
        });
    }else{
        alert("Credenciales incorrectas.");
    }
	
    return false;
})
