import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

const sizeClasses = {
  sm: 'px-4 py-2 text-xs font-semibold gap-1.5',
  md: 'px-5 py-2.5 text-sm font-semibold gap-2',
  lg: 'px-7 py-3.5 text-base font-semibold gap-2.5',
};

const variantClasses = {
  primary:
    'bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-dark)] shadow-sm hover:shadow-md border border-[var(--color-primary)]',
  lime:
    'bg-[var(--color-secondary)] text-[#0B132B] font-bold hover:bg-[var(--color-secondary-hover)] shadow-sm hover:shadow-md border border-transparent',
  secondary:
    'bg-[var(--color-primary-light)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white border border-[var(--color-primary)]/20',
  outline:
    'border border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white',
  outlineLight:
    'border border-white/30 text-white hover:bg-white hover:text-[var(--color-navy)]',
  ghost:
    'text-[var(--color-text-body)] hover:text-[var(--color-primary)] hover:bg-[var(--color-primary-light)]',
};

const baseClasses =
  'inline-flex items-center justify-center rounded-xl transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2 disabled:opacity-40 disabled:pointer-events-none select-none tracking-tight';

const motionProps = {
  whileHover: { scale: 1.02 },
  whileTap: { scale: 0.98 },
  transition: { type: 'spring', stiffness: 400, damping: 25 },
};

/**
 * NEXZIVO Button Component — with brand Cobalt (#2764F5) primary and harmonic secondary.
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
