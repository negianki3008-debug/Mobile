/**
 * ExamSyllabusHub — Main JavaScript
 * Modular ES6 implementation for search, filter, modal, FAQ, and UI interactions.
 */

/* ============================================================
   EXAM DATABASE
   ============================================================ */
const examsData = [
  {
    id: 'upsc-cse',
    name: 'UPSC CSE',
    category: 'upsc',
    categoryLabel: 'UPSC',
    icon: 'fa-landmark',
    subjects: ['History', 'Geography', 'Polity', 'Economy', 'Environment', 'Science & Technology', 'Ethics', 'CSAT', 'Essay', 'Current Affairs'],
    stages: ['Prelims', 'Mains', 'Interview'],
    pattern: 'Prelims: 2 papers (GS + CSAT), 200 marks each. Mains: 9 papers (Essay + GS I-IV + Optional I-II + Indian Language + English). Interview: 275 marks.',
    marks: 'Prelims: 400 (qualifying). Mains: 1750. Interview: 275. Total: 2025 marks.',
    duration: 'Prelims: 2 hours per paper. Mains: 3 hours per paper.',
    eligibility: 'Bachelor\'s degree from recognized university. Age: 21-32 years (general).',
    selection: 'Prelims → Mains → Personality Test (Interview) → Final Merit List',
    officialUrl: 'https://upsc.gov.in',
    syllabus: 'Prelims GS: History, Geography, Polity, Economy, Environment, Science & Tech, Current Affairs. CSAT: Comprehension, Logical Reasoning, Quantitative Aptitude. Mains: Essay, GS Papers I-IV, Optional Subject (2 papers), Indian Language, English.'
  },
  {
    id: 'ssc-cgl',
    name: 'SSC CGL',
    category: 'ssc',
    categoryLabel: 'SSC',
    icon: 'fa-building',
    subjects: ['English', 'Quantitative Aptitude', 'General Intelligence', 'General Awareness'],
    pattern: 'Tier I: 4 sections, 100 questions, 200 marks. Tier II: Paper I (Quant), Paper II (English), Paper III (Statistics - optional).',
    marks: 'Tier I: 200 marks. Tier II: 200 marks per paper.',
    duration: 'Tier I: 60 minutes. Tier II: 2 hours per paper.',
    eligibility: 'Graduate in any discipline. Age: 18-32 years.',
    selection: 'Tier I → Tier II → Tier III (Descriptive) → Tier IV (Skill Test) → Document Verification',
    officialUrl: 'https://ssc.nic.in',
    syllabus: 'English: Vocabulary, Grammar, Comprehension. Quant: Arithmetic, Algebra, Geometry, Trigonometry. Reasoning: Analogies, Coding-Decoding, Series, Puzzles. GK: History, Geography, Polity, Science, Current Affairs.'
  },
  {
    id: 'ssc-chsl',
    name: 'SSC CHSL',
    category: 'ssc',
    categoryLabel: 'SSC',
    icon: 'fa-building',
    subjects: ['English', 'Quant', 'Reasoning', 'GK'],
    pattern: 'Tier I: 100 MCQs across 4 sections. Tier II: Descriptive paper. Tier III: Skill/Typing Test.',
    marks: 'Tier I: 200 marks. Tier II: 100 marks.',
    duration: 'Tier I: 60 minutes. Tier II: 1 hour.',
    eligibility: '12th pass from recognized board. Age: 18-27 years.',
    selection: 'Tier I → Tier II → Tier III (Skill Test) → Document Verification',
    officialUrl: 'https://ssc.nic.in',
    syllabus: 'English Language, General Intelligence, Quantitative Aptitude, General Awareness covering History, Geography, Polity, Economics, and Current Affairs.'
  },
  {
    id: 'ssc-mts',
    name: 'SSC MTS',
    category: 'ssc',
    categoryLabel: 'SSC',
    icon: 'fa-building',
    subjects: ['English', 'Quant', 'Reasoning', 'General Awareness'],
    pattern: 'Session I: Mathematical & Reasoning (45 min). Session II: GK & English (45 min).',
    marks: 'Session I: 90 marks. Session II: 90 marks. Total: 180 marks.',
    duration: '45 minutes per session.',
    eligibility: '10th pass or equivalent. Age: 18-25 years.',
    selection: 'CBT → Document Verification → Final Selection',
    officialUrl: 'https://ssc.nic.in',
    syllabus: 'Numerical & Mathematical Ability, Reasoning, English Language, General Awareness including History, Geography, Polity, and Current Affairs.'
  },
  {
    id: 'ibps-po',
    name: 'IBPS PO',
    category: 'banking',
    categoryLabel: 'Banking',
    icon: 'fa-university',
    subjects: ['English', 'Quant', 'Reasoning', 'Computer', 'Banking Awareness'],
    pattern: 'Prelims: 3 sections (English, Quant, Reasoning). Mains: 5 sections including GA & Computer.',
    marks: 'Prelims: 100 marks. Mains: 200 marks.',
    duration: 'Prelims: 60 minutes. Mains: 3 hours 30 minutes.',
    eligibility: 'Graduate in any discipline. Age: 20-30 years.',
    selection: 'Prelims → Mains → Interview → Provisional Allotment',
    officialUrl: 'https://ibps.in',
    syllabus: 'English Language, Quantitative Aptitude, Reasoning Ability, Computer Knowledge, General/Banking/Financial Awareness, Data Analysis & Interpretation.'
  },
  {
    id: 'sbi-po',
    name: 'SBI PO',
    category: 'banking',
    categoryLabel: 'Banking',
    icon: 'fa-university',
    subjects: ['English', 'Quant', 'Reasoning', 'Current Affairs'],
    pattern: 'Prelims: 3 sections. Mains: Objective + Descriptive. Group Exercise & Interview.',
    marks: 'Prelims: 100. Mains Objective: 200. Descriptive: 50. Interview: 30.',
    duration: 'Prelims: 60 min. Mains: 3 hours 30 min.',
    eligibility: 'Graduate in any discipline. Age: 21-30 years.',
    selection: 'Prelims → Mains → Group Exercise → Interview → Final Merit',
    officialUrl: 'https://sbi.co.in',
    syllabus: 'English, Quantitative Aptitude, Reasoning, General/Economy/Banking Awareness, Data Analysis, Letter & Essay Writing.'
  },
  {
    id: 'rbi-grade-b',
    name: 'RBI Grade B',
    category: 'banking',
    categoryLabel: 'Banking',
    icon: 'fa-university',
    subjects: ['Finance', 'Economics', 'English', 'General Awareness'],
    pattern: 'Phase I: Objective. Phase II: 3 papers (Economics, English, Finance & Management). Interview.',
    marks: 'Phase I: 200. Phase II: 300. Interview: 75.',
    duration: 'Phase I: 2 hours. Phase II: 1.5-3 hours per paper.',
    eligibility: 'Graduate with 60% marks. Age: 21-30 years.',
    selection: 'Phase I → Phase II → Interview → Final Selection',
    officialUrl: 'https://rbi.org.in',
    syllabus: 'General Awareness, English Writing Skills, Economic & Social Issues, Finance & Management including RBI functions and monetary policy.'
  },
  {
    id: 'rrb-ntpc',
    name: 'RRB NTPC',
    category: 'railway',
    categoryLabel: 'Railway',
    icon: 'fa-train',
    subjects: ['Mathematics', 'Reasoning', 'General Awareness'],
    pattern: 'CBT 1: 100 questions. CBT 2: 120 questions. Typing Skill Test / Aptitude Test.',
    marks: 'CBT 1: 100 marks. CBT 2: 120 marks.',
    duration: 'CBT 1: 90 minutes. CBT 2: 90 minutes.',
    eligibility: '10th/12th/Graduate depending on post. Age: 18-33 years.',
    selection: 'CBT 1 → CBT 2 → Skill Test → Document Verification → Medical',
    officialUrl: 'https://indianrailways.gov.in',
    syllabus: 'Mathematics (Arithmetic, Algebra), General Intelligence & Reasoning, General Awareness (History, Geography, Polity, Science, Railways).'
  },
  {
    id: 'rrb-group-d',
    name: 'RRB Group D',
    category: 'railway',
    categoryLabel: 'Railway',
    icon: 'fa-train',
    subjects: ['Mathematics', 'Science', 'Reasoning', 'Current Affairs'],
    pattern: 'CBT: 100 MCQs across 4 sections. PET (Physical Efficiency Test).',
    marks: 'CBT: 100 marks (negative marking applicable).',
    duration: '90 minutes.',
    eligibility: '10th pass or ITI. Age: 18-33 years.',
    selection: 'CBT → PET → Document Verification → Medical Examination',
    officialUrl: 'https://indianrailways.gov.in',
    syllabus: 'Mathematics, General Science (Physics, Chemistry, Biology), General Intelligence & Reasoning, General Awareness & Current Affairs.'
  },
  {
    id: 'nda',
    name: 'NDA',
    category: 'defence',
    categoryLabel: 'Defence',
    icon: 'fa-shield-alt',
    subjects: ['Mathematics', 'General Ability Test'],
    pattern: 'Written Exam: Paper I (Mathematics) + Paper II (GAT). SSB Interview.',
    marks: 'Mathematics: 300 marks. GAT: 600 marks. SSB: 900 marks.',
    duration: 'Mathematics: 2.5 hours. GAT: 2.5 hours.',
    eligibility: '12th pass (Army/Navy/AF). Age: 16.5-19.5 years. Unmarried male/female.',
    selection: 'Written Exam → SSB Interview → Medical → Final Merit',
    officialUrl: 'https://upsc.gov.in',
    syllabus: 'Mathematics: Algebra, Trigonometry, Calculus, Statistics. GAT: English, General Knowledge (Physics, Chemistry, History, Geography, Current Events).'
  },
  {
    id: 'cds',
    name: 'CDS',
    category: 'defence',
    categoryLabel: 'Defence',
    icon: 'fa-shield-alt',
    subjects: ['English', 'General Knowledge', 'Mathematics'],
    pattern: 'Written: English, GK, and Mathematics (for IMA/AFA/INA). OTA: English + GK only.',
    marks: 'Each paper: 100 marks. Total: 300 marks (IMA/AFA/INA) or 200 (OTA).',
    duration: '2 hours per paper.',
    eligibility: 'Graduate (IMA/OTA) or B.Tech (AFA) or B.Sc with Physics/Maths (INA). Age: 19-25 years.',
    selection: 'Written Exam → SSB Interview → Medical → Merit List',
    officialUrl: 'https://upsc.gov.in',
    syllabus: 'English: Vocabulary, Grammar, Comprehension. GK: History, Geography, Polity, Science, Current Affairs. Maths: Arithmetic, Algebra, Trigonometry, Geometry.'
  },
  {
    id: 'afcat',
    name: 'AFCAT',
    category: 'defence',
    categoryLabel: 'Defence',
    icon: 'fa-shield-alt',
    subjects: ['English', 'Numerical Ability', 'General Awareness', 'Reasoning'],
    pattern: 'Online test: 100 questions across 4 sections. AFSB Interview for qualified candidates.',
    marks: '300 marks (3 marks per correct answer, -1 for wrong).',
    duration: '2 hours.',
    eligibility: 'Graduate with 60% (Flying: 60% in Maths & Physics at 10+2). Age: 20-24 years (Flying).',
    selection: 'AFCAT Exam → AFSB Interview → Medical → All India Merit',
    officialUrl: 'https://afcat.cdac.in',
    syllabus: 'Verbal Ability, Numerical Ability, Reasoning & Military Aptitude, General Awareness (History, Geography, Polity, Science, Defence).'
  },
  {
    id: 'capf',
    name: 'CAPF (AC)',
    category: 'defence',
    categoryLabel: 'Defence',
    icon: 'fa-shield-alt',
    subjects: ['General Studies', 'Essay', 'Comprehension'],
    pattern: 'Paper I: General Ability & Intelligence. Paper II: Essay, Comprehension & Precis.',
    marks: 'Paper I: 250 marks. Paper II: 200 marks (qualifying).',
    duration: '2 hours per paper.',
    eligibility: 'Graduate. Age: 20-25 years.',
    selection: 'Written → PET/PST → Interview → Medical → Final Merit',
    officialUrl: 'https://upsc.gov.in',
    syllabus: 'General Science, History, Geography, Polity, Economy, Current Affairs, Essay Writing, Comprehension, Precis Writing.'
  },
  {
    id: 'ctet',
    name: 'CTET',
    category: 'teaching',
    categoryLabel: 'Teaching',
    icon: 'fa-chalkboard-teacher',
    subjects: ['Child Development', 'Pedagogy', 'Mathematics', 'EVS', 'Language I', 'Language II'],
    pattern: 'Paper I (Classes I-V) and Paper II (Classes VI-VIII). 150 MCQs each.',
    marks: '150 marks per paper. No negative marking.',
    duration: '2.5 hours per paper.',
    eligibility: 'Paper I: 12th with 50% + 2yr D.El.Ed. Paper II: Graduate + B.Ed.',
    selection: 'Qualifying exam. Valid for 7 years (lifetime from 2024).',
    officialUrl: 'https://ctet.nic.in',
    syllabus: 'Child Development & Pedagogy, Language I & II, Mathematics, Environmental Studies, Social Studies/Science (Paper II).'
  },
  {
    id: 'ugc-net',
    name: 'UGC NET',
    category: 'teaching',
    categoryLabel: 'Teaching',
    icon: 'fa-chalkboard-teacher',
    subjects: ['Paper I', 'Paper II'],
    pattern: 'Paper I: General Aptitude (50 questions). Paper II: Subject-specific (100 questions).',
    marks: 'Paper I: 100 marks. Paper II: 200 marks. Total: 300 marks.',
    duration: '3 hours combined (no break between papers).',
    eligibility: 'Master\'s degree with 55% (50% for reserved). Age: No limit (JRF: max 30 years).',
    selection: 'Computer-based test. Qualifying marks category-wise. JRF fellowship for top performers.',
    officialUrl: 'https://ugcnet.nta.nic.in',
    syllabus: 'Paper I: Teaching Aptitude, Research, Comprehension, Communication, Reasoning, ICT. Paper II: Subject-specific (81 subjects available).'
  },
  {
    id: 'neet',
    name: 'NEET',
    category: 'medical',
    categoryLabel: 'Medical',
    icon: 'fa-heartbeat',
    subjects: ['Physics', 'Chemistry', 'Biology'],
    pattern: '180 MCQs: 45 each from Physics, Chemistry, Botany, Zoology.',
    marks: '720 marks (4 marks correct, -1 wrong).',
    duration: '3 hours 20 minutes.',
    eligibility: '12th with Physics, Chemistry, Biology. Age: 17+ years. Min 50% in PCB.',
    selection: 'Single exam → All India Rank → Counselling (AIQ + State Quota)',
    officialUrl: 'https://neet.nta.nic.in',
    syllabus: 'NCERT-based Physics, Chemistry, Biology (Botany + Zoology) from Class 11 & 12 syllabus.'
  },
  {
    id: 'jee-main',
    name: 'JEE Main',
    category: 'engineering',
    categoryLabel: 'Engineering',
    icon: 'fa-cogs',
    subjects: ['Physics', 'Chemistry', 'Mathematics'],
    pattern: 'Paper 1 (B.E/B.Tech): 75 questions (25 per subject). Paper 2 for B.Arch/B.Planning.',
    marks: '300 marks total. +4 correct, -1 wrong.',
    duration: '3 hours.',
    eligibility: '12th with PCM. No age limit. Max 3 consecutive attempts.',
    selection: 'JEE Main → JEE Advanced (for IITs) → Counselling (JoSAA)',
    officialUrl: 'https://jeemain.nta.nic.in',
    syllabus: 'Physics, Chemistry, Mathematics based on Class 11 & 12 NCERT curriculum. Topics include Mechanics, Thermodynamics, Organic Chemistry, Calculus, Algebra.'
  },
  {
    id: 'cuet',
    name: 'CUET',
    category: 'entrance',
    categoryLabel: 'Entrance',
    icon: 'fa-door-open',
    subjects: ['General Test', 'Languages', 'Domain Subjects'],
    pattern: 'Section IA: Languages. Section II: Domain Subjects. Section III: General Test.',
    marks: 'Varies by university. Typically 200 marks per section.',
    duration: '45-60 minutes per section.',
    eligibility: '12th pass from recognized board. Specific criteria per university.',
    selection: 'CUET Score → University-specific counselling → Admission',
    officialUrl: 'https://cuet.samarth.ac.in',
    syllabus: 'General Test: GK, Current Affairs, General Mental Ability, Numerical Ability, Logical Reasoning. Domain: Subject-specific (27 domains). Languages: 33 languages.'
  },
  {
    id: 'gate',
    name: 'GATE',
    category: 'engineering',
    categoryLabel: 'Engineering',
    icon: 'fa-cogs',
    subjects: ['Branch-wise syllabus'],
    pattern: '65 questions: MCQs + MSQs + NAT. General Aptitude (15 marks) + Core Subject (85 marks).',
    marks: '100 marks total.',
    duration: '3 hours.',
    eligibility: 'Bachelor\'s in Engineering/Science or final year student. No age limit.',
    selection: 'GATE Score valid 3 years → M.Tech admission / PSU recruitment',
    officialUrl: 'https://gate.iitk.ac.in',
    syllabus: 'Branch-specific: CS, EC, ME, CE, EE, etc. Includes General Aptitude (Verbal + Numerical) and core engineering subjects.'
  },
  {
    id: 'state-psc',
    name: 'State PSC',
    category: 'upsc',
    categoryLabel: 'State PSC',
    icon: 'fa-landmark',
    subjects: ['General Studies', 'Optional Subject', 'Essay', 'Current Affairs'],
    pattern: 'Prelims (GS + CSAT) → Mains (GS papers + Optional + Essay) → Interview.',
    marks: 'Varies by state. Typically 1000-1500 marks for Mains + 200 for Interview.',
    duration: '2-3 hours per paper.',
    eligibility: 'Graduate. Age and domicile criteria vary by state (typically 21-40 years).',
    selection: 'Prelims → Mains → Interview → State-wise Merit List',
    officialUrl: 'https://upsc.gov.in',
    syllabus: 'State-specific General Studies, History, Geography, Polity, Economy, State GK, Optional Subject, Essay, and Current Affairs.'
  }
];

