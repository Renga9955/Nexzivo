import { motion } from 'motion/react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { SectionReveal } from '@/components/ui/SectionReveal';
import { useReducedMotionPreference } from '@/hooks/useReducedMotionPreference';
import { approachContent } from '../data/homeContent';

/**
 * ApproachSection — 4-step creative engineering process with brand deep-green timeline.
 */
export function ApproachSection() {
  const reducedMotion = useReducedMotionPreference();

  return (
    <section
      id="approach"
      className="section bg-[var(--color-off-white)] text-[var(--color-text-body)] relative border-t border-[var(--color-muted-border)]"
    >
      <Container>
        <SectionReveal>
          <div className="flex flex-col items-center text-center">
            <SectionHeading
              eyebrow={approachContent.eyebrow}
              heading={approachContent.heading}
              description={approachContent.description}
              align="center"
              theme="light"
              className="max-w-3xl"
            />
          </div>
        </SectionReveal>

        <div className="relative mt-16 lg:mt-24">
          {/* ── Desktop horizontal track ── */}
          <div className="relative hidden lg:block mb-16">
            {/* Track background */}
            <div className="absolute top-5 left-0 right-0 h-0.5 bg-[var(--color-muted-border)]" />
            {/* Accent progress line */}
            {reducedMotion ? (
              <div className="absolute top-5 left-0 right-0 h-0.5 bg-[var(--color-green)]" />
            ) : (
              <motion.div
                className="absolute top-5 left-0 h-0.5 origin-left bg-[var(--color-green)]"
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
                  <div className="relative z-10 flex h-11 w-11 items-center justify-center rounded-xl bg-white border-2 border-[var(--color-green)] shadow-sm">
                    <span className="font-mono text-sm font-bold text-[var(--color-deep-green)]">
                      {step.number}
                    </span>
                  </div>

                  {/* Content below track */}
                  <div className="flex flex-col gap-1.5 pt-2">
                    <span className="text-[11px] text-[var(--color-green)] uppercase tracking-wider font-bold">
                      {step.tagline}
                    </span>
                    <h3 className="text-xl font-bold text-[var(--color-deep-green)]">
                      {step.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-[var(--color-text-muted)]">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ── Mobile vertical timeline ── */}
          <div className="relative lg:hidden">
            <div className="absolute top-5 bottom-5 left-5 w-0.5 bg-[var(--color-muted-border)]" aria-hidden="true" />

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
                  <div className="absolute -left-14 top-0 z-10 flex h-9 w-9 items-center justify-center rounded-lg bg-white border-2 border-[var(--color-green)] shadow-xs">
                    <span className="font-mono text-xs font-bold text-[var(--color-deep-green)]">
                      {step.number}
                    </span>
                  </div>

                  <span className="text-[11px] text-[var(--color-green)] uppercase tracking-wider font-bold block mb-1">
                    {step.tagline}
                  </span>
                  <h3 className="text-lg font-bold text-[var(--color-deep-green)]">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-[var(--color-text-muted)]">
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
