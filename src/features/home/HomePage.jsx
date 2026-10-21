import { Helmet } from 'react-helmet-async';
import { siteConfig } from '@/config/site';
import {
  HeroSection,
  WhoWeAreSection,
  OurMissionSection,
  ServicesSection,
  WhyChooseUsSection,
  ApproachSection,
  WorkShowcaseSection,
  ProductsSection,
  BrandPhilosophySection,
  ContactCTASection,
} from './components';

/**
 * Home page — composes all homepage section components in the intended sequence:
 * 1. Hero
 * 2. Who We Are
 * 3. Our Mission
 * 4. What We Do (Services)
 * 5. Why Choose NEXZIVO
 * 6. Work Showcase & Approach & Products
 * 7. Brand Philosophy & Final Call to Action
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

      {/* 1. Hero */}
      <HeroSection />

      {/* 2. Who We Are */}
      <WhoWeAreSection />

      {/* 3. Our Mission */}
      <OurMissionSection />

      {/* 4. What We Do */}
      <ServicesSection />

      {/* 5. Why Choose NEXZIVO */}
      <WhyChooseUsSection />

      {/* 6. Existing Showcase & Process */}
      <ApproachSection />
      <WorkShowcaseSection />
      <ProductsSection />
      <BrandPhilosophySection />

      {/* 7. Final Call to Action */}
      <ContactCTASection />
    </>
  );
}
