/**
 * Navigation configuration.
 * Single source of truth for all nav items used across Header, Footer, and mobile menu.
 */
export const primaryNav = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '#services' },
  { label: 'Approach', href: '#approach' },
  { label: 'Work', href: '#work' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export const footerNav = {
  Company: [
    { label: 'About', href: '/about' },
    { label: 'Approach', href: '#approach' },
    { label: 'Contact', href: '/contact' },
  ],
  Services: [
    { label: 'UI/UX & Product Design', href: '#services-design' },
    { label: 'Web Development', href: '#services-web' },
    { label: 'Product Engineering', href: '#services-engineering' },
    { label: 'AI & Innovation', href: '#services-ai' },
  ],

};
