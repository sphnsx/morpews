class Constellations {
    constructor() {
        this.container = document.getElementById('constellations-container');
        // Remove previous frame generation
        // this.selectedFrames = [];
        // this.maxFrames = 20;
        // this.setupContainer();
        // this.createFrames();
        // this.setupComposeButton();
    }

    // Remove createFrames and related frame/number code
}

// Initialize the artwork when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new Constellations();
});

document.addEventListener('DOMContentLoaded', function() {
    const canvasAreas = [
        { left: -437.04, top: 298.56, width: 133.44, height: 113.18 },
        { left: -210.48, top: 382.01, width: 162.24, height: 67.14 },
        { left: -195.12, top: 238.14, width: 91.2, height: 92.08 },
        { left: -47.28, top: 565.45, width: 56.64, height: 65.70 },
        { left: 97.68, top: 329.74, width: 219.84, height: 229.24 },
        { left: 217.68, top: 641.46, width: 304.32, height: 190.87 },
        { left: 338.16, top: 855.83, width: 57.6, height: 49.88 },
        { left: 338.64, top: 936.88, width: 56.64, height: 79.61 },
        { left: 351.36, top: 351.56, width: 35.04, height: 228.76 },
        { left: 483.63, top: 880.29, width: 62.34, height: 62.34 },
        { left: 501.12, top: 419.90, width: 55.2, height: 282.95 },
        { left: 503.28, top: 705.96, width: 55.68, height: 117.50 },
        { left: 594, top: 977.38, width: 29.76, height: 28.26 },
        { left: 608.4, top: 894.98, width: 35.52, height: 31.99 },
        { left: 648.79, top: 816.17, width: 37.30, height: 35.21 },
        { left: 678.77, top: 982.20, width: 23.33, height: 22.52 },
        { left: 729.36, top: 899.95, width: 87.36, height: 55.63 },
        { left: 746.64, top: 809.79, width: 54.72, height: 28.77 },
        { left: 835.44, top: 867.34, width: 21.12, height: 24.94 },
        { left: 845.52, top: 796.84, width: 20.17, height: 22.06 },
        { left: 877.67, top: 956.23, width: 97.91, height: 67.77 },
        { left: 880.12, top: 796.84, width: 21.6, height: 22.06 },
        { left: 885.12, top: 796.84, width: 21.6, height: 22.06 },
        { left: 913.2, top: 867.34, width: 34.56, height: 23.02 },
        { left: 964.56, top: 800.36, width: 25.92, height: 25.27 },
        { left: 1020.73, top: 970.09, width: 61.43, height: 28.53 },
        { left: 1023.12, top: 880.78, width: 70.08, height: 40.32 },
        { left: 1051.92, top: 797.68, width: 29.76, height: 19.90 },
        { left: 1129.69, top: 881.74, width: 29.73, height: 28.8 },
        { left: 1132.82, top: 957.98, width: 41.81, height: 45.08 },
        { left: 883.92, top: 462.58, width: 440.64, height: 493.00 },
        { left: -235.92, top: 822.56, width: 360.96, height: 260.53 },
        { left: -282.96, top: 531.16, width: 253.44, height: 142.91 },
        { left: -521.04, top: 519.17, width: 55.68, height: 44.12 },
        { left: -507.25, top: 428.29, width: 60.23, height: 21.58 },
        { left: -563.76, top: 427.81, width: 25.92, height: 22.54 },
        { left: -548.4, top: 939.75, width: 54.72, height: 64.26 },
        { left: -549.36, top: 670.23, width: 37.44, height: 33.57 },
        { left: -520.56, top: 574.32, width: 56.64, height: 37.41 }
    ];
    const container = document.querySelector('.constellations-bg-container');
    canvasAreas.forEach((area, idx) => {
        const div = document.createElement('div');
        div.className = 'canvas-hover-area';
        div.style.position = 'absolute';
        div.style.left = area.left + 'px';
        div.style.top = area.top + 'px';
        div.style.width = area.width + 'px';
        div.style.height = area.height + 'px';
        div.style.background = 'transparent';
        div.style.cursor = 'pointer';
        div.style.zIndex = 10;

        // Number overlay (hidden by default)
        const numberRect = document.createElement('div');
        numberRect.className = 'canvas-order-rect';
        numberRect.textContent = idx + 1;
        numberRect.style.display = 'none';
        numberRect.style.position = 'absolute';
        numberRect.style.top = '10px';
        numberRect.style.left = '10px';
        numberRect.style.width = '40px';
        numberRect.style.height = '28px';
        numberRect.style.background = '#f6ff8f';
        numberRect.style.color = '#341D34';
        numberRect.style.fontFamily = "'Fira Mono', monospace";
        numberRect.style.fontSize = '1.1rem';
        numberRect.style.fontWeight = '700';
        numberRect.style.display = 'flex';
        numberRect.style.alignItems = 'center';
        numberRect.style.justifyContent = 'center';
        numberRect.style.borderRadius = '0.2em';
        numberRect.style.boxShadow = '0 2px 8px rgba(0,0,0,0.05)';
        numberRect.style.pointerEvents = 'none';
        numberRect.style.zIndex = 11;

        div.appendChild(numberRect);
        div.addEventListener('mouseenter', () => {
            numberRect.style.display = 'flex';
        });
        div.addEventListener('mouseleave', () => {
            numberRect.style.display = 'none';
        });
        container.appendChild(div);
    });
}); 