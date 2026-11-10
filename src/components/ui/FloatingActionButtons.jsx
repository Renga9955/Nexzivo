import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUp } from 'lucide-react';
import { getWhatsAppUrl } from '@/config/site';

/**
 * FloatingActionButtons Component.
 * Contains:
 * 1. Back to Top Button: Appears when scrolled down > 300px, smoothly scrolls page to top.
 * 2. Floating WhatsApp Direct Contact Button:
 *    - Click-to-Chat direct conversation via official wa.me format.
 *    - Pre-filled URL-encoded message configured in siteConfig.
 *    - Opens in a new tab with target="_blank" and rel="noopener noreferrer".
 *    - Fully responsive across Mobile devices, WhatsApp Desktop, and WhatsApp Web.
 */
export function FloatingActionButtons() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const whatsappUrl = getWhatsAppUrl();

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollPos = window.scrollY || document.documentElement.scrollTop;
          setShowScrollTop(scrollPos > 300);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    const lenis = window.__lenis;
    if (lenis) {
      lenis.scrollTo(0, { duration: 1.2 });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 flex flex-col items-center gap-3 pointer-events-none select-none"
      style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
    >
      {/* ── 1. Scroll To Top Button ── */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            key="scroll-top-btn"
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top"
            initial={{ opacity: 0, scale: 0.6, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.6, y: 15 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="pointer-events-auto group relative flex items-center justify-center h-11 w-11 sm:h-12 sm:w-12 rounded-full bg-white text-[#101B2D] border border-[#E3E8F0] shadow-[0_8px_24px_rgba(16,27,45,0.12)] hover:shadow-[0_12px_28px_rgba(39,100,245,0.22)] hover:border-[#2764F5] hover:text-[#2764F5] hover:-translate-y-1 active:translate-y-0 active:scale-95 transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2764F5]"
          >
            <ArrowUp size={20} className="stroke-[2.5] transition-transform duration-200 group-hover:-translate-y-0.5" />

            {/* Hover Tooltip (Desktop) */}
            <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-lg bg-[#101B2D] px-2.5 py-1 text-xs font-semibold text-white opacity-0 shadow-md transition-opacity duration-200 group-hover:opacity-100 hidden sm:block">
              Back to Top
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* ── 2. WhatsApp Floating Direct Contact Button ── */}
      <div className="pointer-events-auto group relative flex items-center justify-center">
        {/* Pulsating beacon background glow */}
        <span
          className="absolute inset-0 rounded-full bg-[#25D366] opacity-35 animate-ping pointer-events-none"
          aria-hidden="true"
        />

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contact NEXZIVO on WhatsApp"
          className="relative flex items-center justify-center h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-[#25D366] text-white shadow-[0_10px_28px_rgba(37,211,102,0.4)] hover:shadow-[0_14px_32px_rgba(37,211,102,0.55)] hover:scale-105 active:scale-95 hover:-translate-y-1 active:translate-y-0 transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
        >
          {/* Official WhatsApp SVG Icon */}
          <svg
            className="h-6 w-6 sm:h-7 sm:w-7 fill-current"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M12.031 2C6.516 2 2.031 6.484 2.031 12C2.031 13.805 2.516 15.539 3.438 17.062L2 22.312L7.391 20.906C8.844 21.734 10.406 22.188 12.031 22.188C17.547 22.188 22.031 17.703 22.031 12.188C22.031 6.672 17.547 2 12.031 2ZM12.031 20.484C10.594 20.484 9.203 20.078 8 19.344L7.688 19.156L4.5 20L5.359 16.891L5.156 16.562C4.344 15.266 3.906 13.75 3.906 12C3.906 7.516 7.547 3.875 12.031 3.875C16.516 3.875 20.156 7.516 20.156 12C20.156 16.484 16.516 20.484 12.031 20.484ZM16.484 14.547C16.234 14.422 15.016 13.828 14.781 13.75C14.562 13.672 14.391 13.625 14.234 13.875C14.062 14.125 13.594 14.672 13.453 14.828C13.312 14.984 13.172 15 12.922 14.875C12.672 14.75 11.875 14.484 10.922 13.641C10.188 12.984 9.688 12.172 9.547 11.922C9.406 11.672 9.531 11.531 9.656 11.406C9.766 11.297 9.906 11.125 10.031 10.984C10.156 10.844 10.203 10.734 10.281 10.578C10.359 10.422 10.312 10.281 10.25 10.156C10.188 10.031 9.703 8.844 9.5 8.359C9.312 7.891 9.109 7.953 8.953 7.953C8.812 7.953 8.641 7.938 8.469 7.938C8.297 7.938 8.016 8.016 7.781 8.266C7.547 8.516 6.891 9.125 6.891 10.375C6.891 11.625 7.812 12.828 7.938 13C8.062 13.172 9.734 15.75 12.312 16.859C12.922 17.125 13.406 17.281 13.781 17.406C14.406 17.594 14.969 17.578 15.422 17.516C15.922 17.438 16.969 16.875 17.188 16.25C17.406 15.625 17.406 15.094 17.344 14.984C17.281 14.875 17.109 14.812 16.859 14.688L16.484 14.547Z" />
          </svg>
        </a>

        {/* Hover Tooltip (Desktop) */}
        <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-lg bg-[#101B2D] px-2.5 py-1 text-xs font-semibold text-white opacity-0 shadow-md transition-opacity duration-200 group-hover:opacity-100 hidden sm:block">
          Chat with us
        </span>
      </div>
    </div>
  );
}
