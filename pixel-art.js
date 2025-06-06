// morpews pixel-art.js
// Generates a random pixel-styled graphic using the chosen colour palette

const colours = [
    '#6986E8', // blue
    '#E7FF6E', // yellow
    '#FFE5FF', // pink
    '#341D34', // deep purple
    '#fff'     // white (background)
];

const canvas = document.getElementById('pixel-art');
const ctx = canvas.getContext('2d');
const size = 20; // size of each pixel block
const cols = canvas.width / size;
const rows = canvas.height / size;

function randomColour() {
    // Weighted so white is less common
    return colours[Math.floor(Math.random() * (colours.length + 2))] || '#fff';
}

for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
        ctx.fillStyle = randomColour();
        ctx.fillRect(x * size, y * size, size, size);
    }
} 