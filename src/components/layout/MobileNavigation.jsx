import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { primaryNav } from '@/config/navigation';
import { siteConfig } from '@/config/site';
import { Button } from '@/components/ui/Button';
import logoSrc from '@/assets/logo.png';

/**
 * NEXZIVO Mobile Navigation Drawer — Crisp white background with deep-green elements.
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
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-xs lg:hidden"
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
            className="fixed inset-y-0 right-0 z-50 flex w-80 max-w-full flex-col bg-white border-l border-[var(--color-muted-border)] lg:hidden text-[var(--color-text-body)] shadow-2xl"
          >
            {/* Header info in drawer */}
            <div className="flex items-center justify-between p-6 border-b border-[var(--color-muted-border)]">
              <div className="flex items-center gap-3">
                <img src={logoSrc} alt={siteConfig.name} className="h-8 w-auto" />
                <span className="font-heading text-lg font-bold text-[var(--color-deep-green)]">
                  {siteConfig.name}
                </span>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="p-1.5 rounded-lg text-[var(--color-text-muted)] hover:text-[var(--color-deep-green)] hover:bg-[var(--color-green-light)]"
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>

            {/* Links */}
            <div className="flex-1 overflow-y-auto px-6 py-6">
              <ul className="flex flex-col gap-2">
                {primaryNav.map((item) => (
                  <li key={item.href}>
                    <NavLink
                      to={item.href}
                      end={item.href === '/'}
                      onClick={onClose}
                      className={({ isActive }) =>
                        `flex items-center justify-between rounded-xl px-4 py-3 text-base font-semibold transition-colors ${
                          isActive
                            ? 'bg-[var(--color-green-light)] text-[var(--color-deep-green)]'
                            : 'text-[var(--color-text-body)] hover:bg-[var(--color-off-white)] hover:text-[var(--color-deep-green)]'
                        }`
                      }
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Footer action */}
            <div className="p-6 border-t border-[var(--color-muted-border)] bg-[var(--color-off-white)]">
              <Button
                to="/contact"
                variant="primary"
                size="md"
                className="w-full justify-center"
                onClick={onClose}
              >
                Let's Talk
              </Button>
            </div>
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  );
}
