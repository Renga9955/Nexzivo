import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Globe,
  Code2,
  Sparkles,
  Zap,
  ShieldCheck,
  Target,
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
} from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { visionMissionContent } from '../data/homeContent';
import { useReducedMotionPreference } from '@/hooks/useReducedMotionPreference';

// Generated custom high-res bright creative studio photography assets
import visionShowcaseImg from '@/assets/showcase/vision-studio-showcase.jpg';
import missionShowcaseImg from '@/assets/showcase/mission-studio-showcase.jpg';

const EASE_OUT_EXPO = [0.22, 1, 0.36, 1];
const SLIDE_DURATION = 7000; // Exact 7-second rotation as requested

const principleIcons = {
  globe: Globe,
  code: Code2,
  sparkles: Sparkles,
  zap: Zap,
  shield: ShieldCheck,
  target: Target,
};

/**
 * VisionMissionSection (Refined & Compact with Professional Micro-Interactions)
 * - Container: tight 1100–1250px container with balanced vertical padding
 * - Header: Animated sliding pill switcher (Framer Motion layoutId) + live 7s auto-cycle progress bar
 * - Left Panel (58%): Interactive cursor spotlight, image hover sheen & zoom, live radar beacon, typo fixed
 * - Right Panel (42%): 3 compact principle cards with dynamic cursor spotlight, vertical expanding gradient bar,
 *   icon 3D micro-tilt & bloom shadow, index watermark, and ArrowUpRight transition
 * - Background: Architectural blueprint orbital rings and crosshairs with ultra-slow rotation
 */
