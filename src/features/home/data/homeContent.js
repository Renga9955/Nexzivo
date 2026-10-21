import {
  Code,
  Layout,
  Smartphone,
  GraduationCap,
  Layers,
  Sparkles,
  Zap,
  ShieldCheck,
  Clock,
  Palette,
  MonitorSmartphone,
  Cpu,
} from 'lucide-react';

/* ──────────────────────────────────────────────────────────
   Hero Section
   ────────────────────────────────────────────────────────── */

export const heroContent = {
  eyebrow: 'DIGITAL EXPERIENCES · DESIGN · DEVELOPMENT',
  heading: "Build What's Next.",
  tagline: "Build What's Next.",
  description:
    'We turn ideas into digital experiences through thoughtful design, modern technology, and practical solutions that help businesses and individuals move forward.',
  primaryCta: { label: "Let's Build Together", href: '/contact' },
  secondaryCta: { label: 'Explore Our Services', href: '/services' },
};

/* ──────────────────────────────────────────────────────────
   Who We Are Section
   ────────────────────────────────────────────────────────── */

export const whoWeAreContent = {
  eyebrow: 'WHO WE ARE',
  heading: 'We Turn Ideas Into Digital Possibilities.',
  paragraphs: [
    'NEXZIVO is a digital technology and design company focused on transforming ideas into meaningful digital solutions. We bring together creativity, strategy, and modern technology to build websites, applications, and digital experiences that are intuitive, useful, and aligned with real-world needs.',
    'From helping businesses establish their online presence to supporting students in bringing academic project ideas to life, we approach every challenge with curiosity, thoughtful planning, and a commitment to quality.',
    'At NEXZIVO, we believe technology should do more than look impressive. It should solve problems, simplify experiences, and create opportunities for growth.',
  ],
};

/* ──────────────────────────────────────────────────────────
   Our Mission Section
   ────────────────────────────────────────────────────────── */

export const ourMissionContent = {
  eyebrow: 'OUR MISSION',
  heading: 'To Build Technology That Moves Ideas Forward.',
  paragraphs: [
    'Our mission is to make digital technology more useful, accessible, and meaningful for businesses and individuals.',
    'We aim to transform ideas into practical solutions through thoughtful design, reliable development, and a clear understanding of the problems we are solving. Whether it is building a business website, designing a user-friendly application, developing a custom digital tool, or supporting an academic project, we focus on creating outcomes that serve a real purpose.',
    'Every project is an opportunity to simplify complexity, encourage innovation, and help people take the next step with confidence.',
  ],
};

/* ──────────────────────────────────────────────────────────
   Services Data (5 Core Services)
   ────────────────────────────────────────────────────────── */

