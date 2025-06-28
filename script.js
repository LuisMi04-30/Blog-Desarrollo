// Selecciona el canvas
const canvas = document.getElementById('matrixCanvas');
const ctx = canvas.getContext('2d');

// Ajusta tamaño del canvas al tamaño de la ventana
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

// Caracteres que caerán (puedes agregar más si quieres)
const characters = "01";
const fontSize = 16;
const columns = canvas.width / fontSize;

// Arreglo para las posiciones verticales de cada columna
const drops = Array(Math.floor(columns)).fill(1);

// Función para dibujar la animación frame por frame
function drawMatrixRain() {
    // Fondo semitransparente para efecto de "arrastre"
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#38bdf8"; // Color cian brillante
    ctx.font = fontSize + "px monospace";

    // Dibuja cada carácter
    for (let i = 0; i < drops.length; i++) {
        const text = characters[Math.floor(Math.random() * characters.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        // Reinicia la posición con una probabilidad
        if (drops[i] * fontSize > canvas.height || Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}

// Ejecuta la animación cada 35 milisegundos
setInterval(drawMatrixRain, 35);

// Redimensiona el canvas si la ventana cambia de tamaño
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
