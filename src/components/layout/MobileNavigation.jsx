import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { primaryNav } from '@/config/navigation';
import { siteConfig } from '@/config/site';
import { Button } from '@/components/ui/Button';
import logoSrc from '@/assets/logo.png';

/**
 * NEXZIVO Studio Mobile Navigation Drawer.
 * Clean slide-in panel on the dark surface with a restrained accent for active
 * states. No glassmorphism, no glow.
 */
export function MobileNavigation({ isOpen, onClose, id }) {
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleKey);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black/70 lg:hidden"
            aria-hidden="true"
            onClick={onClose}
          />

          {/* Drawer */}
          <motion.nav
            key="drawer"
            id={id}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 350, damping: 35 }}
            className="fixed inset-y-0 right-0 z-50 flex w-80 max-w-full flex-col bg-[var(--color-slate-dark)] border-l border-[var(--color-slate-border)] lg:hidden text-[var(--color-soft-white)]"
          >
            {/* Header info in drawer */}
            <div className="flex items-center gap-3 p-6 border-b border-[var(--color-slate-border)]">
              <img src={logoSrc} alt={siteConfig.name} className="h-8 w-auto" />
              <div>
                <div className="font-heading font-bold text-lg leading-tight">{siteConfig.name}</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-accent-soft)]">Studio Menu</div>
              </div>
            </div>

            {/* Nav items */}
            <div className="flex flex-col gap-1.5 p-6 overflow-y-auto flex-1">
              {primaryNav.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 + i * 0.05, duration: 0.25 }}
                >
                  <NavLink
                    to={item.href}
                    end={item.href === '/'}
                    onClick={onClose}
                    className={({ isActive }) =>
                      `flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent-soft)] ${
                        isActive
                          ? 'bg-[var(--color-slate-card)] border border-[var(--color-accent)]/40 text-[var(--color-soft-white)]'
                          : 'text-[var(--color-subtle-gray)] hover:text-white hover:bg-white/5'
                      }`
                    }
                  >
                    <span>{item.label}</span>
                    <span className="text-[var(--color-accent-soft)]">→</span>
                  </NavLink>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <div className="border-t border-[var(--color-slate-border)] p-6 bg-[var(--color-obsidian)]">
              <Button to="/contact" variant="primary" className="w-full justify-center" onClick={onClose}>
                Start a Project
              </Button>
            </div>
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  );
}