export const servicesData = [
  {
    slug: 'website-development',
    number: '01',
    icon: Code,
    title: 'Website Development',
    category: 'Web & Digital Platforms',
    shortDescription:
      'Modern, responsive websites built to represent your brand, engage your audience, and support your goals.',
    heroDescription:
      'We create websites tailored to the needs of businesses, startups, professionals, and individuals. From corporate websites and landing pages to portfolios and e-commerce experiences, we focus on clear structure, responsive layouts, accessible content, and smooth navigation across devices.',
    customerBenefit:
      'Build a professional online presence that helps people understand your offering and connect with your business.',
    examples: [
      'Business and corporate websites',
      'Startup websites and landing pages',
      'Personal and professional portfolios',
      'E-commerce websites',
      'Website redesign and improvements',
    ],
    capabilities: [
      'Bespoke Interactive Brand Websites & Portfolios',
      'Modern Single-Page & Server-Rendered Web Applications',
      'Performance Engineering & Core Web Vitals Optimization',
      'Responsive Mobile-First Architecture (WCAG Accessible)',
      'Headless CMS & Custom API Service Integrations',
    ],
    deliverables: [
      'Production-Ready Clean Codebases (React, Vite, Next.js)',
      'Responsive Cross-Browser Testing & Pixel-Perfect QA',
      'SEO Architecture, Meta Management & OpenGraph Setup',
      'Continuous Deployment & Zero-Downtime Hosting Config',
    ],
    outcomes: [
      { metric: '<1s', label: 'Average interactive load time' },
      { metric: '100%', label: 'Responsive cross-device fidelity' },
    ],
  },
  {
    slug: 'ui-ux-design',
    number: '02',
    icon: Layout,
    title: 'UI/UX Design',
    category: 'Product & User Experience',
    shortDescription:
      'Intuitive interfaces and thoughtful user experiences designed around real people.',
    heroDescription:
      'We design digital experiences with an emphasis on usability, clarity, consistency, and visual quality. From user flows and wireframes to interactive prototypes and polished interfaces, we help transform complex ideas into experiences that feel simple and natural to use.',
    customerBenefit:
      'Create digital products that are easier to understand, navigate, and use.',
    examples: [
      'Website UI/UX design',
      'Mobile app interface design',
      'Wireframes and prototypes',
      'User flows and information architecture',
      'Dashboards and admin interfaces',
      'Design systems and reusable components',
    ],
    capabilities: [
      'User Journey Mapping & Friction-Point Analysis',
      'Information Architecture & Low-Fidelity Wireframes',
      'Figma Design Systems & Atomic Component Libraries',
      'Interactive High-Fidelity Motion Prototypes',
      'Heuristic Audits & Usability Testing Sessions',
    ],
    deliverables: [
      'Comprehensive Multi-Device Figma Tokens & Libraries',
      'Tested Interactive Prototypes (Desktop, Tablet, Mobile)',
      'Developer Handoff Specifications & Redline Guides',
      'UX Usability Audit Reports & Recommendations',
    ],
    outcomes: [
      { metric: '40%', label: 'Accelerated development sprint velocity' },
      { metric: 'Zero', label: 'Ambiguity during engineering handoff' },
    ],
  },
  {
    slug: 'mobile-app-development',
    number: '03',
    icon: Smartphone,
    title: 'Mobile App Development',
    category: 'Mobile Applications',
    shortDescription:
      'Practical mobile applications built around user needs and real-world problems.',
    heroDescription:
      'We help turn mobile application ideas into useful digital experiences. From planning features and organising application flows to implementing functionality and refining usability, we focus on applications that are practical, intuitive, and aligned with their intended purpose.',
    customerBenefit:
      'Bring mobile application ideas to life with a clear focus on functionality and user experience.',
    examples: [
      'Business and service applications',
      'Utility and productivity applications',
      'Student and academic applications',
      'Minimum viable products and prototypes',
      'Improvements to existing applications',
    ],
    capabilities: [
      'Mobile User Experience & Flow Architecture',
      'Cross-Platform Application Engineering',
      'Native Feature Integration & API Synchronization',
      'Offline Data Caching & Performance Profiling',
      'App Store & Play Store Deployment Assistance',
    ],
    deliverables: [
      'Full Source Code & Component Architecture',
      'Cross-Platform Interactive Prototypes',
      'REST & GraphQL API Integration Modules',
      'Quality Assurance & Device Compatibility Testing',
    ],
    outcomes: [
      { metric: '60fps', label: 'Smooth mobile interactions' },
      { metric: '100%', label: 'Tailored to customer needs' },
    ],
  },
  {
    slug: 'final-year-projects',
    number: '04',
    icon: GraduationCap,
    title: 'Final-Year Projects',
    category: 'Academic Project Support',
    shortDescription:
      'Structured project development support that helps students turn academic ideas into working solutions.',
    heroDescription:
      'We support students in planning, understanding, developing, and presenting final-year software projects. Support can include project scope definition, requirement analysis, architecture planning, implementation guidance, testing, documentation, and demonstration preparation. Our approach emphasises practical learning, technical understanding, and responsible project development. Students should understand their implementation and be prepared to explain the design decisions, functionality, and results of their work.',
    customerBenefit:
      'Help students develop technical confidence, understand their project, and prepare to present their work effectively.',
    examples: [
      'Project idea exploration and scope definition',
      'Requirement analysis and planning',
      'Web and software project development guidance',
      'Database design and implementation support',
      'Testing and debugging',
      'Technical documentation support',
      'Project demonstration preparation',
    ],
    capabilities: [
      'Idea Validation & Scope Boundary Planning',
      'System Architecture & Database Schema Design',
      'Hands-On Implementation Guidance & Mentorship',
      'Code Review, Refactoring & Bug Resolution',
      'Viva Voce & Technical Presentation Coaching',
    ],
    deliverables: [
      'Working Software Solution Codebase',
      'System Architecture & Flow Diagrams',
      'Comprehensive Project Report & Documentation Guidance',
      'Demo Walkthrough & Presentation Deck Support',
    ],
    outcomes: [
      { metric: '100%', label: 'Student technical understanding' },
      { metric: 'End-to-End', label: 'Structured guidance' },
    ],
  },
  {
    slug: 'custom-software-solutions',
    number: '05',
    icon: Layers,
    title: 'Custom Software Solutions',
    category: 'Enterprise & Operations',
    shortDescription:
      'Purpose-built digital tools designed around your business requirements.',
    heroDescription:
      'We help businesses explore and develop software solutions that address specific operational needs. By understanding workflows, users, and business goals, we focus on practical tools that simplify tasks, organise information, and support more effective day-to-day operations.',
    customerBenefit:
      'Use digital tools designed around your processes and challenges rather than relying on unsuitable generic solutions.',
    examples: [
      'Custom web applications',
      'Admin panels and dashboards',
      'Internal business tools',
      'Workflow management solutions',
      'Reporting and data interfaces',
      'Enhancements to existing digital systems',
    ],
    capabilities: [
      'Operational Workflow & Process Analysis',
      'Custom Business Logic & Data Modeling',
      'Interactive Admin Dashboards & Analytics',
      'Role-Based Access Control & Security Auditing',
      'Third-Party Service & Legacy System Integration',
    ],
    deliverables: [
      'Modular, Maintainable Software Architecture',
      'Intuitive Administrative Management Interfaces',
      'Comprehensive Technical Documentation',
      'Deployment Scripts & Maintenance Protocols',
    ],
    outcomes: [
      { metric: 'Tailored', label: 'Aligned with internal workflows' },
      { metric: 'Scalable', label: 'Engineered for business growth' },
    ],
  },
];