export function VisionMissionSection() {
  const reducedMotion = useReducedMotionPreference();
  const [currentSlide, setCurrentSlide] = useState('vision'); // 'vision' | 'mission'
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState(1); // 1 = forward, -1 = backward
  const timerRef = useRef(null);
  const leftCardRef = useRef(null);

  const activeContent = visionMissionContent[currentSlide];
  const isVision = currentSlide === 'vision';

  const goToSlide = useCallback((targetSlide, dir = 1) => {
    setDirection(dir);
    setCurrentSlide(targetSlide);
  }, []);

  const toggleSlide = useCallback(() => {
    const next = currentSlide === 'vision' ? 'mission' : 'vision';
    goToSlide(next, next === 'mission' ? 1 : -1);
  }, [currentSlide, goToSlide]);

  // Exact 7-second automatic carousel rotation with hover/focus pause & cleanup
  useEffect(() => {
    if (reducedMotion || isPaused) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      toggleSlide();
    }, SLIDE_DURATION);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [toggleSlide, isPaused, reducedMotion]);

  // Lightweight spotlight tracking on hover
  const handleCardMouseMove = useCallback((e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
  }, []);

  // Coordinated slide transition variants
  const slideVariants = {
    initial: (dir) => ({
      opacity: 0,
      x: dir > 0 ? 18 : -18,
    }),
    animate: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.45, ease: EASE_OUT_EXPO },
    },
    exit: (dir) => ({
      opacity: 0,
      x: dir > 0 ? -18 : 18,
      transition: { duration: 0.25, ease: 'easeIn' },
    }),
  };

  const cardVariants = {
    initial: { opacity: 0, y: 12 },
    animate: (idx) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.38, delay: idx * 0.07, ease: EASE_OUT_EXPO },
    }),
  };

  return (
    <section
      id="vision-mission"
      aria-label="Our Vision and Our Mission"
      className="relative bg-[#FAFBFC] border-b border-[#E3E8F0] py-10 sm:py-12 lg:py-14 overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      <style>{`
        @keyframes visionProgressFill {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>

      {/* Restrained Architectural Background Atmosphere */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden flex items-center justify-center" aria-hidden="true">
        {/* Soft blue gradient washes */}
        <div className="absolute -top-24 -left-24 h-[420px] w-[420px] rounded-full bg-gradient-to-br from-[#2764F5]/5 via-[#35C5E8]/4 to-transparent blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-[440px] w-[440px] rounded-full bg-gradient-to-tl from-[#2764F5]/4 via-[#35C5E8]/3 to-transparent blur-3xl" />

        {/* Blueprint Orbital Rings */}
        <div className="absolute w-[820px] h-[820px] rounded-full border border-dashed border-[#2764F5]/[0.05] animate-[spin_140s_linear_infinite]" />
        <div className="absolute w-[580px] h-[580px] rounded-full border border-[#2764F5]/[0.035]" />
        <div className="absolute w-[360px] h-[360px] rounded-full border border-dashed border-[#35C5E8]/[0.05] animate-[spin_90s_linear_infinite_reverse]" />

        {/* Studio grid crosshairs */}
        <div className="absolute w-[860px] h-px bg-gradient-to-r from-transparent via-[#2764F5]/[0.04] to-transparent" />
        <div className="absolute h-[860px] w-px bg-gradient-to-b from-transparent via-[#2764F5]/[0.04] to-transparent" />
      </div>

      <Container className="relative z-10 max-w-[1240px]">
        {/* Compact Header & Vision/Mission Carousel Controls */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6 sm:mb-7">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#2764F5] mb-2">
              <span className="h-0.5 w-5 rounded-full bg-[#2764F5]" aria-hidden="true" />
              <span>Studio Purpose &amp; Direction</span>
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#141B2A] tracking-tight leading-tight">
              {activeContent.heading}
            </h2>
            <p className="text-xs sm:text-sm text-[#687386] mt-0.5 max-w-xl">
              {activeContent.subtitle}
            </p>
          </div>

          {/* Compact Carousel Pill Controls & Manual Arrow Buttons */}
          <div className="flex items-center gap-3 self-start sm:self-end shrink-0">
            {/* Live Progress Bar Indicator */}
            <div className="hidden sm:flex items-center gap-2 text-[11px] font-mono text-[#8E9AA8] mr-1">
              <div className="w-14 h-1 rounded-full bg-[#E3E8F0] overflow-hidden relative">
                <div
                  key={`${currentSlide}-${isPaused}`}
                  className="h-full bg-gradient-to-r from-[#2764F5] to-[#35C5E8] rounded-full"
                  style={{
                    animation: `visionProgressFill ${SLIDE_DURATION}ms linear forwards`,
                    animationPlayState: isPaused ? 'paused' : 'running',
                  }}
                />
              </div>
              <span className="text-[10px] uppercase font-bold tracking-wider text-[#687386]">
                {isVision ? '01 / 02' : '02 / 02'}
              </span>
            </div>

            <motion.button
              type="button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleSlide}
              aria-label="Previous slide"
              className="p-1.5 rounded-lg bg-white border border-[#E3E8F0] text-[#687386] hover:text-[#141B2A] hover:border-[#2764F5]/40 transition-colors cursor-pointer shadow-2xs"
            >
              <ChevronLeft size={15} />
            </motion.button>

            {/* Segmented 2-option switcher with smooth sliding pill */}
            <div className="relative inline-flex items-center p-0.5 rounded-xl bg-white border border-[#DCE4F0] shadow-2xs">
              <button
                type="button"
                onClick={() => goToSlide('vision', -1)}
                className={`relative px-3.5 py-1 rounded-lg text-xs font-bold transition-colors duration-200 cursor-pointer z-10 ${
                  isVision ? 'text-white' : 'text-[#687386] hover:text-[#141B2A]'
                }`}
                aria-pressed={isVision}
              >
                {isVision && (
                  <motion.div
                    layoutId="activeVisionMissionPill"
                    transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                    className="absolute inset-0 bg-[#101B2D] rounded-lg shadow-2xs -z-10"
                  />
                )}
                Our Vision
              </button>
              <button
                type="button"
                onClick={() => goToSlide('mission', 1)}
                className={`relative px-3.5 py-1 rounded-lg text-xs font-bold transition-colors duration-200 cursor-pointer z-10 ${
                  !isVision ? 'text-white' : 'text-[#687386] hover:text-[#141B2A]'
                }`}
                aria-pressed={!isVision}
              >
                {!isVision && (
                  <motion.div
                    layoutId="activeVisionMissionPill"
                    transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                    className="absolute inset-0 bg-[#101B2D] rounded-lg shadow-2xs -z-10"
                  />
                )}
                Our Mission
              </button>
            </div>

            <motion.button
              type="button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleSlide}
              aria-label="Next slide"
              className="p-1.5 rounded-lg bg-white border border-[#E3E8F0] text-[#687386] hover:text-[#141B2A] hover:border-[#2764F5]/40 transition-colors cursor-pointer shadow-2xs"
            >
              <ChevronRight size={15} />
            </motion.button>
          </div>
        </div>

        {/* Balanced Two-Column Content Layout (approx. 58% Left, 42% Right) */}
        <div className="relative">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={activeContent.id}
              custom={direction}
              variants={reducedMotion ? undefined : slideVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-stretch"
            >
              {/* Left Column (58%): Purpose-built Bright Studio Visual + Dynamic Spotlight + Contextual Label + Statement */}
              <div
                ref={leftCardRef}
                onMouseMove={handleCardMouseMove}
                className="group relative lg:col-span-7 flex flex-col justify-between p-5 sm:p-6 rounded-2xl bg-white border border-[#E3E8F0] shadow-[0_4px_20px_-4px_rgba(16,27,45,0.06)] hover:border-[#2764F5]/50 hover:shadow-[0_16px_36px_-6px_rgba(39,100,245,0.1)] transition-all duration-300 overflow-hidden"
              >
                {/* Dynamic Cursor Spotlight Overlay */}
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[inherit]"
                  style={{
                    background:
                      'radial-gradient(550px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(39, 100, 245, 0.08), transparent 70%)',
                  }}
                />

                {/* Top illuminated expanding gradient accent */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#2764F5] to-transparent opacity-0 group-hover:opacity-100 scale-x-0 group-hover:scale-x-100 transition-all duration-500 origin-center rounded-t-2xl" />

                <div className="relative z-10">
                  {/* Reduced height image container with glossy sheen sweep */}
                  <div className="group/img relative w-full h-[180px] sm:h-[210px] md:h-[230px] rounded-xl overflow-hidden bg-[#F2F4F7] border border-[#E3E8F0] shadow-2xs">
                    <img
                      src={isVision ? visionShowcaseImg : missionShowcaseImg}
                      alt={
                        isVision
                          ? 'NEXZIVO Creative Studio Workspace — Website UI, responsive mobile design, and graphic design poster'
                          : 'NEXZIVO Digital Product Creation — Business dashboard interface, companion mobile app, and wireframes'
                      }
                      decoding="async"
                      className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover/img:scale-[1.04]"
                    />

                    {/* Glossy light sheen sweep on hover */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover/img:translate-x-full transition-transform duration-1000 ease-in-out" />

                    {/* Live Radar Beacon Badge */}
                    <div className="absolute top-2.5 left-2.5 z-10">
                      <span className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-white/95 backdrop-blur-xs text-[11px] font-bold text-[#101B2D] shadow-xs border border-white/80">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2764F5] opacity-75" />
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2764F5]" />
                        </span>
                        {isVision ? 'Creative Craftsmanship' : 'Purposeful Engineering'}
                      </span>
                    </div>
                  </div>

                  {/* Contextual Label */}
                  <div className="mt-4">
                    <span className="inline-block text-[10.5px] font-mono font-bold uppercase tracking-wider text-[#2764F5] bg-[#EEF4FF] px-2 py-0.5 rounded border border-[#DCE4F0] group-hover:bg-[#2764F5] group-hover:text-white group-hover:border-[#2764F5] transition-colors duration-200">
                      {activeContent.badge}
                    </span>

                    {/* Main Statement */}
                    <h3 className="font-heading text-lg sm:text-xl font-bold text-[#141B2A] tracking-tight leading-snug mt-1.5 group-hover:text-[#0C1523] transition-colors">
                      {activeContent.mainStatement}
                    </h3>
                  </div>

                  {/* Supporting Paragraph */}
                  <p className="mt-2 text-xs sm:text-[13.5px] leading-relaxed text-[#687386]">
                    {activeContent.supportingParagraph}
                  </p>
                </div>

                {/* Sub-footer inside visual panel (Typo fixed to NEXZIVO) */}
                <div className="relative z-10 mt-4 pt-3 border-t border-[#EEF2F6] flex items-center justify-between text-[11px] text-[#8E9AA8]">
                  <span className="font-semibold text-[#141B2A] flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#2764F5]" />
                    NEXZIVO Studio Foundation
                  </span>
                  <span className="font-mono text-[#687386] font-medium">
                    {isVision ? '01 / BLUEPRINT FOR TOMORROW' : '02 / OUTCOMES THAT MATTER'}
                  </span>
                </div>
              </div>

              {/* Right Column (42%): 3 Compact, Readable Principle Cards with Micro-Interactions */}
              <div className="lg:col-span-5 flex flex-col justify-between gap-4">
                {activeContent.principles.map((principle, idx) => {
                  const Icon = principleIcons[principle.iconKey] || Sparkles;

                  return (
                    <motion.div
                      key={principle.id}
                      custom={idx}
                      variants={reducedMotion ? undefined : cardVariants}
                      initial="initial"
                      animate="animate"
                      onMouseMove={handleCardMouseMove}
                      className="group relative flex-1 p-5 sm:p-5.5 rounded-2xl bg-white border border-[#E3E8F0] hover:border-[#2764F5]/50 shadow-[0_2px_12px_-2px_rgba(16,27,45,0.04)] hover:shadow-[0_14px_30px_-6px_rgba(39,100,245,0.12)] hover:-translate-y-1 hover:translate-x-1 transition-all duration-300 flex flex-col justify-center overflow-hidden cursor-default"
                    >
                      {/* Dynamic Cursor Spotlight Overlay */}
                      <div
                        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[inherit]"
                        style={{
                          background:
                            'radial-gradient(320px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(39, 100, 245, 0.08), transparent 70%)',
                        }}
                      />

                      {/* Active Left Gradient Line Accent */}
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#2764F5] via-[#35C5E8] to-[#2764F5] scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top rounded-r-full" />

                      {/* Subtle Top Edge Shine */}
                      <div className="absolute top-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-[#2764F5]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      <div className="relative z-10 flex items-start gap-4">
                        {/* Animated Icon Box with micro-tilt, gradient shift and bloom shadow */}
                        <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#EEF4FF] text-[#2764F5] border border-[#DCE4F0] group-hover:bg-gradient-to-br group-hover:from-[#2764F5] group-hover:to-[#1746C9] group-hover:text-white group-hover:scale-110 group-hover:-rotate-6 group-hover:shadow-[0_10px_20px_-4px_rgba(39,100,245,0.38)] group-hover:border-transparent transition-all duration-300 ease-out">
                          <Icon size={20} className="transition-transform duration-300 group-hover:scale-105" />
                        </div>

                        {/* Text Content */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-2 mb-1">
                            <h4 className="font-heading text-[15px] sm:text-base font-bold text-[#141B2A] group-hover:text-[#2764F5] transition-colors duration-200 leading-snug flex items-center gap-1.5">
                              <span>{principle.title}</span>
                              <ArrowUpRight
                                size={14}
                                className="opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 text-[#2764F5] transition-all duration-200 shrink-0"
                              />
                            </h4>
                            <span className="text-[11px] font-mono font-bold text-[#8E9AA8] group-hover:text-[#2764F5] group-hover:bg-[#EEF4FF] px-1.5 py-0.5 rounded transition-all duration-200">
                              0{idx + 1}
                            </span>
                          </div>
                          <p className="text-[13px] sm:text-[13.5px] leading-relaxed text-[#687386] group-hover:text-[#4A5568] transition-colors duration-200">
                            {principle.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </Container>
    </section>
  );
}
