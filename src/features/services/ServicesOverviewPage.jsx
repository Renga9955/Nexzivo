import { useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'motion/react';
import { ArrowRight, CheckCircle2, Zap, ShieldCheck, Headphones } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { siteConfig } from '@/config/site';
import { useReducedMotionPreference } from '@/hooks/useReducedMotionPreference';

import heroImg from '@/assets/service.png';
import webImg from '@/assets/showcase/service-web.jpg';
import mobileImg from '@/assets/showcase/service-mobile.jpg';
import uiuxImg from '@/assets/showcase/service-uiux.jpg';
import posterImg from '@/assets/showcase/service-poster.jpg';
import softwareImg from '@/assets/showcase/service-software.jpg';
import projectsImg from '@/assets/showcase/mission-studio-showcase.jpg';

const EASE_OUT_EXPO = [0.22, 1, 0.36, 1];

const servicesList = [
  {
    number: '01',
    title: 'Website Development',
    slug: 'website-development',
    image: webImg,
    description: 'Modern, responsive, and high-performing websites tailored to your business goals.',
    features: [
      'Business websites',
      'Landing pages',
      'E-commerce websites',
      'CMS and dynamic websites',
    ],
  },
  {
    number: '02',
    title: 'Mobile App Development',
    slug: 'mobile-app-development',
    image: mobileImg,
    description: 'Intuitive mobile applications designed to deliver useful, engaging experiences.',
    features: [
      'Android app development',
      'iOS app development',
      'Cross-platform solutions',
      'App UI/UX and deployment',
    ],
  },
  {
    number: '03',
    title: 'UI/UX Design',
    slug: 'ui-ux-design',
    image: uiuxImg,
    description: 'User-focused designs that create meaningful, intuitive, and engaging digital experiences.',
    features: [
      'User research and wireframes',
      'Web and mobile UI design',
      'Interactive prototypes and design systems',
      'Usability and experience improvement',
    ],
  },
  {
    number: '04',
    title: 'Poster Design & Graphic Design',
    slug: 'poster-graphic-design',
    image: posterImg,
    description: 'Creative visual designs that communicate your brand, ideas, and message effectively.',
    features: [
      'Posters and banners',
      'Social media creatives',
      'Branding and marketing materials',
      'Custom graphic design',
    ],
  },
  {
    number: '05',
    title: 'Custom Software Development',
    slug: 'custom-software-development',
    image: softwareImg,
    description: 'Tailored business software to streamline operations and improve efficiency.',
    features: [
      'Admin dashboards',
      'Billing and invoicing software',
      'SaaS applications',
      'Business process automation',
    ],
  },
  {
    number: '06',
    title: 'Final Year Project Support',
    slug: 'final-year-projects',
    image: projectsImg,
    description: 'Practical project development support for academic final-year projects.',
    features: [
      'Project idea guidance',
      'Development and implementation',
      'Documentation support',
      'Demo and viva preparation',
    ],
  },
];

export function ServicesOverviewPage() {
  const reducedMotion = useReducedMotionPreference();
  const cardsGridRef = useRef(null);
  const isInView = useInView(cardsGridRef, {
    once: true,
    amount: 0.18,
    margin: '0px 0px -80px 0px',
  });

  // Staggered card entrance variants with a clear base delay and 180ms cascade
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 38,
      scale: 0.98,
    },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        delay: 0.25 + index * 0.18,
        ease: EASE_OUT_EXPO,
      },
    }),
  };

  // Subtle image entrance variant
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.97 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.55, ease: EASE_OUT_EXPO },
    },
  };

  // Homepage hero coordinated entrance animation variants (respects reducedMotion)
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

  // Right illustration entrance: smooth fade-in with gentle scale-up from ~94% to 100%
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
    <div className="bg-white min-h-screen text-[#526581]">
      <Helmet>
        <title>Our Services — {siteConfig.name}</title>
        <meta
          name="description"
          content="Explore NEXZIVO's 6 core studio services: website development, mobile app development, UI/UX design, poster & graphic design, custom software, and final-year project support."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#F7F9FC] text-[#141B2A] pt-28 pb-14 sm:pt-32 sm:pb-16 lg:pt-36 lg:pb-20 xl:pb-24 border-b border-[#DFE7F3]">
        {/* Soft atmospheric gradient wash behind the illustration */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          <motion.div
            {...bgShapeVariant(0)}
            className="absolute -top-32 right-[-5%] h-[620px] w-[620px] lg:h-[700px] lg:w-[700px] rounded-full bg-gradient-to-br from-[#2764F5]/7 via-[#35C5E8]/5 to-transparent blur-3xl"
          />
          <motion.div
            {...bgShapeVariant(0.1)}
            className="absolute top-1/4 left-[-10%] h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-[#35C5E8]/6 via-[#2764F5]/4 to-transparent blur-3xl"
          />
        </div>

        <Container className="relative z-10 max-w-[1440px] xl:max-w-[1540px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 xl:gap-8 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-6 xl:col-span-5 flex flex-col items-start gap-5 sm:gap-6 z-20">
              {/* Eyebrow matching homepage line-dash style */}
              <motion.div {...fadeUp(0.04, 12, 0.45)}>
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#2764F5]">
                  <span className="h-0.5 w-5 rounded-full bg-[#2764F5]" aria-hidden="true" />
                  <span>OUR SERVICES</span>
                </span>
              </motion.div>

              {/* Headline with Staggered Entrance Animation */}
              <h1 className="font-heading text-[2.25rem] sm:text-[2.85rem] md:text-[3.3rem] lg:text-[clamp(2.35rem,2.8vw,3.25rem)] xl:text-[clamp(2.75rem,3.2vw,3.65rem)] font-extrabold tracking-tight leading-[1.12] text-[#141B2A] max-w-xl">
                <motion.span className="block" {...fadeUp(0.1, 16, 0.55)}>
                  Digital solutions for
                </motion.span>
                <motion.span className="block" {...fadeUp(0.18, 16, 0.55)}>
                  ideas <span className="text-[#2764F5]">with a purpose.</span>
                </motion.span>
              </h1>

              {/* Supporting Description */}
              <motion.p
                className="text-[15px] sm:text-[16.5px] lg:text-[17px] text-[#687386] leading-relaxed max-w-lg font-normal"
                {...fadeUp(0.32, 14, 0.5)}
              >
                We design and build websites, mobile apps, creative designs, and custom software solutions that help your brand grow and make a lasting impact.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-wrap items-center gap-3.5 sm:gap-4 pt-1"
                {...fadeUp(0.42, 14, 0.5)}
              >
                <Button to="/contact" variant="primary" size="md" iconRight={<ArrowRight size={17} />} className="px-6 sm:px-7 py-3 sm:py-3.5 text-[15px] sm:text-[15.5px] shadow-sm hover:shadow">
                  Start a Project
                </Button>
                <a
                  href="#services-grid"
                  className="inline-flex items-center justify-center font-medium text-[15px] sm:text-[15.5px] text-[#111B36] hover:text-[#2864FF] px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl border border-[#DFE7F3] bg-white hover:bg-[#F5F9FF] transition-all shadow-sm"
                >
                  Explore Services
                </a>
              </motion.div>
            </div>

            {/* Right Hero Image with Homepage Showcase Entrance Animation */}
            <div className="lg:col-span-6 xl:col-span-7 w-full flex items-center justify-center lg:justify-end z-10">
              <motion.div
                className="relative w-full max-w-[540px] lg:max-w-[600px] flex items-center justify-center lg:justify-end"
                {...showcaseVariant()}
              >
                <img
                  src={heroImg}
                  alt="NEXZIVO Studio Showcase — Digital solutions for ideas with a purpose"
                  className="w-full h-auto max-h-[360px] sm:max-h-[420px] md:max-h-[460px] lg:max-h-[500px] xl:max-h-[540px] object-contain drop-shadow-[0_16px_36px_rgba(16,27,45,0.07)]"
                  loading="eager"
                  decoding="async"
                />
              </motion.div>
            </div>
          </div>
        </Container>
      </section>

      {/* Services Section with Refined Editorial Background Design */}
      <section
        id="services-grid"
        className="section relative bg-[#F7F9FD] border-b border-[#E3E8F0] overflow-hidden py-20 lg:py-28"
      >
        {/* Architectural Studio Atmosphere & Background Design Layers */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          {/* Subtle Architectural / Digital Studio Precision Grid Pattern */}
          <svg
            className="absolute inset-0 w-full h-full text-[#2764F5]/[0.03]"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern id="services-studio-grid" width="48" height="48" patternUnits="userSpaceOnUse">
                <path d="M 48 0 L 0 0 0 48" fill="none" stroke="currentColor" strokeWidth="1" />
                <circle cx="0" cy="0" r="1.5" fill="currentColor" opacity="0.6" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#services-studio-grid)" />
          </svg>

          {/* Soft Radial Gradient behind heading & card grid */}
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[720px] w-[900px] rounded-full bg-gradient-to-b from-[#2764F5]/[0.045] via-[#35C5E8]/[0.025] to-transparent blur-3xl" />

          {/* Soft Ambient Corner Vignettes */}
          <div className="absolute -top-32 -left-32 h-[520px] w-[520px] rounded-full bg-gradient-to-br from-[#2764F5]/6 via-[#35C5E8]/4 to-transparent blur-3xl" />
          <div className="absolute -bottom-36 -right-36 h-[560px] w-[560px] rounded-full bg-gradient-to-tl from-[#35C5E8]/6 via-[#2764F5]/4 to-transparent blur-3xl" />

          {/* Dynamic Studio Wave Ribbon / Flow Path behind cards */}
          <svg
            className="absolute top-16 -left-16 w-[560px] h-[560px] text-[#2764F5]/[0.035]"
            viewBox="0 0 600 600"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M 50 150 C 200 80, 350 320, 550 220"
              stroke="currentColor"
              strokeWidth="28"
              strokeLinecap="round"
            />
            <path
              d="M 80 200 C 220 140, 370 380, 580 270"
              stroke="currentColor"
              strokeWidth="4"
              strokeDasharray="12 12"
              strokeLinecap="round"
            />
          </svg>

          {/* Modern Studio Accent Badge Rings (Bottom Right Edge) */}
          <svg
            className="absolute -bottom-24 -right-20 w-[480px] h-[480px] text-[#35C5E8]/[0.045]"
            viewBox="0 0 500 500"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="280" cy="280" r="180" stroke="currentColor" strokeWidth="24" />
            <circle cx="280" cy="280" r="120" stroke="currentColor" strokeWidth="2" strokeDasharray="8 8" />
            <path d="M 280 100 L 280 460 M 100 280 L 460 280" stroke="currentColor" strokeWidth="1" strokeDasharray="6 6" />
          </svg>
        </div>

        <Container className="relative z-10">
          {/* Section Introduction (Left-aligned) */}
          <div className="max-w-3xl text-left mb-14 lg:mb-16">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#2764F5] mb-3">
              <span className="h-0.5 w-5 rounded-full bg-[#2764F5]" aria-hidden="true" />
              <span>WHAT WE DO</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#111B36] mb-4">
              Services built around your ideas
            </h2>
            <p className="text-base sm:text-lg text-[#526581] leading-relaxed">
              Creative, reliable, and tailored digital services to turn your ideas into real, impactful solutions.
            </p>
          </div>

          {/* 6 Services Grid with Cascading Staggered Scroll Reveal */}
          <div ref={cardsGridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesList.map((service, index) => (
              <motion.div
                key={service.slug}
                custom={index}
                initial={reducedMotion ? false : 'hidden'}
                animate={isInView ? 'visible' : reducedMotion ? 'visible' : 'hidden'}
                variants={reducedMotion ? undefined : cardVariants}
                className={`group flex h-full flex-col overflow-hidden rounded-2xl border border-[#E3E8F0] bg-white shadow-[0_6px_20px_rgba(16,27,45,0.045)] transition-[transform,border-color,box-shadow] duration-300 ease-out hover:border-[#2764F5]/50 hover:shadow-[0_14px_30px_rgba(16,27,45,0.08)] motion-reduce:transition-none ${
                  reducedMotion ? '' : 'hover:-translate-y-1'
                }`}
              >
                <div className="relative aspect-[16/10] overflow-hidden border-b border-[#E3E8F0] bg-[#EEF4FF]">
                  <motion.img
                    src={service.image}
                    alt={service.title}
                    variants={reducedMotion ? undefined : imageVariants}
                    className={`h-full w-full object-cover transition-transform duration-500 ease-out motion-reduce:transition-none ${
                      reducedMotion ? '' : 'group-hover:scale-[1.025]'
                    }`}
                  />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#101B2D]/20 to-transparent" />
                  <span className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/95 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-[#141B2A] shadow-sm backdrop-blur-sm">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#2764F5]" aria-hidden="true" />
                    {service.number}
                  </span>
                </div>

                {/* Card Body */}
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <div className="flex flex-1 flex-col">
                    <div className="mb-3 h-0.5 w-8 rounded-full bg-[#2764F5]" aria-hidden="true" />
                    <h3 className="mb-2.5 font-heading text-xl font-bold leading-snug tracking-tight text-[#141B2A] transition-colors group-hover:text-[#2764F5] sm:text-[22px]">
                      {service.title}
                    </h3>

                    <p className="mb-5 text-[14.5px] font-normal leading-[1.7] text-[#687386]">
                      {service.description}
                    </p>

                    {/* Feature List */}
                    <ul className="space-y-2.5 border-t border-[#E3E8F0] pt-4">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2.5 text-[13px] leading-relaxed text-[#141B2A] sm:text-sm">
                          <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-[#2764F5]" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-5 border-t border-[#E3E8F0] pt-4">
                    <Link
                      to={`/services/${service.slug}`}
                      className="group/link inline-flex w-full items-center justify-between gap-4 rounded-xl border border-[#E3E8F0] bg-[#F7F9FC] px-4 py-3 text-sm font-semibold text-[#2764F5] transition-colors hover:border-[#2764F5]/35 hover:bg-[#EEF4FF] hover:text-[#1E52D0] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2764F5] focus-visible:ring-offset-2 motion-reduce:transition-none"
                    >
                      <span>Explore Service</span>
                      <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#DFE7F3] bg-white text-[#2764F5] transition-colors group-hover/link:border-[#2764F5] group-hover/link:bg-[#2764F5] group-hover/link:text-white motion-reduce:transition-none">
                        <ArrowRight
                          size={16}
                          className={`transition-transform duration-200 ease-out motion-reduce:transition-none ${
                            reducedMotion ? '' : 'group-hover/link:translate-x-0.5'
                          }`}
                        />
                      </span>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Bottom Project CTA */}
      <section className="py-20 lg:py-28 bg-white">
        <Container>
          <div className="relative rounded-3xl bg-gradient-to-br from-[#F5F9FF] via-white to-[#EEF4FF] border border-[#DFE7F3] p-8 sm:p-12 lg:p-16 shadow-[0_10px_35px_rgba(40,100,255,0.05)] overflow-hidden">
            {/* Ambient decoration */}
            <div 
              className="absolute -bottom-20 -right-20 w-80 h-80 bg-[#2864FF]/10 rounded-full blur-[80px] pointer-events-none" 
              aria-hidden="true" 
            />

            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#2764F5] mb-3">
                  <span className="h-0.5 w-5 rounded-full bg-[#2764F5]" aria-hidden="true" />
                  <span>GET IN TOUCH</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#111B36] mb-4">
                  Have a project in mind?
                </h2>
                <p className="text-base sm:text-lg text-[#526581] leading-relaxed mb-8">
                  Tell us about your idea, and we’ll help you choose the right solution.
                </p>

                {/* 3 Compact Benefits */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="flex items-center gap-3 bg-white/80 border border-[#DFE7F3] rounded-xl px-4 py-3">
                    <div className="w-8 h-8 rounded-lg bg-[#F5F9FF] border border-[#DFE7F3] flex items-center justify-center text-[#2864FF] shrink-0">
                      <Zap size={16} />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-[#111B36]">Quick Response</span>
                  </div>

                  <div className="flex items-center gap-3 bg-white/80 border border-[#DFE7F3] rounded-xl px-4 py-3">
                    <div className="w-8 h-8 rounded-lg bg-[#F5F9FF] border border-[#DFE7F3] flex items-center justify-center text-[#2864FF] shrink-0">
                      <ShieldCheck size={16} />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-[#111B36]">Custom Solution</span>
                  </div>

                  <div className="flex items-center gap-3 bg-white/80 border border-[#DFE7F3] rounded-xl px-4 py-3">
                    <div className="w-8 h-8 rounded-lg bg-[#F5F9FF] border border-[#DFE7F3] flex items-center justify-center text-[#2864FF] shrink-0">
                      <Headphones size={16} />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-[#111B36]">Reliable Support</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="flex-shrink-0 flex items-center">
                <Button to="/contact" variant="primary" size="lg" className="rounded-xl shadow-md hover:shadow-lg w-full sm:w-auto">
                  Start a Project
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
