// ============================================================
//  Antonin Amouyal — Portfolio bilingual data
//  Shared project assets (image, icon, stats, tags) are merged
//  with language-specific text for EN and FR.
// ============================================================

// ---------- SHARED PROJECT ASSETS ----------
const __shared = {
  "gender-equality": {
    image: "assets/project_images/gender-equality.svg",
    icon: "fa-solid fa-balance-scale",
    stats: [
      { value: 131, suffix: "", label: "Employees analyzed", labelFr: "Salariés analysés" },
      { value: 17,  suffix: "%", label: "Pay gap surfaced",   labelFr: "Écart salarial" },
      { value: 6,   suffix: "",  label: "Dashboard views",    labelFr: "Vues dashboard" }
    ],
    tags: [
      { n: "Python",     i: "fa-brands fa-python" },
      { n: "Pandas",     i: "fa-solid fa-table" },
      { n: "NumPy",      i: "fa-solid fa-calculator" },
      { n: "Matplotlib", i: "fa-solid fa-chart-line" },
      { n: "Power BI",   i: "fa-solid fa-chart-bar" }
    ]
  },
  "voicera": {
    image: "assets/project_images/voicera.svg",
    icon: "fa-solid fa-microphone",
    stats: [
      { value: 92,  suffix: "%",   label: "Model accuracy",   labelFr: "Précision modèle" },
      { value: 40,  suffix: "",    label: "Signs recognized",  labelFr: "Signes reconnus" },
      { value: 30,  suffix: " fps",label: "Live inference",    labelFr: "Inférence temps réel" }
    ],
    tags: [
      { n: "Python",      i: "fa-brands fa-python" },
      { n: "TensorFlow",  i: "fa-solid fa-fire" },
      { n: "MediaPipe",   i: "fa-solid fa-video" },
      { n: "OpenCV",      i: "fa-solid fa-eye" },
      { n: "YouTube API", i: "fa-brands fa-youtube" },
      { n: "Pandas",      i: "fa-solid fa-table" }
    ]
  },
  "safesante": {
    image: "assets/project_images/safesante.svg",
    icon: "fa-solid fa-heartbeat",
    stats: [
      { value: 131, suffix: "",      label: "Patients in cohort",  labelFr: "Patients analysés", compare: "vs 125 baseline" },
      { value: 89,  suffix: "%",     label: "AUC score",           labelFr: "Score AUC" },
      { value: 23,  suffix: " min",  label: "Avg time saved",      labelFr: "Temps gagné" }
    ],
    tags: [
      { n: "Python",      i: "fa-brands fa-python" },
      { n: "XGBoost",     i: "fa-solid fa-robot" },
      { n: "Angular",     i: "fa-brands fa-angular" },
      { n: "Spring Boot", i: "fa-solid fa-leaf" },
      { n: "PostgreSQL",  i: "fa-solid fa-database" },
      { n: "Docker",      i: "fa-brands fa-docker" },
      { n: "AWS EC2",     i: "fa-brands fa-aws" }
    ]
  },
  "pulsof-360": {
    image: "assets/project_images/pulsof-360.svg",
    icon: "fa-brands fa-linkedin",
    stats: null,
    tags: [
      { n: "Python",        i: "fa-brands fa-python" },
      { n: "Flask",         i: "fa-solid fa-flask" },
      { n: "Selenium",      i: "fa-solid fa-robot" },
      { n: "BeautifulSoup", i: "fa-solid fa-code" },
      { n: "PostgreSQL",    i: "fa-solid fa-database" },
      { n: "API",           i: "fa-solid fa-plug" }
    ]
  },
  "cyna": {
    image: "assets/project_images/cyna.svg",
    icon: "fa-solid fa-shield-halved",
    stats: null,
    tags: [
      { n: "Cybersecurity",      i: "fa-solid fa-shield-halved" },
      { n: "Data Visualisation", i: "fa-solid fa-chart-line" },
      { n: "Log Engineering",    i: "fa-solid fa-database" },
      { n: "Python",             i: "fa-brands fa-python" },
      { n: "Backend API",        i: "fa-solid fa-plug" },
      { n: "Real-time",          i: "fa-solid fa-bolt" }
    ]
  },
  "paysagea": {
    image: "assets/project_images/paysagea.svg",
    icon: "fa-solid fa-seedling",
    stats: null,
    tags: [
      { n: "React",           i: "fa-brands fa-react" },
      { n: "Python",          i: "fa-brands fa-python" },
      { n: "Computer Vision", i: "fa-solid fa-eye" },
      { n: "LLM",             i: "fa-solid fa-brain" },
      { n: "RAG",             i: "fa-solid fa-magnifying-glass" },
      { n: "FastAPI",         i: "fa-solid fa-bolt" }
    ]
  }
};

