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
      <h3>¡Bienvenido al Mundo Pokimon, ${usuario}!</h3>
        <p>Con ${edad} años, estás listo para comenzar tu aventura con tu Pokimon ${nomPokimon}.</p>
        
        <h4>La Leyenda de los Entrenadores Rivales</h4>
        <p>En el mundo de Pokimon, hay dos entrenadores rivales, ${usuario}  y Ben, que han estado entrenando a sus pokimons durante años. Ambos buscan convertirse en el Campeón de Pokimon, pero solo uno puede lograrlo.</p>
        
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
        
        <p>Tu viaje comienza ahora con tu fiel ${nomPokimon}. ¡Buena suerte!</p>
  `;
  
  document.getElementById('welcomemessage').innerHTML = welcomeMessage;
  
  // Mostrar la sección de resultados
  document.getElementById('result').style.display = 'block';
}

// Ejecutar automáticamente al cargar la página
window.onload = DatosHistoria;