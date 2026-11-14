import { useState, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  ArrowRight,
  Target,
  Compass,
  Code2,
  Palette,
  Smartphone,
  Cpu,
  Users,
  ShieldCheck,
  Zap,
  Linkedin,
  Github,
  Mail,
} from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { SectionReveal } from '@/components/ui/SectionReveal';
import { useReducedMotionPreference } from '@/hooks/useReducedMotionPreference';
import { siteConfig } from '@/config/site';

// Visual assets
import aboutHeroImg from '@/assets/about.png';
import rengaPhoto from '@/assets/founder_renga.png';
import vikkyPhoto from '@/assets/founder-vikky.png';

const EASE_OUT_EXPO = [0.22, 1, 0.36, 1];

// Leadership: Founder & Co-Founder
const founders = [
  {
    name: 'Renga R',
    role: 'Founder & CEO',
    subtitle: 'Vision, Product Strategy & UI/UX Design',
    bio: 'Leads NEXZIVO with a vision to create meaningful digital experiences and innovative software products. Focused on user-centered design, product strategy, and building solutions that solve real-world problems.',
    image: rengaPhoto,
    focusAreas: ['UI/UX Design', 'Product Strategy', 'Web Development'],
    socials: {
      linkedin: siteConfig.contact.linkedin,
      email: 'rrenga16@gmail.com',
    },
  },
  {
    name: 'Vignesh R',
    role: 'Co-Founder & CEO',
    subtitle: 'Technical Innovation & Engineering',
    bio: 'Drives technical execution, scalable cloud architecture, and modern mobile platforms, ensuring every solution built is fast, reliable, and scalable.',
    image: vikkyPhoto,
    focusAreas: ['Cloud Architecture', 'Mobile Apps & Web', 'Technical Operations'],
    socials: {
      linkedin: siteConfig.contact.linkedin,
      email: 'rvikky05@gmail.com',
    },
  },
];

// 4 Core Things We Do
const whatWeDoList = [
  {
    icon: Code2,
    title: 'Website Development',
    desc: 'High-speed, responsive websites designed to represent your business and convert visitors into clients.',
    to: '/services/website-development',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    desc: 'Clean, intuitive, and modern user interfaces crafted around real user needs and effortless usability.',
    to: '/services/ui-ux-design',
  },
  {
    icon: Smartphone,
    title: 'Mobile Applications',
    desc: 'Practical iOS and Android mobile apps engineered for fluid performance and everyday convenience.',
    to: '/services/mobile-app-development',
  },
  {
    icon: Cpu,
    title: 'Custom Software & Projects',
    desc: 'Tailored digital tools, admin portals, and structured final-year academic project support.',
    to: '/services/custom-software-solutions',
  },
];

// 3 Key Reasons Clients Choose Us
const whyChooseUs = [
  {
    icon: Users,
    title: 'Client-Centered Partnership',
    desc: 'We speak your language with zero unnecessary jargon. You collaborate directly with the designers and developers building your project.',
    tag: 'Direct Collaboration',
    color: '#2764F5',
  },
  {
    icon: ShieldCheck,
    title: 'Quality & Longevity',
    desc: 'Every line of code and interface element is built cleanly, securely, and structured to grow smoothly as your needs expand.',
    tag: 'Clean & Scalable Code',
    color: '#00D2BA',
  },
  {
    icon: Zap,
    title: 'Fast & Predictable Delivery',
    desc: 'Clear milestones, transparent pricing, and structured progress updates from first concept to final launch.',
    tag: 'On-Time Milestones',
    color: '#35C5E8',
  },
];

/**
 * WhyWorkCard — 3D Perspective Gyroscopic Tilt, Electric Perimeter Laser Beam,
 * Multi-layer Parallax Depth, Dynamic Holographic Grid, and Watermark Parallax.
 */
