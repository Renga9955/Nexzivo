import { Helmet } from 'react-helmet-async';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionReveal } from '@/components/ui/SectionReveal';
import { Button } from '@/components/ui/Button';
import { workProjectsData } from '@/features/home/data/homeContent';
import { siteConfig } from '@/config/site';

export function WorkArchivePage() {
  return (
    <>
      <Helmet>
        <title>Selected Work &amp; Portfolio Archive — {siteConfig.name} Studio</title>
        <meta
          name="description"
          content="Explore NEXZIVO's selected work: Website development, poster & graphic design, and UI/UX interface systems."
        />
      </Helmet>

      {/* Hero Header */}
      <section className="relative overflow-hidden bg-[#080A0F] text-[#F3F5F9] pt-36 pb-20 lg:pt-44 lg:pb-28 border-b border-[#232B3E]">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          aria-hidden="true"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: '48px 48px',
          }}
        />

        <Container>
          <div className="max-w-3xl">
            <span className="inline-block text-xs font-mono font-bold tracking-widest uppercase text-[var(--color-accent-soft)] mb-4">
              Portfolio &amp; Selected Work
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.08] mb-6 text-white">
              Work that commands attention.
            </h1>
            <p className="text-lg sm:text-xl text-[#8B95A5] leading-relaxed">
              A curated archive of client engagements and concept work across website development, experimental poster design, and UI/UX product engineering.
            </p>
          </div>
        </Container>
      </section>

      {/* Projects Grid */}
      <section className="section bg-[#080A0F]">
        <Container>
          <div className="flex flex-col gap-12 lg:gap-16">
            {workProjectsData.map((project) => (
              <SectionReveal key={project.slug}>
                <article
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[var(--color-slate-dark)] rounded-3xl overflow-hidden border border-[var(--color-slate-border)] hover:border-[var(--color-accent)]/40 transition-all shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-lift)] group"
                >
                  {/* Visual preview */}
                  <div className={`lg:col-span-6 h-72 sm:h-80 lg:h-96 w-full bg-gradient-to-br ${project.gradient} relative overflow-hidden flex items-center justify-center p-8`}>
                    <div
                      className="absolute inset-0 opacity-15"
                      style={{
                        backgroundImage:
                          'linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)',
                        backgroundSize: '32px 32px',
                      }}
                    />
                    <div className="relative z-10 text-center">
                      <span className="text-[10px] uppercase font-mono tracking-widest text-[var(--color-accent-soft)] bg-[#080A0F]/80 px-3 py-1 rounded-full border border-white/10 block mb-3 mx-auto w-max">
                        {project.category}
                      </span>
                      <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white max-w-sm mx-auto">
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="lg:col-span-6 p-8 sm:p-12 flex flex-col justify-between h-full">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-[11px] font-mono uppercase tracking-wider text-[var(--color-accent-soft)] bg-[#151A26] border border-[#232B3E] px-3 py-1 rounded-full">
                          {project.category}
                        </span>
                        <span className="text-xs font-mono text-[#8B95A5]">
                          {project.timeline}
                        </span>
                      </div>

                      <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                        {project.title}
                      </h2>

                      <p className="text-sm sm:text-base text-[#8B95A5] leading-relaxed mb-6">
                        {project.description}
                      </p>

                      {/* Tech Pills */}
                      <div className="flex flex-wrap gap-2 mb-8">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="text-xs font-mono px-2.5 py-1 rounded-md bg-[#151A26] text-[#8B95A5] border border-[#232B3E]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-[#232B3E] flex items-center justify-between flex-wrap gap-4">
                      <Button
                        to={`/work/${project.slug}`}
                        variant="primary"
                        iconRight={<ArrowRight size={16} />}
                      >
                        Explore Case Study
                      </Button>

                      <div className="flex items-center gap-4 text-xs font-mono text-[#8B95A5]">
                        {project.metrics.map((m) => (
                          <span key={m.label}>
                            <strong className="text-white">{m.value}</strong> {m.label}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              </SectionReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0F131C] text-[#F3F5F9] border-t border-[#232B3E]">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <div>
              <h2 className="text-3xl font-bold mb-2 text-white">Have a design or web project?</h2>
              <p className="text-[#8B95A5]">We turn ambitious creative concepts into deployed, high-converting digital products.</p>
            </div>
            <Button to="/contact" variant="primary" size="lg">
              Let's Build Together
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
