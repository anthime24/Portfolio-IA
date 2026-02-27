// Translations object
const translations = {
    en: {
        // Navigation
        nav: {
            logo: "AA",
            about: "About",
            projects: "Projects",
            backToProjects: "Back to projects",
            techStack: "Tech Stack",
            contact: "Contact"
        },
        // Hero section
        hero: {
            greeting: "Hi, I'm Antonin Amouyal",
            jobTitle: "AI & Data Student",
            location: "Paris, France",
            contactBtn: "Contact Me",
            workBtn: "View My Work"
        },
        // About section
        about: {
            title: "About Me",
            paragraph1: "Currently a student at Aivancity, I apply my skills through concrete projects that allow me to explore the power of data to solve real problems. My education at Aivancity deepens my knowledge in artificial intelligence, data science, and machine learning through a hands-on approach based on projects and teamwork.",
            paragraph2: "My goal is to continue developing my skills in AI and data analysis while remaining open to new opportunities in areas that I'm passionate about, such as technological innovation and entrepreneurship."
        },
        projects: {
            title: "Projects",
            items: [
                {
                    slug: "gender-equality",
                    title: "Gender Equality in Business",
                    icon: "fa-solid fa-balance-scale",
                    role: "Data Analyst",
                    date: "Septembre – Décembre 2024",
                    context: "School Project",
                    description: "Complete professional equality diagnostic on HRIS data from a private company, conducted as part of the AI Clinic collaborative program.",
                    image: null,
                    tags: [
                        { name: "Python", icon: "fa-brands fa-python" },
                        { name: "Pandas", icon: "fa-solid fa-table" },
                        { name: "NumPy", icon: "fa-solid fa-calculator" },
                        { name: "Matplotlib", icon: "fa-solid fa-chart-line" },
                        { name: "Power BI", icon: "fa-solid fa-chart-bar" }
                    ],
                    sections: [
                        {
                            title: "Introduction",
                            content: "This project was carried out as part of the AI Clinic, a collaboration framework between school and companies that lets students tackle real-world business problems. Conducted as a team, it covered a full data workflow: collection, preparation, statistical analysis, visualisation and strategic recommendations."
                        },
                        {
                            title: "Context",
                            content: "Gender equality is a major social, legal and economic issue. Companies with inclusive policies show better attractiveness, lower turnover and stronger performance. AIrhConseil wanted to leverage its HRIS data to objectively diagnose professional equality, identify gender gaps, and strengthen compliance with legal requirements (professional equality index)."
                        },
                        {
                            title: "Methodology",
                            items: [
                                "Exploration of HRIS data: understanding 3 tables (info_pro, remuneration, employee)",
                                "Cleaning: removing duplicates, handling missing values, harmonising formats",
                                "Merging tables via the unique id_employee identifier to build a reliable consolidated base",
                                "Exploratory analyses: M/F breakdown, average salary gaps, comparison by department, contracts (CDD/CDI), promotions and raises",
                                "Statistical analyses: Chi-squared (gender vs HR variables), ANOVA (mean differences), ANCOVA (gender effect on salary controlling for age)",
                                "Validation on external datasets: pipeline tested on a real English dataset and a simulated fictitious dataset",
                                "Deliverable: interactive Power BI dashboard + actionable recommendations"
                            ]
                        },
                        {
                            title: "Results",
                            items: [
                                "Overall parity: balanced headcount (131 men / 125 women)",
                                "No significant salary gap detected (ANCOVA → gender not significant, p > 0.05)",
                                "No notable correlation between gender and contract type, department, promotion or raise (Chi²)",
                                "Key finding: R&D department — highest average salary (≈ €6,814), low female representation (3 women / 15) → evidence of structural access inequality in technical roles",
                                "Methodology validated on external datasets: existing inequalities correctly detected"
                            ]
                        },
                        {
                            title: "Recommendations",
                            items: [
                                "Set up automated annual monitoring (salaries, promotions, variables)",
                                "Target increased female representation in R&D through recruitment, mentoring and training initiatives",
                                "Maintain existing good practices and monitor localised gaps using the dashboard"
                            ]
                        },
                        {
                            title: "Skills Developed",
                            items: [
                                "Data preparation and transformation (ETL)",
                                "Exploratory analysis and visualisation",
                                "Advanced statistics (tests, interpretation, hypothesis validation)",
                                "HR analysis (professional equality, social indicators)",
                                "Power BI dashboard design and structuring",
                                "Communicating results and formulating recommendations",
                                "Team project management",
                                "GDPR compliance and sensitive data handling"
                            ]
                        }
                    ]
                },
                {
                    slug: "voicera",
                    title: "Voicera AI",
                    icon: "fa-solid fa-microphone",
                    role: "Data Engineer & ML Engineer",
                    date: "Janvier – Mars 2025",
                    context: "School Project",
                    description: "Design of a complete video data pipeline for training a deception detection model, combining automated collection, multimodal segmentation and GAN-based synthetic generation.",
                    image: null,
                    tags: [
                        { name: "Python", icon: "fa-brands fa-python" },
                        { name: "TensorFlow", icon: "fa-solid fa-fire" },
                        { name: "MediaPipe", icon: "fa-solid fa-video" },
                        { name: "OpenCV", icon: "fa-solid fa-eye" },
                        { name: "YouTube API", icon: "fa-brands fa-youtube" },
                        { name: "Pandas", icon: "fa-solid fa-table" }
                    ],
                    sections: [
                        {
                            title: "Introduction",
                            content: "Project carried out as part of the AI Clinic, in collaboration with Voicera AI. Team work on a real problem: enriching the training data of a sincerity analysis model applied to video interactions. The objective was to design a complete pipeline to collect, structure, segment and synthetically generate data, preparing a usable base for future deception detection model training."
                        },
                        {
                            title: "Context",
                            content: "Deception detection is a complex problem in computer vision and multimodal analysis. Unlike emotion recognition, no standardised annotated dataset exists specifically for sincerity. Key challenges: absence of large-scale labelled data, limited exploitation of dynamic non-verbal signals, risk of bias from limited real data, and the need to artificially increase expression diversity."
                        },
                        {
                            title: "Technical Methodology",
                            items: [
                                "A. Data Engineering pipeline — metadata extraction via YouTube Data API, batch video download, data structuring with pandas, deduplication and file organisation for downstream processing",
                                "B. Multimodal segmentation — visual: automatic scene change detection and splitting into exploitable segments; audio: transcription extraction, temporal indexing, thematic filtering",
                                "C. GAN video generation (TensorFlow) — Generator producing video sequences from a latent vector; Discriminator learning to distinguish real from synthetic data; joint optimisation and progressive hyperparameter tuning",
                                "D. Face manipulation — facial landmark detection via MediaPipe, targeted manipulation of facial zones, frame-by-frame processing, video reconstruction with audio synchronisation"
                            ]
                        },
                        {
                            title: "Results",
                            items: [
                                "Complete automated video collection and structuring pipeline implemented",
                                "Multimodal base created and ready for future training use",
                                "Functional GAN implementation under TensorFlow with promising initial results in facial generation",
                                "Limits identified: visual quality improvable, high compute cost, need for a richer dataset to stabilise the GAN"
                            ]
                        },
                        {
                            title: "Skills Developed",
                            items: [
                                "GAN implementation and training under TensorFlow",
                                "Understanding of adversarial dynamics (Generator vs Discriminator)",
                                "Data engineering applied to video data",
                                "Multimodal segmentation (vision + audio)",
                                "Dataset preparation for Computer Vision",
                                "Pipeline optimisation and memory management",
                                "Critical analysis of generative model limitations",
                                "Reflection on bias and ethics of synthetic data"
                            ]
                        }
                    ]
                },
                {
                    slug: "safesante",
                    title: "SafeSante",
                    icon: "fa-solid fa-heartbeat",
                    role: "Full-Stack Developer & ML Engineer",
                    date: "Avril – Juillet 2025",
                    context: "Internship",
                    description: "Design and deployment of a teleconsultation wait time prediction system and a full-stack internal dashboard for real-time operational monitoring.",
                    image: null,
                    tags: [
                        { name: "Python", icon: "fa-brands fa-python" },
                        { name: "XGBoost", icon: "fa-solid fa-robot" },
                        { name: "Angular", icon: "fa-brands fa-angular" },
                        { name: "Spring Boot", icon: "fa-solid fa-leaf" },
                        { name: "PostgreSQL", icon: "fa-solid fa-database" },
                        { name: "Docker", icon: "fa-brands fa-docker" },
                        { name: "AWS EC2", icon: "fa-brands fa-aws" }
                    ],
                    sections: [
                        {
                            title: "Context",
                            content: "As part of my internship at SafeSante, I developed a complete teleconsultation wait time prediction system and an internal dashboard allowing teams to monitor activity, anomalies and model performance in real time. The goal: improve patient experience, anticipate peak activity periods and optimise internal organisation."
                        },
                        {
                            title: "Prediction Model",
                            items: [
                                "Data extraction and structuring (PostgreSQL + internal web scraping)",
                                "Dataset preparation: wait time calculation, cleaning, outlier handling",
                                "Benchmarking of multiple algorithms → XGBoost selected for best performance",
                                "Full pipeline: real-time prediction, logging, daily automated retraining, dedicated REST API"
                            ]
                        },
                        {
                            title: "Internal Dashboard",
                            items: [
                                "Full-stack development for business visualisation: activity, cancellations, practitioner load, patient recurrence, anomaly detection",
                                "Architecture: Angular 17 (frontend), Spring Boot (backend), PostgreSQL (database)",
                                "Advanced visualisations: heatmaps, time-series curves, funnels, dynamic tables (ngx-echarts, Angular Material)",
                                "Real-time data refresh + multi-criteria filters"
                            ]
                        },
                        {
                            title: "Deployment",
                            items: [
                                "Deployed on AWS EC2 with Docker + Nginx",
                                "Secured API, continuous monitoring, centralised logs"
                            ]
                        },
                        {
                            title: "Results",
                            items: [
                                "Reliable predictions continuously updated and served via API",
                                "Improved patient information and anticipation of peak demand",
                                "Dashboard actively used by operational teams",
                                "Fully functional ML pipeline + web application in internal production"
                            ]
                        },
                        {
                            title: "Skills Developed",
                            items: [
                                "ML model construction and deployment in production",
                                "Data engineering & automation",
                                "Backend and frontend full-stack development",
                                "Business data visualisation and analysis",
                                "Cloud deployment, security and containerisation",
                                "Cross-functional collaboration with operational teams"
                            ]
                        }
                    ]
                },
                {
                    slug: "pulsof-360",
                    title: "PulsOf 360",
                    icon: "fa-brands fa-linkedin",
                    role: "Python Developer",
                    date: "Septembre – Décembre 2025",
                    context: "School Project",
                    description: "Automated LinkedIn data extraction system based on dynamic content scraping, enabling collection, cleaning and structuring of post interactions for marketing analysis and competitive intelligence.",
                    image: null,
                    tags: [
                        { name: "Python", icon: "fa-brands fa-python" },
                        { name: "Flask", icon: "fa-solid fa-flask" },
                        { name: "Selenium", icon: "fa-solid fa-robot" },
                        { name: "BeautifulSoup", icon: "fa-solid fa-code" },
                        { name: "PostgreSQL", icon: "fa-solid fa-database" },
                        { name: "API", icon: "fa-solid fa-plug" }
                    ],
                    sections: [
                        {
                            title: "Context",
                            content: "As part of an academic project, I designed for PulseOf360 a complete system for extracting and analysing LinkedIn interactions. The goal: transform a simple LinkedIn post URL into exploitable data (likes, comments, engaged profiles) for competitive intelligence and marketing analysis needs."
                        },
                        {
                            title: "Methodology",
                            items: [
                                "Automated scraping adapted to dynamic content: progressive loading, intelligent scroll, DOM analysis",
                                "Process stabilisation via HTML structure variation handling and automatic end-of-load detection",
                                "Data cleaning, normalisation and structuring",
                                "Insertion into a PostgreSQL database with uniqueness constraints to prevent duplicates",
                                "Profile enrichment module via external API: async management, source traceability and reliability score calculation",
                                "Pipeline orchestration via a Python backend (Flask) with a dedicated restitution interface"
                            ]
                        },
                        {
                            title: "Results",
                            items: [
                                "Robust automated extraction from a single LinkedIn URL",
                                "Clean, normalised and analytically usable database",
                                "System capable of identifying engaged profiles, their interactions and quality level",
                                "Tool applicable for competitive intelligence, audience analysis and content strategy"
                            ]
                        },
                        {
                            title: "Skills Developed",
                            items: [
                                "Dynamic content scraping automation",
                                "Advanced cleaning and structuring of unstructured data",
                                "Relational database management & integrity constraints",
                                "Backend API design with Flask",
                                "Marketing analysis & insight extraction",
                                "Data pipeline reliability and error handling"
                            ]
                        }
                    ]
                }
            ]
        },
        // Tech Stack section
        techStack: {
            title: "Technical Stack",
            languages: "Programming Languages",
            tools: "Tools & Cloud",
            libraries: "Library",
            languages_items: [
                { name: "HTML", icon: "fa-brands fa-html5" },
                { name: "CSS", icon: "fa-brands fa-css3-alt" },
                { name: "JavaScript", icon: "fa-brands fa-js" },
                { name: "Python", icon: "fa-brands fa-python" },
                { name: "Angular", icon: "fa-brands fa-angular" },
                { name: "Spring Boot", icon: "fa-solid fa-leaf" }
            ],
            tools_items: [
                { name: "Git", icon: "fa-brands fa-git-alt" },
                { name: "Excel", icon: "fa-solid fa-file-excel" },
                { name: "Power BI", icon: "fa-solid fa-chart-bar" },
                { name: "SQL", icon: "fa-solid fa-database" },
                { name: "AWS", icon: "fa-brands fa-aws" },
                { name: "API", icon: "fa-solid fa-plug" },
                { name: "PostgreSQL", icon: "fa-solid fa-database" }
            ],
            libraries_items: [
                { name: "Pandas", icon: "fa-solid fa-table" },
                { name: "BeautifulSoup", icon: "fa-solid fa-code" },
                { name: "Playwright", icon: "fa-solid fa-theater-masks" },
                { name: "PyTorch", icon: "fa-solid fa-fire" },
                { name: "Matplotlib", icon: "fa-solid fa-chart-line" },
                { name: "ngx-echarts", icon: "fa-solid fa-chart-pie" }
            ]
        },
        // Contact section
        contact: {
            title: "Get In Touch",
            email: "Email Me",
            linkedin: "LinkedIn"
        },
        // Footer
        footer: {
            copyright: "© 2024 Antonin Amouyal. All rights reserved."
        },
        projectDetail: {
            skills: "Skills",
            notFound: "Project not found.",
            backToProjects: "Back to projects"
        }
    },
    fr: {
        // Navigation
        nav: {
            logo: "AA",
            about: "À Propos",
            projects: "Projets",
            backToProjects: "Retour aux projets",
            techStack: "Compétences",
            contact: "Contact"
        },
        // Hero section
        hero: {
            greeting: "Bonjour, je suis Antonin Amouyal",
            jobTitle: "Étudiant en IA & Data",
            location: "Paris, France",
            contactBtn: "Me Contacter",
            workBtn: "Voir Mes Projets"
        },
        // About section
        about: {
            title: "À Propos de Moi",
            paragraph1: "Actuellement étudiant à Aivancity, je mets en pratique mes compétences à travers des projets concrets qui me permettent d'explorer le pouvoir des données pour résoudre des problèmes réels. Mon parcours à Aivancity me permet d'approfondir mes connaissances en intelligence artificielle, data science et machine learning grâce à une approche concrète basée sur des projets et le travail d'équipe.",
            paragraph2: "Mon objectif est de continuer à développer mes compétences en IA et en analyse de données, tout en restant ouvert à de nouvelles opportunités dans des domaines qui me passionnent, comme l'innovation technologique et l'entrepreneuriat."
        },
        // Projects section
        projects: {
            title: "Projets",
            items: [
                {
                    slug: "gender-equality",
                    title: "Égalité Hommes-Femmes en Entreprise",
                    icon: "fa-solid fa-balance-scale",
                    role: "Data Analyst",
                    date: "Septembre – Décembre 2024",
                    context: "Projet École",
                    description: "Diagnostic complet d'égalité professionnelle sur les données SIRH d'une entreprise privée, réalisé dans le cadre de la Clinique de l'IA.",
                    image: null,
                    tags: [
                        { name: "Python", icon: "fa-brands fa-python" },
                        { name: "Pandas", icon: "fa-solid fa-table" },
                        { name: "NumPy", icon: "fa-solid fa-calculator" },
                        { name: "Matplotlib", icon: "fa-solid fa-chart-line" },
                        { name: "Power BI", icon: "fa-solid fa-chart-bar" }
                    ],
                    sections: [
                        { title: "Introduction", content: "Ce projet a été réalisé dans le cadre de la Clinique de l'IA, un dispositif de collaboration entre école et entreprises permettant aux étudiants de travailler sur des problématiques réelles. Il a été mené en groupe, en mobilisant une démarche data complète : collecte, préparation, analyse statistique, visualisation et recommandations stratégiques." },
                        { title: "Contexte", content: "L'égalité femmes-hommes représente aujourd'hui un enjeu majeur, autant sur le plan social que réglementaire et économique. Dans ce contexte, le cabinet AIrhConseil souhaitait exploiter ses données SIRH afin de réaliser un diagnostic objectif de l'égalité professionnelle, d'identifier les éventuels écarts entre hommes et femmes, et de renforcer son suivi en conformité avec les exigences légales (index égalité professionnelle)." },
                        { title: "Démarche", items: ["Exploration des données SIRH : compréhension des 3 tables (info_pro, rémunération, salarié)", "Nettoyage : suppression des doublons, traitement des valeurs manquantes, harmonisation des formats", "Fusion des tables via l'identifiant unique id_salarié pour constituer une base consolidée fiable", "Analyses exploratoires : répartition H/F, écarts salariaux moyens, comparaison par service, contrats (CDD/CDI), promotions, augmentations", "Analyses statistiques : Khi² (genre & variables RH), ANOVA (différences de moyennes), ANCOVA (effet du genre sur les salaires en contrôlant l'âge)", "Validation sur bases externes : pipeline testé sur une base anglaise réelle et une base fictive simulée", "Restitution : tableau de bord interactif Power BI + recommandations actionnables"] },
                        { title: "Résultats", items: ["Parité globale : effectif équilibré (131 hommes / 125 femmes)", "Aucun écart salarial significatif détecté (ANCOVA → sexe non significatif, p > 0,05)", "Aucune corrélation notable entre genre et type de contrat, service, promotion ou augmentation (Khi²)", "Point sensible : le service R&D — rémunération la plus élevée (≈ 6 814 €), faible présence féminine (3 femmes / 15) → indice d'une inégalité structurelle d'accès aux postes techniques", "Méthodologie validée sur bases externes : les inégalités existantes ont été détectées correctement"] },
                        { title: "Recommandations", items: ["Mettre en place un suivi annuel automatisé (salaires, promotions, variables)", "Cibler le renforcement de la présence féminine en R&D via recrutement, mentorat et formation", "Maintenir les bonnes pratiques existantes et surveiller les écarts localisés à l'aide du tableau de bord"] },
                        { title: "Compétences développées", items: ["Préparation et transformation de données (ETL)", "Analyse exploratoire et visualisation", "Statistiques avancées (tests, interprétation, validation d'hypothèses)", "Analyse RH (égalité professionnelle, indicateurs sociaux)", "Création et structuration de dashboards Power BI", "Communication de résultats et formulation de recommandations", "Gestion de projet en équipe", "Maîtrise des exigences RGPD"] }
                    ]
                },
                {
                    slug: "voicera",
                    title: "Voicera AI",
                    icon: "fa-solid fa-microphone",
                    role: "Data Engineer & ML Engineer",
                    date: "Janvier – Mars 2025",
                    context: "Projet École",
                    description: "Conception d'un pipeline complet de données vidéo pour entraîner un modèle de détection de tromperie, combinant collecte automatisée, segmentation multimodale et génération synthétique par GAN.",
                    image: null,
                    tags: [
                        { name: "Python", icon: "fa-brands fa-python" },
                        { name: "TensorFlow", icon: "fa-solid fa-fire" },
                        { name: "MediaPipe", icon: "fa-solid fa-video" },
                        { name: "OpenCV", icon: "fa-solid fa-eye" },
                        { name: "YouTube API", icon: "fa-brands fa-youtube" },
                        { name: "Pandas", icon: "fa-solid fa-table" }
                    ],
                    sections: [
                        { title: "Introduction", content: "Projet réalisé dans le cadre de la Clinique de l'IA, en collaboration avec Voicera AI. Travail mené en groupe sur une problématique réelle : enrichir les données d'entraînement d'un modèle d'analyse de sincérité dans des interactions vidéo. L'objectif était de concevoir un pipeline complet permettant de collecter et structurer des données vidéo, segmenter automatiquement les contenus audio-visuels, générer des données synthétiques réalistes via des modèles génératifs, et préparer une base exploitable pour l'entraînement futur de modèles de détection de tromperie." },
                        { title: "Contexte IA", content: "La détection de la tromperie constitue un problème complexe en vision par ordinateur et en analyse multimodale. Contrairement à la reconnaissance d'émotions, il n'existe pas de dataset standardisé et annoté spécifiquement pour la sincérité. Les principaux défis : absence de données labellisées à grande échelle, faible exploitation des signaux non verbaux dynamiques, risque de biais liés aux données réelles limitées." },
                        { title: "Méthodologie technique", items: ["A. Data Engineering — extraction de métadonnées via YouTube Data API, téléchargement batch, structuration avec pandas, nettoyage et suppression des doublons", "B. Segmentation multimodale — visuelle : détection automatique des changements de scène ; audio : extraction des transcriptions, indexation temporelle, filtrage thématique", "C. GAN vidéo (TensorFlow) — Generator produisant des séquences vidéo à partir d'un vecteur latent ; Discriminator distinguant données réelles et synthétiques ; optimisation conjointe et ajustement progressif des hyperparamètres", "D. Face Manipulation — détection de landmarks faciaux via MediaPipe, manipulation ciblée de zones du visage, traitement frame-by-frame, reconstruction vidéo + synchronisation audio"] },
                        { title: "Résultats", items: ["Mise en place d'un pipeline complet de collecte et structuration vidéo", "Création d'une base multimodale exploitable pour l'entraînement futur", "Implémentation fonctionnelle d'un GAN vidéo sous TensorFlow avec premiers résultats prometteurs en génération faciale", "Limites identifiées : qualité visuelle perfectible, coût computationnel élevé, nécessité d'un dataset plus riche pour stabiliser le GAN"] },
                        { title: "Compétences développées", items: ["Implémentation et entraînement de GAN sous TensorFlow", "Compréhension des dynamiques adversariales (Generator vs Discriminator)", "Data engineering appliqué aux données vidéo", "Segmentation multimodale (vision + audio)", "Préparation de datasets pour Computer Vision", "Optimisation de pipeline et gestion mémoire", "Analyse critique des limites des modèles génératifs", "Réflexion sur biais et éthique des données synthétiques"] }
                    ]
                },
                {
                    slug: "safesante",
                    title: "SafeSante",
                    icon: "fa-solid fa-heartbeat",
                    role: "Développeur Full-Stack & ML Engineer",
                    date: "Avril – Juillet 2025",
                    context: "Stage",
                    description: "Conception et déploiement d'un système de prédiction du temps d'attente en téléconsultation et d'un dashboard interne full-stack pour le monitoring en temps réel.",
                    image: null,
                    tags: [
                        { name: "Python", icon: "fa-brands fa-python" },
                        { name: "XGBoost", icon: "fa-solid fa-robot" },
                        { name: "Angular", icon: "fa-brands fa-angular" },
                        { name: "Spring Boot", icon: "fa-solid fa-leaf" },
                        { name: "PostgreSQL", icon: "fa-solid fa-database" },
                        { name: "Docker", icon: "fa-brands fa-docker" },
                        { name: "AWS EC2", icon: "fa-brands fa-aws" }
                    ],
                    sections: [
                        { title: "Contexte", content: "Stage chez SafeSante : developpement d'un systeme de prediction du temps d'attente en teleconsultation et d'un dashboard interne pour le suivi en temps reel de l'activite, des anomalies et des performances du modele." },
                        { title: "Modele de prediction", items: ["Extraction et structuration des donnees (PostgreSQL + web scraping interne)", "Preparation d'un dataset propre : calcul du temps d'attente, nettoyage, traitement des outliers", "Test de plusieurs algorithmes - XGBoost selectionne pour ses meilleures performances", "Pipeline complet : prediction en temps reel, logs, reentrainement quotidien automatise, API REST dediee"] },
                        { title: "Dashboard interne", items: ["Dashboard complet : activite, annulations, charge praticiens, recurrence patients, anomalies", "Architecture full-stack : Angular 17 (frontend), Spring Boot (backend), PostgreSQL (base de donnees)", "Visualisations avancees : heatmaps, courbes temporelles, funnels, tableaux dynamiques (ngx-echarts, Angular Material)", "Rafraichissement temps reel + filtres multi-criteres"] },
                        { title: "Deploiement", items: ["Deploiement sur AWS EC2 avec Docker + Nginx", "API securisee, monitoring continu, logs centralises"] },
                        { title: "Resultats", items: ["Predictions fiables mises a jour en continu et servies via API", "Amelioration de l'information patient et de l'anticipation des pics d'affluence", "Dashboard utilise activement par les equipes operationnelles", "Pipeline ML + application web pleinement fonctionnels en production interne"] },
                        { title: "Competences developpees", items: ["Construction et deploiement d'un modele ML en production", "Data engineering & automatisation", "Developpement backend et frontend full-stack", "Visualisation et analyse de donnees metier", "Deploiement cloud, securite et conteneurisation", "Travail interdisciplinaire avec les equipes operationnelles"] }
                    ]
                },
                {
                    slug: "pulsof-360",
                    title: "PulsOf 360",
                    icon: "fa-brands fa-linkedin",
                    role: "Développeur Python",
                    date: "Septembre – Décembre 2025",
                    context: "Projet École",
                    description: "Conception d’un système d’extraction automatisée de données LinkedIn, basé sur le scraping de contenus dynamiques, permettant la collecte, le nettoyage et la structuration des interactions de posts en vue d’analyses marketing et de veille concurrentielle.",
                    image: null,
                    tags: [
                        { name: "Python", icon: "fa-brands fa-python" },
                        { name: "Flask", icon: "fa-solid fa-flask" },
                        { name: "Selenium", icon: "fa-solid fa-robot" },
                        { name: "BeautifulSoup", icon: "fa-solid fa-code" },
                        { name: "PostgreSQL", icon: "fa-solid fa-database" },
                        { name: "API", icon: "fa-solid fa-plug" }
                    ],
                    sections: [
                        { title: "Contexte", content: "Projet academique pour PulseOf360 : systeme d'extraction et d'analyse des interactions LinkedIn. Transformer un lien de post LinkedIn en donnees exploitables (likes, commentaires, profils engages) pour la veille concurrentielle et l'analyse marketing." },
                        { title: "Methodologie", items: ["Scraping automatise : chargement progressif, scroll intelligent, analyse du DOM", "Stabilisation via gestion des variations de structure HTML", "Nettoyage, normalisation et structuration des donnees", "Insertion en base PostgreSQL avec regles d'unicite", "Enrichissement des profils via API externe : gestion asynchrone, score de fiabilite", "Orchestration via backend Python (Flask) et interface dediee"] },
                        { title: "Resultats", items: ["Extraction automatisee robuste a partir d'un lien LinkedIn unique", "Base de donnees propre, normalisee et exploitable", "Identification des profils engages et de leurs interactions", "Outil pour la veille concurrentielle et l'analyse d'audience"] },
                        { title: "Competences developpees", items: ["Automatisation de scraping sur contenus dynamiques", "Nettoyage et structuration de donnees non structurees", "Gestion de base relationnelle & contraintes d'integrite", "Conception d'API backend avec Flask", "Analyse marketing & extraction d'insights", "Fiabilisation de pipelines data"] }
                    ]
                }
            ]
        },
        // Tech Stack section
        techStack: {
            title: "Compétences Techniques",
            languages: "Langages de Programmation",
            tools: "Outils & Cloud",
            libraries: "Library",
            languages_items: [
                { name: "HTML", icon: "fa-brands fa-html5" },
                { name: "CSS", icon: "fa-brands fa-css3-alt" },
                { name: "JavaScript", icon: "fa-brands fa-js" },
                { name: "Python", icon: "fa-brands fa-python" },
                { name: "Angular", icon: "fa-brands fa-angular" },
                { name: "Spring Boot", icon: "fa-solid fa-leaf" }
            ],
            tools_items: [
                { name: "Git", icon: "fa-brands fa-git-alt" },
                { name: "Excel", icon: "fa-solid fa-file-excel" },
                { name: "Power BI", icon: "fa-solid fa-chart-bar" },
                { name: "SQL", icon: "fa-solid fa-database" },
                { name: "AWS", icon: "fa-brands fa-aws" },
                { name: "API", icon: "fa-solid fa-plug" },
                { name: "PostgreSQL", icon: "fa-solid fa-database" }
            ],
            libraries_items: [
                { name: "Pandas", icon: "fa-solid fa-table" },
                { name: "BeautifulSoup", icon: "fa-solid fa-code" },
                { name: "Playwright", icon: "fa-solid fa-theater-masks" },
                { name: "PyTorch", icon: "fa-solid fa-fire" },
                { name: "Matplotlib", icon: "fa-solid fa-chart-line" },
                { name: "ngx-echarts", icon: "fa-solid fa-chart-pie" }
            ]
        },
        // Contact section
        contact: {
            title: "Contactez-Moi",
            email: "Envoyez un Email",
            linkedin: "LinkedIn"
        },
        // Footer
        footer: {
            copyright: "© 2024 Antonin Amouyal. Tous droits réservés."
        },
        projectDetail: {
            skills: "Compétences",
            notFound: "Projet non trouvé.",
            backToProjects: "Retour aux projets"
        }
    }
}; 