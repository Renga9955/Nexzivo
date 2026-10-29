import { useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Lightbulb,
  Building2,
  Calendar,
  Layers,
  Award,
  ArrowUpRight,
  CheckCircle2,
  Smartphone,
  Cpu,
  Palette,
  FileCode2,
  Terminal,
  Target,
  Zap,
} from 'lucide-react';
import { motion } from 'motion/react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { useReducedMotionPreference } from '@/hooks/useReducedMotionPreference';
import { workProjectsData } from '@/features/home/data/homeContent';
import { siteConfig } from '@/config/site';

import zenithImg from '@/assets/showcase/project-zenith.jpg';
import mobileImg from '@/assets/showcase/project-mobile.jpg';
import pulseImg from '@/assets/showcase/project-pulse.jpg';
import luminaImg from '@/assets/showcase/project-lumina.jpg';
import softwareImg from '@/assets/showcase/project-software.jpg';
import ctaGraphic from '@/assets/cta-interface-illustration.png';

const projectImages = {
  zenith: zenithImg,
  mobileProject: mobileImg,
  pulse: pulseImg,
  lumina: luminaImg,
  softwareProject: softwareImg,
};

const EASE_OUT_EXPO = [0.22, 1, 0.36, 1];

function Reveal({ children, delay = 0, reducedMotion, className = '' }) {
  return (
    <motion.div
      initial={reducedMotion ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: reducedMotion ? 0 : 0.55,
        delay: reducedMotion ? 0 : delay,
        ease: EASE_OUT_EXPO,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Icon helper for technologies
function getTechIcon(name) {
  const lower = name.toLowerCase();
  if (lower.includes('react')) return Cpu;
  if (lower.includes('vite') || lower.includes('motion')) return Sparkles;
  if (lower.includes('tailwind') || lower.includes('css')) return Layers;
  if (lower.includes('native') || lower.includes('mobile')) return Smartphone;
  if (lower.includes('figma') || lower.includes('typography') || lower.includes('grid')) return Palette;
  if (lower.includes('node') || lower.includes('sql') || lower.includes('api')) return Terminal;
  return FileCode2;
}

export function ProjectDetailPage() {
  const { slug } = useParams();
  const reducedMotion = useReducedMotionPreference();
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const project = workProjectsData.find((item) => item.slug === slug);

  if (!project) {
    return <Navigate to="/work" replace />;
  }

  const currentIndex = workProjectsData.findIndex((item) => item.slug === slug);
  const nextProject = workProjectsData[(currentIndex + 1) % workProjectsData.length];

  const primaryImage = projectImages[project.imageKey];
  const nextProjectImage = projectImages[nextProject.imageKey];

  const projectGallery = project.gallery && project.gallery.length > 0
    ? project.gallery.map((k) => projectImages[k] || k)
    : [primaryImage].filter(Boolean);

  const hasMultipleImages = projectGallery.length > 1;

  const handlePrevImage = () => {
    setActiveImageIndex((prev) => (prev === 0 ? projectGallery.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setActiveImageIndex((prev) => (prev === projectGallery.length - 1 ? 0 : prev + 1));
  };

  // Derive genuine verified deliverables/capabilities for Section A and Section E
  const deliverables = project.services || ['Design & Architecture', 'Performance Optimization', 'Interface Engineering'];

  return (
    <div className="min-h-screen bg-[#F5F8FD] text-[#111827]">
      <Helmet>
        <title>
          {project.title} — Case Study | {siteConfig.name} Studio
        </title>
        <meta name="description" content={project.description} />
        <meta property="og:title" content={`${project.title} — ${siteConfig.name}`} />
        <meta property="og:description" content={project.description} />
      </Helmet>

      {/* ──────────────────────────────────────────────────────────
          1. Hero Section (A Strong Project Introduction)
          ────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden border-b border-[#DCE5F2] bg-gradient-to-b from-[#FFFFFF] via-[#F8FAFD] to-[#F5F8FD] pb-14 pt-28 sm:pb-16 sm:pt-32 lg:pb-20 lg:pt-36">
        {/* Subtle geometric circles & dotted background patterns */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute -right-36 -top-40 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-[#2864F5]/[0.07] via-[#19B9E8]/[0.04] to-transparent blur-3xl" />
          <div className="absolute -bottom-36 -left-32 h-[480px] w-[480px] rounded-full bg-gradient-to-tr from-[#2864F5]/[0.05] to-transparent blur-3xl" />

          {/* Oversized faint geometric circle rings */}
          <div className="absolute -top-20 right-10 h-[500px] w-[500px] rounded-full border border-[#2864F5]/[0.04]" />
          <div className="absolute -top-10 right-20 h-[380px] w-[380px] rounded-full border border-[#2864F5]/[0.035]" />

          {/* Sparse dotted pattern grid */}
          <svg
            className="absolute inset-0 h-full w-full text-[#2864F5]/[0.03]"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id="hero-detail-dots"
                width="34"
                height="34"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="2" cy="2" r="1.2" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hero-detail-dots)" />
          </svg>
        </div>

        <Container className="relative z-10 max-w-[1360px]">
          {/* Breadcrumb: ← WORK / PROJECT NAME */}
          <motion.nav
            aria-label="Breadcrumb"
            initial={reducedMotion ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reducedMotion ? 0 : 0.4, ease: EASE_OUT_EXPO }}
            className="mb-8 flex flex-wrap items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider"
          >
            <Link
              to="/work"
              className="inline-flex items-center gap-1.5 text-[#2864F5] transition-colors hover:text-[#1848BD]"
            >
              <ArrowLeft size={13} aria-hidden="true" />
              <span>WORK</span>
            </Link>
            <span className="text-[#94A3B8]" aria-hidden="true">/</span>
            <span className="text-[#64748B]">{project.title.toUpperCase()}</span>
          </motion.nav>

          <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-12">
            {/* Left Column: Project Overview */}
            <div className="lg:col-span-7">
              {/* Category Badge */}
              <motion.div
                initial={reducedMotion ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: reducedMotion ? 0 : 0.45,
                  delay: reducedMotion ? 0 : 0.05,
                  ease: EASE_OUT_EXPO,
                }}
                className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#DCE5F2] bg-white px-3.5 py-1 text-[11px] font-mono font-semibold uppercase tracking-wider text-[#526581] shadow-xs"
              >
                <span>{project.category}</span>
                <span className="text-[#94A3B8]" aria-hidden="true">·</span>
                <span>Selected Project</span>
              </motion.div>

              {/* Large Bold Project Title */}
              <motion.h1
                initial={reducedMotion ? false : { opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: reducedMotion ? 0 : 0.55,
                  delay: reducedMotion ? 0 : 0.1,
                  ease: EASE_OUT_EXPO,
                }}
                className="mb-3 font-heading text-3xl font-extrabold tracking-tight text-[#111827] sm:text-4xl lg:text-[46px] lg:leading-[1.14]"
              >
                {project.title}
              </motion.h1>

              {/* Blue-highlighted Tagline */}
              <motion.p
                initial={reducedMotion ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: reducedMotion ? 0 : 0.5,
                  delay: reducedMotion ? 0 : 0.16,
                  ease: EASE_OUT_EXPO,
                }}
                className="mb-5 max-w-2xl font-heading text-lg font-semibold leading-snug text-[#2864F5] sm:text-xl"
              >
                {project.tagline}
              </motion.p>

              {/* Concise Description */}
              <motion.p
                initial={reducedMotion ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: reducedMotion ? 0 : 0.5,
                  delay: reducedMotion ? 0 : 0.22,
                  ease: EASE_OUT_EXPO,
                }}
                className="max-w-2xl text-[15px] leading-relaxed text-[#64748B] sm:text-base"
              >
                {project.description}
              </motion.p>

              {/* Action Buttons: Explore Case Study & All Projects */}
              <motion.div
                initial={reducedMotion ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: reducedMotion ? 0 : 0.5,
                  delay: reducedMotion ? 0 : 0.28,
                  ease: EASE_OUT_EXPO,
                }}
                className="mt-8 flex flex-wrap items-center gap-3.5"
              >
                <Button
                  onClick={() =>
                    document.getElementById('project-showcase')?.scrollIntoView({
                      behavior: reducedMotion ? 'auto' : 'smooth',
                    })
                  }
                  variant="primary"
                  className="rounded-xl px-6 py-3 shadow-[0_8px_20px_-6px_rgba(40,100,245,0.4)] transition-all hover:shadow-[0_12px_24px_-6px_rgba(40,100,245,0.5)]"
                  iconRight={<ArrowDown size={15} aria-hidden="true" />}
                >
                  Explore Case Study
                </Button>
                <Button
                  to="/work"
                  variant="secondary"
                  className="rounded-xl border-[#DCE5F2] bg-white px-6 py-3 text-[#111827] shadow-xs hover:bg-[#F5F8FD]"
                >
                  All Projects
                </Button>
              </motion.div>
            </div>

            {/* Right Column: Premium Project Information Panel */}
            <motion.div
              initial={reducedMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: reducedMotion ? 0 : 0.55,
                delay: reducedMotion ? 0 : 0.18,
                ease: EASE_OUT_EXPO,
              }}
              className="lg:col-span-5"
            >
              <aside className="rounded-2xl border border-[#DCE5F2] bg-white p-6 shadow-[0_14px_40px_-24px_rgba(17,24,39,0.1)] sm:p-7">
                {/* Header row */}
                <div className="mb-5 flex items-center justify-between border-b border-[#EEF2F7] pb-4">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-[0.16em] text-[#64748B]">
                    Project Information
                  </span>
                  <span className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-[#2864F5]">
                    <Layers size={13} aria-hidden="true" />
                    <span>{project.category}</span>
                  </span>
                </div>

                {/* Clean Aligned Grid of Metadata */}
                <div className="grid grid-cols-2 gap-x-6 gap-y-5">
                  {/* Category */}
                  <div className="flex flex-col">
                    <div className="mb-1.5 flex items-center gap-1.5 text-[10px] font-mono font-semibold uppercase tracking-wider text-[#64748B]">
                      <Target size={13} className="text-[#2864F5]" aria-hidden="true" />
                      <span>Category</span>
                    </div>
                    <div className="text-sm font-bold text-[#111827]">
                      {project.category}
                    </div>
                  </div>

                  {/* Client */}
                  <div className="flex flex-col">
                    <div className="mb-1.5 flex items-center gap-1.5 text-[10px] font-mono font-semibold uppercase tracking-wider text-[#64748B]">
                      <Building2 size={13} className="text-[#2864F5]" aria-hidden="true" />
                      <span>Client</span>
                    </div>
                    <div className="text-sm font-bold text-[#111827]">
                      {project.client || '—'}
                    </div>
                  </div>

                  {/* Duration / Timeline */}
                  <div className="flex flex-col border-t border-[#EEF2F7] pt-4">
                    <div className="mb-1.5 flex items-center gap-1.5 text-[10px] font-mono font-semibold uppercase tracking-wider text-[#64748B]">
                      <Calendar size={13} className="text-[#2864F5]" aria-hidden="true" />
                      <span>Timeline</span>
                    </div>
                    <div className="text-sm font-bold text-[#111827]">
                      {project.timeline || '—'}
                    </div>
                  </div>

                  {/* Disciplines / Services */}
                  <div className="flex flex-col border-t border-[#EEF2F7] pt-4">
                    <div className="mb-1.5 flex items-center gap-1.5 text-[10px] font-mono font-semibold uppercase tracking-wider text-[#64748B]">
                      <Layers size={13} className="text-[#2864F5]" aria-hidden="true" />
                      <span>Disciplines</span>
                    </div>
                    <div className="text-xs font-medium leading-relaxed text-[#111827]">
                      {project.services ? project.services.join(', ') : '—'}
                    </div>
                  </div>
                </div>

                {/* Technologies used (when relevant) */}
                {project.technologies && project.technologies.length > 0 && (
                  <div className="mt-5 border-t border-[#EEF2F7] pt-4">
                    <div className="mb-2.5 flex items-center gap-1.5 text-[10px] font-mono font-semibold uppercase tracking-wider text-[#64748B]">
                      <Cpu size={13} className="text-[#2864F5]" aria-hidden="true" />
                      <span>Core Stack</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="rounded-md border border-[#DCE5F2] bg-[#F5F8FD] px-2.5 py-1 text-[11px] font-medium text-[#111827]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </aside>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* ──────────────────────────────────────────────────────────
          2. Large Project Visual — Make the Work the Star
          ────────────────────────────────────────────────────────── */}
      {primaryImage && (
        <section
          id="project-showcase"
          className="relative bg-white py-14 sm:py-16 lg:py-20 border-b border-[#DCE5F2]"
        >
          <Container className="max-w-[1360px]">
            {/* Header + gallery controls if multiple images */}
            <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <Reveal reducedMotion={reducedMotion}>
                <div className="mb-2 flex items-center gap-2 text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-[#2864F5]">
                  <span className="h-0.5 w-4 rounded-full bg-[#2864F5]" aria-hidden="true" />
                  <span>Project Showcase</span>
                </div>
                <h2 className="font-heading text-2xl font-bold tracking-tight text-[#111827] sm:text-3xl lg:text-4xl">
                  A closer look at the project
                </h2>
                <p className="mt-1.5 text-sm text-[#64748B] sm:text-base">
                  Explore the design, interface, and details behind the experience.
                </p>
              </Reveal>

              {hasMultipleImages && (
                <div className="flex items-center gap-2 self-start sm:self-end">
                  <button
                    type="button"
                    onClick={handlePrevImage}
                    aria-label="Previous showcase image"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-[#DCE5F2] bg-white text-[#64748B] shadow-xs transition-colors hover:border-[#2864F5] hover:text-[#2864F5]"
                  >
                    <ChevronLeft size={16} />
                  </button>
                  <button
                    type="button"
                    onClick={handleNextImage}
                    aria-label="Next showcase image"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-[#2864F5] bg-[#2864F5] text-white shadow-xs transition-colors hover:bg-[#1848BD]"
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>
              )}
            </div>

            {/* Immersive Image Display Area */}
            <Reveal reducedMotion={reducedMotion}>
              <div className="group relative overflow-hidden rounded-2xl border border-[#DCE5F2] bg-[#F5F8FD] p-2 shadow-[0_20px_50px_-24px_rgba(17,24,39,0.15)] sm:rounded-3xl sm:p-3">
                <div className="overflow-hidden rounded-xl bg-white sm:rounded-2xl">
                  <img
                    src={projectGallery[activeImageIndex]}
                    alt={`${project.title} interface showcase`}
                    className="h-auto w-full object-contain transition-transform duration-700 ease-out group-hover:scale-[1.01]"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                {/* Subtle bottom caption */}
                <div className="mt-2.5 flex items-center justify-between px-3 text-[11px] font-mono text-[#64748B]">
                  <span>{project.title}</span>
                  <span className="uppercase text-[#2864F5] font-semibold">{project.category}</span>
                </div>
              </div>
            </Reveal>
          </Container>
        </section>
      )}

      {/* ──────────────────────────────────────────────────────────
          3. Section A — The Overview (Two-column layout)
          ────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#F5F8FD] py-14 sm:py-18 lg:py-20 border-b border-[#DCE5F2]">
        <Container className="max-w-[1360px]">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-14 items-start">
            {/* Left: Project Overview and Goals */}
            <div className="lg:col-span-7">
              <Reveal reducedMotion={reducedMotion}>
                <div className="mb-2 flex items-center gap-2 text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-[#2864F5]">
                  <span className="h-0.5 w-4 rounded-full bg-[#2864F5]" aria-hidden="true" />
                  <span>The Overview</span>
                </div>
                <h2 className="mb-4 font-heading text-2xl font-bold tracking-tight text-[#111827] sm:text-3xl lg:text-[34px] lg:leading-tight">
                  Designed to solve a real problem.
                </h2>
                <p className="text-base leading-relaxed text-[#64748B] sm:text-lg mb-5">
                  {project.description}
                </p>
                <p className="text-[15px] leading-relaxed text-[#64748B]">
                  Every aspect of the architecture, from initial interface wireframing to production deployment, was engineered to support real user workflows and provide intuitive, uninterrupted interaction.
                </p>
              </Reveal>
            </div>

            {/* Right: Compact list of key project details */}
            <div className="lg:col-span-5">
              <Reveal reducedMotion={reducedMotion} delay={0.12}>
                <div className="rounded-2xl border border-[#DCE5F2] bg-white p-6 sm:p-7 shadow-xs">
                  <h3 className="mb-4 text-xs font-mono font-bold uppercase tracking-wider text-[#2864F5]">
                    Key Deliverables &amp; Focus
                  </h3>
                  <div className="space-y-3.5">
                    {deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle2 size={16} className="text-[#2864F5] shrink-0 mt-0.5" aria-hidden="true" />
                        <span className="text-sm font-semibold text-[#111827]">{item}</span>
                      </div>
                    ))}
                    <div className="flex items-start gap-3">
                      <CheckCircle2 size={16} className="text-[#2864F5] shrink-0 mt-0.5" aria-hidden="true" />
                      <span className="text-sm font-semibold text-[#111827]">Responsive Device Compatibility</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 size={16} className="text-[#2864F5] shrink-0 mt-0.5" aria-hidden="true" />
                      <span className="text-sm font-semibold text-[#111827]">Handover Documentation &amp; Support</span>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* ──────────────────────────────────────────────────────────
          4. Section B — The Challenge and Approach (Balanced editorial)
          ────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-white py-14 sm:py-18 lg:py-20 border-b border-[#DCE5F2]">
        <Container className="max-w-[1360px]">
          <Reveal reducedMotion={reducedMotion} className="mb-10 max-w-3xl">
            <div className="mb-2 flex items-center gap-2 text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-[#2864F5]">
              <span className="h-0.5 w-4 rounded-full bg-[#2864F5]" aria-hidden="true" />
              <span>Problem &amp; Method</span>
            </div>
            <h2 className="font-heading text-2xl font-bold tracking-tight text-[#111827] sm:text-3xl lg:text-[34px] lg:leading-tight">
              From challenge to solution.
            </h2>
            <p className="mt-2 text-sm text-[#64748B] sm:text-base">
              Every design decision was made to balance visual sophistication, usability, and technical performance.
            </p>
          </Reveal>

          <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
            {/* The Challenge */}
            <Reveal reducedMotion={reducedMotion}>
              <div className="relative h-full overflow-hidden rounded-2xl border border-[#DCE5F2] bg-[#F5F8FD] p-7 shadow-xs sm:rounded-3xl sm:p-8">
                <div className="mb-4 flex items-center justify-between">
                  <span className="font-heading text-4xl font-bold tracking-tight text-[#2864F5]/25 sm:text-5xl">
                    01
                  </span>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[#2864F5] shadow-xs">
                    <Sparkles size={18} aria-hidden="true" />
                  </div>
                </div>

                <div className="mb-2 text-xs font-mono font-bold uppercase tracking-wider text-[#2864F5]">
                  The Challenge
                </div>
                <h3 className="mb-3 font-heading text-xl font-bold text-[#111827] sm:text-2xl">
                  Understanding what needed to change
                </h3>
                <p className="text-[15px] leading-relaxed text-[#64748B] sm:text-base">
                  {project.challenge}
                </p>
              </div>
            </Reveal>

            {/* Our Approach */}
            <Reveal reducedMotion={reducedMotion} delay={0.12}>
              <div className="relative h-full overflow-hidden rounded-2xl border border-[#DCE5F2] bg-white p-7 shadow-xs sm:rounded-3xl sm:p-8">
                <div className="mb-4 flex items-center justify-between">
                  <span className="font-heading text-4xl font-bold tracking-tight text-[#2864F5]/25 sm:text-5xl">
                    02
                  </span>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EEF4FF] text-[#2864F5]">
                    <Lightbulb size={18} aria-hidden="true" />
                  </div>
                </div>

                <div className="mb-2 text-xs font-mono font-bold uppercase tracking-wider text-[#2864F5]">
                  Our Approach
                </div>
                <h3 className="mb-3 font-heading text-xl font-bold text-[#111827] sm:text-2xl">
                  Crafting a considered solution
                </h3>
                <p className="text-[15px] leading-relaxed text-[#64748B] sm:text-base">
                  {project.solution}
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ──────────────────────────────────────────────────────────
          5. Section C — Design and Experience
          ────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#F5F8FD] py-14 sm:py-18 lg:py-20 border-b border-[#DCE5F2]">
        <Container className="max-w-[1360px]">
          <Reveal reducedMotion={reducedMotion} className="mb-10 max-w-3xl">
            <div className="mb-2 flex items-center gap-2 text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-[#2864F5]">
              <span className="h-0.5 w-4 rounded-full bg-[#2864F5]" aria-hidden="true" />
              <span>User Experience &amp; Aesthetics</span>
            </div>
            <h2 className="font-heading text-2xl font-bold tracking-tight text-[#111827] sm:text-3xl lg:text-[34px] lg:leading-tight">
              Every detail has a purpose.
            </h2>
            <p className="mt-2 text-sm text-[#64748B] sm:text-base">
              A refined digital experience requires harmony across typography, layout rhythm, performance, and accessibility.
            </p>
          </Reveal>

          {/* Editorial 3-card experience breakdown */}
          <div className="grid gap-6 md:grid-cols-3">
            <Reveal reducedMotion={reducedMotion} delay={0.05}>
              <div className="h-full rounded-2xl border border-[#DCE5F2] bg-white p-6 sm:p-7 shadow-xs">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[#EEF4FF] text-[#2864F5]">
                  <Palette size={18} aria-hidden="true" />
                </div>
                <h3 className="mb-2 font-heading text-lg font-bold text-[#111827]">
                  Editorial Visual Balance
                </h3>
                <p className="text-sm leading-relaxed text-[#64748B]">
                  Generous whitespace, carefully proportioned type scales, and deliberate visual contrast keep the content uncluttered and immediately readable.
                </p>
              </div>
            </Reveal>

            <Reveal reducedMotion={reducedMotion} delay={0.1}>
              <div className="h-full rounded-2xl border border-[#DCE5F2] bg-white p-6 sm:p-7 shadow-xs">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[#EEF4FF] text-[#2864F5]">
                  <Smartphone size={18} aria-hidden="true" />
                </div>
                <h3 className="mb-2 font-heading text-lg font-bold text-[#111827]">
                  Fluid Across Viewports
                </h3>
                <p className="text-sm leading-relaxed text-[#64748B]">
                  Layout structures and typography dynamically adjust between desktop, tablet, and mobile with zero visual clipping or unwanted shift.
                </p>
              </div>
            </Reveal>

            <Reveal reducedMotion={reducedMotion} delay={0.15}>
              <div className="h-full rounded-2xl border border-[#DCE5F2] bg-white p-6 sm:p-7 shadow-xs">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[#EEF4FF] text-[#2864F5]">
                  <Zap size={18} aria-hidden="true" />
                </div>
                <h3 className="mb-2 font-heading text-lg font-bold text-[#111827]">
                  Engineered Performance
                </h3>
                <p className="text-sm leading-relaxed text-[#64748B]">
                  Lightweight assets, optimized DOM structures, and smooth micro-interactions make navigation feel instant and responsive.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ──────────────────────────────────────────────────────────
          6. Section D & E — Technology & Results and Impact
          ────────────────────────────────────────────────────────── */}
      <section className="relative bg-white py-14 sm:py-18 border-b border-[#DCE5F2]">
        <Container className="max-w-[1360px]">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-14 items-start">
            {/* Section D: Built with the right tools */}
            <div className="lg:col-span-6">
              <Reveal reducedMotion={reducedMotion}>
                <div className="mb-2 flex items-center gap-2 text-[11px] font-mono font-semibold uppercase tracking-[0.18em] text-[#2864F5]">
                  <Cpu size={13} aria-hidden="true" />
                  <span>Technology Stack</span>
                </div>
                <h2 className="mb-3 font-heading text-2xl font-bold text-[#111827] sm:text-3xl">
                  Built with the right tools.
                </h2>
                <p className="mb-6 text-sm text-[#64748B] sm:text-base">
                  Only proven, reliable technologies were chosen specifically to fit this project&apos;s architecture.
                </p>

                <div className="flex flex-wrap gap-2.5">
                  {project.technologies && project.technologies.length > 0 ? (
                    project.technologies.map((tech) => {
                      const TechIcon = getTechIcon(tech);
                      return (
                        <div
                          key={tech}
                          className="inline-flex items-center gap-2 rounded-xl border border-[#DCE5F2] bg-[#F5F8FD] px-4 py-2.5 text-xs font-semibold text-[#111827] shadow-xs transition-all hover:border-[#2864F5]/40 hover:bg-white"
                        >
                          <TechIcon size={14} className="text-[#2864F5]" aria-hidden="true" />
                          <span>{tech}</span>
                        </div>
                      );
                    })
                  ) : (
                    <span className="text-xs text-[#64748B]">Modern web &amp; design tools</span>
                  )}
                </div>
              </Reveal>
            </div>

            {/* Section E: Results and Impact */}
            <div className="lg:col-span-6">
              <Reveal reducedMotion={reducedMotion} delay={0.1}>
                <div className="mb-2 flex items-center gap-2 text-[11px] font-mono font-semibold uppercase tracking-[0.18em] text-[#2864F5]">
                  <Award size={13} aria-hidden="true" />
                  <span>Outcomes &amp; Metrics</span>
                </div>
                <h2 className="mb-3 font-heading text-2xl font-bold text-[#111827] sm:text-3xl">
                  The impact.
                </h2>
                <p className="mb-6 text-sm text-[#64748B] sm:text-base">
                  Delivered with strict quality benchmarks and tangible improvements for users.
                </p>

                {project.metrics && project.metrics.length > 0 ? (
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {project.metrics.map((metric, idx) => (
                      <div
                        key={metric.label}
                        className="rounded-2xl border border-[#DCE5F2] bg-[#F5F8FD] p-5 shadow-xs"
                      >
                        <div className="mb-2 flex items-center gap-2">
                          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-white text-[#2864F5] shadow-xs">
                            {idx === 0 ? (
                              <Award size={14} aria-hidden="true" />
                            ) : (
                              <ArrowUpRight size={14} aria-hidden="true" />
                            )}
                          </span>
                          <span className="font-heading text-2xl font-bold text-[#2864F5]">
                            {metric.value}
                          </span>
                        </div>
                        <div className="text-xs font-mono font-medium text-[#64748B]">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="rounded-2xl border border-[#DCE5F2] bg-[#F5F8FD] p-5 text-sm text-[#64748B]">
                    Delivered on schedule with complete quality assurance and verified functional tests.
                  </div>
                )}
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* ──────────────────────────────────────────────────────────
          7. Next Project — Premium Navigation
          ────────────────────────────────────────────────────────── */}
      <section className="relative bg-[#F5F8FD] py-14 sm:py-16 border-b border-[#DCE5F2]">
        <Container className="max-w-[1360px]">
          <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-10">
            {/* Left title info */}
            <div className="lg:col-span-5">
              <Reveal reducedMotion={reducedMotion}>
                <div className="mb-2 flex items-center gap-2 text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-[#2864F5]">
                  <span className="h-0.5 w-4 rounded-full bg-[#2864F5]" aria-hidden="true" />
                  <span>Up Next</span>
                </div>
                <h2 className="font-heading text-2xl font-bold tracking-tight text-[#111827] sm:text-3xl">
                  Explore another project.
                </h2>
                <p className="mt-1.5 text-sm text-[#64748B] sm:text-base">
                  Discover more work and see how we turn ideas into real solutions.
                </p>
                <div className="mt-5">
                  <Link
                    to="/work"
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-[#2864F5] hover:underline"
                  >
                    <ArrowLeft size={12} aria-hidden="true" />
                    <span>Back to All Projects</span>
                  </Link>
                </div>
              </Reveal>
            </div>

            {/* Right Horizontal Card */}
            <div className="lg:col-span-7">
              <Reveal reducedMotion={reducedMotion} delay={0.1}>
                <Link
                  to={`/work/${nextProject.slug}`}
                  className="group flex flex-col sm:flex-row items-center justify-between gap-5 rounded-2xl border border-[#DCE5F2] bg-white p-4 sm:p-5 shadow-[0_10px_35px_-20px_rgba(17,24,39,0.08)] transition-all hover:border-[#2864F5]/60 hover:shadow-[0_16px_40px_-20px_rgba(40,100,245,0.2)]"
                >
                  <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                    {nextProjectImage && (
                      <div className="h-20 w-32 shrink-0 overflow-hidden rounded-xl border border-[#DCE5F2] bg-[#EEF4FF]">
                        <img
                          src={nextProjectImage}
                          alt={`${nextProject.title} thumbnail`}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                      </div>
                    )}
                    <div className="text-center sm:text-left">
                      <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-[#2864F5]">
                        {nextProject.category}
                      </span>
                      <h3 className="font-heading text-base font-bold text-[#111827] sm:text-lg">
                        {nextProject.title}
                      </h3>
                      <p className="mt-0.5 max-w-md line-clamp-2 text-xs text-[#64748B]">
                        {nextProject.tagline || nextProject.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#EEF4FF] text-[#2864F5] transition-all group-hover:bg-[#2864F5] group-hover:text-white group-hover:translate-x-1">
                    <ChevronRight size={18} aria-hidden="true" />
                  </div>
                </Link>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* ──────────────────────────────────────────────────────────
          8. Final Call to Action
          ────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#FFFFFF] to-[#EEF4FF] py-16 sm:py-20 lg:py-24">
        {/* Decorative elements: pale blue circles and dotted grid */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute -left-20 top-1/2 -translate-y-1/2 h-80 w-80 rounded-full bg-[#2864F5]/[0.06] blur-3xl" />
          <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-[#19B9E8]/[0.05] blur-3xl" />

          {/* Dotted pattern */}
          <svg
            className="absolute right-12 top-10 h-64 w-64 text-[#2864F5]/[0.05]"
            viewBox="0 0 240 240"
            fill="currentColor"
          >
            <pattern id="cta-dots" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
              <circle cx="3" cy="3" r="1.5" />
            </pattern>
            <rect width="240" height="240" fill="url(#cta-dots)" />
          </svg>
        </div>

        <Container className="relative z-10 max-w-[1360px]">
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <Reveal reducedMotion={reducedMotion}>
                <div className="mb-3 flex items-center gap-2 text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-[#2864F5]">
                  <span className="h-0.5 w-4 rounded-full bg-[#2864F5]" aria-hidden="true" />
                  <span>Start a Collaboration</span>
                </div>

                <h2 className="font-heading text-3xl font-extrabold tracking-tight text-[#111827] sm:text-4xl lg:text-5xl">
                  Have an idea worth building?
                </h2>

                <p className="mt-4 max-w-xl text-base leading-relaxed text-[#64748B] sm:text-lg">
                  Let&apos;s turn your next idea into a thoughtful digital experience. Whether you need a new website, a custom mobile app, or guidance on an academic software project, we&apos;re ready to help.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-3.5">
                  <Button
                    to="/contact"
                    variant="primary"
                    className="rounded-xl px-7 py-3.5 shadow-[0_8px_22px_-6px_rgba(40,100,245,0.45)]"
                    iconRight={<ArrowRight size={16} aria-hidden="true" />}
                  >
                    Start a Project
                  </Button>
                  <Button
                    to="/work"
                    variant="secondary"
                    className="rounded-xl border-[#DCE5F2] bg-white px-7 py-3.5 text-[#111827] shadow-xs hover:bg-[#F5F8FD]"
                  >
                    Explore Our Work
                  </Button>
                </div>
              </Reveal>
            </div>

            {/* Right: Abstract 3D Interface Graphic */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <Reveal reducedMotion={reducedMotion} delay={0.15}>
                <div className="relative max-w-md overflow-hidden rounded-2xl border border-[#DCE5F2] bg-white/80 p-2 shadow-[0_16px_45px_-20px_rgba(40,100,245,0.18)] backdrop-blur-sm sm:max-w-lg">
                  <img
                    src={ctaGraphic}
                    alt="NEXZIVO digital interface craftsmanship"
                    className="h-auto w-full rounded-xl object-contain"
                    loading="lazy"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
