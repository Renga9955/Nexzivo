import { useEffect, useRef, useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Layers,
  Sparkles,
  ShieldCheck,
  Zap,
  Target,
} from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { SectionReveal } from '@/components/ui/SectionReveal';
import { siteConfig } from '@/config/site';
import { useReducedMotionPreference } from '@/hooks/useReducedMotionPreference';
import { servicesDetailedCatalog } from './data/servicesDetailedCatalog';

const EASE_OUT_EXPO = [0.22, 1, 0.36, 1];
const WORKFLOW_CARD_DELAY = 1.08;
const WORKFLOW_CARD_STAGGER = 0.16;

const serviceNavigationOrder = [
  'website-development',
  'mobile-app-development',
  'ui-ux-design',
  'poster-graphic-design',
  'custom-software-development',
  'final-year-projects',
];

export function ServiceDetailPage() {
  const { slug } = useParams();
  const reducedMotion = useReducedMotionPreference();
  const [revealedProcessSlug, setRevealedProcessSlug] = useState(null);
  const processSectionRef = useRef(null);

  // Normalize slug in case of alias (e.g., brand-strategy-innovation -> custom-software-development)
  const resolvedSlug =
    slug === 'brand-strategy-innovation' ? 'custom-software-development' : slug;

  const hasIntersectionObserver =
    typeof window !== 'undefined' && typeof window.IntersectionObserver === 'function';
  const processInView =
    reducedMotion || !hasIntersectionObserver || revealedProcessSlug === resolvedSlug;
  const service = servicesDetailedCatalog[resolvedSlug];

  useEffect(() => {
    const section = processSectionRef.current;
    if (!section || reducedMotion || !hasIntersectionObserver) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealedProcessSlug(resolvedSlug);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, [resolvedSlug, reducedMotion, hasIntersectionObserver]);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  // Calculate next and previous service for seamless studio navigation
  const currentIndex = serviceNavigationOrder.indexOf(resolvedSlug);
  const nextSlug =
    serviceNavigationOrder[(currentIndex + 1) % serviceNavigationOrder.length];
  const prevSlug =
    serviceNavigationOrder[
      (currentIndex - 1 + serviceNavigationOrder.length) % serviceNavigationOrder.length
    ];
  const nextService = servicesDetailedCatalog[nextSlug];
  const prevService = servicesDetailedCatalog[prevSlug];

  // Motion animation presets
  const fadeUp = (delay = 0, yOffset = 18, duration = 0.55) => {
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

  const heroImageVariant = () => {
    if (reducedMotion) {
      return {
        initial: { opacity: 1, scale: 1 },
        animate: { opacity: 1, scale: 1 },
      };
    }
    return {
      initial: { opacity: 0, scale: 0.95, y: 16 },
      animate: { opacity: 1, scale: 1, y: 0 },
      transition: { duration: 0.8, delay: 0.2, ease: EASE_OUT_EXPO },
    };
  };

  return (
    <div className="bg-white min-h-screen text-[#526581]">
      <Helmet>
        <title>{service.title} — {siteConfig.name} Studio</title>
        <meta name="description" content={service.shortDescription} />
        <meta property="og:title" content={`${service.title} — ${siteConfig.name}`} />
        <meta property="og:description" content={service.heroDescription} />
        <meta property="og:image" content={service.heroImage} />
      </Helmet>

      {/* ──────────────────────────────────────────────────────────
          1. Service Hero Section (Balanced Two-Column Studio Layout)
          ────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#F7F9FC] text-[#141B2A] pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24 border-b border-[#DFE7F3]">
        {/* Soft atmospheric gradient wash behind hero visual */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          {/* Studio blueprint grid pattern */}
          <svg
            className="absolute inset-0 w-full h-full text-[#2764F5]/[0.035]"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern id="service-hero-grid" width="48" height="48" patternUnits="userSpaceOnUse">
                <path d="M 48 0 L 0 0 0 48" fill="none" stroke="currentColor" strokeWidth="1" />
                <circle cx="0" cy="0" r="1.5" fill="currentColor" opacity="0.6" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#service-hero-grid)" />
          </svg>

          <div className="absolute -top-32 right-[-5%] h-[600px] w-[600px] rounded-full bg-gradient-to-br from-[#2764F5]/7 via-[#35C5E8]/5 to-transparent blur-3xl" />
          <div className="absolute top-1/4 left-[-10%] h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-[#35C5E8]/6 via-[#2764F5]/4 to-transparent blur-3xl" />
        </div>

        <Container className="relative z-10 max-w-[1440px] xl:max-w-[1540px]">
          {/* Breadcrumb Navigation */}
          <div className="mb-6 sm:mb-8 flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#687386]">
            <Link
              to="/services"
              className="inline-flex items-center gap-1.5 text-[#2764F5] transition-colors hover:text-[#1E52D0]"
              id="breadcrumb-services-link"
            >
              <ArrowLeft size={14} aria-hidden="true" />
              <span>Services</span>
            </Link>
            <ChevronRight size={13} className="text-[#8E9AA8]" aria-hidden="true" />
            <span className="text-[#141B2A]" aria-current="page">
              {service.title}
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-12 items-center">
            {/* Left Column: Heading, Badge, Description, CTAs */}
            <div className="lg:col-span-6 xl:col-span-6 flex flex-col items-start gap-5 sm:gap-6 z-20">
              {/* Category & Service Number Badge */}
              <motion.div {...fadeUp(0.04, 12, 0.45)}>
                <div className="inline-flex items-center gap-2.5 rounded-full border border-[#DCE4F0] bg-white/90 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-[#2764F5] shadow-xs backdrop-blur-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#2764F5]" aria-hidden="true" />
                  <span>
                    SERVICE {service.number} · {service.category}
                  </span>
                </div>
              </motion.div>

              {/* Service Headline */}
              <h1 className="font-heading text-[2.25rem] sm:text-[2.85rem] md:text-[3.2rem] lg:text-[clamp(2.35rem,2.8vw,3.25rem)] xl:text-[clamp(2.75rem,3.2vw,3.6rem)] font-extrabold tracking-tight leading-[1.12] text-[#141B2A] max-w-xl">
                <motion.span className="block" {...fadeUp(0.1, 16, 0.55)}>
                  {service.heroHeadline}
                </motion.span>
              </h1>

              {/* Short Compelling Introduction */}
              <motion.p
                className="text-[15.5px] sm:text-[17px] text-[#526581] leading-relaxed max-w-xl font-normal"
                {...fadeUp(0.24, 14, 0.5)}
              >
                {service.heroDescription}
              </motion.p>

              {/* CTAs: Primary + Secondary */}
              <motion.div
                className="flex flex-wrap items-center gap-3.5 sm:gap-4 pt-2"
                {...fadeUp(0.34, 14, 0.5)}
              >
                <Button
                  to="/contact"
                  variant="primary"
                  size="md"
                  iconRight={<ArrowRight size={17} />}
                  className="px-6 sm:px-7 py-3 sm:py-3.5 text-[15px] sm:text-[15.5px] shadow-sm hover:shadow"
                  id={`hero-primary-cta-${service.slug}`}
                >
                  {service.primaryCta}
                </Button>

                <a
                  href="#service-process"
                  className="inline-flex items-center justify-center font-medium text-[15px] sm:text-[15.5px] text-[#111B36] hover:text-[#2864FF] px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl border border-[#DFE7F3] bg-white hover:bg-[#F5F9FF] transition-all shadow-sm"
                  id={`hero-secondary-cta-${service.slug}`}
                >
                  {service.secondaryCta}
                </a>
              </motion.div>

              {/* Micro Trust Indicators */}
              <motion.div
                className="pt-4 border-t border-[#DFE7F3] w-full grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4"
                {...fadeUp(0.44, 12, 0.5)}
              >
                {service.stats.map((stat) => (
                  <div key={stat.label} className="flex flex-col">
                    <span className="font-heading text-lg sm:text-xl font-bold text-[#141B2A] tracking-tight">
                      {stat.value}
                    </span>
                    <span className="text-[11px] sm:text-xs text-[#687386] leading-tight">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right Column: Service-Specific Landscape Hero Showcase Image */}
            <div className="lg:col-span-6 xl:col-span-6 w-full flex items-center justify-center lg:justify-end z-10">
              <motion.div
                className="relative w-full max-w-[620px] lg:max-w-none group"
                {...heroImageVariant()}
              >
                <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-[#DFE7F3] bg-white shadow-[0_16px_40px_rgba(16,27,45,0.08)]">
                  <img
                    src={service.heroImage}
                    alt={service.heroImageAlt}
                    className="w-full h-auto max-h-[460px] sm:max-h-[500px] lg:max-h-[540px] xl:max-h-[580px] object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                    loading="eager"
                    decoding="async"
                    id={`hero-image-${service.slug}`}
                  />
                  {/* Subtle inner top and bottom gradient overlays for polish */}
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#141B2A]/20 to-transparent" />
                  
                  {/* Floating Studio Quality Badge */}
                  <div className="absolute bottom-4 left-4 right-4 sm:left-6 sm:right-auto flex items-center gap-2.5 rounded-xl border border-white/80 bg-white/95 px-3.5 py-2 text-xs font-semibold text-[#141B2A] shadow-md backdrop-blur-md">
                    <span className="flex h-2 w-2 rounded-full bg-[#2764F5] animate-pulse" />
                    <span>NEXZIVO Studio Standard · {service.badge}</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </Container>
      </section>

      {/* ──────────────────────────────────────────────────────────
          2. Overview & Philosophy Section
          ────────────────────────────────────────────────────────── */}
      <section className="section bg-white border-b border-[#E3E8F0]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            <div className="lg:col-span-5">
              <SectionReveal>
                <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#2764F5] mb-3">
                  <span className="h-0.5 w-5 rounded-full bg-[#2764F5]" aria-hidden="true" />
                  <span>{service.overview.eyebrow}</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#141B2A] leading-tight mb-4">
                  {service.overview.heading}
                </h2>
                <div className="h-1 w-16 rounded-full bg-[#2764F5] mb-6" />
                <p className="text-base sm:text-lg text-[#526581] leading-relaxed font-normal">
                  {service.overview.description}
                </p>
              </SectionReveal>
            </div>

            <div className="lg:col-span-7 flex flex-col gap-6">
              <SectionReveal delay={0.1}>
                <div className="rounded-3xl border border-[#DFE7F3] bg-[#F7F9FC] p-7 sm:p-9 shadow-sm">
                  <div className="flex flex-col gap-4 text-[15.5px] sm:text-base leading-relaxed text-[#526581]">
                    {service.overview.paragraphs.map((para, i) => (
                      <p key={i}>{para}</p>
                    ))}
                  </div>

                  <div className="mt-8 pt-6 border-t border-[#DFE7F3] flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-2 text-sm font-semibold text-[#141B2A]">
                      <Sparkles size={18} className="text-[#2764F5]" />
                      <span>Custom-tailored to your exact project scope</span>
                    </div>

                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-1.5 text-sm font-bold text-[#2764F5] hover:text-[#1E52D0] transition-colors"
                    >
                      <span>Inquire now</span>
                      <ArrowRight size={15} />
                    </Link>
                  </div>
                </div>
              </SectionReveal>
            </div>
          </div>
        </Container>
      </section>

      {/* ──────────────────────────────────────────────────────────
          3. Specialized Service Solutions / Types
          ────────────────────────────────────────────────────────── */}
      <section className="section bg-[#F7F9FC] border-b border-[#E3E8F0]">
        <Container>
          <div className="max-w-3xl mb-12 sm:mb-16">
            <SectionReveal>
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#2764F5] mb-3">
                <span className="h-0.5 w-5 rounded-full bg-[#2764F5]" aria-hidden="true" />
                <span>{service.types.eyebrow}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#141B2A] mb-4">
                {service.types.heading}
              </h2>
              <p className="text-base sm:text-lg text-[#526581] leading-relaxed">
                {service.types.description}
              </p>
            </SectionReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {service.types.items.map((item, idx) => (
              <SectionReveal key={item.title} delay={idx * 0.06}>
                <div className="group flex h-full flex-col justify-between rounded-2xl border border-[#E3E8F0] bg-white p-6 sm:p-7 shadow-[0_4px_16px_rgba(16,27,45,0.035)] transition-all duration-300 hover:border-[#2764F5]/50 hover:shadow-[0_12px_28px_rgba(16,27,45,0.07)] hover:-translate-y-1">
                  <div>
                    <div className="mb-4 flex items-center justify-between">
                      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#EEF4FF] text-xs font-bold text-[#2764F5] border border-[#DCE4F0] group-hover:bg-[#2764F5] group-hover:text-white transition-colors">
                        0{idx + 1}
                      </span>
                      <span className="h-1.5 w-1.5 rounded-full bg-[#2764F5]/40 group-hover:bg-[#2764F5] transition-colors" />
                    </div>

                    <h3 className="mb-2.5 font-heading text-lg font-bold text-[#141B2A] group-hover:text-[#2764F5] transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-[#687386]">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#F0F4F8] flex items-center text-xs font-semibold text-[#2764F5] opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>Discuss requirement →</span>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ──────────────────────────────────────────────────────────
          4. Capabilities & Deliverables Section (Two Columns)
          ────────────────────────────────────────────────────────── */}
      <section className="section bg-white border-b border-[#E3E8F0]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left: Key Capabilities */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <SectionReveal>
                <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#2764F5] mb-3">
                  <span className="h-0.5 w-5 rounded-full bg-[#2764F5]" aria-hidden="true" />
                  <span>CORE CAPABILITIES</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#141B2A] mb-4">
                  How we execute and deliver excellence
                </h2>
                <p className="text-base text-[#526581] leading-relaxed mb-6">
                  Every project is backed by disciplined methodology, performance awareness, and rigorous quality standards.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.capabilities.map((cap, i) => (
                    <div
                      key={cap.title}
                      className="rounded-2xl border border-[#E3E8F0] bg-[#F7F9FC] p-5 transition-all hover:border-[#2764F5]/40 hover:bg-[#F2F6FE]"
                    >
                      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#2764F5] mb-2">
                        <CheckCircle2 size={15} />
                        <span>Capability 0{i + 1}</span>
                      </div>
                      <h3 className="font-heading text-[15px] font-bold text-[#141B2A] mb-1.5 leading-snug">
                        {cap.title}
                      </h3>
                      <p className="text-xs sm:text-[13px] text-[#687386] leading-relaxed">
                        {cap.description}
                      </p>
                    </div>
                  ))}
                </div>
              </SectionReveal>
            </div>

            {/* Right: Concrete Client Deliverables Box */}
            <div className="lg:col-span-5">
              <SectionReveal delay={0.15}>
                <div className="rounded-3xl border border-[#DFE7F3] bg-gradient-to-b from-[#F5F9FF] to-white p-7 sm:p-9 shadow-[0_10px_30px_rgba(16,27,45,0.05)] lg:sticky lg:top-28">
                  <div className="mb-3 flex items-center justify-between">
                    <div className="inline-flex items-center gap-2 rounded-lg bg-[#EEF4FF] border border-[#DCE4F0] px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#2764F5]">
                      <Layers size={14} />
                      <span>Deliverables</span>
                    </div>
                    <span className="text-xs font-mono font-semibold text-[#8E9AA8]">
                      {service.deliverables.length} Key Outputs
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold tracking-tight text-[#141B2A] mb-2">
                    What you receive
                  </h3>
                  <p className="text-sm leading-relaxed text-[#687386] mb-6">
                    Tangible, high-value assets and production files handed over upon project completion.
                  </p>

                  <ul className="mb-8 flex flex-col gap-3.5">
                    {service.deliverables.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 rounded-xl border border-[#E3E8F0] bg-white p-3.5 text-sm leading-relaxed text-[#141B2A] shadow-2xs"
                      >
                        <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-[#2764F5]" />
                        <span className="text-[13.5px] sm:text-sm font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    to="/contact"
                    variant="primary"
                    size="lg"
                    className="w-full justify-center shadow-md hover:shadow-lg"
                    id={`request-quote-${service.slug}`}
                  >
                    Request Proposal for {service.title}
                  </Button>
                </div>
              </SectionReveal>
            </div>
          </div>
        </Container>
      </section>

      {/* ──────────────────────────────────────────────────────────
          5. Process & Workflow Section (Refined 5-Card Layout with Wave Background)
          ────────────────────────────────────────────────────────── */}
      <section
        ref={processSectionRef}
        id="service-process"
        className="relative overflow-hidden bg-[#F7F9FC] border-b border-[#E3E8F0] py-20 lg:py-28"
      >
        {/* Subtle, elegant flowing pale-blue wave pattern & ambient background depth */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          {/* Faint blue ambient radial gradients */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[650px] w-[950px] rounded-full bg-gradient-to-b from-[#2764F5]/[0.035] via-[#35C5E8]/[0.02] to-transparent blur-3xl" />
          <div className="absolute -top-24 right-[-10%] h-[500px] w-[500px] rounded-full bg-gradient-to-bl from-[#2764F5]/[0.04] to-transparent blur-3xl" />
          <div className="absolute -bottom-24 left-[-10%] h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-[#35C5E8]/[0.04] to-transparent blur-3xl" />

          {/* Thin, flowing pale-blue curved wave lines across the entire section */}
          <svg
            className="absolute top-1/2 left-0 w-full -translate-y-1/2 text-[#2764F5] opacity-25 sm:opacity-30 lg:opacity-35"
            viewBox="0 0 1440 320"
            fill="none"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Primary wave draws first; the companion fades in just after it. */}
            <motion.path
              d="M-40 180 C 220 80, 480 250, 760 140 C 1040 30, 1260 210, 1500 130"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              initial={reducedMotion ? false : { pathLength: 0, opacity: 0 }}
              animate={
                reducedMotion || processInView
                  ? { pathLength: 1, opacity: 1 }
                  : { pathLength: 0, opacity: 0 }
              }
              transition={{
                duration: reducedMotion ? 0 : 0.78,
                ease: EASE_OUT_EXPO,
              }}
            />
            <motion.path
              d="M-40 220 C 240 120, 500 290, 780 180 C 1060 70, 1280 240, 1500 170"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeDasharray="6 8"
              initial={reducedMotion ? false : { opacity: 0 }}
              animate={
                reducedMotion || processInView
                  ? { opacity: 0.65 }
                  : { opacity: 0 }
              }
              transition={{
                duration: reducedMotion ? 0 : 0.62,
                delay: reducedMotion ? 0 : 0.24,
                ease: EASE_OUT_EXPO,
              }}
            />
          </svg>
        </div>

        <Container className="relative z-10 max-w-[1440px] xl:max-w-[1520px]">
          {/* Section Header */}
          <div className="max-w-3xl mb-12 sm:mb-16">
            <SectionReveal>
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#2764F5] mb-3">
                <span className="h-0.5 w-5 rounded-full bg-[#2764F5]" aria-hidden="true" />
                <span>HOW WE WORK</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-[#141B2A] leading-tight mb-4">
                A structured, transparent workflow
              </h2>
              <p className="text-base sm:text-lg text-[#526581] leading-relaxed font-normal">
                From initial exploration to final deployment, we guide your project with clarity and consistent milestones.
              </p>
            </SectionReveal>
          </div>

          {/* Five Workflow Cards in a Single Horizontal Row on Desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 sm:gap-6 items-stretch">
            {service.process.map((step, idx) => (
              <motion.div
                key={step.step}
                initial={reducedMotion ? false : { opacity: 0, y: 24, scale: 0.985 }}
                animate={
                  reducedMotion || processInView
                    ? { opacity: 1, y: 0, scale: 1 }
                    : { opacity: 0, y: 24, scale: 0.985 }
                }
                transition={{
                  duration: reducedMotion ? 0 : 0.52,
                  delay: reducedMotion ? 0 : WORKFLOW_CARD_DELAY + idx * WORKFLOW_CARD_STAGGER,
                  ease: EASE_OUT_EXPO,
                }}
                className="h-full"
              >
                <div className="group relative flex h-full flex-col justify-between rounded-2xl sm:rounded-3xl border border-[#DFE7F3] bg-white p-6 sm:p-7 shadow-[0_4px_20px_rgba(16,27,45,0.035)] transition-all duration-300 hover:border-[#2764F5]/45 hover:shadow-[0_12px_28px_rgba(39,100,245,0.08)] hover:-translate-y-1">
                  <div>
                    {/* Card Header: Light-Blue Outlined Step Badge & Subtle Right-Arrow Decoration */}
                    <div className="mb-5 flex items-center justify-between gap-3">
                      <span className="inline-flex items-center rounded-lg border border-[#2764F5]/30 bg-[#EEF4FF]/70 px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-wider text-[#2764F5] shadow-2xs">
                        STEP {step.step}
                      </span>
                      <span
                        className="flex h-7 w-7 items-center justify-center rounded-full text-[#8E9AA8] transition-colors group-hover:text-[#2764F5]"
                        aria-hidden="true"
                      >
                        <ArrowRight size={15} />
                      </span>
                    </div>

                    {/* Step Title (Bold Dark Navy) */}
                    <h3 className="mb-2.5 font-heading text-lg font-bold leading-snug text-[#141B2A] transition-colors group-hover:text-[#2764F5]">
                      {step.title}
                    </h3>

                    {/* Step Description (Muted Blue-Gray) */}
                    <p className="text-[13.5px] leading-relaxed text-[#687386]">
                      {step.description}
                    </p>
                  </div>

                  {/* Subtle Bottom Accent Indicator */}
                  <div className="mt-6 pt-4 border-t border-[#F0F4F8]">
                    <div className="h-1 w-6 rounded-full bg-[#E2E8F0] transition-all duration-300 group-hover:w-12 group-hover:bg-[#2764F5]" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* ──────────────────────────────────────────────────────────
          6. Relevant Portfolio Showcase Feature
          ────────────────────────────────────────────────────────── */}
      {service.featuredProject && (
        <section className="section bg-white border-b border-[#E3E8F0]">
          <Container>
            <div className="rounded-3xl border border-[#DFE7F3] bg-[#F7F9FD] p-6 sm:p-10 lg:p-12 overflow-hidden shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                {/* Left Showcase Info */}
                <div className="lg:col-span-6 flex flex-col items-start gap-4">
                  <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#2764F5]">
                    <span className="h-0.5 w-5 rounded-full bg-[#2764F5]" aria-hidden="true" />
                    <span>{service.featuredProject.eyebrow}</span>
                  </div>

                  <h3 className="font-heading text-2xl sm:text-3xl font-bold tracking-tight text-[#141B2A] leading-snug">
                    {service.featuredProject.title}
                  </h3>

                  <p className="text-sm font-semibold text-[#2764F5]">
                    {service.featuredProject.tagline}
                  </p>

                  <p className="text-sm sm:text-base text-[#526581] leading-relaxed">
                    {service.featuredProject.description}
                  </p>

                  <div className="flex items-center gap-6 py-2">
                    <div>
                      <div className="font-heading text-2xl font-bold text-[#141B2A]">
                        {service.featuredProject.metric}
                      </div>
                      <div className="text-xs text-[#687386]">
                        {service.featuredProject.metricLabel}
                      </div>
                    </div>
                  </div>

                  <div className="pt-2">
                    <Link
                      to={service.featuredProject.link}
                      className="inline-flex items-center gap-2 font-semibold text-sm text-[#2764F5] hover:text-[#1E52D0] group"
                    >
                      <span>Explore this project</span>
                      <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>

                {/* Right Showcase Image */}
                <div className="lg:col-span-6">
                  <div className="relative overflow-hidden rounded-2xl border border-[#DFE7F3] bg-white shadow-md group">
                    <img
                      src={service.featuredProject.image}
                      alt={service.featuredProject.title}
                      className="w-full h-auto max-h-[360px] object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* ──────────────────────────────────────────────────────────
          7. Final Contact / Enquiry CTA Card
          ────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-[#F7F9FC]">
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
                  <span>START A PROJECT</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#111B36] mb-4">
                  {service.closingCta.headline}
                </h2>
                <p className="text-base sm:text-lg text-[#526581] leading-relaxed mb-8">
                  {service.closingCta.description}
                </p>

                {/* 3 Compact Trust Badges */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="flex items-center gap-3 bg-white/80 border border-[#DFE7F3] rounded-xl px-4 py-3">
                    <div className="w-8 h-8 rounded-lg bg-[#F5F9FF] border border-[#DFE7F3] flex items-center justify-center text-[#2864FF] shrink-0">
                      <Zap size={16} />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-[#111B36]">
                      Quick Response
                    </span>
                  </div>

                  <div className="flex items-center gap-3 bg-white/80 border border-[#DFE7F3] rounded-xl px-4 py-3">
                    <div className="w-8 h-8 rounded-lg bg-[#F5F9FF] border border-[#DFE7F3] flex items-center justify-center text-[#2864FF] shrink-0">
                      <ShieldCheck size={16} />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-[#111B36]">
                      Bespoke Craft
                    </span>
                  </div>

                  <div className="flex items-center gap-3 bg-white/80 border border-[#DFE7F3] rounded-xl px-4 py-3">
                    <div className="w-8 h-8 rounded-lg bg-[#F5F9FF] border border-[#DFE7F3] flex items-center justify-center text-[#2864FF] shrink-0">
                      <Target size={16} />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-[#111B36]">
                      Direct Leads
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="flex-shrink-0 flex items-center">
                <Button
                  to="/contact"
                  variant="primary"
                  size="lg"
                  iconRight={<ArrowRight size={18} />}
                  className="rounded-xl shadow-md hover:shadow-lg w-full sm:w-auto px-8 py-4 text-base"
                  id={`footer-cta-${service.slug}`}
                >
                  {service.closingCta.buttonText}
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ──────────────────────────────────────────────────────────
          8. Next / Previous Service Footer Navigation
          ────────────────────────────────────────────────────────── */}
      <section className="border-t border-[#E3E8F0] bg-white py-10 sm:py-12">
        <Container>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <Link
              to={`/services/${prevService.slug}`}
              className="group inline-flex items-center gap-2 rounded-sm text-sm font-semibold text-[#526581] transition-colors hover:text-[#2764F5]"
              id="prev-service-link"
            >
              <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
              <span>Prev: {prevService.title}</span>
            </Link>

            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#141B2A] hover:text-[#2764F5] transition-colors"
            >
              All 6 Services
            </Link>

            <Link
              to={`/services/${nextService.slug}`}
              className="group inline-flex items-center gap-2 rounded-sm text-sm font-semibold text-[#2764F5] transition-colors hover:text-[#1E52D0]"
              id="next-service-link"
            >
              <span>Next: {nextService.title}</span>
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
