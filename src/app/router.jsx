import { createBrowserRouter } from 'react-router-dom';
import { MainLayout } from '@/components/layout/MainLayout';
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
        lazy: async () => {
          const { HomePage } = await import('@/features/home/HomePage');
          return { Component: HomePage };
        },
      },
      {
        path: 'services',
        lazy: async () => {
          const { ServicesOverviewPage } = await import('@/features/services/ServicesOverviewPage');
          return { Component: ServicesOverviewPage };
        },
      },
      {
        path: 'services/:slug',
        lazy: async () => {
          const { ServiceDetailPage } = await import('@/features/services/ServiceDetailPage');
          return { Component: ServiceDetailPage };
        },
      },
      {
        path: 'about',
        lazy: async () => {
          const { AboutPage } = await import('@/features/about/AboutPage');
          return { Component: AboutPage };
        },
      },
      {
        path: 'careers',
        lazy: async () => {
          const { CareerPage } = await import('@/features/careers/CareerPage');
          return { Component: CareerPage };
        },
      },
      {
        path: 'approach',
        lazy: async () => {
          const { ApproachPage } = await import('@/features/approach/ApproachPage');
          return { Component: ApproachPage };
        },
      },
      {
        path: 'work',
        lazy: async () => {
          const { WorkArchivePage } = await import('@/features/work/WorkArchivePage');
          return { Component: WorkArchivePage };
        },
      },
      {
        path: 'work/:slug',
        lazy: async () => {
          const { ProjectDetailPage } = await import('@/features/work/ProjectDetailPage');
          return { Component: ProjectDetailPage };
        },
      },
      {
        path: 'products',
        lazy: async () => {
          const { ProductsPage } = await import('@/features/products/ProductsPage');
          return { Component: ProductsPage };
        },
      },
      {
        path: 'insights',
        element: <PlaceholderPage title="Insights &amp; Publications" />,
      },
      {
        path: 'contact',
        lazy: async () => {
          const { ContactPage } = await import('@/features/contact/ContactPage');
          return { Component: ContactPage };
        },
      },
    ],
  },
]);
