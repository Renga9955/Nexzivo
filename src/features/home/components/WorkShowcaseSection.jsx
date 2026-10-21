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

/** Studio project preview banner with green gradient accents */
function ProjectStudioVisual({ project }) {
  return (
    <div
      className="relative h-60 w-full overflow-hidden bg-[var(--color-deep-green)] flex items-center justify-center p-6 text-white"
      aria-hidden="true"
    >
      {/* Decorative subtle ambient lights */}
      <div className="absolute -top-12 -right-12 h-44 w-44 rounded-full bg-[var(--color-green)]/40 blur-2xl" />
      <div className="absolute -bottom-12 -left-12 h-44 w-44 rounded-full bg-[var(--color-lime)]/20 blur-2xl" />

      {/* Grid texture */}
      <div
        className="absolute inset-0 opacity-[0.1]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      {/* Centerpiece title */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center">
        <span className="font-bold text-[10px] uppercase tracking-widest text-[var(--color-lime)] bg-black/30 px-3 py-1 rounded-full border border-white/10 mb-2">
          {project.category}
        </span>
        <h4 className="font-heading text-xl sm:text-2xl font-bold text-white max-w-xs">
          {project.title}
        </h4>
      </div>

      {/* Corner framing */}
      <div className="absolute top-4 left-4 h-3 w-3 border-t-2 border-l-2 border-white/30" />
      <div className="absolute top-4 right-4 h-3 w-3 border-t-2 border-r-2 border-white/30" />
      <div className="absolute bottom-4 left-4 h-3 w-3 border-b-2 border-l-2 border-white/30" />
      <div className="absolute bottom-4 right-4 h-3 w-3 border-b-2 border-r-2 border-white/30" />
    </div>
  );
}

/**
 * WorkShowcaseSection — White background with prominent centred heading
 * and elevated showcase cards.
 */
export function WorkShowcaseSection() {
  const reducedMotion = useReducedMotionPreference();
  const sectionRef = useRef(null);

  return (
    <section ref={sectionRef} id="work" className="section bg-white text-[var(--color-text-body)] relative overflow-hidden border-t border-[var(--color-muted-border)]">
      <Container>
        <SectionReveal>
          <div className="flex flex-col items-center text-center mb-14 lg:mb-18">
            <SectionHeading
              eyebrow={workShowcaseContent.eyebrow}
              heading={workShowcaseContent.heading}
              description={workShowcaseContent.description}
              align="center"
              theme="light"
              className="max-w-3xl"
            />
            <div className="mt-6">
              <Link
                to="/work"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[var(--color-green)] hover:text-[var(--color-deep-green)] transition-colors group"
              >
                <span>Explore complete portfolio</span>
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
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
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-[var(--color-muted-border)] bg-white transition-all duration-300 hover:border-[var(--color-green)] hover:shadow-xl"
              >
                <Link
                  to={projectUrl}
                  className="flex flex-col flex-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-green)] rounded-2xl"
                  aria-label={`View case study for ${item.title}`}
                >
                  {/* Project visual with subtle scale */}
                  <div className="overflow-hidden">
                    <motion.div className="transition-transform duration-500 ease-out group-hover:scale-105">
                      <ProjectStudioVisual project={item} />
                    </motion.div>
                  </div>

                  {/* Card content */}
                  <div className="flex flex-1 flex-col justify-between gap-4 p-6 sm:p-7">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-[var(--color-green)]">
                          {item.category}
                        </span>
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-[var(--color-muted-border)] bg-[var(--color-off-white)] text-[var(--color-text-muted)] transition-all duration-200 group-hover:bg-[var(--color-deep-green)] group-hover:text-white">
                          <ArrowUpRight size={15} aria-hidden="true" />
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-[var(--color-deep-green)] group-hover:text-[var(--color-green)] transition-colors leading-tight mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-[var(--color-text-body)]">
                        {item.description}
                      </p>
                    </div>

                    {/* Tech Pills */}
                    <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[var(--color-muted-border)]">
                      {item.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="text-[11px] font-mono font-medium px-2.5 py-0.5 rounded-md bg-[var(--color-off-white)] text-[var(--color-deep-green)] border border-[var(--color-muted-border)]"
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
