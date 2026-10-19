import { Helmet } from 'react-helmet-async';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { SectionReveal } from '@/components/ui/SectionReveal';
import { aboutContent } from '@/features/home/data/homeContent';
import { siteConfig } from '@/config/site';

export function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About Us — {siteConfig.name} Creative Studio</title>
        <meta
          name="description"
          content="Learn about NEXZIVO: an independent creative studio and digital engineering firm specializing in website development, poster design, and UI/UX."
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
          <div className="max-w-4xl">
            <span className="inline-block text-xs font-mono font-bold tracking-widest uppercase text-[var(--color-accent-soft)] mb-4">
              {aboutContent.eyebrow}
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.08] mb-6 text-white">
              {aboutContent.heading}
            </h1>
            <p className="text-xl sm:text-2xl text-[var(--color-accent-soft)] font-mono leading-relaxed mb-6">
              "{siteConfig.tagline}"
            </p>
            <p className="text-lg sm:text-xl text-[#8B95A5] leading-relaxed max-w-2xl">
              {aboutContent.lead}
            </p>
          </div>
        </Container>
      </section>

      {/* Narrative Section */}
      <section className="section bg-[#080A0F]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[var(--color-accent-soft)] mb-3 block">
                Studio Philosophy
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-6">
                Bridging visual craft with technical depth.
              </h2>
              <div className="p-6 rounded-2xl bg-[#0F131C] border border-[#232B3E] shadow-sm">
                <div className="font-heading text-4xl font-bold text-[var(--color-accent-soft)] mb-2">
                  100%
                </div>
                <div className="text-sm font-semibold text-white mb-1">
                  Bespoke Craftsmanship
                </div>
                <div className="text-xs text-[#8B95A5] leading-relaxed">
                  Zero generic templates. Every visual system, poster, and website codebase is engineered uniquely for each client.
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 flex flex-col gap-6 text-base sm:text-lg leading-relaxed text-[#8B95A5]">
              {aboutContent.story.map((paragraph, idx) => (
                <p key={idx} className="text-white/80">{paragraph}</p>
              ))}
              <p>
                From brand identity and high-impact poster artwork to full-stack web platforms and interactive design systems, we help our partners move into what comes next with total confidence.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Values Section */}
      <section className="section bg-[#0F131C] text-[#F3F5F9] border-t border-[#232B3E]">
        <Container>
          <SectionReveal>
            <div className="max-w-2xl mb-16">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[var(--color-accent-soft)] mb-3 block">
                Studio Standards
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold leading-tight text-white">
                How we think, design, and engineer.
              </h2>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {aboutContent.values.map((val) => {
              const Icon = val.icon;
              return (
                <div
                  key={val.title}
                  className="p-8 rounded-2xl bg-[#151A26] border border-[#232B3E] hover:border-[var(--color-accent-soft)]/40 transition-colors flex flex-col gap-4 shadow-md"
                >
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#080A0F] border border-[#232B3E] text-[var(--color-accent-soft)]">
                    <Icon size={22} />
                  </span>
                  <h3 className="text-xl font-bold text-white">
                    {val.title}
                  </h3>
                  <p className="text-sm sm:text-base leading-relaxed text-[#8B95A5]">
                    {val.description}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Direct Contact CTA */}
      <section className="py-20 bg-[#080A0F] text-[#F3F5F9] border-t border-[#232B3E]">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <div>
              <h2 className="text-3xl font-bold mb-2 text-white">Want to collaborate on your next build?</h2>
              <p className="text-[#8B95A5]">We are currently accepting new client engagements and creative partnerships.</p>
            </div>
            <Button to="/contact" variant="primary" size="lg">
              Get in Touch
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
