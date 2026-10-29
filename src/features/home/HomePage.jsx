import { Helmet } from 'react-helmet-async';
import { siteConfig } from '@/config/site';
import {
  HeroSection,
  WhatWeDoSection,
  ServicesSection,
  AboutStudioSection,
  VisionMissionSection,
  ApproachSection,
  ContactCTASection,
} from './components';

/**
 * HomePage — Complete redesign for NEXZIVO Creative Digital Studio.
 * Clean, light primary canvas with deep navy contrast sections.
 * Showcases:
 * 1. Website design & development
 * 2. Mobile app development
 * 3. UI/UX design
 * 4. Poster & graphic design
 * 5. Custom software solutions
 */
export function HomePage() {
  return (
    <>
      <Helmet>
        <title>{siteConfig.name} — Creative Digital Studio | Websites, Apps &amp; Custom Software</title>
        <meta
          name="description"
          content="NEXZIVO is a premium creative digital studio specializing in responsive website design and development, mobile applications, UI/UX design, poster & graphic design, and custom software solutions."
        />
        <meta property="og:title" content={`${siteConfig.name} — Creative Digital Studio`} />
        <meta
          property="og:description"
          content="Websites, mobile apps, intuitive interfaces, creative visuals, and custom software tailored to your business."
        />
        <meta property="og:url" content={siteConfig.url} />
      </Helmet>

      {/* Hero Section */}
      <HeroSection />

      {/* Services Section (Visual Showcase of Studio Work & Deliverables) */}
      <ServicesSection />

      {/* About the Studio Section */}
      <AboutStudioSection />

      {/* Our Vision & Our Mission Automatic Carousel Section */}
      <VisionMissionSection />

      {/* Our 4-Step Process Section */}
      <ApproachSection />

      {/* "What We Do" - 6 Core Services Interactive Carousel */}
      <WhatWeDoSection />

      {/* Deep-Navy Contact CTA Section */}
      <ContactCTASection />
    </>
  );
}
