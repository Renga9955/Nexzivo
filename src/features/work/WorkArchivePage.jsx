import { useMemo, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Container } from '@/components/ui/Container';
import { SectionReveal } from '@/components/ui/SectionReveal';
import { Button } from '@/components/ui/Button';
import { workProjectsData } from '@/features/home/data/homeContent';
import { siteConfig } from '@/config/site';
import { useReducedMotionPreference } from '@/hooks/useReducedMotionPreference';

import heroShowcase from '@/assets/work.png';
import zenithImg from '@/assets/showcase/project-zenith.jpg';
import mobileImg from '@/assets/showcase/project-mobile.jpg';
import pulseImg from '@/assets/showcase/project-pulse.jpg';
import luminaImg from '@/assets/showcase/project-lumina.jpg';
import softwareImg from '@/assets/showcase/project-software.jpg';

const projectImages = {
  zenith: zenithImg,
  mobileProject: mobileImg,
  pulse: pulseImg,
  lumina: luminaImg,
  softwareProject: softwareImg,
};

const categoryLabels = {
  Websites: 'Websites',
  'Mobile Apps': 'Mobile Apps',
  'UI/UX': 'UI/UX Design',
  'Graphic Design': 'Graphic Design',
  'Custom Software': 'Custom Software',
};

const EASE_OUT_EXPO = [0.22, 1, 0.36, 1];

