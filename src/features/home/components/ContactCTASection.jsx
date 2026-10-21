import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionReveal } from '@/components/ui/SectionReveal';
import { Button } from '@/components/ui/Button';
import { contactCtaContent } from '../data/homeContent';

/**
 * ContactCTASection — High-impact Deep Green (#102820) closing section with Lime CTA button.
 */
export function ContactCTASection() {
  return (
    <section
      id="contact-cta"
      className="relative bg-[var(--color-deep-green)] text-white border-t border-[var(--color-dark-border)] overflow-hidden"
    >
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute top-0 right-1/3 h-96 w-96 rounded-full bg-[var(--color-green)]/30 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-96 w-96 rounded-full bg-[var(--color-lime)]/15 blur-3xl" />
      </div>

      <Container className="relative z-10">
        <div className="relative flex min-h-[50vh] flex-col items-center justify-center gap-7 py-24 text-center lg:py-32">
          {/* Eyebrow */}
          <SectionReveal>
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--color-lime)]/15 border border-[var(--color-lime)]/30 text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-lime)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-lime)]" aria-hidden="true" />
              {contactCtaContent.eyebrow}
            </span>
          </SectionReveal>

          {/* Main headline */}
          <SectionReveal delay={0.1}>
            <h2 className="max-w-3xl text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl">
              {contactCtaContent.heading}
            </h2>
          </SectionReveal>

          {/* Description */}
          <SectionReveal delay={0.2}>
            <p className="max-w-2xl text-base leading-relaxed text-[var(--color-light-muted)] sm:text-lg">
              {contactCtaContent.description}
            </p>
          </SectionReveal>

          {/* CTA buttons */}
          <SectionReveal delay={0.3}>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <Button
                to={contactCtaContent.primaryCta ? contactCtaContent.primaryCta.href : contactCtaContent.cta.href}
                variant="lime"
                size="lg"
                iconRight={<ArrowRight size={18} aria-hidden="true" />}
              >
                {contactCtaContent.primaryCta ? contactCtaContent.primaryCta.label : contactCtaContent.cta.label}
              </Button>
              {contactCtaContent.secondaryCta && (
                <Button
                  to={contactCtaContent.secondaryCta.href}
                  variant="outlineLight"
                  size="lg"
                >
                  {contactCtaContent.secondaryCta.label}
                </Button>
              )}
            </div>
          </SectionReveal>

          {/* Reassurances */}
          {contactCtaContent.stats && contactCtaContent.stats.length > 0 && (
            <SectionReveal delay={0.4}>
              <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-medium text-[var(--color-light-muted)] pt-4">
                {contactCtaContent.stats.map((stat) => {
                  const Icon = stat.icon;
                  return (
                    <div key={stat.label} className="flex items-center gap-2">
                      <Icon size={14} className="text-[var(--color-lime)]" aria-hidden="true" />
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
