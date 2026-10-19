import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

const sizeClasses = {
  sm: 'px-4 py-2 text-xs font-semibold gap-1.5',
  md: 'px-6 py-2.5 text-sm font-semibold gap-2',
  lg: 'px-7 py-3.5 text-base font-semibold gap-2.5',
};

const variantClasses = {
  primary:
    'bg-[var(--color-accent-strong)] text-white border border-white/10 hover:bg-[var(--color-accent)]',
  secondary:
    'bg-[var(--color-slate-card)] text-[var(--color-soft-white)] border border-[var(--color-slate-border)] hover:border-[var(--color-accent)]/60',
  outline:
    'border border-[var(--color-slate-border)] text-[var(--color-soft-white)] hover:border-[var(--color-accent)] hover:text-white',
  ghost:
    'text-[var(--color-subtle-gray)] hover:text-[var(--color-soft-white)] hover:bg-white/5',
  cyan:
    'bg-[var(--color-accent)] text-white border border-white/10 hover:bg-[var(--color-accent-strong)]',
};

const baseClasses =
  'inline-flex items-center justify-center rounded-xl transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent-soft)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-obsidian)] disabled:opacity-40 disabled:pointer-events-none select-none tracking-tight';

const motionProps = {
  whileHover: { scale: 1.015 },
  whileTap: { scale: 0.985 },
  transition: { type: 'spring', stiffness: 380, damping: 28 },
};

/**
 * NEXZIVO Studio Button Component.
 * Supports primary radiant gradient, secondary slate, outline, ghost, and electric cyan.
 */
export function Button({
  variant = 'primary',
  size = 'md',
  to,
  href,
  disabled = false,
  iconLeft,
  iconRight,
  className = '',
  type = 'button',
  onClick,
  children,
  'aria-label': ariaLabel,
}) {
  const classes = [baseClasses, sizeClasses[size], variantClasses[variant], className].join(' ');

  const content = (
    <>
      {iconLeft && <span className="shrink-0">{iconLeft}</span>}
      {children}
      {iconRight && <span className="shrink-0">{iconRight}</span>}
    </>
  );

  if (to) {
    return (
      <motion.div {...motionProps} className="inline-flex">
        <Link
          to={to}
          className={classes}
          aria-label={ariaLabel}
          aria-disabled={disabled}
          onClick={onClick}
        >
          {content}
        </Link>
      </motion.div>
    );
  }

  if (href) {
    return (
      <motion.div {...motionProps} className="inline-flex">
        <a
          href={href}
          className={classes}
          aria-label={ariaLabel}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onClick}
        >
          {content}
        </a>
      </motion.div>
    );
  }

  return (
    <motion.button
      type={type}
      className={classes}
      disabled={disabled}
      onClick={onClick}
      aria-label={ariaLabel}
      {...motionProps}
    >
      {content}
    </motion.button>
  );
}