export function WorkArchivePage() {
  const [activeCategory, setActiveCategory] = useState('All Projects');
  const reducedMotion = useReducedMotionPreference();

  const categories = useMemo(
    () => [
      'All Projects',
      ...[
        'Websites',
        'Mobile Apps',
        'UI/UX Design',
        'Branding',
        'Graphic Design',
        'Custom Software',
      ].filter((category) =>
        workProjectsData.some((project) => categoryLabels[project.category] === category)
      ),
    ],
    []
  );
  const filteredProjects =
    activeCategory === 'All Projects'
      ? workProjectsData
      : workProjectsData.filter((project) => categoryLabels[project.category] === activeCategory);
  const featuredProjects = [workProjectsData[0], workProjectsData[4]].filter(Boolean);

  const scrollToProjects = () => {
    document.getElementById('selected-projects')?.scrollIntoView({
      behavior: reducedMotion ? 'auto' : 'smooth',
    });
  };

  return (
    <>
      <Helmet>
        <title>Selected Work &amp; Portfolio — {siteConfig.name} Studio</title>
        <meta
          name="description"
          content="Explore NEXZIVO's selected websites, mobile apps, UI/UX systems, graphic design, and custom software projects."
        />
      </Helmet>

      <section className="relative overflow-hidden border-b border-[#E3E8F0] bg-[#F7F9FC] pt-24 pb-14 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-20 xl:pb-24 text-[#141B2A]">
        {/* Background Layer: Soft studio atmosphere, subtle geometric ribbons & faint dot grids */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          {/* Soft atmospheric gradient wash behind the illustration */}
          <div className="absolute -top-32 right-[-5%] h-[620px] w-[620px] lg:h-[700px] lg:w-[700px] rounded-full bg-gradient-to-br from-[#2764F5]/7 via-[#35C5E8]/5 to-transparent blur-3xl" />
          <div className="absolute top-1/4 left-[-10%] h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-[#35C5E8]/6 via-[#2764F5]/4 to-transparent blur-3xl" />

          {/* Faint Studio Dotted Pattern behind the illustration (Right Side) */}
          <svg
            className="absolute top-20 right-10 lg:right-20 w-64 h-64 text-[#2764F5]/[0.05] hidden sm:block"
            viewBox="0 0 240 240"
            fill="currentColor"
          >
            <pattern id="work-hero-dots-right" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
              <circle cx="3" cy="3" r="1.5" />
            </pattern>
            <rect width="240" height="240" fill="url(#work-hero-dots-right)" />
          </svg>

          {/* Subtle Geometric Ribbon / Angle Polygon behind the studio setup */}
          <svg
            className="absolute -top-12 right-4 lg:right-16 w-[440px] h-[440px] lg:w-[560px] lg:h-[560px] text-[#2764F5]/[0.035] transform rotate-6"
            viewBox="0 0 500 500"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M 140 40 L 440 40 L 370 450 L 70 450 Z"
              stroke="currentColor"
              strokeWidth="28"
              strokeLinejoin="round"
            />
            <path
              d="M 210 110 L 470 110 L 410 390 L 150 390 Z"
              stroke="currentColor"
              strokeWidth="10"
              strokeDasharray="14 14"
            />
          </svg>

          {/* Subtle Isometric Grid Dot Cluster (Top Left Edge) */}
          <svg
            className="absolute top-12 left-4 w-52 h-52 text-[#2764F5]/[0.04] hidden sm:block"
            viewBox="0 0 200 200"
            fill="currentColor"
          >
            <pattern id="work-hero-dots-left" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
              <circle cx="3" cy="3" r="1.5" />
            </pattern>
            <rect width="200" height="200" fill="url(#work-hero-dots-left)" />
          </svg>

          {/* Oversized Subtle Curved Arc (Bottom Left Edge) */}
          <svg
            className="absolute -bottom-20 -left-20 w-[340px] h-[340px] text-[#35C5E8]/[0.045]"
            viewBox="0 0 400 400"
            fill="none"
          >
            <circle cx="100" cy="300" r="220" stroke="currentColor" strokeWidth="22" />
            <circle cx="100" cy="300" r="160" stroke="currentColor" strokeWidth="2" strokeDasharray="8 8" />
          </svg>
        </div>

        <Container className="relative z-10 max-w-[1440px] xl:max-w-[1540px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-4 xl:gap-8 items-center">
            <motion.div
              initial={reducedMotion ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: EASE_OUT_EXPO }}
              className="lg:col-span-5 xl:col-span-5 flex flex-col items-start gap-5 sm:gap-6 order-1 pr-0 lg:pr-2"
            >
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#2764F5]">
                <span className="h-0.5 w-5 rounded-full bg-[#2764F5]" aria-hidden="true" />
                <span>OUR CREATIVE WORK</span>
              </div>

              <h1 className="font-heading text-[2.25rem] sm:text-[2.85rem] md:text-[3.3rem] lg:text-[clamp(2.45rem,2.9vw,3.35rem)] xl:text-[clamp(2.85rem,3.3vw,3.75rem)] font-extrabold tracking-tight leading-[1.12] text-[#141B2A] max-w-xl">
                <span className="block">Digital experiences.</span>
                <span className="block">
                  Designed to <span className="text-[#2764F5]">make an impact.</span>
                </span>
              </h1>

              <p className="max-w-lg text-[15px] sm:text-[16.5px] lg:text-[17px] text-[#687386] leading-relaxed">
                Explore websites, mobile applications, user interfaces, brand identities, and
                creative visuals designed to turn ideas into meaningful digital experiences.
              </p>

              <div className="flex flex-wrap items-center gap-3.5 sm:gap-4 pt-1">
                <Button
                  onClick={scrollToProjects}
                  variant="primary"
                  size="md"
                  iconRight={<ArrowRight size={17} />}
                  className="px-6 sm:px-7 py-3 sm:py-3.5 text-[15px] sm:text-[15.5px] shadow-sm hover:shadow"
                >
                  Explore Projects
                </Button>
                <Button
                  to="/contact"
                  variant="secondary"
                  size="md"
                  className="px-6 sm:px-7 py-3 sm:py-3.5 text-[15px] sm:text-[15.5px]"
                >
                  Start a Project
                </Button>
              </div>

              <div className="flex flex-wrap items-center gap-x-3.5 gap-y-2 pt-5 sm:pt-6 mt-1 border-t border-[#E3E8F0] w-full text-[12.5px] sm:text-[13px] font-semibold text-[#141B2A]">
                <span className="text-[11.5px] sm:text-xs font-bold uppercase tracking-wider text-[#2764F5]">
                  Studio Focus:
                </span>
                <span>Websites</span>
                <span className="text-[#CBD5E1]">·</span>
                <span>Mobile Apps</span>
                <span className="text-[#CBD5E1]">·</span>
                <span>UI/UX</span>
                <span className="text-[#CBD5E1]">·</span>
                <span>Branding</span>
                <span className="text-[#CBD5E1]">·</span>
                <span>Graphic Design</span>
              </div>
            </motion.div>

            {/* Right Column: Hero Visual Showcase (Matching Home Hero layout) */}
            <div className="lg:col-span-7 xl:col-span-7 w-full order-2 flex items-center justify-center lg:justify-end">
              <motion.div
                initial={reducedMotion ? false : { opacity: 0, scale: 0.94, y: 12 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.22, ease: EASE_OUT_EXPO }}
                className="relative w-full max-w-[560px] lg:max-w-[620px] xl:max-w-[680px] flex items-center justify-center lg:justify-end"
              >
                <img
                  src={heroShowcase}
                  alt="NEXZIVO Studio Showcase — Website design, mobile app interface, and creative studio workspace"
                  className="w-full h-auto max-h-[380px] sm:max-h-[440px] md:max-h-[480px] lg:max-h-[520px] xl:max-h-[560px] object-contain drop-shadow-[0_16px_36px_rgba(16,27,45,0.07)]"
                  loading="eager"
                  decoding="async"
                />
              </motion.div>
            </div>
          </div>
        </Container>
      </section>

      <section
        id="selected-projects"
        className="scroll-mt-24 border-b border-[#E3E8F0] bg-white py-16 sm:py-20 lg:py-24"
      >
        <Container>
          <SectionReveal>
            <div className="mb-8 max-w-3xl sm:mb-10">
              <div className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#2764F5]">
                <span className="h-0.5 w-5 rounded-full bg-[#2764F5]" aria-hidden="true" />
                <span>PORTFOLIO</span>
              </div>
              <h2 className="mb-3 font-heading text-3xl font-bold tracking-tight text-[#141B2A] sm:text-4xl">
                Selected Projects
              </h2>
              <p className="text-base leading-relaxed text-[#687386] sm:text-lg">
                A collection of digital products and creative work built with purpose.
              </p>
            </div>
          </SectionReveal>

          <div
            className="-mx-5 mb-8 overflow-x-auto px-5 pb-2 sm:mx-0 sm:mb-10 sm:overflow-visible sm:px-0 sm:pb-0"
            style={{ overflowX: 'auto', maxWidth: '100%' }}
            aria-label="Filter projects by category"
          >
            <div className="flex w-max min-w-full items-center gap-2 sm:w-auto sm:min-w-0 sm:flex-wrap">
              {categories.map((category) => {
                const active = activeCategory === category;
                return (
                  <button
                    key={category}
                    type="button"
                    aria-pressed={active}
                    onClick={() => setActiveCategory(category)}
                    className={`shrink-0 rounded-full border px-4 py-2.5 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2764F5] focus-visible:ring-offset-2 ${
                      active
                        ? 'border-[#101B2D] bg-[#101B2D] text-white'
                        : 'border-[#E3E8F0] bg-white text-[#526581] hover:border-[#2764F5]/40 hover:bg-[#F7F9FC] hover:text-[#141B2A]'
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>

          <motion.div
            layout
            className="grid items-stretch gap-6"
            style={{
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 20rem), 1fr))',
            }}
          >
            <AnimatePresence mode="popLayout" initial={false}>
              {filteredProjects.map((project, index) => (
                <motion.article
                  key={project.slug}
                  layout
                  initial={reducedMotion ? false : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.12 }}
                  exit={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 8 }}
                  transition={{
                    duration: reducedMotion ? 0 : 0.4,
                    delay: reducedMotion ? 0 : Math.min(index * 0.06, 0.24),
                    ease: EASE_OUT_EXPO,
                  }}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#E3E8F0] bg-white shadow-[0_4px_18px_rgba(16,27,45,0.045)] transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-[#2764F5]/45 hover:shadow-[0_14px_32px_rgba(16,27,45,0.09)] motion-reduce:transition-none"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#EEF4FF]">
                    <img
                      src={projectImages[project.imageKey]}
                      alt={`${project.title} — ${project.serviceCategory} project preview`}
                      className="h-full w-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.035] motion-reduce:transition-none"
                      loading="lazy"
                      decoding="async"
                    />
                    <span className="absolute left-4 top-4 rounded-full border border-white/80 bg-white/95 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-[#141B2A] shadow-sm backdrop-blur-sm">
                      {categoryLabels[project.category] || project.category}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    <p className="mb-2 text-sm font-semibold leading-relaxed text-[#2764F5]">
                      {project.tagline}
                    </p>
                    <h3 className="mb-2 font-heading text-xl font-bold leading-snug tracking-tight text-[#141B2A] transition-colors group-hover:text-[#2764F5]">
                      {project.title}
                    </h3>
                    <p className="mb-5 line-clamp-3 text-sm leading-relaxed text-[#687386]">
                      {project.description}
                    </p>

                    <div className="mb-5 flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((technology) => (
                        <span
                          key={technology}
                          className="rounded-md border border-[#E3E8F0] bg-[#F7F9FC] px-2.5 py-1 text-[11px] font-medium text-[#526581]"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>

                    <div className="mt-auto border-t border-[#E3E8F0] pt-4">
                      <Link
                        to={`/work/${project.slug}`}
                        className="inline-flex items-center gap-2 rounded-sm text-sm font-bold text-[#2764F5] transition-colors hover:text-[#1E52D0] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2764F5]"
                      >
                        View Project
                        <ArrowRight
                          size={16}
                          className="transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none"
                        />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredProjects.length === 0 && (
            <p className="rounded-2xl border border-[#E3E8F0] bg-[#F7F9FC] p-8 text-center text-[#687386]">
              No projects are currently listed in this category.
            </p>
          )}
        </Container>
      </section>

      <section className="relative overflow-hidden bg-[#F7F9FC] py-16 sm:py-20 lg:py-24">
        <div
          className="pointer-events-none absolute -right-24 top-0 h-80 w-80 rounded-full bg-[#2764F5]/[0.045] blur-3xl"
          aria-hidden="true"
        />
        <Container className="relative z-10">
          <SectionReveal>
            <div className="mb-10 max-w-3xl">
              <div className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#2764F5]">
                <span className="h-0.5 w-5 rounded-full bg-[#2764F5]" aria-hidden="true" />
                <span>IN FOCUS</span>
              </div>
              <h2 className="mb-3 font-heading text-3xl font-bold tracking-tight text-[#141B2A] sm:text-4xl">
                More than just good design.
              </h2>
              <p className="text-base leading-relaxed text-[#687386] sm:text-lg">
                We combine thoughtful design and reliable development to create digital experiences
                that work beautifully and solve real problems.
              </p>
            </div>
          </SectionReveal>

          <div className="grid gap-6 lg:grid-cols-2">
            {featuredProjects.map((project) => (
              <SectionReveal key={project.slug}>
                <article className="group grid h-full overflow-hidden rounded-2xl border border-[#E3E8F0] bg-white shadow-[0_6px_22px_rgba(16,27,45,0.05)] sm:grid-cols-2">
                  <div className="relative min-h-56 overflow-hidden bg-[#EEF4FF] sm:min-h-72">
                    <img
                      src={projectImages[project.imageKey]}
                      alt={`${project.title} project preview`}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:transition-none"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="flex flex-col items-start p-6 sm:p-7">
                    <span className="mb-3 rounded-full bg-[#EEF4FF] px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#2764F5]">
                      {categoryLabels[project.category] || project.category}
                    </span>
                    <h3 className="mb-2 font-heading text-xl font-bold leading-snug text-[#141B2A] sm:text-2xl">
                      {project.title}
                    </h3>
                    <p className="mb-3 text-sm font-semibold leading-relaxed text-[#2764F5]">
                      {project.tagline}
                    </p>
                    <p className="mb-6 text-sm leading-relaxed text-[#687386]">
                      {project.description}
                    </p>
                    <Link
                      to={`/work/${project.slug}`}
                      className="mt-auto inline-flex items-center gap-2 rounded-sm text-sm font-bold text-[#2764F5] transition-colors hover:text-[#1E52D0] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2764F5]"
                    >
                      View Case Study
                      <ArrowUpRight
                        size={16}
                        className="transition-transform group-hover:translate-x-0.5 motion-reduce:transition-none"
                      />
                    </Link>
                  </div>
                </article>
              </SectionReveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-[#DCE4F0] bg-white py-16 sm:py-20">
        <Container>
          <div className="relative overflow-hidden rounded-3xl border border-[#DCE4F0] bg-gradient-to-br from-[#EEF4FF] via-white to-[#F7F9FC] p-7 shadow-[0_10px_34px_rgba(39,100,245,0.07)] sm:p-10 lg:p-14">
            <div
              className="pointer-events-none absolute -right-16 -top-24 h-72 w-72 rounded-full border-[28px] border-[#2764F5]/[0.045]"
              aria-hidden="true"
            />
            <div className="relative z-10 flex flex-col gap-7 md:flex-row md:items-center md:justify-between">
              <div className="max-w-2xl">
                <div className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#2764F5]">
                  <span className="h-0.5 w-5 rounded-full bg-[#2764F5]" aria-hidden="true" />
                  <span>YOUR NEXT PROJECT</span>
                </div>
                <h2 className="mb-3 font-heading text-3xl font-bold tracking-tight text-[#141B2A] sm:text-4xl">
                  Have an idea worth building?
                </h2>
                <p className="text-base leading-relaxed text-[#687386] sm:text-lg">
                  Let&apos;s turn your next idea into a thoughtful, impactful digital experience.
                </p>
              </div>
              <Button
                to="/contact"
                variant="primary"
                size="lg"
                iconRight={<ArrowRight size={17} />}
              >
                Start a Project
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
