// Validacion Formulario

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formularioContacto").addEventListener('submit', validarFormulario); 
  });
  
  function validarFormulario(evento) {
    evento.preventDefault();
    var usuario = document.getElementById('nombre').value;
    if(usuario.length == 0) {
      alert('No has escrito nada en el usuario');
      return;
    }
    var clave = document.getElementById('apellido').value;
    if (clave.length < 6) {
      alert('La clave no es válida');
      return;
    }
    var clave = document.getElementById('email').value;
    if (clave.length < 6) {
      alert('La clave no es válida');
      return;
    }
    var clave = document.getElementById('mensaje').value;
    if (clave.length < 6) {
      alert('La clave no es válida');
      return;
    }
    this.submit();
  }