/* ============================================================
   CATEGORIES DATA
   ============================================================ */
const categoriesData = [
  { id: 'upsc', title: 'UPSC', icon: 'fa-landmark', desc: 'Civil Services, CAPF, NDA, CDS and more.' },
  { id: 'ssc', title: 'SSC', icon: 'fa-building', desc: 'CGL, CHSL, MTS, JE and other SSC exams.' },
  { id: 'banking', title: 'Banking', icon: 'fa-university', desc: 'IBPS, SBI, RBI and insurance exams.' },
  { id: 'railway', title: 'Railway', icon: 'fa-train', desc: 'RRB NTPC, Group D, ALP and more.' },
  { id: 'defence', title: 'Defence', icon: 'fa-shield-alt', desc: 'NDA, CDS, AFCAT, CAPF exams.' },
  { id: 'police', title: 'Police', icon: 'fa-user-shield', desc: 'State police, SI, constable exams.' },
  { id: 'teaching', title: 'Teaching', icon: 'fa-chalkboard-teacher', desc: 'CTET, UGC NET, TET and teaching posts.' },
  { id: 'engineering', title: 'Engineering', icon: 'fa-cogs', desc: 'JEE, GATE, SSC JE and technical exams.' },
  { id: 'medical', title: 'Medical', icon: 'fa-heartbeat', desc: 'NEET, AIIMS, nursing and medical exams.' },
  { id: 'state-psc-cat', title: 'State PSC', icon: 'fa-map-marked-alt', desc: 'State civil services examinations.' },
  { id: 'entrance', title: 'Entrance Exams', icon: 'fa-door-open', desc: 'CUET, CLAT, and university entrances.' },
  { id: 'scholarships', title: 'Scholarships', icon: 'fa-award', desc: 'NTSE, KVPY, and scholarship exams.' }
];

