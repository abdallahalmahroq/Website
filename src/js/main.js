/**
 * Main Application Entry Point
 * Initializes all modules when DOM is ready
 */
import { Navigation } from './modules/navigation.js';
import { Offerings } from './modules/offerings.js';
import { LaserGrid } from './modules/laserGrid.js';
import { LaserAnimation } from './modules/laserAnimation.js';
import { ComponentLoader } from './modules/componentLoader.js';

class App {
    constructor() {
        this.componentLoader = new ComponentLoader();
        this.navigation = null;
        this.offerings = null;
        this.laserGrid = null;
        this.laserAnimation = null;
    }

    async init() {
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.loadComponents());
        } else {
            await this.loadComponents();
        }
    }

    async loadComponents() {
        try {
            // Load all HTML components
            await Promise.all([
                this.componentLoader.insertComponent('laser-grid-container', 'laser-grid'),
                this.componentLoader.insertComponent('header-container', 'header'),
                this.componentLoader.insertComponent('welcome-container', 'welcome-section'),
                this.componentLoader.insertComponent('about-container', 'about-section'),
                this.componentLoader.insertComponent('community-container', 'community-page'),
                this.componentLoader.insertComponent('events-container', 'events-page'),
                this.componentLoader.insertComponent('announcements-container', 'announcements-page'),
                this.componentLoader.insertComponent('contact-container', 'contact-page'),
                this.componentLoader.insertComponent('footer-container', 'footer')
            ]);

            // Initialize all modules after components are loaded
            this.initializeModules();
        } catch (error) {
            console.error('Error loading components:', error);
        }
    }

    initializeModules() {
        try {
            // Initialize all modules
            this.navigation = new Navigation();
            this.offerings = new Offerings();
            this.laserGrid = new LaserGrid();
            this.laserAnimation = new LaserAnimation();
            
            console.log('AiMinds website initialized successfully');
        } catch (error) {
            console.error('Error initializing application:', error);
        }
    }
}

// Start the application
const app = new App();
app.init();

