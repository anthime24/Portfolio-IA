document.addEventListener('DOMContentLoaded', () => {
    // Initialize language
    window.currentLang = getInitialLanguage();
    
    // Set up language switcher
    setupLanguageSwitcher(window.currentLang);
    
    // Apply initial translations
    applyTranslations(window.currentLang);
    
    // Create dynamic content with initial language
    createDynamicContent(window.currentLang);
    
    // Initialize animations and effects
    initializeAnimations();
    
    // Initialize navigation
    initializeNavigation();

    // Initialize projects carousel controls
    initializeProjectsCarousel();
});

// Get initial language based on browser preferences or localStorage
function getInitialLanguage() {
    const savedLang = localStorage.getItem('portfolioLang');
    if (savedLang && ['en', 'fr'].includes(savedLang)) {
        return savedLang;
    }
    
    // Default to browser language if available
    const browserLang = navigator.language || navigator.userLanguage;
    return browserLang && browserLang.startsWith('fr') ? 'fr' : 'en';
}

// Set up language switcher functionality
function setupLanguageSwitcher(initialLang) {
    const langButtons = document.querySelectorAll('.lang-btn');
    
    // Set active state for initial language
    langButtons.forEach(btn => {
        if (btn.getAttribute('data-lang') === initialLang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
        
        // Add click event listener
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            if (lang) {
                window.currentLang = lang;
                localStorage.setItem('portfolioLang', lang);
                
                // Update active state
                langButtons.forEach(b => {
                    b.classList.toggle('active', b.getAttribute('data-lang') === lang);
                });
                
                // Apply translations
                applyTranslations(lang);
            }
        });
    });
}

// Apply translations based on the selected language
function applyTranslations(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (key) {
            // Split the key by dots to navigate through the translations object
            const parts = key.split('.');
            let translation = translations[lang];
            
            for (const part of parts) {
                if (translation && translation[part]) {
                    translation = translation[part];
                } else {
                    translation = null;
                    break;
                }
            }
            
            if (translation) {
                // Apply translation with fade effect
                const originalOpacity = element.style.opacity;
                element.style.opacity = '0';
                
                setTimeout(() => {
                    // For anchor elements, preserve the href and other attributes
                    if (element.tagName === 'A') {
                        const href = element.getAttribute('href');
                        element.textContent = translation;
                        if (href) element.setAttribute('href', href);
                    } else {
                        element.textContent = translation;
                    }
                    element.style.opacity = originalOpacity || '1';
                }, 150);
            }
        }
    });
    
    // Clear and recreate dynamic content when language is switched
    clearDynamicContent();
    createDynamicContent(lang);
}

// Clear dynamic content before recreating
function clearDynamicContent() {
    // Clear project items
    const projectsGrid = document.querySelector('.projects-grid');
    if (projectsGrid) {
        projectsGrid.innerHTML = '';
    }
    
    // Clear tech stack items
    document.querySelectorAll('.stack-grid').forEach(grid => {
        grid.innerHTML = '';
    });
}

// Create dynamic content
function createDynamicContent(lang) {
    createProjects(lang);
    createTechStack(lang);
    createFloatingIcons();

    // Re-sync carousel buttons after rerender
    updateProjectsCarouselControls();
}

// Create projects
function createProjects(lang) {
    const projectsGrid = document.querySelector('.projects-grid');
    if (!projectsGrid) return;
    
    // Make sure the grid is empty before adding new projects
    if (projectsGrid.children.length > 0) {
        projectsGrid.innerHTML = '';
    }
    
    const projectItems = translations[lang].projects.items;
    
    projectItems.forEach(project => {
        const projectCard = document.createElement('a');
        projectCard.className = 'project-card project-card-link';
        projectCard.href = `project.html?slug=${project.slug}`;
        
        projectCard.innerHTML = `
            <div class="project-card-header">
                <i class="${project.icon} project-card-icon"></i>
                <span class="project-context-badge">${project.context}</span>
            </div>
            <h3 class="project-title">${project.title}</h3>
            <p class="project-role">${project.role}</p>
            <p class="project-date"><i class="fas fa-calendar-alt"></i> ${project.date}</p>
            <span class="project-card-arrow"><i class="fas fa-arrow-right"></i></span>
        `;
        
        projectsGrid.appendChild(projectCard);
    });
}

