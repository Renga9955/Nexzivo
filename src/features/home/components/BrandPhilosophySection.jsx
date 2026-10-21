import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Container } from '@/components/ui/Container';
import { useReducedMotionPreference } from '@/hooks/useReducedMotionPreference';
import { brandPhilosophyContent } from '../data/homeContent';

/** Splits the statement and highlights key words with brand green. */
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
      className="max-w-5xl text-3xl sm:text-5xl md:text-6xl lg:text-[4.75rem] font-bold leading-[1.08] tracking-tight"
    >
      {words.map((word, i) => {
        const isAccent =
          word.toLowerCase().startsWith('forward') ||
          word.toLowerCase().startsWith('opportunities');
        return (
          <span key={`${word}-${i}`} className="inline-block mr-2 sm:mr-3">
            <span
              className={
                isAccent
                  ? 'text-[var(--color-green)] underline decoration-[var(--color-lime)] decoration-wavy'
                  : 'text-[var(--color-deep-green)]'
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
 * BrandPhilosophySection — Typographic statement on pristine white canvas.
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
    reducedMotion ? ['0%', '0%'] : ['-4%', '4%']
  );

  return (
    <section
      ref={sectionRef}
      id="philosophy"
      aria-labelledby="philosophy-heading"
      className="relative overflow-hidden bg-white text-[var(--color-text-body)] border-t border-[var(--color-muted-border)]"
    >
      <Container>
        <div className="relative flex min-h-[50vh] flex-col items-center justify-center py-24 text-center lg:py-32 gap-6">
          {/* Eyebrow */}
          <motion.div
            initial={reducedMotion ? undefined : { opacity: 0, y: 16 }}
            whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-[0.2em] bg-[var(--color-green-light)] text-[var(--color-green)] border border-[var(--color-green)]/20">
              Company Philosophy
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
            className="max-w-xl text-base text-[var(--color-text-muted)] sm:text-lg leading-relaxed mt-2 font-normal"
          >
            We believe distinction happens at the crossroads of bold creative design and dependable digital engineering.
          </motion.p>
        </div>
      </Container>
    </section>
  );
}
