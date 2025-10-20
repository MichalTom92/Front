document.addEventListener('DOMContentLoaded', () => {

    // --- Theme Toggler ---
    const themeToggle = document.querySelector('.theme-toggle');
    themeToggle.addEventListener('click', () => {
        const body = document.body;
        const currentTheme = body.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        body.setAttribute('data-theme', newTheme);
    });

    // --- Mobile Menu ---
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.getElementById('navLinks');
    mobileMenuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        // ARIA attribute for accessibility
        const isExpanded = navLinks.classList.contains('active');
        mobileMenuToggle.setAttribute('aria-expanded', isExpanded);
    });

    // --- Smooth Scrolling & Close Mobile Menu on Nav ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
            // Close mobile menu after clicking a link
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                mobileMenuToggle.setAttribute('aria-expanded', 'false');
            }
        });
    });

    // --- Contact Form Placeholder ---
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            // This is a placeholder. For real functionality, use a service like Formspree.
            event.preventDefault();
            alert('Dziękujemy za wiadomość! Skontaktujemy się z Tobą wkrótce.');
            event.target.reset();
        });
    }

    // --- Scroll Animations with Intersection Observer ---
    const animatedElements = document.querySelectorAll('.feature-card, .gallery-item');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Animate only once
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of the element is visible
    });

    animatedElements.forEach(el => {
        observer.observe(el);
    });

    // --- Lightbox for Gallery ---
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    document.body.appendChild(lightbox);

    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            lightbox.classList.add('active');
            const img = document.createElement('img');
            // Get high-res image from a data attribute or derive from src
            img.src = item.querySelector('img').src; 
            while (lightbox.firstChild) {
                lightbox.removeChild(lightbox.firstChild);
            }
            lightbox.appendChild(img);
        });
    });

    lightbox.addEventListener('click', (e) => {
        // Close if the background is clicked, not the image itself
        if (e.target !== e.currentTarget) return;
        lightbox.classList.remove('active');
    });
});