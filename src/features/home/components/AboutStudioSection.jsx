import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'motion/react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { aboutStudioContent } from '../data/homeContent';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { useReducedMotionPreference } from '@/hooks/useReducedMotionPreference';

const EASE_OUT_EXPO = [0.22, 1, 0.36, 1];

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

  const ctaVariant = {
    hidden: { opacity: 0, y: 14 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, delay: 0.45, ease: EASE_OUT_EXPO },
    },
  };

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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Editorial Heading & Sequential Narrative */}
          <motion.div
            initial={reducedMotion ? false : 'hidden'}
            whileInView={reducedMotion ? undefined : 'visible'}
            viewport={scrollViewportConfig}
            className="lg:col-span-6 flex flex-col gap-6"
          >
            {/* Eyebrow with line reveal */}
            <div className="flex flex-col gap-3">
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
                {aboutStudioContent.heading}
              </motion.h2>

              <motion.p
                variants={paragraphVariant(0.18)}
                className="max-w-2xl text-base leading-relaxed sm:text-lg text-[#687386]"
              >
                {aboutStudioContent.description}
              </motion.p>
            </div>

            {/* Sequential Paragraphs */}
            <div className="flex flex-col gap-4 text-base text-[#687386] leading-relaxed pt-2">
              <motion.p variants={paragraphVariant(0.26)}>
                Rather than spreading ourselves thin across generic templates or bloated corporate processes, we hone in on five complementary disciplines: building responsive websites that convert, engineering intuitive mobile apps, designing striking posters and graphics, architecting digital UI/UX systems, and developing tailored custom business software.
              </motion.p>
              <motion.p variants={paragraphVariant(0.34)}>
                We operate as a compact, senior-level design and engineering studio. That means direct access to the designers and developers creating your work, with total transparency and craft at every stage.
              </motion.p>
            </div>

            {/* CTA Button */}
            <motion.div variants={ctaVariant} className="pt-2">
              <Button
                to="/about"
                variant="outline"
                size="md"
                iconRight={<ArrowRight size={15} />}
              >
                Learn More About Us
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Column: Studio Pillars & Highlights */}
          <motion.div
            initial={reducedMotion ? false : 'hidden'}
            whileInView={reducedMotion ? undefined : 'visible'}
            viewport={scrollViewportConfig}
            className="lg:col-span-6 flex flex-col gap-6"
          >
            {/* Cascading Principle Cards */}
            <div className="flex flex-col gap-5">
              {aboutStudioContent.pillars.map((pillar, idx) => (
                <motion.div
                  key={pillar.title}
                  variants={reducedMotion ? undefined : cardCascadeVariant(idx)}
                  whileHover={reducedMotion ? undefined : { y: -3, transition: { duration: 0.2 } }}
                  className="p-6 rounded-2xl bg-[#F7F9FC] border border-[#E3E8F0] hover:border-[#2764F5]/40 hover:shadow-md transition-all duration-200 shadow-xs"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <motion.span
                      variants={reducedMotion ? undefined : iconVariant(idx)}
                      className="flex h-6 w-6 items-center justify-center rounded-full bg-[#2764F5]/10 text-[#2764F5]"
                    >
                      <CheckCircle2 size={16} />
                    </motion.span>
                    <h3 className="font-heading text-lg font-bold text-[#141B2A]">
                      {pillar.title}
                    </h3>
                  </div>
                  <p className="text-sm leading-relaxed text-[#687386] pl-9">
                    {pillar.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Quick Stat Bar with subtle reveal & dynamic 0-to-target counter */}
            <motion.div
              ref={statsRef}
              variants={reducedMotion ? undefined : statPanelVariant}
              className="grid grid-cols-3 gap-4 p-5 rounded-2xl bg-[#101B2D] text-white shadow-md border border-[#273752]"
            >
              {aboutStudioContent.stats.map((stat, idx) => (
                <motion.div
                  key={stat.value}
                  variants={reducedMotion ? undefined : statItemVariant(idx)}
                  className="flex flex-col gap-1 text-center"
                >
                  <StatCounter
                    value={stat.value}
                    isInView={isStatsInView}
                    delay={0.25 + idx * 0.12}
                    duration={1.5}
                  />
                  <span className="text-[11px] text-[#CBD5E1] leading-tight">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
