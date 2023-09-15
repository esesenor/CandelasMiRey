const animationContainer = document.getElementById('animation-container');
const imagePaths = ['./iconos/1.png', 
'./iconos/2.png', 
'./iconos/5.png',
'./iconos/2.png',
'./iconos/6.png']; // Ruta a tus imágenes
const animationDuration = 60; // Duración de la animación en milisegundos (5 segundos)

function createRandomImage() {
    const image = new Image();
    const imagePath = imagePaths[Math.floor(Math.random() * imagePaths.length)];
    image.src = imagePath;

    // Aplicar estilos y animaciones aleatorios
    image.style.position = 'absolute';
    image.style.left = `${Math.random() * 9}vw`; // Posición X aleatoria
    image.style.top = `${Math.random() * 2}vh`; // Posición Y aleatoria
    image.style.transform = `scale(${Math.random()*1.1})`; // Escala aleatoria
    image.style.transition = `
    transform ${Math.random()*6*+2}s ease-in-out, 
    top ${Math.random() * 1}s ease-in-out, 
    left ${Math.random() * 6}s ease-in-out, 
    filter ${Math.random() * 6}s ease-in-out`;

    // Cambiar el filtro de color (tonos violetas, amarillos, naranjas)
    let hueRotate = Math.random() * 360; 
    while(hueRotate>65 && hueRotate<190){
        hueRotate = Math.random() * 360;
    }
    // Cambio de tono aleatorio
    image.style.filter = `hue-rotate(${hueRotate}deg)`;

    // Agregar la imagen al contenedor y luego eliminarla después de la animación
    animationContainer.appendChild(image);
    setTimeout(() => {
        animationContainer.removeChild(image);
    }, animationDuration * 7); // Asegura que la imagen se elimine después de la animación
}

// Iniciar la animación periódicamente
setInterval(createRandomImage, animationDuration);
