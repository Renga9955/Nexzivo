import { motion } from 'motion/react';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { heroContent } from '../data/homeContent';
import { useReducedMotionPreference } from '@/hooks/useReducedMotionPreference';

/** Splits a headline string into individual words for an editorial reveal. */
function AnimatedHeadline({ text, reducedMotion }) {
  const words = text.split(' ');
  if (reducedMotion) {
    return <span>{text}</span>;
  }
  return (
    <>
      {words.map((word, i) => {
        const isNext = word.toLowerCase().includes('next');
        return (
          <span key={`${word}-${i}`} className="inline-block overflow-hidden mr-3 sm:mr-4">
            <motion.span
              className={`inline-block ${
                isNext
                  ? 'text-[var(--color-green)] underline decoration-[var(--color-lime)] decoration-wavy decoration-from-font'
                  : 'text-[var(--color-deep-green)]'
              }`}
              initial={{ y: '115%', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.15 + i * 0.06,
              }}
            >
              {word}
            </motion.span>
          </span>
        );
      })}
    </>
  );
}

/** Fresh light hero background with subtle brand gradients and geometric patterns. */
function HeroGeometry() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Soft radiant ambient glow */}
      <div className="absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full bg-[var(--color-green-light)]/70 blur-3xl" />
      <div className="absolute top-1/2 -left-32 h-[450px] w-[450px] rounded-full bg-[var(--color-lime)]/15 blur-3xl" />

      {/* Faint technical grid */}
      <div
        className="absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(16,40,32,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(16,40,32,0.04) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
        }}
      />

      {/* Elegant geometric concentric arcs */}
      <svg
        className="absolute -right-20 top-1/2 hidden h-[680px] w-[680px] -translate-y-1/2 lg:block opacity-40"
        viewBox="0 0 800 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="400" cy="400" r="340" stroke="var(--color-deep-green)" strokeOpacity="0.08" strokeWidth="1" />
        <circle cx="400" cy="400" r="260" stroke="var(--color-green)" strokeOpacity="0.12" strokeWidth="1" strokeDasharray="4 4" />
        <circle cx="400" cy="400" r="180" stroke="var(--color-deep-green)" strokeOpacity="0.08" strokeWidth="1" />
        <circle cx="400" cy="60" r="5" fill="var(--color-green)" />
        <circle cx="660" cy="400" r="4" fill="var(--color-lime)" stroke="var(--color-green)" strokeWidth="1" />
      </svg>
    </div>
  );
}

/**
 * HeroSection — Clean white background with deep-green prominent typography,
 * high-contrast CTA buttons and rich capability badges.
 */
export function HeroSection() {
  const reducedMotion = useReducedMotionPreference();

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center overflow-hidden bg-white text-[var(--color-text-body)] pt-28 pb-16 lg:pt-36 lg:pb-24 border-b border-[var(--color-muted-border)]"
    >
      <HeroGeometry />

      <Container>
        <div className="relative z-10 max-w-4xl flex flex-col items-start gap-8">
          {/* Eyebrow badge */}
          <motion.div
            initial={reducedMotion ? {} : { opacity: 0, y: 12 }}
            animate={reducedMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--color-green-light)] border border-[var(--color-green)]/20 text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-green)]">
              <Sparkles size={13} className="text-[var(--color-green)]" />
              <span>{heroContent.eyebrow}</span>
            </span>
          </motion.div>

          {/* Main Headline */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tight leading-[1.04]">
            <AnimatedHeadline text={heroContent.heading} reducedMotion={reducedMotion} />
          </h1>

          {/* Subtitle description */}
          <motion.p
            className="max-w-2xl text-lg sm:text-xl text-[var(--color-text-body)] leading-relaxed font-normal"
            initial={reducedMotion ? {} : { opacity: 0, y: 16 }}
            animate={reducedMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
          >
            {heroContent.description}
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            className="flex flex-wrap items-center gap-4 pt-2"
            initial={reducedMotion ? {} : { opacity: 0, y: 16 }}
            animate={reducedMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
          >
            <Button to={heroContent.primaryCta.href} variant="primary" size="lg">
              {heroContent.primaryCta.label}
            </Button>
            <Button
              to={heroContent.secondaryCta.href}
              variant="outline"
              size="lg"
              iconRight={<ArrowRight size={16} />}
            >
              {heroContent.secondaryCta.label}
            </Button>
          </motion.div>

          {/* Disciplines Strip / Trust metrics */}
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-[var(--color-muted-border)] w-full mt-4"
            initial={reducedMotion ? {} : { opacity: 0 }}
            animate={reducedMotion ? {} : { opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.7 }}
          >
            {[
              { title: 'Web Development', tag: 'Fast · Scalable' },
              { title: 'UI/UX Design', tag: 'Human-Centered' },
              { title: 'Mobile Apps', tag: 'Native · Intuitive' },
              { title: 'Academic Projects', tag: 'Structured & Mentored' },
            ].map((d) => (
              <div
                key={d.title}
                className="flex flex-col p-4 rounded-xl bg-[var(--color-off-white)] border border-[var(--color-muted-border)] hover:border-[var(--color-green)]/40 transition-colors"
              >
                <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[var(--color-green)]">
                  <CheckCircle2 size={12} />
                  <span>{d.tag}</span>
                </div>
                <span className="text-sm font-bold text-[var(--color-deep-green)] mt-1">
                  {d.title}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
