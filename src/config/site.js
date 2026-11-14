/**
 * Site-wide configuration.
 * Centralised place for metadata, brand info, and global constants.
 */
export const siteConfig = {
  name: 'NEXZIVO',
  tagline: "Build What's Next.",
  description:
    'NEXZIVO is a digital technology and design company building websites, applications, and practical software solutions for businesses and individuals.',
  url: 'https://nexzivo.com',
  ogImage: '/images/og-image.png',
  /** CTA label used in header and mobile nav. */
  ctaLabel: "Let's Talk",
  contact: {
    /** Placeholder — replace with real address when available */
    email: 'Nexzivotechi@gmail.com',
    linkedin: 'https://www.linkedin.com/company/nexzivo/?viewAsMember=true',
    twitter: 'https://twitter.com/nexzivo',
    whatsapp: {
      phone: '+91 6380208106',
      number: '916380208106',
      defaultMessage: "Hi NEXZIVO! I'm interested in your services. I would like to discuss a project.",
    },
  },
};

/**
 * Helper to build official WhatsApp Click-to-Chat URLs.
 * Format: https://wa.me/PHONE?text=ENCODED_MESSAGE
 */
export const getWhatsAppUrl = (customMessage) => {
  const number = siteConfig.contact.whatsapp.number;
  const msg = customMessage || siteConfig.contact.whatsapp.defaultMessage;
  return `https://wa.me/${number}?text=${encodeURIComponent(msg)}`;
};
