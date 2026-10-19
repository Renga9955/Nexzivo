import { createBrowserRouter } from 'react-router-dom';
import { MainLayout } from '@/components/layout/MainLayout';
import { HomePage } from '@/features/home/HomePage';
import { PlaceholderPage } from '@/features/shared/PlaceholderPage';
import { RouteErrorBoundary } from '@/features/shared/RouteErrorBoundary';

/**
 * Application router.
 * All routes are nested under MainLayout so they share Header/Footer.
 * Only the Home page has a dedicated component; remaining routes render
 * PlaceholderPage until their feature branches are implemented.
 */
export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <RouteErrorBoundary />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'about',
        element: <PlaceholderPage title="About" />,
      },
      {
        path: 'services',
        element: <PlaceholderPage title="Services" />,
      },
      {
        path: 'products',
        element: <PlaceholderPage title="Products" />,
      },
      {
        path: 'work',
        element: <PlaceholderPage title="Our Work" />,
      },
      {
        path: 'insights',
        element: <PlaceholderPage title="Insights" />,
      },
      {
        path: 'contact',
        element: <PlaceholderPage title="Contact" />,
      },
    ],
  },
]);
