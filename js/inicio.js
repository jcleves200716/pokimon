// Función para redireccionar a diferentes secciones
document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll('.menu-button');
  
  buttons.forEach(button => {
      button.addEventListener('click', function() {
          const text = this.textContent.trim();
          
          switch(text) {
              case 'Formularios':
                  window.location.href = './formularios.html';
                  break;
              case 'Combates':
                  window.location.href = './combate.html';
                  break;
              case 'Pokédex':
                  window.location.href = './pokedex.html';
                  break;
              default:
                  console.log('Opción no reconocida');
          }
      });
  });
  
  // Actualizar fecha y hora en tiempo real
  function updateDateTime() {
      const now = new Date();
      const options = { 
          day: '2-digit', 
          month: '2-digit', 
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
      };
      const dateTimeStr = `LV.JC  ${now.toLocaleDateString('es-ES', options)}`;
      document.querySelector('.pokemon-date').textContent = dateTimeStr;
  }
  
  updateDateTime();
  setInterval(updateDateTime, 60000); // Actualizar cada minuto
});