import { Link } from 'react-router-dom';
import { Container } from '@/components/ui/Container';
import { siteConfig } from '@/config/site';
import { footerNav } from '@/config/navigation';
import { Linkedin, Twitter, Mail, ArrowUpRight } from 'lucide-react';
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
 * NEXZIVO Footer — Deep green backdrop (#102820) with off-white text and lime accents.
 */
export function Footer() {
  return (
    <footer className="bg-[var(--color-deep-green)] text-white border-t border-[var(--color-dark-border)]" role="contentinfo">
      <Container>
        {/* Main footer grid */}
        <div className="grid grid-cols-1 gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Brand block */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <Link
              to="/"
              className="inline-flex items-center gap-3 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-lime)] group"
              aria-label={`${siteConfig.name} — homepage`}
            >
              <img
                src={logoSrc}
                alt={`${siteConfig.name} logo`}
                className="h-9 w-auto"
              />
              <span className="font-heading text-2xl font-bold text-white tracking-tight">
                {siteConfig.name}
              </span>
            </Link>

            {/* Tagline */}
            <p className="text-sm font-semibold text-[var(--color-lime)] tracking-wide">
              {siteConfig.tagline}
            </p>

            <p className="max-w-sm text-sm leading-relaxed text-[var(--color-light-muted)]">
              {siteConfig.description}
            </p>

            {/* Social links */}
            <div className="flex items-center gap-2 mt-2">
              {socialLinks.map(({ href, label, Icon, external }) => (
                <a
                  key={label}
                  href={href}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noopener noreferrer' : undefined}
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white/80 hover:text-[var(--color-lime)] hover:border-[var(--color-lime)]/40 hover:bg-white/10 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-lime)]"
                >
                  <Icon size={18} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation groups */}
          {Object.entries(footerNav).map(([groupLabel, items]) => (
            <nav key={groupLabel} aria-label={`${groupLabel} links`}>
              <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-lime)]">
                {groupLabel}
              </h3>
              <ul className="flex flex-col gap-3">
                {items.map((item) => (
                  <li key={item.href}>
                    <Link
                      to={item.href}
                      className="text-sm text-[var(--color-light-muted)] hover:text-white transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-lime)] rounded-sm inline-flex items-center gap-1 group"
                    >
                      <span>{item.label}</span>
                      <ArrowUpRight size={13} className="opacity-0 group-hover:opacity-100 transition-opacity text-[var(--color-lime)]" />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-8 border-t border-white/10 text-xs text-[var(--color-light-muted)]">
          <p>© {currentYear} {siteConfig.name}. All rights reserved.</p>
          <p className="flex items-center gap-1">
            <span>Modern digital technology &amp; practical innovation.</span>
          </p>
        </div>
      </Container>
    </footer>
  );
}