/* ============================================================
   FAQ DATA
   ============================================================ */
const faqData = [
  {
    q: 'How can I download syllabus?',
    a: 'Click on any exam card and press the "Download PDF" button in the popup. You can also use the "Download PDF" button on the hero section to browse all available syllabi.'
  },
  {
    q: 'Is syllabus updated regularly?',
    a: 'Yes! We update our syllabus database whenever official exam conducting bodies release new notifications. All content is verified against official sources.'
  },
  {
    q: 'Are PDFs free?',
    a: 'Absolutely. All syllabus PDFs on ExamSyllabusHub are completely free to download. No registration or payment required.'
  },
  {
    q: 'Which exams are available?',
    a: 'We cover 100+ exams including UPSC, SSC, Banking, Railway, Defence, Teaching, Medical, Engineering, State PSC, Entrance Exams, and Scholarships.'
  },
  {
    q: 'How often is content updated?',
    a: 'Our team reviews and updates content monthly, and immediately when major exam notifications are released by official authorities.'
  }
];

/* ============================================================
   DOM ELEMENTS
   ============================================================ */
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

const loader = $('#loader');
const scrollProgress = $('#scrollProgress');
const header = $('#header');
const nav = $('#nav');
const navToggle = $('#navToggle');
const navLinks = $$('.nav-link');
const themeToggle = $('#themeToggle');
const backToTop = $('#backToTop');