export const servicesContent = {
  eyebrow: 'WHAT WE DO',
  heading: 'From First Idea to Final Product.',
  description:
    'At NEXZIVO, we turn ideas into practical digital solutions. From building business websites and designing intuitive user experiences to developing mobile applications and supporting final-year academic projects, we combine creativity and technology to help ideas take shape.',
  items: servicesData,
};

/* ──────────────────────────────────────────────────────────
   Why Choose NEXZIVO Section
   ────────────────────────────────────────────────────────── */

export const whyChooseUsContent = {
  eyebrow: 'WHY CHOOSE NEXZIVO?',
  heading: 'Thoughtful Solutions. Practical Technology. Clear Purpose.',
  description:
    'Choosing the right digital partner means finding a team that understands your goals, communicates clearly, and builds with purpose. At NEXZIVO, we bring design thinking and technology together to help turn ideas into practical digital outcomes.',
  reasons: [
    {
      title: 'Purpose-Driven Approach',
      description:
        'We begin by understanding the problem, the intended users, and the outcome you want to achieve. This helps us focus on solutions that serve a clear purpose rather than adding unnecessary complexity.',
    },
    {
      title: 'Design Meets Technology',
      description:
        'We bring user-focused design and modern development together to create digital experiences that balance visual quality, usability, and functionality.',
    },
    {
      title: 'Solutions for Different Needs',
      description:
        'From business websites and mobile applications to UI/UX design and final-year project support, we work across different digital needs with an emphasis on practical outcomes.',
    },
    {
      title: 'Clear and Collaborative Process',
      description:
        'We value clear communication, realistic expectations, and collaboration throughout a project. We aim to keep requirements, progress, and next steps understandable from the beginning.',
    },
    {
      title: 'Built With Growth in Mind',
      description:
        'We consider maintainability, usability, performance, and future improvements when planning digital solutions, helping them remain useful as requirements evolve.',
    },
  ],
};

/* ──────────────────────────────────────────────────────────
   Studio Working Approach (Preserved for Approach page / section)
   ────────────────────────────────────────────────────────── */