function buildProject(slug, text, lang) {
  const s = __shared[slug];
  return {
    slug,
    image:   s.image,
    icon:    s.icon,
    tags:    s.tags,
    stats:   s.stats ? s.stats.map(st => ({
      ...st,
      label: lang === 'fr' ? st.labelFr : st.label
    })) : null,
    title:       text.title,
    role:        text.role,
    date:        text.date,
    context:     text.context,
    description: text.description,
    sections:    text.sections
  };
}

// ---------- ENGLISH DATA ----------
const __en_projects = [
  {
    slug: "gender-equality",
    title: "Gender Equality in Business",
    role: "Data Analyst",
    date: "Sep – Dec 2024",
    context: "School Project",
    description: "Complete professional equality diagnostic on HRIS data from a private company, conducted as part of the AI Clinic collaborative program.",
    sections: [
      { title: "Introduction", content: "This project was carried out as part of the AI Clinic, a collaboration framework between school and companies that lets students tackle real-world business problems. Conducted as a team, it covered a full data workflow: collection, preparation, statistical analysis, visualisation and strategic recommendations." },
      { title: "Context", content: "Gender equality is a major social, legal and economic issue. AIrhConseil wanted to leverage its HRIS data to objectively diagnose professional equality, identify gender gaps, and strengthen compliance with legal requirements." },
      { title: "Methodology", items: [
        "Exploration of HRIS data: understanding 3 tables (info_pro, remuneration, employee)",
        "Cleaning: removing duplicates, handling missing values, harmonising formats",
        "Merging tables via the unique id_employee identifier",
        "Exploratory analyses: M/F breakdown, average salary gaps, promotions and raises",
        "Statistical analyses: Chi-squared, ANOVA, ANCOVA (gender effect on salary)",
        "Deliverable: interactive Power BI dashboard + actionable recommendations"
      ]},
      { title: "Results", items: [
        "Overall parity: balanced headcount (131 men / 125 women)",
        "No significant salary gap detected (ANCOVA → gender not significant, p > 0.05)",
        "Key finding: R&D — highest avg salary (≈ €6,814), low female representation (3 women / 15)",
        "Methodology validated on external datasets: existing inequalities correctly detected"
      ]},
      { title: "Recommendations", items: [
        "Set up automated annual monitoring (salaries, promotions, variables)",
        "Target increased female representation in R&D through recruitment and mentoring",
        "Maintain existing good practices and monitor localised gaps"
      ]},
      { title: "Skills Developed", items: [
        "Data preparation and transformation (ETL)",
        "Exploratory analysis and visualisation",
        "Advanced statistics (Chi², ANOVA, ANCOVA)",
        "Power BI dashboard design",
        "Communicating results and formulating recommendations",
        "GDPR compliance and sensitive data handling"
      ]}
    ]
  },
  {
    slug: "voicera",
    title: "Voicera AI",
    role: "Data & ML Engineer",
    date: "Jan – Mar 2025",
    context: "School Project",
    description: "Design of a complete video data pipeline for training a deception detection model, combining automated collection, multimodal segmentation and GAN-based synthetic generation.",
    sections: [
      { title: "Introduction", content: "Project carried out as part of the AI Clinic, in collaboration with Voicera AI. Team work on a real problem: enriching the training data of a sincerity analysis model. The objective was to design a complete pipeline to collect, structure, segment and synthetically generate video data." },
      { title: "Context", content: "Deception detection is a complex problem in computer vision and multimodal analysis. Unlike emotion recognition, no standardised annotated dataset exists specifically for sincerity." },
      { title: "Technical Methodology", items: [
        "A. Data Engineering — metadata extraction via YouTube Data API, batch video download, structuring with pandas",
        "B. Multimodal segmentation — visual scene change detection; audio transcription and temporal indexing",
        "C. GAN (TensorFlow) — Generator producing video sequences; Discriminator distinguishing real/synthetic; joint optimisation",
        "D. Face Manipulation — facial landmark detection via MediaPipe, frame-by-frame processing, video reconstruction"
      ]},
      { title: "Results", items: [
        "Complete automated video collection and structuring pipeline implemented",
        "Functional GAN under TensorFlow with promising initial results in facial generation",
        "Limits: visual quality improvable, high compute cost, need for richer dataset"
      ]},
      { title: "Skills Developed", items: [
        "GAN implementation and training under TensorFlow",
        "Data engineering applied to video data",
        "Multimodal segmentation (vision + audio)",
        "Dataset preparation for Computer Vision",
        "Critical analysis of generative model limitations"
      ]}
    ]
  },
  {
    slug: "safesante",
    title: "SafeSante",
    role: "Full-Stack & ML Engineer",
    date: "Apr – Jul 2025",
    context: "Internship",
    description: "Design and deployment of a teleconsultation wait time prediction system and a full-stack internal dashboard for real-time operational monitoring.",
    sections: [
      { title: "Context", content: "Internship at SafeSante: development of a teleconsultation wait time prediction system and an internal dashboard for real-time monitoring of activity, anomalies and model performance." },
      { title: "Prediction Model", items: [
        "Data extraction and structuring (PostgreSQL + internal web scraping)",
        "Dataset preparation: wait time calculation, cleaning, outlier handling",
        "Benchmarking multiple algorithms → XGBoost selected for best performance",
        "Full pipeline: real-time prediction, logging, daily automated retraining, REST API"
      ]},
      { title: "Internal Dashboard", items: [
        "Full-stack: activity, cancellations, practitioner load, anomaly detection",
        "Architecture: Angular 17 (frontend), Spring Boot (backend), PostgreSQL (database)",
        "Advanced visualisations: heatmaps, time-series, funnels, dynamic tables",
        "Real-time data refresh + multi-criteria filters"
      ]},
      { title: "Deployment", items: [
        "Deployed on AWS EC2 with Docker + Nginx",
        "Secured API, continuous monitoring, centralised logs"
      ]},
      { title: "Results", items: [
        "Reliable predictions continuously updated and served via API",
        "Dashboard actively used by operational teams",
        "Fully functional ML pipeline + web application in internal production"
      ]},
      { title: "Skills Developed", items: [
        "ML model construction and deployment in production",
        "Backend and frontend full-stack development",
        "Business data visualisation and analysis",
        "Cloud deployment, security and containerisation"
      ]}
    ]
  },
  {
    slug: "pulsof-360",
    title: "PulsOf 360",
    role: "Python Developer",
    date: "Sep – Dec 2025",
    context: "School Project",
    description: "Automated LinkedIn data extraction system based on dynamic content scraping, enabling collection, cleaning and structuring of post interactions for marketing analysis and competitive intelligence.",
    sections: [
      { title: "Context", content: "Academic project for PulseOf360: a system for extracting and analysing LinkedIn interactions. Goal: transform a LinkedIn post URL into exploitable data (likes, comments, engaged profiles) for competitive intelligence and marketing analysis." },
      { title: "Methodology", items: [
        "Automated scraping adapted to dynamic content: progressive loading, intelligent scroll, DOM analysis",
        "Data cleaning, normalisation and structuring",
        "Insertion into a PostgreSQL database with uniqueness constraints",
        "Profile enrichment via external API: async management and reliability score calculation",
        "Pipeline orchestration via a Python backend (Flask) with a dedicated interface"
      ]},
      { title: "Results", items: [
        "Robust automated extraction from a single LinkedIn URL",
        "Clean, normalised and analytically usable database",
        "Tool applicable for competitive intelligence, audience analysis and content strategy"
      ]},
      { title: "Skills Developed", items: [
        "Dynamic content scraping automation",
        "Relational database management",
        "Backend API design with Flask",
        "Marketing analysis & insight extraction"
      ]}
    ]
  }
];

