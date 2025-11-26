/**
 * Navigation Module
 * Handles page navigation and active state management
 */
export class Navigation {
    constructor() {
        this.navLinks = document.querySelectorAll('.nav-link');
        this.pages = document.querySelectorAll('.page');
        this.init();
    }

    init() {
        this.setupEventListeners();
    }

    setupEventListeners() {
        this.navLinks.forEach(link => {
            link.addEventListener('click', (e) => this.handleNavigation(e, link));
        });
    }

    handleNavigation(e, link) {
        e.preventDefault();
        
        // Remove active class from all links and pages
        this.navLinks.forEach(l => l.classList.remove('active'));
        this.pages.forEach(page => page.classList.remove('active'));
        
        // Add active class to clicked link
        link.classList.add('active');
        
        // Show the corresponding page
        const pageId = link.getAttribute('data-page');
        const targetPage = document.getElementById(pageId);
        if (targetPage) {
            targetPage.classList.add('active');
        }
        
        // Scroll to top when navigating
        window.scrollTo(0, 0);
    }

    navigateToPage(pageId) {
        const link = document.querySelector(`[data-page="${pageId}"]`);
        if (link) {
            link.click();
        }
    }
}

