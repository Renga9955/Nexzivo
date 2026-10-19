import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

const sizeClasses = {
  sm: 'px-4 py-2 text-sm gap-1.5',
  md: 'px-6 py-3 text-base gap-2',
  lg: 'px-8 py-4 text-lg gap-2.5',
};

const variantClasses = {
  primary:
    'bg-[var(--color-lime)] text-[var(--color-deep-green)] hover:bg-[var(--color-lime)]/90 shadow-[0_0_0_0_var(--color-lime)] hover:shadow-[0_4px_20px_-4px_rgba(198,243,107,0.45)] focus-visible:ring-[var(--color-lime)]',
  secondary:
    'bg-[var(--color-deep-green)] text-[var(--color-off-white)] hover:bg-[var(--color-green)] focus-visible:ring-[var(--color-green)]',
  outline:
    'border border-[var(--color-border)] text-[var(--color-deep-green)] hover:border-[var(--color-deep-green)] hover:bg-[var(--color-deep-green)]/5 focus-visible:ring-[var(--color-deep-green)]',
  ghost:
    'text-[var(--color-deep-green)] hover:bg-[var(--color-deep-green)]/8 focus-visible:ring-[var(--color-deep-green)]',
};

const baseClasses =
  'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none select-none';

const motionProps = {
  whileHover: { scale: 1.025 },
  whileTap: { scale: 0.97 },
  transition: { type: 'spring', stiffness: 400, damping: 20 },
};

/**
 * NEXZIVO design system Button.
 * Renders as <button>, React Router <Link>, or <a> depending on props.
 * Includes subtle spring micro-animation for premium interaction feel.
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