// ---------- FRENCH DATA ----------
const __fr_projects = [
  {
    slug: "gender-equality",
    title: "Égalité Hommes-Femmes en Entreprise",
    role: "Data Analyst",
    date: "Septembre – Décembre 2024",
    context: "Projet École",
    description: "Diagnostic complet d'égalité professionnelle sur les données SIRH d'une entreprise privée, réalisé dans le cadre de la Clinique de l'IA.",
    sections: [
      { title: "Introduction", content: "Ce projet a été réalisé dans le cadre de la Clinique de l'IA, un dispositif de collaboration entre école et entreprises permettant aux étudiants de travailler sur des problématiques réelles. Il a été mené en groupe, en mobilisant une démarche data complète : collecte, préparation, analyse statistique, visualisation et recommandations stratégiques." },
      { title: "Contexte", content: "L'égalité femmes-hommes représente un enjeu majeur social, réglementaire et économique. AIrhConseil souhaitait exploiter ses données SIRH afin de réaliser un diagnostic objectif de l'égalité professionnelle et renforcer sa conformité avec les exigences légales (index égalité professionnelle)." },
      { title: "Démarche", items: [
        "Exploration des données SIRH : compréhension des 3 tables (info_pro, rémunération, salarié)",
        "Nettoyage : suppression des doublons, traitement des valeurs manquantes, harmonisation des formats",
        "Fusion des tables via l'identifiant unique id_salarié",
        "Analyses exploratoires : répartition H/F, écarts salariaux, promotions, augmentations",
        "Analyses statistiques : Khi², ANOVA, ANCOVA (effet du genre sur les salaires)",
        "Restitution : tableau de bord interactif Power BI + recommandations actionnables"
      ]},
      { title: "Résultats", items: [
        "Parité globale : effectif équilibré (131 hommes / 125 femmes)",
        "Aucun écart salarial significatif détecté (ANCOVA → sexe non significatif, p > 0,05)",
        "Point sensible : le service R&D — rémunération la plus élevée (≈ 6 814 €), faible présence féminine (3 / 15)",
        "Méthodologie validée sur bases externes : les inégalités existantes ont été détectées correctement"
      ]},
      { title: "Recommandations", items: [
        "Mettre en place un suivi annuel automatisé (salaires, promotions, variables)",
        "Cibler le renforcement de la présence féminine en R&D via recrutement, mentorat et formation",
        "Maintenir les bonnes pratiques existantes et surveiller les écarts localisés"
      ]},
      { title: "Compétences développées", items: [
        "Préparation et transformation de données (ETL)",
        "Analyse exploratoire et visualisation",
        "Statistiques avancées (Khi², ANOVA, ANCOVA)",
        "Création et structuration de dashboards Power BI",
        "Communication de résultats et formulation de recommandations",
        "Maîtrise des exigences RGPD"
      ]}
    ]
  },
  {
    slug: "voicera",
    title: "Voicera AI",
    role: "Data Engineer & ML Engineer",
    date: "Janvier – Mars 2025",
    context: "Projet École",
    description: "Conception d'un pipeline complet de données vidéo pour entraîner un modèle de détection de tromperie, combinant collecte automatisée, segmentation multimodale et génération synthétique par GAN.",
    sections: [
      { title: "Introduction", content: "Projet réalisé dans le cadre de la Clinique de l'IA, en collaboration avec Voicera AI. Travail mené en groupe : enrichir les données d'entraînement d'un modèle d'analyse de sincérité dans des interactions vidéo." },
      { title: "Contexte IA", content: "La détection de la tromperie est un problème complexe en vision par ordinateur. Contrairement à la reconnaissance d'émotions, il n'existe pas de dataset standardisé annoté spécifiquement pour la sincérité." },
      { title: "Méthodologie technique", items: [
        "A. Data Engineering — extraction via YouTube Data API, téléchargement batch, structuration avec pandas",
        "B. Segmentation multimodale — visuelle : détection automatique des changements de scène ; audio : extraction des transcriptions",
        "C. GAN vidéo (TensorFlow) — Generator produisant des séquences vidéo ; Discriminator distinguant réel/synthétique",
        "D. Face Manipulation — détection de landmarks faciaux via MediaPipe, traitement frame-by-frame"
      ]},
      { title: "Résultats", items: [
        "Pipeline complet de collecte et structuration vidéo mis en place",
        "Implémentation fonctionnelle d'un GAN vidéo sous TensorFlow avec premiers résultats prometteurs",
        "Limites identifiées : qualité visuelle perfectible, coût computationnel élevé"
      ]},
      { title: "Compétences développées", items: [
        "Implémentation et entraînement de GAN sous TensorFlow",
        "Data engineering appliqué aux données vidéo",
        "Segmentation multimodale (vision + audio)",
        "Préparation de datasets pour Computer Vision",
        "Analyse critique des limites des modèles génératifs"
      ]}
    ]
  },
  {
    slug: "safesante",
    title: "SafeSante",
    role: "Développeur Full-Stack & ML Engineer",
    date: "Avril – Juillet 2025",
    context: "Stage",
    description: "Conception et déploiement d'un système de prédiction du temps d'attente en téléconsultation et d'un dashboard interne full-stack pour le monitoring en temps réel.",
    sections: [
      { title: "Contexte", content: "Stage chez SafeSante : développement d'un système de prédiction du temps d'attente en téléconsultation et d'un dashboard interne pour le suivi en temps réel de l'activité, des anomalies et des performances du modèle." },
      { title: "Modèle de prédiction", items: [
        "Extraction et structuration des données (PostgreSQL + web scraping interne)",
        "Préparation du dataset : calcul du temps d'attente, nettoyage, traitement des outliers",
        "Benchmark de plusieurs algorithmes → XGBoost sélectionné pour ses meilleures performances",
        "Pipeline complet : prédiction en temps réel, logs, réentraînement quotidien automatisé, API REST"
      ]},
      { title: "Dashboard interne", items: [
        "Dashboard complet : activité, annulations, charge praticiens, anomalies",
        "Architecture full-stack : Angular 17 (frontend), Spring Boot (backend), PostgreSQL (base de données)",
        "Visualisations avancées : heatmaps, courbes temporelles, funnels, tableaux dynamiques",
        "Rafraîchissement temps réel + filtres multi-critères"
      ]},
      { title: "Déploiement", items: [
        "Déploiement sur AWS EC2 avec Docker + Nginx",
        "API sécurisée, monitoring continu, logs centralisés"
      ]},
      { title: "Résultats", items: [
        "Prédictions fiables mises à jour en continu et servies via API",
        "Dashboard utilisé activement par les équipes opérationnelles",
        "Pipeline ML + application web pleinement fonctionnels en production interne"
      ]},
      { title: "Compétences développées", items: [
        "Construction et déploiement d'un modèle ML en production",
        "Développement backend et frontend full-stack",
        "Visualisation et analyse de données métier",
        "Déploiement cloud, sécurité et conteneurisation"
      ]}
    ]
  },
  {
    slug: "pulsof-360",
    title: "PulsOf 360",
    role: "Développeur Python",
    date: "Septembre – Décembre 2025",
    context: "Projet École",
    description: "Conception d'un système d'extraction automatisée de données LinkedIn, basé sur le scraping de contenus dynamiques, pour la collecte et structuration des interactions de posts.",
    sections: [
      { title: "Contexte", content: "Projet académique pour PulseOf360 : système d'extraction et d'analyse des interactions LinkedIn. Transformer un lien de post LinkedIn en données exploitables (likes, commentaires, profils engagés) pour la veille concurrentielle et l'analyse marketing." },
      { title: "Méthodologie", items: [
        "Scraping automatisé adapté aux contenus dynamiques : chargement progressif, scroll intelligent, analyse du DOM",
        "Nettoyage, normalisation et structuration des données",
        "Insertion en base PostgreSQL avec règles d'unicité",
        "Enrichissement des profils via API externe : gestion asynchrone et score de fiabilité",
        "Orchestration via backend Python (Flask) et interface dédiée"
      ]},
      { title: "Résultats", items: [
        "Extraction automatisée robuste à partir d'un lien LinkedIn unique",
        "Base de données propre, normalisée et exploitable",
        "Outil pour la veille concurrentielle et l'analyse d'audience"
      ]},
      { title: "Compétences développées", items: [
        "Automatisation de scraping sur contenus dynamiques",
        "Gestion de base relationnelle et contraintes d'intégrité",
        "Conception d'API backend avec Flask",
        "Analyse marketing et extraction d'insights"
      ]}
    ]
  }
];