const heroSearch = $('#heroSearch');
const heroSearchBtn = $('#heroSearchBtn');
const examSearch = $('#examSearch');
const searchCount = $('#searchCount');
const filterBar = $('#filterBar');
const examsGrid = $('#examsGrid');
const noResults = $('#noResults');
const categoriesGrid = $('#categoriesGrid');
const faqList = $('#faqList');

const syllabusModal = $('#syllabusModal');
const modalOverlay = $('#modalOverlay');
const modalClose = $('#modalClose');
const modalTitle = $('#modalTitle');
const modalCategory = $('#modalCategory');
const modalBody = $('#modalBody');
const modalOfficial = $('#modalOfficial');
const modalDownload = $('#modalDownload');

const contactForm = $('#contactForm');
const contactSuccess = $('#contactSuccess');

/* ============================================================
   STATE
   ============================================================ */
let currentFilter = 'all';
let currentSearch = '';
let countersAnimated = false;

/* ============================================================
   LOADER
   ============================================================ */
window.addEventListener('load', () => {
  setTimeout(() => loader.classList.add('hidden'), 800);
});

/* ============================================================
   THEME TOGGLE
   ============================================================ */
function initTheme() {
  const saved = localStorage.getItem('esh-theme') || 'light';
  document.documentElement.setAttribute('data-theme', saved);
  updateThemeIcon(saved);
}

