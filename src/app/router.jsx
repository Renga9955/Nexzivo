import { createBrowserRouter } from 'react-router-dom';
import { MainLayout } from '@/components/layout/MainLayout';
import { HomePage } from '@/features/home/HomePage';
import { ServicesOverviewPage } from '@/features/services/ServicesOverviewPage';
import { ServiceDetailPage } from '@/features/services/ServiceDetailPage';
import { AboutPage } from '@/features/about/AboutPage';
import { ApproachPage } from '@/features/approach/ApproachPage';
import { WorkArchivePage } from '@/features/work/WorkArchivePage';
import { ProjectDetailPage } from '@/features/work/ProjectDetailPage';
import { ProductsPage } from '@/features/products/ProductsPage';
import { ContactPage } from '@/features/contact/ContactPage';
import { PlaceholderPage } from '@/features/shared/PlaceholderPage';
import { RouteErrorBoundary } from '@/features/shared/RouteErrorBoundary';

/**
 * Application router.
 * All routes are nested under MainLayout so they share Header, Footer, and ScrollToTop.
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
        path: 'services',
        element: <ServicesOverviewPage />,
      },
      {
        path: 'services/:slug',
        element: <ServiceDetailPage />,
      },
      {
        path: 'about',
        element: <AboutPage />,
      },
      {
        path: 'approach',
        element: <ApproachPage />,
      },
      {
        path: 'work',
        element: <WorkArchivePage />,
      },
      {
        path: 'work/:slug',
        element: <ProjectDetailPage />,
      },
      {
        path: 'products',
        element: <ProductsPage />,
      },
      {
        path: 'insights',
        element: <PlaceholderPage title="Insights &amp; Publications" />,
      },
      {
        path: 'contact',
        element: <ContactPage />,
      },
    ],
  },
]);