// Projects carousel controls (arrows + responsive page scroll)
function initializeProjectsCarousel() {
    const track = document.querySelector('.projects-grid');
    const prevBtn = document.querySelector('.projects-nav-prev');
    const nextBtn = document.querySelector('.projects-nav-next');

    if (!track || !prevBtn || !nextBtn) return;

    function getStep() {
        // Scroll by one "page" (viewport width). Works regardless of cards-per-view.
        return track.clientWidth;
    }

    prevBtn.addEventListener('click', () => {
        track.scrollBy({ left: -getStep(), behavior: 'smooth' });
    });

    nextBtn.addEventListener('click', () => {
        track.scrollBy({ left: getStep(), behavior: 'smooth' });
    });

    track.addEventListener('scroll', () => updateProjectsCarouselControls());
    window.addEventListener('resize', () => updateProjectsCarouselControls());

    // Autoplay (respects reduced motion, pauses on hover/focus, cool-down after user interaction)
    setupProjectsCarouselAutoplay(track, prevBtn, nextBtn, getStep);

    updateProjectsCarouselControls();
}

function updateProjectsCarouselControls() {
    const track = document.querySelector('.projects-grid');
    const prevBtn = document.querySelector('.projects-nav-prev');
    const nextBtn = document.querySelector('.projects-nav-next');

    if (!track || !prevBtn || !nextBtn) return;

    const maxScrollLeft = track.scrollWidth - track.clientWidth;
    const current = track.scrollLeft;
    const epsilon = 2; // tolerance for sub-pixel values

    const canScroll = maxScrollLeft > epsilon;
    prevBtn.disabled = !canScroll || current <= epsilon;
    nextBtn.disabled = !canScroll || current >= (maxScrollLeft - epsilon);
}

function setupProjectsCarouselAutoplay(track, prevBtn, nextBtn, getStep) {
    // Don't autoplay for users who prefer reduced motion
    const reducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) return;

    const AUTOPLAY_INTERVAL_MS = 4500;
    const USER_PAUSE_MS = 7000;

    let intervalId = null;
    let resumeTimeoutId = null;
    let isPaused = false;

    const clearTimers = () => {
        if (intervalId) window.clearInterval(intervalId);
        intervalId = null;
        if (resumeTimeoutId) window.clearTimeout(resumeTimeoutId);
        resumeTimeoutId = null;
    };

    const pause = () => {
        isPaused = true;
        clearTimers();
    };

    const scheduleResume = () => {
        clearTimers();
        isPaused = false;
        resumeTimeoutId = window.setTimeout(() => {
            start();
        }, USER_PAUSE_MS);
    };

    const stepNext = () => {
        const maxScrollLeft = track.scrollWidth - track.clientWidth;
        const epsilon = 2;

        if (maxScrollLeft <= epsilon) return;

        // If we're at the end, loop back to start
        if (track.scrollLeft >= (maxScrollLeft - epsilon)) {
            track.scrollTo({ left: 0, behavior: 'smooth' });
            return;
        }

        track.scrollBy({ left: getStep(), behavior: 'smooth' });
    };

    const start = () => {
        if (isPaused) return;
        if (intervalId) return;
        intervalId = window.setInterval(stepNext, AUTOPLAY_INTERVAL_MS);
    };

    // Pause on hover/focus to avoid fighting the user
    track.addEventListener('mouseenter', pause);
    track.addEventListener('mouseleave', start);
    track.addEventListener('focusin', pause);
    track.addEventListener('focusout', start);

    // Any user interaction pauses autoplay for a bit
    const userInteracted = () => {
        pause();
        scheduleResume();
    };
    prevBtn.addEventListener('click', userInteracted);
    nextBtn.addEventListener('click', userInteracted);
    track.addEventListener('wheel', userInteracted, { passive: true });
    track.addEventListener('touchstart', userInteracted, { passive: true });
    track.addEventListener('keydown', userInteracted);

    start();
}

