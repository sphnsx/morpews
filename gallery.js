// morpews gallery.js
// Handles multiple artworks/wholes, navigation, renaming, uploads, and deletions

const fileInput = document.getElementById('file-upload');
const galleryWall = document.querySelector('.gallery-wall');
const newArtworkBtn = document.querySelector('.new-artwork-btn');
const artworkTitle = document.querySelector('.artwork-title');
const editArtworkTitleBtn = document.querySelector('.edit-artwork-title');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

let artworks = [];
let currentArtworkIndex = 0;

function promptArtworkName(defaultName = '') {
    let name = prompt('name this artwork:', defaultName);
    if (!name) name = `artwork ${String.fromCharCode(97 + artworks.length)}`;
    return name.toLowerCase();
}

function createArtwork() {
    const name = promptArtworkName();
    artworks.unshift({ name, images: [] });
    currentArtworkIndex = 0;
    renderGalleryWall();
}

function renameArtwork() {
    if (!artworks.length) return;
    const name = promptArtworkName(artworks[currentArtworkIndex].name);
    artworks[currentArtworkIndex].name = name;
    renderGalleryWall();
}

function renderGalleryWall() {
    // Update artwork title
    if (artworks.length === 0) {
        artworkTitle.textContent = 'no artworks yet';
        galleryWall.innerHTML = '<p>no images uploaded yet</p>';
        leftArrow.disabled = true;
        rightArrow.disabled = true;
        return;
    }
    artworkTitle.textContent = artworks[currentArtworkIndex].name;
    // Render images
    galleryWall.innerHTML = '';
    if (artworks[currentArtworkIndex].images.length === 0) {
        galleryWall.innerHTML = '<p>no images uploaded yet</p>';
    } else {
        artworks[currentArtworkIndex].images.forEach((imgObj, idx) => {
            const wrapper = document.createElement('div');
            wrapper.className = 'gallery-thumb-wrapper';
            const img = document.createElement('img');
            img.src = imgObj.src;
            img.alt = imgObj.name;
            img.className = 'gallery-thumb';
            const delBtn = document.createElement('button');
            delBtn.className = 'delete-thumb';
            delBtn.innerText = '×';
            delBtn.title = 'delete image';
            delBtn.onclick = () => {
                artworks[currentArtworkIndex].images.splice(idx, 1);
                renderGalleryWall();
            };
            wrapper.appendChild(img);
            wrapper.appendChild(delBtn);
            galleryWall.appendChild(wrapper);
        });
    }
    // Update arrows
    leftArrow.disabled = (currentArtworkIndex === artworks.length - 1);
    rightArrow.disabled = (currentArtworkIndex === 0);
}

fileInput.addEventListener('change', (event) => {
    if (!artworks.length) return;
    const files = Array.from(event.target.files);
    files.forEach(file => {
        if (!file.type.startsWith('image/')) return;
        const reader = new FileReader();
        reader.onload = (e) => {
            artworks[currentArtworkIndex].images.push({ src: e.target.result, name: file.name });
            renderGalleryWall();
        };
        reader.readAsDataURL(file);
    });
});

newArtworkBtn.addEventListener('click', createArtwork);
editArtworkTitleBtn.addEventListener('click', renameArtwork);

leftArrow.addEventListener('click', () => {
    if (currentArtworkIndex < artworks.length - 1) {
        currentArtworkIndex++;
        renderGalleryWall();
    }
});

rightArrow.addEventListener('click', () => {
    if (currentArtworkIndex > 0) {
        currentArtworkIndex--;
        renderGalleryWall();
    }
});

// Initialise with one artwork by default
if (artworks.length === 0) {
    artworks.push({ name: 'artwork a', images: [] });
}
renderGalleryWall(); 