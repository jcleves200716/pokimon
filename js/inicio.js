function mostrarInformacionUsuario() {
  // Obtener datos del localStorage
  const usuario = localStorage.getItem('registroUsuario') || "Entrenador";
  const correo = localStorage.getItem('registroCorreo') || "";
  const edad = localStorage.getItem('registroEdad') || "";
  const pokimon = localStorage.getItem('registroPokimon') || "Pikachu";

  // Mostrar información básica
  document.getElementById('userName').textContent = `Entrenador: ${usuario}`;
  document.getElementById('userEmail').textContent = `Correo: ${correo}`;

  // Crear mensaje de bienvenida personalizado
  const welcomeMessage = `
      <h3>¡Bienvenido al Mundo Pokimon, ${usuario}!</h3>
      <p>Con ${edad} años, estás listo para comenzar tu aventura con tu Pokimon ${pokimon}.</p>
      
      <h4>La Leyenda de los Entrenadores Rivales</h4>
      <p>En el mundo de Pokimon, hay dos entrenadores rivales, Alex y Ben, que han estado entrenando a sus pokimons durante años. Ambos buscan convertirse en el Campeón de Pokimon, pero solo uno puede lograrlo.</p>
      
      <h4>Los Pokimons Legendarios</h4>
      <p>La leyenda habla de cinco pokimons legendarios:</p>
      <ul>
          <li><strong>Pikachu</strong>: Pokimon eléctrico que genera electricidad</li>
          <li><strong>Charizard</strong>: Pokimon de fuego que vuela y genera llamas</li>
          <li><strong>Blastoise</strong>: Pokimon de agua que genera olas y se protege con su caparazón</li>
          <li><strong>Venusaur</strong>: Pokimon de hierba que genera veneno y controla plantas</li>
          <li><strong>Dragonite</strong>: Pokimon dragón que vuela y genera vientos fuertes</li>
      </ul>
      
      <p>Como nuevo entrenador, deberás elegir a tres de estos pokimons para formar tu equipo y competir. ¿Podrás derrotar a tus rivales y convertirte en el próximo Campeón Pokimon?</p>
      
      <p>Tu viaje comienza ahora con tu fiel ${pokimon}. ¡Buena suerte!</p>
  `;
  
  document.getElementById('welcomemessage').innerHTML = welcomeMessage;
}

// Ejecutar al cargar la página
window.onload = mostrarInformacionUsuario;