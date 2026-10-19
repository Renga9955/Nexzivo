import { HelmetProvider } from 'react-helmet-async';

/**
 * AppProviders — wraps the entire application with required context providers.
 * Currently includes:
 *   - HelmetProvider (react-helmet-async) for managing document head (title, meta)
 *
 * Future providers (auth, theme, i18n, etc.) should be added here.
 */
export function AppProviders({ children }) {
  return <HelmetProvider>{children}</HelmetProvider>;
}
