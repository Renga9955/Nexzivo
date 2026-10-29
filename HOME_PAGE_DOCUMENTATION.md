# NEXZIVO Home Page — Architecture & Implementation Guide

This document provides a complete reference for the Home Page implementation in NEXZIVO Studio. Use this guide to understand the page structure, components, data dependencies, animation design system, and how to replicate or migrate this code into another project.

---

## 1. Overview & Technology Stack

The Home Page is built as a high-performance, responsive Single Page Application (SPA) view combining light canvas surfaces (`#F7F9FC`, `#FFFFFF`) with high-contrast deep navy contrast blocks (`#101B2D`).

- **Framework**: React 19 + Vite 8
- **Styling**: Tailwind CSS v4 CSS-first design system (`@tailwindcss/vite`)
- **Animation**: `motion` (`motion/react` v12) with hardware-accelerated transitions
- **Smooth Scrolling**: Lenis (`lenis`)
- **Icons**: Lucide React (`lucide-react`)
- **SEO & Meta**: React Helmet Async (`react-helmet-async`)
- **Routing**: React Router v7

---

## 2. Directory & File Structure

```text
src/
├── app/
│   └── router.jsx                       # Route definition mounting HomePage under MainLayout
├── components/
│   ├── layout/
│   │   ├── MainLayout.jsx               # Global wrapper (Header + ScrollToTop + Outlet + Footer)
│   │   ├── Header.jsx                   # Fixed deep-navy navbar (80px height)
│   │   └── Footer.jsx                   # Global studio footer
│   └── ui/
│       ├── Container.jsx                # Layout width & padding: max-w-[1440px] xl:max-w-[1540px]
│       ├── Button.jsx                   # Studio button variants (primary, secondary, outline, dark)
│       ├── SectionHeading.jsx           # Editorial heading + eyebrow + description
│       └── SectionReveal.jsx            # Scroll entrance wrapper with stagger delay
└── features/
    └── home/
        ├── HomePage.jsx                 # Master page assembler component
        ├── components/
        │   ├── index.js                 # Export barrel for all section components
        │   ├── HeroSection.jsx          # Studio hero with headline, CTAs, tags & responsive mockup
        │   ├── ServicesSection.jsx      # 5-service visual cards with hover & image reveals
        │   ├── AboutStudioSection.jsx   # Studio narrative, counter stats & core values
        │   ├── VisionMissionSection.jsx # Compact single-frame automatic 7s switcher
        │   ├── ApproachSection.jsx      # 4-step interactive process carousel with timer
        │   ├── WhatWeDoSection.jsx      # 6-service continuous 4s carousel
        │   └── ContactCTASection.jsx    # Deep-navy closing CTA banner with studio logo
        └── data/
            └── homeContent.js           # All editorial copy, stats, links & service items
```

---

## 3. Section-by-Section Breakdown

### 3.1 [HomePage.jsx](file:///c:/Users/rreng/Downloads/nexzivo-main/nexzivo-main/src/features/home/HomePage.jsx)
The root component that renders SEO tags via `<Helmet>` and stitches each section in sequential narrative order:
1. `<HeroSection />`
2. `<ServicesSection />`
3. `<AboutStudioSection />`
4. `<VisionMissionSection />`
5. `<ApproachSection />`
6. `<WhatWeDoSection />`
7. `<ContactCTASection />`

---

### 3.2 [HeroSection.jsx](file:///c:/Users/rreng/Downloads/nexzivo-main/nexzivo-main/src/features/home/components/HeroSection.jsx)
- **Purpose**: First viewport presentation featuring bold typography, studio capabilities, and the signature multi-device illustration mockup.
- **Layout**: 12-column responsive grid (`lg:col-span-5` for copy/actions, `lg:col-span-7` for visual).
- **Key Features**:
  - Studio Eyebrow: `CREATIVE DIGITAL STUDIO` with pill accent.
  - 3-Line Animated Staggered Heading: *"Creative design. Digital experiences. Built for what’s next."*
  - CTAs: Primary button (`Explore Our Work`) and Secondary button (`Start a Project`).
  - Studio Focus Tags: Websites, Mobile Apps, UI/UX, Graphic Design, Custom Software.
  - Visual Container: Scaled illustration (`hero1.png`) with ambient gradient wash and dot grid backdrops.

---

### 3.3 [ServicesSection.jsx](file:///c:/Users/rreng/Downloads/nexzivo-main/nexzivo-main/src/features/home/components/ServicesSection.jsx)
- **Purpose**: Showcase the studio's 5 core service offerings with photorealistic deliverables.
- **Layout**: Asymmetric 6-column grid:
  - Top Row: 3 cards spanning `lg:col-span-2` each (Web, Mobile, UI/UX).
  - Bottom Row: 2 cards spanning `lg:col-span-3` each (Poster Design, Custom Software).
- **Key Interactions**:
  - Curtain unveil animation on scroll (`imageCurtainVariants`).
  - Interactive hover card raise (`hover:-translate-y-1` + border color shift).
  - Categorized deliverables tags per card.

---

