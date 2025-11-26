/**
 * Component Loader Module
 * Dynamically loads HTML components without build step
 */
export class ComponentLoader {
    constructor() {
        this.components = new Map();
    }

    async loadComponent(name) {
        if (this.components.has(name)) {
            return this.components.get(name);
        }

        try {
            const response = await fetch(`src/html/components/${name}.html`);
            if (!response.ok) {
                throw new Error(`Failed to load ${name}`);
            }
            const html = await response.text();
            this.components.set(name, html);
            return html;
        } catch (error) {
            console.error(`Error loading component ${name}:`, error);
            return '';
        }
    }

    async insertComponent(containerId, componentName) {
        const container = document.getElementById(containerId);
        if (!container) {
            console.error(`Container ${containerId} not found`);
            return;
        }

        const html = await this.loadComponent(componentName);
        container.innerHTML = html;
    }

    async replacePlaceholder(placeholder, componentName) {
        const placeholderElement = document.querySelector(placeholder);
        if (!placeholderElement) {
            console.error(`Placeholder ${placeholder} not found`);
            return;
        }

        const html = await this.loadComponent(componentName);
        placeholderElement.outerHTML = html;
    }
}

