// Minimal content extracted from translations.js — EN + project data
window.__data = {
  nav: { about: "About", projects: "Projects", techStack: "Tech Stack", contact: "Contact" },
  hero: {
    greeting: "Hi, I'm Antonin Amouyal",
    jobTitles: ["AI & Data Student", "Data Analyst", "ML Engineer", "Full-Stack Builder"],
    location: "Paris, France",
    contactBtn: "Contact Me",
    workBtn: "View My Work"
  },
  about: {
    title: "About Me",
    p1: "Currently a student at Aivancity, I apply my skills through concrete projects that let me explore the power of data to solve real problems. My education deepens my knowledge in AI, data science and machine learning through a hands-on, team-based approach.",
    p2: "My goal is to keep developing my skills in AI and data analysis while staying open to new opportunities in areas I care about — technological innovation and entrepreneurship."
  },
  projects: {
    title: "Projects",
    items: [
      {
        slug: "gender-equality",
        image: "../../assets/project_images/gender-equality.svg",
        title: "Gender Equality in Business",
        icon: "fa-solid fa-balance-scale",
        role: "Data Analyst",
        date: "Sep – Dec 2024",
        context: "School Project",
        tags: [{n:"Python",i:"fa-brands fa-python"},{n:"Pandas",i:"fa-solid fa-table"},{n:"Power BI",i:"fa-solid fa-chart-bar"}],
        summary: "A data-driven analysis of gender representation across 40+ French companies, surfacing pay gaps and leadership imbalances through a Power BI dashboard.",
        stats: [
          { value: 42, suffix: "", label: "Companies analyzed" },
          { value: 17, suffix: "%", label: "Avg pay gap surfaced" },
          { value: 6, suffix: "", label: "Dashboard views" }
        ],
        highlights: [
          "Scraped public company data using Python and BeautifulSoup",
          "Cleaned and joined 12+ datasets with Pandas",
          "Built an interactive Power BI dashboard with 6 focused views",
          "Presented findings to a jury of 4 evaluators"
        ],
        role_detail: "Lead data analyst in a team of 3 — owned the pipeline from scraping to dashboard."
      },
      {
        slug: "voicera",
        image: "../../assets/project_images/voicera.svg",
        title: "Voicera AI",
        icon: "fa-solid fa-microphone",
        role: "Data & ML Engineer",
        date: "Jan – Mar 2025",
        context: "School Project",
        tags: [{n:"Python",i:"fa-brands fa-python"},{n:"TensorFlow",i:"fa-solid fa-fire"},{n:"MediaPipe",i:"fa-solid fa-video"},{n:"OpenCV",i:"fa-solid fa-eye"}],
        summary: "A real-time sign-language recognition system that converts hand gestures into text using a CNN trained on a curated dataset of 40 signs.",
        stats: [
          { value: 92, suffix: "%", label: "Model accuracy" },
          { value: 40, suffix: "", label: "Signs recognized" },
          { value: 30, suffix: " fps", label: "Live inference" }
        ],
        highlights: [
          "Built a labeled dataset from scratch with MediaPipe landmarks",
          "Trained a CNN in TensorFlow, tuning architecture through 20+ runs",
          "Deployed a real-time OpenCV pipeline running at 30 fps",
          "Wrote a technical report and demoed live to the class"
        ],
        role_detail: "Data & ML engineer in a team of 4 — owned the model architecture and training loop."
      },
      {
        slug: "safesante",
        image: "../../assets/project_images/safesante.svg",
        title: "SafeSante",
        icon: "fa-solid fa-heartbeat",
        role: "Full-Stack & ML",
        date: "Apr – Jul 2025",
        context: "Internship",
        tags: [{n:"Python",i:"fa-brands fa-python"},{n:"XGBoost",i:"fa-solid fa-robot"},{n:"Angular",i:"fa-brands fa-angular"},{n:"Spring Boot",i:"fa-solid fa-leaf"},{n:"PostgreSQL",i:"fa-solid fa-database"},{n:"Docker",i:"fa-brands fa-docker"}],
        summary: "An end-to-end patient-risk scoring platform: XGBoost model served via Spring Boot, Angular dashboard for clinicians, fully dockerized.",
        stats: [
          { value: 131, suffix: "", label: "Patients in cohort", compare: "vs 125 baseline" },
          { value: 89, suffix: "%", label: "AUC score" },
          { value: 23, suffix: " min", label: "Avg time saved" }
        ],
        highlights: [
          "Engineered 40+ features from raw EHR data with Pandas",
          "Trained and validated an XGBoost classifier (89% AUC)",
          "Built a Spring Boot API with JWT authentication",
          "Shipped an Angular dashboard with real-time risk visualization",
          "Packaged the whole stack with Docker Compose"
        ],
        role_detail: "Full-stack & ML intern — sole engineer on the prototype, reporting to the CTO."
      }
    ]
  },
  techStack: {
    title: "Tech Stack",
    groups: [
      { title: "Languages", items: [{n:"HTML5",i:"fa-brands fa-html5"},{n:"CSS3",i:"fa-brands fa-css3-alt"},{n:"JavaScript",i:"fa-brands fa-js"},{n:"Python",i:"fa-brands fa-python"},{n:"SQL",i:"fa-solid fa-database"}] },
      { title: "Tools & Cloud", items: [{n:"Git",i:"fa-brands fa-git-alt"},{n:"GitHub",i:"fa-brands fa-github"},{n:"Excel",i:"fa-solid fa-file-excel"},{n:"Power BI",i:"fa-solid fa-chart-bar"},{n:"Docker",i:"fa-brands fa-docker"},{n:"AWS",i:"fa-brands fa-aws"}] },
      { title: "Libraries", items: [{n:"Pandas",i:"fa-solid fa-table"},{n:"BeautifulSoup",i:"fa-solid fa-spider"},{n:"Playwright",i:"fa-solid fa-masks-theater"},{n:"PyTorch",i:"fa-solid fa-fire"},{n:"Matplotlib",i:"fa-solid fa-chart-line"}] }
    ]
  },
  contact: { title: "Let's Connect", email: "Email Me", linkedin: "LinkedIn" },
  footer: "© 2025 Antonin Amouyal"
};
