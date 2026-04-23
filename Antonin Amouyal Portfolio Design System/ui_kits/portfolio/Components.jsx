const { useState, useEffect, useRef } = React;

/* ============================================================
   Navbar — adds theme toggle
   ============================================================ */
function Navbar({ lang, setLang, theme, setTheme }) {
  const d = window.__data;
  return (
    <nav className="pf-nav">
      <div className="pf-container pf-nav-inner">
        <a href="#" className="pf-logo">
          <img src="../../assets/logo_portfolio.png" alt="" />
          <span className="pf-logo-mark">Antonin A.</span>
        </a>
        <ul className="pf-nav-links">
          <li><a href="#about">{d.nav.about}</a></li>
          <li><a href="#projects">{d.nav.projects}</a></li>
          <li><a href="#tech">{d.nav.techStack}</a></li>
          <li><a href="#contact">{d.nav.contact}</a></li>
        </ul>
        <div className="pf-nav-right">
          <button
            className="pf-theme-toggle"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            aria-label="Toggle theme"
            title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            <i className={`pf-tt-icon fa-solid ${theme === 'dark' ? 'fa-sun' : 'fa-moon'}`}></i>
          </button>
          <div className="pf-lang">
            <button className={lang==='en'?'active':''} onClick={()=>setLang('en')}>EN</button>
            <button className={lang==='fr'?'active':''} onClick={()=>setLang('fr')}>FR</button>
          </div>
        </div>
      </div>
    </nav>
  );
}

/* ============================================================
   Typewriter helpers
   ============================================================ */
function useTypewriter(text, speed = 60, startDelay = 200) {
  const [out, setOut] = useState('');
  const [done, setDone] = useState(false);
  useEffect(() => {
    setOut(''); setDone(false);
    let i = 0;
    const start = setTimeout(function tick() {
      if (i <= text.length) {
        setOut(text.slice(0, i));
        i++;
        setTimeout(tick, speed);
      } else {
        setDone(true);
      }
    }, startDelay);
    return () => clearTimeout(start);
  }, [text, speed, startDelay]);
  return [out, done];
}

