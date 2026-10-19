import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { heroContent } from '../data/homeContent';
import { useReducedMotionPreference } from '@/hooks/useReducedMotionPreference';

/** Splits a headline string into individual words for stagger animation. */
function AnimatedHeadline({ text, reducedMotion }) {
  const words = text.split(' ');
  if (reducedMotion) {
    return <span>{text}</span>;
  }
  return (
    <>
      {words.map((word, i) => (
        <span key={`${word}-${i}`} className="inline-block overflow-hidden">
          <motion.span
            className="inline-block"
            initial={{ y: '110%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.5 + i * 0.08,
            }}
          >
            {word}
          </motion.span>
          {i < words.length - 1 ? ' ' : ''}
        </span>
      ))}
    </>
  );
}

/** Abstract geometric SVG composition for the hero. */
function HeroGeometry({ reducedMotion }) {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* Technical grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(var(--color-lime) 1px, transparent 1px), linear-gradient(90deg, var(--color-lime) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      {/* Large ambient glow — top right */}
      <div
        className="absolute -top-1/4 right-0 h-[700px] w-[700px] rounded-full opacity-[0.12]"
        style={{
          background:
            'radial-gradient(circle, var(--color-green) 0%, transparent 70%)',
        }}
      />

      {/* Lime glow — bottom left */}
      <div
        className="absolute bottom-0 -left-20 h-[400px] w-[400px] rounded-full opacity-[0.06]"
        style={{
          background:
            'radial-gradient(circle, var(--color-lime) 0%, transparent 70%)',
        }}
      />

      {/* SVG geometric composition */}
      <svg
        className="absolute right-0 top-0 h-full w-1/2 max-w-2xl opacity-40"
        viewBox="0 0 600 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer rotating ring */}
        <motion.circle
          cx="400"
          cy="260"
          r="220"
          stroke="var(--color-green)"
          strokeWidth="0.5"
          strokeDasharray="8 12"
          animate={reducedMotion ? {} : { rotate: 360 }}
          transition={{ duration: 80, ease: 'linear', repeat: Infinity }}
          style={{ transformOrigin: '400px 260px' }}
        />
        {/* Inner spinning dashed ring */}
        <motion.circle
          cx="400"
          cy="260"
          r="150"
          stroke="var(--color-lime)"
          strokeWidth="0.5"
          strokeDasharray="4 16"
          opacity="0.5"
          animate={reducedMotion ? {} : { rotate: -360 }}
          transition={{ duration: 50, ease: 'linear', repeat: Infinity }}
          style={{ transformOrigin: '400px 260px' }}
        />
        {/* Solid lime circle accent */}
        <motion.circle
          cx="400"
          cy="260"
          r="6"
          fill="var(--color-lime)"
          animate={reducedMotion ? {} : { scale: [1, 1.4, 1], opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 3, ease: 'easeInOut', repeat: Infinity }}
          style={{ transformOrigin: '400px 260px' }}
        />
        {/* Orbit dots */}
        <motion.g
          animate={reducedMotion ? {} : { rotate: 360 }}
          transition={{ duration: 30, ease: 'linear', repeat: Infinity }}
          style={{ transformOrigin: '400px 260px' }}
        >
          <circle cx="400" cy="110" r="5" fill="var(--color-lime)" opacity="0.9" />
          <circle cx="550" cy="260" r="3.5" fill="var(--color-lime)" opacity="0.6" />
          <circle cx="400" cy="410" r="3" fill="var(--color-green)" opacity="0.7" />
        </motion.g>

        {/* Connecting lines from center */}
        <motion.line
          x1="400" y1="260" x2="250" y2="80"
          stroke="var(--color-lime)" strokeWidth="0.5" opacity="0.3"
          animate={reducedMotion ? {} : { opacity: [0.1, 0.4, 0.1] }}
          transition={{ duration: 4, ease: 'easeInOut', repeat: Infinity }}
        />
        <motion.line
          x1="400" y1="260" x2="580" y2="420"
          stroke="var(--color-lime)" strokeWidth="0.5" opacity="0.3"
          animate={reducedMotion ? {} : { opacity: [0.3, 0.1, 0.3] }}
          transition={{ duration: 5, ease: 'easeInOut', repeat: Infinity, delay: 1 }}
        />
        <motion.line
          x1="400" y1="260" x2="180" y2="440"
          stroke="var(--color-green)" strokeWidth="0.5" opacity="0.25"
          animate={reducedMotion ? {} : { opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 6, ease: 'easeInOut', repeat: Infinity, delay: 2 }}
        />

        {/* Corner geometric bracket — top right */}
        <motion.polyline
          points="530,40 580,40 580,100"
          stroke="var(--color-lime)"
          strokeWidth="1.5"
          fill="none"
          opacity="0.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
        />

        {/* Small hex-dot cluster bottom right */}
        {[0, 1, 2, 3, 4, 5].map((i) => {
          const angle = (i * Math.PI * 2) / 6;
          const x = 500 + Math.cos(angle) * 30;
          const y = 620 + Math.sin(angle) * 30;
          return (
            <motion.circle
              key={i}
              cx={x}
              cy={y}
              r="2.5"
              fill="var(--color-lime)"
              opacity="0.4"
              animate={reducedMotion ? {} : { opacity: [0.2, 0.6, 0.2] }}
              transition={{ duration: 2 + i * 0.3, ease: 'easeInOut', repeat: Infinity, delay: i * 0.2 }}
            />
          );
        })}
        {/* Center of hex cluster */}
        <circle cx="500" cy="620" r="3" fill="var(--color-lime)" opacity="0.5" />

        {/* Diagonal accent line */}
        <motion.line
          x1="60" y1="700" x2="200" y2="550"
          stroke="var(--color-green)"
          strokeWidth="1"
          opacity="0.25"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.25 }}
          transition={{ duration: 1.2, delay: 1.8, ease: [0.22, 1, 0.36, 1] }}
        />
      </svg>

      {/* Animated lime horizontal line — far left */}
      <motion.div
        className="absolute left-0 top-[38%] h-px w-24 bg-[var(--color-lime)]"
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 0.5 }}
        transition={{ duration: 0.8, delay: 1.6, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformOrigin: 'left' }}
      />
      <motion.div
        className="absolute left-24 top-[38%] h-px w-8 bg-[var(--color-lime)]"
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 0.25 }}
        transition={{ duration: 0.6, delay: 2, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformOrigin: 'left' }}
      />
    </div>
  );
}

