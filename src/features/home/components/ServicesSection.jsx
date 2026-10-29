import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { coreStudioServices, servicesSectionContent } from '../data/homeContent';
import { useReducedMotionPreference } from '@/hooks/useReducedMotionPreference';

// Preloaded real studio preview assets
import webPreview from '@/assets/showcase/service-web.jpg';
import mobilePreview from '@/assets/showcase/service-mobile.jpg';
import uiuxPreview from '@/assets/showcase/service-uiux.jpg';
import posterPreview from '@/assets/showcase/service-poster.jpg';
import softwarePreview from '@/assets/showcase/service-software.jpg';

const previewImages = {
  web: webPreview,
  mobile: mobilePreview,
  uiux: uiuxPreview,
  poster: posterPreview,
  software: softwarePreview,
};

const EASE_OUT_EXPO = [0.22, 1, 0.36, 1];

// Viewport trigger settings for scroll-based animations (triggers smoothly slightly ahead)
const scrollViewportConfig = {
  once: true,
  amount: 0.05,
  margin: '0px 0px 80px 0px',
};

/**
 * ServicesSection — Balanced 5-service layout with premium scroll animations.
 * Features:
 * - Editorial heading reveal with staggered line-reveal on eyebrow & link
 * - Cascading 100-140ms staggered card entrance
 * - Signature vertical mask / clip-path image uncover
 * - Premium hover interaction with subtle card raise and icon translation
 */
