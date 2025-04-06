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
    // Clear timeline items
    const timelineContainer = document.querySelector('.timeline-container');
    if (timelineContainer) {
        // Keep the timeline line element, remove all timeline items
        const timelineLine = timelineContainer.querySelector('.timeline-line');
        timelineContainer.innerHTML = '';
        if (timelineLine) {
            timelineContainer.appendChild(timelineLine);
        } else {
            // If the timeline line was removed, add it back
            const newTimelineLine = document.createElement('div');
            newTimelineLine.className = 'timeline-line';
            timelineContainer.appendChild(newTimelineLine);
        }
    }
    
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
    createExperienceTimeline(lang);
    createProjects(lang);
    createTechStack(lang);
    createFloatingIcons();
}

// Create experience timeline
function createExperienceTimeline(lang) {
    const timelineContainer = document.querySelector('.timeline-container');
    if (!timelineContainer) return;
    
    // Make sure we only have the timeline line in the container
    const timelineItems = timelineContainer.querySelectorAll('.timeline-item');
    if (timelineItems.length > 0) {
        // Timeline items already exist, remove them before adding new ones
        timelineItems.forEach(item => item.remove());
    }
    
    const items = translations[lang].experience.items;
    
    items.forEach((item, index) => {
        // Create timeline item element
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item';
        
        // Create icon based on position
        const icon = index === 0 ? 'fa-solid fa-graduation-cap' : 
                    index === 1 ? 'fa-solid fa-briefcase' : 'fa-solid fa-trophy';
        
        // HTML structure
        timelineItem.innerHTML = `
            <div class="timeline-icon">
                <i class="${icon}"></i>
            </div>
            <div class="timeline-content">
                <div class="timeline-date">${item.date}</div>
                <h3 class="timeline-title">${item.title}</h3>
                <div class="timeline-company">${item.company}</div>
                <p class="timeline-description">${item.description}</p>
            </div>
        `;
        
        timelineContainer.appendChild(timelineItem);
    });
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
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        
        // Create project image section if available
        let imageSection = '';
        if (project.image) {
            imageSection = `
                <div class="project-image">
                    <img src="${project.image}" alt="${project.title}">
                    <div class="project-overlay">
                        <i class="fas fa-eye"></i>
                    </div>
                </div>
            `;
        }
        
        // Create tags HTML
        const tagsHTML = project.tags.map(tag => `
            <div class="project-tag">
                <i class="${tag.icon}"></i>
                <span>${tag.name}</span>
            </div>
        `).join('');
        
        // Create link HTML if available
        let linkHTML = '';
        if (project.link) {
            linkHTML = `
                <a href="${project.link}" target="_blank" class="project-link">
                    <span>${lang === 'en' ? 'View Project' : 'Voir le Projet'}</span>
                    <i class="fas fa-arrow-right"></i>
                </a>
            `;
        }
        
        // HTML structure
        projectCard.innerHTML = `
            ${imageSection}
            <div class="project-content">
                <h3 class="project-title">
                    <i class="${project.icon}"></i>
                    <span>${project.title}</span>
                </h3>
                <p class="project-description">${project.description}</p>
                <div class="project-tags">
                    ${tagsHTML}
                </div>
                ${linkHTML}
            </div>
        `;
        
        projectsGrid.appendChild(projectCard);
    });
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