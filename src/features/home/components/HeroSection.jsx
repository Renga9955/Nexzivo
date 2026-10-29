import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { heroContent } from '../data/homeContent';
import { useReducedMotionPreference } from '@/hooks/useReducedMotionPreference';
import heroMockup from '@/assets/hero1.png';

/**
 * HeroSection — Refined editorial hero with flexible layout.
 * Prevents vertical clipping, provides intentional headline wrapping,
 * keeps CTAs and capability tags fully visible across viewports,
 * and maintains balanced proportions beneath the 80px fixed navbar.
 */
const EASE_OUT_EXPO = [0.22, 1, 0.36, 1];

export function HeroSection() {
  const reducedMotion = useReducedMotionPreference();

  // Coordinated entrance animation variants (respects reducedMotion)
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
    <section
      id="hero"
      className="relative bg-[#F7F9FC] text-[#141B2A] pt-24 pb-14 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-20 xl:pb-24 border-b border-[#E3E8F0] overflow-hidden"
    >
      {/* Background Layer: Soft studio atmosphere, subtle geometric ribbons & faint dot grids */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        {/* Soft atmospheric gradient wash behind the illustration */}
        <motion.div
          {...bgShapeVariant(0)}
          className="absolute -top-32 right-[-5%] h-[620px] w-[620px] lg:h-[700px] lg:w-[700px] rounded-full bg-gradient-to-br from-[#2764F5]/7 via-[#35C5E8]/5 to-transparent blur-3xl"
        />
        <motion.div
          {...bgShapeVariant(0.1)}
          className="absolute top-1/4 left-[-10%] h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-[#35C5E8]/6 via-[#2764F5]/4 to-transparent blur-3xl"
        />

        {/* Faint Studio Dotted Pattern behind the illustration (Right Side) */}
        <motion.svg
          {...bgShapeVariant(0.18)}
          className="absolute top-20 right-10 lg:right-20 w-64 h-64 text-[#2764F5]/[0.05] hidden sm:block"
          viewBox="0 0 240 240"
          fill="currentColor"
        >
          <pattern id="hero-dots-right" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
            <circle cx="3" cy="3" r="1.5" />
          </pattern>
          <rect width="240" height="240" fill="url(#hero-dots-right)" />
        </motion.svg>

        {/* Subtle Geometric Ribbon / Angle Polygon behind the studio setup */}
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

        {/* Subtle Isometric Grid Dot Cluster (Top Left Edge) */}
        <motion.svg
          {...bgShapeVariant(0.15)}
          className="absolute top-12 left-4 w-52 h-52 text-[#2764F5]/[0.04] hidden sm:block"
          viewBox="0 0 200 200"
          fill="currentColor"
        >
          <pattern id="hero-dots-left" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
            <circle cx="3" cy="3" r="1.5" />
          </pattern>
          <rect width="200" height="200" fill="url(#hero-dots-left)" />
        </motion.svg>

        {/* Oversized Subtle Curved Arc (Bottom Left Edge) */}
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
          {/* Left Column: Headline, Copy, CTAs, Capabilities */}
          <div className="lg:col-span-5 xl:col-span-5 flex flex-col items-start gap-5 sm:gap-6 order-1 pr-0 lg:pr-2">
            {/* Studio Eyebrow */}
            <motion.div {...fadeUp(0.04, 12, 0.45)}>
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#2764F5]">
                <span className="h-0.5 w-5 rounded-full bg-[#2764F5]" aria-hidden="true" />
                <span>{heroContent.eyebrow}</span>
              </span>
            </motion.div>

            {/* Headline with 3 Staggered Animated Lines */}
            <h1 className="font-heading text-[2.25rem] sm:text-[2.85rem] md:text-[3.3rem] lg:text-[clamp(2.45rem,2.9vw,3.35rem)] xl:text-[clamp(2.85rem,3.3vw,3.75rem)] font-extrabold tracking-tight leading-[1.12] text-[#141B2A] max-w-xl">
              {heroContent.lines.map((line, idx) => (
                <motion.span
                  key={idx}
                  className="block whitespace-normal sm:whitespace-nowrap"
                  {...fadeUp(0.1 + idx * 0.08, 16, 0.55)}
                >
                  {line.highlight ? (
                    <span className="text-[#2764F5]">{line.text}</span>
                  ) : (
                    <span>{line.text}</span>
                  )}
                </motion.span>
              ))}
            </h1>

            {/* Supporting Description */}
            <motion.p
              className="max-w-lg text-[15px] sm:text-[16.5px] lg:text-[17px] text-[#687386] leading-relaxed"
              {...fadeUp(0.36, 14, 0.5)}
            >
              {heroContent.description}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap items-center gap-3.5 sm:gap-4 pt-1"
              {...fadeUp(0.44, 14, 0.5)}
            >
              <Button
                to={heroContent.primaryCta.href}
                variant="primary"
                size="md"
                iconRight={<ArrowRight size={17} />}
                className="px-6 sm:px-7 py-3 sm:py-3.5 text-[15px] sm:text-[15.5px] shadow-sm hover:shadow"
              >
                {heroContent.primaryCta.label}
              </Button>

              <Button
                to={heroContent.secondaryCta.href}
                variant="secondary"
                size="md"
                className="px-6 sm:px-7 py-3 sm:py-3.5 text-[15px] sm:text-[15.5px]"
              >
                {heroContent.secondaryCta.label}
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
              {/* Preserves complete illustration, transparent background, natural subtle shadow */}
              <img
                src={heroMockup}
                alt="NEXZIVO Studio Showcase — Website design, mobile app interface, and creative studio workspace"
                className="w-full h-auto max-h-[380px] sm:max-h-[440px] md:max-h-[480px] lg:max-h-[520px] xl:max-h-[560px] object-contain drop-shadow-[0_16px_36px_rgba(16,27,45,0.07)]"
                loading="eager"
                decoding="async"
              />
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
