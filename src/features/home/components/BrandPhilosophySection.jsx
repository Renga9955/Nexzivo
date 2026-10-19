import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Container } from '@/components/ui/Container';
import { useReducedMotionPreference } from '@/hooks/useReducedMotionPreference';
import { brandPhilosophyContent } from '../data/homeContent';

/** Splits the statement and highlights 'forward' in lime. */
function PhilosophyStatement({ text, reducedMotion, y }) {
  const words = text.split(' ');

  return (
    <motion.h2
      id="philosophy-heading"
      style={reducedMotion ? undefined : { y }}
      initial={reducedMotion ? undefined : { opacity: 0, y: 32 }}
      whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="max-w-5xl text-5xl font-bold leading-[1.06] tracking-tight sm:text-6xl md:text-7xl lg:text-[5.5rem]"
    >
      {words.map((word, i) => {
        const isAccent =
          word.toLowerCase().startsWith('forward') ||
          word.toLowerCase().startsWith('people');
        return (
          <span key={`${word}-${i}`}>
            <span
              className={
                isAccent
                  ? 'text-[var(--color-lime)]'
                  : 'text-[var(--color-off-white)]'
              }
            >
              {word}
            </span>
            {i < words.length - 1 ? ' ' : ''}
          </span>
        );
      })}
    </motion.h2>
  );
}

/**
 * BrandPhilosophySection — bold, oversized typography on deep green.
 * Scroll-linked parallax with lime word highlights and a subtle grid.
 */
export function BrandPhilosophySection() {
  const reducedMotion = useReducedMotionPreference();
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    reducedMotion ? ['0%', '0%'] : ['-8%', '8%']
  );

  return (
    <section
      ref={sectionRef}
      id="philosophy"
      aria-labelledby="philosophy-heading"
      className="relative overflow-hidden bg-[var(--color-deep-green)] text-[var(--color-off-white)]"
    >
      {/* Technical grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        aria-hidden="true"
        style={{
          backgroundImage:
            'linear-gradient(var(--color-lime) 1px, transparent 1px), linear-gradient(90deg, var(--color-lime) 1px, transparent 1px)',
          backgroundSize: '72px 72px',
        }}
      />

      {/* Large ambient glow */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 60% 70% at 50% 50%, var(--color-green) 0%, transparent 65%)',
          opacity: 0.18,
        }}
      />

      {/* Corner decorative brackets */}
      <div className="pointer-events-none absolute left-8 top-8 h-12 w-12 border-l-2 border-t-2 border-[var(--color-lime)] opacity-20" aria-hidden="true" />
      <div className="pointer-events-none absolute bottom-8 right-8 h-12 w-12 border-b-2 border-r-2 border-[var(--color-lime)] opacity-20" aria-hidden="true" />

      {/* Animated diagonal lines */}
      {!reducedMotion && (
        <>
          <motion.div
            className="pointer-events-none absolute -left-20 top-1/2 h-px w-48 -rotate-45 origin-left bg-[var(--color-lime)] opacity-10"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            aria-hidden="true"
          />
          <motion.div
            className="pointer-events-none absolute -right-20 bottom-1/3 h-px w-48 rotate-45 origin-right bg-[var(--color-lime)] opacity-10"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            aria-hidden="true"
          />
        </>
      )}

      <Container>
        <div className="relative flex min-h-[65vh] flex-col items-center justify-center py-28 text-center lg:py-36 gap-6">
          {/* Eyebrow */}
          <motion.p
            initial={reducedMotion ? undefined : { opacity: 0, y: 16 }}
            whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-xs font-bold uppercase tracking-[0.35em] text-[var(--color-lime)]"
          >
            Our philosophy
          </motion.p>

          {/* Main statement */}
          <PhilosophyStatement
            text={brandPhilosophyContent.statement}
            reducedMotion={reducedMotion}
            y={y}
          />

          {/* Supporting quote */}
          <motion.p
            initial={reducedMotion ? undefined : { opacity: 0, y: 16 }}
            whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
            className="max-w-lg text-base text-[var(--color-muted)] sm:text-lg"
          >
            We believe great technology is invisible — it simply enables people to do
            more, achieve more and go further.
          </motion.p>
        </div>
      </Container>
    </section>
  );
}
