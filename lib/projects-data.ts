export interface Project {
  id: string;
  number: string;
  client: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  challenge: string;
  solution: string;
  technologies: string[];
  services: string[];
  metrics?: { label: string; value: string }[];
  images: string[];
  accentColor?: string;
  confidential: boolean;
}

export const PROJECTS: Project[] = [
  {
    id: "catlin-pharmaceuticals",
    number: "01",
    client: "Catlin Pharmaceuticals",
    title: "Catlin Pharmaceuticals",
    category: "B2B Digital Platform & Automation",
    tagline: "Scalable pharmaceutical commerce and compliant data infrastructure.",
    description:
      "A modern pharmaceutical digital platform with high-security product catalog, CMS, and automated supply-chain data sync designed for regulated enterprise environments.",
    challenge:
      "Legacy pharmaceutical operations required multi-layered validation, compliance reporting, and high-concurrency catalog access without downtime.",
    solution:
      "Architected a Next.js frontend with enterprise Spring Boot microservices, high-throughput MySQL cluster, and custom automated document ingestion pipelines.",
    technologies: ["Next.js", "React", "Tailwind CSS", "Spring Boot", "MySQL", "Docker"],
    services: ["Full-Stack Products", "AI Automation", "Enterprise Systems"],
    metrics: [
      { label: "Catalog Sync", value: "< 1.2s" },
      { label: "Uptime SLA", value: "99.99%" },
    ],
    images: [
      "/projects/catlin-1.webp",
      "/projects/catlin-2.webp"
    ],
    accentColor: "#EAF76A",
    confidential: false,
  },
  {
    id: "ai-support-platform",
    number: "02",
    client: "Confidential AI Project",
    title: "AI Support Platform",
    category: "AI Support & Knowledge Retrieval",
    tagline: "Autonomous customer triage, semantic context retrieval, and incident escalation.",
    description:
      "Intelligent customer support and technical resolution platform utilizing multi-agent classification, context-grounded RAG, and proactive resolution workflows.",
    challenge:
      "High volume tier-1 and tier-2 enterprise tickets with complex technical domain queries causing customer support backlogs and inconsistent answers.",
    solution:
      "Implemented a dual-stage RAG pipeline with hybrid vector and BM25 search, fine-tuned rerankers, and LangGraph-powered routing agents delivering grounded answers with source citations.",
    technologies: ["RAG", "LLM", "Spring Boot", "PostgreSQL", "pgvector", "n8n"],
    services: ["AI Agents", "RAG Systems", "AI Integrations"],
    metrics: [
      { label: "Resolution Time", value: "-68%" },
      { label: "Citation Accuracy", value: "99.4%" },
    ],
    images: [
      "/projects/support-1.webp",
      "/projects/support-2.webp"
    ],
    accentColor: "#FAF9F5",
    confidential: true,
  },
  {
    id: "ai-automation",
    number: "03",
    client: "Confidential AI Project",
    title: "AI Automation System",
    category: "Intelligent Workflow Orchestration",
    tagline: "Autonomous multi-system operations and asynchronous agentic loops.",
    description:
      "AI-powered business workflow automation connecting intelligent agents with core ERP, CRM, and communication platforms to eliminate repetitive operational bottlenecks.",
    challenge:
      "Fragmented enterprise tools required tedious manual data validation, cross-system copy-pasting, and delayed transactional audits.",
    solution:
      "Engineered resilient n8n and Python agent microservices that watch triggers, reason over complex schemas, invoke enterprise APIs with fallback human-in-the-loop safeguards.",
    technologies: ["AI Agents", "n8n", "LLM", "Python", "FastAPI", "REST APIs"],
    services: ["AI Automation", "Intelligent Workflows", "AI Integrations"],
    metrics: [
      { label: "Manual Steps Cut", value: "84%" },
      { label: "Throughput", value: "24/7 Continuous" },
    ],
    images: [
      "/projects/automation-1.webp",
      "/projects/automation-2.webp"
    ],
    accentColor: "#F3F7D3",
    confidential: true,
  },
  {
    id: "ai-document-intelligence",
    number: "04",
    client: "Confidential AI Project",
    title: "AI Document Intelligence",
    category: "Multimodal Document Intelligence & Extraction",
    tagline: "Zero-shot structural parsing, table extraction, and knowledge graph ingestion.",
    description:
      "End-to-end multimodal document processing pipeline transforming complex PDFs, financial sheets, and legal contracts into structured, queryable data entities.",
    challenge:
      "Unstructured enterprise PDF documents with inconsistent layouts, complex multi-column tables, and embedded handwriting defying traditional OCR engines.",
    solution:
      "Developed a vision-LLM document parser combined with hierarchical chunking, vector embedding storage, and deterministic schema enforcement via JSON schema validation.",
    technologies: ["Python", "Vision LLM", "RAG", "Vector Database", "FastAPI", "Docker"],
    services: ["RAG Systems", "Custom AI Solutions", "AI Integrations"],
    metrics: [
      { label: "Extraction Speed", value: "2.4s / doc" },
      { label: "Schema Precision", value: "99.8%" },
    ],
    images: [
      "/projects/document-1.webp",
      "/projects/document-2.webp"
    ],
    accentColor: "#EAF76A",
    confidential: true,
  },
];

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  categoryTag: string;
  tagline: string;
  headline?: string;
  description: string;
  subServices: string[];
  technologies: string[];
  ctaText: string;
  projectTypeValue: string;
  targetAudience?: string[];
  visualType: "ai" | "web" | "app" | "personal" | "design" | "automation";
}

