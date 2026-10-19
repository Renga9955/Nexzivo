import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { ScrollToTop } from './ScrollToTop';
import { CustomCursor } from '@/components/ui/CustomCursor';

/**
 * NEXZIVO Studio MainLayout.
 * Wraps all pages with shared Studio Header, dark obsidian viewport, CustomCursor, and Footer.
 */
export function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-[#080A0F] text-[#F3F5F9]">
      <CustomCursor />
      <ScrollToTop />
      <Header />
      <main id="main-content" className="flex-1" tabIndex={-1}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
