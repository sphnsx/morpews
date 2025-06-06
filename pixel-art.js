// morpews pixel-art.js
// Generates a full-screen, abstract pixel-styled graphic with variable square sizes

const colours = [
    '#6986E8', // blue
    '#E7FF6E', // yellow
    '#FFE5FF', // pink
    '#341D34', // deep purple
    '#fff'     // white (background)
];

const canvas = document.getElementById('pixel-art');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

function randomColour() {
    // Weighted so white is less common
    return colours[Math.floor(Math.random() * (colours.length + 2))] || '#fff';
}

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function drawAbstractPixels() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let sizeMin = 20;
    let sizeMax = 120;
    for (let y = 0; y < canvas.height; ) {
        let h = randomInt(sizeMin, sizeMax);
        if (y + h > canvas.height) h = canvas.height - y;
        for (let x = 0; x < canvas.width; ) {
            let w = randomInt(sizeMin, sizeMax);
            if (x + w > canvas.width) w = canvas.width - x;
            ctx.fillStyle = randomColour();
            ctx.fillRect(x, y, w, h);
            x += w;
        }
        y += h;
    }
}

function render() {
    resizeCanvas();
    drawAbstractPixels();
}

window.addEventListener('resize', render);
render(); 