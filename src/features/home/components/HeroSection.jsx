import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { heroContent } from '../data/homeContent';
import { useReducedMotionPreference } from '@/hooks/useReducedMotionPreference';

/** Splits a headline string into individual words for a restrained editorial reveal. */
function AnimatedHeadline({ text, reducedMotion }) {
  const words = text.split(' ');
  if (reducedMotion) {
    return <span>{text}</span>;
  }
  return (
    <>
      {words.map((word, i) => {
        const isDistinction = word.toLowerCase().includes('distinction');
        return (
          <span key={`${word}-${i}`} className="inline-block overflow-hidden mr-3 sm:mr-4">
            <motion.span
              className={`inline-block ${isDistinction ? 'text-[var(--color-accent-soft)]' : 'text-[var(--color-soft-white)]'}`}
              initial={{ y: '115%', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.15 + i * 0.06,
              }}
            >
              {word}
            </motion.span>
          </span>
        );
      })}
    </>
  );
}

/** Restrained, static geometric composition — thin neutral lines, no glow, no motion. */
function HeroGeometry() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Faint technical grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      {/* Thin concentric arcs, neutral, low opacity */}
      <svg
        className="absolute -right-24 top-1/2 hidden h-[720px] w-[720px] -translate-y-1/2 lg:block"
        viewBox="0 0 800 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="400" cy="400" r="340" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
        <circle cx="400" cy="400" r="260" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
        <circle cx="400" cy="400" r="180" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
        <circle cx="400" cy="60" r="4" fill="var(--color-accent)" />
        <line x1="60" y1="400" x2="740" y2="400" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
      </svg>

      {/* Soft neutral edge to give depth without neon */}
      <div
        className="absolute inset-x-0 bottom-0 h-40"
        style={{ background: 'linear-gradient(to bottom, transparent, var(--color-obsidian))' }}
      />
    </div>
  );
}

/**
 * HeroSection — clean cinematic opening with a staggered editorial headline,
 * restrained CTAs and a studio disciplines strip. No glow, no orbiting motion.
 */
export function HeroSection() {
  const reducedMotion = useReducedMotionPreference();

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center overflow-hidden bg-[var(--color-obsidian)] text-[var(--color-soft-white)] pt-24 pb-16"
    >
      <HeroGeometry />

      <Container>
        <div className="relative z-10 max-w-4xl flex flex-col items-start gap-8 py-12 lg:py-20">
          {/* Eyebrow */}
          <motion.div
            initial={reducedMotion ? {} : { opacity: 0, y: 12 }}
            animate={reducedMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-accent-soft)]">
              <span className="h-px w-8 bg-[var(--color-accent)]/60" aria-hidden="true" />
              {heroContent.eyebrow}
            </span>
          </motion.div>

          {/* Main Headline */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5rem] font-bold tracking-tight leading-[1.04]">
            <AnimatedHeadline text={heroContent.heading} reducedMotion={reducedMotion} />
          </h1>

          {/* Subtitle description */}
          <motion.p
            className="max-w-2xl text-lg sm:text-xl text-[var(--color-subtle-gray)] leading-relaxed"
            initial={reducedMotion ? {} : { opacity: 0, y: 16 }}
            animate={reducedMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
          >
            {heroContent.description}
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            className="flex flex-wrap items-center gap-4 pt-2"
            initial={reducedMotion ? {} : { opacity: 0, y: 16 }}
            animate={reducedMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
          >
            <Button to={heroContent.primaryCta.href} variant="primary" size="lg">
              {heroContent.primaryCta.label}
            </Button>
            <Button
              to={heroContent.secondaryCta.href}
              variant="outline"
              size="lg"
              iconRight={<ArrowRight size={16} />}
            >
              {heroContent.secondaryCta.label}
            </Button>
          </motion.div>

          {/* Studio Disciplines Strip */}
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-10 border-t border-[var(--color-slate-border)] w-full mt-4"
            initial={reducedMotion ? {} : { opacity: 0 }}
            animate={reducedMotion ? {} : { opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.7 }}
          >
            {[
              { title: 'Web Development', tag: 'Fast · Scalable' },
              { title: 'Poster Design', tag: 'Editorial · Print' },
              { title: 'UI/UX Design', tag: 'Human · Ergonomic' },
              { title: 'Brand Identity', tag: 'Distinct · Bold' },
            ].map((d) => (
              <div key={d.title} className="flex flex-col">
                <span className="text-xs font-semibold uppercase tracking-wider text-[var(--color-accent-soft)]">
                  {d.tag}
                </span>
                <span className="text-sm font-semibold text-[var(--color-soft-white)] mt-0.5">
                  {d.title}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
