import { motion } from 'motion/react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { SectionReveal } from '@/components/ui/SectionReveal';
import { useReducedMotionPreference } from '@/hooks/useReducedMotionPreference';
import { approachContent } from '../data/homeContent';

/**
 * ApproachSection — Studio 4-step creative engineering process.
 * Connected timeline with a restrained accent progress line and neutral nodes.
 */
export function ApproachSection() {
  const reducedMotion = useReducedMotionPreference();

  return (
    <section
      id="approach"
      className="section bg-[var(--color-slate-dark)] text-[var(--color-soft-white)] relative border-t border-[var(--color-slate-border)]"
    >
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
            <div className="absolute top-5 left-0 right-0 h-px bg-[var(--color-slate-border)]" />
            {/* Restrained accent progress line */}
            {reducedMotion ? (
              <div className="absolute top-5 left-0 right-0 h-px bg-[var(--color-accent)]" />
            ) : (
              <motion.div
                className="absolute top-5 left-0 h-px origin-left bg-[var(--color-accent)]"
                style={{ right: 0 }}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
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
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col items-start text-left gap-4"
                >
                  {/* Step node */}
                  <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--color-slate-card)] border border-[var(--color-slate-border)]">
                    <span className="font-mono text-xs font-bold text-[var(--color-accent-soft)]">
                      {step.number}
                    </span>
                  </div>

                  {/* Content below track */}
                  <div className="flex flex-col gap-1.5 pt-2">
                    <span className="text-[11px] text-[var(--color-accent-soft)] uppercase tracking-wider font-semibold">
                      {step.tagline}
                    </span>
                    <h3 className="text-xl font-bold text-[var(--color-soft-white)]">
                      {step.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-[var(--color-subtle-gray)]">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ── Mobile vertical timeline ── */}
          <div className="relative lg:hidden">
            <div className="absolute top-5 bottom-5 left-5 w-px bg-[var(--color-slate-border)]" aria-hidden="true" />

            <ol className="flex flex-col gap-10 pl-14">
              {approachContent.steps.map((step, i) => (
                <motion.li
                  key={step.number}
                  initial={reducedMotion ? undefined : { opacity: 0, x: -16 }}
                  whileInView={reducedMotion ? undefined : { opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative"
                >
                  <div className="absolute -left-14 top-0 z-10 flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--color-slate-card)] border border-[var(--color-slate-border)]">
                    <span className="font-mono text-xs font-bold text-[var(--color-accent-soft)]">
                      {step.number}
                    </span>
                  </div>

                  <span className="text-[11px] text-[var(--color-accent-soft)] uppercase tracking-wider font-semibold block mb-1">
                    {step.tagline}
                  </span>
                  <h3 className="text-lg font-bold text-[var(--color-soft-white)]">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-[var(--color-subtle-gray)]">
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
