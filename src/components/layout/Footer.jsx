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
 * NEXZIVO Studio Footer.
 * Deep obsidian backdrop, electric blue highlights, clean navigation groups,
 * and high-contrast typography.
 */
export function Footer() {
  return (
    <footer className="bg-[#080A0F] text-[#F3F5F9] border-t border-[#232B3E]" role="contentinfo">
      <Container>
        {/* Main footer grid */}
        <div className="grid grid-cols-1 gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Brand block */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <Link
              to="/"
              className="inline-flex items-center gap-3 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] group"
              aria-label={`${siteConfig.name} — studio homepage`}
            >
              <img
                src={logoSrc}
                alt={`${siteConfig.name} logo`}
                className="h-9 w-auto"
              />
              <span className="font-heading text-xl font-bold text-white tracking-tight">
                {siteConfig.name}
              </span>
            </Link>

            {/* Tagline */}
            <p className="text-sm font-medium text-[var(--color-accent-soft)] tracking-wide">
              {siteConfig.tagline}
            </p>

            <p className="max-w-sm text-sm leading-relaxed text-[#8B95A5]">
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
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#151A26] border border-[#232B3E] text-[#8B95A5] hover:text-white hover:border-[var(--color-accent)]/50 hover:bg-[#1E2536] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]"
                >
                  <Icon size={18} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation groups */}
          {Object.entries(footerNav).map(([groupLabel, items]) => (
            <nav key={groupLabel} aria-label={`${groupLabel} links`}>
              <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-accent-soft)]">
                {groupLabel}
              </h3>
              <ul className="flex flex-col gap-3">
                {items.map((item) => (
                  <li key={item.href}>
                    <Link
                      to={item.href}
                      className="text-sm text-[#8B95A5] hover:text-white transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] rounded-sm inline-flex items-center gap-1 group"
                    >
                      <span>{item.label}</span>
                      <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity text-[var(--color-accent-soft)]" />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Legal bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-[#232B3E]/60 py-6 sm:flex-row text-xs text-[#8B95A5]">
          <p>
            &copy; {currentYear} {siteConfig.name} Studio. All rights reserved.
          </p>
          <p className="font-mono text-[11px] text-[#8B95A5]/80">
            Engineered with React 19 · Vite · Motion
          </p>
        </div>
      </Container>
    </footer>
  );
}
