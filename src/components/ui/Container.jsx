
/**
 * NEXZIVO layout Container.
 * Shared width and spacing across all pages.
 */
export function Container({ children, className = "", as: Tag = "div" }) {
  return (
    <Tag
      className={`mx-auto w-full max-w-[1440px] xl:max-w-[1540px] px-5 sm:px-8 lg:px-10 xl:px-12 ${className}`}
    >
      {children}
    </Tag>
  );
}
