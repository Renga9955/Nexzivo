import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionReveal } from '@/components/ui/SectionReveal';
import { Button } from '@/components/ui/Button';
import { contactCtaContent } from '../data/homeContent';
import logoSrc from '@/assets/logo.png';
import { siteConfig } from '@/config/site';

/**
 * ContactCTASection — Premium, compact deep-navy card layout.
 * Clean presentation featuring the original NEXZIVO navbar logo,
 * high-contrast headline, concise invitation copy, and direct CTA buttons.
 */
export function ContactCTASection() {
  return (
    <section
      id="contact-cta"
      className="relative overflow-hidden bg-[#F7F9FC] py-14 sm:py-18 lg:py-20"
    >
      {/* Subtle outer background atmosphere */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/2 left-[-5%] h-[400px] w-[400px] rounded-full bg-[#2764F5]/4 blur-3xl" />
        <div className="absolute top-1/2 right-[-5%] h-[400px] w-[400px] rounded-full bg-[#35C5E8]/4 blur-3xl" />
      </div>

      <Container className="relative z-10">
        {/* Compact Featured Navy Banner Card */}
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl bg-[#101B2D] p-8 sm:p-12 lg:p-14 text-white shadow-xl border border-[#273752]">
          {/* Subtle radial ambient glow inside card */}
          <div
            className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[#2764F5]/20 blur-2xl"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[#35C5E8]/15 blur-2xl"
            aria-hidden="true"
          />

          <div className="relative z-10 mx-auto max-w-3xl flex flex-col items-center text-center gap-6">
            {/* Same Logo as Navbar */}
            <SectionReveal>
              <div className="flex items-center justify-center gap-3 py-1">
                <img
                  src={logoSrc}
                  alt={`${siteConfig.name} logo`}
                  className="h-10 sm:h-12 w-auto object-contain"
                />
                <span className="font-heading text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                  {siteConfig.name}
                </span>
              </div>
            </SectionReveal>

            {/* High-Contrast Bold Headline */}
            <SectionReveal delay={0.08}>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.12] !text-white text-white">
                {contactCtaContent.heading}
              </h2>
            </SectionReveal>

            {/* Concise Supporting Invitation Copy */}
            <SectionReveal delay={0.15}>
              <p className="max-w-xl text-sm sm:text-base text-[#CBD5E1] leading-relaxed">
                {contactCtaContent.description}
              </p>
            </SectionReveal>

            {/* CTA Buttons */}
            <SectionReveal delay={0.22}>
              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                <Button
                  to={contactCtaContent.cta.href}
                  variant="primary"
                  size="md"
                  iconRight={<ArrowRight size={16} aria-hidden="true" />}
                  className="px-7 py-3 text-sm shadow-md"
                >
                  {contactCtaContent.cta.label}
                </Button>

                <Button
                  to="/work"
                  variant="outlineDark"
                  size="md"
                  className="px-6 py-3 text-sm"
                >
                  Explore Case Studies
                </Button>
              </div>
            </SectionReveal>

            {/* Compact Reassurance Badges */}
            <SectionReveal delay={0.3}>
              <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 pt-6 border-t border-[#273752]/70 text-xs text-[#94A3B8]">
                {contactCtaContent.features.map((feat) => (
                  <div key={feat} className="flex items-center gap-1.5">
                    <CheckCircle2 size={14} className="text-[#35C5E8] shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </SectionReveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
