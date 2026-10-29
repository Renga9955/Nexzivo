import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, useInView, useScroll, useTransform } from 'motion/react';
import { Link } from 'react-router-dom';
import {
  Code2,
  Layout,
  Palette,
  GraduationCap,
  Smartphone,
  Terminal,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { whatWeDoContent } from '../data/homeContent';
import { useReducedMotionPreference } from '@/hooks/useReducedMotionPreference';
import serviceBg from '@/assets/servicebg.jpg';

const EASE_OUT_EXPO = [0.22, 1, 0.36, 1];
const AUTOPLAY_INTERVAL = 4000; // Exact 4 seconds rotation

const serviceIcons = {
  code: Code2,
  layout: Layout,
  palette: Palette,
  graduation: GraduationCap,
  smartphone: Smartphone,
  terminal: Terminal,
};

/**
 * WhatWeDoSection
 * - Continuous automatic carousel that slides every 4 seconds.
 * - Robust CSS calc-based translateX tracking so it never stalls.
 * - Cycles through all 6 services (0 -> 1 -> 2 -> 3 -> 0...).
 * - Visible navigation arrows for manual override.
 * - Staggered scroll-triggered entrance animation.
 */
export function WhatWeDoSection() {
  const reducedMotion = useReducedMotionPreference();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1, margin: '0px 0px 80px 0px' });

  // High-performance hardware-accelerated scroll parallax
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const services = whatWeDoContent.services;
  const totalServices = services.length; // 6

  // Responsive cards per view (Desktop: 3, Tablet: 2, Mobile: 1)
  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth;
      if (width < 768) {
        setCardsPerView(1);
      } else if (width < 1024) {
        setCardsPerView(2);
      } else {
        setCardsPerView(3);
      }
    }

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, totalServices - cardsPerView);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
  }, [maxIndex]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  }, [maxIndex]);

  // Guaranteed 4-second automatic carousel interval
  useEffect(() => {
    if (reducedMotion) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
    }, AUTOPLAY_INTERVAL);

    return () => clearInterval(timer);
  }, [maxIndex, reducedMotion]);

  // Touch Swipe handlers
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diffX = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 35;

    if (diffX > minSwipeDistance) {
      handleNext();
    } else if (diffX < -minSwipeDistance) {
      handlePrev();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      handlePrev();
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      handleNext();
    }
  };

  // Pixel gap definitions
  const gapPx = cardsPerView === 3 ? 24 : cardsPerView === 2 ? 20 : 16;

  // Precise translation string taking item width and gap into account
  const transformStyle = `translateX(calc(-${currentIndex} * ((100% - ${(cardsPerView - 1) * gapPx}px) / ${cardsPerView} + ${gapPx}px)))`;

  // Entrance animation variants
  const headerVariants = {
    hidden: { opacity: 0, y: 22 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: EASE_OUT_EXPO },
    },
  };

  const cardEntranceVariants = {
    hidden: {
      opacity: 0,
      y: 28,
      scale: 0.97,
    },
    visible: (idx) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: 0.12 + (idx % cardsPerView) * 0.1,
        ease: EASE_OUT_EXPO,
      },
    }),
  };

  return (
    <section
      ref={sectionRef}
      id="what-we-do"
      aria-label="What We Do - Our Services"
      className="section relative bg-[#F7F9FC] border-b border-[#E3E8F0] overflow-hidden"
    >
      {/* High-Performance GPU Parallax Background Image with Mild Blur */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <motion.div
          style={{ y: reducedMotion ? 0 : bgY }}
          className="absolute -top-[10%] -bottom-[10%] -left-[2%] -right-[2%] will-change-transform transform-gpu"
        >
          <img
            src={serviceBg}
            alt=""
            loading="eager"
            decoding="async"
            className="w-full h-full object-cover object-center filter blur-[2.5px] scale-[1.03]"
          />
        </motion.div>

        {/* Soft studio light overlay for pristine text contrast without GPU penalty */}
        <div className="absolute inset-0 bg-[#F8FAFC]/75" />

        {/* Ambient subtle studio glow */}
        <div className="absolute -top-36 -right-36 h-[480px] w-[480px] rounded-full bg-gradient-to-bl from-[#2764F5]/6 via-[#35C5E8]/4 to-transparent blur-3xl" />
        <div className="absolute -bottom-36 -left-36 h-[480px] w-[480px] rounded-full bg-gradient-to-tr from-[#35C5E8]/6 via-[#2764F5]/4 to-transparent blur-3xl" />
      </div>

      <Container className="relative z-10">
        {/* Section Heading & Arrow Controls Row */}
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={reducedMotion ? undefined : headerVariants}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12 sm:mb-14"
        >
          <div>
            {/* Project Brand Eyebrow */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#2764F5] mb-3.5">
              <span className="h-0.5 w-5 rounded-full bg-[#2764F5]" aria-hidden="true" />
              <span>{whatWeDoContent.eyebrow}</span>
            </div>

            {/* Main Heading with Brand Accent */}
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#141B2A] tracking-tight leading-[1.15] mb-2.5">
              What <span className="text-[#2764F5]">We Do</span>
            </h2>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#687386] max-w-xl font-normal leading-relaxed">
              {whatWeDoContent.subtitle}
            </p>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-2.5 self-start sm:self-end">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous service cards"
              className="group flex h-11 w-11 items-center justify-center rounded-xl bg-white border border-[#E3E8F0] text-[#141B2A] shadow-xs hover:border-[#2764F5]/60 hover:bg-[#EEF4FF] hover:text-[#2764F5] transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2764F5]"
            >
              <ChevronLeft size={20} className="transition-transform group-hover:-translate-x-0.5" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next service cards"
              className="group flex h-11 w-11 items-center justify-center rounded-xl bg-white border border-[#E3E8F0] text-[#141B2A] shadow-xs hover:border-[#2764F5]/60 hover:bg-[#EEF4FF] hover:text-[#2764F5] transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2764F5]"
            >
              <ChevronRight size={20} className="transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>
        </motion.div>

        {/* Sliding Carousel Track Viewport */}
        <div
          role="region"
          aria-label="Services Carousel Track"
          tabIndex={0}
          onKeyDown={handleKeyDown}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          className="relative overflow-hidden outline-none focus-visible:ring-2 focus-visible:ring-[#2764F5] rounded-2xl py-2 -my-2"
        >
          {/* Animated Moving Carousel Track with Exact 4-Second Automatic Sliding */}
          <div
            style={{
              transform: reducedMotion ? 'none' : transformStyle,
              gap: `${gapPx}px`,
              transition: 'transform 600ms cubic-bezier(0.22, 1, 0.36, 1)',
            }}
            className="flex items-stretch will-change-transform"
          >
            {services.map((service, idx) => {
              const Icon = serviceIcons[service.iconKey] || Code2;

              return (
                <motion.div
                  key={service.id}
                  custom={idx}
                  initial="hidden"
                  animate={isInView ? 'visible' : 'hidden'}
                  variants={reducedMotion ? undefined : cardEntranceVariants}
                  style={{
                    flex: `0 0 calc((100% - ${(cardsPerView - 1) * gapPx}px) / ${cardsPerView})`,
                    minWidth: `calc((100% - ${(cardsPerView - 1) * gapPx}px) / ${cardsPerView})`,
                  }}
                  className="flex flex-col shrink-0"
                >
                  <article className="group relative flex flex-col justify-between h-full p-7 sm:p-8 rounded-2xl bg-white border border-[#E3E8F0] hover:border-[#2764F5]/50 shadow-[0_4px_20px_-4px_rgba(16,27,45,0.06)] hover:shadow-[0_16px_36px_-6px_rgba(39,100,245,0.15)] hover:-translate-y-1 transition-all duration-200 overflow-hidden">
                    {/* Top Brand Accent Strip on Hover */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#2764F5] to-[#35C5E8] opacity-0 group-hover:opacity-100 transition-opacity duration-200" />

                    {/* Card Content Area */}
                    <div>
                      {/* Header: Brand-tinted Icon & Category Tag */}
                      <div className="flex items-center justify-between gap-4 mb-6">
                        <div className="flex h-13 w-13 items-center justify-center rounded-xl bg-[#EEF4FF] text-[#2764F5] border border-[#DCE4F0] group-hover:bg-[#2764F5] group-hover:text-white transition-colors duration-200 shadow-2xs">
                          <Icon
                            size={24}
                            className="transition-transform duration-200 group-hover:scale-110"
                          />
                        </div>

                        <span className="text-[11px] font-mono font-semibold text-[#2764F5] uppercase tracking-wider bg-[#EEF4FF] px-2.5 py-1 rounded-md border border-[#DCE4F0]">
                          {service.tag}
                        </span>
                      </div>

                      {/* Service Title */}
                      <h3 className="font-heading text-xl sm:text-[22px] font-bold text-[#141B2A] tracking-tight mb-3 group-hover:text-[#2764F5] transition-colors leading-snug">
                        {service.title}
                      </h3>

                      {/* Service Description */}
                      <p className="text-[14.5px] leading-relaxed text-[#687386]">
                        {service.description}
                      </p>
                    </div>

                    {/* Card Footer: "Learn More" Action with Restrained Directional Motion */}
                    <div className="mt-8 pt-5 border-t border-[#EEF2F6]">
                      <Link
                        to={service.link}
                        className="inline-flex items-center gap-2 text-sm font-bold text-[#2764F5] hover:text-[#1E52D0] transition-colors group/link focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2764F5] rounded-md"
                        aria-label={`Learn more about ${service.title}`}
                      >
                        <span>Learn More</span>
                        <ArrowRight
                          size={16}
                          className="transition-transform duration-200 group-hover/link:translate-x-1"
                        />
                      </Link>
                    </div>
                  </article>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
