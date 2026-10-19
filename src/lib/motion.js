export {
  fadeIn,
  revealUp,
  staggerContainer,
  staggerChild,
  withReducedMotion,
} from './motionVariants';

/**
 * Button interaction animation props.
 * Apply via spread: <motion.button {...buttonMotion}>
 */
export const buttonMotion = {
  whileHover: { scale: 1.03 },
  whileTap: { scale: 0.97 },
  transition: { type: 'spring', stiffness: 400, damping: 17 },
};

/**
 * Default viewport trigger settings for scroll-based animations.
 */
export const scrollViewport = {
  once: true,
  amount: 0.15,
  margin: '-50px',
};
