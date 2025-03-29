function register() {
    let correo = document.getElementById ('correo').value;
    let contraseña = document.getElementById ('contraseña').value;
    let confiContra = document.getElementById ('confiContra').value;
    let Usuario = document.getElementById ('usuario').value
    let edad = document.getElementById ('edad').value
    let genero = document.getElementById ('genero').value


    let array =[
        correo,
        contraseña,
        Usuario,
        edad,
        genero
    ]

    console.log(array)
    
    if (!correo || !contraseña || !confiContra) {
        alert('Por favor complete todos los campos');
        return;
    }

    if (contraseña !== confiContra) {
        alert('Las contraseñas no coinciden');
        return;
    }

    localStorage.setItem('registroCorreo', correo);
    localStorage.setItem('registroContra', contraseña);
    
    alert('Se ha registrado con éxito');
    location.href = '../vistas/login.html';
}

let texto = document.getElementById('texto')