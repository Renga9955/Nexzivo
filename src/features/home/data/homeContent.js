import {
  Palette,
  Globe,
  Cpu,
  Sparkles,
  Compass,
  Target,
  Users,
  ShieldCheck,
  Clock,
} from 'lucide-react';

/* ──────────────────────────────────────────────────────────
   Hero Section
   ────────────────────────────────────────────────────────── */

export const heroContent = {
  eyebrow: 'Technology that moves forward',
  heading: "Build What's Next.",
  description:
    'We turn ambitious ideas into thoughtful digital experiences, intelligent products and technology built for what comes next.',
  primaryCta: { label: "Let's Build Together", href: '/contact' },
  secondaryCta: { label: 'Explore Our Capabilities', href: '#services' },
};

/* ──────────────────────────────────────────────────────────
   Services Section
   ────────────────────────────────────────────────────────── */

export const servicesContent = {
  eyebrow: 'What we do',
  heading: 'From ideas to intelligent digital solutions.',
  description:
    'We bring strategy, design and engineering together to solve meaningful problems and create useful digital experiences.',
  items: [
    {
      number: '01',
      icon: Palette,
      title: 'UI/UX & Product Design',
      description:
        'User research, UX strategy, wireframes, design systems, prototypes and intuitive digital experiences.',
    },
    {
      number: '02',
      icon: Globe,
      title: 'Web Development',
      description:
        'Responsive websites, modern web applications, front-end development and performance-focused experiences.',
    },
    {
      number: '03',
      icon: Cpu,
      title: 'Digital Product Engineering',
      description:
        'Scalable product architecture, feature development, integrations and ongoing product improvement.',
    },
    {
      number: '04',
      icon: Sparkles,
      title: 'AI & Digital Innovation',
      description:
        'Explore opportunities for practical AI-enabled experiences, automation and emerging digital solutions.',
    },
  ],
};

/* ──────────────────────────────────────────────────────────
   Approach Section
   ────────────────────────────────────────────────────────── */

export const approachContent = {
  eyebrow: 'Our approach',
  heading: 'Good technology starts with the right questions.',
  description:
    'A deliberate methodology that balances speed with quality, ensuring every engagement delivers measurable value.',
  steps: [
    {
      number: '01',
      title: 'Discover',
      description:
        'Understand the problem, people and business goals.',
    },
    {
      number: '02',
      title: 'Define',
      description:
        'Establish priorities, requirements and a clear direction.',
    },
    {
      number: '03',
      title: 'Design & Build',
      description:
        'Transform the solution into a usable, well-engineered product.',
    },
    {
      number: '04',
      title: 'Refine',
      description:
        'Test, learn, improve and prepare for what comes next.',
    },
  ],
};

/* ──────────────────────────────────────────────────────────
   Work Showcase Section
   ────────────────────────────────────────────────────────── */

export const workShowcaseContent = {
  eyebrow: 'Selected work',
  heading: 'Ideas worth exploring.',
  description:
    'A selection of concept projects that represent the type of work and capability we bring to engagements.',
  items: [
    {
      title: 'Digital Product Experience',
      category: 'Concept',
      description:
        'An immersive product experience concept exploring modern interface patterns, micro-interactions and content-driven design.',
      aspect: 'tall',
      gradient: 'from-[#102820] via-[#247A55] to-[#C6F36B]/40',
    },
    {
      title: 'Business Dashboard System',
      category: 'Concept',
      description:
        'A real-time analytics dashboard concept providing actionable insights across distributed data sources.',
      aspect: 'wide',
      gradient: 'from-[#171919] via-[#102820] to-[#247A55]',
    },
    {
      title: 'Modern Web Experience',
      category: 'Concept',
      description:
        'A concept for a content-rich web platform combining editorial design with dynamic data visualisation.',
      aspect: 'square',
      gradient: 'from-[#247A55] via-[#102820] to-[#171919]',
    },
  ],
};

/* ──────────────────────────────────────────────────────────
   Products Section
   ────────────────────────────────────────────────────────── */

export const productsContent = {
  eyebrow: 'Future products',
  heading: 'Building beyond the brief.',
  description:
    "We're exploring digital products designed to make everyday work simpler, smarter and more connected.",
  items: [
    {
      icon: Compass,
      name: 'Navigator',
      tagline: 'Project intelligence',
      description:
        'A project visibility tool providing real-time delivery health, risk signals, and team performance metrics.',
      status: 'In Exploration',
    },
    {
      icon: Target,
      name: 'Scope',
      tagline: 'Requirements clarity',
      description:
        'A structured requirements capture and prioritisation tool designed to reduce scope ambiguity early.',
      status: 'Coming Soon',
    },
    {
      icon: Users,
      name: 'Relay',
      tagline: 'Client collaboration',
      description:
        'A streamlined collaboration hub connecting delivery teams and stakeholders with shared context.',
      status: 'In Exploration',
    },
  ],
};

/* ──────────────────────────────────────────────────────────
   Brand Philosophy Section
   ────────────────────────────────────────────────────────── */

export const brandPhilosophyContent = {
  statement: 'Technology should move people forward.',
};

/* ──────────────────────────────────────────────────────────
   Contact CTA Section
   ────────────────────────────────────────────────────────── */

export const contactCtaContent = {
  eyebrow: 'Ready to start?',
  heading: "Have an idea? Let's make it real.",
  description:
    "Tell us what you're building. Let's explore how design and technology can move it forward.",
  cta: { label: 'Start a Conversation', href: '/contact' },
  stats: [
    { icon: Clock, label: 'Response within 24 hours' },
    { icon: ShieldCheck, label: 'Direct founder access' },
  ],
};
