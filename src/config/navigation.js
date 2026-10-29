/**
 * Navigation configuration.
 * Single source of truth for all nav items used across Header, Footer, and mobile menu.
 */
export const primaryNav = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Work', href: '/work' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact', href: '/contact' },
];

export const footerNav = {
  Services: [
    { label: 'Website Design & Development', href: '/services/website-development' },
    { label: 'Mobile App Development', href: '/services/mobile-app-development' },
    { label: 'UI/UX Design', href: '/services/ui-ux-design' },
    { label: 'Poster & Graphic Design', href: '/services/poster-graphic-design' },
    { label: 'Custom Software Solutions', href: '/services/brand-strategy-innovation' },
  ],
  Studio: [
    { label: 'Selected Work', href: '/work' },
    { label: 'Our Process', href: '/approach' },
    { label: 'About NEXZIVO', href: '/about' },
    { label: 'Careers', href: '/careers' },
    { label: 'Start a Project', href: '/contact' },
  ],
};
