import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

const sizeClasses = {
  sm: 'px-4 py-2 text-xs font-semibold gap-1.5',
  md: 'px-5 py-2.5 text-sm font-semibold gap-2',
  lg: 'px-6 py-3.5 text-base font-semibold gap-2.5',
};

const variantClasses = {
  primary:
    'bg-[#2764F5] text-white hover:bg-[#1E52D0] shadow-sm hover:shadow active:bg-[#1844B5]',
  secondary:
    'bg-white text-[#141B2A] border border-[#E3E8F0] hover:bg-[#F7F9FC] hover:border-[#CBD5E1] shadow-sm',
  outline:
    'border border-[#2764F5] text-[#2764F5] hover:bg-[#2764F5]/5 active:bg-[#2764F5]/10',
  outlineDark:
    'border border-white/30 text-white hover:bg-white/10 active:bg-white/20',
  ghost:
    'text-[#687386] hover:text-[#141B2A] hover:bg-black/5',
  cyan:
    'bg-[#35C5E8] text-[#101B2D] hover:bg-[#24B2D4] font-bold shadow-sm',
};

const baseClasses =
  'inline-flex items-center justify-center rounded-xl transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2764F5] focus-visible:ring-offset-2 disabled:opacity-40 disabled:pointer-events-none select-none tracking-tight font-medium cursor-pointer';

const motionProps = {
  whileHover: { y: -1 },
  whileTap: { y: 1 },
  transition: { duration: 0.15 },
};

/**
 * NEXZIVO Studio Button Component.
 * Supports primary brand blue, secondary white card, outline, and ghost.
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
