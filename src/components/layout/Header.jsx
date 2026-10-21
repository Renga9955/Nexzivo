import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { primaryNav } from '@/config/navigation';
import { siteConfig } from '@/config/site';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { MobileNavigation } from './MobileNavigation';
import logoSrc from '@/assets/logo.png';

/**
 * NEXZIVO Header — Clean white surface, deep green typography and emerald active indicators.
 */
export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 15);
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
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-[var(--color-muted-border)] py-3'
            : 'bg-white/80 backdrop-blur-sm border-b border-[var(--color-muted-border)]/50 py-4'
        }`}
      >
        <Container>
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <Link
              to="/"
              className="flex items-center gap-3 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-green)] group py-1"
              aria-label={`${siteConfig.name} — homepage`}
            >
              <img
                src={logoSrc}
                alt={`${siteConfig.name} logo`}
                className="h-8 sm:h-9 w-auto object-contain"
              />
              <div className="flex flex-col">
                <span className="font-heading text-xl font-bold tracking-tight text-[var(--color-deep-green)] transition-colors group-hover:text-[var(--color-green)]">
                  {siteConfig.name}
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--color-green)] -mt-0.5">
                  Digital & Design
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav aria-label="Primary navigation" className="hidden lg:flex items-center gap-7">
              {primaryNav.map((item) => (
                <NavLink
                  key={item.href}
                  to={item.href}
                  end={item.href === '/'}
                  className={({ isActive }) =>
                    `group relative py-1 text-sm font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-green)] rounded-sm ${
                      isActive
                        ? 'text-[var(--color-deep-green)]'
                        : 'text-[var(--color-text-muted)] hover:text-[var(--color-deep-green)]'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span>{item.label}</span>
                      {isActive && (
                        <span
                          className="absolute inset-x-0 -bottom-1 h-0.5 rounded-full bg-[var(--color-green)]"
                          aria-hidden="true"
                        />
                      )}
                    </>
                  )}
                </NavLink>
              ))}
            </nav>

            {/* Header Right Actions */}
            <div className="flex items-center gap-3 sm:gap-4">
              <Button
                to="/contact"
                variant="primary"
                size="sm"
                className="hidden sm:inline-flex"
              >
                Let's Talk
              </Button>

              {/* Mobile menu toggle */}
              <button
                type="button"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--color-muted-border)] bg-white text-[var(--color-deep-green)] hover:bg-[var(--color-green-light)] lg:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-green)]"
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                aria-expanded={isMobileOpen}
                aria-label={isMobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
              >
                {isMobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </Container>
      </header>

      <MobileNavigation
        isOpen={isMobileOpen}
        onClose={() => setIsMobileOpen(false)}
        id="mobile-nav"
      />
    </>
  );
}
