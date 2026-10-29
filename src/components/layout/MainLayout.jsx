import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { ScrollToTop } from './ScrollToTop';
import { SmoothScrollProvider } from './SmoothScrollProvider';

/**
 * NEXZIVO Studio MainLayout.
 * Wraps all pages with shared Studio Header, light primary background, and Footer.
 */
export function MainLayout() {
  return (
    <SmoothScrollProvider>
      <div className="flex min-h-screen flex-col bg-[#F7F9FC] text-[#141B2A] antialiased">
        <ScrollToTop />
        <Header />
        <main id="main-content" className="flex-1" tabIndex={-1}>
          <Outlet />
        </main>
        <Footer />
      </div>
    </SmoothScrollProvider>
  );
}
