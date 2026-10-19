import { motion } from 'motion/react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { SectionReveal } from '@/components/ui/SectionReveal';
import { useReducedMotionPreference } from '@/hooks/useReducedMotionPreference';
import { approachContent } from '../data/homeContent';

/**
 * ApproachSection — four-step methodology.
 * Desktop: horizontal numbered timeline with progressive animated line.
 * Mobile: vertical stacked timeline.
 */
export function ApproachSection() {
  const reducedMotion = useReducedMotionPreference();

  return (
    <section
      id="approach"
      className="section relative overflow-hidden"
      style={{ backgroundColor: 'var(--color-off-white)' }}
    >
      {/* Decorative bracket — top left */}
      <div
        className="pointer-events-none absolute left-8 top-8 h-10 w-10 border-l-2 border-t-2 border-[var(--color-border)] opacity-60"
        aria-hidden="true"
      />

      <Container>
        <SectionReveal>
          <SectionHeading
            eyebrow={approachContent.eyebrow}
            heading={approachContent.heading}
            description={approachContent.description}
            align="left"
          />
        </SectionReveal>

        <div className="relative mt-16 lg:mt-24">
          {/* ── Desktop horizontal track ── */}
          <div className="relative hidden lg:block mb-16">
            {/* Track background */}
            <div className="absolute top-5 left-0 right-0 h-px bg-[var(--color-border)]" />
            {/* Animated lime progress line */}
            {reducedMotion ? (
              <div className="absolute top-5 left-0 right-0 h-px bg-[var(--color-lime)]" />
            ) : (
              <motion.div
                className="absolute top-5 left-0 h-px origin-left bg-[var(--color-lime)]"
                style={{ right: 0 }}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
              />
            )}

            {/* Step numbers on track */}
            <div className="relative grid grid-cols-4 gap-8">
              {approachContent.steps.map((step, i) => (
                <motion.div
                  key={step.number}
                  initial={reducedMotion ? undefined : { opacity: 0, y: 16 }}
                  whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-col items-center text-center gap-6"
                >
                  {/* Step circle */}
                  <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-deep-green)] ring-4 ring-[var(--color-off-white)]">
                    <span className="text-xs font-bold text-[var(--color-lime)]">
                      {step.number}
                    </span>
                  </div>

                  {/* Content below track */}
                  <div className="flex flex-col gap-2 pt-2">
                    <h3 className="text-lg font-bold text-[var(--color-charcoal)]">
                      {step.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-[var(--color-muted)]">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ── Mobile vertical timeline ── */}
          <div className="relative lg:hidden">
            {/* Vertical track */}
            <div className="absolute top-5 bottom-5 left-5 w-px bg-[var(--color-border)]" aria-hidden="true" />
            {reducedMotion ? (
              <div className="absolute top-5 bottom-5 left-5 w-px bg-[var(--color-lime)] opacity-40" aria-hidden="true" />
            ) : (
              <motion.div
                className="absolute top-5 left-5 w-px origin-top bg-[var(--color-lime)] opacity-50"
                style={{ bottom: '1.25rem' }}
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                aria-hidden="true"
              />
            )}

            <ol className="flex flex-col gap-10 pl-16">
              {approachContent.steps.map((step, i) => (
                <motion.li
                  key={step.number}
                  initial={reducedMotion ? undefined : { opacity: 0, x: -16 }}
                  whileInView={reducedMotion ? undefined : { opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="relative"
                >
                  {/* Circle on track */}
                  <div className="absolute -left-16 top-0 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-deep-green)] ring-4 ring-[var(--color-off-white)]">
                    <span className="text-xs font-bold text-[var(--color-lime)]">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[var(--color-charcoal)] leading-tight">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">
                    {step.description}
                  </p>
                </motion.li>
              ))}
            </ol>
          </div>
        </div>
      </Container>
    </section>
  );
}
