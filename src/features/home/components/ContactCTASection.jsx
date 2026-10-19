import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionReveal } from '@/components/ui/SectionReveal';
import { Button } from '@/components/ui/Button';
import { contactCtaContent } from '../data/homeContent';

/**
 * ContactCTASection — clean, confident closing section. No glow backdrop.
 */
export function ContactCTASection() {
  return (
    <section
      id="contact-cta"
      className="relative bg-[var(--color-slate-dark)] text-[var(--color-soft-white)] border-t border-[var(--color-slate-border)]"
    >
      <Container>
        <div className="relative flex min-h-[50vh] flex-col items-center justify-center gap-8 py-24 text-center lg:py-32">
          {/* Eyebrow */}
          <SectionReveal>
            <span className="inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-accent-soft)]">
              <span className="h-px w-8 bg-[var(--color-accent)]/60" aria-hidden="true" />
              {contactCtaContent.eyebrow}
            </span>
          </SectionReveal>

          {/* Main headline */}
          <SectionReveal delay={0.1}>
            <h2 className="max-w-3xl text-4xl font-bold leading-[1.08] tracking-tight text-[var(--color-soft-white)] sm:text-5xl md:text-6xl">
              {contactCtaContent.heading}
            </h2>
          </SectionReveal>

          {/* Description */}
          <SectionReveal delay={0.2}>
            <p className="max-w-xl text-base leading-relaxed text-[var(--color-subtle-gray)] sm:text-lg">
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

          {/* Reassurances */}
          {contactCtaContent.stats && contactCtaContent.stats.length > 0 && (
            <SectionReveal delay={0.4}>
              <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-medium text-[var(--color-subtle-gray)] pt-2">
                {contactCtaContent.stats.map((stat) => {
                  const Icon = stat.icon;
                  return (
                    <div key={stat.label} className="flex items-center gap-2">
                      <Icon size={14} className="text-[var(--color-accent-soft)]" aria-hidden="true" />
                      <span>{stat.label}</span>
                    </div>
                  );
                })}
              </div>
            </SectionReveal>
          )}
        </div>
      </Container>
    </section>
  );
}
