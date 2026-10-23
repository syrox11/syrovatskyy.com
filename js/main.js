const translations = {
  es: {
    nav_experience: "Experiencia",
    nav_skills: "Skills",
    nav_education: "Educación",
    nav_contact: "Contacto",
    hero_greeting: "Hola, soy",
    hero_desc: "Ingeniero QA con +3 años en aseguramiento de calidad de software: automatización E2E con Playwright y TypeScript, testing de APIs y validación de datos. Ahora en Lausana, disponible de inmediato.",
    hero_cta_contact: "Contactar",
    hero_cta_exp: "Ver experiencia",
    scroll_text: "Scroll",
    exp_label: "Trayectoria",
    exp_heading: "Experiencia <span>Profesional</span>",
    exp1_date: "Nov 2025 — Sep 2026",
    exp1_b1: "Diseño, automatización y mantenimiento de tests E2E con Playwright y TypeScript, escritos en Gherkin/BDD y trazables a los requisitos de negocio (front-end Angular).",
    exp1_b2: "Integración de la suite en pipelines GitLab CI/CD para validar cada despliegue; pruebas de rendimiento con JMeter y k6.",
    exp1_b3: "Testing de APIs con Postman y EchoAPI; validación continua de datos en SQL y MongoDB.",
    exp1_b4: "Automatización de tests en Android y testing funcional en Android/iOS; smoke y regresión de flujos críticos antes de cada release.",
    exp1_b5: "Documentación de una aplicación que nunca se había documentado, que pasó a ser la referencia principal del equipo para distinguir bugs nuevos del comportamiento esperado.",
    exp2_date: "Sep 2024 — Nov 2025",
    exp2_b1: "Soporte técnico de Nivel 3: incidencias complejas e investigaciones en producción, coordinadas con los equipos de desarrollo.",
    exp2_b2: "Soporte a partners en su integración con la API de Experticket; troubleshooting con Postman y análisis de datos con SQL.",
    exp2_b3: "Gestión de despliegues CI/CD con Azure DevOps y validación QA de nuevas funcionalidades antes de su publicación.",
    exp2_b4: "Desarrollo de expertise en software de la industria turística y ecosistemas de ticketing.",
    exp2_b5: "Asumí las responsabilidades del Director de Soporte durante sus ausencias, gestionando la carga de trabajo del departamento.",
    exp4_date: "Sep 2024 — Nov 2025",
    exp4_b1: "Gestión de usuarios y permisos en Active Directory y en entornos Windows, macOS y Linux.",
    exp4_b2: "Administración de cuentas y licencias de Microsoft 365, incluido soporte de Teams.",
    exp4_b3: "Soporte de red local, preparación y despliegue de puestos de trabajo y sustitución de hardware.",
    exp3_date: "Abr 2022 — May 2024",
    exp3_b1: "Testing manual y primeras automatizaciones con Micro Focus UFT sobre una plataforma BPMS / low-code.",
    exp3_b2: "Validaciones funcionales y gestión de tickets, incluidas las apps móviles Android e iOS.",
    exp3_b3: "Testing de APIs REST y SOAP con Postman, Swagger y SoapUI; consultas SQL para validación de datos.",
    exp3_b4: "Script PowerShell con tarea programada diaria que actualizaba la aplicación a la última versión en varios equipos.",
    exp3_b5: "Despliegues con Azure DevOps, administración de usuarios en Active Directory y dashboards en Power BI.",
    skills_label: "Competencias",
    skills_heading: "Tech <span>Stack</span>",
    skill1_title: "Automatización de Testing",
    skill3_title: "Lenguajes & Datos",
    skill4_title: "Herramientas",
    skill5_title: "Metodologías & CI/CD",
    skill5_tag1: "Diseño de estrategia de testing",
    skill6_title: "Plataformas & Sistemas",
    nav_projects: "Proyectos",
    proj_label: "Portfolio",
    proj_heading: "Proyectos <span>destacados</span>",
    proj_play: "Jugar",
    proj_try: "Probar",
    proj_code: "Código",
    proj1_desc: "Juego de navegador fan-made del universo Jak and Daxter, al estilo Vampire Survivors. 211 tests unitarios con Vitest y 23 tests E2E con Playwright sobre el canvas, incluidos tests de regresión y de rendimiento; el despliegue en GitHub Pages solo ocurre si toda la suite pasa.",
    proj2_desc: "Suite E2E con Playwright y TypeScript escrita en Gherkin/BDD, con Page Object Model y ejecución en GitHub Actions.",
    proj3_desc: "Tests de API REST con Playwright y Postman/Newman: CRUD, autenticación, contratos y casos negativos.",
    proj4_desc: "Herramienta web para equipos de QA: a partir de unos parámetros genera escenarios Gherkin, step definitions (playwright-bdd o Cucumber.js) y casos de prueba manuales exportables a CSV. Cada .feature generado se valida con el parser oficial de Gherkin y cada paso se comprueba contra sus step definitions; 43 tests unitarios y 22 E2E con Playwright.",
    edu_label: "Formación & Idiomas",
    edu_heading: "Educación & <span>Idiomas</span>",
    edu_card_title: "Educación",
    edu_degree: "Técnico Superior en Administración de Sistemas Informáticos en Red",
    edu_eqf: "EQF Nivel 5 — ASIR",
    lang_card_title: "Idiomas",
    lang_es: "Español",
    lang_ru: "Ruso",
    lang_val: "Valenciano",
    lang_en: "Inglés",
    lang_fr: "Francés",
    lang_native: "Nativo",
    lang_native2: "Nativo",
    lang_native3: "Nativo",
    lang_en_level: "Avanzado (C1)",
    lang_fr_level: "B1 (en progreso, inmersión diaria)",
    contact_label: "Hablemos",
    contact_heading: "Ponte en <span>contacto</span>",
    contact_phone_label: "Teléfono",
    contact_location_label: "Ubicación",
    contact_avail_label: "Disponibilidad",
    contact_avail_value: "Inmediata · Ciudadano UE (libre circulación, sin sponsorship)",
    footer_text: "Todos los derechos reservados.",
  },
  en: {
    nav_experience: "Experience",
    nav_skills: "Skills",
    nav_education: "Education",
    nav_contact: "Contact",
    hero_greeting: "Hi, I'm",
    hero_desc: "QA Engineer with 3+ years in software quality assurance: E2E automation with Playwright and TypeScript, API testing and data validation. Now based in Lausanne, available immediately.",
    hero_cta_contact: "Get in touch",
    hero_cta_exp: "See experience",
    scroll_text: "Scroll",
    exp_label: "Career",
    exp_heading: "Professional <span>Experience</span>",
    exp1_date: "Nov 2025 — Sep 2026",
    exp1_b1: "Designed, automated and maintained E2E tests with Playwright and TypeScript, written in Gherkin/BDD and traceable to business requirements (Angular front end).",
    exp1_b2: "Integrated the suite into GitLab CI/CD pipelines to validate every deployment; performance testing with JMeter and k6.",
    exp1_b3: "API testing with Postman and EchoAPI; continuous data validation against SQL and MongoDB.",
    exp1_b4: "Android test automation and Android/iOS functional testing; smoke and regression testing of critical flows before each release.",
    exp1_b5: "Documented a long-used but never-documented application; it became the team's main reference for telling new bugs from expected behaviour.",
    exp2_date: "Sep 2024 — Nov 2025",
    exp2_b1: "Level 3 technical support: complex incidents and production investigations, coordinated with development teams.",
    exp2_b2: "Supported partners integrating with the Experticket API; troubleshooting with Postman and data analysis with SQL.",
    exp2_b3: "Managed CI/CD deployments with Azure DevOps and contributed to QA validation of new features before release.",
    exp2_b4: "Developed domain expertise in tourism industry software and ticketing ecosystems.",
    exp2_b5: "Covered the Director of Support's responsibilities during his absences, running the department's workload.",
    exp4_date: "Sep 2024 — Nov 2025",
    exp4_b1: "User and permissions management in Active Directory and across Windows, macOS and Linux.",
    exp4_b2: "Microsoft 365 accounts and licence administration, including Teams support.",
    exp4_b3: "Local network support, workstation preparation and deployment, hardware replacement.",
    exp3_date: "Apr 2022 — May 2024",
    exp3_b1: "Manual testing and first automated tests with Micro Focus UFT on a BPMS / low-code platform.",
    exp3_b2: "Functional validation and ticket management, including Android and iOS mobile apps.",
    exp3_b3: "REST and SOAP API testing with Postman, Swagger and SoapUI; SQL queries for data validation.",
    exp3_b4: "PowerShell script with a daily scheduled task that updated the application to the latest version across multiple machines.",
    exp3_b5: "Deployments with Azure DevOps, Active Directory user administration and Power BI dashboards.",
    skills_label: "Competencies",
    skills_heading: "Tech <span>Stack</span>",
    skill1_title: "Test Automation",
    skill3_title: "Languages & Data",
    skill4_title: "Tools",
    skill5_title: "Methodologies & CI/CD",
    skill5_tag1: "Test Strategy Design",
    skill6_title: "Platforms & Systems",
    nav_projects: "Projects",
    proj_label: "Portfolio",
    proj_heading: "Featured <span>Projects</span>",
    proj_play: "Play",
    proj_try: "Try it",
    proj_code: "Code",
    proj1_desc: "Fan-made browser game set in the Jak and Daxter universe, in the style of Vampire Survivors. 211 unit tests with Vitest and 23 Playwright E2E tests driving the canvas, including regression and performance checks; it only deploys to GitHub Pages when the whole suite passes.",
    proj2_desc: "E2E suite with Playwright and TypeScript written in Gherkin/BDD, using the Page Object Model and running in GitHub Actions.",
    proj3_desc: "REST API tests with Playwright and Postman/Newman: CRUD, authentication, contract and negative cases.",
    proj4_desc: "A web tool for QA teams: from a few parameters it generates Gherkin scenarios, step definitions (playwright-bdd or Cucumber.js) and manual test cases exportable to CSV. Every generated .feature is validated with the official Gherkin parser and every step is checked against its step definitions; 43 unit tests and 22 Playwright E2E tests.",
    edu_label: "Education & Languages",
    edu_heading: "Education & <span>Languages</span>",
    edu_card_title: "Education",
    edu_degree: "Higher Vocational Training in Network Systems Administration",
    edu_eqf: "EQF Level 5 — ASIR",
    lang_card_title: "Languages",
    lang_es: "Spanish",
    lang_ru: "Russian",
    lang_val: "Valencian",
    lang_en: "English",
    lang_fr: "French",
    lang_native: "Native",
    lang_native2: "Native",
    lang_native3: "Native",
    lang_en_level: "Advanced (C1)",
    lang_fr_level: "B1 (improving, daily immersion)",
    contact_label: "Let's talk",
    contact_heading: "Get in <span>touch</span>",
    contact_phone_label: "Phone",
    contact_location_label: "Location",
    contact_avail_label: "Availability",
    contact_avail_value: "Immediate · EU citizen (free movement, no sponsorship needed)",
    footer_text: "All rights reserved.",
  },
  fr: {
    nav_experience: "Expérience",
    nav_skills: "Compétences",
    nav_education: "Formation",
    nav_contact: "Contact",
    hero_greeting: "Bonjour, je suis",
    hero_desc: "Ingénieur QA avec plus de 3 ans en assurance qualité logicielle : automatisation E2E avec Playwright et TypeScript, tests d'API et validation de données. Basé à Lausanne, disponible immédiatement.",
    hero_cta_contact: "Me contacter",
    hero_cta_exp: "Voir l'expérience",
    scroll_text: "Défiler",
    exp_label: "Parcours",
    exp_heading: "Expérience <span>Professionnelle</span>",
    exp1_date: "Nov 2025 — Sep 2026",
    exp1_b1: "Conception, automatisation et maintenance de tests E2E avec Playwright et TypeScript, rédigés en Gherkin/BDD et traçables aux exigences métier (front-end Angular).",
    exp1_b2: "Intégration de la suite dans des pipelines GitLab CI/CD pour valider chaque déploiement ; tests de performance avec JMeter et k6.",
    exp1_b3: "Tests d'API avec Postman et EchoAPI ; validation continue des données dans SQL et MongoDB.",
    exp1_b4: "Automatisation de tests Android et tests fonctionnels Android/iOS ; tests smoke et de régression des flux critiques avant chaque release.",
    exp1_b5: "Documentation d'une application utilisée depuis longtemps mais jamais documentée, devenue la référence principale de l'équipe pour distinguer les nouveaux bugs du comportement attendu.",
    exp2_date: "Sep 2024 — Nov 2025",
    exp2_b1: "Support technique de niveau 3 : incidents complexes et investigations en production, en coordination avec les équipes de développement.",
    exp2_b2: "Accompagnement des partenaires dans leur intégration à l'API Experticket ; troubleshooting avec Postman et analyse de données en SQL.",
    exp2_b3: "Gestion des déploiements CI/CD avec Azure DevOps et validation QA des nouvelles fonctionnalités avant leur mise en production.",
    exp2_b4: "Développement d'expertise dans les logiciels de l'industrie touristique et les écosystèmes de billetterie.",
    exp2_b5: "Reprise des responsabilités du Directeur du support pendant ses absences, avec la gestion de la charge de travail du département.",
    exp4_date: "Sep 2024 — Nov 2025",
    exp4_b1: "Gestion des utilisateurs et des droits dans Active Directory et sous Windows, macOS et Linux.",
    exp4_b2: "Administration des comptes et licences Microsoft 365, y compris le support Teams.",
    exp4_b3: "Support réseau local, préparation et déploiement de postes de travail, remplacement de matériel.",
    exp3_date: "Avr 2022 — Mai 2024",
    exp3_b1: "Tests manuels et premières automatisations avec Micro Focus UFT sur une plateforme BPMS / low-code.",
    exp3_b2: "Validations fonctionnelles et gestion de tickets, y compris les applications mobiles Android et iOS.",
    exp3_b3: "Tests d'API REST et SOAP avec Postman, Swagger et SoapUI ; requêtes SQL pour la validation des données.",
    exp3_b4: "Script PowerShell avec tâche planifiée quotidienne mettant à jour l'application vers la dernière version sur plusieurs postes.",
    exp3_b5: "Déploiements avec Azure DevOps, administration des utilisateurs Active Directory et tableaux de bord Power BI.",
    skills_label: "Compétences",
    skills_heading: "Tech <span>Stack</span>",
    skill1_title: "Automatisation des Tests",
    skill3_title: "Langages & Données",
    skill4_title: "Outils",
    skill5_title: "Méthodologies & CI/CD",
    skill5_tag1: "Conception de stratégie de test",
    skill6_title: "Plateformes & Systèmes",
    nav_projects: "Projets",
    proj_label: "Portfolio",
    proj_heading: "Projets <span>phares</span>",
    proj_play: "Jouer",
    proj_try: "Essayer",
    proj_code: "Code",
    proj1_desc: "Jeu de navigateur fan-made dans l’univers de Jak and Daxter, dans le style de Vampire Survivors. 211 tests unitaires avec Vitest et 23 tests E2E Playwright pilotant le canvas, dont des tests de régression et de performance ; le déploiement sur GitHub Pages n’a lieu que si toute la suite passe.",
    proj2_desc: "Suite E2E avec Playwright et TypeScript rédigée en Gherkin/BDD, avec Page Object Model et exécution dans GitHub Actions.",
    proj3_desc: "Tests d’API REST avec Playwright et Postman/Newman : CRUD, authentification, contrats et cas négatifs.",
    proj4_desc: "Outil web pour les équipes QA : à partir de quelques paramètres, il génère des scénarios Gherkin, des step definitions (playwright-bdd ou Cucumber.js) et des cas de test manuels exportables en CSV. Chaque .feature généré est validé avec le parser Gherkin officiel et chaque étape est vérifiée contre ses step definitions ; 43 tests unitaires et 22 tests E2E Playwright.",
    edu_label: "Formation & Langues",
    edu_heading: "Formation & <span>Langues</span>",
    edu_card_title: "Formation",
    edu_degree: "Formation Professionnelle Supérieure en Administration de Systèmes Informatiques en Réseau",
    edu_eqf: "Niveau CEC/EQF 5 — ASIR",
    lang_card_title: "Langues",
    lang_es: "Espagnol",
    lang_ru: "Russe",
    lang_val: "Valencien",
    lang_en: "Anglais",
    lang_fr: "Français",
    lang_native: "Natif",
    lang_native2: "Natif",
    lang_native3: "Natif",
    lang_en_level: "Avancé (C1)",
    lang_fr_level: "B1 (en progression, immersion quotidienne)",
    contact_label: "Parlons",
    contact_heading: "Entrons en <span>contact</span>",
    contact_phone_label: "Téléphone",
    contact_location_label: "Localisation",
    contact_avail_label: "Disponibilité",
    contact_avail_value: "Immédiate · Citoyen UE (libre circulation, permis délivré sur contrat)",
    footer_text: "Tous droits réservés.",
  }
};

const supportedLangs = ['fr', 'en', 'es'];
let currentLang = 'fr';

let savedLang = null;
try { savedLang = localStorage.getItem('lang'); } catch (e) {}
const browserLang = (navigator.language || navigator.userLanguage || '').slice(0, 2);
if (savedLang && supportedLangs.includes(savedLang)) {
  currentLang = savedLang;
} else if (supportedLangs.includes(browserLang)) {
  currentLang = browserLang;
}

setLang(currentLang);

function setLang(lang) {
  currentLang = lang;
  try { localStorage.setItem('lang', lang); } catch (e) {}
  document.documentElement.lang = lang;

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.textContent.trim().toLowerCase() === lang);
  });

  const t = translations[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key]) {
      if (t[key].includes('<span>')) {
        el.innerHTML = t[key];
      } else {
        el.textContent = t[key];
      }
    }
  });
}

const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

function toggleMobileMenu() {
  document.getElementById('navLinks').classList.toggle('mobile-open');
}

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('navLinks').classList.remove('mobile-open');
  });
});

const revealElements = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

revealElements.forEach(el => revealObserver.observe(el));

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
