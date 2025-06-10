// morpews gallery-artworks.js
// Render each artwork as a large white box with a thin black border, colour squares, and title

const artworks = [
    { title: 'artwork a', colours: ['#E7FF6E', '#6986E8', '#fff', '#341D34'], refraction: 'refraction note for artwork a' },
    { title: 'artwork b', colours: ['#6986E8', '#E7FF6E', '#341D34'], refraction: 'refraction note for artwork b' },
    { title: 'artwork c', colours: ['#341D34', '#fff', '#E7FF6E'], refraction: 'refraction note for artwork c' }
];

const container = document.getElementById('artwork-boxes');
container.style.display = 'flex';
container.style.flexWrap = 'wrap';
container.style.gap = '4rem';
container.style.justifyContent = 'center';
container.style.alignItems = 'flex-start';
container.style.width = '100%';
container.style.minHeight = '100vh';

artworks.forEach((artwork, idx) => {
    const wrapper = document.createElement('div');
    wrapper.style.display = 'flex';
    wrapper.style.flexDirection = 'column';
    wrapper.style.alignItems = 'center';
    wrapper.style.gap = '1.2rem';

    // Artwork box (clickable)
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
    box.style.cursor = 'pointer';
    box.onclick = () => {
        window.location.href = `gallery-subpage.html?artwork=${idx}`;
    };

    // Add order rectangle (hidden by default, shows on hover)
    const orderRect = document.createElement('div');
    orderRect.className = 'artwork-canvas-order-rect';
    const orderNum = document.createElement('div');
    orderNum.className = 'artwork-canvas-order-number';
    orderNum.textContent = idx + 1;
    orderRect.appendChild(orderNum);
    box.appendChild(orderRect);

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

    // Citation button (clickable)
    const citationBtn = document.createElement('button');
    citationBtn.className = 'citation-btn';
    citationBtn.textContent = `[${idx + 1}]`;
    citationBtn.style.fontFamily = "'Fira Mono', monospace";
    citationBtn.style.fontSize = '1.1rem';
    citationBtn.style.color = '#6986E8';
    citationBtn.style.background = '#fff';
    citationBtn.style.border = '2px solid #6986E8';
    citationBtn.style.borderRadius = '0';
    citationBtn.style.width = '56px';
    citationBtn.style.height = '36px';
    citationBtn.style.cursor = 'pointer';
    citationBtn.style.marginTop = '0.5rem';
    citationBtn.onclick = () => {
        window.location.href = `gallery-subpage.html?artwork=${idx}`;
    };

    wrapper.appendChild(box);
    wrapper.appendChild(citationBtn);
    container.appendChild(wrapper);
}); 