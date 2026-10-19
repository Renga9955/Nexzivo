import { useParams, Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, ArrowRight, ChevronRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { workProjectsData } from '@/features/home/data/homeContent';
import { siteConfig } from '@/config/site';

export function ProjectDetailPage() {
  const { slug } = useParams();
  const project = workProjectsData.find((p) => p.slug === slug);

  if (!project) {
    return <Navigate to="/work" replace />;
  }

  const currentIndex = workProjectsData.findIndex((p) => p.slug === slug);
  const nextProject = workProjectsData[(currentIndex + 1) % workProjectsData.length];

  return (
    <>
      <Helmet>
        <title>{project.title} — Case Study | {siteConfig.name} Studio</title>
        <meta name="description" content={project.description} />
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
            <Link to="/work" className="hover:underline flex items-center gap-1">
              <ArrowLeft size={14} /> Work Archive
            </Link>
            <ChevronRight size={12} className="opacity-50 text-[#8B95A5]" />
            <span className="text-[#8B95A5]">{project.title}</span>
          </div>

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#151A26] border border-[#232B3E] text-xs font-mono text-[var(--color-accent-soft)] mb-4">
              <span>{project.category}</span>
              <span>·</span>
              <span>{project.timeline}</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.08] mb-4 text-white">
              {project.title}
            </h1>
            <p className="text-xl sm:text-2xl text-[var(--color-accent-soft)] font-heading mb-4">
              {project.tagline}
            </p>
            <p className="text-lg sm:text-xl text-[#8B95A5] leading-relaxed max-w-2xl">
              {project.description}
            </p>
          </div>

          {/* Quick Meta Row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-10 mt-12 border-t border-[#232B3E]">
            <div>
              <div className="text-xs uppercase font-mono text-[var(--color-accent-soft)] mb-1">
                Context / Client
              </div>
              <div className="text-sm font-semibold text-white">{project.client}</div>
            </div>
            <div>
              <div className="text-xs uppercase font-mono text-[var(--color-accent-soft)] mb-1">
                Timeline
              </div>
              <div className="text-sm font-semibold text-white">{project.timeline}</div>
            </div>
            <div>
              <div className="text-xs uppercase font-mono text-[var(--color-accent-soft)] mb-1">
                Disciplines
              </div>
              <div className="text-sm font-semibold text-white">{project.services.join(', ')}</div>
            </div>
            <div>
              <div className="text-xs uppercase font-mono text-[var(--color-accent-soft)] mb-1">
                Key Result
              </div>
              <div className="text-sm font-semibold text-[var(--color-accent-soft)]">
                {project.metrics[0]?.value} {project.metrics[0]?.label}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Deep Dive: Challenge & Solution */}
      <section className="section bg-[#080A0F]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-8 flex flex-col gap-10">
              {/* Challenge */}
              <div className="bg-[#0F131C] p-8 sm:p-12 rounded-3xl border border-[#232B3E] shadow-lg">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[var(--color-accent-strong)] mb-2 block">
                  The Problem Space
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                  The Creative &amp; Technical Challenge
                </h2>
                <p className="text-base sm:text-lg text-[#8B95A5] leading-relaxed">
                  {project.challenge}
                </p>
              </div>

              {/* Solution */}
              <div className="bg-[#0F131C] p-8 sm:p-12 rounded-3xl border border-[#232B3E] shadow-lg">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[var(--color-accent-soft)] mb-2 block">
                  The Studio Solution
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                  Crafting the Implementation
                </h2>
                <p className="text-base sm:text-lg text-[#8B95A5] leading-relaxed mb-6">
                  {project.solution}
                </p>

                {/* Tech Stack */}
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--color-accent-soft)] mb-3">
                  Tools &amp; Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1.5 rounded-lg bg-[#151A26] text-sm font-mono text-white border border-[#232B3E]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar CTA & Metrics */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              <div className="bg-[#0F131C] text-[#F3F5F9] p-8 rounded-3xl border border-[#232B3E] shadow-xl">
                <h3 className="text-lg font-bold mb-4 text-[var(--color-accent-soft)] font-mono">
                  Verified Outcomes
                </h3>
                <div className="flex flex-col gap-6 mb-8">
                  {project.metrics.map((m) => (
                    <div key={m.label} className="border-b border-[#232B3E] pb-4 last:border-b-0 last:pb-0">
                      <div className="font-heading text-4xl font-bold text-white mb-1">
                        {m.value}
                      </div>
                      <div className="text-xs font-mono text-[#8B95A5]">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>

                <Button to="/contact" variant="primary" className="w-full justify-center">
                  Discuss a Similar Project
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Next Project Footer */}
      <section className="border-t border-[#232B3E] bg-[#0F131C] py-12">
        <Container>
          <div className="flex items-center justify-between flex-wrap gap-4">
            <Link
              to="/work"
              className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#8B95A5] hover:text-white"
            >
              <ArrowLeft size={16} /> All Case Studies
            </Link>

            <Link
              to={`/work/${nextProject.slug}`}
              className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[var(--color-accent-soft)] hover:text-white group"
            >
              <span>Next Project: {nextProject.title}</span>
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
