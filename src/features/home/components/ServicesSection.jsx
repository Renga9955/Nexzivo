import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { SectionReveal } from '@/components/ui/SectionReveal';
import { staggerContainer, staggerChild, scrollViewport } from '@/lib/motion';
import { useReducedMotionPreference } from '@/hooks/useReducedMotionPreference';
import { servicesContent } from '../data/homeContent';

/**
 * ServicesSection — Studio editorial grid showcasing Website Development,
 * Poster & Graphic Design, UI/UX, and Innovation.
 */
export function ServicesSection() {
  const reducedMotion = useReducedMotionPreference();

  return (
    <section id="services" className="section bg-[var(--color-slate-dark)] relative border-t border-[var(--color-slate-border)]">
      <Container>
        <SectionReveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <SectionHeading
              eyebrow={servicesContent.eyebrow}
              heading={servicesContent.heading}
              description={servicesContent.description}
              align="left"
            />
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[var(--color-accent-soft)] hover:text-white transition-colors self-start md:self-end pb-2 group"
            >
              <span>Explore all studio capabilities</span>
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </SectionReveal>

        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2"
          variants={reducedMotion ? undefined : staggerContainer}
          initial={reducedMotion ? undefined : 'hidden'}
          whileInView={reducedMotion ? undefined : 'visible'}
          viewport={scrollViewport}
        >
          {servicesContent.items.map((service) => {
            const Icon = service.icon;
            const targetUrl = `/services/${service.slug}`;

            return (
              <motion.div
                key={service.title}
                variants={reducedMotion ? undefined : staggerChild}
                className="relative"
              >
                <Link
                  to={targetUrl}
                  className="group relative flex flex-col justify-between gap-8 p-8 sm:p-10 rounded-2xl bg-[var(--color-slate-card)] border border-[var(--color-slate-border)] hover:border-[var(--color-accent)]/60 transition-all duration-300 hover:shadow-[var(--shadow-lift)] h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent-soft)]"
                  aria-label={`Explore ${service.title}`}
                >
                  {/* Top Bar with Number and Icon */}
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-3xl sm:text-4xl font-bold text-[var(--color-subtle-gray)]/40 group-hover:text-[var(--color-accent-soft)] transition-colors">
                      {service.number}
                    </span>

                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-obsidian)] border border-[var(--color-slate-border)] text-[var(--color-accent-soft)] group-hover:bg-[var(--color-accent-strong)] group-hover:text-white group-hover:border-[var(--color-accent-strong)] transition-all duration-300">
                      <Icon size={22} aria-hidden="true" />
                    </span>
                  </div>

                  {/* Content Area */}
                  <div className="flex flex-col gap-3">
                    <span className="text-[11px] font-semibold tracking-widest uppercase text-[var(--color-accent-soft)]">
                      {service.category}
                    </span>
                    <h3 className="text-2xl font-bold text-[var(--color-soft-white)] transition-colors group-hover:text-white">
                      {service.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-[var(--color-subtle-gray)]">
                      {service.shortDescription}
                    </p>
                  </div>

                  {/* Bottom Action Indicator */}
                  <div className="pt-4 border-t border-[var(--color-slate-border)]/60 flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-[var(--color-subtle-gray)] group-hover:text-[var(--color-accent-soft)] transition-colors">
                    <span>View Specifications</span>
                    <div className="flex items-center gap-1">
                      <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
