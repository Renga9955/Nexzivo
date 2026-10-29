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
 * VisionMissionSection (Refined & Compact)
 * - Container: tight 1100–1250px container with reduced vertical padding
 * - Left Panel (approx. 58%): 16:9 bright, photorealistic studio photography + contextual label + heading + description
 * - Right Panel (approx. 42%): 3 compact, readable, evenly aligned principle cards
 * - Background: warm white / very light gray with faint oversized circular outline & soft blue gradient wash
 * - Carousel: exact 7s continuous cycle, smooth crossfade + subtle horizontal slide, pause-on-hover/focus, manual controls & live progress bar
 */
export function VisionMissionSection() {
  const reducedMotion = useReducedMotionPreference();
  const [currentSlide, setCurrentSlide] = useState('vision'); // 'vision' | 'mission'
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState(1); // 1 = forward, -1 = backward
  const timerRef = useRef(null);

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
    initial: { opacity: 0, y: 10 },
    animate: (idx) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.35, delay: idx * 0.06, ease: EASE_OUT_EXPO },
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
      {/* Restrained Background Atmosphere */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        {/* Soft blue gradient wash */}
        <div className="absolute -top-24 -left-24 h-[420px] w-[420px] rounded-full bg-gradient-to-br from-[#2764F5]/5 via-[#35C5E8]/4 to-transparent blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-[440px] w-[440px] rounded-full bg-gradient-to-tl from-[#2764F5]/4 via-[#35C5E8]/3 to-transparent blur-3xl" />

        {/* Faint oversized circular outline */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[720px] rounded-full border border-[#2764F5]/[0.035]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[540px] h-[540px] rounded-full border border-[#2764F5]/[0.025]" />
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
          <div className="flex items-center gap-2 self-start sm:self-end shrink-0">
            <button
              type="button"
              onClick={toggleSlide}
              aria-label="Previous slide"
              className="p-1.5 rounded-lg bg-white border border-[#E3E8F0] text-[#687386] hover:text-[#141B2A] hover:border-[#2764F5]/40 transition-colors cursor-pointer shadow-2xs"
            >
              <ChevronLeft size={15} />
            </button>

            {/* Segmented 2-option switcher */}
            <div className="inline-flex items-center p-0.5 rounded-xl bg-white border border-[#DCE4F0] shadow-2xs">
              <button
                type="button"
                onClick={() => goToSlide('vision', -1)}
                className={`relative px-3.5 py-1 rounded-lg text-xs font-bold transition-all duration-200 cursor-pointer ${
                  isVision
                    ? 'bg-[#101B2D] text-white shadow-2xs'
                    : 'text-[#687386] hover:text-[#141B2A]'
                }`}
                aria-pressed={isVision}
              >
                Our Vision
              </button>
              <button
                type="button"
                onClick={() => goToSlide('mission', 1)}
                className={`relative px-3.5 py-1 rounded-lg text-xs font-bold transition-all duration-200 cursor-pointer ${
                  !isVision
                    ? 'bg-[#101B2D] text-white shadow-2xs'
                    : 'text-[#687386] hover:text-[#141B2A]'
                }`}
                aria-pressed={!isVision}
              >
                Our Mission
              </button>
            </div>

            <button
              type="button"
              onClick={toggleSlide}
              aria-label="Next slide"
              className="p-1.5 rounded-lg bg-white border border-[#E3E8F0] text-[#687386] hover:text-[#141B2A] hover:border-[#2764F5]/40 transition-colors cursor-pointer shadow-2xs"
            >
              <ChevronRight size={15} />
            </button>
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
              {/* Left Column (58%): Purpose-built Bright Studio Visual + Contextual Label + Statement + Paragraph */}
              <div className="lg:col-span-7 flex flex-col justify-between p-5 sm:p-6 rounded-2xl bg-white border border-[#E3E8F0] shadow-[0_4px_20px_-4px_rgba(16,27,45,0.06)] hover:border-[#2764F5]/40 transition-colors">
                <div>
                  {/* Reduced height image container to fit cleanly in a single viewport frame */}
                  <div className="relative w-full h-[180px] sm:h-[210px] md:h-[230px] rounded-xl overflow-hidden bg-[#F2F4F7] border border-[#E3E8F0]">
                    <img
                      src={isVision ? visionShowcaseImg : missionShowcaseImg}
                      alt={
                        isVision
                          ? 'NEXIZO Creative Studio Workspace — Website UI, responsive mobile design, and graphic design poster'
                          : 'NEXIZO Digital Product Creation — Business dashboard interface, companion mobile app, and wireframes'
                      }
                      decoding="async"
                      className="w-full h-full object-cover object-center transition-transform duration-500 ease-out hover:scale-[1.02]"
                    />

                    {/* Subtle Overlay Badge */}
                    <div className="absolute top-2.5 left-2.5">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-white/95 backdrop-blur-xs text-[11px] font-bold text-[#101B2D] shadow-xs">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#2764F5]" />
                        {isVision ? 'Creative Craftsmanship' : 'Purposeful Engineering'}
                      </span>
                    </div>
                  </div>

                  {/* Contextual Label */}
                  <div className="mt-4">
                    <span className="inline-block text-[10.5px] font-mono font-bold uppercase tracking-wider text-[#2764F5] bg-[#EEF4FF] px-2 py-0.5 rounded border border-[#DCE4F0]">
                      {activeContent.badge}
                    </span>

                    {/* Main Statement */}
                    <h3 className="font-heading text-lg sm:text-xl font-bold text-[#141B2A] tracking-tight leading-snug mt-1.5">
                      {activeContent.mainStatement}
                    </h3>
                  </div>

                  {/* Supporting Paragraph */}
                  <p className="mt-2 text-xs sm:text-[13.5px] leading-relaxed text-[#687386]">
                    {activeContent.supportingParagraph}
                  </p>
                </div>

                {/* Sub-footer inside visual panel */}
                <div className="mt-4 pt-3 border-t border-[#EEF2F6] flex items-center justify-between text-[11px] text-[#8E9AA8]">
                  <span className="font-semibold text-[#141B2A]">NEXIZO Studio Foundation</span>
                  <span className="font-mono">
                    {isVision ? '01 / BLUEPRINT FOR TOMORROW' : '02 / OUTCOMES THAT MATTER'}
                  </span>
                </div>
              </div>

              {/* Right Column (42%): 3 Compact, Readable Principle Cards */}
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
                      className="group relative flex-1 p-5 sm:p-5.5 rounded-xl bg-white border border-[#E3E8F0] hover:border-[#2764F5]/60 hover:shadow-[0_10px_24px_-4px_rgba(39,100,245,0.08)] hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-center"
                    >
                      <div className="flex items-start gap-3.5 sm:gap-4">
                        {/* Compact Line Icon in Tinted Container */}
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#EEF4FF] text-[#2764F5] border border-[#DCE4F0] group-hover:bg-[#2764F5] group-hover:text-white transition-colors duration-200">
                          <Icon size={19} />
                        </div>

                        {/* Text Content */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-2 mb-1">
                            <h4 className="font-heading text-[15px] sm:text-base font-bold text-[#141B2A] group-hover:text-[#2764F5] transition-colors leading-snug">
                              {principle.title}
                            </h4>
                            <span className="text-[11px] font-mono font-bold text-[#8E9AA8]">
                              0{idx + 1}
                            </span>
                          </div>
                          <p className="text-[13px] sm:text-[13.5px] leading-relaxed text-[#687386]">
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
