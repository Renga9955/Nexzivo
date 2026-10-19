import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { SectionReveal } from '@/components/ui/SectionReveal';
import { staggerContainer, staggerChild, scrollViewport } from '@/lib/motion';
import { useReducedMotionPreference } from '@/hooks/useReducedMotionPreference';
import { workShowcaseContent } from '../data/homeContent';

/** Abstract illustrative visual preview for studio projects */
function ProjectStudioVisual({ project }) {
  return (
    <div
      className={`relative h-64 w-full overflow-hidden bg-gradient-to-br ${project.gradient} flex items-center justify-center p-6`}
      aria-hidden="true"
    >
      {/* Subtle precision grid */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      {/* Centerpiece label */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center">
        <span className="font-semibold text-[10px] uppercase tracking-widest text-white/80 bg-black/25 px-2.5 py-1 rounded-full border border-white/15 mb-2">
          {project.category}
        </span>
        <h4 className="font-heading text-xl sm:text-2xl font-bold text-white max-w-xs">
          {project.title}
        </h4>
      </div>

      {/* Neutral corner framing */}
      <div className="absolute top-4 left-4 h-3 w-3 border-t border-l border-white/25" />
      <div className="absolute top-4 right-4 h-3 w-3 border-t border-r border-white/25" />
      <div className="absolute bottom-4 left-4 h-3 w-3 border-b border-l border-white/25" />
      <div className="absolute bottom-4 right-4 h-3 w-3 border-b border-r border-white/25" />
    </div>
  );
}

/**
 * WorkShowcaseSection — Curated studio projects with graphic treatments,
 * smooth hover elevation, and direct links to full case studies.
 */
export function WorkShowcaseSection() {
  const reducedMotion = useReducedMotionPreference();
  const sectionRef = useRef(null);

  return (
    <section ref={sectionRef} id="work" className="section bg-[var(--color-obsidian)] text-[var(--color-soft-white)] relative overflow-hidden">
      <Container>
        <SectionReveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <SectionHeading
              eyebrow={workShowcaseContent.eyebrow}
              heading={workShowcaseContent.heading}
              description={workShowcaseContent.description}
              align="left"
            />
            <Link
              to="/work"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[var(--color-accent-soft)] hover:text-white transition-colors self-start md:self-end pb-2 group"
            >
              <span>Explore complete portfolio</span>
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </SectionReveal>

        <motion.div
          className="grid gap-6 md:grid-cols-3"
          variants={reducedMotion ? undefined : staggerContainer}
          initial={reducedMotion ? undefined : 'hidden'}
          whileInView={reducedMotion ? undefined : 'visible'}
          viewport={scrollViewport}
        >
          {workShowcaseContent.items.map((item) => {
            const projectUrl = `/work/${item.slug}`;

            return (
              <motion.article
                key={item.title}
                variants={reducedMotion ? undefined : staggerChild}
                data-cursor="project"
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-[var(--color-slate-border)] bg-[var(--color-slate-dark)] transition-all duration-300 hover:border-[var(--color-accent)]/50 hover:shadow-[var(--shadow-lift)]"
              >
                <Link
                  to={projectUrl}
                  className="flex flex-col flex-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent-soft)] rounded-2xl"
                  aria-label={`View case study for ${item.title}`}
                >
                  {/* Project visual with subtle scale on hover */}
                  <div className="overflow-hidden">
                    <motion.div
                      className="transition-transform duration-500 ease-out group-hover:scale-105"
                    >
                      <ProjectStudioVisual project={item} />
                    </motion.div>
                  </div>

                  {/* Card content */}
                  <div className="flex flex-1 flex-col justify-between gap-4 p-6 sm:p-7">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[11px] font-semibold uppercase tracking-wider text-[var(--color-accent-soft)]">
                          {item.category}
                        </span>
                        <motion.div
                          className="flex h-8 w-8 items-center justify-center rounded-lg border border-[var(--color-slate-border)] bg-[var(--color-slate-card)] text-[var(--color-subtle-gray)] transition-all duration-200 group-hover:border-[var(--color-accent)] group-hover:text-[var(--color-accent-soft)]"
                        >
                          <ArrowUpRight size={15} aria-hidden="true" />
                        </motion.div>
                      </div>

                      <h3 className="text-xl font-bold text-[var(--color-soft-white)] group-hover:text-white transition-colors leading-tight mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-[var(--color-subtle-gray)]">
                        {item.description}
                      </p>
                    </div>

                    {/* Tech Pills */}
                    <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[var(--color-slate-border)]/60">
                      {item.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-[var(--color-slate-card)] text-[var(--color-subtle-gray)] border border-[var(--color-slate-border)]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </motion.article>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
