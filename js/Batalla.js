// Lista de Pokémon con sus atributos y sus imágenes
const pokemones = [
    { nombre: "Pikachu", ataque: 60, defensa: 50, velocidad: 50, imagen: "../img/Pikachu.png" },
    { nombre: "Charizard", ataque: 50, defensa: 70, velocidad:50 , imagen: "../img/charizard.png" },
    { nombre: "Bulbassaur", ataque: 30, defensa: 50, velocidad: 50, imagen: "../img/bulbassaur.png" },
    { nombre: "Magikarp", ataque: 70, defensa: 90, velocidad: 50, imagen: "..img/Magikarp.webp" },
    { nombre: "cubone", ataque: 40, defensa: 60, velocidad: 50, imagen: "../img/Cubone.png" }
];

function iniciarCombate() {
    const entrenador = document.getElementById("entrenador").value;
    const pokemonJugadorNombre = document.getElementById("pokemon").value;

    if (entrenador && pokemonJugadorNombre) {
        // Encontrar el Pokémon seleccionado por el jugador
        const pokemonJugador = pokemones.find(p => p.nombre === pokemonJugadorNombre);

        // Seleccionar un Pokémon rival aleatorio
        const pokemonRival = pokemones[Math.floor(Math.random() * pokemones.length)];

        // Mostrar los Pokémon y sus imágenes
        document.getElementById("pokemon-jugador-nombre").textContent = pokemonJugador.nombre;
        document.getElementById("pokemon-jugador-img").src = pokemonJugador.imagen;

        document.getElementById("pokemon-rival-nombre").textContent = pokemonRival.nombre;
        document.getElementById("pokemon-rival-img").src = pokemonRival.imagen;

        // Calcular los puntajes basados en las estadísticas
        const puntajeJugador = calcularPuntaje(pokemonJugador);
        const puntajeRival = calcularPuntaje(pokemonRival);

        // Determinar el ganador
        let resultadoTexto = "";
        if (puntajeJugador > puntajeRival) {
            resultadoTexto = `¡${pokemonJugador.nombre} gana la batalla! Tu entrenador (${entrenador}) es un verdadero maestro.`;
        } else if (puntajeJugador < puntajeRival) {
            resultadoTexto = `¡${pokemonRival.nombre} gana la batalla! El rival demostró ser muy fuerte.`;
        } else {
            resultadoTexto = "¡Es un empate! Ambos Pokémon son igual de poderosos.";
        }

        // Mostrar el resultado en la página
        document.getElementById("resultado").textContent = resultadoTexto;

        // Mostrar la sección de combate
        document.querySelector(".contenedor-batalla").style.display = "flex";
    } else {
        alert("Por favor, selecciona un Entrenador y un Pokémon antes de continuar.");
    }
}

// Función para calcular el puntaje en base a ataque, defensa y velocidad
function calcularPuntaje(pokemon) {
    return pokemon.ataque * 0.5 + pokemon.defensa * 0.3 + pokemon.velocidad * 0.2;
}

// Configuración inicial para ocultar la sección de combate
document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".contenedor-batalla").style.display = "none";
});
