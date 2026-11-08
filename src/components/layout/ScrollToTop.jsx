import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * ScrollToTop helper component.
 * Automatically resets scroll position to (0, 0) upon page route navigation,
 * while allowing hash navigation to smoothly jump to section anchors.
 */
export function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const lenis = window.__lenis;

    if (!hash) {
      if (lenis) {
        lenis.scrollTo(0, { immediate: true });
      }
      window.scrollTo(0, 0);
      return;
    }

    // Delay slightly for any dynamically rendered / animated targets
    const timer = setTimeout(() => {
      const element = document.querySelector(hash);
      if (element) {
        if (lenis) {
          lenis.scrollTo(element, { offset: -80 });
        } else {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }, 40);

    return () => clearTimeout(timer);
  }, [pathname, hash]);

  return null;
}
