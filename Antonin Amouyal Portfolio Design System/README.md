# Antonin Amouyal — Portfolio Design System

A design system extracted from Antonin's personal portfolio site. The goal is to **polish the current site** and give it a more unique signature — without a full rebuild. The one brand move we commit to here is **Exon** (user-uploaded display face) used as a signature on the **logo** and the **hero name**. Everything else is the existing live design, documented precisely so you can iterate confidently.

## Sources

- GitHub repo: [anthime24/Portfolio-IA](https://github.com/anthime24/Portfolio-IA) (branch `main`)
- Imported files live under `css/`, `js/`, `assets/images/`.
- Original design spec lives in the repo as `instructions.txt`, content comes from `cv.txt`.
- **Exon** display font: uploaded by the user to `fonts/Exon_Regular.otf`.

## About the owner (for copy tone + positioning)

Antonin Amouyal — student at **Aivancity, la grande Ecole de l'IA et de la Data** (Paris-Cachan, programme grande école AI 2024–2029). Work centres on data engineering, statistical analysis, and ML. Handball coach on the side (discipline, team, stress management — he cites these as transferable skills). Seeking internships in Data / AI.

Recent projects on the site:
- **Gender Equality in Business** — full HR data diagnostic, Python + Power BI (AI Clinic, school project, Sept–Dec 2024).
- **Voicera AI** — video data pipeline + GAN training for a sincerity-detection model (AI Clinic, Jan–Mar 2025).
- **SafeSante** — teleconsultation wait-time prediction + Angular/Spring Boot internal dashboard (internship, Apr–Jul 2025).

The site is bilingual (FR/EN) with a live switcher — copy MUST work in both languages, and French is the primary voice.

---

## Index

| File / folder | What's in it |
|---|---|
| `colors_and_type.css` | All color + type tokens. Import once. |
| `assets/images/` | Logos, profile photo, generated brand artwork. Copied from the portfolio repo. |
| `fonts/` | `Exon_Regular.otf` (brand display, user-uploaded). Poppins loads from Google Fonts. |
| `css/`, `js/` | Full snapshot of the live site's source CSS + JS for reference. |
| `preview/` | HTML cards feeding the Design System tab. |
| `ui_kits/portfolio/` | High-fidelity React recreation of the live portfolio, with the Exon accent applied. |
| `SKILL.md` | Agent-skill manifest, enables this folder to ship as a Claude Code skill. |

---

## CONTENT FUNDAMENTALS

The site runs in **FR and EN** (browser default + localStorage-pinned). French is the primary voice — it's where the owner's voice is strongest and most idiomatic. When in doubt, write FR first, then translate.

### Tone

- **First-person, understated confidence.** "Je mets en pratique mes compétences…" — not bragging, but owning the work.
- **Concrete over abstract.** Every claim lands on a deliverable, a dataset, a tool, or a percentage. *"taux de fidélité de 92 %"*, *"131 hommes / 125 femmes"*, *"≈ €6,814"*.
- **Methodological.** Sections in each project case study are literally titled **Context → Methodology → Results → Recommendations → Skills Developed**. The brand *is* the rigor.
- **Technical-but-readable.** Libraries, methods (ANCOVA, Chi², GAN, XGBoost) appear in body copy, not just as tags. Targeted at recruiters who understand data work.

### Voice examples

> "Actuellement étudiant à Aivancity, je mets en pratique mes compétences à travers des projets concrets qui me permettent d'explorer le pouvoir des données pour résoudre des problèmes réels."

> "Complete professional equality diagnostic on HRIS data from a private company, conducted as part of the AI Clinic collaborative program."

> "Design of a complete video data pipeline for training a deception detection model, combining automated collection, multimodal segmentation and GAN-based synthetic generation."

### Rules of thumb

- **"Je" in FR, "I" in EN.** First person throughout. Never corporate "we" — this is a personal portfolio.
- **Capitalisation:** sentence case for headings (`À propos`, `Projets`, `Stack technique`). Product/library names keep their casing (Python, Power BI, TensorFlow, XGBoost, PostgreSQL, Spring Boot).
- **Dates:** FR months in project cards (`Avril – Juillet 2025`), even in EN copy — a small authentic inflection. Don't sanitise this.
- **Numbers:** always give the unit/denominator (`92 %`, `3 women / 15`, `≈ €6,814`). Bare integers read as noise.
- **No emoji.** The live site has zero emoji. Icons do the lifting (Font Awesome).
- **No marketing fluff.** Avoid "passionate", "dedicated", "results-driven". Replace with the verb + artifact: *"j'ai construit un pipeline de collecte YouTube"*, not *"I'm passionate about data engineering"*.
- **Call-to-action copy is plain:** `Contact Me / Me contacter`, `View My Work / Voir mes travaux`. No exclamation marks.
- **Case-study structure is fixed** and should stay that way across new projects:
  1. **Introduction / Context** — one paragraph of framing.
  2. **Methodology / Technical Methodology** — a bulleted list of steps.
  3. **Results** — bulleted, each bullet is one finding with numbers when possible.
  4. **Recommendations** (for analyses) or **Skills Developed**.

---

## VISUAL FOUNDATIONS

### Palette

- Blue-600 `#2563eb` on white, with `#1f2937` ink and a `#f3f4f6` section band. Verbatim from `css/styles.css`.
- Accent tints of blue at 10 / 12 / 20 / 25 / 40 % alpha (`--accent-10` … `--accent-40`) for subtle fills and borders.
- Hero wash: `linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)` — very light, almost white.

### Type

- **Poppins** (300–700) for everything — hero intro, body, tags, CTAs, nav.
- **Exon** (Regular) used **only** for:
  - The **logo mark** in the navbar (`.pf-logo-mark` → "Antonin A." next to the avatar).
  - The **hero name** (`.pf-name` → the "Antonin Amouyal" inside the `Hi, I'm …` greeting).
- That's the full usage. Section titles, project titles, buttons, body copy all stay Poppins. Exon is a small, intentional signature — not a full display takeover.

### Backgrounds & imagery

- Plain white for hero-adjacent sections, alternating with `#f3f4f6` section band. The hero itself uses the light blue wash above.
- A single circular profile photo, 300×300, framed by a 4px primary-blue border. No lifestyle imagery, no full-bleed heroes.
- Projects render icon + title + meta + context badge — no thumbnails yet.

### Motion

- `transition: all 0.3s ease` everywhere (single global variable).
- Floating Font-Awesome icons drift across the hero over a 15s linear loop.
- `fadeIn` on the job title after 0.5s delay.
- Scroll-reveal adds `.revealed` to each section (opacity 0 → 1, `translateY(30px) → 0`, 0.8s).
- A `blink` caret after the hero greeting.

### Hover & press

- Cards `translateY(-5px)` + shadow upgrade (`--shadow-md` → `--shadow-lg`).
- Links get an animated 2px blue underline sweeping left-to-right.
- Social links `translateY(-3px)` and darken to `--secondary-color`.
- Buttons darken (`primary → secondary`) or gain a 10% blue wash (`secondary`).
- No explicit press states — hover transitions cover the feeling.

### Borders & shadows

- Borders are mostly absent. Accents done with 1px `rgba(0, 0, 0, 0.06)` on project cards, `rgba(37, 99, 235, 0.25)` on carousel nav buttons. Timeline uses a 2px solid primary vertical line.
- Shadows: three tiers — `sm`, `md`, `lg` — all soft black at 10% alpha. Plus a richer `0 5px 15px rgba(0,0,0,0.2)` on the profile photo. No inner shadows, no protection gradients.

### Transparency & blur

- Navbar uses `rgba(255,255,255,0.95)` + `backdrop-filter: blur(10px)` — the one piece of chrome that leans modern.

### Layout

- Fixed navbar, 80px tall, full-width, grid `auto 1fr auto` (logo / links / lang switcher).
- `--container: 1200px`, `0 1.5rem` side padding.
- Sections all `padding: 6rem 0` — that's the master vertical rhythm.
- Section titles centered, with a 50×3px blue underline bar 0.5rem below.
- Projects render in a horizontal **carousel** (3/2/1 cards per view depending on viewport).
- Tech-stack is a 3-column grid (Languages / Tools / Libraries), each cell a square card with an icon above its label.

### Corners

`--radius-sm: 0.25rem`, `--radius-md: 0.5rem`, `--radius-lg: 1rem` (cards), `2rem` pill for tags, `999px` circles. Profile photo is a perfect circle.

### Cards

White surface, 1rem rounding, `--shadow-md`, optional thin border (`rgba(0,0,0,0.06)`), 1.5rem inner padding, hover lifts 5–6px with `--shadow-lg`.

### Spacing

The live site uses ad-hoc `rem` values. We've formalised them: `4 / 8 / 12 / 16 / 20 / 24 / 32 / 48 / 64 / 96 px` → `--space-1 … --space-24`. Section vertical padding is always `--space-24` (6rem); card inner padding is `--space-6` (1.5rem).

### Elevation

Three tiers (`sm / md / lg`, soft black at 10%), plus one special (`profile photo`). Use sparingly — the page should read flat unless an element is interactive.

---

## ICONOGRAPHY

The live site uses **Font Awesome 6.0.0** (free tier) loaded from the `cdnjs` CDN. It's the backbone of every visual element that isn't text or a photo — hero floating icons, project card glyphs, tech-stack cards, timeline markers, CTA prefixes, contact buttons.

**Stay on Font Awesome.** It covers brand marks (Python, AWS, Docker, Angular, LinkedIn) AND semantic icons (microphone, heartbeat, balance-scale) with one include.

```html
<link rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
```

### Usage rules

- **One icon per project card** — expresses the project's domain. `fa-solid fa-balance-scale` (Gender Equality), `fa-solid fa-microphone` (Voicera), `fa-solid fa-heartbeat` (SafeSante). Always `--primary-color`.
- **Tech tags are always icon + label.** Never an unlabelled icon. Use brand marks where they exist (`fa-brands fa-python`, `fa-brands fa-aws`, `fa-brands fa-docker`, `fa-brands fa-angular`) and semantic icons for libraries without one (`fa-solid fa-table` → Pandas, `fa-solid fa-fire` → TensorFlow).
- **Hero floating icons** are a moving bed of `fa-brands` tech logos behind the greeting. Keep sparse — 6–10 icons max, different sizes, opacity 0.7 peak, 15s drift.
- **Timeline markers** are filled blue circles with a white FA glyph centred.
- **No emoji. Ever.** The codebase has zero emoji and the tone is understated — emoji would break the voice.
- **No unicode-character icons** either (no `→`, `•`, etc. as icons). Font Awesome chevrons are used for the carousel navigation (`fa-chevron-left` / `fa-chevron-right`).
- **SVG:** the project has no hand-authored SVG. The logo (`logo_portfolio.png`) and profile (`antonin_photo.png`) are PNGs.

### Logo

The navbar logo pairs the circular illustrated portrait (`assets/images/logo_portfolio.png`) with an **Exon wordmark** "Antonin A." in primary blue. Treat both as brand marks — don't recolor the avatar or substitute a different font for the wordmark.

---

## Font substitutions flagged

- **Poppins** loads directly from Google Fonts — no substitution.
- **Exon** is user-uploaded at `fonts/Exon_Regular.otf`. **Regular 400 only.** If you want a heavier Exon weight (e.g. for a larger hero), upload it and extend the `@font-face` block in `colors_and_type.css`.

No other local font files are checked in.

---

## A CLEAR ASK TO ITERATE

The system now reflects the live site, polished — with Exon as a quiet signature on the logo + hero name. Things I'd love your input on to push further:

1. **Exon usage.** Is the single-accent placement (logo + hero name only) what you had in mind, or do you want Exon to carry a bit more — e.g. section titles, or project card titles? I've deliberately kept it tight.
2. **Logo.** The nav currently shows avatar + "Antonin A." wordmark in Exon. Want that wording tweaked ("AA", full name, initials only)? Want Exon on its own without the avatar?
3. **Missing project thumbnails.** Project cards are icon-only. Three real project visuals would make the biggest visual leap from "clean student portfolio" to "signature site".
4. **Polish targets.** What else on the current site bugs you — the hero wash, the floating icons, the carousel, the section-title underline bar? Point me at the weakest link and I'll iterate.
