import { useReducedMotion } from 'motion/react';

/**
 * Returns true when the user prefers reduced motion.
 * Wraps Motion's useReducedMotion hook to provide a consistent API
 * and normalise the nullable boolean into a strict boolean.
 */
export function useReducedMotionPreference() {
  const prefersReduced = useReducedMotion();
  return prefersReduced === true;
}