// ---------- CYNA (EN) ----------
__en_projects.push({
  slug: "cyna",
  title: "Cyna — Connected SOC Dashboard",
  role: "Data & Full-Stack Developer",
  date: "2026",
  context: "Professional Experience",
  description: "Connected SOC (Security Operations Center) dashboard centralising and analysing security data for real-time monitoring and incident prioritisation.",
  sections: [
    { title: "Context", content: "During my experience at Cyna, I developed a connected SOC dashboard designed to centralise and analyse security data, facilitating real-time monitoring and decision-making for security teams. Faced with the multiplication of data sources (logs, events, alerts), SOC teams are often overwhelmed with information. The goal was to design a unified interface to visualise, understand and effectively prioritise security incidents." },
    { title: "Architecture & Approach", items: [
      "Data ingestion & normalisation: made heterogeneous flows (logs, events, statuses) exploitable and ensured consistency for a consolidated view",
      "Analysis logic: anomaly detection, incident tracking, alert evolution, and identification of risky behaviours",
      "Interactive frontend dashboard: dynamic visualisations (charts, tables, advanced filters) designed for SOC analysts — clear, responsive and business-oriented",
      "Near real-time update logic: continuous monitoring of system security state with rapid incident response capability"
    ]},
    { title: "Results", items: [
      "Efficient centralisation of security data",
      "Clear visualisation of incidents and alerts",
      "Improved action prioritisation for SOC analysts",
      "Real-time monitoring of system state",
      "Significantly improved readability of security data for operational teams"
    ]},
    { title: "Skills Demonstrated", items: [
      "Designing a critical business tool oriented toward cybersecurity",
      "Transforming complex data flows into actionable information",
      "Developing interfaces adapted to operational use cases",
      "Working on real-time data problems",
      "Connecting data and business needs in a demanding context"
    ]}
  ]
});

