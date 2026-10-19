import { Helmet } from 'react-helmet-async';
import { CheckCircle2 } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { SectionReveal } from '@/components/ui/SectionReveal';
import { approachContent } from '@/features/home/data/homeContent';
import { siteConfig } from '@/config/site';

export function ApproachPage() {
  return (
    <>
      <Helmet>
        <title>Creative Process &amp; Methodology — {siteConfig.name} Studio</title>
        <meta
          name="description"
          content="Explore NEXZIVO's 4-step creative and engineering process: Immersion & Direction, Concept & Composition, Craft & Engineering, Launch & Evolution."
        />
      </Helmet>

      {/* Hero Header */}
      <section className="relative overflow-hidden bg-[#080A0F] text-[#F3F5F9] pt-36 pb-20 lg:pt-44 lg:pb-28 border-b border-[#232B3E]">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          aria-hidden="true"
          style={{
            backgroundImage:
              'linear-gradient(var(--color-accent-soft) 1px, transparent 1px), linear-gradient(90deg, var(--color-accent-soft) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />

        <Container>
          <div className="max-w-3xl">
            <span className="inline-block text-xs font-mono font-bold tracking-widest uppercase text-[var(--color-accent-soft)] mb-4">
              {approachContent.eyebrow}
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.08] mb-6 text-white">
              {approachContent.heading}
            </h1>
            <p className="text-lg sm:text-xl text-[#8B95A5] leading-relaxed">
              {approachContent.description}
            </p>
          </div>
        </Container>
      </section>

      {/* 4-Step Deep Dive */}
      <section className="section bg-[#080A0F]">
        <Container>
          <div className="flex flex-col gap-12 lg:gap-16">
            {approachContent.steps.map((step) => (
              <SectionReveal key={step.number}>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start bg-[#0F131C] p-8 sm:p-12 rounded-3xl border border-[#232B3E] shadow-lg">
                  {/* Step Number + Title */}
                  <div className="lg:col-span-5 flex flex-col gap-3">
                    <span className="font-mono text-4xl sm:text-5xl font-bold text-[var(--color-accent-soft)] bg-[#151A26] border border-[#232B3E] w-16 h-16 rounded-2xl flex items-center justify-center mb-2 shadow-sm">
                      {step.number}
                    </span>
                    <span className="text-xs font-mono uppercase tracking-wider text-[var(--color-accent-soft)] font-semibold">
                      {step.tagline}
                    </span>
                    <h2 className="text-3xl font-bold text-white">
                      {step.title}
                    </h2>
                    <p className="text-base text-[#8B95A5] leading-relaxed mt-1">
                      {step.description}
                    </p>
                  </div>

                  {/* Step Activities and Focus */}
                  <div className="lg:col-span-7 bg-[#151A26] rounded-2xl p-6 sm:p-8 border border-[#232B3E]">
                    <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--color-accent-soft)] mb-4">
                      Execution Milestones &amp; Focus
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      {step.details.map((detail) => (
                        <div
                          key={detail}
                          className="flex items-start gap-3 p-3.5 rounded-xl bg-[#080A0F] border border-[#232B3E] text-sm text-[#F3F5F9]"
                        >
                          <CheckCircle2 size={16} className="text-[var(--color-accent-soft)] shrink-0 mt-0.5" />
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Commitment Banner */}
      <section className="bg-[#0F131C] text-[#F3F5F9] py-20 border-t border-[#232B3E]">
        <Container>
          <div className="max-w-2xl mx-auto text-center flex flex-col items-center gap-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Direct access, zero bureaucratic friction.
            </h2>
            <p className="text-[#8B95A5] leading-relaxed">
              We collaborate in tight, high-visibility sprints. You talk directly with the designers and engineers shaping your project, resulting in faster decision loops and exceptional outcomes.
            </p>
            <Button to="/contact" variant="primary" size="lg">
              Start Your Project
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
