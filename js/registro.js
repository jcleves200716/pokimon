function register() {
    const correo = document.getElementById('correo').value;
    const contraseña = document.getElementById('contraseña').value;
    const confiContra = document.getElementById('confiContra').value;
    const usuario = document.getElementById('usuario').value;
    const edad = document.getElementById('edad').value;
    const nomPokimon = document.getElementById('nomPokimon').value;

    if (!correo || !contraseña || !confiContra || !usuario || !edad || !nomPokimon) {
        alert('Por favor llene los campos');
        return;
    }

    if (usuario.length < 3) {
            alert("El nombre debe tener al menos 4 caracteres.");
            return false;
        }
    if (contraseña <=10) {
        alert('La contraseña es muy corta')
        return
    
   
    }
    if (contraseña != confiContra) {
        alert('Las contraseñas no coinciden');
        return;
    }

    localStorage.setItem('registroCorreo', correo);
    localStorage.setItem('registroContra', contraseña);
    localStorage.setItem('registroUsuario', usuario);
    localStorage.setItem('registroEdad', edad);
    localStorage.setItem('registroPokimon', nomPokimon);

    alert('Registro exitoso!');
    location.href = '../vistas/login.html';
}   