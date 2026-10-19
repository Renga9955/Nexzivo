import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';

/**
 * NEXZIVO MainLayout.
 * Wraps all public pages with shared Header, scrollable main content, and Footer.
 * Uses CSS grid to ensure the Footer is always pushed to the bottom.
 */
export function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-[var(--color-off-white)]">
      <Header />
      <main id="main-content" className="flex-1" tabIndex={-1}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
