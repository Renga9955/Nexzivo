import { Helmet } from 'react-helmet-async';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionReveal } from '@/components/ui/SectionReveal';
import { Button } from '@/components/ui/Button';
import { servicesData } from '@/features/home/data/homeContent';
import { siteConfig } from '@/config/site';

export function ServicesOverviewPage() {
  return (
    <>
      <Helmet>
        <title>Studio Services &amp; Capabilities — {siteConfig.name}</title>
        <meta
          name="description"
          content="Explore NEXZIVO's creative studio capabilities: Website development, poster & graphic design, UI/UX, and brand strategy."
        />
      </Helmet>

      {/* Hero Header */}
      <section className="relative overflow-hidden bg-[#080A0F] text-[#F3F5F9] pt-36 pb-20 lg:pt-44 lg:pb-28 border-b border-[#232B3E]">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          aria-hidden="true"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
        <Container>
          <div className="max-w-3xl">
            <span className="inline-block text-xs font-mono font-bold tracking-widest uppercase text-[var(--color-accent-soft)] mb-4">
              Studio Capabilities
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.08] mb-6 text-white">
              Creative Direction &amp; Digital Engineering.
            </h1>
            <p className="text-lg sm:text-xl text-[#8B95A5] leading-relaxed">
              We design and construct high-impact digital experiences, bespoke physical and digital posters, and intuitive software interfaces for ambitious brands.
            </p>
          </div>
        </Container>
      </section>

      {/* Services List Section */}
      <section className="section bg-[#080A0F]">
        <Container>
          <div className="flex flex-col gap-16 lg:gap-20">
            {servicesData.map((service) => {
              const Icon = service.icon;

              return (
                <SectionReveal key={service.slug}>
                  <div
                    id={service.slug}
                    className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 bg-[var(--color-slate-dark)] rounded-3xl p-8 sm:p-12 border border-[var(--color-slate-border)] hover:border-[var(--color-accent)]/40 transition-all shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-lift)]"
                  >
                    {/* Left Column: Number, Title, Description, CTA */}
                    <div className="lg:col-span-6 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-4 mb-6">
                          <span className="font-mono text-4xl sm:text-5xl font-bold text-[#8B95A5]/40">
                            {service.number}
                          </span>
                          <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#151A26] border border-[#232B3E] text-[var(--color-accent-soft)]">
                            <Icon size={22} aria-hidden="true" />
                          </span>
                        </div>

                        <span className="text-[11px] font-mono text-[var(--color-accent-soft)] uppercase tracking-wider font-semibold block mb-2">
                          {service.category}
                        </span>

                        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                          {service.title}
                        </h2>

                        <p className="text-base sm:text-lg text-[#8B95A5] leading-relaxed mb-6">
                          {service.heroDescription}
                        </p>
                      </div>

                      <div className="pt-4">
                        <Button
                          to={`/services/${service.slug}`}
                          variant="primary"
                          iconRight={<ArrowRight size={16} />}
                        >
                          View {service.title} Specifications
                        </Button>
                      </div>
                    </div>

                    {/* Right Column: Capabilities & Deliverables */}
                    <div className="lg:col-span-6 flex flex-col justify-center bg-[#151A26] rounded-2xl p-6 sm:p-8 border border-[#232B3E]">
                      <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--color-accent-soft)] mb-4">
                        Core Studio Capabilities
                      </h3>
                      <ul className="flex flex-col gap-3 mb-8">
                        {service.capabilities.map((cap) => (
                          <li key={cap} className="flex items-start gap-3 text-sm text-[#F3F5F9]">
                            <CheckCircle2 size={16} className="text-[var(--color-accent-soft)] shrink-0 mt-0.5" />
                            <span>{cap}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Outcomes metrics */}
                      <div className="grid grid-cols-2 gap-4 pt-6 border-t border-[#232B3E]">
                        {service.outcomes.map((item) => (
                          <div key={item.label}>
                            <div className="font-heading text-2xl font-bold text-[var(--color-accent-soft)]">
                              {item.metric}
                            </div>
                            <div className="text-xs text-[#8B95A5] mt-1 font-mono">
                              {item.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </SectionReveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Bottom CTA */}
      <section className="bg-[#0F131C] text-[#F3F5F9] py-20 border-t border-[#232B3E]">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-2 text-white">
                Have a creative brief or web build in mind?
              </h2>
              <p className="text-[#8B95A5]">
                Our designers and engineers will review your goals and provide an initial creative direction within 24 hours.
              </p>
            </div>
            <Button to="/contact" variant="primary" size="lg">
              Start a Conversation
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
