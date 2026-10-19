import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Construction } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { siteConfig } from '@/config/site';

/**
 * Intentional placeholder for routes not yet implemented.
 * Provides clear user feedback and a path back to the home page.
 */
export function PlaceholderPage({ title }) {
  return (
    <>
      <Helmet>
        <title>
          {title} — {siteConfig.name}
        </title>
        <meta name="description" content={`The ${title} page is coming soon to ${siteConfig.name}.`} />
      </Helmet>

      <section className="flex min-h-[calc(100vh-5rem)] items-center justify-center py-24">
        <Container>
          <div className="mx-auto flex max-w-lg flex-col items-center gap-6 text-center">
            <span className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--color-deep-green)]/8 text-[var(--color-deep-green)]">
              <Construction size={32} aria-hidden="true" />
            </span>
            <div className="flex flex-col gap-3">
              <span className="text-sm font-semibold uppercase tracking-widest text-[var(--color-green)]">
                Coming soon
              </span>
              <h1 className="text-4xl font-bold tracking-tight text-[var(--color-charcoal)]">
                {title}
              </h1>
              <p className="text-base leading-relaxed text-[var(--color-muted)]">
                This section is under development. It will be implemented in a future phase.
              </p>
            </div>
            <Button to="/" variant="outline" iconLeft={<ArrowLeft size={16} aria-hidden="true" />}>
              Back to Home
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
