import {
  Code,
  Image,
  Layout,
  Sparkles,
  Zap,
  Layers,
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
  eyebrow: 'Creative Direction · Full-Stack Web · Brand Identity',
  heading: 'We Design & Build Digital Distinction.',
  tagline: "Build What's Next.",
  description:
    'NEXZIVO is an independent creative studio and digital engineering firm. We craft high-impact websites, bespoke poster and graphic design systems, and intuitive UI/UX for ambitious ventures.',
  primaryCta: { label: "Let's Build Together", href: '/contact' },
  secondaryCta: { label: 'Explore Studio Work', href: '/work' },
};

/* ──────────────────────────────────────────────────────────
   Creative & Digital Studio Services
   ────────────────────────────────────────────────────────── */

export const servicesData = [
  {
    slug: 'website-development',
    number: '01',
    icon: Code,
    title: 'Website Development',
    category: 'Engineering & Architecture',
    shortDescription:
      'High-performance custom web applications, creative interactive websites, responsive full-stack platforms, and headless architectures.',
    heroDescription:
      'We engineer ultra-fast, visually striking, and responsive websites that merge fluid motion with rock-solid frontend architectures and clean, scalable codebases.',
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
    slug: 'poster-graphic-design',
    number: '02',
    icon: Image,
    title: 'Poster & Graphic Design',
    category: 'Visual & Brand Art',
    shortDescription:
      'Compelling promotional posters, editorial key visuals, event graphics, brand iconography, and social digital design systems.',
    heroDescription:
      'Bold, expressive visual storytelling that commands immediate attention across print and digital mediums through disciplined typography, chromatic balance, and striking graphic composition.',
    capabilities: [
      'Event, Product Launch & Promotional Poster Design',
      'Editorial Key Visuals & Magazine Style Layouts',
      'Social Media Campaign Toolkits & Motion Assets',
      'Brand Identity Elements, Logomarks & Vector Emblems',
      'High-Resolution Print Production Preparation',
    ],
    deliverables: [
      'Print-Ready CMYK Vectors with Bleed & Crop Marks',
      'Ultra High-Resolution Digital Formats (RGB/Retina)',
      'Layered Source Files (Illustrator, Photoshop, Figma)',
      'Comprehensive Brand Typography & Color Usage Specs',
    ],
    outcomes: [
      { metric: '3.4x', label: 'Higher visual engagement on campaigns' },
      { metric: '300DPI', label: 'Flawless museum-grade print fidelity' },
    ],
  },
  {
    slug: 'ui-ux-design',
    number: '03',
    icon: Layout,
    title: 'UI/UX & Product Design',
    category: 'Product & Human Experience',
    shortDescription:
      'User research, information architecture, design systems, wireframes, and interactive high-fidelity software prototypes.',
    heroDescription:
      'We craft human-first digital products with obsessive attention to ergonomics, cognitive flow, and design tokens that bridge product vision directly to code.',
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
    slug: 'brand-strategy-innovation',
    number: '04',
    icon: Sparkles,
    title: 'Brand Strategy & Innovation',
    category: 'Positioning & Digital Culture',
    shortDescription:
      'Distinctive brand positioning, interactive storytelling, digital identity guidelines, and emerging creative technology.',
    heroDescription:
      'Helping brands stand out in crowded digital landscapes with sharp narrative positioning, memorable aesthetics, and creative emerging technology.',
    capabilities: [
      'Brand Positioning & Voice Guidelines',
      'Art Direction & Creative Digital Direction',
      'Interactive Digital Experiences & Creative Coding',
      'Generative AI Assisted Visual Exploration',
      'Omnichannel Design Systems & Asset Kits',
    ],
    deliverables: [
      'Complete Brand Book & Typography Hierarchy Manual',
      'Interactive Styleguide & Asset Repository',
      'Multi-Format Creative Asset Export Suite',
      'Future-Proof Digital Roadmap & Strategic Framework',
    ],
    outcomes: [
      { metric: '100%', label: 'Original, non-templated brand presence' },
      { metric: '24/7', label: 'Consistent cross-platform recognition' },
    ],
  },
];

