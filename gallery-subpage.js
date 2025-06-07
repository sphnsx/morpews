// morpews gallery-subpage.js
// Dynamically render artwork and refraction based on ?artwork= index

const artworks = [
    { title: 'artwork a', colours: ['#E7FF6E', '#6986E8', '#fff', '#341D34'], refraction: '' },
    { title: 'artwork b', colours: ['#6986E8', '#E7FF6E', '#341D34'], refraction: '' },
    { title: 'artwork c', colours: ['#341D34', '#fff', '#E7FF6E'], refraction: '' }
];

function getArtworkIndex() {
    const params = new URLSearchParams(window.location.search);
    const idx = parseInt(params.get('artwork'), 10);
    if (isNaN(idx) || idx < 0 || idx >= artworks.length) return 0;
    return idx;
}

const idx = getArtworkIndex();
const artwork = artworks[idx];

// Render refraction
const refractionText = document.getElementById('refraction-text');
refractionText.textContent = artwork.refraction || '';

// Render artwork display
const display = document.getElementById('artwork-display');
display.style.display = 'flex';
display.style.flexDirection = 'row';
display.style.alignItems = 'center';
display.style.gap = '2.2rem';

const row = document.createElement('div');
row.style.display = 'flex';
row.style.gap = '1.2rem';
artwork.colours.forEach(col => {
    const square = document.createElement('div');
    square.style.width = '72px';
    square.style.height = '72px';
    square.style.background = col;
    square.style.border = '2px solid #341D34';
    square.style.boxSizing = 'border-box';
    row.appendChild(square);
});
display.appendChild(row);

const title = document.createElement('div');
title.textContent = artwork.title;
title.style.fontFamily = "'Fira Mono', monospace";
title.style.fontSize = '2.6rem';
title.style.color = '#341D34';
title.style.textAlign = 'left';
title.style.marginLeft = '2.2rem';
display.appendChild(title); 