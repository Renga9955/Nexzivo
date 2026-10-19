import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { primaryNav } from '@/config/navigation';
import { siteConfig } from '@/config/site';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { MobileNavigation } from './MobileNavigation';
import logoSrc from '@/assets/logo.png';

/**
 * NEXZIVO Studio Header.
 * Sticky, scroll-aware navigation with a clean dark surface, restrained accent
 * underline, and high-contrast typography. Preserves the unaltered logo.
 */
export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Lock body scroll while mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileOpen]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
          isScrolled
            ? 'bg-[var(--color-obsidian)]/92 backdrop-blur-sm border-b border-[var(--color-slate-border)]'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <Container>
          <div className="flex h-18 items-center justify-between lg:h-22">
            {/* ── Brand Logo (preserved, no glow) ── */}
            <Link
              to="/"
              className="flex items-center gap-3 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent-soft)] group py-1"
              aria-label={`${siteConfig.name} — studio homepage`}
            >
              <img
                src={logoSrc}
                alt={`${siteConfig.name} logo`}
                className="h-9 sm:h-10 w-auto object-contain"
              />
              <div className="flex flex-col">
                <span className="font-heading text-xl font-bold tracking-tight text-[var(--color-soft-white)] transition-colors group-hover:text-white">
                  {siteConfig.name}
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--color-accent-soft)] -mt-0.5">
                  Creative Studio
                </span>
              </div>
            </Link>

            {/* ── Desktop navigation ── */}
            <nav aria-label="Primary navigation" className="hidden lg:flex items-center gap-8">
              {primaryNav.map((item) => (
                <NavLink
                  key={item.href}
                  to={item.href}
                  end={item.href === '/'}
                  className={({ isActive }) =>
                    `group relative py-1 text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent-soft)] rounded-sm ${
                      isActive
                        ? 'text-[var(--color-soft-white)]'
                        : 'text-[var(--color-subtle-gray)] hover:text-[var(--color-soft-white)]'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span>{item.label}</span>
                      <span
                        className={`absolute -bottom-0.5 left-0 h-px w-full origin-left bg-[var(--color-accent)] transition-transform duration-300 ${
                          isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                        }`}
                        aria-hidden="true"
                      />
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
                iconRight={<ArrowUpRight size={14} />}
                className="hidden lg:inline-flex"
              >
                Start a Project
              </Button>

              <button
                type="button"
                aria-label={isMobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={isMobileOpen}
                aria-controls="mobile-nav"
                onClick={() => setIsMobileOpen((prev) => !prev)}
                className="lg:hidden flex items-center justify-center h-10 w-10 rounded-xl border border-[var(--color-slate-border)] bg-[var(--color-slate-card)] text-[var(--color-soft-white)] hover:border-[var(--color-accent)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent-soft)]"
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={isMobileOpen ? 'close' : 'open'}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    {isMobileOpen ? (
                      <X size={20} aria-hidden="true" />
                    ) : (
                      <Menu size={20} aria-hidden="true" />
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
