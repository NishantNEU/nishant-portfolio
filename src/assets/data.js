// ═══════════════════════════════════════════════
//  SINGLE SOURCE OF TRUTH — All portfolio data
//  Edit ONLY this file to update your portfolio
// ═══════════════════════════════════════════════

export const personal = {
  name: "Nishant Patil",
  title: "Software Engineer",
  tagline: "Crafting elegant software\nthat solves real problems.",
  subtitle:
    "MS in Information Systems @ Northeastern University · Full-Stack Engineer · AI/ML Enthusiast",
  email: "patil.nisha@northeastern.edu",
  phone: "+1 (617) 820-3764",
  linkedin: "https://www.linkedin.com/in/nishant-patil-cs",
  github: "https://github.com/NishantNEU",
  location: "Boston, MA",
  resumeLink: "#", // Update with actual resume PDF link
};

export const about = {
  headline: "Think different.\nBuild different.",
  paragraphs: [
    "I'm a software engineer who believes great technology should feel invisible seamless, intuitive, and purposeful. Currently pursuing my Master's in Information Systems at Northeastern University with a 4.0 GPA.",
    "With professional experience building payment gateways handling 500K+ daily transactions at Lyra Networks and engineering real-time treasury platforms at AgileGenX Fintech, I've shipped software that powers real financial decisions at scale.",
    "From winning Smart India Hackathon 2023 where my AI legal assistant is now used by India's Ministry of Law to building campus platforms serving 5,000+ students, I bring both technical depth and product thinking to everything I create.",
  ],
  values: [
    {
      icon: "Sparkles",
      title: "Clean Code, Always",
      description: "I write code like someone else will maintain it tomorrow because they will. Readability isn't optional, it's respect.",
    },
    {
      icon: "Users",
      title: "Build for People",
      description: "The best tech disappears. If a user has to think about how something works, I haven't done my job yet.",
    },
    {
      icon: "Rocket",
      title: "Ship, Learn, Repeat",
      description: "Perfection is the enemy of progress. I'd rather ship something real, get feedback, and iterate than polish forever.",
    },
    {
      icon: "GraduationCap",
      title: "Never Stop Learning",
      description: "From hackathon weekends to 2 AM rabbit holes on system design curiosity is the one skill I'll never outgrow.",
    },
  ],
};

export const skills = [
  {
    category: "Languages",
    icon: "Code2",
    items: ["Python", "Java", "C/C++", "JavaScript", "TypeScript", "SQL"],
  },
  {
    category: "Frontend & Mobile",
    icon: "Monitor",
    items: ["React", "Next.js", "Flutter", "HTML/CSS", "WordPress"],
  },
  {
    category: "Backend & API",
    icon: "Server",
    items: [
      "Django",
      "Node.js",
      "Spring Boot",
      "REST APIs",
      "GraphQL",
      "Microservices",
    ],
  },
  {
    category: "Cloud & DevOps",
    icon: "Cloud",
    items: [
      "AWS (EC2, ECS, S3, RDS, Lambda)",
      "Docker",
      "Jenkins",
      "Kubernetes",
      "CI/CD",
      "Terraform",
    ],
  },
  {
    category: "Databases",
    icon: "Database",
    items: [
      "PostgreSQL",
      "MongoDB",
      "MariaDB",
      "MySQL",
      "Firebase",
      "Pinecone",
    ],
  },
  {
    category: "AI/ML & Tools",
    icon: "Brain",
    items: [
      "OpenAI API (GPT-4)",
      "Google Gemini",
      "RAG",
      "Prompt Engineering",
      "ML Integration",
      "Selenium",
      "Figma",
    ],
  },
];

