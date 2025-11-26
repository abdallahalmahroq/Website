/**
 * Offerings Module
 * Handles interactive "What We Offer" section
 */
export class Offerings {
    constructor() {
        this.offeringCards = document.querySelectorAll('.offering-card');
        this.offeringDetails = document.querySelectorAll('.offering-details');
        this.init();
    }

    init() {
        if (this.offeringCards.length > 0) {
            this.setupEventListeners();
        }
    }

    setupEventListeners() {
        this.offeringCards.forEach(card => {
            card.addEventListener('click', () => this.handleCardClick(card));
        });
    }

    handleCardClick(card) {
        const offerType = card.getAttribute('data-offer');
        
        // Remove active class from all cards and details
        this.offeringCards.forEach(c => c.classList.remove('active'));
        this.offeringDetails.forEach(d => d.classList.remove('active'));
        
        // Add active class to clicked card
        card.classList.add('active');
        
        // Show corresponding details
        const detailsElement = document.getElementById(`${offerType}-details`);
        if (detailsElement) {
            detailsElement.classList.add('active');
        }
    }
}

