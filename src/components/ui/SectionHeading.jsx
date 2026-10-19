const alignClasses = {
  left: 'text-left',
  center: 'text-center mx-auto items-center',
  right: 'text-right ml-auto items-end',
};

/**
 * NEXZIVO Studio SectionHeading.
 * Editorial typography hierarchy with a restrained eyebrow, solid headline,
 * and balanced subtitle. No glow, no gradient text, no pulsing indicators.
 */
export function SectionHeading({
  eyebrow,
  heading,
  description,
  align = 'left',
  as: Tag = 'h2',
  className = '',
}) {
  const alignClass = alignClasses[align] || alignClasses.left;

  return (
    <div className={`flex flex-col gap-4 ${alignClass} ${className}`}>
      {eyebrow && (
        <span className="inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-accent-soft)]">
          <span className="h-px w-6 bg-[var(--color-accent)]/60" aria-hidden="true" />
          <span>{eyebrow}</span>
        </span>
      )}
      <Tag className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl text-[var(--color-soft-white)]">
        {heading}
      </Tag>
      {description && (
        <p className="max-w-2xl text-base leading-relaxed sm:text-lg text-[var(--color-subtle-gray)]">
          {description}
        </p>
      )}
    </div>
  );
}
