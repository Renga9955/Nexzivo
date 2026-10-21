import { motion } from 'motion/react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { SectionReveal } from '@/components/ui/SectionReveal';
import { staggerContainer, staggerChild, scrollViewport } from '@/lib/motion';
import { useReducedMotionPreference } from '@/hooks/useReducedMotionPreference';
import { productsContent } from '../data/homeContent';

/** Minimal geometric preview for product cards. */
function ProductPreview({ index }) {
  const configs = [
    {
      lines: [[20, 30, 80, 30], [20, 46, 65, 46], [20, 62, 72, 62]],
      circle: { cx: 80, cy: 70, r: 14 },
      dot: 'var(--color-green)',
    },
    {
      lines: [[16, 24, 72, 24], [16, 40, 56, 40], [16, 56, 80, 56]],
      circle: { cx: 76, cy: 76, r: 10 },
      dot: 'var(--color-green)',
    },
    {
      lines: [[12, 28, 76, 28], [12, 44, 60, 44], [12, 60, 68, 60]],
      circle: { cx: 72, cy: 72, r: 12 },
      dot: 'var(--color-green)',
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
        <rect x="0" y="0" width="100" height="100" rx="8" fill="rgba(16,40,32,0.03)" />
        <rect x="0" y="0" width="100" height="18" rx="8" fill="rgba(16,40,32,0.06)" />
        <circle cx="8" cy="9" r="2.5" fill="rgba(16,40,32,0.2)" />
        <circle cx="16" cy="9" r="2.5" fill="rgba(16,40,32,0.2)" />
        <circle cx="24" cy="9" r="2.5" fill="rgba(16,40,32,0.2)" />

        {cfg.lines.map(([x1, y1, x2], i) => (
          <rect key={i} x={x1} y={y1} width={x2 - x1} height="5" rx="2.5" fill="rgba(16,40,32,0.12)" />
        ))}

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
          opacity="0.9"
        />
      </svg>
    </div>
  );
}

/**
 * ProductsSection — Lab tools on clean off-white background with prominent centred headings.
 */
export function ProductsSection() {
  const reducedMotion = useReducedMotionPreference();

  return (
    <section id="products" className="section relative overflow-hidden bg-[var(--color-off-white)] text-[var(--color-text-body)] border-t border-[var(--color-muted-border)]">
      <Container>
        <SectionReveal>
          <div className="flex flex-col items-center text-center mb-14 lg:mb-18">
            <SectionHeading
              eyebrow={productsContent.eyebrow}
              heading={productsContent.heading}
              description={productsContent.description}
              align="center"
              theme="light"
              className="max-w-3xl"
            />
          </div>
        </SectionReveal>

        <motion.div
          className="grid gap-6 md:grid-cols-3"
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
                className="group relative flex flex-col gap-0 overflow-hidden rounded-2xl border border-[var(--color-muted-border)] bg-white transition-all duration-300 hover:border-[var(--color-green)] hover:shadow-lg"
              >
                {/* Product preview */}
                <div className="relative h-28 w-full border-b border-[var(--color-muted-border)] bg-[var(--color-off-white)] overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center p-6">
                    <div className="h-16 w-16">
                      <ProductPreview index={i} />
                    </div>
                  </div>
                  {/* Status badge */}
                  <div className="absolute right-4 top-4">
                    <span
                      className={`inline-block rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest ${
                        product.status === 'Coming Soon'
                          ? 'border border-[var(--color-green)]/30 bg-[var(--color-green-light)] text-[var(--color-green)]'
                          : 'bg-[var(--color-deep-green)] text-[var(--color-lime)]'
                      }`}
                    >
                      {product.status}
                    </span>
                  </div>
                </div>

                {/* Card body */}
                <div className="flex flex-col gap-3 p-6">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--color-green-light)] text-[var(--color-green)]">
                      <Icon size={18} aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="text-base font-bold text-[var(--color-deep-green)] transition-colors group-hover:text-[var(--color-green)]">
                        {product.name}
                      </h3>
                      <span className="text-xs text-[var(--color-text-muted)] font-medium">{product.tagline}</span>
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed text-[var(--color-text-body)]">
                    {product.description}
                  </p>
                </div>

                {/* Bottom accent line */}
                <div className="h-0.5 w-0 bg-[var(--color-green)] transition-all duration-500 group-hover:w-full" />
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
