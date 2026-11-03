import { useRef, useState, useEffect, useCallback } from 'react';
import { motion, useInView } from 'motion/react';
import { Container } from '@/components/ui/Container';
import { aboutStudioContent } from '../data/homeContent';
import {
  Palette,
  Code2,
  Users2,
  Clock,
} from 'lucide-react';
import { useReducedMotionPreference } from '@/hooks/useReducedMotionPreference';

const EASE_OUT_EXPO = [0.22, 1, 0.36, 1];

const pillarDetails = [
  {
    icon: Palette,
    tag: '01 // INTENT',
    chip: 'Precision Typography • Zero Clutter',
  },
  {
    icon: Code2,
    tag: '02 // CRAFT',
    chip: 'Accessible Code • High Performance',
  },
  {
    icon: Users2,
    tag: '03 // ACCESS',
    chip: 'Direct Senior Access • Zero Middlemen',
  },
];

const scrollViewportConfig = {
  once: true,
  amount: 0.1,
  margin: '0px 0px -40px 0px',
};

function parseStatValue(val) {
  const match = String(val).match(/^(\d+)(.*)$/);
  if (!match) return { num: 0, suffix: val };
  return { num: parseInt(match[1], 10), suffix: match[2] };
}

function StatCounter({ value, isInView, delay = 0, duration = 1.6 }) {
  const [count, setCount] = useState(0);
  const { num, suffix } = parseStatValue(value);
  const reducedMotion = useReducedMotionPreference();
  const displayCount = reducedMotion ? num : count;

  useEffect(() => {
    if (reducedMotion || !isInView) return;

    let startTimestamp = null;
    let animationFrameId;

    const timeoutId = setTimeout(() => {
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const elapsed = (timestamp - startTimestamp) / 1000;
        const progress = Math.min(elapsed / duration, 1);

        // Smooth easeOutExpo: 1 - 2^(-10 * progress)
        const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        const current = Math.round(easeProgress * num);

        setCount(current);

        if (progress < 1) {
          animationFrameId = requestAnimationFrame(step);
        }
      };

      animationFrameId = requestAnimationFrame(step);
    }, delay * 1000);

    return () => {
      clearTimeout(timeoutId);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [isInView, num, duration, delay, reducedMotion]);

  return (
    <span className="font-heading text-2xl sm:text-3xl font-bold text-[#35C5E8] tabular-nums">
      {displayCount}
      {suffix}
    </span>
  );
}

/**
 * AboutStudioSection — Clear, approachable brand voice with premium scroll animations.
 * Introduces NEXZIVO as a creative digital studio combining thoughtful design,
 * useful technology, and creative problem-solving.
 */
export function AboutStudioSection() {
  const reducedMotion = useReducedMotionPreference();
  const statsRef = useRef(null);
  const isStatsInView = useInView(statsRef, { once: true, amount: 0.2 });
  const [hoveredCardIdx, setHoveredCardIdx] = useState(null);

  const handleCardMouseMove = useCallback((e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty('--card-x', `${x}px`);
    e.currentTarget.style.setProperty('--card-y', `${y}px`);
  }, []);

  // Left column animations
  const eyebrowVariant = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: EASE_OUT_EXPO },
    },
  };

  const lineDrawVariant = {
    hidden: { width: 0, opacity: 0 },
    visible: {
      width: '1.25rem',
      opacity: 1,
      transition: { duration: 0.45, delay: 0.1, ease: EASE_OUT_EXPO },
    },
  };

  const headingVariant = {
    hidden: { opacity: 0, y: 22 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, delay: 0.1, ease: EASE_OUT_EXPO },
    },
  };

  const paragraphVariant = (delay = 0) => ({
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay, ease: EASE_OUT_EXPO },
    },
  });

  // Right column principle card cascade variants (140ms stagger)
  const cardCascadeVariant = (index) => ({
    hidden: { opacity: 0, y: 22, x: 8 },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.65,
        delay: 0.15 + index * 0.14,
        ease: EASE_OUT_EXPO,
      },
    },
  });

  // Icon reveal variant
  const iconVariant = (index) => ({
    hidden: { opacity: 0, scale: 0.75 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        delay: 0.25 + index * 0.14,
        ease: EASE_OUT_EXPO,
      },
    },
  });

  // Statistics panel variants
  const statPanelVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: 0.55, ease: EASE_OUT_EXPO },
    },
  };

  const statItemVariant = (index) => ({
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.45,
        delay: 0.65 + index * 0.1,
        ease: EASE_OUT_EXPO,
      },
    },
  });

  return (
    <section id="about" className="section relative bg-[#FAFBFD] border-b border-[#E3E8F0] overflow-hidden">
      {/* Distinctive Digital Studio & Craft Background Treatment */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        {/* Subtle Architectural / Digital Studio Precision Grid Pattern */}
        <svg
          className="absolute inset-0 w-full h-full text-[#2764F5]/[0.025]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="about-studio-grid" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="currentColor" strokeWidth="1" />
              <circle cx="0" cy="0" r="1.5" fill="currentColor" opacity="0.6" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#about-studio-grid)" />
        </svg>

        {/* Soft Ambient Corner Vignettes */}
        <div className="absolute -top-32 -left-32 h-[520px] w-[520px] rounded-full bg-gradient-to-br from-[#2764F5]/6 via-[#35C5E8]/4 to-transparent blur-3xl" />
        <div className="absolute -bottom-36 -right-36 h-[560px] w-[560px] rounded-full bg-gradient-to-tl from-[#35C5E8]/6 via-[#2764F5]/4 to-transparent blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-white/70 blur-2xl" />

        {/* Dynamic Studio Wave Ribbon / Flow Path (Left to Right Edge) */}
        <svg
          className="absolute top-10 -left-16 w-[560px] h-[560px] text-[#2764F5]/[0.035]"
          viewBox="0 0 600 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 50 150 C 200 80, 350 320, 550 220"
            stroke="currentColor"
            strokeWidth="32"
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

        {/* Subtle Tech Calibration Crosshairs (Top Right Margin) */}
        <div className="absolute top-16 right-12 hidden lg:flex flex-col gap-8 text-[#2764F5]/20 select-none">
          <div className="font-mono text-[10px] tracking-widest uppercase">
            + 01 // CRAFT
          </div>
          <div className="font-mono text-[10px] tracking-widest uppercase">
            + 02 // SYSTEMS
          </div>
        </div>
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left Column: Editorial Heading & Narrative + Stats Bar */}
          <motion.div
            initial={reducedMotion ? false : 'hidden'}
            whileInView={reducedMotion ? undefined : 'visible'}
            viewport={scrollViewportConfig}
            className="lg:col-span-6 flex flex-col justify-between gap-6"
          >
            {/* Top Narrative Block */}
            <div className="flex flex-col gap-3.5">
              {/* Eyebrow with line reveal */}
              <div className="flex flex-col gap-2.5">
                <motion.div variants={eyebrowVariant} className="inline-flex items-center gap-2">
                  <motion.span
                    variants={lineDrawVariant}
                    className="h-0.5 rounded-full bg-[#2764F5]"
                    aria-hidden="true"
                  />
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2764F5]">
                    {aboutStudioContent.eyebrow}
                  </span>
                </motion.div>

                <motion.h2
                  variants={headingVariant}
                  className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl text-[#141B2A]"
                >
                  <span className="hover:text-[#2764F5] transition-colors duration-200">Thoughtful design.</span>{' '}
                  <span className="hover:text-[#0284C7] transition-colors duration-200">Useful technology.</span>{' '}
                  <span className="hover:text-[#101B2D] transition-colors duration-200">Creative problem-solving.</span>
                </motion.h2>

                <motion.p
                  variants={paragraphVariant(0.18)}
                  className="text-base leading-relaxed sm:text-lg text-[#475569] mt-0.5"
                >
                  {aboutStudioContent.description}
                </motion.p>
              </div>

              {/* Simplified Narrative */}
              <motion.p
                variants={paragraphVariant(0.26)}
                className="text-sm sm:text-base text-[#687386] leading-relaxed"
              >
                We work directly with founders and businesses without unnecessary jargon, generic templates, or corporate clutter—just thoughtful design, clean code, and transparent collaboration from start to finish.
              </motion.p>
            </div>

            {/* Quick Stat Bar (Relocated to Left Side for Perfect Grid Balance) */}
            <motion.div
              ref={statsRef}
              variants={reducedMotion ? undefined : statPanelVariant}
              className="relative grid grid-cols-3 gap-2 sm:gap-4 p-5 sm:p-5.5 rounded-2xl bg-[#0F172A] text-white shadow-lg border border-[#23354E] hover:border-[#35C5E8]/60 hover:shadow-[0_20px_45px_-10px_rgba(53,197,232,0.22)] transition-all duration-400 overflow-hidden"
            >
              {/* Ambient background glow inside stats bar */}
              <div className="pointer-events-none absolute -top-12 -left-12 h-36 w-36 rounded-full bg-[#2764F5]/20 blur-2xl" />
              <div className="pointer-events-none absolute -bottom-12 -right-12 h-36 w-36 rounded-full bg-[#35C5E8]/20 blur-2xl" />

              {aboutStudioContent.stats.map((stat, idx) => (
                <motion.div
                  key={stat.value}
                  variants={reducedMotion ? undefined : statItemVariant(idx)}
                  className="group/stat relative z-10 flex flex-col items-center justify-between gap-1.5 text-center p-2 rounded-xl hover:bg-white/[0.04] transition-colors duration-200"
                >
                  <StatCounter
                    value={stat.value}
                    isInView={isStatsInView}
                    delay={0.25 + idx * 0.12}
                    duration={1.5}
                  />
                  <span className="text-[11px] sm:text-xs text-[#CBD5E1] leading-tight font-medium">
                    {stat.label}
                  </span>

                  {/* Interactive Micro-Widget below each stat */}
                  {idx === 0 && (
                    <div className="flex items-center gap-1 h-3 mt-0.5">
                      {[0.4, 0.8, 1, 0.6, 0.9].map((h, i) => (
                        <span
                          key={i}
                          className="w-1 bg-[#35C5E8] rounded-full group-hover/stat:bg-white transition-colors"
                          style={{
                            height: `${h * 12}px`,
                            animation: `pulse 1.4s ease-in-out infinite`,
                            animationDelay: `${i * 150}ms`,
                          }}
                        />
                      ))}
                    </div>
                  )}

                  {idx === 1 && (
                    <div className="flex items-center gap-1 text-[10px] font-mono text-[#00D2BA] mt-0.5">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00D2BA] opacity-75" />
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#00D2BA]" />
                      </span>
                      <span className="group-hover/stat:text-white transition-colors">Handcrafted</span>
                    </div>
                  )}

                  {idx === 2 && (
                    <div className="flex items-center gap-1 text-[10px] font-mono text-[#35C5E8] mt-0.5">
                      <Clock size={11} className="group-hover/stat:rotate-180 transition-transform duration-700 text-[#35C5E8]" />
                      <span className="group-hover/stat:text-white transition-colors">Fast SLA</span>
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column: Studio Pillars (Full Height Balanced Grid) */}
          <motion.div
            initial={reducedMotion ? false : 'hidden'}
            whileInView={reducedMotion ? undefined : 'visible'}
            viewport={scrollViewportConfig}
            className="lg:col-span-6 flex flex-col justify-between gap-4 h-full"
            onMouseLeave={() => setHoveredCardIdx(null)}
          >
            {aboutStudioContent.pillars.map((pillar, idx) => {
              const detail = pillarDetails[idx] || pillarDetails[0];
              const Icon = detail.icon;
              const isHovered = hoveredCardIdx === idx;
              const isSiblingHovered = hoveredCardIdx !== null && !isHovered;

              return (
                <motion.div
                  key={pillar.title}
                  variants={reducedMotion ? undefined : cardCascadeVariant(idx)}
                  onMouseEnter={() => setHoveredCardIdx(idx)}
                  onMouseMove={handleCardMouseMove}
                  className={`group relative flex-1 p-5 sm:p-6 rounded-2xl bg-white border border-[#E3E8F0] shadow-xs hover:border-[#2764F5]/50 hover:shadow-[0_16px_36px_-8px_rgba(39,100,245,0.12)] hover:-translate-y-1 transition-all duration-300 ease-out overflow-hidden cursor-default text-left flex flex-col justify-between ${
                    isSiblingHovered ? 'opacity-70 scale-[0.99]' : 'opacity-100 scale-100'
                  }`}
                >
                  {/* Architectural Precision Corner Reticles (CAD Crosshairs) */}
                  <span className="pointer-events-none absolute top-2.5 left-2.5 w-2 h-2 border-t-2 border-l-2 border-[#2764F5] rounded-tl-xs opacity-0 group-hover:opacity-100 -translate-x-1 -translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 ease-out" />
                  <span className="pointer-events-none absolute top-2.5 right-2.5 w-2 h-2 border-t-2 border-r-2 border-[#2764F5] rounded-tr-xs opacity-0 group-hover:opacity-100 translate-x-1 -translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 ease-out" />
                  <span className="pointer-events-none absolute bottom-2.5 left-2.5 w-2 h-2 border-b-2 border-l-2 border-[#2764F5] rounded-bl-xs opacity-0 group-hover:opacity-100 -translate-x-1 translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 ease-out" />
                  <span className="pointer-events-none absolute bottom-2.5 right-2.5 w-2 h-2 border-b-2 border-r-2 border-[#2764F5] rounded-br-xs opacity-0 group-hover:opacity-100 translate-x-1 translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 ease-out" />

                  {/* Left Expanding Gradient Rail Accent */}
                  <div className="absolute top-3 bottom-3 left-0 w-1 bg-gradient-to-b from-[#2764F5] via-[#35C5E8] to-[#2764F5] scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top rounded-r-full" />

                  {/* Top Subtle Glow Line */}
                  <div className="absolute top-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-[#2764F5]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Dynamic Spotlight Highlight */}
                  <div
                    className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[inherit]"
                    style={{
                      background:
                        'radial-gradient(350px circle at var(--card-x, 50%) var(--card-y, 50%), rgba(39, 100, 245, 0.08), transparent 70%)',
                    }}
                  />

                  <div>
                    {/* Header */}
                    <div className="relative z-10 flex items-start justify-between gap-3 mb-2">
                      <div className="flex items-center gap-3">
                        <motion.div
                          variants={reducedMotion ? undefined : iconVariant(idx)}
                          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#EEF4FF] text-[#2764F5] border border-[#DCE4F0] group-hover:bg-gradient-to-br group-hover:from-[#2764F5] group-hover:to-[#1641C2] group-hover:text-white group-hover:scale-110 group-hover:-rotate-3 group-hover:shadow-[0_8px_18px_-3px_rgba(39,100,245,0.38)] group-hover:border-transparent transition-all duration-300 ease-out"
                        >
                          <Icon size={18} className="transition-transform duration-300 group-hover:scale-105" />
                        </motion.div>
                        <h3 className="font-heading text-base sm:text-lg font-bold text-[#141B2A] group-hover:text-[#2764F5] transition-colors leading-snug">
                          {pillar.title}
                        </h3>
                      </div>

                      <span className="text-[10px] font-mono font-bold tracking-wider text-[#8E9AA8] group-hover:text-[#2764F5] group-hover:bg-[#EEF4FF] px-2 py-0.5 rounded border border-transparent group-hover:border-[#DCE4F0] transition-all shrink-0">
                        {detail.tag}
                      </span>
                    </div>

                    <p className="relative z-10 text-xs sm:text-[13.5px] leading-relaxed text-[#687386] group-hover:text-[#475569] transition-colors pl-12">
                      {pillar.description}
                    </p>
                  </div>

                  {/* Feature Chip Tag */}
                  <div className="relative z-10 mt-2.5 pl-12 flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 text-[10.5px] font-mono font-semibold text-[#8E9AA8] group-hover:text-[#2764F5] transition-colors">
                      <span className="h-1 w-1 rounded-full bg-[#2764F5] opacity-0 group-hover:opacity-100 transition-opacity" />
                      {detail.chip}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
