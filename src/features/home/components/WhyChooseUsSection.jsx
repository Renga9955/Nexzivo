import { motion } from 'motion/react';
import { Target, Cpu, Users, MessageSquareCode, TrendingUp, Check } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { SectionReveal } from '@/components/ui/SectionReveal';
import { staggerContainer, staggerChild, scrollViewport } from '@/lib/motion';
import { useReducedMotionPreference } from '@/hooks/useReducedMotionPreference';
import { whyChooseUsContent } from '../data/homeContent';

const icons = [Target, Cpu, Users, MessageSquareCode, TrendingUp];

/**
 * WhyChooseUsSection — Crisp white section with centred prominent heading,
 * detailed feature cards and green icons.
 */
export function WhyChooseUsSection() {
  const reducedMotion = useReducedMotionPreference();

  return (
    <section
      id="why-choose-us"
      className="section bg-white text-[var(--color-text-body)] relative border-t border-[var(--color-muted-border)]"
    >
      <Container>
        <SectionReveal>
          <div className="flex flex-col items-center text-center mb-14 lg:mb-18">
            <SectionHeading
              eyebrow={whyChooseUsContent.eyebrow}
              heading={whyChooseUsContent.heading}
              description={whyChooseUsContent.description}
              align="center"
              theme="light"
              className="max-w-3xl"
            />
          </div>
        </SectionReveal>

        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          variants={reducedMotion ? undefined : staggerContainer}
          initial={reducedMotion ? undefined : 'hidden'}
          whileInView={reducedMotion ? undefined : 'visible'}
          viewport={scrollViewport}
        >
          {whyChooseUsContent.reasons.map((reason, index) => {
            const Icon = icons[index % icons.length];
            return (
              <motion.div
                key={reason.title}
                variants={reducedMotion ? undefined : staggerChild}
                className={`flex flex-col gap-4 rounded-2xl bg-[var(--color-off-white)] border border-[var(--color-muted-border)] p-8 transition-all duration-300 hover:border-[var(--color-green)] hover:shadow-lg ${
                  index === 4 ? 'sm:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-green-light)] text-[var(--color-green)] border border-[var(--color-green)]/20 shadow-xs">
                    <Icon size={22} aria-hidden="true" />
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs font-mono font-bold text-[var(--color-green)] bg-white px-2.5 py-1 rounded-full border border-[var(--color-muted-border)]">
                    <Check size={12} />
                    0{index + 1}
                  </span>
                </div>

                <div className="flex flex-col gap-2 mt-2">
                  <h3 className="text-xl font-bold text-[var(--color-deep-green)]">
                    {reason.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[var(--color-text-body)]">
                    {reason.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
