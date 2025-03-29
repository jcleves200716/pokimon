
function Loguear() {
    let correo = document.getElementById('correo').value;
    let clave = document.getElementById('clave').value;

    const registroCorreo = localStorage.getItem('registroCorreo');
    const registroContra = localStorage.getItem('registroContra');

    if (!correo || !clave) {
        alert('Por favor complete todos los campos');
        return;
    }

    if (correo === registroCorreo && clave === registroContra) {
        alert('Usuario válido');
        location.href = '../vistas/inicio.html';
    } else {
        alert('Usuario o contraseña incorrectos');
    }
}

