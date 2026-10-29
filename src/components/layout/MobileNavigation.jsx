import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, X } from 'lucide-react';
import { primaryNav } from '@/config/navigation';
import { siteConfig } from '@/config/site';
import { Button } from '@/components/ui/Button';
import logoSrc from '@/assets/logo.png';

/**
 * NEXZIVO Studio Mobile Navigation Drawer.
 * Deep navy (#101B2D) background ensuring consistent navy appearance across
 * desktop and mobile viewports with clearly visible logo and readable links.
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
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs lg:hidden"
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
            className="fixed inset-y-0 right-0 z-50 flex w-80 max-w-full flex-col bg-[#101B2D] border-l border-[#273752] shadow-2xl lg:hidden text-white"
          >
            {/* Header info in drawer */}
            <div className="flex items-center justify-between p-6 border-b border-[#273752]">
              <div className="flex items-center gap-3">
                <img src={logoSrc} alt={siteConfig.name} className="h-8 w-auto object-contain" />
                <div>
                  <div className="font-heading font-bold text-lg leading-tight text-white">{siteConfig.name}</div>
                  <div className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#35C5E8]">Creative Studio</div>
                </div>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close menu"
                className="p-1 rounded-lg hover:bg-[#18263E] text-[#DCE4F0] hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Nav items */}
            <div className="flex flex-col gap-2 p-6 overflow-y-auto flex-1">
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
                      `flex items-center justify-between rounded-xl px-4 py-3 text-base font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#35C5E8] ${
                        isActive
                          ? 'bg-[#2764F5]/20 text-[#35C5E8] border border-[#2764F5]/40'
                          : 'text-[#DCE4F0] hover:text-white hover:bg-[#18263E]'
                      }`
                    }
                  >
                    <span>{item.label}</span>
                    <ArrowRight size={16} className="text-[#35C5E8]" />
                  </NavLink>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <div className="border-t border-[#273752] p-6 bg-[#0B1320]">
              <Button to="/contact" variant="primary" className="w-full justify-center py-3" onClick={onClose}>
                Start a Project
              </Button>
            </div>
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  );
}
