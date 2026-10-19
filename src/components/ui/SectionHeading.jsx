const alignClasses = {
  left: 'text-left',
  center: 'text-center mx-auto',
  right: 'text-right ml-auto',
};

/**
 * NEXZIVO SectionHeading.
 * Consistent heading block with eyebrow, heading, and optional description.
 * Supports light (default) and dark theme variants.
 */
export function SectionHeading({
  eyebrow,
  heading,
  description,
  align = 'left',
  as: Tag = 'h2',
  theme = 'light',
  className = '',
}) {
  const alignClass = alignClasses[align] || alignClasses.left;
  const isDark = theme === 'dark';

  return (
    <div className={`flex flex-col gap-3 ${alignClass} ${className}`}>
      {eyebrow && (
        <span
          className={`inline-block text-sm font-semibold tracking-widest uppercase ${
            isDark ? 'text-[var(--color-lime)]' : 'text-[var(--color-green)]'
          }`}
        >
          {eyebrow}
        </span>
      )}
      <Tag
        className={`text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl ${
          isDark ? 'text-[var(--color-off-white)]' : 'text-[var(--color-charcoal)]'
        }`}
      >
        {heading}
      </Tag>
      {description && (
        <p
          className={`mt-1 max-w-2xl text-base leading-relaxed sm:text-lg ${
            isDark ? 'text-[var(--color-muted)]' : 'text-[var(--color-muted)]'
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
