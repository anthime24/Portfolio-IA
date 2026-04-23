document.addEventListener('DOMContentLoaded', () => {
    const lang = getLang();
    setupLanguageSwitcher(lang);
    applyTranslations(lang);
    renderProject(lang);
    initNavigation();
});

function getLang() {
    const saved = localStorage.getItem('portfolioLang');
    if (saved && ['en', 'fr'].includes(saved)) return saved;
    return navigator.language && navigator.language.startsWith('fr') ? 'fr' : 'en';
}

function setupLanguageSwitcher(lang) {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
        btn.addEventListener('click', () => {
            const l = btn.getAttribute('data-lang');
            if (l) {
                localStorage.setItem('portfolioLang', l);
                applyTranslations(l);
                renderProject(l);
                document.querySelectorAll('.lang-btn').forEach(b => {
                    b.classList.toggle('active', b.getAttribute('data-lang') === l);
                });
            }
        });
    });
}

function applyTranslations(lang) {
    const t = translations[lang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const val = key.split('.').reduce((o, k) => o?.[k], t);
        if (val) el.textContent = val;
    });
}

function getSlug() {
    const params = new URLSearchParams(window.location.search);
    return params.get('slug') || '';
}

function findProject(lang, slug) {
    const items = translations[lang]?.projects?.items || [];
    return items.find(p => p.slug === slug) || null;
}

function renderProject(lang) {
    const slug = getSlug();
    const project = findProject(lang, slug);
    const container = document.getElementById('project-detail-content');

    if (!project) {
        container.innerHTML = `
            <div class="project-detail-error">
                <p>Projet non trouvé.</p>
                <a href="index.html#projects">Retour aux projets</a>
            </div>
        `;
        const backText = lang === 'fr' ? 'Retour aux projets' : 'Back to projects';
        container.querySelector('a').textContent = backText;
        return;
    }

    const tagsHTML = project.tags.map(t => `
        <span class="project-detail-tag"><i class="${t.icon}"></i>${t.name}</span>
    `).join('');

    let sectionsHTML = '';
    if (project.sections && project.sections.length > 0) {
        sectionsHTML = project.sections.map(section => {
            let body = '';
            if (section.content) {
                body += `<p class="project-section-content">${section.content}</p>`;
            }
            if (section.items && section.items.length > 0) {
                body += `<ul class="project-section-list">${section.items.map(item => `<li>${item}</li>`).join('')}</ul>`;
            }
            return `<div class="project-detail-section-block"><h2 class="project-section-title">${section.title}</h2>${body}</div>`;
        }).join('');
    }

    const pd = translations[lang]?.projectDetail || translations.en.projectDetail;

    container.innerHTML = `
        <article class="project-detail-card">
            <div class="project-detail-header">
                <div class="project-detail-meta">
                    <span class="project-detail-context">${project.context}</span>
                    <span class="project-detail-date"><i class="fas fa-calendar-alt"></i> ${project.date}</span>
                </div>
                <h1 class="project-detail-title"><i class="${project.icon}"></i>${project.title}</h1>
                <p class="project-detail-role">${project.role}</p>
            </div>
            <div class="project-detail-body">
                ${sectionsHTML || `<p class="project-detail-description">${project.description}</p>`}
                <div class="project-detail-tags-section">
                    <p class="project-detail-tags-title">${pd.skills}</p>
                    <div class="project-detail-tags">${tagsHTML}</div>
                </div>
            </div>
        </article>
    `;
}

function initNavigation() {
    const burger = document.querySelector('.burger-menu');
    const nav = document.querySelector('.nav-links');
    if (burger && nav) {
        burger.addEventListener('click', () => {
            burger.classList.toggle('active');
            nav.classList.toggle('active');
        });
        document.querySelectorAll('.nav-links a').forEach(a => {
            a.addEventListener('click', () => {
                burger.classList.remove('active');
                nav.classList.remove('active');
            });
        });
    }
}
