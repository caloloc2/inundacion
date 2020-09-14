$('#login').submit(function(e){
    e.preventDefault();
    $.ajax({
        url: 'php/users.php',            
        async: false,
        data:{
            usuario: document.getElementById("usuario").value,
            pass: document.getElementById("pass").value
        },
        type: 'POST',
        dataType: 'json',    
        success: function(datos) {
            console.log(datos);
            if (datos['estado']){
                if (datos['datos']['nombre']!=''){
                    window.location.href = 'index.html';   
                }else{
                    alert("No existe este usuario o sus credenciales no son correctas.");
                }
            }else{
                alert("No existe este usuario o sus credenciales no son correctas.");
            }
        },
        error:function(e){
            console.log(e.responseText);            
        }
    });
})