export const approachContent = {
  eyebrow: 'Creative Process',
  heading: 'Disciplined methodology, distinctive outcomes.',
  description:
    'Every successful project balances thoughtful planning with architectural rigor. Here is how we move from initial concept to deployed reality.',
  steps: [
    {
      number: '01',
      title: 'Immersion & Direction',
      tagline: 'Understanding goals and user needs',
      description:
        'We analyze your requirements, target audience, aesthetic goals, and technical boundaries before sketching or coding.',
      details: [
        'Creative vision alignment & requirement discovery',
        'User journeys & operational landscape analysis',
        'Technical stack feasibility & performance criteria',
        'Milestone deliverables & collaborative timeline setup',
      ],
    },
    {
      number: '02',
      title: 'Concept & Composition',
      tagline: 'Shaping typography, layout, and UX flows',
      description:
        'We explore distinct visual routes, user flows, and wireframes to ensure usability, clarity, and intuitive ergonomics.',
      details: [
        'Interactive prototype reviews with direct client collaboration',
        'Wireframe flow mapping and UX architecture',
        'Color palette calibration and contrast verification',
        'Component token definitions and responsive layouts',
      ],
    },
    {
      number: '03',
      title: 'Craft & Engineering',
      tagline: 'Translating designs into living systems',
      description:
        'We turn finalized concepts into production-grade vector assets or cleanly structured, performant applications.',
      details: [
        'Component-driven frontend development with design tokens',
        'Clean, scalable backend and database architectures',
        'Fluid micro-interactions and accessible semantic markup',
        'Cross-browser and multi-viewport responsive testing',
      ],
    },
    {
      number: '04',
      title: 'Launch & Evolution',
      tagline: 'Flawless rollout and ongoing leverage',
      description:
        'We deploy with rigorous QA, optimize performance down to the millisecond, and provide complete documentation.',
      details: [
        'Core Web Vitals profiling and CDN deployment',
        'Complete source handover with thorough documentation',
        'Walkthrough sessions and demonstration preparation',
        'Continuous support and future feature roadmap planning',
      ],
    },
  ],
};

/* ──────────────────────────────────────────────────────────
   Portfolio / Selected Work
   ────────────────────────────────────────────────────────── */

export const workProjectsData = [
  {
    slug: 'pulse-kinetic-editorial-poster',
    title: 'Pulse: Kinetic Graphic Series',
    category: 'Design & Visual Arts',
    tagline: 'Typographic dynamism for modern electronic arts',
    description:
      'A series of large-format promotional visuals and digital assets created for an underground contemporary electronic music and visual arts showcase.',
    challenge:
      'Capturing the visceral speed and mathematical rhythm of modern sound in a static visual medium.',
    solution:
      'We designed an experimental typography system combining kinetic type distortion, high-contrast duotones, and textured geometric grids.',
    client: 'Pulse Arts Collective',
    timeline: '4 Weeks',
    services: ['Design Systems', 'Visual Art Direction', 'Digital Assets'],
    technologies: ['Vector Tools', 'Custom Grid System', 'Figma'],
    gradient: 'from-[#1B2431] via-[#0F141C] to-[#080A0F]',
    metrics: [
      { label: 'Exhibition Reach', value: '45,000+' },
      { label: 'Asset Variations', value: '24+' },
    ],
  },
  {
    slug: 'zenith-digital-commerce-platform',
    title: 'Zenith: Minimalist Web Platform',
    category: 'Website Development',
    tagline: 'High-speed editorial web experience',
    description:
      'A bespoke web experience combining architectural minimalism with sub-second page transitions, dynamic filtering, and fluid responsive layouts.',
    challenge:
      'Traditional websites are often bogged down by heavy scripts and sluggish navigation that frustrate high-intent visitors.',
    solution:
      'Engineered from scratch using React, Vite, and modern CSS tokens with zero unnecessary third-party plugins, achieving a 99 Lighthouse performance score.',
    client: 'Zenith Studio Atelier',
    timeline: '8 Weeks',
    services: ['Web Development', 'UI/UX Design', 'Performance Engineering'],
    technologies: ['React 19', 'Vite', 'Tailwind CSS v4', 'Motion'],
    gradient: 'from-[#141B25] via-[#0E131B] to-[#0A0F16]',
    metrics: [
      { label: 'Lighthouse Score', value: '99/100' },
      { label: 'Conversion Lift', value: '+42%' },
    ],
  },
  {
    slug: 'lumina-saas-interface-system',
    title: 'Lumina: Telemetry Interface System',
    category: 'UI/UX Design',
    tagline: 'Intuitive data orchestration for creative teams',
    description:
      'A unified design system and interface suite for a collaborative telemetry tool used by distributed engineering and design studios.',
    challenge:
      'Simplifying complex multi-channel data streams without reducing operational density or obscuring critical real-time alerts.',
    solution:
      'An ergonomic dark-canvas UI with modular card components, custom micro-interactions, and accessible high-contrast data visualization.',
    client: 'Lumina Systems Labs',
    timeline: '6 Weeks',
    services: ['UI/UX Design', 'Design Systems', 'Interactive Prototyping'],
    technologies: ['Figma Tokens', 'React Components', 'Canvas Visualization'],
    gradient: 'from-[#18222E] via-[#10161F] to-[#080A0F]',
    metrics: [
      { label: 'Design System Tokens', value: '180+' },
      { label: 'Task Efficiency Gain', value: '3.5x' },
    ],
  },
];