// Create technology stack
function createTechStack(lang) {
    // First, ensure all grids are empty
    document.querySelectorAll('.stack-grid').forEach(grid => {
        grid.innerHTML = '';
    });
    
    // Create languages items (combined frontend and backend)
    createStackItems('languages-stack', translations[lang].techStack.languages_items);
    
    // Create tools items
    createStackItems('tools-stack', translations[lang].techStack.tools_items);
    
    // Create libraries items
    createStackItems('libraries-stack', translations[lang].techStack.libraries_items);
}

// Helper function to create stack items
function createStackItems(containerId, items) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    // Clear any existing items
    if (container.children.length > 0) {
        container.innerHTML = '';
    }
    
    items.forEach(item => {
        const stackItem = document.createElement('div');
        stackItem.className = 'stack-item';
        
        stackItem.innerHTML = `
            <i class="${item.icon}"></i>
            <span>${item.name}</span>
        `;
        
        container.appendChild(stackItem);
    });
}

// Create floating technology icons in hero section
function createFloatingIcons() {
    const floatingIconsContainer = document.querySelector('.floating-icons');
    if (!floatingIconsContainer) return;
    
    // Clear any existing icons
    floatingIconsContainer.innerHTML = '';
    
    const icons = [
        'fa-brands fa-python',
        'fa-brands fa-js',
        'fa-brands fa-html5',
        'fa-brands fa-css3-alt',
        'fa-solid fa-database',
        'fa-brands fa-git-alt',
        'fa-solid fa-chart-bar',
        'fa-solid fa-brain',
        'fa-solid fa-code'
    ];
    
    // Generate exactly 15 random floating icons
    const ICON_LIMIT = 15;
    for (let i = 0; i < ICON_LIMIT; i++) {
        const iconIndex = Math.floor(Math.random() * icons.length);
        const size = Math.floor(Math.random() * 30) + 10; // Random size between 10px and 40px
        const left = Math.floor(Math.random() * 90) + 5; // Random left position
        const delay = Math.floor(Math.random() * 5); // Random animation delay
        const duration = Math.floor(Math.random() * 10) + 10; // Random animation duration
        
        const icon = document.createElement('i');
        icon.className = `${icons[iconIndex]} floating-icon`;
        icon.style.fontSize = `${size}px`;
        icon.style.left = `${left}%`;
        icon.style.top = `${Math.floor(Math.random() * 100)}%`;
        icon.style.animationDuration = `${duration}s`;
        icon.style.animationDelay = `${delay}s`;
        
        floatingIconsContainer.appendChild(icon);
    }
    
    // Log the number of icons created (for verification)
    console.log(`Created ${ICON_LIMIT} floating icons`);
}

// Initialize animations
function initializeAnimations() {
    // Typing animation for hero greeting
    initiateTypingAnimation();
    
    // Scroll reveal animations
    initScrollReveal();
    
    // Navbar scroll effect
    initNavbarScroll();
}

// Typing animation for hero greeting
function initiateTypingAnimation() {
    const greeting = document.querySelector('.greeting');
    const originalText = greeting.textContent;
    greeting.textContent = '';
    
    let i = 0;
    const typingSpeed = 100; // milliseconds per character
    
    function typeNextCharacter() {
        if (i < originalText.length) {
            greeting.textContent += originalText.charAt(i);
            i++;
            setTimeout(typeNextCharacter, typingSpeed);
        }
    }
    
    setTimeout(() => {
        typeNextCharacter();
    }, 500);
}

// Initialize scroll reveal animations
function initScrollReveal() {
    const sections = document.querySelectorAll('section');
    
    // Create Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                // Unobserve after revealing
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1, // 10% visibility triggers the animation
        rootMargin: '0px 0px -100px 0px' // Adjust root margin to trigger earlier
    });
    
    // Observe all sections
    sections.forEach(section => {
        section.classList.add('reveal-section');
        observer.observe(section);
    });
}

// Initialize navbar scroll effect
function initNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// Initialize navigation (mobile menu)
function initializeNavigation() {
    const burgerMenu = document.querySelector('.burger-menu');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-links a');
    
    // Toggle mobile menu
    burgerMenu.addEventListener('click', () => {
        burgerMenu.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
    
    // Close mobile menu when clicking a link
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            burgerMenu.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
} 