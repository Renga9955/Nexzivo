// Service hero images (landscape studio captures generated specifically for each service)
import webHeroImg from '@/assets/showcase/service-web-hero.jpg';
import mobileHeroImg from '@/assets/showcase/service-mobile-hero.jpg';
import uiuxHeroImg from '@/assets/showcase/service-uiux-hero.jpg';
import posterHeroImg from '@/assets/showcase/service-poster-hero.jpg';
import softwareHeroImg from '@/assets/showcase/service-software-hero.jpg';
import academicHeroImg from '@/assets/showcase/service-academic-hero.jpg';

// Supporting showcase project images
import zenithImg from '@/assets/showcase/project-zenith.jpg';
import mobileProjImg from '@/assets/showcase/project-mobile.jpg';
import luminaImg from '@/assets/showcase/project-lumina.jpg';
import pulseImg from '@/assets/showcase/project-pulse.jpg';
import softwareProjImg from '@/assets/showcase/project-software.jpg';
import missionImg from '@/assets/showcase/mission-studio-showcase.jpg';

export const servicesDetailedCatalog = {
  'website-development': {
    slug: 'website-development',
    number: '01',
    category: 'Web & Digital Experiences',
    badge: 'Responsive & Fast',
    title: 'Website Development',
    heroHeadline: 'Websites Designed to Make Your Business Stand Out',
    shortDescription:
      'Modern, responsive, and high-performing websites tailored to your business goals and audience.',
    heroDescription:
      'We design and build bespoke, high-performance websites that communicate your brand narrative with clarity, engage your target audience, and turn casual visitors into loyal customers.',
    heroImage: webHeroImg,
    heroImageAlt:
      'Modern desktop monitor and smartphone displaying a responsive, beautifully crafted business website',
    primaryCta: "Let's Build Your Website",
    secondaryCta: 'Explore Our Process',
    stats: [
      { value: '100%', label: 'Responsive across all viewports' },
      { value: '98+', label: 'Average Google Lighthouse Score' },
      { value: '< 1.2s', label: 'Initial Page Load Speed' },
      { value: '100% Bespoke', label: 'Zero generic templates or bloat' },
    ],
    overview: {
      eyebrow: 'Web Architecture & Purpose',
      heading: 'Engineered for speed, brand distinction, and effortless conversion.',
      description:
        'A website is often the first and most critical interaction a customer has with your business. At NEXZIVO, we combine deliberate visual hierarchy with modern web engineering to build digital storefronts, corporate platforms, and dynamic portals that make a lasting impression.',
      paragraphs: [
        'We believe that modern websites should be fast, accessible, and intuitive. Rather than relying on rigid off-the-shelf themes bloated with unnecessary dependencies, our engineers and designers craft bespoke web architectures customized to your precise business goals.',
        'From high-conversion landing pages to full-scale content management systems and e-commerce platforms, every layout is tested rigorously across desktops, tablets, and smartphones to ensure flawless performance and visual clarity.',
      ],
    },
    types: {
      eyebrow: 'Website Solutions',
      heading: 'Tailored web solutions for every stage of growth',
      description:
        'Whether launching a new venture or elevating an established brand, we craft web experiences structured for your exact needs.',
      items: [
        {
          title: 'Business & Corporate Websites',
          description:
            'Credible, brand-first web presences that establish authority, present your company story, and drive client enquiries.',
        },
        {
          title: 'High-Conversion Landing Pages',
          description:
            'Laser-focused promotional pages built for marketing campaigns, product debuts, and maximum lead generation.',
        },
        {
          title: 'Portfolio & Creative Showcases',
          description:
            'Visually expressive, editorial-grade galleries and digital portfolios tailored for studios, architects, and artists.',
        },
        {
          title: 'E-Commerce & Digital Catalogs',
          description:
            'Frictionless online shopping experiences with structured product catalogs, secure checkout paths, and mobile-first flows.',
        },
        {
          title: 'CMS & Dynamic Content Platforms',
          description:
            'Easily manageable websites backed by flexible headless or structured content systems so your team can publish with ease.',
        },
        {
          title: 'Website Redesigns & Performance Audits',
          description:
            'Comprehensive technical revamps of outdated or slow websites to modernize styling, fix accessibility, and slash load times.',
        },
      ],
    },
    capabilities: [
      {
        title: 'Pixel-Perfect Responsive Layouts',
        description:
          'Meticulously engineered CSS layouts that adapt fluidly to every device screen from compact smartphones to ultra-wide displays.',
      },
      {
        title: 'Intuitive Navigation & User Journeys',
        description:
          'Clear, frictionless navigation patterns and logical information architecture that guide visitors directly to key actions.',
      },
      {
        title: 'Search Engine & Accessibility Optimization',
        description:
          'Built-in semantic HTML5 markup, structured meta tags, fast server response times, and WCAG accessibility compliance.',
      },
      {
        title: 'Sub-Second Performance Engineering',
        description:
          'Optimized asset loading, modern image formats, lazy loading, and lightweight bundles delivering instant page transitions.',
      },
      {
        title: 'Clean, Maintainable Codebase',
        description:
          'Well-structured, component-driven frontend architecture adhering to strict engineering standards for effortless future expansion.',
      },
      {
        title: 'Secure Hosting & Domain Deployment',
        description:
          'Automated continuous deployment, SSL certificate integration, and CDN configuration for lightning-fast worldwide delivery.',
      },
    ],
    process: [
      {
        step: '01',
        title: 'Discovery & Architecture',
        description:
          'We evaluate your brand identity, business objectives, audience behaviors, and map out the sitemap and content requirements.',
      },
      {
        step: '02',
        title: 'UI/UX & Visual Direction',
        description:
          'We design high-fidelity responsive wireframes and layout compositions with curated typography, color harmony, and micro-interactions.',
      },
      {
        step: '03',
        title: 'Modern Frontend Development',
        description:
          'We translate approved designs into clean, modular code using modern frameworks, ensuring responsive precision and high speed.',
      },
      {
        step: '04',
        title: 'Cross-Device QA & Testing',
        description:
          'Rigorous quality assurance across browsers, mobile operating systems, network speeds, and accessibility standards.',
      },
      {
        step: '05',
        title: 'Deployment & Client Handover',
        description:
          'Smooth live deployment to production servers, domain connection, search console verification, and clear maintenance guidance.',
      },
    ],
    deliverables: [
      'Fully responsive, production-ready website tested on all modern devices',
      'Clean, modular component architecture with comprehensive source code',
      'Complete SEO foundation: metadata, OpenGraph cards, sitemap, and robots.txt',
      'Optimized media assets and responsive image pipelines',
      'Production deployment configuration and domain DNS setup assistance',
      'Client handover walk-through documentation and ongoing support plan',
    ],
    featuredProject: {
      eyebrow: 'Selected Case Study',
      title: 'Zenith: Minimalist Editorial Web Platform',
      tagline: 'High-speed editorial web experience for luxury architecture',
      description:
        'A bespoke digital platform combining architectural minimalism with sub-second transitions, dynamic gallery filtering, and fluid responsive layouts. Engineered for a 99 Lighthouse performance score.',
      image: zenithImg,
      link: '/work/zenith-digital-commerce-platform',
      metric: '99/100',
      metricLabel: 'Lighthouse Performance Score',
    },
    closingCta: {
      headline: 'Ready to build a website that elevates your business?',
      description:
        'Tell us about your brand vision, requirements, and target timeline. We will collaborate to create a digital experience that drives real results.',
      buttonText: "Let's Build Your Website",
      href: '/contact',
    },
  },

  'mobile-app-development': {
    slug: 'mobile-app-development',
    number: '02',
    category: 'Mobile Experiences',
    badge: 'iOS & Android',
    title: 'Mobile App Development',
    heroHeadline: 'Mobile Experiences Built Around Your Users',
    shortDescription:
      'Intuitive mobile applications designed to deliver useful, engaging, and frictionless mobile experiences.',
    heroDescription:
      'We turn application concepts into intuitive, fluid mobile experiences that solve real user needs. From initial screen planning to cross-platform implementation, we engineer mobile apps that keep users engaged.',
    heroImage: mobileHeroImg,
    heroImageAlt:
      'Realistic smartphone mockups showcasing modern mobile app dashboards, user profiles, and clean navigation flows',
    primaryCta: 'Discuss Your App Idea',
    secondaryCta: 'Explore Our Process',
    stats: [
      { value: 'Cross-Platform', label: 'Unified iOS & Android builds' },
      { value: '60 FPS', label: 'Fluid interaction animations' },
      { value: 'Offline-First', label: 'Resilient local data caching' },
      { value: 'Secure', label: 'Encrypted storage & API channels' },
    ],
    overview: {
      eyebrow: 'Mobile Engineering Purpose',
      heading: 'Engaging, responsive mobile apps crafted for touch, speed, and reliability.',
      description:
        'In today’s mobile-first world, your customers expect instant access, effortless gestures, and clear layouts. NEXZIVO builds mobile applications with user-centered workflows, clean typography, and robust API connectivity.',
      paragraphs: [
        'We specialize in building cross-platform mobile solutions using modern frameworks that enable rapid iteration, shared code efficiency, and consistent visual fidelity on both iOS and Android platforms.',
        'Whether you need a customer booking application, an internal mobile dashboard for field personnel, or an interactive mobile tool, we focus on ergonomic navigation, intuitive input patterns, and smooth performance under all network conditions.',
      ],
    },
    types: {
      eyebrow: 'Mobile Offerings',
      heading: 'Purpose-built mobile applications for real-world utility',
      description:
        'We build mobile applications designed for practical everyday tasks, clear communication, and customer convenience.',
      items: [
        {
          title: 'Customer & Service Booking Apps',
          description:
            'Intuitive scheduling, real-time slot selection, customer accounts, and automated reminder alerts.',
        },
        {
          title: 'Mobile Dashboards & Reporting',
          description:
            'Interactive charts, business KPIs, and team activity feeds designed specifically for handheld displays.',
        },
        {
          title: 'Cross-Platform Mobile Apps',
          description:
            'Single-codebase architectures that deliver native-feeling user experiences across both iOS and Android devices.',
        },
        {
          title: 'E-Commerce & Catalog Apps',
          description:
            'Browseable inventories, shopping carts, wishlist management, and streamlined mobile checkout workflows.',
        },
        {
          title: 'Field Operations & Workforce Tools',
          description:
            'Lightweight mobile utilities that help team members capture logs, verify statuses, and record updates on the go.',
        },
        {
          title: 'Mobile App Modernization & Redesigns',
          description:
            'Re-architecting existing slow or cluttered apps with modern design tokens, faster load states, and refined UX.',
        },
      ],
    },
    capabilities: [
      {
        title: 'Ergonomic Touch UI & Gesture Design',
        description:
          'Interfaces structured around natural thumb zones, responsive touch targets, and fluid swipe interactions.',
      },
      {
        title: 'Secure REST & GraphQL API Integration',
        description:
          'Fast, authenticated connections to your cloud backend, database, payment providers, and third-party services.',
      },
      {
        title: 'Offline Data Caching & Local Storage',
        description:
          'Resilient local storage mechanisms ensuring the app remains usable and informative even when network connections drop.',
      },
      {
        title: 'State Management & Real-Time Sync',
        description:
          'Predictable app state architecture providing instant UI updates and seamless multi-device data synchronization.',
      },
      {
        title: 'Notification & Activity Workflows',
        description:
          'Actionable mobile alerts, scheduled reminders, and interactive badges that drive customer retention and engagement.',
      },
      {
        title: 'Device Hardware & Camera Integration',
        description:
          'Seamless integration with camera capture, QR/barcode scanning, geolocation, and biometric authentication.',
      },
    ],
    process: [
      {
        step: '01',
        title: 'User Journey & Scope Definition',
        description:
          'We identify primary user personas, define critical task flows, and map out the exact feature scope for the app.',
      },
      {
        step: '02',
        title: 'Interactive Screen Prototyping',
        description:
          'We craft high-fidelity mobile mockups and clickable prototypes to test touch ergonomics and interaction sequences.',
      },
      {
        step: '03',
        title: 'Cross-Platform App Development',
        description:
          'We engineer frontend components, integrate backend endpoints, and handle state persistence with modular architectures.',
      },
      {
        step: '04',
        title: 'Device Emulation & Performance QA',
        description:
          'Thorough testing across diverse screen sizes, Android versions, iOS devices, and varying network bandwidths.',
      },
      {
        step: '05',
        title: 'Release Preparation & Handover',
        description:
          'App bundle compilation, deployment configuration, complete source code handover, and architecture documentation.',
      },
    ],
    deliverables: [
      'Complete cross-platform mobile application codebase with clear architecture',
      'High-fidelity screen assets and mobile design specification file',
      'Configured API integration services with robust error handling',
      'Comprehensive QA test logs across standard iOS and Android screen sizes',
      'App deployment bundle ready for internal testing or store staging',
      'Documentation covering environment setup, API keys, and maintenance guide',
    ],
    featuredProject: {
      eyebrow: 'Selected Case Study',
      title: 'NexaBook: Mobile Service Scheduling',
      tagline: 'Frictionless customer booking and real-time appointment flow',
      description:
        'An intuitive mobile application designed to simplify service scheduling, instant appointment confirmation, and automated reminders on iOS and Android.',
      image: mobileProjImg,
      link: '/work/nexabook-mobile-appointment-platform',
      metric: '94%',
      metricLabel: 'Booking Completion Rate',
    },
    closingCta: {
      headline: 'Have an innovative mobile app concept in mind?',
      description:
        'Let’s turn your vision into a fluid, user-friendly mobile application built for modern smartphone ecosystems.',
      buttonText: 'Discuss Your App Idea',
      href: '/contact',
    },
  },

  'ui-ux-design': {
    slug: 'ui-ux-design',
    number: '03',
    category: 'Digital Product Design',
    badge: 'Human-Centered & Polished',
    title: 'UI/UX Design',
    heroHeadline: 'Thoughtful Design for Better Digital Experiences',
    shortDescription:
      'User-focused designs that create meaningful, intuitive, and engaging digital experiences across web and mobile.',
    heroDescription:
      'We shape digital interfaces around human behavior. Through strategic user research, wireframing, interactive prototyping, and comprehensive design systems, we craft digital products that are enjoyable, clear, and effortless to use.',
    heroImage: uiuxHeroImg,
    heroImageAlt:
      'Clean UI/UX design studio workstation with interface wireframes, design system guide, sketches, and modern web prototype',
    primaryCta: "Let's Design Your Experience",
    secondaryCta: 'Explore Our Process',
    stats: [
      { value: 'Human-First', label: 'Rooted in cognitive empathy' },
      { value: '180+ Tokens', label: 'Scalable design systems & UI kits' },
      { value: 'Figma Native', label: 'Interactive clickable prototypes' },
      { value: 'Dev-Ready', label: 'Comprehensive handover specs' },
    ],
    overview: {
      eyebrow: 'Design Philosophy',
      heading: 'Clarity, visual harmony, and intuitive flow at every touchpoint.',
      description:
        'Great digital design is invisible: it allows users to accomplish their goals without hesitation, confusion, or friction. At NEXZIVO, UI/UX design is not merely decoration—it is the strategic bridge between your business goals and your customers’ needs.',
      paragraphs: [
        'We begin by analyzing who your users are, the context in which they interact with your digital product, and the friction points in their current journeys. From this foundation, we construct clear information architectures, intuitive wireframe layouts, and cohesive aesthetic systems.',
        'Whether designing a complex multi-tenant SaaS dashboard, an e-commerce checkout sequence, or a consumer mobile experience, our designs provide engineers with unambiguous design tokens and interactive prototypes that accelerate development.',
      ],
    },
    types: {
      eyebrow: 'Design Disciplines',
      heading: 'End-to-end design services from concept to design system',
      description:
        'We craft digital experiences that balance aesthetic distinction with functional simplicity.',
      items: [
        {
          title: 'User Research & Journey Mapping',
          description:
            'Analyzing audience requirements, creating user personas, and identifying friction points to shape clear workflows.',
        },
        {
          title: 'Information Architecture & Wireframing',
          description:
            'Establishing logical content hierarchy, sitemaps, and low-fidelity schematic layouts focused purely on structure.',
        },
        {
          title: 'Web & Mobile UI Design',
          description:
            'High-fidelity screen designs with curated color palettes, elegant typography, iconography, and spatial balance.',
        },
        {
          title: 'Interactive Prototyping',
          description:
            'Clickable, high-fidelity Figma prototypes simulating real user interactions, page transitions, and micro-animations.',
        },
        {
          title: 'Design Systems & Component Libraries',
          description:
            'Reusable UI component libraries with standardized tokens for colors, spacing, typography, and interactive states.',
        },
        {
          title: 'Usability Audits & UX Optimization',
          description:
            'Diagnostic reviews of existing applications to pinpoint conversion bottlenecks, accessibility flaws, and cognitive friction.',
        },
      ],
    },
    capabilities: [
      {
        title: 'Cognitive Usability & Visual Hierarchy',
        description:
          'Directing user attention with intentional contrast, typographic scaling, and purposeful whitespace.',
      },
      {
        title: 'Responsive & Adaptive Screen Specs',
        description:
          'Layout designs tailored specifically for mobile, tablet, laptop, and ultra-wide monitor viewports.',
      },
      {
        title: 'Component Token Architecture',
        description:
          'Structured design tokens matching CSS variables for seamless translation into React, Tailwind, and native code.',
      },
      {
        title: 'Accessible & Inclusive Patterns',
        description:
          'Color contrast compliance (WCAG AAA/AA), readable typography scales, and keyboard-navigable UI patterns.',
      },
      {
        title: 'Micro-Interactions & State Design',
        description:
          'Detailed definitions for button hovers, active presses, focus rings, loading states, error alerts, and empty views.',
      },
      {
        title: 'Developer Handover & Asset Specs',
        description:
          'Organized Figma files with auto-layout, named layers, exported SVG assets, and explicit interaction notes.',
      },
    ],
    process: [
      {
        step: '01',
        title: 'Research & Discovery',
        description:
          'We explore user motivations, competitive landscape, product requirements, and technical constraints.',
      },
      {
        step: '02',
        title: 'Information Architecture & Flows',
        description:
          'We draft sitemaps, user flow diagrams, and rapid wireframes to establish logical product navigation.',
      },
      {
        step: '03',
        title: 'Visual Design & System Craft',
        description:
          'We develop the visual tone, color system, typography rules, and core interface components.',
      },
      {
        step: '04',
        title: 'Interactive Prototyping & Review',
        description:
          'We assemble clickable flows to simulate realistic interactions, gather feedback, and validate usability.',
      },
      {
        step: '05',
        title: 'Handover & Engineering Specs',
        description:
          'We deliver clean, inspectable Figma files with component tokens, exported assets, and implementation notes.',
      },
    ],
    deliverables: [
      'Comprehensive Figma source files with organized frames and auto-layout',
      'Clickable interactive prototype for stakeholder review and user testing',
      'Scalable design system component library with tokens and style guide',
      'User flow diagrams and information architecture blueprints',
      'Production-ready SVG icons, logos, and illustration assets',
      'Developer handover document detailing spacing, colors, and motion easing',
    ],
    featuredProject: {
      eyebrow: 'Selected Case Study',
      title: 'Lumina: Telemetry Interface System',
      tagline: 'Intuitive data orchestration for creative engineering teams',
      description:
        'A unified design system and interface suite for collaborative telemetry tools, presenting complex multi-channel data streams with zero cognitive friction.',
      image: luminaImg,
      link: '/work/lumina-saas-interface-system',
      metric: '3.5x',
      metricLabel: 'Task Efficiency Gain',
    },
    closingCta: {
      headline: 'Ready to elevate the way users experience your product?',
      description:
        'Let’s collaborate to design an interface that makes complex tasks intuitive and leaves a memorable impression on every user.',
      buttonText: "Let's Design Your Experience",
      href: '/contact',
    },
  },

  'poster-graphic-design': {
    slug: 'poster-graphic-design',
    number: '04',
    category: 'Visual & Brand Design',
    badge: 'Artistic & Expressive',
    title: 'Poster Design & Graphic Design',
    heroHeadline: 'Creative Visuals That Bring Your Brand to Life',
    shortDescription:
      'Creative visual designs that communicate your brand, ideas, and message effectively across print and digital.',
    heroDescription:
      'We craft bold visual communications that demand attention. From large-format event posters and cultural exhibition artwork to cohesive digital brand assets and promotional campaigns, our designs deliver high impact with artistic precision.',
    heroImage: posterHeroImg,
    heroImageAlt:
      'Contemporary creative design studio gallery wall with modern posters, brand visual guidelines, and print portfolio showcase',
    primaryCta: 'Start a Creative Project',
    secondaryCta: 'Explore Our Process',
    stats: [
      { value: '300+ DPI', label: 'Prepress vector print precision' },
      { value: 'CMYK & RGB', label: 'Color-calibrated production assets' },
      { value: 'Custom Type', label: 'Expressive typographic systems' },
      { value: 'Omni-Channel', label: 'Ready for print, web, and social' },
    ],
    overview: {
      eyebrow: 'Visual Art Direction',
      heading: 'Striking graphic design that cuts through the visual noise.',
      description:
        'In an era of endless scrolling and visual saturation, distinctive graphic design makes people pause and take notice. NEXZIVO crafts posters and graphic identities that merge deliberate conceptual thinking with bold typography and rich color harmonies.',
      paragraphs: [
        'Whether promoting a cultural event, announcing a product release, or building an unforgettable brand identity, our creative team balances artistic experimentation with clear visual communication.',
        'Every poster, banner, and social creative is engineered with deliberate grid structures, precise kerning, and color calibrations suitable for both high-resolution offset printing and crisp digital screens.',
      ],
    },
    types: {
      eyebrow: 'Graphic Disciplines',
      heading: 'Diverse creative mediums tailored for memorable impact',
      description:
        'From gallery-worthy print posters to dynamic digital campaign visuals, we bring your ideas to life.',
      items: [
        {
          title: 'Event & Exhibition Posters',
          description:
            'Commanding large-format posters for conferences, music festivals, gallery openings, and cultural gatherings.',
        },
        {
          title: 'Promotional Banners & Signage',
          description:
            'Eye-catching physical and digital promotional displays designed for retail storefronts, conferences, and expos.',
        },
        {
          title: 'Social Media Campaign Graphics',
          description:
            'High-engagement visual suites formatted for Instagram, LinkedIn, and X, maintaining brand cohesion across all feeds.',
        },
        {
          title: 'Brand Identity & Visual Guidelines',
          description:
            'Core visual identity elements including logo marks, typography pairings, color systems, and usage guidelines.',
        },
        {
          title: 'Marketing Collateral & Brochures',
          description:
            'Professional print collateral, flyers, editorial lookbooks, and pitch deck visuals that reinforce credibility.',
        },
        {
          title: 'Custom Digital Illustrations & Badges',
          description:
            'Bespoke iconography, vector artwork, badge emblems, and creative visual assets tailored to your brand story.',
        },
      ],
    },
    capabilities: [
      {
        title: 'Bold Typographic Systems',
        description:
          'Expert font pairings, kinetic letterforms, and structural hierarchy that establish instant reading order.',
      },
      {
        title: 'Curated Harmonious Color Palettes',
        description:
          'Carefully balanced color selections tested for aesthetic depth, print fidelity, and high visual contrast.',
      },
      {
        title: 'Prepress Print Production Mastery',
        description:
          'Flawless CMYK color space conversion, bleed zones, crop marks, and vector export specifications ready for print shops.',
      },
      {
        title: 'Multi-Format Digital Adaptations',
        description:
          'Pixel-optimized PNG, JPG, WebP, and SVG exports cropped specifically for standard social and web banner dimensions.',
      },
      {
        title: 'Conceptual Storytelling & Symbolism',
        description:
          'Translating complex messages and brand values into concise, striking visual metaphors that resonate instantly.',
      },
      {
        title: 'Cohesive Campaign Art Direction',
        description:
          'Unified visual themes that flow effortlessly across printed posters, digital feeds, banners, and merch.',
      },
    ],
    process: [
      {
        step: '01',
        title: 'Creative Brief & Concept Ideation',
        description:
          'We clarify your core message, audience context, aesthetic tone, and gather visual references into a moodboard.',
      },
      {
        step: '02',
        title: 'Composition & Typography Explorations',
        description:
          'We explore several distinct layout directions, type hierarchies, and color schemes to establish a strong visual anchor.',
      },
      {
        step: '03',
        title: 'Design Refinement & Detailing',
        description:
          'We polish the selected concept, perfecting kerning, color contrasts, vector curves, and balancing negative space.',
      },
      {
        step: '04',
        title: 'Prepress & Digital Optimization',
        description:
          'We generate calibrated CMYK print-ready files with bleed margins as well as RGB digital assets for online promotion.',
      },
      {
        step: '05',
        title: 'Final Asset Delivery & Packaging',
        description:
          'We organize all vector source files, raster exports, and a quick-reference usage guide for flawless deployment.',
      },
    ],
    deliverables: [
      'Print-ready vector PDF files with standard 3mm bleed and crop marks (300 DPI CMYK)',
      'High-resolution RGB digital graphics optimized for web and social distribution',
      'Editable vector source files (Illustrator / Figma / Vector SVG)',
      'Full typography pairing recommendations and font licensing guidelines',
      'Cohesive digital asset pack formatted for standard social feed ratios (1:1, 4:5, 16:9)',
      'Usage guide outlining color codes (HEX, RGB, CMYK, Pantone) and clear space rules',
    ],
    featuredProject: {
      eyebrow: 'Selected Case Study',
      title: 'Pulse: Kinetic Graphic Series',
      tagline: 'Typographic dynamism for modern electronic arts',
      description:
        'A series of large-format promotional posters and digital campaign assets created for an underground contemporary electronic music and arts festival with dynamic typography.',
      image: pulseImg,
      link: '/work/pulse-kinetic-editorial-poster',
      metric: '2,500+',
      metricLabel: 'Exhibition Posters Printed',
    },
    closingCta: {
      headline: 'Have an upcoming campaign or event that needs standout visuals?',
      description:
        'Let’s craft striking poster artwork and graphic designs that tell your story with undeniable visual energy.',
      buttonText: 'Start a Creative Project',
      href: '/contact',
    },
  },

  'custom-software-development': {
    slug: 'custom-software-development',
    number: '05',
    category: 'Business & Management Systems',
    badge: 'Tailored & Efficient',
    title: 'Custom Software Development',
    heroHeadline: 'Software Solutions Tailored to Your Business',
    shortDescription:
      'Tailored business software to streamline operations, automate workflows, and improve daily operational efficiency.',
    heroDescription:
      'Off-the-shelf software rarely fits unique operational workflows. We build tailored web-based software, administrative dashboards, and internal business tools designed specifically around how your team works.',
    heroImage: softwareHeroImg,
    heroImageAlt:
      'Modern laptop displaying a comprehensive custom enterprise software dashboard with analytics tables, revenue trends, and workflow pipelines',
    primaryCta: 'Discuss Your Software Requirements',
    secondaryCta: 'Explore Our Process',
    stats: [
      { value: '100% Tailored', label: 'Built around your exact workflows' },
      { value: '-70%', label: 'Average manual processing reduction' },
      { value: 'Secure', label: 'Role-based access & encrypted data' },
      { value: 'Scalable', label: 'Modular web application architecture' },
    ],
    overview: {
      eyebrow: 'Operational Engineering',
      heading: 'Custom tools that eliminate friction and centralize business intelligence.',
      description:
        'Growing businesses often get bogged down by messy spreadsheets, fragmented tools, and manual data re-entry. NEXZIVO develops tailored web software applications that unify your data, automate tedious routines, and give decision-makers instant visibility.',
      paragraphs: [
        'Instead of paying expensive ongoing per-seat subscriptions for bloated enterprise suites where you only use 10% of features, custom software is lean, focused, and completely owned by your company.',
        'We work hand-in-hand with your operational leads to analyze real business routines, design intuitive dashboard interfaces, and build reliable backend databases that scale effortlessly as your volume expands.',
      ],
    },
    types: {
      eyebrow: 'Software Capabilities',
      heading: 'Targeted software systems built for operational excellence',
      description:
        'We build practical web applications designed to solve operational headaches and give your team superpower workflows.',
      items: [
        {
          title: 'Operations & Admin Dashboards',
          description:
            'Centralized control panels to monitor activity, manage user roles, track operational metrics, and inspect logs.',
        },
        {
          title: 'Billing & Invoicing Platforms',
          description:
            'Automated invoice generation, payment reconciliation, recurring subscription tracking, and PDF ledger exports.',
        },
        {
          title: 'Inventory & Resource Management',
          description:
            'Real-time stock level tracking, warehouse item catalogs, low-inventory alerts, and vendor replenishment flows.',
        },
        {
          title: 'Internal Workflow Automation Tools',
          description:
            'Custom web tools that eliminate repetitive data entry, route approvals, and sync information between teams.',
        },
        {
          title: 'SaaS Minimum Viable Products (MVPs)',
          description:
            'Fast, modular prototypes and launch-ready web applications built to test new software venture ideas with real users.',
        },
        {
          title: 'Data Reporting & Analytics Suites',
          description:
            'Visual charts, tabular data exports (CSV/Excel), and scheduled summary digests that inform critical business choices.',
        },
      ],
    },
    capabilities: [
      {
        title: 'Role-Based Access Control (RBAC)',
        description:
          'Granular permission tiers ensuring administrators, managers, and staff only access relevant records and tools.',
      },
      {
        title: 'Structured Database Architecture',
        description:
          'Relational database schemas designed for data integrity, rapid queries, and clear audit history logs.',
      },
      {
        title: 'High-Density Data Tables & Filtering',
        description:
          'Paginated data views with instant search, multi-column sorting, and export capabilities for seamless handling of thousands of rows.',
      },
      {
        title: 'Automated Document & Invoice Generation',
        description:
          'Server-side generation of standardized PDF invoices, receipts, and compliance summaries with single-click downloads.',
      },
      {
        title: 'Third-Party Webhook & API Integrations',
        description:
          'Reliable connections to payment processors, email communication services, SMS gateways, and cloud storage providers.',
      },
      {
        title: 'Modern Web Frontend & Responsive UI',
        description:
          'Fast, single-page application interfaces built with modern React that work smoothly on office desktops, laptops, and tablets.',
      },
    ],
    process: [
      {
        step: '01',
        title: 'Workflow Discovery & Requirements',
        description:
          'We map out your current daily routines, pain points, data inputs, reporting requirements, and security needs.',
      },
      {
        step: '02',
        title: 'Data Architecture & UI Wireframes',
        description:
          'We design the database schema and layout ergonomic wireframes for every key dashboard, table, and form view.',
      },
      {
        step: '03',
        title: 'Full-Stack Software Development',
        description:
          'We implement frontend views, construct backend API endpoints, and establish secure database queries with clean code.',
      },
      {
        step: '04',
        title: 'Scenario Testing & Data Validation',
        description:
          'Rigorous testing of user roles, edge cases, large datasets, and error conditions to verify total data reliability.',
      },
      {
        step: '05',
        title: 'Production Deployment & Training',
        description:
          'Live deployment on secure cloud infrastructure, database backup setup, and comprehensive staff onboarding documentation.',
      },
    ],
    deliverables: [
      'Fully functioning custom web software application deployed on secure servers',
      'Clean, documented source code repository with comprehensive architecture notes',
      'Normalized database schema with backup routines and recovery configurations',
      'Role-based authentication system with secure password hashing and session safety',
      'Automated PDF invoice generation and data export modules',
      'Administrator training documentation and ongoing operational support plan',
    ],
    featuredProject: {
      eyebrow: 'Selected Case Study',
      title: 'NexusOps: Business & Invoicing System',
      tagline: 'Custom administrative suite for billing, inventory, and operations',
      description:
        'A comprehensive internal business management application featuring automated invoice generation, real-time revenue analytics, and live stock tracking.',
      image: softwareProjImg,
      link: '/work/nexus-ops-management-dashboard',
      metric: '-70%',
      metricLabel: 'Billing Processing Time Reduction',
    },
    closingCta: {
      headline: 'Ready to build software that works the way your business does?',
      description:
        'Let’s discuss your current operational challenges and design a custom software solution that saves time and scales with your business.',
      buttonText: 'Discuss Your Software Requirements',
      href: '/contact',
    },
  },

  'final-year-projects': {
    slug: 'final-year-projects',
    number: '06',
    category: 'Academic & Mentorship',
    badge: 'Practical & Guided',
    title: 'Final Year Project Support',
    heroHeadline: 'Turn Your Final Year Project Idea Into Reality',
    shortDescription:
      'Practical project development support and technical guidance for academic final-year projects.',
    heroDescription:
      'We guide students and engineering researchers through turning academic ideas into functioning, real-world applications with structured architecture, modern tech stacks, and clear technical documentation.',
    heroImage: academicHeroImg,
    heroImageAlt:
      'University student on a clean study workspace presenting a functioning computer science final-year project application dashboard with report binder',
    primaryCta: 'Discuss Your Project',
    secondaryCta: 'Explore Our Process',
    stats: [
      { value: '1-on-1', label: 'Technical mentorship & architecture guidance' },
      { value: 'Modern Stacks', label: 'React, Node.js, Python, & Cloud APIs' },
      { value: 'Documented', label: 'Structured reports & architecture diagrams' },
      { value: 'Viva-Ready', label: 'Practical demo coaching & presentation polish' },
    ],
    overview: {
      eyebrow: 'Academic Mentorship',
      heading: 'Bridge the gap between theoretical classroom learning and working software.',
      description:
        'Final-year academic projects are often the most important milestone in a student’s education. NEXZIVO provides legitimate, practical technical guidance and mentorship to help students build real, functioning software solutions.',
      paragraphs: [
        'Rather than leaving students stuck on debugging obscure errors or wrestling with outdated technologies, our engineers provide step-by-step guidance on modern software engineering practices, system design, and database modeling.',
        'We emphasize deep technical understanding: our objective is ensuring that every student understands how their application works from the ground up, empowering them to demonstrate their project with pride and confidence during academic vivas.',
      ],
    },
    types: {
      eyebrow: 'Support Areas',
      heading: 'Comprehensive guidance across key technical domains',
      description:
        'We mentor students working across computer science, information technology, and software disciplines.',
      items: [
        {
          title: 'Project Topic Refinement & Scope',
          description:
            'Helping you refine vague project concepts into achievable, problem-solving software proposals that meet university criteria.',
        },
        {
          title: 'Full-Stack Web & App Development',
          description:
            'Mentoring students in building modern, responsive frontends and reliable backends using React, Node.js, Python, or SQL.',
        },
        {
          title: 'API Integration & Cloud Services',
          description:
            'Guiding students on integrating modern cloud APIs, authentication services, machine learning endpoints, or payment sandboxes.',
        },
        {
          title: 'System Architecture & Data Modeling',
          description:
            'Assisting with UML class diagrams, database schema normalization, entity-relationship diagrams, and data flow modeling.',
        },
        {
          title: 'Documentation & Technical Reports',
          description:
            'Assisting students with structuring their project chapters: problem statement, system methodology, implementation, and test cases.',
        },
        {
          title: 'Viva Demo Preparation & Q&A Coaching',
          description:
            'Mock demo walk-throughs helping you explain your codebase clearly, highlight key innovations, and answer evaluator questions.',
        },
      ],
    },
    capabilities: [
      {
        title: 'Modern Software Engineering Standards',
        description:
          'Teaching clean modular code structure, environment variable management, and Git version control practices.',
      },
      {
        title: 'System Design & Data Flow Modeling',
        description:
          'Clear visual diagrams explaining how requests move through the frontend, API routes, database, and background services.',
      },
      {
        title: 'Debugging & Technical Troubleshooting',
        description:
          'Hands-on pair debugging sessions to identify root causes of runtime errors, configuration hiccups, and database queries.',
      },
      {
        title: 'Realistic Test Case Construction',
        description:
          'Structuring comprehensive test plans, input boundary validations, and edge-case documentation for academic evaluation.',
      },
      {
        title: 'Local & Cloud Environment Deployment',
        description:
          'Step-by-step guidance on setting up reliable local servers and staging live project demos on platforms like Vercel or Render.',
      },
      {
        title: 'Professional Presentation Deck Guidance',
        description:
          'Structuring slide decks with clear problem statements, architecture diagrams, live demo checkpoints, and future roadmap.',
      },
    ],
    process: [
      {
        step: '01',
        title: 'Topic Consultation & Feasibility',
        description:
          'We evaluate your project idea, identify potential technical challenges, and establish an achievable development roadmap.',
      },
      {
        step: '02',
        title: 'Architecture & Technology Selection',
        description:
          'We help select the ideal modern tech stack and map out the data structures, API endpoints, and user flows.',
      },
      {
        step: '03',
        title: 'Guided Implementation & Code Reviews',
        description:
          'Step-by-step development support where you build functioning modules under experienced engineer guidance.',
      },
      {
        step: '04',
        title: 'Testing, Debugging & Refinement',
        description:
          'Thorough code testing, error handling, performance polish, and ensuring all required deliverables run cleanly.',
      },
      {
        step: '05',
        title: 'Report Structuring & Viva Rehearsal',
        description:
          'Reviewing your technical report documentation and conducting a simulated demo session so you present with confidence.',
      },
    ],
    deliverables: [
      'Fully functioning, locally executable and cloud-deployable project application',
      'Clean, commented source code repository with comprehensive README instructions',
      'Architecture diagrams: System Architecture, Data Flow Diagram (DFD), and ERD',
      'Structured technical report support covering requirements, design, and testing',
      'Step-by-step setup guide for setting up the runtime environment from scratch',
      'Viva demo preparation checklist and technical Q&A guidance sheet',
    ],
    featuredProject: {
      eyebrow: 'Academic Showcase',
      title: 'Real-World Technical Mentorship',
      tagline: 'Practical engineering support tailored to final-year students',
      description:
        'Our project support focuses on building genuine, working applications where students learn the underlying technologies and gain the confidence to ace academic evaluations.',
      image: missionImg,
      link: '/contact',
      metric: '1-on-1',
      metricLabel: 'Step-by-Step Mentorship',
    },
    closingCta: {
      headline: 'Need technical guidance for your final year project?',
      description:
        'Share your project topic or idea with us. We will help you structure the architecture, implement functioning features, and prepare for a standout presentation.',
      buttonText: 'Discuss Your Project',
      href: '/contact',
    },
  },
};