export const SERVICES: ServiceItem[] = [
  {
    id: "ai-engineering",
    number: "01",
    title: "AI ENGINEERING",
    categoryTag: "APPLIED INTELLIGENCE",
    tagline: "Intelligent Systems & Applied Models",
    description:
      "We design and build production-ready AI systems that integrate intelligence directly into your products and workflows.",
    subServices: [
      "AI Agents",
      "RAG Systems",
      "LLM Integrations",
      "AI Chatbots",
      "AI Automation",
      "AI-powered SaaS",
      "Custom AI Solutions",
    ],
    technologies: [
      "OpenAI",
      "Claude",
      "Gemini",
      "LangChain",
      "LangGraph",
      "pgvector",
      "Python",
      "FastAPI",
    ],
    ctaText: "START AI PROJECT →",
    projectTypeValue: "AI Engineering",
    visualType: "ai",
  },
  {
    id: "web-development",
    number: "02",
    title: "WEB DEVELOPMENT",
    categoryTag: "DIGITAL EXPERIENCES",
    tagline: "Modern, High-Performance Web Applications",
    description:
      "From high-converting marketing websites to complex web applications, we build fast, scalable digital experiences.",
    subServices: [
      "Business Websites",
      "Corporate Websites",
      "SaaS Platforms",
      "E-commerce Websites",
      "Web Applications",
      "CMS Platforms",
      "Admin Dashboards",
      "API Integrations",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Spring Boot",
      "Java",
      "Python",
      "PostgreSQL",
      "MySQL",
    ],
    ctaText: "BUILD MY WEBSITE →",
    projectTypeValue: "Web Development",
    visualType: "web",
  },
  {
    id: "app-development",
    number: "03",
    title: "APP DEVELOPMENT",
    categoryTag: "MOBILE ECOSYSTEMS",
    tagline: "Native & Cross-Platform Mobile Products",
    description:
      "We turn product ideas into polished mobile applications with scalable backend systems and modern user experiences.",
    subServices: [
      "Android Apps",
      "iOS Apps",
      "Cross-platform Apps",
      "Business Applications",
      "Customer Apps",
      "Internal Enterprise Apps",
      "AI-powered Mobile Apps",
      "App Backend & APIs",
    ],
    technologies: [
      "React Native",
      "Flutter",
      "Android (Kotlin)",
      "iOS (Swift)",
      "Node.js",
      "Spring Boot",
      "Python",
      "PostgreSQL",
    ],
    ctaText: "BUILD MY APP →",
    projectTypeValue: "App Development",
    visualType: "app",
  },
  {
    id: "personal-branding",
    number: "04",
    title: "PERSONAL BRANDING",
    categoryTag: "EXECUTIVE PRESENCE",
    tagline: "Executive & Creator Digital Presences",
    headline: "YOUR NAME IS YOUR BRAND.",
    description:
      "We build premium personal websites that turn your expertise, story and achievements into a powerful digital presence. Your website should communicate who you are before you say a word.",
    targetAudience: [
      "Founders",
      "CEOs",
      "Entrepreneurs",
      "Creators",
      "Consultants",
      "Developers",
      "Designers",
      "Coaches",
      "Executives",
      "Public Personalities",
    ],
    subServices: [
      "Personal Portfolio",
      "Founder Website",
      "Executive Website",
      "Creator Portfolio",
      "Developer Portfolio",
      "Consultant Website",
      "Personal Brand Strategy",
      "Content & Blog",
      "SEO",
      "Social Media Integration",
    ],
    technologies: [
      "Next.js",
      "Tailwind CSS",
      "MDX / Headless CMS",
      "Framer Motion",
      "Editorial Typography",
      "SEO & OpenGraph",
    ],
    ctaText: "BUILD MY PERSONAL BRAND →",
    projectTypeValue: "Personal Branding",
    visualType: "personal",
  },
  {
    id: "ui-ux-design",
    number: "05",
    title: "UI/UX & PRODUCT DESIGN",
    categoryTag: "DIGITAL PRODUCT CRAFT",
    tagline: "Intuitive, Conversion-Focused Interfaces",
    description:
      "We design digital products that combine strong visual identity with intuitive user experiences, turning complex interactions into effortless flows.",
    subServices: [
      "UI/UX Design",
      "Product Design",
      "Website Design",
      "SaaS Design",
      "Dashboard Design",
      "Design Systems",
      "Interactive Prototypes",
      "Motion Design",
    ],
    technologies: [
      "Figma",
      "Design Tokens",
      "Interactive Prototyping",
      "Design Systems",
      "Component Architecture",
      "Micro-Interactions",
    ],
    ctaText: "DESIGN MY PRODUCT →",
    projectTypeValue: "UI/UX & Product Design",
    visualType: "design",
  },
  {
    id: "automation-integrations",
    number: "06",
    title: "AUTOMATION & INTEGRATIONS",
    categoryTag: "AUTONOMOUS OPERATIONS",
    tagline: "Autonomous Pipelines & Connected Systems",
    description:
      "We connect your tools, data and AI systems into automated workflows that run your business more efficiently and eliminate repetitive work.",
    subServices: [
      "n8n Automation",
      "CRM Automation",
      "WhatsApp Automation",
      "Email Automation",
      "Lead Automation",
      "API Integrations",
      "AI Workflows",
      "Business Process Automation",
    ],
    technologies: [
      "n8n",
      "Make",
      "Python",
      "Custom Webhooks",
      "REST APIs",
      "WhatsApp Cloud API",
      "HubSpot & Salesforce",
    ],
    ctaText: "AUTOMATE MY WORKFLOW →",
    projectTypeValue: "Automation & Integrations",
    visualType: "automation",
  },
];