function updateThemeIcon(theme) {
  const icon = themeToggle.querySelector('i');
  icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
}

themeToggle.addEventListener('click', () => {
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('esh-theme', next);
  updateThemeIcon(next);
});

/* ============================================================
   MOBILE NAVIGATION
   ============================================================ */
navToggle.addEventListener('click', () => {
  nav.classList.toggle('active');
  navToggle.classList.toggle('active');
  navToggle.setAttribute('aria-expanded', nav.classList.contains('active'));
});

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('active');
    navToggle.classList.remove('active');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

/* ============================================================
   STICKY HEADER & SCROLL PROGRESS
   ============================================================ */
window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

  scrollProgress.style.width = `${progress}%`;
  scrollProgress.setAttribute('aria-valuenow', Math.round(progress));
  header.classList.toggle('scrolled', scrollTop > 20);
  backToTop.classList.toggle('visible', scrollTop > 400);
  updateActiveNav();
});

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* ============================================================
   ACTIVE NAV HIGHLIGHT
   ============================================================ */
function updateActiveNav() {
  const sections = $$('section[id]');
  let current = '';

  sections.forEach((section) => {
    const top = section.offsetTop - 120;
    if (window.scrollY >= top) current = section.id;
  });

  navLinks.forEach((link) => {
    const href = link.getAttribute('href');
    if (href && href.startsWith('#')) {
      link.classList.toggle('active', href === `#${current}`);
    }
  });
}