export const workShowcaseContent = {
  eyebrow: 'Selected Work',
  heading: 'Curated projects that leave an impression.',
  description:
    'A showcase of our recent engagements spanning website development, digital interfaces, and modern technology solutions.',
  items: workProjectsData,
};

/* ──────────────────────────────────────────────────────────
   Studio About Content
   ────────────────────────────────────────────────────────── */

export const aboutContent = {
  eyebrow: 'About NEXZIVO',
  heading: 'We Turn Ideas Into Meaningful Digital Realities.',
  lead:
    'NEXZIVO was founded on the belief that digital technology should solve real problems, simplify experiences, and create sustainable opportunities for businesses and learners.',
  story: [
    'We are a team of designers, creative technologists, and full-stack software engineers. We approach every challenge with thoughtful planning, clear communication, and an uncompromising commitment to code quality and usability.',
    'Whether designing a responsive web platform for a growing business, prototyping a mobile application, or guiding students through their final-year academic implementations, we focus on outcomes that are intuitive, reliable, and built to last.',
  ],
  values: [
    {
      icon: Palette,
      title: 'Human-Centered Design',
      description:
        'We design digital experiences around real people, focusing on usability, accessibility, and visual clarity.',
    },
    {
      icon: Code,
      title: 'Modern Engineering',
      description:
        'Clean, accessible, and high-performance codebases built with modern tools: React, Vite, and Tailwind CSS.',
    },
    {
      icon: Zap,
      title: 'Direct Collaboration',
      description:
        'Clear communication, realistic expectations, and close partnership throughout every stage of the project.',
    },
    {
      icon: ShieldCheck,
      title: 'Quality & Longevity',
      description:
        'Responsive across devices, rigorously tested, and structured for easy maintenance and future growth.',
    },
  ],
};

/* ──────────────────────────────────────────────────────────
   Final Call To Action Content
   ────────────────────────────────────────────────────────── */

export const contactCtaContent = {
  eyebrow: 'START A PROJECT',
  heading: "Have an Idea? Let's Build It.",
  description:
    "Whether you're planning a business website, designing a digital product, building a mobile application, or exploring a final-year project, NEXZIVO can help you take the next step. Tell us what you have in mind, what you want to achieve, and where you need support. Let's explore the right approach together.",
  primaryCta: { label: 'Start a Project', href: '/contact' },
  secondaryCta: { label: 'Explore Our Services', href: '/services' },
  cta: { label: 'Start a Project', href: '/contact' },
  stats: [
    { icon: Clock, label: 'Prompt response within 24 hours' },
    { icon: ShieldCheck, label: 'Collaborative planning and transparent guidance' },
  ],
};

/* ──────────────────────────────────────────────────────────
   Studio Products & Labs (Internal Labs)
   ────────────────────────────────────────────────────────── */

export const productsContent = {
  eyebrow: 'Internal Labs',
  heading: 'Proprietary tools born from our workflows.',
  description:
    'In addition to client engagements, we build internal creative and engineering utilities to accelerate prototyping and software design systems.',
  items: [
    {
      name: 'GridMatrix',
      tagline: 'Layout & Interface Prototyper',
      status: 'Active Lab',
      icon: Cpu,
      description:
        'An experimental browser canvas for algorithmic layouts, responsive typographic grids, and component compositions.',
    },
    {
      name: 'TokenSync',
      tagline: 'Design to React Token Bridge',
      status: 'Coming Soon',
      icon: Layers,
      description:
        'Sync engine that translates design color, spacing, and typography styles directly into Tailwind v4 and CSS custom properties.',
    },
    {
      name: 'LighthouseGuard',
      tagline: 'Continuous Performance Sentinel',
      status: 'Coming Soon',
      icon: MonitorSmartphone,
      description:
        'Automated test runner that audits responsive viewports and Core Web Vitals before code merges into production.',
    },
  ],
};

/* ──────────────────────────────────────────────────────────
   Brand Philosophy Credo
   ────────────────────────────────────────────────────────── */

export const brandPhilosophyContent = {
  statement: "We build technology that moves ideas forward and creates real opportunities.",
};
