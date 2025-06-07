// morpews gallery-artworks.js
// Render each artwork as a large white box with a thin black border, colour squares, and title

const artworks = [
    { title: 'artwork a', colours: ['#E7FF6E', '#6986E8', '#fff', '#341D34'] },
    { title: 'artwork b', colours: ['#6986E8', '#E7FF6E', '#341D34'] },
    { title: 'artwork c', colours: ['#341D34', '#fff', '#E7FF6E'] }
];

const container = document.getElementById('artwork-boxes');
container.style.display = 'flex';
container.style.gap = '4rem';
container.style.justifyContent = 'center';
container.style.alignItems = 'center';
container.style.width = '100%';
container.style.height = '100vh';

artworks.forEach((artwork) => {
    const box = document.createElement('div');
    box.className = 'artwork-box';
    box.style.background = '#fff';
    box.style.border = '2px solid #222';
    box.style.width = '340px';
    box.style.height = '320px';
    box.style.display = 'flex';
    box.style.flexDirection = 'column';
    box.style.alignItems = 'center';
    box.style.justifyContent = 'center';
    box.style.boxSizing = 'border-box';
    box.style.margin = '0';

    // Colour squares row
    const row = document.createElement('div');
    row.style.display = 'flex';
    row.style.gap = '1.2rem';
    row.style.marginBottom = '1.2rem';
    artwork.colours.forEach(col => {
        const square = document.createElement('div');
        square.style.width = '48px';
        square.style.height = '48px';
        square.style.background = col;
        square.style.border = '2px solid #341D34';
        square.style.boxSizing = 'border-box';
        row.appendChild(square);
    });
    box.appendChild(row);

    // Artwork title
    const title = document.createElement('div');
    title.textContent = artwork.title;
    title.style.fontFamily = "'Fira Mono', monospace";
    title.style.fontSize = '1.3rem';
    title.style.color = '#341D34';
    title.style.textAlign = 'center';
    title.style.marginTop = '0.2rem';
    box.appendChild(title);

    container.appendChild(box);
}); 