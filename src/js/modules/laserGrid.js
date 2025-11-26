/**
 * Laser Grid Module
 * Creates the fixed background laser grid effect
 */
export class LaserGrid {
    constructor() {
        this.laserGrid = document.getElementById('laser-grid');
        this.gridSize = 50;
        this.init();
    }

    init() {
        if (this.laserGrid) {
            this.createGrid();
        }
    }

    createGrid() {
        const width = window.innerWidth;
        const height = window.innerHeight;
        
        for (let i = 0; i < width / this.gridSize; i++) {
            for (let j = 0; j < height / this.gridSize; j++) {
                const dot = document.createElement('div');
                dot.style.position = 'absolute';
                dot.style.left = `${i * this.gridSize}px`;
                dot.style.top = `${j * this.gridSize}px`;
                dot.style.width = '1px';
                dot.style.height = '1px';
                dot.style.backgroundColor = `rgba(${Math.random() * 100 + 155}, ${Math.random() * 50 + 100}, 255, ${Math.random() * 0.3})`;
                dot.style.boxShadow = `0 0 ${Math.random() * 5 + 2}px rgba(191, 0, 255, 0.5)`;
                this.laserGrid.appendChild(dot);
            }
        }
    }
}

