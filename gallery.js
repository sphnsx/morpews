// morpews gallery.js
// Handles image uploads and displays previews in the gallery

const fileInput = document.getElementById('file-upload');
const galleryPlaceholder = document.querySelector('.gallery-placeholder');

galleryPlaceholder.innerHTML = '<p>no images uploaded yet</p>';

fileInput.addEventListener('change', (event) => {
    const files = Array.from(event.target.files);
    if (files.length === 0) {
        galleryPlaceholder.innerHTML = '<p>no images uploaded yet</p>';
        return;
    }
    galleryPlaceholder.innerHTML = '';
    files.forEach(file => {
        if (!file.type.startsWith('image/')) return;
        const reader = new FileReader();
        reader.onload = (e) => {
            const img = document.createElement('img');
            img.src = e.target.result;
            img.alt = file.name;
            img.className = 'gallery-thumb';
            galleryPlaceholder.appendChild(img);
        };
        reader.readAsDataURL(file);
    });
}); 