/* ============================================================
   SCROLL REVEAL
   ============================================================ */
function initScrollReveal() {
  const reveals = $$('.reveal');
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
  );
  reveals.forEach((el) => observer.observe(el));
}

/* ============================================================
   ANIMATED COUNTERS
   ============================================================ */
function initCounters() {
  const statSection = $('.stats-section');
  if (!statSection) return;

  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting && !countersAnimated) {
        countersAnimated = true;
        animateCounters();
        observer.unobserve(statSection);
      }
    },
    { threshold: 0.3 }
  );
  observer.observe(statSection);
}

function animateCounters() {
  $$('.stat-number').forEach((el) => {
    const target = parseInt(el.dataset.target, 10);
    const duration = 2000;
    const start = performance.now();

    function step(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.floor(eased * target).toLocaleString();
      if (progress < 1) requestAnimationFrame(step);
      else el.textContent = target.toLocaleString();
    }
    requestAnimationFrame(step);
  });
}

/* ============================================================
   RENDER CATEGORIES
   ============================================================ */
function renderCategories() {
  categoriesGrid.innerHTML = categoriesData
    .map(
      (cat) => `
      <div class="category-card reveal" data-category="${cat.id === 'state-psc-cat' ? 'upsc' : cat.id === 'scholarships' ? 'entrance' : cat.id === 'police' ? 'defence' : cat.id}">
        <div class="category-icon"><i class="fas ${cat.icon}"></i></div>
        <h3>${cat.title}</h3>
        <p>${cat.desc}</p>
      </div>`
    )
    .join('');

  $$('.category-card').forEach((card) => {
    card.addEventListener('click', () => {
      const cat = card.dataset.category;
      setFilter(cat);
      document.getElementById('exams').scrollIntoView({ behavior: 'smooth' });
    });
  });

  initScrollReveal();
}

/* ============================================================
   RENDER EXAM CARDS
   ============================================================ */
function getFilteredExams() {
  return examsData.filter((exam) => {
    const matchFilter = currentFilter === 'all' || exam.category === currentFilter;
    const searchLower = currentSearch.toLowerCase().trim();
    const matchSearch =
      !searchLower ||
      exam.name.toLowerCase().includes(searchLower) ||
      exam.categoryLabel.toLowerCase().includes(searchLower) ||
      exam.subjects.some((s) => s.toLowerCase().includes(searchLower));
    return matchFilter && matchSearch;
  });
}

