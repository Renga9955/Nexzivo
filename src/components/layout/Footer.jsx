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
 * Main dark/navy section (#101B2D) with original logo, short studio description,
 * relevant service links, portfolio/navigation links, contact details, and copyright.
 */
export function Footer() {
  return (
    <footer className="bg-[#101B2D] text-[#F7F9FC] border-t border-[#273752]" role="contentinfo">
      <Container>
        {/* Main footer grid */}
        <div className="grid grid-cols-1 gap-12 py-16 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Brand block (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            <Link
              to="/"
              className="inline-flex items-center gap-3 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2764F5] group"
              aria-label={`${siteConfig.name} — studio homepage`}
            >
              <img
                src={logoSrc}
                alt={`${siteConfig.name} logo`}
                className="h-10 w-auto object-contain"
              />
              <div className="flex flex-col">
                <span className="font-heading text-xl font-extrabold text-white tracking-tight">
                  {siteConfig.name}
                </span>
                <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#35C5E8] -mt-0.5">
                  Creative Digital Studio
                </span>
              </div>
            </Link>

            <p className="max-w-md text-sm leading-relaxed text-[#CBD5E1]">
              A premium creative digital studio crafting responsive websites, compelling poster &amp; graphic designs, and intuitive UI/UX experiences that move businesses forward.
            </p>

            {/* Contact quick links */}
            <div className="flex flex-col gap-1 text-sm text-[#94A3B8] pt-1">
              <span>Inquiries: <a href={`mailto:${siteConfig.contact.email}`} className="text-white hover:text-[#35C5E8] transition-colors">{siteConfig.contact.email}</a></span>
              <span>Focus: Websites · Mobile Apps · UI/UX · Posters &amp; Graphics · Custom Software</span>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-2 mt-2">
              {socialLinks.map(({ href, label, Icon, external }) => (
                <a
                  key={label}
                  href={href}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noopener noreferrer' : undefined}
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#18263E] border border-[#273752] text-[#CBD5E1] hover:text-white hover:border-[#2764F5] hover:bg-[#2764F5]/20 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2764F5]"
                >
                  <Icon size={18} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation groups (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8 lg:pl-12">
            {Object.entries(footerNav).map(([groupLabel, items]) => (
              <nav key={groupLabel} aria-label={`${groupLabel} links`}>
                <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-[#35C5E8]">
                  {groupLabel}
                </h3>
                <ul className="flex flex-col gap-3">
                  {items.map((item) => (
                    <li key={item.label}>
                      <Link
                        to={item.href}
                        className="text-sm font-medium text-[#CBD5E1] hover:text-white transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2764F5] rounded-sm inline-flex items-center gap-1 group"
                      >
                        <span>{item.label}</span>
                        <ArrowUpRight size={13} className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#35C5E8]" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        {/* Legal bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-[#273752] py-6 sm:flex-row text-xs text-[#94A3B8]">
          <p>
            &copy; {currentYear} {siteConfig.name} Studio. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <span>Website Design</span>
            <span>·</span>
            <span>Mobile Apps</span>
            <span>·</span>
            <span>UI/UX</span>
            <span>·</span>
            <span>Graphic Design</span>
            <span>·</span>
            <span>Custom Software</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
