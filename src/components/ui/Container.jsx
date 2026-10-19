/**
 * NEXZIVO layout Container.
 * Provides consistent max-width and horizontal padding across all pages.
 * Matches the --container-* CSS custom properties from globals.css.
 */
export function Container({ children, className = '', as: Tag = 'div' }) {
  return (
    <Tag className={`mx-auto w-full max-w-[var(--container-max-width)] px-[var(--container-padding-x)] ${className}`}>
      {children}
    </Tag>
  );
}