function renderExams() {
  const filtered = getFilteredExams();

  if (filtered.length === 0) {
    examsGrid.innerHTML = '';
    noResults.classList.remove('hidden');
    searchCount.textContent = '0 exams found';
    return;
  }

  noResults.classList.add('hidden');
  searchCount.textContent = `${filtered.length} exam${filtered.length !== 1 ? 's' : ''} found`;

  examsGrid.innerHTML = filtered
    .map(
      (exam) => `
      <div class="exam-card" data-id="${exam.id}">
        <div class="exam-card-header">
          <span class="exam-card-tag">${exam.categoryLabel}</span>
          <h3><i class="fas ${exam.icon}" style="color:var(--primary);margin-right:6px;"></i>${exam.name}</h3>
        </div>
        <div class="exam-card-body">
          <div class="exam-subjects">
            ${exam.subjects
              .slice(0, 5)
              .map((s) => `<span class="subject-tag">${s}</span>`)
              .join('')}
            ${exam.subjects.length > 5 ? `<span class="subject-tag">+${exam.subjects.length - 5} more</span>` : ''}
          </div>
        </div>
        <div class="exam-card-footer">
          <button class="btn btn-primary view-syllabus-btn" data-id="${exam.id}">
            <i class="fas fa-eye"></i> View Syllabus
          </button>
        </div>
      </div>`
    )
    .join('');

  $$('.view-syllabus-btn').forEach((btn) => {
    btn.addEventListener('click', () => openModal(btn.dataset.id));
  });
}

/* ============================================================
   SEARCH & FILTER
   ============================================================ */
function setFilter(filter) {
  currentFilter = filter;
  $$('.filter-btn').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.filter === filter);
  });
  renderExams();
}

function setSearch(query) {
  currentSearch = query;
  renderExams();
}

filterBar.addEventListener('click', (e) => {
  const btn = e.target.closest('.filter-btn');
  if (btn) setFilter(btn.dataset.filter);
});

examSearch.addEventListener('input', (e) => setSearch(e.target.value));

heroSearch.addEventListener('input', (e) => {
  currentSearch = e.target.value;
  examSearch.value = e.target.value;
  renderExams();
});

heroSearchBtn.addEventListener('click', () => {
  currentSearch = heroSearch.value;
  examSearch.value = heroSearch.value;
  renderExams();
  document.getElementById('exams').scrollIntoView({ behavior: 'smooth' });
});

heroSearch.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') heroSearchBtn.click();
});

/* Footer filter links */
$$('[data-filter-link]').forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    setFilter(link.dataset.filterLink);
    document.getElementById('exams').scrollIntoView({ behavior: 'smooth' });
  });
});

/* ============================================================
   SYLLABUS MODAL
   ============================================================ */
function openModal(examId) {
  const exam = examsData.find((e) => e.id === examId);
  if (!exam) return;

  modalCategory.textContent = exam.categoryLabel;
  modalTitle.textContent = exam.name;

  const stagesHTML = exam.stages
    ? `<div class="modal-section"><h4><i class="fas fa-layer-group"></i> Stages</h4><div class="modal-tags">${exam.stages.map((s) => `<span class="modal-tag">${s}</span>`).join('')}</div></div>`
    : '';

  modalBody.innerHTML = `
    ${stagesHTML}
    <div class="modal-section">
      <h4><i class="fas fa-book"></i> Complete Syllabus</h4>
      <p>${exam.syllabus}</p>
      <div class="modal-tags" style="margin-top:10px;">
        ${exam.subjects.map((s) => `<span class="modal-tag">${s}</span>`).join('')}
      </div>
    </div>
    <div class="modal-section">
      <h4><i class="fas fa-chart-pie"></i> Exam Pattern</h4>
      <p>${exam.pattern}</p>
    </div>
    <div class="modal-info-grid">
      <div class="modal-info-item"><strong>Marks Distribution</strong>${exam.marks}</div>
      <div class="modal-info-item"><strong>Duration</strong>${exam.duration}</div>
      <div class="modal-info-item"><strong>Eligibility</strong>${exam.eligibility}</div>
      <div class="modal-info-item"><strong>Selection Process</strong>${exam.selection}</div>
    </div>
  `;

  modalOfficial.href = exam.officialUrl;
  modalDownload.onclick = () => downloadPDF(exam);

  syllabusModal.classList.add('active');
  syllabusModal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  syllabusModal.classList.remove('active');
  syllabusModal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', closeModal);

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && syllabusModal.classList.contains('active')) closeModal();
});

