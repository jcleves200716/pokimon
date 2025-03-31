function DatosHistoria() {
    const usuario = localStorage.getItem('registroUsuario');
    const edad = localStorage.getItem('registroEdad');
    const nomPokimon = localStorage.getItem('registroPokimon');

    document.getElementById('text_usuario').textContent = usuario;
    document.getElementById('text_edad').textContent = edad;
    document.getElementById('text_nomPokimon').textContent = nomPokimon;

    const hola_mensaje = `
    <h1> HOLA, ${text_usuario}>/h1>
    `
    document.getElementById('hola_mensaje').innerHTML = hola_mensaje;
}
