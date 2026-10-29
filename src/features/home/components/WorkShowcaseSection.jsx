import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { SectionReveal } from '@/components/ui/SectionReveal';
import {
  workPortfolioCategories,
  workProjectsData,
  workShowcaseContent,
} from '../data/homeContent';
import { useReducedMotionPreference } from '@/hooks/useReducedMotionPreference';

// Project preview imagery
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

/**
 * WorkShowcaseSection — Visually rich portfolio section titled:
 * "Selected work. Thoughtfully created."
 *
 * Organized into categories:
 * - All Work
 * - Websites
 * - Mobile Apps
 * - UI/UX
 * - Graphic Design
 * - Custom Software
 */
export function WorkShowcaseSection() {
  const [activeCategory, setActiveCategory] = useState('All Work');
  const reducedMotion = useReducedMotionPreference();

  const filteredProjects =
    activeCategory === 'All Work'
      ? workProjectsData
      : workProjectsData.filter((p) => p.category === activeCategory);

  return (
    <section id="work" className="section bg-[#F7F9FC] border-b border-[#E3E8F0]">
      <Container>
        {/* Section Header */}
        <SectionReveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
            <SectionHeading
              eyebrow={workShowcaseContent.eyebrow}
              heading={workShowcaseContent.heading}
              description={workShowcaseContent.description}
              align="left"
              theme="light"
            />

            <Link
              to="/work"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#2764F5] hover:text-[#1E52D0] transition-colors self-start md:self-end pb-1 group"
            >
              <span>View full archive</span>
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </SectionReveal>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-12">
          {workPortfolioCategories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[#101B2D] text-white shadow-sm'
                    : 'bg-white text-[#687386] border border-[#E3E8F0] hover:text-[#141B2A] hover:border-[#CBD5E1]'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Project Grid / Balanced Compositions */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => {
              const projectImg = projectImages[project.imageKey];
              const projectUrl = `/work/${project.slug}`;

              // Responsive spans: dynamic layout matching item count
              let colSpan = 'md:col-span-6';
              if (filteredProjects.length === 1) {
                colSpan = 'md:col-span-12';
              } else if (filteredProjects.length === 5) {
                if (idx === 0) colSpan = 'md:col-span-7';
                else if (idx === 1) colSpan = 'md:col-span-5';
                else if (idx === 2) colSpan = 'md:col-span-4';
                else if (idx === 3) colSpan = 'md:col-span-4';
                else if (idx === 4) colSpan = 'md:col-span-4';
              }

              return (
                <motion.article
                  key={project.slug}
                  layout
                  initial={reducedMotion ? false : { opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.35 }}
                  className={`${colSpan} group flex flex-col rounded-2xl bg-white border border-[#E3E8F0] hover:border-[#2764F5]/50 transition-all duration-300 shadow-xs hover:shadow-xl overflow-hidden`}
                >
                  <Link
                    to={projectUrl}
                    className="flex flex-col h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2764F5] rounded-2xl"
                    aria-label={`View project details for ${project.title}`}
                  >
                    {/* Visual Preview */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-[#101B2D]">
                      <img
                        src={projectImg}
                        alt={`${project.title} - ${project.serviceCategory}`}
                        className="h-full w-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-103"
                        loading="lazy"
                      />

                      {/* Tag Overlay */}
                      <div className="absolute top-4 left-4 flex items-center gap-2">
                        <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-xs text-[11px] font-bold uppercase tracking-wider text-[#101B2D] shadow-xs">
                          {project.serviceCategory}
                        </span>
                        <span className="px-2.5 py-1 rounded-full bg-[#101B2D]/80 backdrop-blur-xs text-[11px] font-mono text-white">
                          {project.timeline}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex flex-col flex-1 justify-between p-6 sm:p-7 gap-4">
                      <div>
                        <div className="flex items-center justify-between gap-4 mb-2">
                          <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#141B2A] group-hover:text-[#2764F5] transition-colors leading-snug">
                            {project.title}
                          </h3>
                          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#2764F5]/10 group-hover:bg-[#2764F5] group-hover:text-white transition-all text-[#2764F5]">
                            <ArrowUpRight size={16} />
                          </div>
                        </div>

                        <p className="text-sm font-medium text-[#2764F5] mb-2">
                          {project.tagline}
                        </p>

                        <p className="text-sm text-[#687386] leading-relaxed line-clamp-2">
                          {project.description}
                        </p>
                      </div>

                      {/* Tech Pills */}
                      <div className="flex flex-wrap gap-2 pt-4 border-t border-[#E3E8F0]">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-md bg-[#F7F9FC] border border-[#E3E8F0] text-[11px] font-mono font-medium text-[#687386]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Link>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </div>
      </Container>
    </section>
  );
}
