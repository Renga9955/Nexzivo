import { Helmet } from 'react-helmet-async';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { SectionReveal } from '@/components/ui/SectionReveal';
import { productsContent } from '@/features/home/data/homeContent';
import { siteConfig } from '@/config/site';

export function ProductsPage() {
  return (
    <>
      <Helmet>
        <title>Proprietary Products &amp; Labs — {siteConfig.name}</title>
        <meta
          name="description"
          content="Explore NEXZIVO's internal digital products and labs: Navigator, Scope, and Relay."
        />
      </Helmet>

      {/* Hero Header */}
      <section className="relative overflow-hidden bg-[#080A0F] text-[#F3F5F9] pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          aria-hidden="true"
          style={{
            backgroundImage:
              'linear-gradient(var(--color-electric-blue) 1px, transparent 1px), linear-gradient(90deg, var(--color-electric-blue) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />

        <Container>
          <div className="max-w-3xl">
            <span className="inline-block text-xs font-mono font-semibold tracking-widest uppercase text-[var(--color-accent-soft)] mb-4">
              NEXZIVO Labs
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.08] mb-6 text-white">
              Building intelligent tools beyond client briefs.
            </h1>
            <p className="text-lg sm:text-xl text-[#9AA5B8] leading-relaxed">
              We incubate proprietary software products designed to make project delivery, requirement scoping, and team collaboration faster and more transparent.
            </p>
          </div>
        </Container>
      </section>

      {/* Products Showcase */}
      <section className="section bg-[#0C1019] text-[#F3F5F9]">
        <Container>
          <div className="flex flex-col gap-10">
            {productsContent.items.map((prod) => {
              const Icon = prod.icon;
              return (
                <SectionReveal key={prod.name}>
                  <div className="bg-[#0F1420] p-8 sm:p-12 rounded-3xl border border-white/10 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center hover:border-[var(--color-accent-soft)]/30 transition-all duration-300">
                    <div className="lg:col-span-8 flex flex-col gap-4">
                      <div className="flex items-center gap-4">
                        <span className="h-12 w-12 rounded-xl border border-[var(--color-accent-soft)]/30 bg-[var(--color-accent-soft)]/10 text-[var(--color-accent-soft)] flex items-center justify-center">
                          <Icon size={24} />
                        </span>
                        <div>
                          <h2 className="text-2xl sm:text-3xl font-bold text-white">
                            {prod.name}
                          </h2>
                          <span className="text-xs uppercase font-mono tracking-wider text-[var(--color-accent-soft)] font-semibold">
                            {prod.tagline}
                          </span>
                        </div>
                        <span
                          className={`ml-auto rounded-full px-3 py-1 text-xs font-mono uppercase tracking-wider ${
                            prod.status === 'Coming Soon'
                              ? 'border border-[var(--color-accent-soft)]/30 bg-[var(--color-accent-soft)]/15 text-[var(--color-accent-soft)]'
                              : 'bg-white/8 text-[#9AA5B8]'
                          }`}
                        >
                          {prod.status}
                        </span>
                      </div>

                      <p className="text-base sm:text-lg text-[#9AA5B8] leading-relaxed mt-2">
                        {prod.description}
                      </p>
                    </div>

                    <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center">
                      <Button to="/contact" variant="primary" iconRight={<ArrowRight size={16} />}>
                        Request Early Access
                      </Button>
                    </div>
                  </div>
                </SectionReveal>
              );
            })}
          </div>
        </Container>
      </section>
    </>
  );
}
