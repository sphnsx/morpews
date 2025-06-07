class Glassworks {
    constructor() {
        this.container = document.getElementById('glassworks-container');
        this.images = [];
        this.maxImages = 9; // 3x3 grid
        this.setupUpload();
        this.setupContainer();
    }

    setupContainer() {
        this.container.style.display = 'grid';
        this.container.style.gridTemplateColumns = 'repeat(3, 1fr)';
        this.container.style.gap = '4px';
        this.container.style.width = '600px';
        this.container.style.height = '600px';
        this.container.style.margin = '0 auto';
        this.container.style.border = '2px solid #6986E8';
        this.container.style.padding = '4px';
        this.container.style.backgroundColor = '#fff';
    }

    setupUpload() {
        const uploadSection = document.createElement('div');
        uploadSection.className = 'upload-section';
        uploadSection.style.marginBottom = '2rem';
        uploadSection.style.textAlign = 'center';

        const label = document.createElement('label');
        label.className = 'upload-label';
        label.textContent = 'upload image';
        label.style.display = 'inline-block';
        label.style.padding = '1rem 2rem';
        label.style.background = '#fff';
        label.style.border = '2px solid #6986E8';
        label.style.cursor = 'pointer';
        label.style.fontFamily = "'Fira Mono', monospace";
        label.style.color = '#341D34';

        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'image/*';
        input.style.display = 'none';
        input.addEventListener('change', (e) => this.handleImageUpload(e));

        label.appendChild(input);
        uploadSection.appendChild(label);
        this.container.parentElement.insertBefore(uploadSection, this.container);
    }

    async handleImageUpload(event) {
        const file = event.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (e) => {
            const img = new Image();
            img.onload = () => {
                this.addImageToCollage(img);
                this.generatePoem();
            };
            img.src = e.target.result;
        };
        reader.readAsDataURL(file);
    }

    addImageToCollage(img) {
        if (this.images.length >= this.maxImages) {
            // Remove oldest image
            const oldestImage = this.container.firstChild;
            if (oldestImage) {
                this.container.removeChild(oldestImage);
                this.images.shift();
            }
        }

        const wrapper = document.createElement('div');
        wrapper.style.position = 'relative';
        wrapper.style.overflow = 'hidden';
        wrapper.style.aspectRatio = '1';

        const imageElement = document.createElement('img');
        imageElement.src = img.src;
        imageElement.style.width = '100%';
        imageElement.style.height = '100%';
        imageElement.style.objectFit = 'cover';
        imageElement.style.transition = 'transform 0.3s ease';

        wrapper.appendChild(imageElement);
        this.container.appendChild(wrapper);
        this.images.push(img);

        // Animate the new image
        requestAnimationFrame(() => {
            imageElement.style.transform = 'scale(1.1)';
            setTimeout(() => {
                imageElement.style.transform = 'scale(1)';
            }, 300);
        });
    }

    generatePoem() {
        // Simple poem generation based on image count
        const poems = [
            "fragments drift / in quiet light / memory's mosaic",
            "shards of time / rearrange / in silent dance",
            "pieces fall / into place / like stars at dawn",
            "glass holds light / like hands hold / memories",
            "each square / a window / to another world"
        ];

        const poemElement = document.createElement('div');
        poemElement.className = 'poem';
        poemElement.style.position = 'absolute';
        poemElement.style.bottom = '2rem';
        poemElement.style.left = '50%';
        poemElement.style.transform = 'translateX(-50%)';
        poemElement.style.fontFamily = "'Fira Mono', monospace";
        poemElement.style.color = '#341D34';
        poemElement.style.textAlign = 'center';
        poemElement.style.padding = '1rem';
        poemElement.style.background = 'rgba(255, 255, 255, 0.9)';
        poemElement.style.border = '1px solid #6986E8';
        poemElement.style.opacity = '0';
        poemElement.style.transition = 'opacity 0.3s ease';

        const randomPoem = poems[Math.floor(Math.random() * poems.length)];
        poemElement.textContent = randomPoem;

        this.container.appendChild(poemElement);

        // Fade in the poem
        requestAnimationFrame(() => {
            poemElement.style.opacity = '1';
        });

        // Remove the poem after 5 seconds
        setTimeout(() => {
            poemElement.style.opacity = '0';
            setTimeout(() => {
                this.container.removeChild(poemElement);
            }, 300);
        }, 5000);
    }
}

// Initialize the artwork when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new Glassworks();
}); 