// ---------- PAYSAGEA (EN) ----------
__en_projects.push({
  slug: "paysagea",
  title: "Paysagea — AI Garden Design",
  role: "AI Engineer & Full-Stack Developer",
  date: "Jan – Apr 2026",
  context: "School Project",
  description: "End-to-end AI system that turns a garden photo into a structured, editable landscape plan — combining computer vision, LLM generation and a plant recommendation engine.",
  sections: [
    { title: "Context", content: "Paysagea is a personal project built around one clear ambition: reinventing how people design their gardens using AI. Starting from a simple idea — generate a layout from a photo — it evolved into a complete intelligent system that understands an environment, integrates real-world constraints and produces a structured, editable result." },
    { title: "Architecture & Approach", items: [
      "React frontend: image upload, preferences (style, ambiance, maintenance) and location input consolidated into a project manifest",
      "Python backend orchestrator: enriches data with real climate profiles to integrate environmental constraints",
      "Computer vision pipeline: segmentation + depth estimation models to produce a structured scene representation (zones, depth, anchor points)",
      "RAG-based recommendation engine: selects relevant plants according to climate and user preferences",
      "LLM output: generates a structured garden plan as exploitable layers — not a static image — enabling fine control and dynamic edits"
    ]},
    { title: "Results", items: [
      "Fully functional end-to-end system: from image upload to structured interactive project",
      "Coherent scene understanding (space, depth, zones)",
      "Real constraint integration (climate, environment)",
      "Controlled, editable output — not a frozen image",
      "Identified improvement axis: detection of truly exploitable zones for finer element placement"
    ]},
    { title: "Skills Demonstrated", items: [
      "Designing a complete, coherent AI architecture",
      "Connecting advanced components: vision, data, generation",
      "Translating a user need into a concrete product",
      "Managing complexity while keeping the UX simple"
    ]}
  ]
});

