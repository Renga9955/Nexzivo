import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionReveal } from '@/components/ui/SectionReveal';
import { Button } from '@/components/ui/Button';
import { useReducedMotionPreference } from '@/hooks/useReducedMotionPreference';
import { contactCtaContent } from '../data/homeContent';

/**
 * ContactCTASection — visually memorable closing section with geometric motion background.
 */
export function ContactCTASection() {
  const reducedMotion = useReducedMotionPreference();

  return (
    <section
      id="contact-cta"
      className="relative overflow-hidden bg-[var(--color-off-white)]"
    >
      {/* Decorative geometric background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        aria-hidden="true"
        style={{
          backgroundImage:
            'linear-gradient(var(--color-deep-green) 1px, transparent 1px), linear-gradient(90deg, var(--color-deep-green) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      {/* Lime accent glow — right */}
      <div
        className="pointer-events-none absolute right-0 top-0 h-[500px] w-[500px] opacity-[0.08]"
        aria-hidden="true"
        style={{ background: 'radial-gradient(circle, var(--color-lime) 0%, transparent 70%)' }}
      />

      {/* Geometric accent — large circle bottom left */}
      {!reducedMotion && (
        <motion.div
          className="pointer-events-none absolute -bottom-32 -left-32 h-64 w-64 rounded-full border border-[var(--color-deep-green)] opacity-[0.06]"
          animate={{ scale: [1, 1.1, 1], rotate: [0, 30, 0] }}
          transition={{ duration: 20, ease: 'linear', repeat: Infinity }}
          aria-hidden="true"
        />
      )}

      <Container>
        <div className="relative flex min-h-[55vh] flex-col items-center justify-center gap-10 py-24 text-center lg:py-32">
          {/* Eyebrow */}
          <SectionReveal>
            <span className="inline-block rounded-full border border-[var(--color-deep-green)]/15 bg-[var(--color-deep-green)]/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-green)]">
              {contactCtaContent.eyebrow}
            </span>
          </SectionReveal>

          {/* Main headline */}
          <SectionReveal delay={0.1}>
            <h2 className="max-w-3xl text-4xl font-bold leading-[1.06] tracking-tight text-[var(--color-charcoal)] sm:text-5xl md:text-6xl lg:text-7xl">
              {contactCtaContent.heading}
            </h2>
          </SectionReveal>

          {/* Description */}
          <SectionReveal delay={0.2}>
            <p className="max-w-xl text-base leading-relaxed text-[var(--color-muted)] sm:text-lg md:text-xl">
              {contactCtaContent.description}
            </p>
          </SectionReveal>

          {/* CTA button */}
          <SectionReveal delay={0.3}>
            <Button
              to={contactCtaContent.cta.href}
              variant="primary"
              size="lg"
              iconRight={<ArrowRight size={18} aria-hidden="true" />}
            >
              {contactCtaContent.cta.label}
            </Button>
          </SectionReveal>

          {/* Stats / reassurances */}
          {contactCtaContent.stats && contactCtaContent.stats.length > 0 && (
            <SectionReveal delay={0.4}>
              <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-[var(--color-muted)]">
                {contactCtaContent.stats.map((stat) => {
                  const Icon = stat.icon;
                  return (
                    <div key={stat.label} className="flex items-center gap-2">
                      <Icon
                        size={16}
                        className="text-[var(--color-green)]"
                        aria-hidden="true"
                      />
                      <span>{stat.label}</span>
                    </div>
                  );
                })}
              </div>
            </SectionReveal>
          )}
        </div>
      </Container>

      {/* Bottom border — deep green */}
      <div className="h-1 bg-[var(--color-deep-green)]" />
    </section>
  );
}
