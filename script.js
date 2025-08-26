// --- Mobile Navigation ---
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-link");

/**
 * Toggles the mobile menu's active state.
 * This function adds or removes the 'active' class from the hamburger icon
 * and the navigation menu, making them appear or disappear.
 */
const toggleMenu = () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
};

// Add click event listener to the hamburger icon to trigger the menu toggle.
hamburger.addEventListener("click", toggleMenu);

/**
 * Adds click event listeners to each navigation link.
 * When a link is clicked and the mobile menu is open, it closes the menu.
 * This is useful for single-page applications where clicks scroll to sections.
 */
navLinks.forEach(n => n.addEventListener("click", () => {
    if (navMenu.classList.contains("active")) {
        toggleMenu();
    }
}));

// --- Animate Sections on Scroll ---
const sections = document.querySelectorAll('.section-hidden');

/**
 * Intersection Observer to add a 'section-visible' class to sections
 * when they enter the viewport. This triggers a fade-in and slide-up animation.
 */
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        // If the section is intersecting (i.e., visible on screen)
        if (entry.isIntersecting) {
            entry.target.classList.add('section-visible');
            // Optional: unobserve the element after it has become visible
            // to prevent the animation from re-triggering.
            // observer.unobserve(entry.target);
        }
    });
}, {
    rootMargin: '0px',
    threshold: 0.15 // Animation triggers when 15% of the section is visible
});

// Observe each section that has the 'section-hidden' class.
sections.forEach(section => {
    observer.observe(section);
});

// --- Feather Icons Initialization ---
// This function finds all icon placeholders and replaces them with SVG icons.
feather.replace();
