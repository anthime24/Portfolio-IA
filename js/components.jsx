// ============================================================
//  Antonin Amouyal — Portfolio React components
//  Design system: Exon on .pf-logo-mark + .pf-name only
// ============================================================

const { useState, useEffect, useRef } = React;

/* ============================================================
   SCROLL PROGRESS BAR
   ============================================================ */
function ScrollProgress() {
  const ref = useRef(null);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const scrolled = h.scrollTop || document.body.scrollTop;
      const height = h.scrollHeight - h.clientHeight;
      if (ref.current) ref.current.style.width = (height > 0 ? (scrolled / height) * 100 : 0) + '%';
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return <div ref={ref} className="pf-progress" />;
}

/* CustomCursor supprimé — curseur système par défaut conservé */

/* ============================================================
   NAVBAR
   ============================================================ */
function Navbar({ d, lang, setLang, theme, setTheme, mobileOpen, setMobileOpen }) {
  return (
    <>
      <nav className="pf-nav">
        <div className="pf-container pf-nav-inner">
          <a href="#hero" className="pf-logo">
            <img src="assets/images/logo_portfolio.png" alt="Antonin Amouyal" />
            <span className="pf-logo-mark">Antonin A.</span>
          </a>

          <ul className="pf-nav-links">
            <li><a href="#about"    onClick={() => setMobileOpen(false)}>{d.nav.about}</a></li>
            <li><a href="#projects" onClick={() => setMobileOpen(false)}>{d.nav.projects}</a></li>
            <li><a href="#tech"     onClick={() => setMobileOpen(false)}>{d.nav.techStack}</a></li>
            <li><a href="#contact"  onClick={() => setMobileOpen(false)}>{d.nav.contact}</a></li>
          </ul>

          <div className="pf-nav-right">
            <button
              className="pf-theme-toggle"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              aria-label="Toggle dark mode"
              title={theme === 'dark' ? 'Light mode' : 'Dark mode'}
            >
              <i className={`fa-solid ${theme === 'dark' ? 'fa-sun' : 'fa-moon'}`}></i>
            </button>
            <div className="pf-lang">
              <button className={lang === 'en' ? 'active' : ''} onClick={() => setLang('en')}>EN</button>
              <button className={lang === 'fr' ? 'active' : ''} onClick={() => setLang('fr')}>FR</button>
            </div>
            <button
              className={`pf-burger ${mobileOpen ? 'open' : ''}`}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menu"
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div className={`pf-mobile-nav ${mobileOpen ? 'open' : ''}`}>
        <a href="#about"    onClick={() => setMobileOpen(false)}>{d.nav.about}</a>
        <a href="#projects" onClick={() => setMobileOpen(false)}>{d.nav.projects}</a>
        <a href="#tech"     onClick={() => setMobileOpen(false)}>{d.nav.techStack}</a>
        <a href="#contact"  onClick={() => setMobileOpen(false)}>{d.nav.contact}</a>
      </div>
    </>
  );
}

/* ============================================================
   TYPEWRITER helpers
   ============================================================ */
function useTypewriter(text, speed = 60, startDelay = 200) {
  const [out, setOut] = useState('');
  const [done, setDone] = useState(false);
  useEffect(() => {
    setOut(''); setDone(false);
    let i = 0;
    const start = setTimeout(function tick() {
      if (i <= text.length) {
        setOut(text.slice(0, i++));
        setTimeout(tick, speed);
      } else {
        setDone(true);
      }
    }, startDelay);
    return () => clearTimeout(start);
  }, [text]);
  return [out, done];
}

