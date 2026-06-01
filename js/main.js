// Main JavaScript for Noli Me Tangere Educational Platform

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    initializeChapters();
    initializeAssessment();
    smoothScrolling();
});

// Initialize chapter expansion
function initializeChapters() {
    const chapterCards = document.querySelectorAll('.chapter-card');
    chapterCards.forEach(card => {
        card.addEventListener('click', function() {
            // Add click interaction if needed
            console.log('Chapter clicked');
        });
    });
}

// Initialize assessment forms
function initializeAssessment() {
    const assessmentForms = document.querySelectorAll('.assessment-form');
    assessmentForms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const answers = new FormData(form);
            console.log('Assessment submitted:', answers);
            alert('Salamat sa iyong mga sagot!');
            form.reset();
        });
    });
}

// Smooth scrolling for navigation
function smoothScrolling() {
    const navLinks = document.querySelectorAll('.navigation a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

const elements = document.querySelectorAll('.chapter-card, .character-card, .vocab-card, .resource-card');
elements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Add print functionality for teachers
window.printSection = function(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const printWindow = window.open('', '', 'height=600,width=800');
        printWindow.document.write('<html><head><title>Noli Me Tangere</title>');
        printWindow.document.write('<link rel="stylesheet" href="styles/main.css">');
        printWindow.document.write('</head><body>');
        printWindow.document.write(section.innerHTML);
        printWindow.document.write('</body></html>');
        printWindow.document.close();
        printWindow.print();
    }
};

console.log('Noli Me Tangere Educational Platform loaded successfully');