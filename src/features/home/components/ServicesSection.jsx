import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { SectionReveal } from '@/components/ui/SectionReveal';
import { staggerContainer, staggerChild, scrollViewport } from '@/lib/motion';
import { useReducedMotionPreference } from '@/hooks/useReducedMotionPreference';
import { servicesContent } from '../data/homeContent';

/**
 * ServicesSection — editorial grid of four service cards with animated
 * numbers, hover arrow, and sequential scroll reveal.
 */
export function ServicesSection() {
  const reducedMotion = useReducedMotionPreference();

  return (
    <section id="services" className="section bg-[var(--color-off-white)] relative overflow-hidden">
      {/* Subtle background accent */}
      <div
        className="pointer-events-none absolute right-0 top-0 h-[500px] w-[500px] opacity-[0.03]"
        aria-hidden="true"
        style={{
          background: 'radial-gradient(circle, var(--color-deep-green) 0%, transparent 70%)',
        }}
      />

      <Container>
        <SectionReveal>
          <SectionHeading
            eyebrow={servicesContent.eyebrow}
            heading={servicesContent.heading}
            description={servicesContent.description}
            align="left"
          />
        </SectionReveal>

        <motion.div
          className="mt-14 grid gap-px bg-[var(--color-border)] sm:grid-cols-2 lg:mt-20 lg:grid-cols-2 rounded-2xl overflow-hidden border border-[var(--color-border)]"
          variants={reducedMotion ? undefined : staggerContainer}
          initial={reducedMotion ? undefined : 'hidden'}
          whileInView={reducedMotion ? undefined : 'visible'}
          viewport={scrollViewport}
        >
          {servicesContent.items.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={reducedMotion ? undefined : staggerChild}
                className="group relative flex flex-col gap-6 bg-white p-8 transition-colors duration-300 hover:bg-[var(--color-deep-green)] lg:p-10"
              >
                {/* Service number */}
                <span className="font-heading text-5xl font-bold text-[var(--color-border)] transition-colors duration-300 group-hover:text-[var(--color-green)]/30 select-none lg:text-6xl">
                  {service.number}
                </span>

                {/* Icon */}
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-deep-green)] text-[var(--color-lime)] transition-all duration-300 group-hover:bg-[var(--color-lime)] group-hover:text-[var(--color-deep-green)]">
                  <Icon size={22} aria-hidden="true" />
                </span>

                {/* Content */}
                <div className="flex flex-col gap-3">
                  <h3 className="text-xl font-bold text-[var(--color-charcoal)] transition-colors duration-300 group-hover:text-[var(--color-off-white)]">
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[var(--color-muted)] transition-colors duration-300 group-hover:text-[var(--color-muted)]">
                    {service.description}
                  </p>
                </div>

                {/* Animated hover arrow */}
                <div className="mt-auto flex items-center gap-2 text-sm font-semibold text-[var(--color-green)] opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:text-[var(--color-lime)] translate-x-0 group-hover:translate-x-1">
                  <span>Learn more</span>
                  <motion.span
                    className="inline-flex"
                    animate={reducedMotion ? {} : undefined}
                  >
                    <ArrowRight size={16} aria-hidden="true" />
                  </motion.span>
                </div>

                {/* Top-right corner line accent */}
                <div className="pointer-events-none absolute right-6 top-6 h-6 w-6 border-r border-t border-[var(--color-border)] transition-colors duration-300 group-hover:border-[var(--color-lime)]/30" aria-hidden="true" />
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