export const PROCESS_STEPS = [
  {
    number: "01",
    title: "DISCOVER",
    subtitle: "Understanding the Core Problem",
    description:
      "We dissect the business challenge, data availability, compliance requirements, and user workflows to identify high-leverage AI opportunities.",
    deliverable: "Technical Feasibility Blueprint & System Scope",
  },
  {
    number: "02",
    title: "ARCHITECT",
    subtitle: "AI + System Engineering Design",
    description:
      "We design the complete technical topology: model selection, context retrieval pipeline, database schema, API contracts, and security boundaries.",
    deliverable: "Architecture Specifications & Data Flow Diagram",
  },
  {
    number: "03",
    title: "BUILD",
    subtitle: "Iterative Rapid Engineering",
    description:
      "We build the core system, fine-tune prompts and embeddings, construct robust backend microservices, and craft responsive interactive interfaces.",
    deliverable: "Working Production-Ready Software & Test Suites",
  },
  {
    number: "04",
    title: "DEPLOY",
    subtitle: "Infrastructure & Security Lockdown",
    description:
      "We ship resilient cloud infrastructure with CI/CD automation, observability logging, rate limiting, and zero-downtime deployment pipelines.",
    deliverable: "Production Cloud Environment & Monitoring Stack",
  },
  {
    number: "05",
    title: "OPTIMIZE",
    subtitle: "Latency, Cost & Quality Scaling",
    description:
      "We continuously evaluate system responses, tune prompt latency and token spend, refine agent behaviors, and expand product capabilities.",
    deliverable: "Telemetry Dashboards & Continuous Tuning",
  },
];

export const TECH_STACK = {
  ai: ["OpenAI", "Claude (Anthropic)", "Gemini", "LangChain", "LangGraph", "LlamaIndex", "Hugging Face"],
  fullstack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Spring Boot", "Java", "Python", "FastAPI"],
  data: ["PostgreSQL", "MySQL", "pgvector", "Pinecone", "Qdrant", "Redis", "Supabase"],
  infrastructure: ["Docker", "AWS", "Google Cloud", "CI/CD Actions", "Vercel", "Kubernetes"],
};

export const TESTIMONIALS = [
  {
    quote:
      "AI-Vora took an intricate operational workflow that previously required three manual departments and transformed it into a flawless, self-correcting autonomous system.",
    author: "Head of Engineering",
    company: "Enterprise Technology Partner",
    tag: "AI Automation",
  },
  {
    quote:
      "Their architectural rigor stands out. Rather than bolting a generic AI wrapper onto our stack, AI-Vora engineered a robust, context-grounded product that our enterprise clients trust every day.",
    author: "VP of Product",
    company: "B2B SaaS Platform",
    tag: "RAG & Product Studio",
  },
  {
    quote:
      "The precision in execution and deep engineering craft makes AI-Vora feel like an elite internal founding engineering team. Fast, dependable, and technically exceptional.",
    author: "Chief Technology Officer",
    company: "Venture Portfolio Company",
    tag: "Full-Stack AI Studio",
  },
];
