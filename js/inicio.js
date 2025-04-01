function DatosHistoria() {
  // Obtener datos del localStorage (sin .value)
  const usuario = localStorage.getItem('registroUsuario');
  const edad = localStorage.getItem('registroEdad');
  const nomPokimon = localStorage.getItem('registroPokimon');

  // Mostrar datos básicos
  document.getElementById('userName').textContent = usuario;
  document.getElementById('userEmail').textContent = localStorage.getItem('registroCorreo');
  
  // Crear y mostrar el mensaje de bienvenida
  const welcomeMessage = `
      <p>Gracias por registrarte con nosotros ${usuario}, bienvenido a Pokimon, un lugar pensado</p>
      <p>para que te salgas de lo cotidiano y tengas la oportunidad de
      tener tus propios pokimons. Tu pokimon es ${nomPokimon} y tus propias batallas.</p>
  `;
  
  document.getElementById('welcomemessage').innerHTML = welcomeMessage;
  
  // Mostrar la sección de resultados
  document.getElementById('result').style.display = 'block';
}

// Ejecutar automáticamente al cargar la página
window.onload = DatosHistoria;