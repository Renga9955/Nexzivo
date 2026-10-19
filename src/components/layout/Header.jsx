import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { primaryNav } from '@/config/navigation';
import { siteConfig } from '@/config/site';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { MobileNavigation } from './MobileNavigation';
import logoSrc from '@/assets/logo.png';

/**
 * NEXZIVO primary site Header.
 *
 * Behaviour:
 * - Transparent + white text when at the very top (over the deep-green hero).
 * - Transitions to a frosted off-white background when the user scrolls down.
 * - Smooth animated underline indicator on nav link hover/active.
 * - Accessible keyboard navigation and ARIA attributes.
 */
export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Lock body scroll while mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileOpen]);

  const isLight = isScrolled; // light bg → dark text; dark bg → light text

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-[var(--color-off-white)]/96 backdrop-blur-md shadow-sm border-b border-[var(--color-border)]'
            : 'bg-transparent'
        }`}
      >
        <Container>
          <div className="flex h-16 items-center justify-between lg:h-20">
            {/* ── Logo ── */}
            <Link
              to="/"
              className="flex items-center gap-2.5 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-lime)]"
              aria-label={`${siteConfig.name} — home`}
            >
              <img
                src={logoSrc}
                alt={`${siteConfig.name} logo`}
                className="h-8 w-auto"
              />
              <span
                className={`font-heading text-lg font-bold tracking-tight transition-colors duration-300 ${
                  isLight ? 'text-[var(--color-charcoal)]' : 'text-[var(--color-off-white)]'
                }`}
              >
                {siteConfig.name}
              </span>
            </Link>

            {/* ── Desktop navigation ── */}
            <nav aria-label="Primary navigation" className="hidden lg:flex items-center gap-1">
              {primaryNav.map((item) => (
                <NavLink
                  key={item.href}
                  to={item.href}
                  className={({ isActive }) =>
                    `group relative px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-lime)] ${
                      isActive
                        ? isLight
                          ? 'text-[var(--color-deep-green)]'
                          : 'text-[var(--color-lime)]'
                        : isLight
                        ? 'text-[var(--color-muted)] hover:text-[var(--color-charcoal)]'
                        : 'text-[var(--color-off-white)]/70 hover:text-[var(--color-off-white)]'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {item.label}
                      {/* Animated underline */}
                      <AnimatePresence>
                        {isActive && (
                          <motion.span
                            layoutId="nav-active-indicator"
                            className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full bg-[var(--color-lime)]"
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            exit={{ scaleX: 0 }}
                            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                          />
                        )}
                      </AnimatePresence>
                      {/* Hover underline */}
                      <span className="absolute bottom-0 left-3 right-3 h-0.5 scale-x-0 rounded-full bg-[var(--color-lime)] opacity-40 transition-transform duration-200 group-hover:scale-x-100" />
                    </>
                  )}
                </NavLink>
              ))}
            </nav>

            {/* ── Desktop CTA + mobile trigger ── */}
            <div className="flex items-center gap-3">
              <Button
                to="/contact"
                size="sm"
                variant="primary"
                className="hidden lg:inline-flex"
              >
                {siteConfig.ctaLabel}
              </Button>

              <button
                type="button"
                aria-label={isMobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={isMobileOpen}
                aria-controls="mobile-nav"
                onClick={() => setIsMobileOpen((prev) => !prev)}
                className={`lg:hidden flex items-center justify-center h-10 w-10 rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-lime)] ${
                  isLight
                    ? 'text-[var(--color-charcoal)] hover:bg-[var(--color-deep-green)]/8'
                    : 'text-[var(--color-off-white)] hover:bg-white/10'
                }`}
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={isMobileOpen ? 'close' : 'open'}
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {isMobileOpen ? (
                      <X size={22} aria-hidden="true" />
                    ) : (
                      <Menu size={22} aria-hidden="true" />
                    )}
                  </motion.span>
                </AnimatePresence>
              </button>
            </div>
          </div>
        </Container>
      </header>

      <MobileNavigation
        id="mobile-nav"
        isOpen={isMobileOpen}
        onClose={() => setIsMobileOpen(false)}
      />
    </>
  );
}
