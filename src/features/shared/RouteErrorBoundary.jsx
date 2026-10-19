import { isRouteErrorResponse, useRouteError } from 'react-router-dom';
import { AlertTriangle, ArrowLeft, RefreshCw } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

/**
 * Global router error boundary providing a polished fallback UX
 * when runtime or route rendering errors happen.
 */
export function RouteErrorBoundary() {
  const error = useRouteError();

  let title = 'Something went wrong';
  let message = 'An unexpected error occurred while loading this page.';

  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      title = 'Page Not Found';
      message = "We couldn't find the page you are looking for.";
    } else {
      title = `${error.status} ${error.statusText || 'Error'}`;
      message = error.data?.message || 'A routing error occurred.';
    }
  } else if (error instanceof Error) {
    message = error.message;
  }

  return (
    <section className="flex min-h-[calc(100vh-5rem)] items-center justify-center py-24">
      <Container>
        <div className="mx-auto flex max-w-lg flex-col items-center gap-6 text-center">
          <span className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-red-100 text-red-600">
            <AlertTriangle size={32} aria-hidden="true" />
          </span>
          <div className="flex flex-col gap-3">
            <span className="text-sm font-semibold uppercase tracking-widest text-red-600">
              Application Error
            </span>
            <h1 className="text-3xl font-bold tracking-tight text-[var(--color-charcoal)] sm:text-4xl">
              {title}
            </h1>
            <p className="text-base leading-relaxed text-[var(--color-muted)]">
              {message}
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button
              variant="outline"
              iconLeft={<RefreshCw size={16} aria-hidden="true" />}
              onClick={() => window.location.reload()}
            >
              Try Again
            </Button>
            <Button
              to="/"
              variant="primary"
              iconLeft={<ArrowLeft size={16} aria-hidden="true" />}
            >
              Back to Home
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
