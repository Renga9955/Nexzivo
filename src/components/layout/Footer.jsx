import { Link } from 'react-router-dom';
import { Container } from '@/components/ui/Container';
import { siteConfig } from '@/config/site';
import { footerNav } from '@/config/navigation';
import { Linkedin, Twitter, Mail } from 'lucide-react';
import logoSrc from '@/assets/logo.png';

const currentYear = new Date().getFullYear();

const socialLinks = [
  {
    href: siteConfig.contact.linkedin,
    label: 'NEXZIVO on LinkedIn',
    Icon: Linkedin,
    external: true,
  },
  {
    href: siteConfig.contact.twitter,
    label: 'NEXZIVO on X (Twitter)',
    Icon: Twitter,
    external: true,
  },
  {
    href: `mailto:${siteConfig.contact.email}`,
    label: 'Email NEXZIVO',
    Icon: Mail,
    external: false,
  },
];

/**
 * NEXZIVO site Footer.
 * Brand block with tagline, nav groups, social links, and legal line.
 */
export function Footer() {
  return (
    <footer className="bg-[var(--color-charcoal)] text-[var(--color-off-white)]" role="contentinfo">
      <Container>
        {/* Main footer grid */}
        <div className="grid grid-cols-1 gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Brand block */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <Link
              to="/"
              className="inline-flex items-center gap-2.5 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-lime)]"
              aria-label={`${siteConfig.name} — home`}
            >
              <img src={logoSrc} alt={`${siteConfig.name} logo`} className="h-8 w-auto" />
              <span className="font-heading text-xl font-bold text-[var(--color-off-white)]">
                {siteConfig.name}
              </span>
            </Link>

            {/* Tagline */}
            <p className="text-lg font-semibold text-[var(--color-lime)] font-heading tracking-tight">
              {siteConfig.tagline}
            </p>

            <p className="max-w-sm text-sm leading-relaxed text-[var(--color-muted)]">
              {siteConfig.description}
            </p>

            {/* Social links */}
            <div className="flex items-center gap-2 mt-1">
              {socialLinks.map(({ href, label, Icon, external }) => (
                <a
                  key={label}
                  href={href}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noopener noreferrer' : undefined}
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-md text-[var(--color-muted)] hover:text-[var(--color-lime)] hover:bg-white/5 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-lime)]"
                >
                  <Icon size={17} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation groups */}
          {Object.entries(footerNav).map(([groupLabel, items]) => (
            <nav key={groupLabel} aria-label={`${groupLabel} links`}>
              <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-muted)]">
                {groupLabel}
              </h3>
              <ul className="flex flex-col gap-3">
                {items.map((item) => (
                  <li key={item.href}>
                    <Link
                      to={item.href}
                      className="text-sm text-[var(--color-muted)] hover:text-[var(--color-off-white)] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-lime)] rounded-sm"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Legal bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/8 py-6 sm:flex-row">
          <p className="text-xs text-[var(--color-muted)]">
            &copy; {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-xs text-[var(--color-muted)]">
            Built with precision in React &amp; Vite
          </p>
        </div>
      </Container>
    </footer>
  );
}
