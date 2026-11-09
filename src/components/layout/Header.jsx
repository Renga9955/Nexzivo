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
 * Deep navy (#101B2D) background so the white, blue, and cyan logo is clearly visible.
 * Fully responsive across all mobile screens (320px, 375px, 390px, 425px), tablet, and desktop.
 */
export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
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
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-200 ${
          isScrolled
            ? 'bg-[#101B2D]/95 backdrop-blur-md border-b border-[#273752] shadow-md'
            : 'bg-[#101B2D] border-b border-[#273752]/80'
        }`}
      >
        <Container className="px-3.5 xs:px-4 sm:px-6 lg:px-10 xl:px-12">
          <div className="flex h-16 sm:h-20 items-center justify-between gap-2 sm:gap-4">
            {/* ── Brand Logo (Left aligned, non-wrapping) ── */}
            <Link
              to="/"
              className="flex items-center gap-2 sm:gap-3 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#35C5E8] group py-1 shrink-0 min-w-0"
              aria-label={`${siteConfig.name} — Homepage`}
            >
              <img
                src={logoSrc}
                alt={`${siteConfig.name} logo`}
                className="h-7 sm:h-9 md:h-10 w-auto object-contain shrink-0"
                decoding="async"
              />
              <div className="flex flex-col whitespace-nowrap">
                <span className="font-heading text-base sm:text-xl font-extrabold tracking-tight text-white transition-colors group-hover:text-[#35C5E8] leading-tight">
                  {siteConfig.name}
                </span>
                <span className="text-[8.5px] sm:text-[10px] font-bold uppercase tracking-[0.16em] sm:tracking-[0.2em] text-[#35C5E8] leading-none mt-0.5 sm:-mt-0.5">
                  Creative Studio
                </span>
              </div>
            </Link>

            {/* ── Desktop navigation (Hidden on mobile/tablet) ── */}
            <nav aria-label="Primary navigation" className="hidden lg:flex items-center gap-8">
              {primaryNav.map((item) => (
                <NavLink
                  key={item.href}
                  to={item.href}
                  end={item.href === '/'}
                  className={({ isActive }) =>
                    `group relative py-1 text-sm font-semibold transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#35C5E8] rounded-sm ${
                      isActive
                        ? 'text-[#35C5E8]'
                        : 'text-[#DCE4F0] hover:text-white'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span>{item.label}</span>
                      <span
                        className={`absolute -bottom-1 left-0 h-0.5 w-full origin-left rounded-full bg-[#2764F5] transition-transform duration-200 ${
                          isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                        }`}
                        aria-hidden="true"
                      />
                    </>
                  )}
                </NavLink>
              ))}
            </nav>

            {/* ── Actions: CTA Button + Hamburger Menu (Right aligned) ── */}
            <div className="flex items-center gap-2 sm:gap-3 shrink-0">
              {/* Start a Project button: responsive sizing on mobile (hidden below 360px if needed, otherwise ultra-compact) */}
              <Button
                to="/contact"
                size="md"
                variant="primary"
                iconRight={<ArrowUpRight size={14} className="hidden xs:inline-block" />}
                className="hidden xs:inline-flex lg:inline-flex px-3 py-1.5 xs:px-3.5 xs:py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-semibold whitespace-nowrap rounded-lg sm:rounded-xl shadow-xs"
              >
                Start a Project
              </Button>

              {/* Hamburger Toggle */}
              <button
                type="button"
                aria-label={isMobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={isMobileOpen}
                aria-controls="mobile-nav"
                onClick={() => setIsMobileOpen((prev) => !prev)}
                className="lg:hidden flex items-center justify-center h-9 w-9 sm:h-10 sm:w-10 rounded-lg sm:rounded-xl border border-[#273752] bg-[#18263E] text-white hover:bg-[#20314F] hover:border-[#35C5E8] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#35C5E8] shrink-0"
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={isMobileOpen ? 'close' : 'open'}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.15 }}
                    className="flex items-center justify-center"
                  >
                    {isMobileOpen ? (
                      <X size={18} className="sm:w-5 sm:h-5" aria-hidden="true" />
                    ) : (
                      <Menu size={18} className="sm:w-5 sm:h-5" aria-hidden="true" />
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
