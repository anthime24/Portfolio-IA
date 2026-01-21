// Translations object
const translations = {
    en: {
        // Navigation
        nav: {
            logo: "AA",
            about: "About",
            experience: "Experience",
            projects: "Projects",
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
        // Experience section
        experience: {
            title: "Experience",
            items: [
                {
                    date: "September 2024 - Present",
                    title: "Student",
                    company: "Aivancity School for Technology, Business & Society Paris-Cachan",
                    description: "Studying in the Grande École program specializing in artificial intelligence. Acquiring technical skills in programming, data analysis, and AI model design. Benefiting from industry expert interventions during seminars and workshops."
                },
                {
                    date: "2022 - 2024",
                    title: "Self-Employed",
                    company: "Sneaker Reselling Business",
                    description: "Managed end-to-end transactions from purchasing to reselling. Created and maintained detailed Excel spreadsheets tracking inventory and calculating profitability. Conducted market research to identify trends and adjust selling prices. Used web scraping techniques to extract data on prices, popular models, and market trends."
                },
                {
                    date: "October 2024 - Present",
                    title: "Coach",
                    company: "ES Sucy Handball",
                    description: "Coach a handball team, managing training sessions and supervising matches."
                }
            ]
        },
        // Projects section
        projects: {
            title: "Projects",
            items: [
                {
                    title: "Voicera AI",
                    icon: "fa-solid fa-microphone",
                    description: "Training generative models for creating synthetic sincerity videos. Using the GAN method to train a video generation model with TensorFlow, achieving a 92% faithfulness rate in sincerity recognition.",
                    image: null,
                    link: null,
                    tags: [
                        { name: "TensorFlow", icon: "fa-brands fa-python" },
                        { name: "AI", icon: "fa-solid fa-brain" },
                        { name: "GAN", icon: "fa-solid fa-chart-network" }
                    ]
                },
                {
                    title: "Gender Equality in Business",
                    icon: "fa-solid fa-balance-scale",
                    description: "Conducted a team data analysis for gender equality diagnostics. Processed data using libraries such as Pandas, Matplotlib, and Pingouin. Created interactive visual reports via Power BI, and proposed improvements to company policy, such as addressing the 15% gender pay gap and promotion and increase trends.",
                    image: null,
                    link: null,
                    tags: [
                        { name: "Python", icon: "fa-brands fa-python" },
                        { name: "Pandas", icon: "fa-solid fa-table" },
                        { name: "Power BI", icon: "fa-solid fa-chart-bar" }
                    ]
                },
                {
                    title: "SafeSante",
                    icon: "fa-solid fa-heartbeat",
                    description: "I designed and deployed a teleconsultation wait time prediction algorithm (feature engineering, training and monitoring via an interactive dashboard). Additionally, I developed an Angular/Spring Boot dashboard for real-time monitoring and historical analysis of teleconsultations, integrating interactive visualizations. These tools have improved operational monitoring, enabled real-time anomaly detection, and optimized medical workflows.",
                    image: null,
                    link: null,
                    tags: [
                        { name: "Python", icon: "fa-brands fa-python" },
                        { name: "Angular", icon: "fa-brands fa-angular" },
                        { name: "Spring Boot", icon: "fa-solid fa-leaf" },
                        { name: "Machine Learning", icon: "fa-solid fa-brain" }
                    ]
                },
                {
                    title: "PulsOf 360",
                    icon: "fa-brands fa-linkedin",
                    description: "Design of an automated LinkedIn data extraction system based on dynamic content scraping, enabling collection, cleaning and structuring of post interactions for marketing analysis and competitive intelligence.",
                    image: null,
                    link: null,
                    tags: [
                        { name: "Playwright", icon: "fa-solid fa-theater-masks" },
                        { name: "Python", icon: "fa-brands fa-python" },
                        { name: "SQL", icon: "fa-solid fa-database" },
                        { name: "API", icon: "fa-solid fa-plug" }
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
        }
    },
    fr: {
        // Navigation
        nav: {
            logo: "AA",
            about: "À Propos",
            experience: "Expérience",
            projects: "Projets",
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
        // Experience section
        experience: {
            title: "Expérience",
            items: [
                {
                    date: "Septembre 2024 - Présent",
                    title: "Étudiant",
                    company: "Aivancity School for Technology, Business & Society Paris-Cachan",
                    description: "Étudiant dans le programme Grande École spécialisé en intelligence artificielle. Acquisition de compétences techniques en programmation, analyse de données et conception de modèles d'IA. Bénéficiant d'interventions d'experts du secteur lors de séminaires et workshops."
                },
                {
                    date: "2022 - 2024",
                    title: "Auto-entrepreneur",
                    company: "Achat-Revente de Sneakers",
                    description: "Gestion complète des transactions, depuis l'achat des produits jusqu'à leur revente. Création et maintien d'un tableau Excel détaillant chaque transaction, suivi de l'inventaire et calcul de la rentabilité. Études de marché pour identifier les tendances et ajuster les prix de vente. Utilisation des techniques de web scraping pour extraire des données sur les prix, les modèles populaires et les tendances du marché."
                },
                {
                    date: "Octobre 2024 - Présent",
                    title: "Coach",
                    company: "ES Sucy Handball",
                    description: "J'Entraîne une équipe de handball, en gérant des séances d'entraînement et en supervisant des matchs."
                }
            ]
        },
        // Projects section
        projects: {
            title: "Projets",
            items: [
                {
                    title: "Voicera AI",
                    icon: "fa-solid fa-microphone",
                    description: "Entraînement de modèles génératifs pour la création de vidéos de sincérité synthétiques. Utilisation de la méthode GAN pour entraîner un modèle de génération vidéo avec TensorFlow, pour atteindre un taux de fidélité de 92% dans la reconnaissance de sincérité.",
                    image: null,
                    link: null,
                    tags: [
                        { name: "TensorFlow", icon: "fa-brands fa-python" },
                        { name: "IA", icon: "fa-solid fa-brain" },
                        { name: "GAN", icon: "fa-solid fa-chart-network" }
                    ]
                },
                {
                    title: "Égalité Hommes-Femmes en Entreprise",
                    icon: "fa-solid fa-balance-scale",
                    description: "Réalisation d'une analyse de données en équipe pour le diagnostic égalité femmes-hommes. Traitement des données avec des bibliothèques telles que Pandas, Matplotlib et Pingouin. Création de rapports visuels interactifs via Power BI, et proposition d'améliorations sur la politique de l'entreprise, tels que l'écart salarial de 15% entre les sexes, et les tendances de promotion et augmentation.",
                    image: null,
                    link: null,
                    tags: [
                        { name: "Python", icon: "fa-brands fa-python" },
                        { name: "Pandas", icon: "fa-solid fa-table" },
                        { name: "Power BI", icon: "fa-solid fa-chart-bar" }
                    ]
                },
                {
                    title: "SafeSante",
                    icon: "fa-solid fa-heartbeat",
                    description: "J'ai conçu et déployé un algorithme de prédiction du temps d'attente en téléconsultation (feature engineering, entraînement et suivi via un dashboard interactif). Parallèlement, j'ai développé un dashboard Angular/Spring Boot pour le monitoring en temps réel et l'analyse historique des téléconsultations, intégrant des visualisations interactives. Ces outils ont permis d'améliorer le suivi opérationnel, de détecter des anomalies en temps réel et d'optimiser les flux médicaux.",
                    image: null,
                    link: null,
                    tags: [
                        { name: "Python", icon: "fa-brands fa-python" },
                        { name: "Angular", icon: "fa-brands fa-angular" },
                        { name: "Spring Boot", icon: "fa-solid fa-leaf" },
                        { name: "Machine Learning", icon: "fa-solid fa-brain" }
                    ]
                },
                {
                    title: "PulsOf 360",
                    icon: "fa-brands fa-linkedin",
                    description: "Conception d’un système d’extraction automatisée de données LinkedIn, basé sur le scraping de contenus dynamiques, permettant la collecte, le nettoyage et la structuration des interactions de posts en vue d’analyses marketing et de veille concurrentielle.",
                    image: null,
                    link: null,
                    tags: [
                        { name: "Playwright", icon: "fa-solid fa-theater-masks" },
                        { name: "Python", icon: "fa-brands fa-python" },
                        { name: "SQL", icon: "fa-solid fa-database" },
                        { name: "API", icon: "fa-solid fa-plug" }
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
        }
    }
}; 