class Constellations {
    constructor() {
        this.container = document.getElementById('constellations-container');
        this.selectedFrames = [];
        this.maxFrames = 20;
        this.setupContainer();
        this.createFrames();
        this.setupComposeButton();
    }

    setupContainer() {
        this.container.style.display = 'grid';
        this.container.style.gridTemplateColumns = 'repeat(5, 1fr)';
        this.container.style.gap = '1rem';
        this.container.style.width = '800px';
        this.container.style.margin = '0 auto';
        this.container.style.padding = '2rem';
    }

    createFrames() {
        for (let i = 1; i <= this.maxFrames; i++) {
            const frame = document.createElement('div');
            frame.className = 'constellation-frame';
            frame.dataset.number = i;
            
            // Style the frame
            frame.style.width = '120px';
            frame.style.height = '120px';
            frame.style.border = '2px solid #6986E8';
            frame.style.display = 'flex';
            frame.style.alignItems = 'center';
            frame.style.justifyContent = 'center';
            frame.style.fontFamily = "'Fira Mono', monospace";
            frame.style.fontSize = '1.2rem';
            frame.style.color = '#341D34';
            frame.style.cursor = 'pointer';
            frame.style.transition = 'all 0.3s ease';
            frame.style.position = 'relative';
            frame.style.background = '#fff';

            // Add number
            const number = document.createElement('span');
            number.textContent = i;
            frame.appendChild(number);

            // Add click handler
            frame.addEventListener('click', () => this.toggleFrame(frame));
            
            this.container.appendChild(frame);
        }
    }

    toggleFrame(frame) {
        const number = parseInt(frame.dataset.number);
        const index = this.selectedFrames.indexOf(number);

        if (index === -1) {
            // Select frame
            this.selectedFrames.push(number);
            frame.style.background = '#E7FF6E';
            frame.style.transform = 'scale(1.05)';
        } else {
            // Deselect frame
            this.selectedFrames.splice(index, 1);
            frame.style.background = '#fff';
            frame.style.transform = 'scale(1)';
        }
    }

    setupComposeButton() {
        const buttonContainer = document.createElement('div');
        buttonContainer.style.textAlign = 'center';
        buttonContainer.style.marginTop = '2rem';

        const composeButton = document.createElement('button');
        composeButton.textContent = 'compose';
        composeButton.className = 'compose-btn';
        composeButton.style.padding = '1rem 2rem';
        composeButton.style.background = '#fff';
        composeButton.style.border = '2px solid #6986E8';
        composeButton.style.fontFamily = "'Fira Mono', monospace";
        composeButton.style.fontSize = '1.1rem';
        composeButton.style.color = '#341D34';
        composeButton.style.cursor = 'pointer';
        composeButton.style.transition = 'all 0.2s ease';

        composeButton.addEventListener('click', () => this.generateStory());
        composeButton.addEventListener('mouseover', () => {
            composeButton.style.background = '#E7FF6E';
            composeButton.style.transform = 'translateY(-2px)';
        });
        composeButton.addEventListener('mouseout', () => {
            composeButton.style.background = '#fff';
            composeButton.style.transform = 'translateY(0)';
        });

        buttonContainer.appendChild(composeButton);
        this.container.parentElement.appendChild(buttonContainer);
    }

    generateStory() {
        if (this.selectedFrames.length === 0) return;

        const storyElement = document.createElement('div');
        storyElement.className = 'constellation-story';
        storyElement.style.position = 'fixed';
        storyElement.style.bottom = '2rem';
        storyElement.style.left = '50%';
        storyElement.style.transform = 'translateX(-50%)';
        storyElement.style.fontFamily = "'Fira Mono', monospace";
        storyElement.style.color = '#341D34';
        storyElement.style.textAlign = 'center';
        storyElement.style.padding = '1.5rem';
        storyElement.style.background = 'rgba(255, 255, 255, 0.95)';
        storyElement.style.border = '1px solid #6986E8';
        storyElement.style.maxWidth = '600px';
        storyElement.style.opacity = '0';
        storyElement.style.transition = 'opacity 0.3s ease';
        storyElement.style.zIndex = '1000';

        // Generate story based on selected frames
        const story = this.createStoryFromFrames();
        storyElement.textContent = story;

        document.body.appendChild(storyElement);

        // Fade in the story
        requestAnimationFrame(() => {
            storyElement.style.opacity = '1';
        });

        // Remove the story after 8 seconds
        setTimeout(() => {
            storyElement.style.opacity = '0';
            setTimeout(() => {
                document.body.removeChild(storyElement);
                this.resetFrames();
            }, 300);
        }, 8000);
    }

    createStoryFromFrames() {
        const storyParts = [
            "In the quiet space between frames",
            "where light meets shadow",
            "a constellation forms",
            "from numbered points",
            "each touch a star",
            "each sequence a path",
            "through the dark",
            "like footsteps",
            "in fresh snow",
            "or ripples",
            "on still water",
            "the story unfolds",
            "in the order",
            "of your choosing",
            "brief and bright",
            "as a shooting star",
            "then fades",
            "into memory",
            "ready for",
            "another journey"
        ];

        // Create a story using the selected frame numbers to index into story parts
        let story = '';
        this.selectedFrames.forEach((frameNumber, index) => {
            const partIndex = (frameNumber - 1) % storyParts.length;
            story += storyParts[partIndex];
            if (index < this.selectedFrames.length - 1) {
                story += ' / ';
            }
        });

        return story;
    }

    resetFrames() {
        this.selectedFrames = [];
        const frames = this.container.querySelectorAll('.constellation-frame');
        frames.forEach(frame => {
            frame.style.background = '#fff';
            frame.style.transform = 'scale(1)';
        });
    }
}

// Initialize the artwork when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new Constellations();
}); 