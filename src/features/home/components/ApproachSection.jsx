import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Container } from '@/components/ui/Container';
import { processContent } from '../data/homeContent';
import { useReducedMotionPreference } from '@/hooks/useReducedMotionPreference';
import { Compass, Palette, Layers, CheckCircle2 } from 'lucide-react';

const EASE_OUT_EXPO = [0.22, 1, 0.36, 1];
const AUTO_PROGRESS_INTERVAL = 4000; // 4 seconds per step

const stepIcons = [Compass, Palette, Layers, CheckCircle2];

/**
 * ApproachSection — Our Process with Coordinated Scroll-Triggered Entrance
 * and Seamless Shared-Layer Step Transitions:
 *
 * Sequence on scroll into view:
 * 1. Eyebrow label slides up and fades in.
 * 2. Main heading with handwritten "ideas to life." reveals smoothly.
 * 3. Supporting description fades in.
 * 4. Step navigation pills settle into position.
 * 5. Four cards stagger in from left to right.
 * 6. Blue layered backing appears behind Card 01 (Discover).
 * 7. Entrance completes, initiating subtle 4-second automatic progression.
 */
export function ApproachSection() {
  const reducedMotion = useReducedMotionPreference();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.15, margin: '0px 0px -40px 0px' });

  const [activeStep, setActiveStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [entranceDone, setEntranceDone] = useState(false);
  const isEntranceDone = reducedMotion || entranceDone;

  const steps = processContent.steps;
  const totalSteps = steps.length;

  // Track completion of the staged entrance sequence (~1s total)
  useEffect(() => {
    if (!isInView || reducedMotion) return;

    const timer = setTimeout(() => {
      setEntranceDone(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, [isInView, reducedMotion]);

  // Automatic progression: 4s interval, runs only after entrance completes while in view
  useEffect(() => {
    if (!isInView || !isEntranceDone || isPaused || reducedMotion) return;

    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % totalSteps);
    }, AUTO_PROGRESS_INTERVAL);

    return () => clearInterval(timer);
  }, [isInView, isEntranceDone, isPaused, reducedMotion, totalSteps]);

  // Staged entrance animation variants
  const eyebrowVariant = {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: 0.06, ease: EASE_OUT_EXPO },
    },
  };

  const headingVariant = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: 0.18, ease: EASE_OUT_EXPO },
    },
  };

  const descriptionVariant = {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, delay: 0.3, ease: EASE_OUT_EXPO },
    },
  };

  const pillGroupVariant = {
    hidden: { opacity: 0, y: 14 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, delay: 0.36, ease: EASE_OUT_EXPO },
    },
  };

  const cardEntranceVariant = (idx) => ({
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.44 + idx * 0.12,
        ease: EASE_OUT_EXPO,
      },
    },
  });

  return (
    <section
      ref={sectionRef}
      id="process"
      aria-label="Our Process"
      className="section relative bg-[#F7F9FC] border-b border-[#E3E8F0] overflow-hidden py-20 sm:py-24 lg:py-28"
    >
      {/* Background Studio Gradients & Ambience */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        {/* Soft edge ambient glows */}
        <div className="absolute -top-32 -left-32 h-[480px] w-[480px] rounded-full bg-gradient-to-br from-[#2764F5]/6 via-[#35C5E8]/4 to-transparent blur-3xl" />
        <div className="absolute -bottom-36 -right-36 h-[500px] w-[500px] rounded-full bg-gradient-to-tl from-[#35C5E8]/6 via-[#2764F5]/4 to-transparent blur-3xl" />

        {/* Subtle architectural dot grid behind cards */}
        <svg
          className="absolute inset-0 w-full h-full text-[#2764F5]/[0.02]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="process-bg-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.2" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#process-bg-grid)" />
        </svg>
      </div>

      <Container className="relative z-10 max-w-[1360px]">
        {/* Left-Aligned Section Heading & Controls Row */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 sm:mb-14 lg:mb-16">
          <div className="max-w-2xl text-left">
            {/* 1. Eyebrow Label with Consistent Line-Dash Style */}
            <motion.div
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              variants={reducedMotion ? undefined : eyebrowVariant}
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#2764F5] mb-3"
            >
              <span className="h-0.5 w-5 rounded-full bg-[#2764F5]" aria-hidden="true" />
              <span>{processContent.eyebrow}</span>
            </motion.div>

            {/* 2. Main Heading with Handwritten Accent */}
            <motion.h2
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              variants={reducedMotion ? undefined : headingVariant}
              className="font-heading text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] font-bold text-[#141B2A] tracking-tight leading-[1.15]"
            >
              Here’s how we bring{' '}
              <span className="font-handwriting text-[#2764F5] text-[1.22em] sm:text-[1.28em] font-bold inline-block transform -rotate-2 ml-1 align-baseline">
                ideas to life.
              </span>
            </motion.h2>

            {/* 3. Supporting Text */}
            <motion.p
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              variants={reducedMotion ? undefined : descriptionVariant}
              className="text-base sm:text-lg text-[#687386] leading-relaxed mt-3 max-w-xl"
            >
              {processContent.description}
            </motion.p>
          </div>

          {/* 4. Quick Step Switcher Pills with Shared Animated Background Indicator */}
          <motion.div
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={reducedMotion ? undefined : pillGroupVariant}
            className="flex flex-wrap items-center gap-2 self-start lg:self-end shrink-0 p-1.5 rounded-full bg-white/80 backdrop-blur-xs border border-[#E3E8F0] shadow-xs"
          >
            {steps.map((step, idx) => {
              const isActive = activeStep === idx;
              return (
                <button
                  key={step.number}
                  type="button"
                  onClick={() => {
                    setActiveStep(idx);
                    setIsPaused(true);
                  }}
                  onMouseEnter={() => {
                    setActiveStep(idx);
                    setIsPaused(true);
                  }}
                  onFocus={() => setIsPaused(true)}
                  onBlur={() => setIsPaused(false)}
                  aria-pressed={isActive}
                  aria-label={`Go to ${step.step} ${step.phase}: ${step.title}`}
                  className="relative px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs font-semibold transition-colors duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2764F5]"
                >
                  {/* Shared Animated Pill Background */}
                  {isActive && (
                    <motion.div
                      layoutId="activeStepPillBg"
                      transition={{
                        type: 'spring',
                        stiffness: 380,
                        damping: 32,
                      }}
                      className="absolute inset-0 rounded-full bg-[#101B2D] shadow-xs"
                    />
                  )}

                  {/* Active Step Progress Line Fill (visual timer indicator) */}
                  {isActive && isEntranceDone && !isPaused && !reducedMotion && (
                    <motion.span
                      key={`progress-fill-${activeStep}`}
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: AUTO_PROGRESS_INTERVAL / 1000, ease: 'linear' }}
                      className="absolute bottom-1 left-3.5 right-3.5 h-[2px] bg-[#35C5E8] origin-left rounded-full pointer-events-none"
                    />
                  )}

                  <span className="relative z-10 flex items-center gap-2">
                    <span
                      className={`h-1.5 w-1.5 rounded-full transition-colors duration-200 ${
                        isActive ? 'bg-[#35C5E8]' : 'bg-[#94A3B8]'
                      }`}
                    />
                    <span className={isActive ? 'text-white' : 'text-[#64748B] hover:text-[#141B2A]'}>
                      {step.number} {step.phase}
                    </span>
                  </span>
                </button>
              );
            })}
          </motion.div>
        </div>

        {/* 5. Four Creative Process Cards with Shared Animated Overlapping Layer */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 xl:gap-8 items-stretch"
        >
          {steps.map((step, idx) => {
            const isActive = activeStep === idx;
            const Icon = stepIcons[idx] || Compass;

            return (
              <motion.div
                key={step.number}
                custom={idx}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                variants={reducedMotion ? undefined : cardEntranceVariant(idx)}
                whileHover={reducedMotion ? undefined : { y: isActive ? -8 : -5 }}
                transition={{ duration: 0.25, ease: EASE_OUT_EXPO }}
                className="relative group select-none"
                onClick={() => {
                  setActiveStep(idx);
                  setIsPaused(true);
                }}
                onMouseEnter={() => {
                  setActiveStep(idx);
                  setIsPaused(true);
                }}
                onFocus={() => setIsPaused(true)}
                onBlur={() => setIsPaused(false)}
                tabIndex={0}
                role="button"
                aria-pressed={isActive}
                aria-label={`${step.step} ${step.phase}: ${step.title}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setActiveStep(idx);
                    setIsPaused(true);
                  }
                }}
              >
                {/* 6. Shared Overlapping Blue Accent Layer — Appears smoothly on card 01 and glides between cards */}
                {isActive && (
                  <motion.div
                    layoutId="activeProcessCardBacking"
                    initial={isEntranceDone ? false : { opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={
                      reducedMotion
                        ? { duration: 0 }
                        : {
                            type: 'spring',
                            stiffness: 280,
                            damping: 28,
                            delay: isEntranceDone ? 0 : 0.95,
                          }
                    }
                    className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#2764F5] via-[#2058DE] to-[#35C5E8] pointer-events-none shadow-xl shadow-[#2764F5]/25 overflow-hidden translate-x-3.5 translate-y-3.5 rotate-[4.5deg]"
                    aria-hidden="true"
                  >
                    {/* Abstract glowing ambient orbs */}
                    <div className="absolute -top-12 -right-12 w-44 h-44 rounded-full bg-white/20 blur-xl" />
                    <div className="absolute -bottom-12 -left-12 w-44 h-44 rounded-full bg-[#35C5E8]/35 blur-xl" />
                    {/* Faint geometric pattern */}
                    <svg
                      className="absolute inset-0 w-full h-full text-white/10"
                      viewBox="0 0 200 200"
                      fill="currentColor"
                    >
                      <pattern id={`card-mesh-${idx}`} x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
                        <circle cx="2" cy="2" r="1.2" />
                      </pattern>
                      <rect width="200" height="200" fill={`url(#card-mesh-${idx})`} />
                    </svg>
                  </motion.div>
                )}

                {/* Front Card Layer — Smoothly elevates and highlights without layout shift */}
                <motion.article
                  animate={{
                    y: isActive ? -6 : 0,
                    borderColor: isActive ? '#2764F5' : '#E3E8F0',
                    boxShadow: isActive
                      ? '0 20px 40px -15px rgba(39, 100, 245, 0.22)'
                      : '0 2px 8px -2px rgba(16, 27, 45, 0.05)',
                  }}
                  transition={{ duration: 0.35, ease: EASE_OUT_EXPO }}
                  className="relative z-10 flex flex-col justify-between h-full min-h-[360px] sm:min-h-[380px] p-7 sm:p-8 rounded-3xl bg-white border cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-[#2764F5]"
                >
                  {/* Top Section: Step Indicator & Icon */}
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-6">
                      <span
                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider transition-colors duration-200 ${
                          isActive
                            ? 'bg-[#EEF4FF] text-[#2764F5] border border-[#2764F5]/30'
                            : 'bg-[#F7F9FC] text-[#687386] border border-[#E3E8F0]'
                        }`}
                      >
                        <span
                          className={`h-1.5 w-1.5 rounded-full transition-colors duration-200 ${
                            isActive ? 'bg-[#2764F5]' : 'bg-[#CBD5E1]'
                          }`}
                        />
                        {step.step} — {step.phase}
                      </span>

                      {/* Icon with subtle scale & spring transition */}
                      <motion.span
                        animate={{
                          backgroundColor: isActive ? '#2764F5' : '#EEF4FF',
                          color: isActive ? '#FFFFFF' : '#2764F5',
                          scale: isActive ? 1.05 : 1,
                        }}
                        whileHover={{ scale: 1.12, rotate: [0, -3, 3, 0] }}
                        transition={{ duration: 0.3 }}
                        className="flex h-10 w-10 items-center justify-center rounded-xl shadow-2xs"
                      >
                        <Icon size={19} />
                      </motion.span>
                    </div>

                    {/* Large Bold Card Title */}
                    <h3
                      className={`font-heading text-[22px] sm:text-[24px] font-bold tracking-tight leading-[1.22] transition-colors duration-200 ${
                        isActive ? 'text-[#141B2A]' : 'text-[#141B2A] group-hover:text-[#2764F5]'
                      }`}
                    >
                      {step.title}
                    </h3>
                  </div>

                  {/* Bottom Section: Description & Smooth Indicator Dot */}
                  <div className="mt-8 pt-5 border-t border-[#EEF2F6]">
                    <p className="text-[14px] sm:text-[14.5px] leading-relaxed text-[#687386] mb-4">
                      {step.description}
                    </p>

                    <div className="flex items-center justify-between text-xs text-[#8B95A5]">
                      <span className="font-medium">
                        Phase 0{idx + 1}
                      </span>
                      <motion.span
                        animate={{
                          backgroundColor: isActive ? '#2764F5' : '#CBD5E1',
                          scale: isActive ? 1.25 : 1,
                          boxShadow: isActive
                            ? '0 0 0 4px rgba(39, 100, 245, 0.18)'
                            : '0 0 0 0px transparent',
                        }}
                        transition={{ duration: 0.3 }}
                        className="h-2 w-2 rounded-full"
                      />
                    </div>
                  </div>
                </motion.article>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