// ---------- CYNA (FR) ----------
__fr_projects.push({
  slug: "cyna",
  title: "Cyna — Dashboard SOC connecté",
  role: "Développeur Data & Full-Stack",
  date: "2026",
  context: "Expérience Professionnelle",
  description: "Dashboard SOC (Security Operations Center) connecté centralisant et analysant les données de sécurité pour le monitoring en temps réel et la priorisation des incidents.",
  sections: [
    { title: "Contexte", content: "Dans le cadre de mon expérience chez Cyna, j'ai développé un dashboard SOC connecté, destiné à centraliser et analyser les données de sécurité afin de faciliter le monitoring en temps réel et la prise de décision des équipes. Face à la multiplication des sources de données (logs, événements, alertes), les équipes SOC sont souvent confrontées à une surcharge d'informations difficile à exploiter. L'objectif était de concevoir une interface unifiée permettant de visualiser, comprendre et prioriser efficacement les incidents de sécurité." },
    { title: "Architecture & démarche", items: [
      "Ingestion et normalisation des données : rendre exploitables des flux hétérogènes (logs, événements, statuts) et garantir la cohérence pour une vision consolidée",
      "Logique d'analyse : détection d'anomalies, suivi des incidents, évolution des alertes et identification de comportements à risque",
      "Dashboard interactif : visualisations dynamiques (graphiques, tableaux, filtres avancés) pensées pour les analystes SOC — claire, réactive et orientée usage métier",
      "Mise à jour quasi temps réel : suivi continu de l'état du système de sécurité avec capacité de réaction rapide en cas d'incident"
    ]},
    { title: "Résultats", items: [
      "Centralisation efficace des données de sécurité",
      "Visualisation claire des incidents et alertes",
      "Meilleure priorisation des actions pour les analystes SOC",
      "Suivi en temps réel de l'état du système",
      "Lisibilité significativement améliorée des données de sécurité pour les équipes opérationnelles"
    ]},
    { title: "Compétences démontrées", items: [
      "Concevoir un outil métier critique orienté cybersécurité",
      "Transformer des flux complexes en informations exploitables",
      "Développer des interfaces adaptées à des usages opérationnels",
      "Travailler sur des problématiques temps réel",
      "Connecter data et besoins métier dans un contexte exigeant"
    ]}
  ]
});