/**
 * HeroSection — cinematic full-screen hero with animated geometric composition,
 * staggered headline animation, and scroll indicator.
 */
export function HeroSection() {
  const reducedMotion = useReducedMotionPreference();
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });
  const heroBgY = useTransform(scrollYProgress, [0, 1], reducedMotion ? ['0%', '0%'] : ['0%', '18%']);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen overflow-hidden bg-[var(--color-deep-green)] text-[var(--color-off-white)]"
    >
      <HeroGeometry reducedMotion={reducedMotion} />

      <Container>
        <div className="relative flex min-h-screen flex-col items-start justify-center gap-8 py-32 lg:py-40 lg:pr-[40%]">
          {/* Eyebrow label */}
          <motion.div
            initial={reducedMotion ? {} : { opacity: 0, y: 16 }}
            animate={reducedMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-lime)]/20 bg-[var(--color-lime)]/8 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-lime)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-lime)] animate-pulse" />
              {heroContent.eyebrow}
            </span>
          </motion.div>

          {/* Main headline — staggered word reveal */}
          <h1 className="max-w-3xl text-5xl font-bold leading-[1.04] tracking-tight sm:text-6xl md:text-7xl lg:text-[5.5rem]">
            <AnimatedHeadline text={heroContent.heading} reducedMotion={reducedMotion} />
          </h1>

          {/* Supporting copy */}
          <motion.p
            className="max-w-xl text-base leading-relaxed text-[var(--color-muted)] sm:text-lg md:text-xl"
            initial={reducedMotion ? {} : { opacity: 0, y: 20 }}
            animate={reducedMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 1.1 }}
          >
            {heroContent.description}
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-wrap items-center gap-4 pt-2"
            initial={reducedMotion ? {} : { opacity: 0, y: 20 }}
            animate={reducedMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 1.3 }}
          >
            <Button to={heroContent.primaryCta.href} variant="primary" size="lg">
              {heroContent.primaryCta.label}
            </Button>
            <Button
              to={heroContent.secondaryCta.href}
              variant="ghost"
              size="lg"
              iconRight={<ArrowRight size={18} aria-hidden="true" />}
              className="text-[var(--color-off-white)] hover:bg-white/10"
            >
              {heroContent.secondaryCta.label}
            </Button>
          </motion.div>

          {/* Stats line */}
          <motion.div
            className="flex flex-wrap items-center gap-8 pt-4 border-t border-white/10 mt-2"
            initial={reducedMotion ? {} : { opacity: 0 }}
            animate={reducedMotion ? {} : { opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.6 }}
          >
            {[
              { label: 'UI/UX Design', value: 'Strategy to pixel' },
              { label: 'Engineering', value: 'Web to product' },
              { label: 'AI Innovation', value: 'Emerging tech' },
            ].map((item) => (
              <div key={item.label} className="flex flex-col gap-0.5">
                <span className="text-xs font-semibold uppercase tracking-widest text-[var(--color-lime)]">
                  {item.label}
                </span>
                <span className="text-sm text-[var(--color-muted)]">{item.value}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </Container>

      {/* Scroll indicator */}
      {!reducedMotion && (
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2 }}
          aria-hidden="true"
        >
          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          >
            <ChevronDown size={18} className="text-[var(--color-lime)]" />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