function JobCycler({ titles, start }) {
  const [idx, setIdx] = useState(0);
  const [phase, setPhase] = useState('typing'); // typing | holding | deleting
  const [text, setText] = useState('');

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

/* ============================================================
   Hero
   ============================================================ */
function Hero() {
  const d = window.__data;
  const icons = ['fa-brands fa-python','fa-brands fa-docker','fa-solid fa-database','fa-brands fa-aws','fa-solid fa-chart-line','fa-brands fa-github','fa-solid fa-fire','fa-brands fa-angular'];
  const [typed, doneTyping] = useTypewriter(d.hero.greeting, 55, 300);

  return (
    <section id="hero" className="pf-hero">
      <div className="pf-floating" aria-hidden="true">
        {icons.map((c,i)=>(
          <i key={i} className={`pf-float-icon ${c}`} style={{
            left: `${(i*13+5)%90}%`,
            top:  `${(i*23+8)%80}%`,
            fontSize: `${18 + (i%4)*8}px`,
            animationDelay: `${i*1.3}s`,
            animationDuration: `${12 + i%5}s`
          }}/>
        ))}
      </div>
      <div className="pf-container pf-hero-content">
        <h1 className="pf-greeting">
          {/* Render typed text; wrap the name span once we've passed "Hi, I'm " */}
          {renderGreeting(typed, d.hero.greeting)}
          {!doneTyping && <span className="pf-cursor-blink" />}
        </h1>
        <h2 className="pf-job">
          <JobCycler titles={d.hero.jobTitles} start={doneTyping} />
        </h2>
        <p className="pf-loc"><i className="fa-solid fa-map-marker-alt"></i> {d.hero.location}</p>
        <div className="pf-cta">
          <a className="pf-btn pf-btn-primary" href="#contact">{d.hero.contactBtn}</a>
          <a className="pf-btn pf-btn-ghost"   href="#projects">{d.hero.workBtn}</a>
        </div>
      </div>
    </section>
  );
}

function renderGreeting(typed, full) {
  // Split at "I'm " so anything after that renders in Exon face.
  const splitAt = full.indexOf("I'm ") + 4; // index of 'A' in Antonin
  if (typed.length <= splitAt) {
    return <span>{typed}</span>;
  }
  const prefix = typed.slice(0, splitAt);
  const name = typed.slice(splitAt);
  return (
    <>
      <span>{prefix}</span>
      <span className="pf-name">{name}</span>
    </>
  );
}

/* ============================================================
   Section Title with hand-drawn underline
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
   About
   ============================================================ */
function About() {
  const d = window.__data;
  return (
    <section id="about" className="pf-about">
      <div className="pf-container">
        <SectionTitle>{d.about.title}</SectionTitle>
        <div className="pf-about-grid">
          <div className="pf-profile"><img src="../../assets/antonin_photo.png" alt="Antonin Amouyal" /></div>
          <div className="pf-about-text">
            <p>{d.about.p1}</p>
            <p>{d.about.p2}</p>
            <div className="pf-social">
              <a href="#" aria-label="LinkedIn"><i className="fa-brands fa-linkedin"></i></a>
              <a href="#" aria-label="Email"><i className="fa-solid fa-envelope"></i></a>
              <a href="#" aria-label="GitHub"><i className="fa-brands fa-github"></i></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   Animated counter — runs from 0 to value when in view
   ============================================================ */
function Counter({ value, suffix = '', duration = 1400, trigger }) {
  const [display, setDisplay] = useState(0);
  useEffect(() => {
    if (!trigger) return;
    const startT = performance.now();
    let raf;
    const tick = (t) => {
      const p = Math.min(1, (t - startT) / duration);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(Math.round(eased * value));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [value, duration, trigger]);
  return <>{display}{suffix}</>;
}

/* ============================================================
   Project Card — with counters + click to open modal
   ============================================================ */
function ProjectCard({ p, onOpen }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setInView(true); obs.disconnect(); }
    }, { threshold: 0.35 });
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <a
      ref={ref}
      href="#"
      className="pf-project-card"
      data-pf-hover
      onClick={(e) => { e.preventDefault(); onOpen(p); }}
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
        <div className="pf-pc-tags">{p.tags.slice(0,3).map((t,k)=><span key={k} className="pf-tag"><i className={t.i}></i>{t.n}</span>)}</div>
        {p.stats && (
          <div className="pf-pc-stats">
            {p.stats.slice(0, 3).map((s, k) => (
              <div key={k} className="pf-pc-stat">
                <span className="pf-pc-stat-val">
                  <Counter value={s.value} suffix={s.suffix || ''} trigger={inView} />
                </span>
                <span className="pf-pc-stat-lbl">{s.label}</span>
              </div>
            ))}
          </div>
        )}
        <div className="pf-pc-meta"><i className="fa-regular fa-calendar"></i> {p.date}</div>
        <i className="pf-pc-arrow fa-solid fa-arrow-right"></i>
      </div>
    </a>
  );
}

/* ============================================================
   Project Modal
   ============================================================ */
function ProjectModal({ project, onClose }) {
  const [closing, setClosing] = useState(false);
  const overlayRef = useRef(null);

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') handleClose(); };
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
      onClick={(e) => { if (e.target === overlayRef.current) handleClose(); }}
    >
      <div className="pf-modal" role="dialog" aria-labelledby="pf-modal-title">
        <div className="pf-modal-hero">
          {p.image && <img src={p.image} alt="" />}
          <button className="pf-modal-close" onClick={handleClose} aria-label="Close">
            <i className="fa-solid fa-xmark"></i>
          </button>
          <div className="pf-modal-hero-text">
            <h3 id="pf-modal-title">{p.title}</h3>
            <span className="pf-modal-badge">{p.context} · {p.date}</span>
          </div>
        </div>
        <div className="pf-modal-body">
          <div>
            <h4>Overview</h4>
            <p className="pf-modal-summary">{p.summary}</p>
            {p.role_detail && <p className="pf-modal-role">{p.role_detail}</p>}
            <h4>What I did</h4>
            <ul className="pf-modal-highlights">
              {(p.highlights || []).map((h, k) => <li key={k}>{h}</li>)}
            </ul>
          </div>
          <div className="pf-modal-side">
            {p.stats && (
              <div>
                <h4>Key numbers</h4>
                <div className="pf-modal-stat-grid">
                  {p.stats.map((s, k) => (
                    <div key={k} className="pf-modal-stat">
                      <div className="pf-modal-stat-val">
                        <Counter value={s.value} suffix={s.suffix || ''} trigger={true} duration={1000 + k * 200} />
                      </div>
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
   Projects section
   ============================================================ */
function Projects({ onOpen }) {
  const d = window.__data;
  return (
    <section id="projects" className="pf-projects">
      <div className="pf-container">
        <SectionTitle>{d.projects.title}</SectionTitle>
        <div className="pf-projects-grid">
          {d.projects.items.map((p) => <ProjectCard key={p.slug} p={p} onOpen={onOpen} />)}
        </div>
      </div>
    </section>
  );
}

function TechStack() {
  const d = window.__data;
  return (
    <section id="tech" className="pf-tech">
      <div className="pf-container">
        <SectionTitle>{d.techStack.title}</SectionTitle>
        <div className="pf-tech-groups">
          {d.techStack.groups.map(g => (
            <div key={g.title} className="pf-tech-group">
              <h3>{g.title}</h3>
              <div className="pf-tech-grid">
                {g.items.map(x => (
                  <div key={x.n} className="pf-stack-item"><i className={x.i}></i><span>{x.n}</span></div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const d = window.__data;
  return (
    <section id="contact" className="pf-contact">
      <div className="pf-container">
        <SectionTitle>{d.contact.title}</SectionTitle>
        <div className="pf-contact-buttons">
          <a className="pf-btn pf-btn-primary" href="#"><i className="fa-solid fa-envelope"></i> {d.contact.email}</a>
          <a className="pf-btn pf-btn-ghost" href="#"><i className="fa-brands fa-linkedin"></i> {d.contact.linkedin}</a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return <footer className="pf-footer"><div className="pf-container">{window.__data.footer}</div></footer>;
}

/* ============================================================
   Scroll progress bar
   ============================================================ */
function ScrollProgress() {
  const ref = useRef(null);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const scrolled = h.scrollTop || document.body.scrollTop;
      const height = h.scrollHeight - h.clientHeight;
      const pct = height > 0 ? (scrolled / height) * 100 : 0;
      if (ref.current) ref.current.style.width = pct + '%';
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return <div ref={ref} className="pf-progress" />;
}

/* ============================================================
   Custom cursor — soft-follow
   ============================================================ */
function CustomCursor() {
  const ref = useRef(null);
  const target = useRef({ x: -100, y: -100 });
  const pos = useRef({ x: -100, y: -100 });
  const raf = useRef(null);

  useEffect(() => {
    // Detect touch — skip on touch-only devices
    const isFine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (!isFine) return;
    document.body.classList.add('pf-has-cursor');

    const onMove = (e) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
    };
    const onOver = (e) => {
      const t = e.target;
      if (!ref.current) return;
      if (t.closest('a, button, .pf-project-card, .pf-stack-item, [data-pf-hover]')) {
        ref.current.classList.add('pf-cursor--hover');
      } else {
        ref.current.classList.remove('pf-cursor--hover');
      }
    };
    const onDown = () => ref.current && ref.current.classList.add('pf-cursor--press');
    const onUp   = () => ref.current && ref.current.classList.remove('pf-cursor--press');

    const loop = () => {
      pos.current.x += (target.current.x - pos.current.x) * 0.22;
      pos.current.y += (target.current.y - pos.current.y) * 0.22;
      if (ref.current) {
        ref.current.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px) translate(-50%, -50%)`;
      }
      raf.current = requestAnimationFrame(loop);
    };
    raf.current = requestAnimationFrame(loop);

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseover', onOver);
    window.addEventListener('mousedown', onDown);
    window.addEventListener('mouseup', onUp);
    return () => {
      cancelAnimationFrame(raf.current);
      document.body.classList.remove('pf-has-cursor');
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseover', onOver);
      window.removeEventListener('mousedown', onDown);
      window.removeEventListener('mouseup', onUp);
    };
  }, []);

  return <div ref={ref} className="pf-cursor" aria-hidden="true" />;
}

Object.assign(window, {
  Navbar, Hero, About, Projects, TechStack, Contact, Footer,
  ProjectModal, ScrollProgress, CustomCursor
});
