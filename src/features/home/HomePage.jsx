import { Helmet } from 'react-helmet-async';
import { siteConfig } from '@/config/site';
import {
  HeroSection,
  ServicesSection,
  ApproachSection,
  WorkShowcaseSection,
  ProductsSection,
  BrandPhilosophySection,
  ContactCTASection,
} from './components';

/**
 * Home page — composes all homepage section components.
 * Content data lives in features/home/data/homeContent.js.
 */
export function HomePage() {
  return (
    <>
      <Helmet>
        <title>{siteConfig.name} — {siteConfig.tagline}</title>
        <meta name="description" content={siteConfig.description} />
        <meta property="og:title" content={`${siteConfig.name} — ${siteConfig.tagline}`} />
        <meta property="og:description" content={siteConfig.description} />
        <meta property="og:url" content={siteConfig.url} />
      </Helmet>

      <HeroSection />
      <ServicesSection />
      <ApproachSection />
      <WorkShowcaseSection />
      <ProductsSection />
      <BrandPhilosophySection />
      <ContactCTASection />
    </>
  );
}
