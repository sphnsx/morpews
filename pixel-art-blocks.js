// morpews pixel-art-blocks.js
// Generate pixel art blocks for each artwork, up to 5 random main colours per artwork

const artworks = [
    { id: 0, title: 'artwork a' },
    { id: 1, title: 'artwork b' },
    { id: 2, title: 'artwork c' }
];

const palette = [
    '#6986E8', // blue
    '#E7FF6E', // yellow
    '#FFE5FF', // pink
    '#341D34', // deep purple
    '#fff'     // white
];

function getRandomColours(n) {
    const shuffled = palette.slice().sort(() => 0.5 - Math.random());
    return shuffled.slice(0, n);
}

const container = document.getElementById('pixel-art-blocks');
container.style.display = 'flex';
container.style.gap = '3rem';
container.style.justifyContent = 'center';
container.style.alignItems = 'center';
container.style.width = '100%';
container.style.height = '100vh';

artworks.forEach((artwork, idx) => {
    const block = document.createElement('div');
    block.className = 'pixel-art-block';
    block.style.display = 'flex';
    block.style.flexDirection = 'row';
    block.style.gap = '0.3rem';
    block.style.cursor = 'pointer';
    block.style.alignItems = 'center';
    block.style.justifyContent = 'center';
    block.style.padding = '1.2rem';
    block.style.border = '2px solid #6986E8';
    block.style.background = '#fff';
    block.style.boxSizing = 'border-box';
    block.style.transition = 'box-shadow 0.2s';
    block.onclick = () => {
        window.location.href = 'gallery.html?artwork=' + artwork.id;
    };

    // Generate up to 5 random colours for this artwork
    const colours = getRandomColours(Math.floor(Math.random() * 3) + 3); // 3-5 colours
    colours.forEach(col => {
        const square = document.createElement('div');
        square.style.width = '32px';
        square.style.height = '32px';
        square.style.background = col;
        square.style.margin = '0 0.1rem';
        square.style.border = '1.5px solid #341D34';
        square.style.boxSizing = 'border-box';
        block.appendChild(square);
    });

    // Add artwork title below
    const title = document.createElement('div');
    title.textContent = artwork.title;
    title.style.fontFamily = "'Fira Mono', monospace";
    title.style.fontSize = '1rem';
    title.style.color = '#341D34';
    title.style.textAlign = 'center';
    title.style.marginTop = '0.7rem';
    block.appendChild(title);

    container.appendChild(block);
}); 