function JobCycler({ titles, start }) {
  const [idx, setIdx]     = useState(0);
  const [phase, setPhase] = useState('typing');
  const [text, setText]   = useState('');

  useEffect(() => {
    if (!start) return;
    const current = titles[idx];
    let timer;
    if (phase === 'typing') {
      if (text.length < current.length) {
        timer = setTimeout(() => setText(current.slice(0, text.length + 1)), 70);
      } else {
        timer = setTimeout(() => setPhase('holding'), 1400);
      }
    } else if (phase === 'holding') {
      timer = setTimeout(() => setPhase('deleting'), 200);
    } else if (phase === 'deleting') {
      if (text.length > 0) {
        timer = setTimeout(() => setText(current.slice(0, text.length - 1)), 35);
      } else {
        setPhase('typing');
        setIdx((idx + 1) % titles.length);
      }
    }
    return () => clearTimeout(timer);
  }, [text, phase, idx, titles, start]);

  return (
    <>
      <span className="pf-job-text">{text || '\u00A0'}</span>
      <span className="pf-job-caret" />
    </>
  );
}

function renderGreeting(typed, full) {
  // Split before "Antonin" — works for both EN and FR greetings
  const nameStart = full.indexOf('Antonin');
  if (nameStart === -1 || typed.length <= nameStart) {
    return <span>{typed}</span>;
  }
  return (
    <>
      <span>{typed.slice(0, nameStart)}</span>
      <span className="pf-name">{typed.slice(nameStart)}</span>
    </>
  );
}

/* ============================================================
   HERO
   ============================================================ */
function Hero({ d }) {
  const icons = [
    'fa-brands fa-python','fa-brands fa-docker','fa-solid fa-database',
    'fa-brands fa-aws','fa-solid fa-chart-line','fa-brands fa-github',
    'fa-solid fa-fire','fa-brands fa-angular'
  ];
  const [typed, doneTyping] = useTypewriter(d.hero.greeting, 55, 300);

  return (
    <section id="hero" className="pf-hero">
      <div className="pf-floating" aria-hidden="true">
        {icons.map((cls, i) => (
          <i key={i} className={`pf-float-icon ${cls}`} style={{
            left: `${(i * 13 + 5) % 90}%`,
            top:  `${(i * 23 + 8) % 80}%`,
            fontSize: `${18 + (i % 4) * 8}px`,
            animationDelay:    `${i * 1.3}s`,
            animationDuration: `${12 + i % 5}s`
          }} />
        ))}
      </div>

      <div className="pf-container pf-hero-content">
        <h1 className="pf-greeting">
          {renderGreeting(typed, d.hero.greeting)}
          {!doneTyping && <span className="pf-cursor-blink" />}
        </h1>
        <h2 className="pf-job">
          <JobCycler titles={d.hero.jobTitles} start={doneTyping} />
        </h2>
        <p className="pf-loc">
          <i className="fa-solid fa-location-dot"></i> {d.hero.location}
        </p>
        <div className="pf-cta">
          <a className="pf-btn pf-btn-primary" href="#contact">{d.hero.contactBtn}</a>
          <a className="pf-btn pf-btn-ghost"   href="#projects">{d.hero.workBtn}</a>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   SECTION TITLE — animated hand-drawn underline
   ============================================================ */
function SectionTitle({ children }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setInView(true); obs.disconnect(); }
    }, { threshold: 0.5 });
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <div className="pf-section-title-wrap">
      <h2 ref={ref} className={`pf-section-title ${inView ? 'pf-in-view' : ''}`}>
        {children}
        <svg className="pf-title-underline" viewBox="0 0 300 12" preserveAspectRatio="none" aria-hidden="true">
          <path d="M 4 7 Q 60 1, 120 5 T 240 6 T 296 4" />
        </svg>
      </h2>
    </div>
  );
}

/* ============================================================
   ABOUT
   ============================================================ */
