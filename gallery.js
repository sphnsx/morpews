// morpews gallery.js
// Handles image uploads and displays previews in the gallery, with delete functionality

const fileInput = document.getElementById('file-upload');
const galleryPlaceholder = document.querySelector('.gallery-placeholder');

let uploadedImages = [];

galleryPlaceholder.innerHTML = '<p>no images uploaded yet</p>';

function renderGallery() {
    galleryPlaceholder.innerHTML = '';
    if (uploadedImages.length === 0) {
        galleryPlaceholder.innerHTML = '<p>no images uploaded yet</p>';
        return;
    }
    uploadedImages.forEach((imgObj, idx) => {
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
            uploadedImages.splice(idx, 1);
            renderGallery();
        };
        wrapper.appendChild(img);
        wrapper.appendChild(delBtn);
        galleryPlaceholder.appendChild(wrapper);
    });
}

fileInput.addEventListener('change', (event) => {
    const files = Array.from(event.target.files);
    if (files.length === 0) {
        uploadedImages = [];
        renderGallery();
        return;
    }
    files.forEach(file => {
        if (!file.type.startsWith('image/')) return;
        const reader = new FileReader();
        reader.onload = (e) => {
            uploadedImages.push({ src: e.target.result, name: file.name });
            renderGallery();
        };
        reader.readAsDataURL(file);
    });
});

renderGallery(); 