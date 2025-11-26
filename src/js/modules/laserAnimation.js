/**
 * Laser Animation Module
 * Handles the canvas-based laser beam animation
 */
export class LaserAnimation {
    constructor() {
        this.canvas = document.getElementById('laser-bg');
        this.ctx = null;
        this.lasers = [];
        this.laserCount = 15;
        this.animationFrameId = null;
        this.init();
    }

    init() {
        if (this.canvas) {
            this.ctx = this.canvas.getContext('2d');
            this.setupCanvas();
            this.createLasers();
            this.startAnimation();
            this.setupResizeListener();
        }
    }

    setupCanvas() {
        this.resizeCanvas();
    }

    resizeCanvas() {
        if (this.canvas) {
            this.canvas.width = window.innerWidth;
            this.canvas.height = window.innerHeight;
        }
    }

    setupResizeListener() {
        window.addEventListener('resize', () => {
            this.resizeCanvas();
        });
    }

    createLasers() {
        for (let i = 0; i < this.laserCount; i++) {
            this.lasers.push(new Laser(this.canvas));
        }
    }

    drawBackground() {
        this.ctx.fillStyle = '#0a0a1a';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }

    animate() {
        this.drawBackground();
        
        for (let i = 0; i < this.lasers.length; i++) {
            this.lasers[i].update(this.canvas);
            this.lasers[i].draw(this.ctx);
        }
        
        this.animationFrameId = requestAnimationFrame(() => this.animate());
    }

    startAnimation() {
        this.animate();
    }

    stopAnimation() {
        if (this.animationFrameId) {
            cancelAnimationFrame(this.animationFrameId);
        }
    }
}

/**
 * Laser Class
 * Represents a single laser beam
 */
class Laser {
    constructor(canvas) {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.length = Math.random() * 200 + 100;
        this.width = Math.random() * 3 + 1;
        this.speed = Math.random() * 2 + 1;
        this.angle = Math.random() * Math.PI * 2;
        this.color = `hsl(${Math.random() * 60 + 270}, 100%, 70%)`;
        this.opacity = Math.random() * 0.5 + 0.2;
    }
    
    update(canvas) {
        this.x += Math.cos(this.angle) * this.speed;
        this.y += Math.sin(this.angle) * this.speed;
        
        // Boundary check with wrap-around
        if (this.x > canvas.width + this.length) this.x = -this.length;
        else if (this.x < -this.length) this.x = canvas.width + this.length;
        
        if (this.y > canvas.height + this.length) this.y = -this.length;
        else if (this.y < -this.length) this.y = canvas.height + this.length;
    }
    
    draw(ctx) {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle);
        
        const gradient = ctx.createLinearGradient(0, 0, this.length, 0);
        gradient.addColorStop(0, 'transparent');
        gradient.addColorStop(0.3, this.color);
        gradient.addColorStop(0.7, this.color);
        gradient.addColorStop(1, 'transparent');
        
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = gradient;
        ctx.fillRect(0, -this.width/2, this.length, this.width);
        
        // Add glow
        ctx.shadowBlur = 15;
        ctx.shadowColor = this.color;
        ctx.fillRect(0, -this.width/2, this.length, this.width);
        
        ctx.restore();
    }
}