function About({ d }) {
  return (
    <section id="about" className="pf-about pf-reveal">
      <div className="pf-container">
        <SectionTitle>{d.about.title}</SectionTitle>
        <div className="pf-about-grid">
          <div className="pf-profile">
            <img src="assets/images/antonin_photo.png" alt="Antonin Amouyal" />
          </div>
          <div className="pf-about-text">
            <p>{d.about.p1}</p>
            <p>{d.about.p2}</p>
            <div className="pf-social">
              <a href="https://www.linkedin.com/in/antonin--amouyal" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="mailto:antoninamouyal2@gmail.com" aria-label="Email">
                <i className="fa-solid fa-envelope"></i>
              </a>
              <a href="https://github.com/anthime24" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <i className="fa-brands fa-github"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   ANIMATED COUNTER
   ============================================================ */
function Counter({ value, suffix = '', duration = 1400, trigger }) {
  const [display, setDisplay] = useState(0);
  useEffect(() => {
    if (!trigger) return;
    const startT = performance.now();
    let raf;
    const tick = t => {
      const p      = Math.min(1, (t - startT) / duration);
      const eased  = 1 - Math.pow(1 - p, 3);
      setDisplay(Math.round(eased * value));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [value, duration, trigger]);
  return <>{display}{suffix}</>;
}

/* ============================================================
   PROJECT CARD
   ============================================================ */
function ProjectCard({ p, onOpen }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setInView(true); obs.disconnect(); }
    }, { threshold: 0.3 });
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  // Coming-soon placeholder card
  if (p.comingSoon) {
    return (
      <div ref={ref} className="pf-project-card pf-card-soon">
        <div className="pf-card-soon-inner">
          <div className="pf-card-soon-icon"><i className="fa-solid fa-hourglass-half"></i></div>
          <div className="pf-card-soon-label">{p.title}</div>
        </div>
      </div>
    );
  }

  return (
    <a
      ref={ref}
      href="#"
      className="pf-project-card"
      onClick={e => { e.preventDefault(); onOpen(p); }}
    >
      {p.image && (
        <div className="pf-pc-image">
          <img src={p.image} alt="" loading="lazy" />
        </div>
      )}
      <div className="pf-pc-body">
        <div className="pf-pc-header">
          <i className={`pf-pc-icon ${p.icon}`}></i>
          <span className="pf-pc-badge">{p.context}</span>
        </div>
        <h3 className="pf-pc-title">{p.title}</h3>
        <p className="pf-pc-role">{p.role}</p>
        <div className="pf-pc-tags">
          {p.tags.slice(0, 3).map((t, k) => (
            <span key={k} className="pf-tag"><i className={t.i}></i>{t.n}</span>
          ))}
        </div>
        {p.description && <p className="pf-pc-desc">{p.description}</p>}
        <div className="pf-pc-meta"><i className="fa-regular fa-calendar"></i> {p.date}</div>
        <i className="pf-pc-arrow fa-solid fa-arrow-right"></i>
      </div>
    </a>
  );
}

/* ============================================================
   PROJECT MODAL
   ============================================================ */
function ProjectModal({ project, onClose }) {
  const [closing, setClosing] = useState(false);
  const overlayRef = useRef(null);

  useEffect(() => {
    const onKey = e => { if (e.key === 'Escape') handleClose(); };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, []);

  const handleClose = () => {
    setClosing(true);
    setTimeout(onClose, 220);
  };

  if (!project) return null;
  const p = project;

  return (
    <div
      ref={overlayRef}
      className={`pf-modal-overlay ${closing ? 'pf-closing' : ''}`}
      onClick={e => { if (e.target === overlayRef.current) handleClose(); }}
    >
      <div className="pf-modal" role="dialog" aria-modal="true" aria-labelledby="pf-modal-title">
        <div className="pf-modal-hero">
          {p.image
            ? <img src={p.image} alt="" />
            : <div style={{ width:'100%', height:'100%', background:'var(--bg-2)', display:'flex', alignItems:'center', justifyContent:'center' }}>
                <i className={p.icon} style={{ fontSize:'4rem', color:'var(--primary-color)', opacity:.4 }}></i>
              </div>
          }
          <button className="pf-modal-close" onClick={handleClose} aria-label="Fermer">
            <i className="fa-solid fa-xmark"></i>
          </button>
          <div className="pf-modal-hero-text">
            <h3 id="pf-modal-title">{p.title}</h3>
            <span className="pf-modal-badge">{p.context} · {p.date}</span>
          </div>
        </div>

        <div className="pf-modal-body">
          {/* Left column — content */}
          <div>
            <h4>Overview</h4>
            <p className="pf-modal-summary">{p.description}</p>
            <p className="pf-modal-role">{p.role}</p>

            {p.sections && p.sections.length > 0 && (
              <div className="pf-modal-sections">
                {p.sections.map((sec, i) => (
                  <div key={i} className="pf-modal-section">
                    <div className="pf-modal-section-title">{sec.title}</div>
                    {sec.content
                      ? <p className="pf-modal-section-text">{sec.content}</p>
                      : sec.items && (
                        <ul className="pf-modal-section-list">
                          {sec.items.map((item, j) => <li key={j}>{item}</li>)}
                        </ul>
                      )
                    }
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right column — stats + stack */}
          <div className="pf-modal-side">
            {p.stats && (
              <div>
                <h4>Key numbers</h4>
                <div className="pf-modal-stat-grid">
                  {p.stats.map((s, k) => (
                    <div key={k} className="pf-modal-stat">
                      <span className="pf-modal-stat-val">
                        <Counter value={s.value} suffix={s.suffix || ''} trigger={true} duration={1000 + k * 200} />
                      </span>
                      <span className="pf-modal-stat-lbl">{s.label}</span>
                      {s.compare && <span className="pf-modal-stat-cmp">{s.compare}</span>}
                    </div>
                  ))}
                </div>
              </div>
            )}
            <div>
              <h4>Stack</h4>
              <div className="pf-modal-chips">
                {p.tags.map((t, k) => (
                  <span key={k} className="pf-modal-chip"><i className={t.i}></i>{t.n}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   PROJECTS SECTION — auto-scroll 5 s, flèches latérales
   ============================================================ */
function Projects({ d, onOpen }) {
  const sectionRef  = useRef(null);
  const gridRef     = useRef(null);
  const inView      = useRef(false);
  const cardIndex   = useRef(0);
  const timerRef    = useRef(null);

  // Scroll le carousel sans toucher à la page
  const scrollToCard = (index) => {
    const el = gridRef.current;
    if (!el) return;
    const cards = el.querySelectorAll('.pf-project-card');
    if (!cards.length) return;
    const i = ((index % cards.length) + cards.length) % cards.length;
    cardIndex.current = i;
    const card = cards[i];
    el.scrollTo({ left: card.offsetLeft - el.offsetLeft, behavior: 'smooth' });
  };

  const prev = () => scrollToCard(cardIndex.current - 1);
  const next = () => scrollToCard(cardIndex.current + 1);

  useEffect(() => {
    const el    = gridRef.current;
    const sec   = sectionRef.current;
    if (!el || !sec) return;

    // Observer : détecte si la section est visible à l'écran
    const visObs = new IntersectionObserver(
      ([e]) => { inView.current = e.isIntersecting; },
      { threshold: 0.2 }
    );
    visObs.observe(sec);

    // Démarre (ou redémarre) un timer de 5 s
    const startTimer = () => {
      clearTimeout(timerRef.current);
      timerRef.current = setTimeout(function tick() {
        if (inView.current) scrollToCard(cardIndex.current + 1);
        timerRef.current = setTimeout(tick, 5000);
      }, 5000);
    };

    // Arrête le timer sans le relancer
    const stopTimer = () => clearTimeout(timerRef.current);

    // Survol → stop ; départ → repart de 0
    const onEnter = () => stopTimer();
    const onLeave = () => startTimer();

    el.addEventListener('mouseenter', onEnter);
    el.addEventListener('mouseleave', onLeave);
    el.addEventListener('touchstart', onEnter, { passive: true });
    el.addEventListener('touchend',   onLeave, { passive: true });

    startTimer(); // démarre immédiatement

    return () => {
      stopTimer();
      visObs.disconnect();
      el.removeEventListener('mouseenter', onEnter);
      el.removeEventListener('mouseleave', onLeave);
      el.removeEventListener('touchstart', onEnter);
      el.removeEventListener('touchend',   onLeave);
    };
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="pf-projects pf-reveal">
      <div className="pf-container">
        <SectionTitle>{d.projects.title}</SectionTitle>
        <div className="pf-projects-track-wrap">
          {/* Flèche gauche */}
          <button className="pf-carousel-btn pf-carousel-prev" onClick={prev} aria-label="Projet précédent">
            <i className="fa-solid fa-chevron-left"></i>
          </button>

          <div ref={gridRef} className="pf-projects-grid">
            {d.projects.items.map(p => (
              <ProjectCard key={p.slug} p={p} onOpen={onOpen} />
            ))}
          </div>

          {/* Flèche droite */}
          <button className="pf-carousel-btn pf-carousel-next" onClick={next} aria-label="Projet suivant">
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   TECH STACK
   ============================================================ */
function TechStack({ d }) {
  return (
    <section id="tech" className="pf-tech pf-reveal">
      <div className="pf-container">
        <SectionTitle>{d.techStack.title}</SectionTitle>
        <div className="pf-tech-groups">
          {d.techStack.groups.map(g => (
            <div key={g.title} className="pf-tech-group">
              <h3>{g.title}</h3>
              <div className="pf-tech-grid">
                {g.items.map(x => (
                  <div key={x.n} className="pf-stack-item">
                    <i className={x.i}></i>
                    <span>{x.n}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   CONTACT
   ============================================================ */
function Contact({ d }) {
  return (
    <section id="contact" className="pf-contact pf-reveal">
      <div className="pf-container">
        <SectionTitle>{d.contact.title}</SectionTitle>
        <div className="pf-contact-buttons">
          <a className="pf-btn pf-btn-primary" href="mailto:antoninamouyal2@gmail.com">
            <i className="fa-solid fa-envelope"></i> {d.contact.email}
          </a>
          <a className="pf-btn pf-btn-ghost" href="https://www.linkedin.com/in/antonin--amouyal" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-linkedin"></i> {d.contact.linkedin}
          </a>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   FOOTER
   ============================================================ */
function Footer({ d }) {
  return (
    <footer className="pf-footer">
      <div className="pf-container">{d.footer}</div>
    </footer>
  );
}

/* ============================================================
   SCROLL REVEAL — watches .pf-reveal elements
   ============================================================ */
function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.pf-reveal');
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('pf-visible');
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.15 });
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

/* ============================================================
   APP ROOT
   ============================================================ */
function App() {
  const [lang, setLang] = useState(() => localStorage.getItem('pf-lang') || 'en');
  const [theme, setTheme] = useState(() => localStorage.getItem('pf-theme') || 'light');
  const [openProject, setOpenProject] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('pf-dark', theme === 'dark');
    localStorage.setItem('pf-theme', theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('pf-lang', lang);
    document.documentElement.lang = lang;
  }, [lang]);

  useScrollReveal();

  const d = window.__i18n[lang];

  return (
    <>
      <ScrollProgress />
      <Navbar
        d={d}
        lang={lang} setLang={setLang}
        theme={theme} setTheme={setTheme}
        mobileOpen={mobileOpen} setMobileOpen={setMobileOpen}
      />
      <Hero d={d} />
      <About d={d} />
      <Projects d={d} onOpen={setOpenProject} />
      <TechStack d={d} />
      <Contact d={d} />
      <Footer d={d} />
      {openProject && <ProjectModal project={openProject} onClose={() => setOpenProject(null)} />}
    </>
  );
}

// Mount the app
ReactDOM.createRoot(document.getElementById('root')).render(<App />);