function WhyWorkCard({ pillar, index, isHovered, isAnyHovered, onHover, onLeave, reducedMotion }) {
  const cardRef = useRef(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const Icon = pillar.icon;

  const handleMouseMove = (e) => {
    if (reducedMotion) return;
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotX = ((y - centerY) / centerY) * -10;
    const rotY = ((x - centerX) / centerX) * 10;
    setRotate({ x: rotX, y: rotY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
    onLeave();
  };

  return (
    <div
      style={{ perspective: 1000 }}
      className={`h-full transition-all duration-300 ${
        isAnyHovered && !isHovered ? 'opacity-65 scale-[0.98]' : 'opacity-100 scale-100'
      }`}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={onHover}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: reducedMotion
            ? 'none'
            : `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
          transformStyle: 'preserve-3d',
          transition: rotate.x === 0 && rotate.y === 0 ? 'transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)' : 'transform 0.08s ease-out',
        }}
        className="group relative h-full flex flex-col justify-between p-8 rounded-2xl bg-[#F7F9FC] border border-[#E3E8F0] shadow-xs hover:shadow-[0_20px_40px_-15px_rgba(39,100,245,0.18)] transition-shadow duration-300 cursor-pointer overflow-hidden text-left"
      >
        {/* Electric Perimeter Laser Border Beam */}
        <div className="absolute -inset-[1.5px] rounded-2xl overflow-hidden pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0">
          <div
            className="absolute inset-[-150%] bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,transparent_70deg,#2764F5_100deg,#35C5E8_130deg,#00D2BA_155deg,transparent_180deg)] animate-[spin_3.5s_linear_infinite]"
          />
        </div>

        {/* Inner Card Background Mask */}
        <div className="absolute inset-[1.5px] rounded-[15px] bg-[#F7F9FC] group-hover:bg-white transition-colors duration-300 z-0" />

        {/* Dynamic Holographic Dot Matrix Grid */}
        <div
          className="absolute inset-[1.5px] rounded-[15px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, #2764F5 1px, transparent 0)',
            backgroundSize: '16px 16px',
            opacity: 0.05,
          }}
        />

        {/* Giant Watermark Background Icon (Layered Parallax in -Z) */}
        <div
          className="pointer-events-none absolute -bottom-6 -right-6 text-[#2764F5]/[0.035] group-hover:text-[#2764F5]/[0.08] transition-colors duration-500 z-0 select-none"
          style={{
            transform: reducedMotion ? 'none' : 'translateZ(-10px)',
          }}
        >
          <Icon size={160} strokeWidth={1.2} />
        </div>

        {/* Top/Main Content Area with 3D Depth */}
        <div
          className="relative z-10"
          style={{
            transform: reducedMotion ? 'none' : 'translateZ(26px)',
            transformStyle: 'preserve-3d',
          }}
        >
          {/* Floating Icon with Halo Pulse */}
          <div className="relative mb-5 inline-flex">
            <span className="absolute -inset-1 rounded-xl bg-[#2764F5]/25 opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300" />

            <div
              className="relative inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#EEF4FF] text-[#2764F5] border border-[#DCE4F0] group-hover:bg-gradient-to-br group-hover:from-[#2764F5] group-hover:to-[#1746C9] group-hover:text-white group-hover:shadow-[0_8px_20px_-3px_rgba(39,100,245,0.4)] transition-all duration-300"
              style={{
                transform: reducedMotion ? 'none' : 'translateZ(14px)',
              }}
            >
              <Icon size={24} className="transition-transform duration-300 group-hover:scale-110" />
            </div>
          </div>

          <h3 className="font-heading text-xl font-bold text-[#141B2A] group-hover:text-[#2764F5] transition-colors duration-200 mb-3 text-left">
            {pillar.title}
          </h3>

          <p className="text-sm text-[#687386] leading-relaxed text-left group-hover:text-[#4A5568] transition-colors duration-200">
            {pillar.desc}
          </p>
        </div>

        {/* Bottom Interactive Feature Badge with 3D lift */}
        <div
          className="relative z-10 mt-6 pt-4 border-t border-[#E3E8F0]/70 flex items-center justify-between"
          style={{
            transform: reducedMotion ? 'none' : 'translateZ(20px)',
          }}
        >
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-white border border-[#E3E8F0] text-[#141B2A] group-hover:border-[#2764F5]/30 group-hover:text-[#2764F5] group-hover:bg-[#EEF4FF] transition-all duration-200 shadow-2xs">
            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{ backgroundColor: pillar.color || '#2764F5' }}
            />
            {pillar.tag}
          </span>

          <span className="text-[11px] font-mono font-bold text-[#8E9AA8] group-hover:text-[#2764F5] transition-colors">
            0{index + 1}
          </span>
        </div>
      </div>
    </div>
  );
}

// Simple 4-Step Working Process with Phase Milestones
const simpleProcess = [
  {
    step: '01',
    phase: 'Discovery & Scope',
    percent: '25%',
    offset: 66,
    title: 'Listen & Plan',
    desc: 'We understand your goals, audience, and project requirements to map out a clear roadmap.',
  },
  {
    step: '02',
    phase: 'Architecture & UX',
    percent: '50%',
    offset: 44,
    title: 'Design',
    desc: 'We create clear wireframes, user journeys, and interactive visual prototypes.',
  },
  {
    step: '03',
    phase: 'Engineering & QA',
    percent: '75%',
    offset: 22,
    title: 'Develop',
    desc: 'We engineer fast, secure, and modern digital solutions with clean, scalable code.',
  },
  {
    step: '04',
    phase: 'Deployment & Growth',
    percent: '100%',
    offset: 0,
    title: 'Launch & Support',
    desc: 'We test thoroughly, deploy cleanly, and provide ongoing support to help you scale.',
  },
];

/**
 * AboutPage — Aligned with Home page style:
 * - 2-column Hero section with left-aligned copy and right-side illustration mockup
 * - Left-aligned section headings across the entire page (matching Home page editorial style)
 * - Preserves all 5 core sections and founder card perimeter tracing animation
 */
export function AboutPage() {
  const reducedMotion = useReducedMotionPreference();
  const [hoveredPillarIndex, setHoveredPillarIndex] = useState(null);
  const [activeProcessStep, setActiveProcessStep] = useState(null);

  const handleSpotlightMove = (e, varName) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty(`--${varName}-x`, `${x}px`);
    e.currentTarget.style.setProperty(`--${varName}-y`, `${y}px`);
  };

  // Coordinated entrance animation variants matching homepage hero
  const fadeUp = (delay = 0, yOffset = 16, duration = 0.55) => {
    if (reducedMotion) {
      return {
        initial: { opacity: 1, y: 0 },
        animate: { opacity: 1, y: 0 },
      };
    }
    return {
      initial: { opacity: 0, y: yOffset },
      animate: { opacity: 1, y: 0 },
      transition: { duration, delay, ease: EASE_OUT_EXPO },
    };
  };

  const showcaseVariant = () => {
    if (reducedMotion) {
      return {
        initial: { opacity: 1, scale: 1 },
        animate: { opacity: 1, scale: 1 },
      };
    }
    return {
      initial: { opacity: 0, scale: 0.94, y: 12 },
      animate: { opacity: 1, scale: 1, y: 0 },
      transition: { duration: 0.8, delay: 0.22, ease: EASE_OUT_EXPO },
    };
  };

  const bgShapeVariant = (delay = 0) => {
    if (reducedMotion) {
      return {
        initial: { opacity: 1 },
        animate: { opacity: 1 },
      };
    }
    return {
      initial: { opacity: 0, scale: 0.98 },
      animate: { opacity: 1, scale: 1 },
      transition: { duration: 0.9, delay, ease: EASE_OUT_EXPO },
    };
  };

  return (
    <>
      <Helmet>
        <title>About Us | NEXZIVO — Build What’s Next</title>
        <meta
          name="description"
          content="Learn about NEXZIVO — a modern digital technology and design company turning ambitious ideas into simple, beautiful, and high-impact digital solutions."
        />
      </Helmet>

      {/* ───────────────────────────────────────────────────────────
          1. HERO SECTION (Identical 2-Column Editorial Layout as Home Hero)
          ─────────────────────────────────────────────────────────── */}
      <section
        id="about-hero"
        className="relative min-h-[calc(100svh-4rem)] sm:min-h-[calc(100svh-5rem)] lg:min-h-[100svh] bg-[#F7F9FC] text-[#141B2A] pt-20 pb-12 sm:pt-24 sm:pb-16 lg:pt-20 lg:pb-8 flex flex-col justify-center border-b border-[#E3E8F0] overflow-hidden"
      >
        {/* Background Layer: Soft studio atmosphere, subtle geometric ribbons & faint dot grids */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          <motion.div
            {...bgShapeVariant(0)}
            className="absolute -top-32 right-[-5%] h-[620px] w-[620px] lg:h-[700px] lg:w-[700px] rounded-full bg-gradient-to-br from-[#2764F5]/7 via-[#35C5E8]/5 to-transparent blur-3xl"
          />
          <motion.div
            {...bgShapeVariant(0.1)}
            className="absolute top-1/4 left-[-10%] h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-[#35C5E8]/6 via-[#2764F5]/4 to-transparent blur-3xl"
          />

          {/* Dotted pattern right */}
          <motion.svg
            {...bgShapeVariant(0.18)}
            className="absolute top-20 right-10 lg:right-20 w-64 h-64 text-[#2764F5]/[0.05] hidden sm:block"
            viewBox="0 0 240 240"
            fill="currentColor"
          >
            <pattern id="about-hero-dots-right" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
              <circle cx="3" cy="3" r="1.5" />
            </pattern>
            <rect width="240" height="240" fill="url(#about-hero-dots-right)" />
          </motion.svg>

          {/* Subtle Geometric Ribbon Polygon */}
          <motion.svg
            {...bgShapeVariant(0.12)}
            className="absolute -top-12 right-4 lg:right-16 w-[440px] h-[440px] lg:w-[560px] lg:h-[560px] text-[#2764F5]/[0.035] transform rotate-6"
            viewBox="0 0 500 500"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M 140 40 L 440 40 L 370 450 L 70 450 Z"
              stroke="currentColor"
              strokeWidth="28"
              strokeLinejoin="round"
            />
            <path
              d="M 210 110 L 470 110 L 410 390 L 150 390 Z"
              stroke="currentColor"
              strokeWidth="10"
              strokeDasharray="14 14"
            />
          </motion.svg>

          {/* Isometric dots left */}
          <motion.svg
            {...bgShapeVariant(0.15)}
            className="absolute top-12 left-4 w-52 h-52 text-[#2764F5]/[0.04] hidden sm:block"
            viewBox="0 0 200 200"
            fill="currentColor"
          >
            <pattern id="about-hero-dots-left" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
              <circle cx="3" cy="3" r="1.5" />
            </pattern>
            <rect width="200" height="200" fill="url(#about-hero-dots-left)" />
          </motion.svg>

          {/* Curved Arc */}
          <motion.svg
            {...bgShapeVariant(0.2)}
            className="absolute -bottom-20 -left-20 w-[340px] h-[340px] text-[#35C5E8]/[0.045]"
            viewBox="0 0 400 400"
            fill="none"
          >
            <circle cx="100" cy="300" r="220" stroke="currentColor" strokeWidth="22" />
            <circle cx="100" cy="300" r="160" stroke="currentColor" strokeWidth="2" strokeDasharray="8 8" />
          </motion.svg>
        </div>

        <Container className="relative z-10 max-w-[1440px] xl:max-w-[1540px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-4 xl:gap-8 items-center">
            {/* Left Column: Eyebrow, Heading, Description, CTAs, Focus Tags */}
            <div className="lg:col-span-5 xl:col-span-5 flex flex-col items-start gap-4 sm:gap-5 lg:gap-6 order-1 pr-0 lg:pr-2">
              <motion.div {...fadeUp(0.04, 12, 0.45)}>
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#2764F5]">
                  <span className="h-0.5 w-5 rounded-full bg-[#2764F5]" aria-hidden="true" />
                  <span>ABOUT NEXZIVO</span>
                </span>
              </motion.div>

              <h1 className="font-heading text-[1.725rem] xs:text-[2rem] sm:text-[2.6rem] md:text-[3.05rem] lg:text-[clamp(2.3rem,2.8vw,3.2rem)] xl:text-[clamp(2.85rem,3.35vw,3.85rem)] font-extrabold tracking-tight leading-[1.14] sm:leading-[1.12] text-[#141B2A] max-w-xl text-left">
                <motion.span className="block" {...fadeUp(0.1, 16, 0.55)}>
                  We Turn Ideas Into
                </motion.span>
                <motion.span className="block text-[#2764F5]" {...fadeUp(0.18, 16, 0.55)}>
                  Digital Reality.
                </motion.span>
              </h1>

              <motion.p
                className="max-w-lg text-[14px] sm:text-[16px] lg:text-[18px] text-[#687386] leading-relaxed text-left"
                {...fadeUp(0.36, 14, 0.5)}
              >
                NEXZIVO is a digital technology and design firm. We help businesses, startups, and students build modern websites, intuitive mobile apps, and custom software that solve real problems.
              </motion.p>

              <motion.div
                className="flex flex-wrap items-center gap-2.5 sm:gap-3.5 pt-0.5 sm:pt-1 w-full xs:w-auto"
                {...fadeUp(0.44, 14, 0.5)}
              >
                <Button
                  to="/contact"
                  variant="primary"
                  size="md"
                  className="w-full xs:w-auto px-5 sm:px-7 py-2.5 sm:py-3.5 text-[14px] sm:text-[15.5px] shadow-sm hover:shadow justify-center"
                >
                  Let's Work Together
                </Button>
                <Button
                  to="/services"
                  variant="secondary"
                  size="md"
                  iconRight={<ArrowRight size={17} />}
                  className="w-full xs:w-auto px-5 sm:px-7 py-2.5 sm:py-3.5 text-[14px] sm:text-[15.5px] justify-center"
                >
                  Explore Services
                </Button>
              </motion.div>

              {/* Studio Capabilities Indicator */}
              <motion.div
                className="flex flex-wrap items-center gap-x-2.5 sm:gap-x-3.5 gap-y-1.5 pt-3.5 sm:pt-5 mt-0.5 border-t border-[#E3E8F0] w-full text-[11px] xs:text-[12px] sm:text-[13px] font-semibold text-[#141B2A]"
                {...fadeUp(0.52, 10, 0.5)}
              >
                <span className="text-[11.5px] sm:text-xs font-bold uppercase tracking-wider text-[#2764F5]">
                  Studio Focus:
                </span>
                <span>Websites</span>
                <span className="text-[#CBD5E1]">·</span>
                <span>Mobile Apps</span>
                <span className="text-[#CBD5E1]">·</span>
                <span>UI/UX</span>
                <span className="text-[#CBD5E1]">·</span>
                <span>Graphic Design</span>
                <span className="text-[#CBD5E1]">·</span>
                <span>Custom Software</span>
              </motion.div>
            </div>

            {/* Right Column: Hero Visual Showcase */}
            <div className="lg:col-span-7 xl:col-span-7 w-full order-2 flex items-center justify-center lg:justify-end">
              <motion.div
                className="relative w-full max-w-[380px] xs:max-w-[440px] sm:max-w-[540px] lg:max-w-[620px] xl:w-[112%] xl:max-w-none flex items-center justify-center lg:justify-end"
                {...showcaseVariant()}
              >
                <img
                  src={aboutHeroImg}
                  alt="NEXZIVO Studio Overview — Digital products, mobile apps, and creative design workspace"
                  className="w-full h-auto max-h-[280px] xs:max-h-[330px] sm:max-h-[400px] md:max-h-[480px] lg:max-h-[520px] xl:max-h-[640px] object-contain drop-shadow-[0_12px_28px_rgba(16,27,45,0.07)]"
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                />
              </motion.div>
            </div>
          </div>
        </Container>
      </section>

      {/* ───────────────────────────────────────────────────────────
          2. MISSION & VISION (Dual Contrast Cyber-Sonar & Prismatic Horizon)
          ─────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-white border-b border-[#E3E8F0]">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {/* Our Mission (Dark Cyber-Sonar Card) */}
            <SectionReveal>
              <div
                onMouseMove={(e) => handleSpotlightMove(e, 'mission')}
                className="group relative h-full flex flex-col justify-between p-8 sm:p-10 rounded-2xl bg-[#0F172A] text-white border border-[#23354E] hover:border-[#35C5E8]/70 shadow-lg hover:shadow-[0_24px_55px_-12px_rgba(53,197,232,0.28)] hover:-translate-y-2 transition-all duration-400 ease-out overflow-hidden cursor-default text-left"
              >
                {/* Top Horizon Neon Laser Accent */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#35C5E8] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-center" />

                {/* Dynamic Interactive Plasma / Nebula Light Spot */}
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background:
                      'radial-gradient(500px circle at var(--mission-x, 50%) var(--mission-y, 50%), rgba(53, 197, 232, 0.16), rgba(39, 100, 245, 0.08), transparent 70%)',
                  }}
                />

                {/* Cyber Sonar Radar Rings in Background */}
                <div
                  className="pointer-events-none absolute -bottom-12 -right-12 w-64 h-64 overflow-hidden select-none opacity-20 group-hover:opacity-45 transition-opacity duration-500"
                  aria-hidden="true"
                >
                  <div className="absolute inset-0 rounded-full border border-dashed border-[#35C5E8]/40 animate-[spin_40s_linear_infinite]" />
                  <div className="absolute inset-8 rounded-full border border-[#35C5E8]/30 group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-16 rounded-full border border-dashed border-[#2764F5]/40 animate-[spin_25s_linear_infinite_reverse]" />
                  <div className="absolute inset-24 rounded-full border border-[#35C5E8]/50" />
                  <Target size={48} className="absolute inset-0 m-auto text-[#35C5E8]/30 group-hover:scale-110 transition-transform duration-500" />
                </div>

                <div className="relative z-10 flex flex-col gap-4 text-left">
                  {/* Badge with Live Pinging Sonar */}
                  <div className="flex items-center justify-between">
                    <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-lg bg-[#162744] border border-[#273F69] text-xs font-mono font-bold uppercase tracking-wider text-[#35C5E8] shadow-xs group-hover:border-[#35C5E8]/50 transition-colors">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#35C5E8] opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#35C5E8]" />
                      </span>
                      <Target size={15} className="group-hover:rotate-90 transition-transform duration-500 ease-out" />
                      <span>OUR MISSION</span>
                    </div>
                    <span className="text-[11px] font-mono font-semibold text-[#64748B] group-hover:text-[#35C5E8] transition-colors">
                      01
                    </span>
                  </div>

                  {/* Heading with Expanding Glowing Line */}
                  <div>
                    <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white text-left tracking-tight">
                      Technology with Purpose
                    </h2>
                    <div className="mt-2.5 h-0.5 w-12 bg-gradient-to-r from-[#35C5E8] to-transparent group-hover:w-28 transition-all duration-400 ease-out rounded-full" />
                  </div>

                  <p className="text-sm sm:text-base text-[#CBD5E1] leading-relaxed text-left group-hover:text-white transition-colors duration-300">
                    To make digital technology more useful, accessible, and reliable. We transform complex challenges into practical, beautiful solutions that help individuals and businesses take their next step with confidence.
                  </p>
                </div>

                {/* Sub-footer detail bar */}
                <div className="relative z-10 mt-6 pt-4 border-t border-[#1E293B] flex items-center justify-between text-xs font-mono text-[#64748B] group-hover:text-[#94A3B8] transition-colors">
                  <span className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#35C5E8]" />
                    Core Purpose
                  </span>
                  <span>IMPACT &amp; UTILITY</span>
                </div>
              </div>
            </SectionReveal>

            {/* Our Vision (Light Prismatic Horizon Card) */}
            <SectionReveal delay={0.15}>
              <div
                onMouseMove={(e) => handleSpotlightMove(e, 'vision')}
                className="group relative h-full flex flex-col justify-between p-8 sm:p-10 rounded-2xl bg-[#F8FAFC] text-[#141B2A] border border-[#E2E8F0] hover:border-[#2764F5]/60 shadow-xs hover:shadow-[0_24px_55px_-12px_rgba(39,100,245,0.20)] hover:-translate-y-2 transition-all duration-400 ease-out overflow-hidden cursor-default text-left"
              >
                {/* Top Horizon Neon Laser Accent */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#2764F5] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-center" />

                {/* Dynamic Interactive Prismatic Spotlight */}
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background:
                      'radial-gradient(500px circle at var(--vision-x, 50%) var(--vision-y, 50%), rgba(39, 100, 245, 0.12), rgba(53, 197, 232, 0.06), transparent 70%)',
                  }}
                />

                {/* Prismatic Iridescent Diagonal Light Sheen Sweep */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />

                {/* Compass Gyroscope Dial in Background */}
                <div
                  className="pointer-events-none absolute -bottom-12 -right-12 w-64 h-64 overflow-hidden select-none opacity-20 group-hover:opacity-45 transition-opacity duration-500"
                  aria-hidden="true"
                >
                  <div className="absolute inset-0 rounded-full border border-dashed border-[#2764F5]/40 animate-[spin_50s_linear_infinite]" />
                  <div className="absolute inset-8 rounded-full border border-[#2764F5]/30 group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-16 rounded-full border border-dashed border-[#35C5E8]/40 animate-[spin_30s_linear_infinite_reverse]" />
                  <div className="absolute inset-24 rounded-full border border-[#2764F5]/50" />
                  <Compass size={48} className="absolute inset-0 m-auto text-[#2764F5]/30 group-hover:rotate-45 transition-transform duration-700 ease-out" />
                </div>

                <div className="relative z-10 flex flex-col gap-4 text-left">
                  {/* Badge with Live Pinging Horizon */}
                  <div className="flex items-center justify-between">
                    <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-lg bg-white border border-[#DCE4F0] text-xs font-mono font-bold uppercase tracking-wider text-[#2764F5] shadow-2xs group-hover:border-[#2764F5]/40 transition-colors">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2764F5] opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2764F5]" />
                      </span>
                      <Compass size={15} className="group-hover:rotate-45 transition-transform duration-700 ease-out" />
                      <span>OUR VISION</span>
                    </div>
                    <span className="text-[11px] font-mono font-semibold text-[#8E9AA8] group-hover:text-[#2764F5] transition-colors">
                      02
                    </span>
                  </div>

                  {/* Heading with Expanding Glowing Line */}
                  <div>
                    <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#141B2A] text-left tracking-tight group-hover:text-[#0C1523] transition-colors">
                      Building What’s Next
                    </h2>
                    <div className="mt-2.5 h-0.5 w-12 bg-gradient-to-r from-[#2764F5] to-transparent group-hover:w-28 transition-all duration-400 ease-out rounded-full" />
                  </div>

                  <p className="text-sm sm:text-base text-[#687386] leading-relaxed text-left group-hover:text-[#334155] transition-colors duration-300">
                    To be the most trusted technology and creative design partner, recognized for exceptional quality, user-centered innovation, and long-term client success.
                  </p>
                </div>

                {/* Sub-footer detail bar */}
                <div className="relative z-10 mt-6 pt-4 border-t border-[#E2E8F0] flex items-center justify-between text-xs font-mono text-[#8E9AA8] group-hover:text-[#475569] transition-colors">
                  <span className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#2764F5]" />
                    Future Horizon
                  </span>
                  <span>INNOVATION &amp; SCALE</span>
                </div>
              </div>
            </SectionReveal>
          </div>
        </Container>
      </section>

      {/* ───────────────────────────────────────────────────────────
          3. WHAT WE DO (Left-Aligned Heading + 4 Service Cards)
          ─────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-[#FAFBFD] border-b border-[#E3E8F0]">
        <Container>
          <SectionReveal>
            <div className="text-left max-w-2xl mb-12 sm:mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-[#2764F5] block mb-2">
                WHAT WE BUILD
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#141B2A] text-left">
                Our Core Services
              </h2>
              <p className="mt-2 text-sm sm:text-base text-[#687386] text-left">
                Everything you need to launch, scale, and establish your digital presence.
              </p>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whatWeDoList.map((item, idx) => {
              const Icon = item.icon;
              return (
                <SectionReveal key={item.title} delay={idx * 0.08}>
                  <Link
                    to={item.to}
                    className="group relative h-full flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-white border border-[#E3E8F0] hover:border-[#2764F5]/50 shadow-[0_4px_20px_-4px_rgba(16,27,45,0.05)] hover:shadow-[0_20px_40px_-12px_rgba(39,100,245,0.18)] hover:-translate-y-2 transition-all duration-300 ease-out text-left overflow-hidden block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2764F5]"
                  >
                    {/* Top animated gradient accent strip */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#2764F5] via-[#35C5E8] to-[#00BFA5] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out" />

                    {/* Subtle radiant corner glow on hover */}
                    <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-gradient-to-br from-[#2764F5]/15 via-[#35C5E8]/15 to-transparent blur-2xl opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500 pointer-events-none" />

                    {/* Faint watermark silhouette icon */}
                    <div className="absolute -right-4 -bottom-4 text-[#2764F5]/[0.03] group-hover:text-[#2764F5]/[0.08] group-hover:scale-125 group-hover:-rotate-12 transition-all duration-500 ease-out pointer-events-none select-none">
                      <Icon size={110} strokeWidth={1.2} />
                    </div>

                    <div className="relative z-10">
                      {/* Icon & Index Header */}
                      <div className="flex items-center justify-between mb-5">
                        <span className="relative inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#EEF4FF] text-[#2764F5] group-hover:bg-gradient-to-br group-hover:from-[#2764F5] group-hover:to-[#35C5E8] group-hover:text-white group-hover:scale-110 group-hover:-rotate-3 group-hover:shadow-lg group-hover:shadow-[#2764F5]/25 transition-all duration-300 ease-out">
                          <Icon size={22} className="transition-transform duration-300 group-hover:scale-105" />
                        </span>
                        <span className="text-xs font-mono font-bold text-[#A0AEC0] group-hover:text-[#2764F5] group-hover:translate-x-0.5 transition-all duration-300 select-none">
                          0{idx + 1}
                        </span>
                      </div>

                      <h3 className="font-heading text-lg sm:text-xl font-bold text-[#141B2A] mb-2 group-hover:text-[#2764F5] group-hover:translate-x-0.5 transition-all duration-300 text-left">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#687386] leading-relaxed text-left group-hover:text-[#475569] transition-colors duration-300">
                        {item.desc}
                      </p>
                    </div>

                    <div className="relative z-10 pt-6 mt-4 border-t border-[#EEF2F6] flex items-center justify-between">
                      <span className="text-xs font-bold text-[#2764F5] inline-flex items-center gap-1.5 transition-colors duration-300">
                        Learn More
                        <ArrowRight size={14} className="transition-transform duration-300 ease-out group-hover:translate-x-1.5" />
                      </span>
                      <span className="h-1.5 w-1.5 rounded-full bg-[#E2E8F0] group-hover:bg-[#35C5E8] group-hover:scale-125 transition-all duration-300" />
                    </div>
                  </Link>
                </SectionReveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ───────────────────────────────────────────────────────────
          4. WHY CLIENTS CHOOSE US (Left-Aligned Heading + 3 Trust Pillars)
          ─────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-white border-b border-[#E3E8F0]">
        <Container>
          <SectionReveal>
            <div className="text-left max-w-2xl mb-12 sm:mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-[#2764F5] block mb-2">
                THE NEXZIVO DIFFERENCE
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#141B2A] text-left">
                Why Work With Us?
              </h2>
              <p className="mt-2 text-sm sm:text-base text-[#687386] text-left">
                We believe in simple communication, clean code, and solutions that actually deliver value.
              </p>
            </div>
          </SectionReveal>

          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8"
            onMouseLeave={() => setHoveredPillarIndex(null)}
          >
            {whyChooseUs.map((pillar, i) => (
              <SectionReveal key={pillar.title} delay={i * 0.1}>
                <WhyWorkCard
                  pillar={pillar}
                  index={i}
                  isHovered={hoveredPillarIndex === i}
                  isAnyHovered={hoveredPillarIndex !== null}
                  onHover={() => setHoveredPillarIndex(i)}
                  onLeave={() => setHoveredPillarIndex(null)}
                  reducedMotion={reducedMotion}
                />
              </SectionReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ───────────────────────────────────────────────────────────
          4B. LEADERSHIP & FOUNDERS (Left-Aligned Heading + Founder Cards)
          ─────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-[#FAFBFD] border-b border-[#E3E8F0] relative overflow-hidden">
        {/* Ambient background decoration */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute top-1/2 -left-48 h-96 w-96 rounded-full bg-[#2764F5]/5 blur-3xl -translate-y-1/2" />
          <div className="absolute top-1/2 -right-48 h-96 w-96 rounded-full bg-[#35C5E8]/5 blur-3xl -translate-y-1/2" />
        </div>

        <Container className="relative z-10">
          <SectionReveal>
            <div className="text-left max-w-2xl mb-10 sm:mb-12">
              <span className="text-xs font-bold uppercase tracking-widest text-[#2764F5] block mb-2">
                LEADERSHIP
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#141B2A] tracking-tight text-left">
                Meet the Founders
              </h2>
              <p className="mt-2.5 text-base sm:text-lg text-[#687386] leading-relaxed text-left">
                The innovators and engineers leading NEXZIVO to build high-impact digital solutions for businesses and future engineers.
              </p>
            </div>
          </SectionReveal>

          {/* Shared SVG Gradient Definition for border tracing */}
          <svg width="0" height="0" className="absolute pointer-events-none" aria-hidden="true">
            <defs>
              <linearGradient id="founder-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2764F5" />
                <stop offset="50%" stopColor="#35C5E8" />
                <stop offset="100%" stopColor="#00D2BA" />
              </linearGradient>
            </defs>
          </svg>

          {/* Founders Grid — Premium Modern Cards with Animated Border Trace */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 w-full">
            {founders.map((leader, idx) => (
              <SectionReveal key={leader.name} delay={idx * 0.12}>
                <motion.div
                  whileHover={reducedMotion ? {} : { y: -5 }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                  className="founder-trace-card group relative h-full flex flex-col sm:flex-row bg-white rounded-2xl border border-[#E3E8F0] shadow-sm hover:shadow-xl transition-all duration-300 p-6 sm:p-7 overflow-hidden"
                >
                  {/* Perimeter Tracing SVG (Starts top-left, traces entire card clockwise) */}
                  <svg className="founder-trace-svg" aria-hidden="true">
                    <rect
                      x="1"
                      y="1"
                      width="calc(100% - 2px)"
                      height="calc(100% - 2px)"
                      rx="16"
                      ry="16"
                      className="founder-trace-rect"
                    />
                  </svg>

                  {/* Left Column: Portrait & Social Badges */}
                  <div className="flex flex-col items-center sm:items-start flex-shrink-0 sm:mr-6 mb-5 sm:mb-0 relative z-10">
                    <div className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-2xl overflow-hidden ring-4 ring-[#F7F9FC] group-hover:ring-[#2764F5]/20 shadow-md transition-all duration-300">
                      <img
                        src={leader.image}
                        alt={`${leader.name} - ${leader.role}`}
                        loading="lazy"
                        className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
                      />
                    </div>

                    {/* Social Touchpoints */}
                    <div className="flex items-center gap-2 mt-4">
                      {leader.socials.linkedin && (
                        <a
                          href={leader.socials.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${leader.name} LinkedIn`}
                          className="h-8 w-8 rounded-lg bg-[#F7F9FC] border border-[#E3E8F0] flex items-center justify-center text-[#687386] hover:text-white hover:bg-[#2764F5] hover:border-[#2764F5] transition-all duration-200"
                        >
                          <Linkedin size={15} />
                        </a>
                      )}
                      {leader.socials.github && (
                        <a
                          href={leader.socials.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${leader.name} GitHub`}
                          className="h-8 w-8 rounded-lg bg-[#F7F9FC] border border-[#E3E8F0] flex items-center justify-center text-[#687386] hover:text-white hover:bg-[#101B2D] hover:border-[#101B2D] transition-all duration-200"
                        >
                          <Github size={15} />
                        </a>
                      )}
                      {leader.socials.email && (
                        <a
                          href={`mailto:${leader.socials.email}`}
                          aria-label={`Email ${leader.name}`}
                          className="h-8 w-8 rounded-lg bg-[#F7F9FC] border border-[#E3E8F0] flex items-center justify-center text-[#687386] hover:text-[#101B2D] hover:bg-[#35C5E8] hover:border-[#35C5E8] transition-all duration-200"
                        >
                          <Mail size={15} />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Right Column: Founder Details & Skills */}
                  <div className="flex-1 flex flex-col justify-between text-left relative z-10">
                    <div>
                      {/* Role Pill */}
                      <div className="flex items-center justify-between mb-2">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#EEF4FF] text-[#2764F5] text-xs font-semibold uppercase tracking-wider">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#2764F5]" />
                          {leader.role}
                        </span>
                      </div>

                      <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#141B2A] tracking-tight text-left">
                        {leader.name}
                      </h3>

                      <p className="text-xs sm:text-sm font-medium text-[#2764F5] mt-0.5 mb-3 text-left">
                        {leader.subtitle}
                      </p>

                      <p className="text-xs sm:text-sm text-[#687386] leading-relaxed text-left">
                        {leader.bio}
                      </p>
                    </div>

                    {/* Expertise Highlights */}
                    <div className="pt-4 mt-4 border-t border-[#EEF2F6]">
                      <div className="flex flex-wrap gap-1.5">
                        {leader.focusAreas.map((tag) => (
                          <span
                            key={tag}
                            className="text-[11px] font-medium px-2.5 py-0.5 rounded-md bg-[#F7F9FC] border border-[#E3E8F0] text-[#141B2A]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </SectionReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ───────────────────────────────────────────────────────────
          5. SIMPLE 4-STEP PROCESS (Interactive Lifecycle Pipeline Stepper)
          ─────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-white border-b border-[#E3E8F0]">
        <Container>
          <SectionReveal>
            <div className="text-left max-w-2xl mb-10 sm:mb-14">
              <span className="text-xs font-bold uppercase tracking-widest text-[#2764F5] block mb-2">
                HOW WE WORK
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#141B2A] text-left">
                From Idea to Execution
              </h2>
              <p className="mt-2 text-sm sm:text-base text-[#687386] text-left">
                A straightforward, collaborative process with zero surprises.
              </p>
            </div>
          </SectionReveal>

          {/* Desktop Interactive Pipeline Progress Bar */}
          <div className="hidden lg:block mb-8 relative px-2">
            <div className="h-1.5 w-full bg-[#E3E8F0] rounded-full overflow-hidden relative">
              <div
                className="h-full bg-gradient-to-r from-[#2764F5] via-[#35C5E8] to-[#00D2BA] rounded-full transition-all duration-500 ease-out"
                style={{
                  width:
                    activeProcessStep === null
                      ? '100%'
                      : `${((activeProcessStep + 1) / 4) * 100}%`,
                }}
              />
            </div>

            {/* 4 Connected Milestone Nodes */}
            <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-8 pointer-events-none">
              {[0, 1, 2, 3].map((stepIdx) => {
                const isPastOrActive = activeProcessStep === null || stepIdx <= activeProcessStep;
                return (
                  <div
                    key={stepIdx}
                    className={`h-4 w-4 rounded-full border-2 transition-all duration-300 flex items-center justify-center ${
                      isPastOrActive
                        ? 'bg-[#2764F5] border-white shadow-xs scale-110'
                        : 'bg-white border-[#CBD5E1]'
                    }`}
                  >
                    {isPastOrActive && <span className="h-1.5 w-1.5 rounded-full bg-white" />}
                  </div>
                );
              })}
            </div>
          </div>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            onMouseLeave={() => setActiveProcessStep(null)}
          >
            {simpleProcess.map((proc, idx) => {
              const isHighlighted = activeProcessStep !== null && idx <= activeProcessStep;
              const isCurrent = activeProcessStep === idx;

              return (
                <SectionReveal key={proc.step} delay={idx * 0.1}>
                  <div
                    onMouseEnter={() => setActiveProcessStep(idx)}
                    className="group relative h-full p-6 sm:p-7 rounded-2xl bg-[#F8FAFC] border border-[#E3E8F0] hover:border-[#2764F5]/50 hover:bg-white hover:shadow-[0_20px_40px_-10px_rgba(39,100,245,0.12)] hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between text-left cursor-default overflow-hidden"
                  >
                    {/* Top Animated Gradient Accent Line */}
                    <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#2764F5] via-[#35C5E8] to-[#00D2BA] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left rounded-t-2xl" />

                    <div>
                      {/* Step Header: Large Number + Circular Progress Gauge */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex flex-col">
                          <span className="font-mono text-3xl sm:text-4xl font-extrabold text-[#2764F5] group-hover:text-[#1746C9] transition-colors leading-none tracking-tight">
                            {proc.step}
                          </span>
                          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#8E9AA8] group-hover:text-[#2764F5] mt-1.5 transition-colors">
                            {proc.phase}
                          </span>
                        </div>

                        {/* Circular Progress Gauge */}
                        <div className="relative h-10 w-10 flex items-center justify-center shrink-0">
                          <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                            <circle
                              cx="18"
                              cy="18"
                              r="14"
                              fill="none"
                              stroke="#E2E8F0"
                              strokeWidth="2.5"
                            />
                            <circle
                              cx="18"
                              cy="18"
                              r="14"
                              fill="none"
                              stroke={isHighlighted ? '#2764F5' : '#94A3B8'}
                              strokeWidth="2.5"
                              strokeDasharray="88"
                              strokeDashoffset={proc.offset}
                              strokeLinecap="round"
                              className="transition-all duration-500 ease-out group-hover:stroke-[#2764F5]"
                            />
                          </svg>
                          <span className="absolute text-[9.5px] font-mono font-bold text-[#687386] group-hover:text-[#2764F5] transition-colors">
                            {proc.percent}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <h3 className="font-heading text-lg font-bold text-[#141B2A] group-hover:text-[#2764F5] transition-colors mb-2 text-left">
                        {proc.title}
                      </h3>
                      <p className="text-xs sm:text-[13px] text-[#687386] leading-relaxed text-left group-hover:text-[#475569] transition-colors">
                        {proc.desc}
                      </p>
                    </div>

                    {/* Bottom Status / Next Step Indicator */}
                    <div className="pt-4 mt-4 border-t border-[#EEF2F6] flex items-center justify-between text-xs font-mono">
                      {idx < 3 ? (
                        <span className="text-[11px] text-[#8E9AA8] group-hover:text-[#2764F5] flex items-center gap-1 transition-colors">
                          Next: {simpleProcess[idx + 1].title}
                          <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform duration-200" />
                        </span>
                      ) : (
                        <span className="text-[11px] text-[#00A88F] flex items-center gap-1.5 font-semibold">
                          <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00D2BA] opacity-75" />
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00D2BA]" />
                          </span>
                          Live &amp; Scaling
                        </span>
                      )}

                      <span
                        className={`h-2 w-2 rounded-full transition-all duration-300 ${
                          isCurrent
                            ? 'bg-[#2764F5] scale-125 shadow-xs'
                            : isHighlighted
                            ? 'bg-[#35C5E8]'
                            : 'bg-[#CBD5E1]'
                        }`}
                      />
                    </div>
                  </div>
                </SectionReveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ───────────────────────────────────────────────────────────
          6. HIGH-IMPACT CLOSING CALL TO ACTION
          Deep Navy canvas matching Home & other pages
          ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#F7F9FC] py-14 sm:py-18 lg:py-20">
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute top-1/2 left-[-5%] h-[400px] w-[400px] rounded-full bg-[#2764F5]/4 blur-3xl" />
          <div className="absolute top-1/2 right-[-5%] h-[400px] w-[400px] rounded-full bg-[#35C5E8]/4 blur-3xl" />
        </div>

        <Container className="relative z-10">
          <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl bg-[#101B2D] p-8 sm:p-12 lg:p-14 text-white shadow-xl border border-[#273752]">
            <div
              className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[#2764F5]/20 blur-2xl"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[#35C5E8]/15 blur-2xl"
              aria-hidden="true"
            />

            <div className="relative z-10 max-w-2xl mx-auto text-center flex flex-col items-center gap-6">
              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#35C5E8]/15 border border-[#35C5E8]/30 text-xs font-bold uppercase tracking-[0.2em] text-[#35C5E8]">
                READY TO BUILD?
              </span>

              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Have an Idea? Let’s Make It Real.
              </h2>

              <p className="text-base sm:text-lg text-[#CBD5E1] leading-relaxed">
                Whether you need a new website, a custom mobile app, or guidance on an academic software project, we’re ready to help.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4 pt-3">
                <Button to="/contact" variant="primary" size="lg" iconRight={<ArrowRight size={18} />}>
                  Start a Project
                </Button>
                <Button to="/services" variant="outlineDark" size="lg">
                  View All Services
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