export const projects = [
  {
    title: "AI Legal Document Assistant",
    tagline: "Smart India Hackathon 2023 Winner · Used by India's Ministry of Law",
    description:
      "GenAI application for semantic search and summarization across 10K+ legal documents using a RAG pipeline. Processes complex legal text with OCR extraction and embedding-based retrieval for instant, accurate answers.",
    tech: ["LangChain", "GPT-4", "FAISS", "FastAPI", "Redis", "Tesseract OCR"],
    color: "#30d158",
    featured: true,
  },
  {
    title: "Docitron",
    tagline: "AI-Powered Medical Scribe · Reducing Physician Burnout",
    description:
      "Converts doctor-patient conversations into structured clinical documentation (SOAP notes & prescriptions) automatically. Uses local AI models for privacy-first note generation with real-time audio transcription.",
    tech: ["React", "TypeScript", "FastAPI", "Ollama", "Whisper", "Supabase"],
    color: "#ff375f",
    featured: false,
  },
  {
    title: "AI Super Hub",
    tagline: "Multi-Tool AI Education Platform · 50+ Courses · 70+ AI Tools",
    description:
      "Full-stack AI education platform featuring a curated AI tool directory, Gemini-powered chat assistant, automated certificate generation, and a comprehensive admin dashboard for content management.",
    tech: ["MERN Stack", "Google Gemini", "JWT/OAuth", "Cloudinary", "AWS"],
    color: "#bf5af2",
    featured: false,
  },
  {
    title: "Park Assist",
    tagline: "Smart Parking Management SaaS Platform",
    description:
      "Full-stack SaaS platform for real-time parking space monitoring, automated payments via Stripe & PayPal, and occupancy analytics. Features WebSocket-powered live updates and containerized cloud deployment.",
    tech: ["React", "Node.js", "MongoDB", "Socket.io", "Stripe", "AWS ECS"],
    color: "#ff9f0a",
    featured: false,
  },
  {
    title: "HealthGuard 360",
    tagline: "HIPAA-Compliant Healthcare Insurance Platform",
    description:
      "Insurance management platform with claims processing, patient portal, and AES-256 encrypted data handling. Built with async job queues for background processing and serverless functions for scalability.",
    tech: ["MERN Stack", "AWS Lambda", "Redis", "Bull Queues", "AES-256"],
    color: "#5e5ce6",
    featured: false,
  },
  {
    title: "NEU Social Network",
    tagline: "In Progress · Campus Networking for NEU Students",
    description:
      "Platform connecting students with professors and campus events, featuring real-time messaging, event discovery with interactive maps, mentorship matching, and push notifications.",
    tech: ["React", "Node.js", "PostgreSQL", "Socket.io", "Mapbox", "Firebase"],
    color: "#0071e3",
    featured: false,
  },
  {
    title: "Retirement Portfolio Optimizer",
    tagline: "AI-Powered Financial Planning & Monte Carlo Simulations",
    description:
      "Retirement planning app with Monte Carlo simulations, Modern Portfolio Theory optimization, and GPT-4 powered financial advice. Interactive visualizations for risk profiling and asset allocation.",
    tech: ["React", "Python FastAPI", "PostgreSQL", "D3.js", "GPT-4"],
    color: "#ff9f0a",
    featured: false,
  },
  {
    title: "Restaurant HR System",
    tagline: "Enterprise-Grade Multi-Location HR Management",
    description:
      "Covers scheduling, payroll, attendance tracking, and labor analytics for multi-location restaurants. Features reactive streaming APIs, PDF/Excel report generation, and role-based access control.",
    tech: ["Spring Boot", "Hibernate", "PostgreSQL", "Spring WebFlux", "Apache POI"],
    color: "#64d2ff",
    featured: false,
  },
  {
    title: "University Management System",
    tagline: "Comprehensive ERP · Admissions to Grading",
    description:
      "End-to-end university ERP covering admissions, course registration, grading, and student records. Built on microservices architecture with RBAC and automated email notifications.",
    tech: ["Spring Boot", "PostgreSQL", "AWS SES", "Microservices", "RBAC"],
    color: "#86868b",
    featured: false,
  },
];

export const experience = [
  {
    role: "Master's Student — Information Systems",
    company: "Northeastern University",
    location: "Boston, MA",
    period: "Sep 2025 — Dec 2027",
    description:
      "Pursuing MSIS with a 4.0 GPA. Specializing in software engineering, cloud architecture, machine learning, and scalable system design.",
    type: "education",
  },
  {
    role: "Software Engineer Intern",
    company: "Lyra Networks",
    location: "Mumbai, IN",
    period: "Feb 2025 — Jun 2025",
    description:
      "Designed and integrated secure payment gateway APIs (HDFC, Amazon Pay, Amex, ICICI) using Java Spring Boot and microservices, supporting 500K+ daily transactions with 99.9% uptime. Automated CI/CD pipelines with Jenkins and Docker, reducing deployment time by 60%.",
    type: "work",
  },
  {
    role: "Software Engineer Intern",
    company: "AgileGenX Fintech",
    location: "Mumbai, IN",
    period: "Jun 2023 — Nov 2023",
    description:
      "Engineered a full-stack treasury management platform using React (TypeScript) and Node.js with WebSocket-based live updates for 20+ finance teams. Improved API response latency by 45% and accelerated report generation by 60%.",
    type: "work",
  },
  {
    role: "Student Software Engineer",
    company: "University of Mumbai, Fr CRCE",
    location: "Mumbai, IN",
    period: "Jun 2023 — Feb 2025",
    description:
      "Built student information portal serving 1,000+ users. Led migration from WordPress to Next.js (SSR), reducing page load times by 50%. Implemented Redis caching and MySQL query optimization.",
    type: "work",
  },
  {
    role: "Bachelor of Engineering — Computer Engineering",
    company: "University of Mumbai — Fr. CRCE",
    location: "Mumbai, India",
    period: "Jul 2021 — Jun 2025",
    description:
      "CGPA: 3.7. Built strong foundations in computer science, data structures, algorithms, and software engineering. Won Smart India Hackathon 2023.",
    type: "education",
  },
];

