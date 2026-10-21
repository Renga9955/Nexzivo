import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionReveal } from '@/components/ui/SectionReveal';
import { useReducedMotionPreference } from '@/hooks/useReducedMotionPreference';
import { servicesContent } from '../data/homeContent';

/**
 * ServicesSection — What We Do
 * Matches the reference design with:
 * - Centered "What We Do" heading + subheadline
 * - 3 horizontal cards visible on desktop, auto-sliding every 2 seconds
 * - Bottom teal underline indicator on card titles
 * - Teal "Learn More" buttons
 * - Pagination indicator dots at the bottom
 */
export function ServicesSection() {
  const [startIndex, setStartIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const reducedMotion = useReducedMotionPreference();

  const totalServices = servicesContent.items.length;
  // 3 items shown per desktop view
  const visibleCount = 3;

  // 2-second automatic sliding loop
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setStartIndex((prev) => (prev + 1) % totalServices);
    }, 2000); // 2 seconds auto-scroll

    return () => clearInterval(timer);
  }, [isPaused, totalServices]);

  const handlePrev = () => {
    setStartIndex((prev) => (prev - 1 + totalServices) % totalServices);
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev + 1) % totalServices);
  };

  // Get current circular 3 items
  const currentItems = Array.from({ length: visibleCount }).map((_, i) => {
    return servicesContent.items[(startIndex + i) % totalServices];
  });

  return (
    <section
      id="services"
      className="py-14 sm:py-20 bg-[var(--color-off-white)] relative border-t border-[var(--color-muted-border)] overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="What We Do - Services"
    >
      <Container>
        <SectionReveal>
          {/* Centred Section Heading identical to user reference */}
          <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--color-deep-green)]">
              What <span className="text-[var(--color-green)]">We Do</span>
            </h2>

            <p className="mt-3 max-w-2xl text-base sm:text-lg text-[var(--color-text-muted)]">
              Delivering smart tech solutions to modern challenges.
            </p>
          </div>
        </SectionReveal>

        {/* Carousel Viewport Container */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={startIndex}
              initial={reducedMotion ? { opacity: 0 } : { opacity: 0, x: 24 }}
              animate={reducedMotion ? { opacity: 1 } : { opacity: 1, x: 0 }}
              exit={reducedMotion ? { opacity: 0 } : { opacity: 0, x: -24 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {currentItems.map((service, index) => {
                const Icon = service.icon;
                const targetUrl = `/services/${service.slug}`;

                return (
                  <div
                    key={`${service.slug}-${index}`}
                    className="flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-white border border-[var(--color-muted-border)] hover:border-[var(--color-green)]/50 hover:shadow-lg transition-all duration-300"
                  >
                    <div>
                      {/* Top Header Row with Icon and Title */}
                      <div className="flex items-start gap-4 mb-4">
                        <span className="shrink-0 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-green-light)] text-[var(--color-green)] border border-[var(--color-green)]/20 shadow-xs">
                          <Icon size={24} aria-hidden="true" />
                        </span>

                        <div className="flex-1">
                          <h3 className="text-lg sm:text-xl font-bold text-[var(--color-deep-green)] leading-snug">
                            {service.title}
                          </h3>
                          {/* Accent underline bar as in reference image */}
                          <div className="mt-2.5 h-0.5 w-full bg-[var(--color-green)]/30 rounded-full" />
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mt-4 mb-6">
                        {service.shortDescription}
                      </p>
                    </div>

                    {/* Learn More Button matching reference styling */}
                    <div className="pt-2">
                      <Link
                        to={targetUrl}
                        className="inline-flex items-center justify-center px-5 py-2 rounded-lg bg-[var(--color-green)] hover:bg-[var(--color-deep-green)] text-white text-xs sm:text-sm font-semibold transition-all duration-200 shadow-xs hover:shadow-md"
                      >
                        <span>Learn More</span>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </AnimatePresence>

          {/* Left / Right Carousel Navigation Arrows (desktop) */}
          <button
            type="button"
            onClick={handlePrev}
            className="absolute -left-3 lg:-left-5 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white border border-[var(--color-muted-border)] shadow-md text-[var(--color-deep-green)] hover:bg-[var(--color-green-light)] flex items-center justify-center transition-all z-10"
            aria-label="Previous service"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            type="button"
            onClick={handleNext}
            className="absolute -right-3 lg:-right-5 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white border border-[var(--color-muted-border)] shadow-md text-[var(--color-deep-green)] hover:bg-[var(--color-green-light)] flex items-center justify-center transition-all z-10"
            aria-label="Next service"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* 2-Second Looping Indicator Dots at Bottom */}
        <div className="flex items-center justify-center gap-2 mt-8 sm:mt-10" aria-label="Carousel pagination">
          {servicesContent.items.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setStartIndex(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                startIndex === i
                  ? 'w-6 bg-[var(--color-green)]'
                  : 'w-2 bg-[var(--color-muted-border)] hover:bg-[var(--color-green)]/40'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