### 3.4 [AboutStudioSection.jsx](file:///c:/Users/rreng/Downloads/nexzivo-main/nexzivo-main/src/features/home/components/AboutStudioSection.jsx)
- **Purpose**: Communicates studio identity, execution discipline, and quantitative proof metrics.
- **Key Features**:
  - Live animated number counters (`StatCounter` using custom `easeOutExpo` requestAnimationFrame ticker).
  - Metric counters: Projects Delivered (`250+`), Happy Clients (`120+`), Client Satisfaction (`4.8/5`).
  - Core Pillars: Engineering Excellence, Pixel-Perfect Craft, Partnership-Driven Delivery.
  - Background: Precision isometric dot and calibration crosshair graphics.

---

### 3.5 [VisionMissionSection.jsx](file:///c:/Users/rreng/Downloads/nexzivo-main/nexzivo-main/src/features/home/components/VisionMissionSection.jsx)
- **Purpose**: 2-state purpose carousel ("Our Vision" vs. "Our Mission") designed to fit in a single viewport frame.
- **Cycle**: 7-second automatic rotation with pause on hover/focus and manual segmented pill switches.
- **Layout**:
  - Left Card (58%): Compact `180px–230px` height photorealistic studio illustration, badge, statement, and narrative.
  - Right Cards (42%): 3 stacked principle cards with themed icons and step numbering.

---

### 3.6 [ApproachSection.jsx](file:///c:/Users/rreng/Downloads/nexzivo-main/nexzivo-main/src/features/home/components/ApproachSection.jsx)
- **Purpose**: 4-step creative engineering process (Discover → Design → Build → Launch).
- **Cycle**: 4-second automatic progress timer with interactive pill tabs and synchronized active blue backing shadow.
- **Cards**: Numbered cards detailing Phase objectives, activities, and concrete deliverables.

---

### 3.7 [WhatWeDoSection.jsx](file:///c:/Users/rreng/Downloads/nexzivo-main/nexzivo-main/src/features/home/components/WhatWeDoSection.jsx)
- **Purpose**: Continuous 6-service carousel with smooth CSS `calc()` hardware-accelerated translateX transforms.
- **Card Viewporting**: 3 cards on desktop (`lg`), 2 on tablet (`md`), 1 on mobile.
- **Controls**: Touch swipe gesture listeners (`onTouchStart`, `onTouchEnd`), pause on hover, manual chevron buttons.

---

### 3.8 [ContactCTASection.jsx](file:///c:/Users/rreng/Downloads/nexzivo-main/nexzivo-main/src/features/home/components/ContactCTASection.jsx)
- **Purpose**: High-converting closing section with dark navy (`#101B2D`) rounded canvas.
- **Elements**: Official brand logo, high-contrast headline, action buttons (`Start a Project`, `Explore Case Studies`), and reassurance badges.

---

## 4. Central Data Model: `homeContent.js`

All text copy, bullet items, and section definitions are decoupled from layout code in [homeContent.js](file:///c:/Users/rreng/Downloads/nexzivo-main/nexzivo-main/src/features/home/data/homeContent.js).

Key exported data structures:
- `heroContent`: Eyebrow, staggered line array, description, and CTA links.
- `servicesSectionContent`: Section heading copy.
- `coreStudioServices`: 5 service items with `imageKey`, `slug`, `title`, `description`, and `deliverables`.
- `aboutStudioContent`: Studio story, stats array (`{ value, label, subtext }`), and core values.
- `visionMissionContent`: Dual object (`vision` & `mission`) containing statements, badge, and 3 principle items.
- `processContent`: 4 workflow steps (`steps` array with phase, title, timeline, and description).
- `whatWeDoContent`: 6 carousel items (`services` array).
- `contactCtaContent`: CTA banner copy, buttons, and reassurance guarantees.

---

## 5. Animation & Motion Guidelines

All components implement standard animation curves and respect user motion preferences:

```javascript
// Consistent cubic bezier easing across all components
const EASE_OUT_EXPO = [0.22, 1, 0.36, 1];

// Accessibility hook preventing jarring animations when reduced motion is preferred
import { useReducedMotionPreference } from '@/hooks/useReducedMotionPreference';
```

When reduced motion is active:
- Slide offsets are neutralized (`y: 0`, `x: 0`).
- Opacity immediately settles to 1.
- Auto-cycling carousels are safely paused.

---

## 6. How to Replicate or Migrate to Another Project

To migrate this home page to another React project:
1. **Dependencies**:
   ```bash
   npm install motion lucide-react lenis react-helmet-async react-router-dom
   ```
2. **Tailwind Tokens**:
   Ensure brand colors are defined in your Tailwind / CSS configuration:
   - Primary Background: `#F7F9FC`
   - Navy: `#101B2D` (`#18263E`, `#273752`)
   - Brand Blue: `#2764F5`
   - Brand Cyan: `#35C5E8`
   - Dark Text: `#141B2A`
   - Secondary Text: `#687386`
3. **Copy Folders**:
   - Copy `src/features/home/` into your destination project.
   - Copy shared UI elements: `Container.jsx`, `Button.jsx`, `SectionHeading.jsx`, `SectionReveal.jsx`.
   - Copy asset images from `src/assets/showcase/` and `src/assets/hero1.png`.
4. **Mount Route**:
   Import `HomePage` and place it in your router or main entry file.