// ---------- PAYSAGEA (FR) ----------
__fr_projects.push({
  slug: "paysagea",
  title: "Paysagea — Conception de jardin par IA",
  role: "Ingénieur IA & Développeur Full-Stack",
  date: "Janvier – Avril 2026",
  context: "Projet École",
  description: "Système IA end-to-end qui transforme une photo de jardin en plan d'aménagement structuré et modifiable — vision par ordinateur, génération LLM et moteur de recommandation de plantes.",
  sections: [
    { title: "Contexte", content: "Paysagea est un projet personnel développé avec une ambition claire : transformer la manière dont un utilisateur conçoit son jardin en exploitant le potentiel de l'IA. L'idée de départ était simple — générer une proposition à partir d'une image — mais elle a rapidement évolué vers un système intelligent complet, capable de comprendre un environnement, d'intégrer des contraintes réelles et de produire un résultat structuré et modifiable." },
    { title: "Architecture & démarche", items: [
      "Frontend React : upload d'image, préférences (style, ambiance, entretien) et localisation consolidés dans un manifeste projet",
      "Orchestrateur Python : enrichit les données avec un profil climatique réel pour intégrer des contraintes environnementales concrètes",
      "Pipeline Computer Vision : segmentation + estimation de profondeur pour obtenir une représentation structurée de la scène (zones, profondeurs, points d'ancrage)",
      "Moteur de recommandation RAG : sélectionne des plantes pertinentes selon le climat et les préférences utilisateur",
      "Génération LLM : produit un plan structuré sous forme de calques exploitables — pas une image figée — permettant contrôle fin et modifications dynamiques"
    ]},
    { title: "Résultats", items: [
      "Système fonctionnel de bout en bout : de l'upload jusqu'à la génération d'un projet structuré et interactif",
      "Compréhension cohérente de la scène (espace, profondeur, zones)",
      "Prise en compte des contraintes réelles (climat, environnement)",
      "Génération contrôlée et modifiable (et non une simple image figée)",
      "Axe d'amélioration identifié : détection des zones réellement exploitables pour affiner le placement des éléments"
    ]},
    { title: "Compétences démontrées", items: [
      "Concevoir une architecture IA complète et cohérente",
      "Connecter plusieurs briques avancées (vision, données, génération)",
      "Transformer un besoin utilisateur en produit concret",
      "Gérer la complexité tout en maintenant une expérience simple"
    ]}
  ]
});

// ---------- PLACEHOLDER CARDS (coming soon) ----------
const __placeholders = [
  {
    slug: "coming-soon-2",
    comingSoon: true,
    image: null, icon: "fa-solid fa-hourglass-half",
    stats: null, tags: [],
    title: { en: "Coming Soon", fr: "Bientôt" },
    role:  { en: "New project in progress", fr: "Nouveau projet en cours" },
    date:  { en: "2026", fr: "2026" },
    context: { en: "Coming Soon", fr: "Bientôt" },
    description: "", sections: []
  }
];

function buildPlaceholder(p, lang) {
  return {
    slug: p.slug,
    comingSoon: true,
    image: null, icon: p.icon,
    stats: null, tags: [],
    title:       p.title[lang],
    role:        p.role[lang],
    date:        p.date[lang],
    context:     p.context[lang],
    description: "", sections: []
  };
}

