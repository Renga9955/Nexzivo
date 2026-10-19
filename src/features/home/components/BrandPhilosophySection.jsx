import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Container } from '@/components/ui/Container';
import { useReducedMotionPreference } from '@/hooks/useReducedMotionPreference';
import { brandPhilosophyContent } from '../data/homeContent';

/** Splits the statement and highlights key words with a restrained muted-blue accent. */
function PhilosophyStatement({ text, reducedMotion, y }) {
  const words = text.split(' ');

  return (
    <motion.h2
      id="philosophy-heading"
      style={reducedMotion ? undefined : { y }}
      initial={reducedMotion ? undefined : { opacity: 0, y: 32 }}
      whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className="max-w-5xl text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold leading-[1.06] tracking-tight"
    >
      {words.map((word, i) => {
        const isAccent =
          word.toLowerCase().startsWith('forward') ||
          word.toLowerCase().startsWith('people');
        return (
          <span key={`${word}-${i}`} className="inline-block mr-2 sm:mr-3">
            <span
              className={
                isAccent
                  ? 'text-[var(--color-accent-soft)]'
                  : 'text-[var(--color-soft-white)]'
              }
            >
              {word}
            </span>
          </span>
        );
      })}
    </motion.h2>
  );
}

/**
 * BrandPhilosophySection — Bold typographic statement on deep obsidian canvas.
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
    reducedMotion ? ['0%', '0%'] : ['-6%', '6%']
  );

  return (
    <section
      ref={sectionRef}
      id="philosophy"
      aria-labelledby="philosophy-heading"
      className="relative overflow-hidden bg-[var(--color-obsidian)] text-[var(--color-soft-white)] border-t border-[var(--color-slate-border)]"
    >
      {/* Faint neutral grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        aria-hidden="true"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      <Container>
        <div className="relative flex min-h-[60vh] flex-col items-center justify-center py-28 text-center lg:py-36 gap-6">
          {/* Eyebrow */}
          <motion.div
            initial={reducedMotion ? undefined : { opacity: 0, y: 16 }}
            whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--color-accent-soft)]">
              Studio Credo
            </span>
          </motion.div>

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
            transition={{ duration: 0.7, delay: 0.3 }}
            className="max-w-lg text-base text-[var(--color-subtle-gray)] sm:text-lg leading-relaxed mt-2"
          >
            We believe distinction happens at the crossroads of bold visual craft and dependable digital engineering.
          </motion.p>
        </div>
      </Container>
    </section>
  );
}