// ─── Chatbot Context ───
export const chatbotContext = `
You are Nishant's AI portfolio assistant. You answer questions about Nishant Patil ONLY.
Be professional, concise, friendly, and helpful. Use an Apple-like conversational elegance.
If someone asks something unrelated to Nishant, politely decline and redirect.

KEY FACTS:
- Name: Nishant Patil
- Current: MS in Information Systems at Northeastern University, Boston (4.0 GPA, Sep 2025 – Dec 2027)
- Previous Education: B.E. in Computer Engineering from University of Mumbai Fr CRCE (3.7 GPA, 2021-2025)
- Email: patil.nisha@northeastern.edu
- Phone: +1 (617) 820-3764
- LinkedIn: linkedin.com/in/nishant-patil-cs
- GitHub: github.com/NishantNEU
- Location: Boston, MA

PROFESSIONAL EXPERIENCE:
1. Software Engineer Intern at Lyra Networks (Feb–Jun 2025):
   - Payment gateway APIs (HDFC, Amazon Pay, Amex, ICICI) with Java Spring Boot & microservices
   - 500K+ daily transactions, 99.9% uptime
   - Built internal return reprocessing platform with cron-based automation
   - CI/CD with Jenkins + Docker, reduced deployment time by 60%
   - Centralized logging reduced debugging time by 40%

2. Software Engineer Intern at AgileGenX Fintech (Jun–Nov 2023):
   - Full-stack treasury management platform: React (TypeScript) + Node.js (Express)
   - WebSocket-based real-time dashboards for 20+ finance teams
   - RESTful & GraphQL APIs with JWT auth, improved latency by 45%
   - MariaDB optimization, accelerated report generation by 60%
   - AWS EC2, Elastic Load Balancing, auto-scaling, CloudWatch monitoring

3. Student Software Engineer at University of Mumbai Fr CRCE (Jun 2023–Feb 2025):
   - Student portal serving 1,000+ users with personalized dashboards
   - Led WordPress to Next.js (TypeScript, SSR) migration, 50% faster load times
   - MySQL optimization + Redis caching, 35% performance improvement

SKILLS:
- Languages: Python, Java (Spring Boot, Microservices), JavaScript, TypeScript, SQL
- Frontend & Mobile: React, Flutter, HTML/CSS, Next.js, WordPress
- Backend: Django, Node.js, Spring Boot, REST APIs, GraphQL, Microservices
- Cloud & DevOps: AWS (EC2, ECS, S3, RDS, Lambda), Docker, Jenkins, Kubernetes, Git, CI/CD, Terraform
- Databases: PostgreSQL, MongoDB, MariaDB, MySQL, Firebase, Pinecone (Vector DB)
- AI/ML: OpenAI API (GPT-3.5/4), Google Gemini, RAG, Prompt Engineering, ML Integration, Selenium, Figma

PROJECTS:
1. AI Legal Document Assistant — SIH 2023 Winner, used by India's Ministry of Law (LangChain, GPT-4, FAISS, FastAPI, Redis, Tesseract OCR, 10K+ docs)
2. Docitron — AI medical scribe converting doctor-patient conversations into SOAP notes (React, TypeScript, FastAPI, Ollama, Whisper, Supabase)
3. AI Super Hub — AI education platform with 50+ courses, 70+ AI tools, Gemini chat assistant (MERN, Google Gemini, JWT/OAuth, Cloudinary, AWS)
4. Park Assist — Smart parking SaaS with real-time monitoring, Stripe/PayPal payments (React, Node.js, MongoDB, Socket.io, AWS ECS)
5. HealthGuard 360 — HIPAA-compliant healthcare insurance platform (MERN, AWS Lambda, Redis, AES-256 encryption)
6. NEU Social Network (In Progress) — Campus networking with messaging, events, mentorship (React, Node.js, PostgreSQL, Socket.io, Mapbox)
7. Retirement Portfolio Optimizer — Monte Carlo sims, MPT optimization, GPT-4 advice (React, Python FastAPI, PostgreSQL, D3.js)
8. Restaurant HR System — Enterprise HR for multi-location restaurants (Spring Boot, Hibernate, PostgreSQL, Spring WebFlux)
9. University Management System — Full ERP for admissions, registration, grading (Spring Boot, PostgreSQL, AWS SES, Microservices)

CONTACT: Best reached via email at patil.nisha@northeastern.edu or LinkedIn.
`;