// ---------- TECH STACK ----------
const __techStack = {
  en: {
    title: "Tech Stack",
    groups: [
      { title: "Languages", items: [
        {n:"HTML5",i:"fa-brands fa-html5"},{n:"CSS3",i:"fa-brands fa-css3-alt"},
        {n:"JavaScript",i:"fa-brands fa-js"},{n:"Python",i:"fa-brands fa-python"},
        {n:"Angular",i:"fa-brands fa-angular"},{n:"Spring Boot",i:"fa-solid fa-leaf"}
      ]},
      { title: "Tools & Cloud", items: [
        {n:"Git",i:"fa-brands fa-git-alt"},{n:"GitHub",i:"fa-brands fa-github"},
        {n:"Excel",i:"fa-solid fa-file-excel"},{n:"Power BI",i:"fa-solid fa-chart-bar"},
        {n:"Docker",i:"fa-brands fa-docker"},{n:"AWS",i:"fa-brands fa-aws"},
        {n:"PostgreSQL",i:"fa-solid fa-database"}
      ]},
      { title: "Libraries", items: [
        {n:"Pandas",i:"fa-solid fa-table"},{n:"BeautifulSoup",i:"fa-solid fa-code"},
        {n:"Playwright",i:"fa-solid fa-masks-theater"},{n:"PyTorch",i:"fa-solid fa-fire"},
        {n:"Matplotlib",i:"fa-solid fa-chart-line"},{n:"XGBoost",i:"fa-solid fa-robot"}
      ]}
    ]
  },
  fr: {
    title: "Compétences Techniques",
    groups: [
      { title: "Langages", items: [
        {n:"HTML5",i:"fa-brands fa-html5"},{n:"CSS3",i:"fa-brands fa-css3-alt"},
        {n:"JavaScript",i:"fa-brands fa-js"},{n:"Python",i:"fa-brands fa-python"},
        {n:"Angular",i:"fa-brands fa-angular"},{n:"Spring Boot",i:"fa-solid fa-leaf"}
      ]},
      { title: "Outils & Cloud", items: [
        {n:"Git",i:"fa-brands fa-git-alt"},{n:"GitHub",i:"fa-brands fa-github"},
        {n:"Excel",i:"fa-solid fa-file-excel"},{n:"Power BI",i:"fa-solid fa-chart-bar"},
        {n:"Docker",i:"fa-brands fa-docker"},{n:"AWS",i:"fa-brands fa-aws"},
        {n:"PostgreSQL",i:"fa-solid fa-database"}
      ]},
      { title: "Librairies", items: [
        {n:"Pandas",i:"fa-solid fa-table"},{n:"BeautifulSoup",i:"fa-solid fa-code"},
        {n:"Playwright",i:"fa-solid fa-masks-theater"},{n:"PyTorch",i:"fa-solid fa-fire"},
        {n:"Matplotlib",i:"fa-solid fa-chart-line"},{n:"XGBoost",i:"fa-solid fa-robot"}
      ]}
    ]
  }
};

// ---------- FULL I18N OBJECT ----------
window.__i18n = {
  en: {
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
        ...__en_projects.map(p => buildProject(p.slug, p, 'en')),
        ...__placeholders.map(p => buildPlaceholder(p, 'en'))
      ]
    },
    techStack: __techStack.en,
    contact: { title: "Get In Touch", email: "Email Me", linkedin: "LinkedIn" },
    footer: "© 2025 Antonin Amouyal"
  },
  fr: {
    nav: { about: "À Propos", projects: "Projets", techStack: "Compétences", contact: "Contact" },
    hero: {
      greeting: "Bonjour, je suis Antonin Amouyal",
      jobTitles: ["Étudiant IA & Data", "Data Analyst", "Ingénieur ML", "Développeur Full-Stack"],
      location: "Paris, France",
      contactBtn: "Me Contacter",
      workBtn: "Voir Mes Projets"
    },
    about: {
      title: "À Propos de Moi",
      p1: "Actuellement étudiant à Aivancity, je mets en pratique mes compétences à travers des projets concrets qui me permettent d'explorer le pouvoir des données pour résoudre des problèmes réels. Mon parcours à Aivancity me permet d'approfondir mes connaissances en IA, data science et machine learning grâce à une approche concrète basée sur des projets et le travail d'équipe.",
      p2: "Mon objectif est de continuer à développer mes compétences en IA et en analyse de données, tout en restant ouvert à de nouvelles opportunités dans des domaines qui me passionnent, comme l'innovation technologique et l'entrepreneuriat."
    },
    projects: {
      title: "Projets",
      items: [
        ...__fr_projects.map(p => buildProject(p.slug, p, 'fr')),
        ...__placeholders.map(p => buildPlaceholder(p, 'fr'))
      ]
    },
    techStack: __techStack.fr,
    contact: { title: "Contactez-Moi", email: "Envoyer un Email", linkedin: "LinkedIn" },
    footer: "© 2025 Antonin Amouyal"
  }
};
