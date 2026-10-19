import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { SectionReveal } from '@/components/ui/SectionReveal';
import { staggerContainer, staggerChild, scrollViewport } from '@/lib/motion';
import { useReducedMotionPreference } from '@/hooks/useReducedMotionPreference';
import { workShowcaseContent } from '../data/homeContent';

/** Abstract interface preview illustration for project cards. */
function ProjectVisual({ gradient, index }) {
  const colors = [
    { line: '#C6F36B', rect: '#247A55', dot: '#C6F36B' },
    { line: '#247A55', rect: '#102820', dot: '#C6F36B' },
    { line: '#C6F36B', rect: '#247A55', dot: '#fff' },
  ];
  const c = colors[index % colors.length];

  return (
    <div
      className={`relative h-56 w-full overflow-hidden bg-gradient-to-br ${gradient}`}
      aria-hidden="true"
    >
      {/* Faint grid */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      {/* Illustrative UI chrome */}
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 400 224"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Top bar */}
        <rect x="0" y="0" width="400" height="32" fill="rgba(0,0,0,0.2)" />
        <circle cx="16" cy="16" r="4" fill="#ff6b6b" opacity="0.6" />
        <circle cx="28" cy="16" r="4" fill="#ffd93d" opacity="0.6" />
        <circle cx="40" cy="16" r="4" fill="#6bcb77" opacity="0.6" />
        <rect x="60" y="10" width="80" height="12" rx="6" fill="rgba(255,255,255,0.1)" />

        {/* Left sidebar */}
        <rect x="0" y="32" width="72" height="192" fill="rgba(0,0,0,0.15)" />
        {[56, 80, 104, 128, 152].map((y, i) => (
          <rect key={i} x="12" y={y} width={i === 0 ? 48 : 36} height="8" rx="4" fill={i === 0 ? c.line : 'rgba(255,255,255,0.15)'} opacity={i === 0 ? 0.9 : 0.5} />
        ))}

        {/* Main content area */}
        <rect x="82" y="42" width="220" height="14" rx="7" fill="rgba(255,255,255,0.5)" />
        <rect x="82" y="64" width="160" height="8" rx="4" fill="rgba(255,255,255,0.25)" />

        {/* Chart bars */}
        {[0.4, 0.7, 0.55, 0.9, 0.65, 0.8].map((h, i) => (
          <rect
            key={i}
            x={82 + i * 34}
            y={180 - h * 80}
            width="24"
            height={h * 80}
            rx="4"
            fill={i === 3 ? c.line : c.rect}
            opacity={i === 3 ? 0.9 : 0.5}
          />
        ))}

        {/* Right side card */}
        <rect x="312" y="42" width="80" height="100" rx="8" fill="rgba(0,0,0,0.2)" />
        <rect x="320" y="54" width="60" height="8" rx="4" fill={c.line} opacity="0.7" />
        <rect x="320" y="70" width="48" height="6" rx="3" fill="rgba(255,255,255,0.3)" />
        <rect x="320" y="84" width="52" height="6" rx="3" fill="rgba(255,255,255,0.2)" />
        <circle cx="352" cy="116" r="16" fill={c.line} opacity="0.3" />

        {/* Dot accent */}
        <circle cx="388" cy="36" r="4" fill={c.dot} opacity="0.8" />
      </svg>

      {/* Gradient overlay bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/30 to-transparent" />
    </div>
  );
}

/**
 * WorkShowcaseSection — editorial concept project cards with interface previews,
 * hover zoom, animated arrow, and restrained scroll effects.
 */
export function WorkShowcaseSection() {
  const reducedMotion = useReducedMotionPreference();
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  // Subtle parallax on the section heading area
  const headingY = useTransform(
    scrollYProgress,
    [0, 1],
    reducedMotion ? ['0%', '0%'] : ['-4%', '4%']
  );

  return (
    <section ref={sectionRef} id="work" className="section bg-[var(--color-charcoal)] text-[var(--color-off-white)] relative overflow-hidden">
      {/* Background texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        aria-hidden="true"
        style={{
          backgroundImage:
            'linear-gradient(var(--color-lime) 1px, transparent 1px), linear-gradient(90deg, var(--color-lime) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <Container>
        <SectionReveal>
          <motion.div style={reducedMotion ? {} : { y: headingY }}>
            <SectionHeading
              eyebrow={workShowcaseContent.eyebrow}
              heading={workShowcaseContent.heading}
              description={workShowcaseContent.description}
              align="left"
              theme="dark"
            />
          </motion.div>
        </SectionReveal>

        <motion.div
          className="mt-14 grid gap-6 md:grid-cols-3 lg:mt-20"
          variants={reducedMotion ? undefined : staggerContainer}
          initial={reducedMotion ? undefined : 'hidden'}
          whileInView={reducedMotion ? undefined : 'visible'}
          viewport={scrollViewport}
        >
          {workShowcaseContent.items.map((item, i) => (
            <motion.article
              key={item.title}
              variants={reducedMotion ? undefined : staggerChild}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/8 bg-white/5 transition-all duration-500 hover:border-[var(--color-lime)]/20 hover:shadow-2xl cursor-pointer"
            >
              {/* Project visual with zoom on hover */}
              <div className="overflow-hidden">
                <motion.div
                  className="transition-transform duration-700 ease-out group-hover:scale-105"
                >
                  <ProjectVisual gradient={item.gradient} index={i} />
                </motion.div>
              </div>

              {/* Card content */}
              <div className="flex flex-1 flex-col gap-3 p-6">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--color-lime)]">
                    {item.category}
                  </span>
                  {/* Animated arrow */}
                  <motion.div
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-[var(--color-muted)] transition-all duration-300 group-hover:border-[var(--color-lime)] group-hover:text-[var(--color-lime)] group-hover:bg-[var(--color-lime)]/10"
                    animate={reducedMotion ? {} : undefined}
                  >
                    <ArrowUpRight size={14} aria-hidden="true" />
                  </motion.div>
                </div>

                <h3 className="text-lg font-bold text-[var(--color-off-white)] transition-colors duration-300 group-hover:text-[var(--color-lime)] leading-tight">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-[var(--color-muted)]">
                  {item.description}
                </p>
              </div>

              {/* Bottom lime accent bar — animates in on hover */}
              <div className="h-0.5 w-0 bg-[var(--color-lime)] transition-all duration-500 group-hover:w-full" />
            </motion.article>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
