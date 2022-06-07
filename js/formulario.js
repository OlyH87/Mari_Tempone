// Validacion Formulario

function validar(){
    var nombre, apellido, email, mensaje;
    nombre = document.getElementById("nombre").value;
    apellido = document.getElementById("apellido").value;
    email = document.getElementById("email").value;
    mensaje = document.getElementById("mensaje").value;

    if(nombre === "" || apellido === "" || email === "" || mensaje === ""){
        alert("All fields are required");
        return false;
    }
    else if (mensaje === ""{
        alert("Please type a message")
    })
    
}