export function ServicesSection() {
  const reducedMotion = useReducedMotionPreference();

  // Heading reveal variants
  const headingVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, ease: EASE_OUT_EXPO },
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, x: -8 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, delay: 0.25, ease: EASE_OUT_EXPO },
    },
  };

  // Card cascading entrance variants
  const cardVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: custom * 0.08,
        ease: EASE_OUT_EXPO,
      },
    }),
  };

  // Silky-smooth GPU-accelerated curtain release reveal (avoids expensive clipPath re-rasterization on scroll)
  const imageCurtainVariants = {
    hidden: { scaleY: 1 },
    visible: (custom) => ({
      scaleY: 0,
      transition: {
        duration: 0.7,
        delay: custom * 0.08 + 0.12,
        ease: EASE_OUT_EXPO,
      },
    }),
  };

  const imageScaleVariants = {
    hidden: { scale: 1.08, opacity: 0.8 },
    visible: (custom) => ({
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: custom * 0.08 + 0.1,
        ease: EASE_OUT_EXPO,
      },
    }),
  };

  // Badges fade-in smoothly after release
  const badgeVariants = {
    hidden: { opacity: 0, y: -4 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        delay: custom * 0.08 + 0.3,
        ease: EASE_OUT_EXPO,
      },
    }),
  };

  return (
    <section id="services" className="section relative bg-white border-b border-[#E3E8F0] overflow-hidden">
      {/* Subtle Project-Themed Background Elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        {/* Soft corner atmospheric gradient washes */}
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-gradient-to-br from-[#2764F5]/4 via-[#35C5E8]/3 to-transparent blur-3xl" />
        <div className="absolute top-1/2 -right-32 h-[500px] w-[500px] rounded-full bg-gradient-to-bl from-[#35C5E8]/4 via-[#2764F5]/3 to-transparent blur-3xl" />
        <div className="absolute -bottom-32 left-1/3 h-96 w-96 rounded-full bg-[#2764F5]/3 blur-3xl" />

        {/* Oversized Subtle Slanted Quadrilateral (Left Edge) */}
        <svg
          className="absolute top-1/4 -left-28 w-[380px] h-[380px] text-[#2764F5]/[0.028] transform -rotate-6"
          viewBox="0 0 400 400"
          fill="none"
        >
          <path
            d="M 60 40 L 360 40 L 280 360 L 20 360 Z"
            stroke="currentColor"
            strokeWidth="24"
            strokeLinejoin="round"
          />
          <path
            d="M 120 100 L 340 100 L 280 320 L 80 320 Z"
            stroke="currentColor"
            strokeWidth="4"
            strokeDasharray="12 12"
          />
        </svg>

        {/* Oversized Brand Geometric Accent (Bottom Right Edge) */}
        <svg
          className="absolute -bottom-24 -right-24 w-[450px] h-[450px] text-[#35C5E8]/[0.035] transform rotate-45"
          viewBox="0 0 400 400"
          fill="none"
        >
          <rect x="60" y="60" width="280" height="280" rx="48" stroke="currentColor" strokeWidth="20" />
          <rect x="100" y="100" width="200" height="200" rx="36" stroke="currentColor" strokeWidth="2" strokeDasharray="8 8" />
        </svg>
      </div>

      <Container className="relative z-10">
        {/* Section Header with Editorial Text Reveal */}
        <motion.div
          initial={reducedMotion ? false : 'hidden'}
          whileInView={reducedMotion ? undefined : 'visible'}
          viewport={scrollViewportConfig}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14"
        >
          <motion.div variants={headingVariants}>
            <SectionHeading
              eyebrow={servicesSectionContent.eyebrow}
              heading={servicesSectionContent.heading}
              description={servicesSectionContent.description}
              align="left"
              theme="light"
            />
          </motion.div>
          <motion.div variants={linkVariants} className="self-start md:self-end pb-1">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#2764F5] hover:text-[#1E52D0] transition-colors group"
            >
              <span>Explore all services</span>
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </motion.div>

        {/* 5-Service Grid with Staggered Cascading Reveal */}
        <motion.div
          initial={reducedMotion ? false : 'hidden'}
          whileInView={reducedMotion ? undefined : 'visible'}
          viewport={scrollViewportConfig}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8"
        >
          {coreStudioServices.map((service, idx) => {
            const Icon = service.icon;
            const previewImg = previewImages[service.imageKey];

            // Layout mapping: first 3 cards span 2 cols on lg. Last 2 cards span 3 cols.
            const colSpanClass =
              idx < 3
                ? 'lg:col-span-2'
                : 'lg:col-span-3 md:col-span-1 lg:max-w-none';

            return (
              <motion.div
                key={service.slug}
                custom={idx}
                variants={reducedMotion ? undefined : cardVariants}
                className={`${colSpanClass} flex flex-col`}
              >
                <article className="group flex flex-col h-full rounded-2xl bg-[#FFFFFF] border border-[#E3E8F0] hover:border-[#2764F5]/50 transition-all duration-300 shadow-xs hover:shadow-xl hover:-translate-y-1 overflow-hidden">
                  <Link
                    to={service.link}
                    className="flex flex-col flex-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2764F5] rounded-2xl"
                    aria-label={`Learn more about ${service.title}`}
                  >
                    {/* Visual Real Preview with smooth GPU-accelerated reveal curtain */}
                    <div
                      className={`relative w-full overflow-hidden bg-[#101B2D] ${
                        idx >= 3 ? 'aspect-[16/9]' : 'aspect-[16/10]'
                      }`}
                    >
                      <motion.div
                        custom={idx}
                        variants={reducedMotion ? undefined : imageScaleVariants}
                        className="h-full w-full will-change-transform"
                      >
                        <img
                          src={previewImg}
                          alt={`${service.title} preview showcase`}
                          decoding="async"
                          loading={idx < 2 ? 'eager' : 'lazy'}
                          className="h-full w-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-103"
                        />
                      </motion.div>

                      {/* Smooth curtain reveal overlay */}
                      {!reducedMotion && (
                        <motion.div
                          custom={idx}
                          variants={imageCurtainVariants}
                          style={{ originY: 0 }}
                          className="absolute inset-0 bg-[#101B2D] pointer-events-none will-change-transform z-1"
                        />
                      )}

                      {/* Category Badge overlay */}
                      <motion.div
                        custom={idx}
                        variants={reducedMotion ? undefined : badgeVariants}
                        className="absolute top-4 left-4 z-2"
                      >
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-xs text-[11px] font-bold uppercase tracking-wider text-[#101B2D] shadow-xs">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#2764F5]" />
                          {service.badge}
                        </span>
                      </motion.div>

                      {/* Number Tag */}
                      <motion.div
                        custom={idx}
                        variants={reducedMotion ? undefined : badgeVariants}
                        className="absolute top-4 right-4 z-2"
                      >
                        <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-[#101B2D]/85 backdrop-blur-xs text-xs font-mono font-bold text-white">
                          {service.number}
                        </span>
                      </motion.div>
                    </div>

                    {/* Card Content */}
                    <div className="flex flex-col flex-1 justify-between p-6 sm:p-7 gap-6">
                      <div className="flex flex-col gap-3">
                        <div className="flex items-center gap-2.5">
                          <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[#2764F5]/10 text-[#2764F5] shrink-0">
                            <Icon size={18} aria-hidden="true" />
                          </span>
                          <span className="text-[11px] font-bold uppercase tracking-wider text-[#687386]">
                            {service.category}
                          </span>
                        </div>

                        <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#141B2A] group-hover:text-[#2764F5] transition-colors leading-snug">
                          {service.title}
                        </h3>

                        <p className="text-sm leading-relaxed text-[#687386]">
                          {service.shortDescription}
                        </p>

                        {/* Capabilities Bullet points */}
                        <ul className="flex flex-col gap-2 pt-2">
                          {service.capabilities.map((cap) => (
                            <li key={cap} className="flex items-start gap-2 text-xs font-medium text-[#141B2A]">
                              <span className="h-1.5 w-1.5 rounded-full bg-[#35C5E8] shrink-0 mt-1.5" />
                              <span className="leading-snug">{cap}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Action Link Footer with directional arrow hover interaction */}
                      <div className="pt-4 border-t border-[#E3E8F0] flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#2764F5] group-hover:text-[#1E52D0]">
                        <span>Explore Service</span>
                        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#2764F5]/10 group-hover:bg-[#2764F5] group-hover:text-white transition-all transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                          <ArrowUpRight size={14} />
                        </div>
                      </div>
                    </div>
                  </Link>
                </article>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
