import { useEffect } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

/**
 * SmoothScrollProvider initializes Lenis smooth scrolling across the entire app.
 * It integrates with requestAnimationFrame, handles browser reduced-motion preferences,
 * and exposes the lenis instance globally for scroll resets.
 */
export function SmoothScrollProvider({ children }) {
  useEffect(() => {
    // Respect user's reduced motion settings
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      return;
    }

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // exponential ease-out
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.5,
    });

    window.__lenis = lenis;

    let rafId = null;
    function raf(time) {
      if (document.hidden) {
        rafId = null;
        return;
      }

      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    function handleVisibilityChange() {
      if (document.hidden) {
        if (rafId !== null) cancelAnimationFrame(rafId);
        rafId = null;
      } else if (rafId === null) {
        rafId = requestAnimationFrame(raf);
      }
    }

    document.addEventListener('visibilitychange', handleVisibilityChange);
    rafId = requestAnimationFrame(raf);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      if (rafId !== null) cancelAnimationFrame(rafId);
      lenis.destroy();
      window.__lenis = null;
    };
  }, []);

  return children;
}