export const servicesContent = {
  eyebrow: 'Studio Services',
  heading: 'From bold visual concepts to dependable web platforms.',
  description:
    'We unite visual craft, graphic art, and modern software engineering to build distinctive digital experiences for brands that want to lead.',
  items: servicesData,
};

/* ──────────────────────────────────────────────────────────
   Studio Working Approach
   ────────────────────────────────────────────────────────── */

export const approachContent = {
  eyebrow: 'Creative Process',
  heading: 'Disciplined methodology, distinctive outcomes.',
  description:
    'Every successful project balances artistic intuition with architectural rigor. Here is how we move from blank canvas to deployed reality.',
  steps: [
    {
      number: '01',
      title: 'Immersion & Direction',
      tagline: 'Uncovering the authentic narrative',
      description:
        'We dig into your brand DNA, target audience, aesthetic goals, and technical requirements before sketching or coding.',
      details: [
        'Creative vision alignment & moodboarding',
        'Competitive landscape & aesthetic gap analysis',
        'Technical stack feasibility & performance criteria',
        'Milestone deliverables & collaborative timeline setup',
      ],
    },
    {
      number: '02',
      title: 'Concept & Composition',
      tagline: 'Shaping typography, layout, and palette',
      description:
        'We explore multiple distinct visual routes, typography hierarchies, and layout structures to find the unmistakable voice.',
      details: [
        'Rapid exploratory concept decks and poster drafts',
        'Wireframe flow mapping and UX architecture',
        'Color palette calibration and contrast verification',
        'Interactive prototype reviews with direct client collaboration',
      ],
    },
    {
      number: '03',
      title: 'Craft & Engineering',
      tagline: 'Translating designs into living systems',
      description:
        'We turn finalized concepts into production-grade vector assets or cleanly structured, performant web applications.',
      details: [
        'Component-driven frontend development with design tokens',
        'Precision vector graphics and print-ready prepress files',
        'Fluid micro-interactions and accessible semantic markup',
        'Cross-browser and multi-viewport responsive testing',
      ],
    },
    {
      number: '04',
      title: 'Launch & Evolution',
      tagline: 'Flawless rollout and ongoing leverage',
      description:
        'We deploy with rigorous QA, optimize performance down to the millisecond, and provide complete source assets.',
      details: [
        'Core Web Vitals profiling and CDN deployment',
        'High-resolution asset delivery with complete documentation',
        'Client handoff walkthrough and content update guidance',
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
    category: 'Poster & Graphic Design',
    tagline: 'Typographic dynamism for modern electronic arts',
    description:
      'A series of large-format promotional posters and digital assets created for an underground contemporary electronic music and visual arts showcase.',
    challenge:
      'Capturing the visceral speed and mathematical rhythm of modern sound in a static two-dimensional visual medium.',
    solution:
      'We designed an experimental typography system combining kinetic type distortion, high-contrast duotones, and textured geometric grids.',
    client: 'Pulse Arts Collective',
    timeline: '4 Weeks',
    services: ['Poster Design', 'Visual Art Direction', 'Print Production'],
    technologies: ['Adobe Illustrator', 'Custom Grid System', 'CMYK Prepress', 'Figma'],
    gradient: 'from-[#1B2431] via-[#0F141C] to-[#080A0F]',
    metrics: [
      { label: 'Exhibition Posters Printed', value: '2,500+' },
      { label: 'Digital Reach', value: '45,000+' },
    ],
  },
  {
    slug: 'zenith-digital-commerce-platform',
    title: 'Zenith: Minimalist Web Platform',
    category: 'Website Development',
    tagline: 'High-speed editorial e-commerce experience',
    description:
      'A bespoke web experience combining architectural minimalism with sub-second page transitions, dynamic filtering, and fluid responsive layouts.',
    challenge:
      'Traditional luxury retail websites are often bogged down by heavy scripts and sluggish navigation that frustrate high-intent visitors.',
    solution:
      'Engineered from scratch using React, Vite, and modern CSS tokens with zero unnecessary third-party plugins, achieving a 99 Lighthouse performance score.',
    client: 'Zenith Studio Atelier',
    timeline: '8 Weeks',
    services: ['Web Development', 'UI/UX Design', 'Performance Engineering'],
    technologies: ['React 19', 'Vite', 'Tailwind CSS v4', 'Motion'],
    gradient: 'from-[#141B25] via-[#0E131B] to-[#0A0F16]',
    metrics: [
      { label: 'Lighthouse Score', value: '99/100' },
      { label: 'Checkout Conversion Lift', value: '+42%' },
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
    'A showcase of our recent engagements spanning website development, poster design, and digital interface systems.',
  items: workProjectsData,
};

/* ──────────────────────────────────────────────────────────
   Studio About Content
   ────────────────────────────────────────────────────────── */

export const aboutContent = {
  eyebrow: 'About the Studio',
  heading: 'We are NEXZIVO. A studio built for the digital frontier.',
  lead:
    'NEXZIVO was founded on the belief that modern brands need more than generic templates and sterile code. We craft digital experiences that combine unmistakable artistic presence with rigorous software engineering.',
  story: [
    'We are a multidisciplinary team of designers, creative coders, and full-stack developers. We reject repetitive design patterns and generic corporate templates in favor of bespoke visual identities, striking typography, and lightning-fast web applications.',
    'Whether designing a physical exhibition poster that demands notice from across the room, or architecting a responsive web platform that converts visitors into dedicated advocates, we treat every project with total craftsmanship and zero compromise.',
  ],
  values: [
    {
      icon: Palette,
      title: 'Artistic Intention',
      description:
        'We do not settle for cookie-cutter layouts. Every color, typographic pairing, and spacing ratio is chosen with deliberate purpose.',
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
        'You work directly with the creative leads and developers building your project. No layers of account managers.',
    },
    {
      icon: ShieldCheck,
      title: 'Obsessive Quality',
      description:
        'Pixel-perfect responsiveness, rigorous cross-browser testing, and flawless print-ready prepress production.',
    },
  ],
};

/* ──────────────────────────────────────────────────────────
   Contact Page Content
   ────────────────────────────────────────────────────────── */

export const contactCtaContent = {
  eyebrow: 'Start a Project',
  heading: "Have an ambitious project? Let's make it real.",
  description:
    "Tell us about your brand, website, poster design, or digital product goals. We'd love to collaborate.",
  cta: { label: 'Start a Conversation', href: '/contact' },
  stats: [
    { icon: Clock, label: 'Technical proposal within 24 hours' },
    { icon: ShieldCheck, label: 'Direct founder and lead designer access' },
  ],
};

/* ──────────────────────────────────────────────────────────
   Studio Products & Labs
   ────────────────────────────────────────────────────────── */

export const productsContent = {
  eyebrow: 'Internal Labs',
  heading: 'Proprietary tools born from our studio workflows.',
  description:
    'In addition to client engagements, we build internal creative and engineering utilities to accelerate prototyping and design systems.',
  items: [
    {
      name: 'GridMatrix',
      tagline: 'Kinetic Layout & Poster Prototyper',
      status: 'Active Lab',
      icon: Cpu,
      description:
        'An experimental browser canvas for algorithmic poster composition, variable font distortion, and automated print prepress exports.',
    },
    {
      name: 'TokenSync',
      tagline: 'Figma to React Token Bridge',
      status: 'Coming Soon',
      icon: Layers,
      description:
        'Bi-directional sync engine that translates Figma color, spacing, and typography styles directly into Tailwind v4 and CSS custom properties.',
    },
    {
      name: 'LighthouseGuard',
      tagline: 'Continuous Performance Sentinel',
      status: 'Coming Soon',
      icon: MonitorSmartphone,
      description:
        'Automated CI/CD test runner that audits responsive viewports and Core Web Vitals before staging branches merge into production.',
    },
  ],
};

/* ──────────────────────────────────────────────────────────
   Brand Philosophy Credo
   ────────────────────────────────────────────────────────── */

export const brandPhilosophyContent = {
  statement: 'We build digital experiences that propel visionary ideas forward and move people.',
};

