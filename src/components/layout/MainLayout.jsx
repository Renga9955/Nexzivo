import { useLocation, useOutlet } from 'react-router-dom';
import { memo } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { ScrollToTop } from './ScrollToTop';
import { SmoothScrollProvider } from './SmoothScrollProvider';
import { FloatingActionButtons } from '@/components/ui/FloatingActionButtons';

// Memoize Header and Footer to prevent re-rendering during page navigation
const MemoizedHeader = memo(Header);
const MemoizedFooter = memo(Footer);

/**
 * NEXZIVO Studio MainLayout.
 * Wraps all pages with shared Studio Header, light primary background, and Footer.
 * Applies a lightweight, hardware-accelerated CSS page-transition on page content only.
 * Includes global FloatingActionButtons (WhatsApp chat & smooth Back to Top button).
 */
export function MainLayout() {
  const location = useLocation();
  const currentOutlet = useOutlet();

  return (
    <SmoothScrollProvider>
      <div className="relative flex min-h-screen flex-col bg-[#F7F9FC] text-[#141B2A] antialiased">
        <ScrollToTop />
        <MemoizedHeader />
        <main id="main-content" className="flex-1" tabIndex={-1}>
          <div key={location.pathname} className="page-transition">
            {currentOutlet}
          </div>
        </main>
        <MemoizedFooter />
        <FloatingActionButtons />
      </div>
    </SmoothScrollProvider>
  );
}
