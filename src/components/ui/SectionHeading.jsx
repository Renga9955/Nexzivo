const alignClasses = {
  left: 'text-left',
  center: 'text-center mx-auto items-center',
  right: 'text-right ml-auto items-end',
};

/**
 * NEXZIVO Brand SectionHeading.
 * Crisp typography with deep green headings, green/lime eyebrow badges,
 * and clear readable body typography.
 */
export function SectionHeading({
  eyebrow,
  heading,
  description,
  align = 'left',
  as: Tag = 'h2',
  className = '',
  theme = 'light', // 'light' (on white/off-white) or 'dark' (on deep green)
}) {
  const alignClass = alignClasses[align] || alignClasses.left;
  const isDark = theme === 'dark';

  return (
    <div className={`flex flex-col gap-3.5 ${alignClass} ${className}`}>
      {eyebrow && (
        <span
          className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-[0.18em] ${
            isDark
              ? 'bg-[var(--color-lime)]/15 text-[var(--color-lime)] border border-[var(--color-lime)]/30'
              : 'bg-[var(--color-green-light)] text-[var(--color-green)] border border-[var(--color-green)]/20'
          }`}
        >
          <span
            className={`h-1.5 w-1.5 rounded-full ${isDark ? 'bg-[var(--color-lime)]' : 'bg-[var(--color-green)]'}`}
            aria-hidden="true"
          />
          <span>{eyebrow}</span>
        </span>
      )}
      <Tag
        className={`text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.12] tracking-tight ${
          isDark ? 'text-white' : 'text-[var(--color-deep-green)]'
        }`}
      >
        {heading}
      </Tag>
      {description && (
        <p
          className={`max-w-2xl text-base sm:text-lg leading-relaxed ${
            isDark ? 'text-[var(--color-light-muted)]' : 'text-[var(--color-text-muted)]'
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
