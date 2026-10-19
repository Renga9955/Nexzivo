import { useParams, Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, ArrowRight, CheckCircle2, ChevronRight, Layers } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { SectionReveal } from '@/components/ui/SectionReveal';
import { servicesData } from '@/features/home/data/homeContent';
import { siteConfig } from '@/config/site';

export function ServiceDetailPage() {
  const { slug } = useParams();
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const Icon = service.icon;

  const currentIndex = servicesData.findIndex((s) => s.slug === slug);
  const nextService = servicesData[(currentIndex + 1) % servicesData.length];

  return (
    <>
      <Helmet>
        <title>{service.title} — {siteConfig.name} Studio</title>
        <meta name="description" content={service.shortDescription} />
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
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs font-mono font-semibold text-[var(--color-accent-soft)] mb-8 tracking-wider uppercase">
            <Link to="/services" className="hover:underline flex items-center gap-1">
              <ArrowLeft size={14} /> Services
            </Link>
            <ChevronRight size={12} className="opacity-50 text-[#8B95A5]" />
            <span className="text-[#8B95A5]">{service.title}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-[#151A26] border border-[#232B3E] text-xs font-mono tracking-widest uppercase text-[var(--color-accent-soft)] mb-6">
                <Icon size={16} />
                <span>Service No. {service.number} · {service.category}</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.08] mb-6 text-white">
                {service.title}
              </h1>
              <p className="text-lg sm:text-xl text-[#8B95A5] leading-relaxed max-w-2xl">
                {service.heroDescription}
              </p>
            </div>

            {/* Quick Metrics Badge */}
            <div className="lg:col-span-4 bg-[#0F131C] border border-[#232B3E] rounded-2xl p-6 sm:p-8 shadow-lg">
              <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--color-accent-soft)] mb-4">
                Studio Standards
              </h2>
              <div className="flex flex-col gap-6">
                {service.outcomes.map((item) => (
                  <div key={item.label} className="border-b border-[#232B3E] pb-4 last:border-b-0 last:pb-0">
                    <div className="font-heading text-3xl font-bold text-[var(--color-accent-soft)]">
                      {item.metric}
                    </div>
                    <div className="text-xs font-mono text-[#8B95A5] mt-1">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Capabilities & Detailed Breakdown */}
      <section className="section bg-[#080A0F]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left: What We Bring & Core Capabilities */}
            <div className="lg:col-span-7 flex flex-col gap-10">
              <SectionReveal>
                <div>
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-[var(--color-accent-soft)] mb-2 block">
                    Execution Method
                  </span>
                  <h2 className="text-3xl font-bold text-white mb-6">
                    What we craft and deliver
                  </h2>
                  <p className="text-base sm:text-lg text-[#8B95A5] leading-relaxed mb-8">
                    Every deliverable is crafted from scratch with bespoke attention to detail, brand positioning, and production longevity.
                  </p>

                  <div className="flex flex-col gap-4">
                    {service.capabilities.map((cap, i) => (
                      <div
                        key={cap}
                        className="flex items-start gap-4 p-5 rounded-2xl bg-[#0F131C] border border-[#232B3E] shadow-sm hover:border-[var(--color-accent)]/40 transition-colors"
                      >
                        <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#151A26] border border-[#232B3E] text-[var(--color-accent-soft)] font-mono text-xs font-bold shrink-0 mt-0.5">
                          0{i + 1}
                        </span>
                        <div>
                          <h3 className="font-bold text-white text-base">
                            {cap}
                          </h3>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </SectionReveal>
            </div>

            {/* Right: Concrete Deliverables Checklist */}
            <div className="lg:col-span-5">
              <SectionReveal delay={0.15}>
                <div className="sticky top-28 bg-[#0F131C] rounded-3xl p-8 border border-[#232B3E] shadow-xl">
                  <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                    <Layers size={20} className="text-[var(--color-accent-soft)]" />
                    <span>Tangible Deliverables</span>
                  </h3>
                  <p className="text-sm text-[#8B95A5] mb-6">
                    Standard outputs delivered upon completion.
                  </p>

                  <ul className="flex flex-col gap-4 mb-8">
                    {service.deliverables.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-[#F3F5F9]">
                        <CheckCircle2 size={18} className="text-[var(--color-accent-soft)] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    to="/contact"
                    variant="primary"
                    className="w-full justify-center"
                    size="lg"
                  >
                    Request Proposal for {service.title}
                  </Button>
                </div>
              </SectionReveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Next Service Navigation */}
      <section className="border-t border-[#232B3E] bg-[#0F131C] py-12">
        <Container>
          <div className="flex items-center justify-between flex-wrap gap-4">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#8B95A5] hover:text-white"
            >
              <ArrowLeft size={16} /> All Services
            </Link>

            <Link
              to={`/services/${nextService.slug}`}
              className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[var(--color-accent-soft)] hover:text-white group"
            >
              <span>Next: {nextService.title}</span>
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