function downloadPDF(exam) {
  const content = `
EXAM SYLLABUS — ${exam.name}
Category: ${exam.categoryLabel}
${exam.stages ? 'Stages: ' + exam.stages.join(', ') : ''}

COMPLETE SYLLABUS:
${exam.syllabus}

SUBJECTS: ${exam.subjects.join(', ')}

EXAM PATTERN:
${exam.pattern}

MARKS: ${exam.marks}
DURATION: ${exam.duration}
ELIGIBILITY: ${exam.eligibility}
SELECTION: ${exam.selection}

Official Website: ${exam.officialUrl}

— ExamSyllabusHub (examsyllabushub.com)
  `.trim();

  const blob = new Blob([content], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${exam.id}-syllabus.txt`;
  a.click();
  URL.revokeObjectURL(url);
}

/* Hero Download PDF — scroll to exams */
$$('.btn-secondary').forEach((btn) => {
  if (btn.textContent.includes('Download PDF') && btn.getAttribute('href') === '#syllabus') {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      document.getElementById('exams').scrollIntoView({ behavior: 'smooth' });
    });
  }
});

/* ============================================================
   FAQ ACCORDION
   ============================================================ */
function renderFAQ() {
  faqList.innerHTML = faqData
    .map(
      (item, i) => `
      <div class="faq-item" data-index="${i}">
        <button class="faq-question" aria-expanded="false">
          ${item.q}
          <i class="fas fa-chevron-down"></i>
        </button>
        <div class="faq-answer"><p>${item.a}</p></div>
      </div>`
    )
    .join('');

  $$('.faq-question').forEach((btn) => {
    btn.addEventListener('click', () => {
      const item = btn.parentElement;
      const isActive = item.classList.contains('active');

      $$('.faq-item').forEach((fi) => {
        fi.classList.remove('active');
        fi.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
      });

      if (!isActive) {
        item.classList.add('active');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

/* ============================================================
   CONTACT FORM VALIDATION
   ============================================================ */
function showFieldError(id, msg) {
  const field = $(`#${id}`);
  const error = $(`#${id}Error`);
  if (field) field.classList.add('error');
  if (error) error.textContent = msg;
}

function clearFieldError(id) {
  const field = $(`#${id}`);
  const error = $(`#${id}Error`);
  if (field) field.classList.remove('error');
  if (error) error.textContent = '';
}

function validateContactForm() {
  let valid = true;
  const name = $('#contactName').value.trim();
  const email = $('#contactEmail').value.trim();
  const subject = $('#contactSubject').value.trim();
  const message = $('#contactMessage').value.trim();

  if (!name) { showFieldError('contactName', 'Name is required.'); valid = false; }
  else if (name.length < 2) { showFieldError('contactName', 'Name must be at least 2 characters.'); valid = false; }
  else clearFieldError('contactName');

  if (!email) { showFieldError('contactEmail', 'Email is required.'); valid = false; }
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { showFieldError('contactEmail', 'Enter a valid email.'); valid = false; }
  else clearFieldError('contactEmail');

  if (!subject) { showFieldError('contactSubject', 'Subject is required.'); valid = false; }
  else clearFieldError('contactSubject');

  if (!message) { showFieldError('contactMessage', 'Message is required.'); valid = false; }
  else if (message.length < 10) { showFieldError('contactMessage', 'Message must be at least 10 characters.'); valid = false; }
  else clearFieldError('contactMessage');

  return valid;
}

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  if (!validateContactForm()) return;

  contactForm.querySelector('.btn-full').classList.add('hidden');
  contactSuccess.classList.remove('hidden');

  setTimeout(() => {
    contactForm.reset();
    contactForm.querySelector('.btn-full').classList.remove('hidden');
    contactSuccess.classList.add('hidden');
  }, 4000);
});

['contactName', 'contactEmail', 'contactSubject', 'contactMessage'].forEach((id) => {
  const field = $(`#${id}`);
  if (field) field.addEventListener('input', () => clearFieldError(id));
});

/* ============================================================
   INITIALIZATION
   ============================================================ */
function init() {
  initTheme();
  renderCategories();
  renderExams();
  renderFAQ();
  initScrollReveal();
  initCounters();
}

document.addEventListener('DOMContentLoaded', init);
