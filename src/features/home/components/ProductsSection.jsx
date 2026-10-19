import { motion } from 'motion/react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { SectionReveal } from '@/components/ui/SectionReveal';
import { staggerContainer, staggerChild, scrollViewport } from '@/lib/motion';
import { useReducedMotionPreference } from '@/hooks/useReducedMotionPreference';
import { productsContent } from '../data/homeContent';

/** Abstract minimal geometric preview for product cards. */
function ProductPreview({ index }) {
  const configs = [
    {
      lines: [[20, 30, 80, 30], [20, 46, 65, 46], [20, 62, 72, 62]],
      circle: { cx: 80, cy: 70, r: 14 },
      dot: '#C6F36B',
    },
    {
      lines: [[16, 24, 72, 24], [16, 40, 56, 40], [16, 56, 80, 56]],
      circle: { cx: 76, cy: 76, r: 10 },
      dot: '#C6F36B',
    },
    {
      lines: [[12, 28, 76, 28], [12, 44, 60, 44], [12, 60, 68, 60]],
      circle: { cx: 72, cy: 72, r: 12 },
      dot: '#C6F36B',
    },
  ];
  const cfg = configs[index % configs.length];

  return (
    <div className="pointer-events-none" aria-hidden="true">
      <svg
        viewBox="0 0 100 100"
        className="h-full w-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Window chrome */}
        <rect x="0" y="0" width="100" height="100" rx="8" fill="rgba(255,255,255,0.03)" />
        <rect x="0" y="0" width="100" height="18" rx="8" fill="rgba(255,255,255,0.05)" />
        <circle cx="8" cy="9" r="2.5" fill="rgba(255,255,255,0.15)" />
        <circle cx="16" cy="9" r="2.5" fill="rgba(255,255,255,0.15)" />
        <circle cx="24" cy="9" r="2.5" fill="rgba(255,255,255,0.15)" />

        {/* Content lines */}
        {cfg.lines.map(([x1, y1, x2, y2], i) => (
          <rect key={i} x={x1} y={y1} width={x2 - x1} height="5" rx="2.5" fill="rgba(255,255,255,0.12)" />
        ))}

        {/* Accent circle */}
        <circle
          cx={cfg.circle.cx}
          cy={cfg.circle.cy}
          r={cfg.circle.r}
          stroke={cfg.dot}
          strokeWidth="1.5"
          opacity="0.4"
        />
        <circle
          cx={cfg.circle.cx}
          cy={cfg.circle.cy}
          r="3"
          fill={cfg.dot}
          opacity="0.7"
        />
      </svg>
    </div>
  );
}

/**
 * ProductsSection — future product cards with status labels and interface previews.
 */
export function ProductsSection() {
  const reducedMotion = useReducedMotionPreference();

  return (
    <section id="products" className="section relative overflow-hidden bg-[var(--color-deep-green)] text-[var(--color-off-white)]">
      {/* Grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        aria-hidden="true"
        style={{
          backgroundImage:
            'linear-gradient(var(--color-lime) 1px, transparent 1px), linear-gradient(90deg, var(--color-lime) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
        }}
      />

      {/* Glow */}
      <div
        className="pointer-events-none absolute top-0 right-0 h-[400px] w-[400px] opacity-[0.08]"
        aria-hidden="true"
        style={{ background: 'radial-gradient(circle, var(--color-lime) 0%, transparent 70%)' }}
      />

      <Container>
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <SectionReveal>
            <SectionHeading
              eyebrow={productsContent.eyebrow}
              heading={productsContent.heading}
              description={productsContent.description}
              align="left"
              theme="dark"
            />
          </SectionReveal>
        </div>

        <motion.div
          className="mt-14 grid gap-6 md:grid-cols-3 lg:mt-20"
          variants={reducedMotion ? undefined : staggerContainer}
          initial={reducedMotion ? undefined : 'hidden'}
          whileInView={reducedMotion ? undefined : 'visible'}
          viewport={scrollViewport}
        >
          {productsContent.items.map((product, i) => {
            const Icon = product.icon;
            return (
              <motion.div
                key={product.name}
                variants={reducedMotion ? undefined : staggerChild}
                className="group relative flex flex-col gap-0 overflow-hidden rounded-2xl border border-white/8 bg-white/4 transition-all duration-400 hover:border-[var(--color-lime)]/25 hover:bg-white/6"
              >
                {/* Product geometric preview */}
                <div className="relative h-28 w-full border-b border-white/5 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center p-6">
                    <div className="h-16 w-16">
                      <ProductPreview index={i} />
                    </div>
                  </div>
                  {/* Status badge */}
                  <div className="absolute right-4 top-4">
                    <span
                      className={`inline-block rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest ${
                        product.status === 'Coming Soon'
                          ? 'bg-[var(--color-lime)]/15 text-[var(--color-lime)]'
                          : 'bg-white/8 text-[var(--color-muted)]'
                      }`}
                    >
                      {product.status}
                    </span>
                  </div>
                </div>

                {/* Card body */}
                <div className="flex flex-col gap-3 p-6">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--color-lime)]/12 text-[var(--color-lime)] transition-all duration-300 group-hover:bg-[var(--color-lime)]/20">
                      <Icon size={18} aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="text-base font-bold text-[var(--color-off-white)]">
                        {product.name}
                      </h3>
                      <span className="text-xs text-[var(--color-muted)]">{product.tagline}</span>
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed text-[var(--color-muted)]">
                    {product.description}
                  </p>
                </div>

                {/* Bottom lime accent */}
                <div className="h-0.5 w-0 bg-[var(--color-lime)] transition-all duration-500 group-hover:w-full" />
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
