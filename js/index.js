function Loguear() {
    const correo = document.getElementById('correo').value;
    const contraseña = document.getElementById('contraseña').value;
    const registroCorreo = localStorage.getItem('registroCorreo');
    const registroContra = localStorage.getItem('registroContra');

    if (!correo || !contraseña) {
        alert('Complete ambos campos');
        return;
    }

    if (correo === registroCorreo && contraseña === registroContra) {
        alert('Inicio de sesión exitoso');
        window.location.href = '../vistas/pokimons.html';
    } else {
        alert('Credenciales incorrectas');
    }
}