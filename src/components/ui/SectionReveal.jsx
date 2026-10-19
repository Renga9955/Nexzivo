import { motion } from 'motion/react';
import { revealUp, scrollViewport } from '@/lib/motion';
import { useReducedMotionPreference } from '@/hooks/useReducedMotionPreference';

/**
 * SectionReveal — optional scroll-triggered entrance animation.
 * Wraps children with a motion.div that fades/slides in on scroll.
 * Automatically disables animations for users who prefer reduced motion.
 */
export function SectionReveal({ children, className = '', delay = 0 }) {
  const reducedMotion = useReducedMotionPreference();

  if (reducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      variants={revealUp}
      initial="hidden"
      whileInView="visible"
      viewport={scrollViewport}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
