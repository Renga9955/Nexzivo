import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

const sizeClasses = {
  sm: 'px-4 py-2 text-xs font-semibold gap-1.5',
  md: 'px-5 py-2.5 text-sm font-semibold gap-2',
  lg: 'px-7 py-3.5 text-base font-semibold gap-2.5',
};

const variantClasses = {
  primary:
    'bg-[var(--color-deep-green)] text-white hover:bg-[var(--color-green)] shadow-sm hover:shadow-md border border-[var(--color-deep-green)]',
  lime:
    'bg-[var(--color-lime)] text-[var(--color-deep-green)] font-bold hover:bg-[var(--color-lime-hover)] shadow-sm hover:shadow-md border border-transparent',
  secondary:
    'bg-[var(--color-green-light)] text-[var(--color-deep-green)] hover:bg-[var(--color-green)]/15 border border-[var(--color-green)]/20',
  outline:
    'border border-[var(--color-deep-green)] text-[var(--color-deep-green)] hover:bg-[var(--color-deep-green)] hover:text-white',
  outlineLight:
    'border border-white/30 text-white hover:bg-white hover:text-[var(--color-deep-green)]',
  ghost:
    'text-[var(--color-text-body)] hover:text-[var(--color-deep-green)] hover:bg-[var(--color-green-light)]',
};

const baseClasses =
  'inline-flex items-center justify-center rounded-xl transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-green)] focus-visible:ring-offset-2 disabled:opacity-40 disabled:pointer-events-none select-none tracking-tight';

const motionProps = {
  whileHover: { scale: 1.02 },
  whileTap: { scale: 0.98 },
  transition: { type: 'spring', stiffness: 400, damping: 25 },
};

/**
 * NEXZIVO Button Component — with brand deep-green, lime, and clean contrast styles.
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
  const classes = [baseClasses, sizeClasses[size], variantClasses[variant] || variantClasses.primary, className].join(' ');

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
