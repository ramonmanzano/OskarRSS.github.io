// Función para crear gotas de lluvia
function createRain() {
    const rainContainer = document.querySelector('.rain-container');
    const numDrops = 100; // Número de gotas de lluvia

    for (let i = 0; i < numDrops; i++) {
        const raindrop = document.createElement('div');
        raindrop.classList.add('raindrop');
        raindrop.style.left = `${Math.random() * 100}vw`;  // Posición horizontal aleatoria
        raindrop.style.animationDuration = `${Math.random() * 2 + 0.5}s`; // Duración aleatoria para cada gota
        raindrop.style.animationDelay = `${Math.random() * 2}s`; // Retardo aleatorio
        raindrop.style.opacity = Math.random() * 0.5 + 0.5;  // Opacidad aleatoria entre 0.5 y 1
        rainContainer.appendChild(raindrop);
    }
}

// Llamamos a la función para generar las gotas de lluvia
createRain();
