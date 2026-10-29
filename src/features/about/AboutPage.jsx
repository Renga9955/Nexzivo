import { Helmet } from 'react-helmet-async';
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

// Visual assets
import aboutHeroImg from '@/assets/about.png';
import rengaPhoto from '@/assets/founder-renga.jpg';
import vikkyPhoto from '@/assets/founder-vikky.jpg';

const EASE_OUT_EXPO = [0.22, 1, 0.36, 1];

// Leadership: Founder & Co-Founder
const founders = [
  {
    name: 'Renga R',
    role: 'Founder & CEO',
    subtitle: 'Vision, Product Strategy & Architecture',
    bio: 'Leads NEXZIVO with a focus on building accessible, high-performance digital products and practical software architectures that solve real industry problems.',
    image: rengaPhoto,
    focusAreas: ['System Architecture', 'Product Strategy', 'Full-Stack Engineering'],
    socials: {
      linkedin: 'https://linkedin.com',
      email: 'founder@nexzivo.com',
    },
  },
  {
    name: 'Vikky R',
    role: 'Co-Founder & CEO',
    subtitle: 'Technical Innovation & Engineering',
    bio: 'Drives technical execution, scalable cloud architecture, and modern mobile platforms, ensuring every solution built is fast, reliable, and scalable.',
    image: vikkyPhoto,
    focusAreas: ['Cloud Architecture', 'Mobile Apps & Web', 'Technical Operations'],
    socials: {
      linkedin: 'https://linkedin.com',
      email: 'cto@nexzivo.com',
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
  },
  {
    icon: ShieldCheck,
    title: 'Quality & Longevity',
    desc: 'Every line of code and interface element is built cleanly, securely, and structured to grow smoothly as your needs expand.',
  },
  {
    icon: Zap,
    title: 'Fast & Predictable Delivery',
    desc: 'Clear milestones, transparent pricing, and structured progress updates from first concept to final launch.',
  },
];

// Simple 4-Step Working Process
const simpleProcess = [
  { step: '01', title: 'Listen & Plan', desc: 'We understand your goals, audience, and project requirements.' },
  { step: '02', title: 'Design', desc: 'We create clear wireframes and interactive visual prototypes.' },
  { step: '03', title: 'Develop', desc: 'We engineer fast, secure, and modern digital solutions.' },
  { step: '04', title: 'Launch & Support', desc: 'We test thoroughly, deploy cleanly, and help you grow.' },
];

/**
 * AboutPage — Aligned with Home page style:
 * - 2-column Hero section with left-aligned copy and right-side illustration mockup
 * - Left-aligned section headings across the entire page (matching Home page editorial style)
 * - Preserves all 5 core sections and founder card perimeter tracing animation
 */
export function AboutPage() {
  const reducedMotion = useReducedMotionPreference();

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
        className="relative bg-[#F7F9FC] text-[#141B2A] pt-24 pb-14 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-20 xl:pb-24 border-b border-[#E3E8F0] overflow-hidden"
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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-4 xl:gap-8 items-center">
            {/* Left Column: Eyebrow, Heading, Description, CTAs, Focus Tags */}
            <div className="lg:col-span-5 xl:col-span-5 flex flex-col items-start gap-5 sm:gap-6 order-1 pr-0 lg:pr-2">
              <motion.div {...fadeUp(0.04, 12, 0.45)}>
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#2764F5]">
                  <span className="h-0.5 w-5 rounded-full bg-[#2764F5]" aria-hidden="true" />
                  <span>ABOUT NEXZIVO</span>
                </span>
              </motion.div>

              <h1 className="font-heading text-[2.25rem] sm:text-[2.85rem] md:text-[3.3rem] lg:text-[clamp(2.45rem,2.9vw,3.35rem)] xl:text-[clamp(2.85rem,3.3vw,3.75rem)] font-extrabold tracking-tight leading-[1.12] text-[#141B2A] max-w-xl">
                <motion.span className="block" {...fadeUp(0.1, 16, 0.55)}>
                  We Turn Ideas Into
                </motion.span>
                <motion.span className="block text-[#2764F5]" {...fadeUp(0.18, 16, 0.55)}>
                  Digital Reality.
                </motion.span>
              </h1>

              <motion.p
                className="max-w-lg text-[15px] sm:text-[16.5px] lg:text-[17px] text-[#687386] leading-relaxed text-left"
                {...fadeUp(0.36, 14, 0.5)}
              >
                NEXZIVO is a digital technology and design firm. We help businesses, startups, and students build modern websites, intuitive mobile apps, and custom software that solve real problems.
              </motion.p>

              <motion.div
                className="flex flex-wrap items-center gap-3.5 sm:gap-4 pt-1"
                {...fadeUp(0.44, 14, 0.5)}
              >
                <Button
                  to="/contact"
                  variant="primary"
                  size="md"
                  className="px-6 sm:px-7 py-3 sm:py-3.5 text-[15px] sm:text-[15.5px] shadow-sm hover:shadow"
                >
                  Let's Work Together
                </Button>
                <Button
                  to="/services"
                  variant="secondary"
                  size="md"
                  iconRight={<ArrowRight size={17} />}
                  className="px-6 sm:px-7 py-3 sm:py-3.5 text-[15px] sm:text-[15.5px]"
                >
                  Explore Services
                </Button>
              </motion.div>

              {/* Studio Capabilities Indicator */}
              <motion.div
                className="flex flex-wrap items-center gap-x-3.5 gap-y-2 pt-5 sm:pt-6 mt-1 border-t border-[#E3E8F0] w-full text-[12.5px] sm:text-[13px] font-semibold text-[#141B2A]"
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
                className="relative w-full max-w-[560px] lg:max-w-[620px] xl:max-w-[680px] flex items-center justify-center lg:justify-end"
                {...showcaseVariant()}
              >
                <img
                  src={aboutHeroImg}
                  alt="NEXZIVO Studio Overview — Digital products, mobile apps, and creative design workspace"
                  className="w-full h-auto max-h-[380px] sm:max-h-[440px] md:max-h-[480px] lg:max-h-[520px] xl:max-h-[560px] object-contain drop-shadow-[0_16px_36px_rgba(16,27,45,0.07)]"
                  loading="eager"
                  decoding="async"
                />
              </motion.div>
            </div>
          </div>
        </Container>
      </section>

      {/* ───────────────────────────────────────────────────────────
          2. MISSION & VISION (Side-by-side cards, clean & clear)
          ─────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-white border-b border-[#E3E8F0]">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {/* Our Mission */}
            <SectionReveal>
              <div className="h-full flex flex-col justify-between p-8 sm:p-10 rounded-2xl bg-[#101B2D] text-white shadow-lg border border-[#273752] relative overflow-hidden">
                <div className="relative z-10 flex flex-col gap-4 text-left">
                  <div className="flex items-center gap-2.5 text-xs font-mono font-bold uppercase tracking-wider text-[#35C5E8]">
                    <Target size={16} />
                    <span>OUR MISSION</span>
                  </div>
                  <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white text-left">
                    Technology with Purpose
                  </h2>
                  <p className="text-sm sm:text-base text-[#DCE4F0] leading-relaxed text-left">
                    To make digital technology more useful, accessible, and reliable. We transform complex challenges into practical, beautiful solutions that help individuals and businesses take their next step with confidence.
                  </p>
                </div>
              </div>
            </SectionReveal>

            {/* Our Vision */}
            <SectionReveal delay={0.15}>
              <div className="h-full flex flex-col justify-between p-8 sm:p-10 rounded-2xl bg-[#F7F9FC] text-[#141B2A] border border-[#E3E8F0] shadow-xs">
                <div className="flex flex-col gap-4 text-left">
                  <div className="flex items-center gap-2.5 text-xs font-mono font-bold uppercase tracking-wider text-[#2764F5]">
                    <Compass size={16} />
                    <span>OUR VISION</span>
                  </div>
                  <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#141B2A] text-left">
                    Building What’s Next
                  </h2>
                  <p className="text-sm sm:text-base text-[#687386] leading-relaxed text-left">
                    To be the most trusted technology and creative design partner, recognized for exceptional quality, user-centered innovation, and long-term client success.
                  </p>
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
                  <div className="group h-full flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-white border border-[#E3E8F0] hover:border-[#2764F5]/50 hover:shadow-lg transition-all duration-300 text-left">
                    <div>
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#EEF4FF] text-[#2764F5] group-hover:bg-[#2764F5] group-hover:text-white transition-colors duration-300 mb-5">
                        <Icon size={22} />
                      </span>
                      <h3 className="font-heading text-lg sm:text-xl font-bold text-[#141B2A] mb-2 group-hover:text-[#2764F5] transition-colors text-left">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#687386] leading-relaxed text-left">
                        {item.desc}
                      </p>
                    </div>

                    <div className="pt-6 mt-4 border-t border-[#EEF2F6]">
                      <Button to={item.to} variant="ghost" size="sm" iconRight={<ArrowRight size={14} />} className="p-0 text-xs font-bold text-[#2764F5] hover:bg-transparent">
                        Learn More
                      </Button>
                    </div>
                  </div>
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {whyChooseUs.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <SectionReveal key={pillar.title} delay={i * 0.1}>
                  <div className="h-full flex flex-col p-8 rounded-2xl bg-[#F7F9FC] border border-[#E3E8F0] shadow-xs hover:border-[#2764F5]/40 hover:bg-white hover:shadow-md transition-all duration-300 text-left">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#EEF4FF] text-[#2764F5] mb-5">
                      <Icon size={24} />
                    </span>
                    <h3 className="font-heading text-xl font-bold text-[#141B2A] mb-3 text-left">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-[#687386] leading-relaxed text-left">
                      {pillar.desc}
                    </p>
                  </div>
                </SectionReveal>
              );
            })}
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
          5. SIMPLE 4-STEP PROCESS (Left-Aligned Heading + 4 Cards)
          ─────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-white border-b border-[#E3E8F0]">
        <Container>
          <SectionReveal>
            <div className="text-left max-w-2xl mb-12 sm:mb-16">
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {simpleProcess.map((proc, idx) => (
              <SectionReveal key={proc.step} delay={idx * 0.1}>
                <div className="h-full p-6 sm:p-7 rounded-2xl bg-[#F7F9FC] border border-[#E3E8F0] hover:border-[#2764F5]/40 hover:bg-white hover:shadow-md transition-all duration-300 flex flex-col justify-between text-left">
                  <div>
                    <span className="font-mono text-3xl font-extrabold text-[#2764F5] block mb-3">
                      {proc.step}
                    </span>
                    <h3 className="font-heading text-lg font-bold text-[#141B2A] mb-2 text-left">
                      {proc.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#687386] leading-relaxed text-left">
                      {proc.desc}
                    </p>
                  </div>
                </div>
              </SectionReveal>
            ))}
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
