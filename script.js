document.addEventListener('DOMContentLoaded', () => {
    // --- THEME TOGGLE ---
    const themeToggle = document.querySelector('.theme-toggle');
    const body = document.body;

    // Load saved theme
    const savedTheme = localStorage.getItem('theme') || 'light';
    body.dataset.theme = savedTheme;

    themeToggle.addEventListener('click', () => {
        const newTheme = body.dataset.theme === 'light' ? 'dark' : 'light';
        body.dataset.theme = newTheme;
        localStorage.setItem('theme', newTheme);
    });

    // --- MOBILE MENU ---
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    mobileMenuToggle.addEventListener('click', () => {
        const isExpanded = mobileMenuToggle.getAttribute('aria-expanded') === 'true';
        mobileMenuToggle.setAttribute('aria-expanded', !isExpanded);
        navLinks.classList.toggle('active');
    });

    // Close mobile menu when a link is clicked
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                mobileMenuToggle.setAttribute('aria-expanded', 'false');
                navLinks.classList.remove('active');
            }
        });
    });

    // --- SCROLL ANIMATIONS ---
    const animatedElements = document.querySelectorAll('.section-title, .feature-card, .gallery-item');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    animatedElements.forEach(el => observer.observe(el));

    // --- LANGUAGE SWITCHER ---
    const translations = {
        pl: {
            siteTitle: "BudujemyPro - Profesjonalne Usługi Budowlane",
            companyName: "TwojaNazwa",
            navHome: "Strona Główna",
            navServices: "Usługi",
            navGallery: "Galeria",
            navContact: "Kontakt",
            heroTitle: "Budujemy Twoje Marzenia",
            heroSubtitle: "Profesjonalne usługi budowlane z pasją i doświadczeniem. Od fundamentów po dach - realizujemy projekty na najwyższym poziomie.",
            heroCta: "Uzyskaj Wstępną Wycenę",
            servicesTitle: "Nasze Usługi",
            service1Title: "Budownictwo Mieszkaniowe",
            service1Desc: "Kompleksowa budowa domów jednorodzinnych i wielorodzinnych według indywidualnych projektów.",
            service2Title: "Remonty i Wykończenia",
            service2Desc: "Profesjonalne wykończenia wnętrz, remonty kapitalne i częściowe. Dbałość o każdy detal.",
            service3Title: "Obiekty Komercyjne",
            service3Desc: "Realizacja projektów budowlanych dla firm - biura, hale magazynowe, centra handlowe.",
            galleryTitle: "Nasze Realizacje",
            gallery1: "Dom Jednorodzinny",
            gallery2: "Remont Biura",
            gallery3: "Hala Magazynowa",
            gallery4: "Apartamentowiec", // Pozostawiamy, bo jest w galerii
            contactTitle: "Skontaktuj Się z Nami",
            formName: "Imię i Nazwisko",
            formEmail: "Email",
            formPhone: "Telefon",
            formMessage: "Wiadomość",
            formSubmit: "Wyślij Wiadomość",
            contactAddress: "📍 ul. Budowlana 15, 00-001 Warszawa",
            footerRights: "© 2025 Wszelkie prawa zastrzeżone.",
            formSending: "Wysyłanie...",
            formSuccess: "Wiadomość wysłana pomyślnie! Dziękujemy.",
            formError: "Coś poszło nie tak. Spróbuj ponownie."
        },
        en: {
            siteTitle: "BudujemyPro - Professional Construction Services",
            companyName: "YourName",
            navHome: "Home",
            navServices: "Services",
            navGallery: "Gallery",
            navContact: "Contact",
            heroTitle: "Building Your Dreams",
            heroSubtitle: "Professional construction services with passion and experience. From foundations to the roof - we deliver projects at the highest level.",
            heroCta: "Get a Preliminary Quote",
            servicesTitle: "Our Services",
            service1Title: "Residential Construction",
            service1Desc: "Comprehensive construction of single-family and multi-family houses according to individual designs.",
            service2Title: "Renovations & Finishing",
            service2Desc: "Professional interior finishing, major and partial renovations. Attention to every detail.",
            service3Title: "Commercial Buildings",
            service3Desc: "Implementation of construction projects for companies - offices, warehouses, shopping centers.",
            galleryTitle: "Our Projects",
            gallery1: "Single-Family House",
            gallery2: "Office Renovation",
            gallery3: "Warehouse Hall",
            gallery4: "Apartment Building", // Pozostawiamy, bo jest w galerii
            contactTitle: "Contact Us",
            formName: "Name and Surname",
            formEmail: "Email",
            formPhone: "Phone",
            formMessage: "Message",
            formSubmit: "Send Message",
            contactAddress: "📍 15 Budowlana St, 00-001 Warsaw",
            footerRights: "© 2025 All rights reserved.",
            formSending: "Sending...",
            formSuccess: "Message sent successfully! Thank you.",
            formError: "Something went wrong. Please try again."
        },
    };

    const langButtons = document.querySelectorAll('.lang-btn');
    const translatableElements = document.querySelectorAll('[data-key]');

    const setLanguage = (lang) => {
        translatableElements.forEach(el => {
            const key = el.dataset.key;
            // Sprawdzamy, czy klucz istnieje w tłumaczeniach, aby uniknąć błędów
            if (translations[lang] && translations[lang][key]) {
                el.textContent = translations[lang][key];
            }
        });
        document.documentElement.lang = lang;
        localStorage.setItem('language', lang);
        langButtons.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === lang);
        });
    };

    langButtons.forEach(button => {
        button.addEventListener('click', () => setLanguage(button.dataset.lang));
    });

    
    const savedLang = localStorage.getItem('language') || 'pl';
    setLanguage(savedLang);

    
    const form = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');
    const submitButton = form.querySelector('.submit-button');

    
    const WEB3FORMS_ACCESS_KEY = "2a30ae6b-ed37-40ce-abd4-24f979ba540e"; 

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const originalButtonText = submitButton.textContent;
        const currentLang = document.documentElement.lang || 'pl';
        const formMessages = translations[currentLang];
        
        
        formStatus.style.display = 'block';
        formStatus.style.color = 'var(--text-secondary)';
        formStatus.textContent = formMessages.formSending;
        submitButton.disabled = true;
       

        const formData = new FormData(form);
        const object = Object.fromEntries(formData);
        object.access_key = WEB3FORMS_ACCESS_KEY; // Dodajemy klucz dynamicznie
        const json = JSON.stringify(object);

        fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: json
            })
            .then(async (response) => {
                let json = await response.json();
                if (response.status == 200) {
                    formStatus.style.color = 'var(--accent-green)';
                    formStatus.textContent = formMessages.formSuccess;
                    form.reset(); // Wyczyść formularz
                } else {
                    formStatus.style.color = 'var(--accent-orange)';
                    formStatus.textContent = json.message || formMessages.formError;
                }
            })
            .catch(error => {
                formStatus.style.color = 'var(--accent-orange)';
                formStatus.textContent = "Wystąpił błąd. Sprawdź połączenie z internetem."; // Błąd sieciowy, zostawiamy po polsku
            })
            .finally(() => {
                submitButton.disabled = false; // Włącz przycisk ponownie
                // submitButton.textContent = originalButtonText; // Przywróć oryginalny tekst
            });
    });

    // --- LIGHTBOX GALLERY ---
    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
        const lightboxImg = document.getElementById('lightbox-img');
        const galleryItems = document.querySelectorAll('.gallery-item');
        const closeBtn = document.querySelector('.lightbox-close');
        const prevBtn = document.querySelector('.lightbox-prev');
        const nextBtn = document.querySelector('.lightbox-next');

        let currentIndex = 0;

        const showImage = (index) => {
            if (index >= galleryItems.length) index = 0;
            if (index < 0) index = galleryItems.length - 1;
            
            const item = galleryItems[index];
            const img = item.querySelector('img');
            lightboxImg.src = img.src;
            currentIndex = index;
        };

        galleryItems.forEach((item, index) => {
            item.addEventListener('click', () => {
                lightbox.classList.add('active');
                showImage(index);
            });
        });

        const closeLightbox = () => {
            lightbox.classList.remove('active');
        };

        closeBtn.addEventListener('click', closeLightbox);
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) closeLightbox();
        });

        prevBtn.addEventListener('click', () => showImage(currentIndex - 1));
        nextBtn.addEventListener('click', () => showImage(currentIndex + 1));
    }

    // --- SCROLL TO TOP BUTTON ---
    const scrollToTopBtn = document.querySelector('.scroll-to-top');
    if (scrollToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                scrollToTopBtn.style.opacity = '1';
                scrollToTopBtn.style.visibility = 'visible';
            } else {
                scrollToTopBtn.style.opacity = '0';
                scrollToTopBtn.style.visibility = 'hidden';
            }
        });
    }

    // --- ZABEZPIECZENIA PRZED KOPIOWANIEM ---
    // Wyjaśnienie: Poniższy kod utrudnia kopiowanie treści, ale nie jest w 100% skuteczny.
    // Zaawansowany użytkownik nadal będzie mógł uzyskać dostęp do kodu źródłowego.

    // 1. Blokada prawego przycisku myszy
    document.addEventListener('contextmenu', (e) => e.preventDefault());

    // 2. Blokada skrótów klawiszowych do narzędzi deweloperskich
    document.addEventListener('keydown', (e) => {
        // Blokuje F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U
        if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J')) || (e.ctrlKey && e.key === 'U')) {
            e.preventDefault();
        }
    });
});
