import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'motion/react';
import {
  Briefcase,
  MapPin,
  Clock,
  ArrowRight,
  CheckCircle2,
  Users,
  Heart,
  TrendingUp,
  Laptop,
  GraduationCap,
  ChevronRight,
} from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { SectionReveal } from '@/components/ui/SectionReveal';
import { useReducedMotionPreference } from '@/hooks/useReducedMotionPreference';
import heroMockup from '@/assets/hero1.png';

const EASE_OUT_EXPO = [0.22, 1, 0.36, 1];

// Studio Benefits & Perks
const perks = [
  {
    icon: Laptop,
    title: 'Modern Tooling & Hardware',
    desc: 'Work with the latest MacBooks, cloud setups, and premier design/developer licenses with zero friction.',
  },
  {
    icon: TrendingUp,
    title: 'Accelerated Career Growth',
    desc: 'Direct mentorship with studio leadership and opportunities to spearhead client initiatives end-to-end.',
  },
  {
    icon: Clock,
    title: 'Autonomous & Flexible Hours',
    desc: 'We focus on clear deliverables, high craft standards, and deep work rather than clock-watching.',
  },
  {
    icon: Heart,
    title: 'Health & Wellness Focus',
    desc: 'Paid time off, mental rejuvenation days, and a balanced work ethic that respects personal time.',
  },
  {
    icon: GraduationCap,
    title: 'Continuous Learning Stipend',
    desc: 'Annual education budget for industry conferences, masterclasses, design books, and certifications.',
  },
  {
    icon: Users,
    title: 'Collaborative Studio Culture',
    desc: 'Zero-ego, highly supportive teammates who review each other’s craft with constructive feedback.',
  },
];

// Open Career Positions
const jobListings = [
  {
    id: 'fullstack-dev',
    title: 'Senior Full-Stack Engineer',
    department: 'Engineering',
    location: 'Remote / Hybrid (India)',
    type: 'Full-time',
    experience: '3–5 Years',
    overview:
      'We are looking for a senior full-stack engineer who takes pride in building robust, high-performance web applications using modern JavaScript/TypeScript, React, Node.js, and scalable cloud databases.',
    responsibilities: [
      'Architect and build resilient digital products, client dashboards, and custom software systems.',
      'Collaborate closely with UI/UX designers to translate Figma prototypes into pixel-perfect code.',
      'Write clean, accessible, and thoroughly tested production software.',
      'Mentor junior engineers and contribute to code review standards.',
    ],
    requirements: [
      '3+ years of professional full-stack development experience.',
      'Strong mastery of React, TypeScript, Next.js or Vite, and Tailwind CSS.',
      'Proven experience designing scalable REST & GraphQL APIs and relational/NoSQL databases.',
      'Solid understanding of performance optimization, accessibility, and modern Git workflows.',
    ],
  },
  {
    id: 'uiux-designer',
    title: 'Lead UI/UX & Product Designer',
    department: 'Design',
    location: 'Remote (India)',
    type: 'Full-time',
    experience: '2–4 Years',
    overview:
      'NEXZIVO is seeking an exceptional UI/UX designer with a deep visual sensibility, passion for design systems, and strong prototyping capabilities to elevate our client experiences.',
    responsibilities: [
      'Design comprehensive user interfaces, wireframes, and interactive prototypes in Figma.',
      'Develop cohesive design systems, icon kits, and responsive component libraries.',
      'Conduct client requirement sessions and translate business goals into intuitive user flows.',
      'Partner closely with front-end developers to ensure flawless visual execution.',
    ],
    requirements: [
      '2+ years in digital product, web, and mobile interface design.',
      'Mastery of Figma (auto-layout, components, interactive prototyping, variables).',
      'Strong portfolio showcasing polished visual aesthetics, typography, and clear design rationale.',
      'Understanding of front-end capabilities (HTML/CSS layout principles).',
    ],
  },
  {
    id: 'mobile-dev',
    title: 'Mobile App Developer (React Native / Flutter)',
    department: 'Engineering',
    location: 'Remote / Hybrid',
    type: 'Full-time',
    experience: '2+ Years',
    overview:
      'Build sleek, buttery-smooth cross-platform iOS and Android applications that delight users and solve practical everyday problems for businesses.',
    responsibilities: [
      'Build native-feeling, high-performance mobile apps using React Native or Flutter.',
      'Integrate seamless offline caching, push notifications, and third-party APIs.',
      'Manage app store submission workflows (App Store & Google Play).',
      'Optimize bundle size, launch times, and 60fps animations.',
    ],
    requirements: [
      'Proven portfolio of published apps on the iOS App Store or Google Play.',
      'Strong background with React Native, TypeScript, or Flutter.',
      'Familiarity with state management libraries and native module integrations.',
      'Strong focus on animations, micro-interactions, and mobile ergonomics.',
    ],
  },
  {
    id: 'frontend-intern',
    title: 'Junior Front-End Developer / Intern',
    department: 'Engineering',
    location: 'Remote (India)',
    type: 'Internship / Full-time',
    experience: '0–1 Year (Students Welcome)',
    overview:
      'Passionate about writing clean code and creating stunning web animations? Join our core studio team to learn directly under senior engineers on real-world client builds.',
    responsibilities: [
      'Assist in implementing modern responsive web pages and components using React and Tailwind.',
      'Debug cross-browser layout inconsistencies and ensure mobile responsiveness.',
      'Contribute to internal studio tools and component showcase documentation.',
    ],
    requirements: [
      'Strong foundational knowledge of HTML5, CSS3, and modern JavaScript (ES6+).',
      'Basic familiarity with React and Tailwind CSS.',
      'Eager curiosity to learn, communicate transparently, and receive constructive feedback.',
    ],
  },
];

export function CareerPage() {
  const reducedMotion = useReducedMotionPreference();
  const [selectedDept, setSelectedDept] = useState('All');
  const [selectedJob, setSelectedJob] = useState(null);
  const [applicationSubmitted, setApplicationSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    portfolio: '',
    linkedin: '',
    coverNote: '',
  });

  const departments = ['All', 'Engineering', 'Design'];

  const filteredJobs =
    selectedDept === 'All'
      ? jobListings
      : jobListings.filter((job) => job.department === selectedDept);

  const handleApplyClick = (job) => {
    setSelectedJob(job);
    setApplicationSubmitted(false);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setApplicationSubmitted(true);
  };

  const fadeUp = (delay = 0, yOffset = 16, duration = 0.55) => {
    if (reducedMotion) {
      return {
        initial: { opacity: 1, y: 0 },
        animate: { opacity: 1, y: 0 },
      };
    }
    return {
      initial: { opacity: 0, y: yOffset },
      animate: { opacity: 1, y: 0 },
      transition: { duration, delay, ease: EASE_OUT_EXPO },
    };
  };

  const showcaseVariant = () => {
    if (reducedMotion) {
      return {
        initial: { opacity: 1, scale: 1 },
        animate: { opacity: 1, scale: 1 },
      };
    }
    return {
      initial: { opacity: 0, scale: 0.94, y: 12 },
      animate: { opacity: 1, scale: 1, y: 0 },
      transition: { duration: 0.8, delay: 0.22, ease: EASE_OUT_EXPO },
    };
  };

  return (
    <>
      <Helmet>
        <title>Careers at NEXZIVO — Build High-Impact Digital Products</title>
        <meta
          name="description"
          content="Join the team at NEXZIVO. Explore open engineering, design, and software development positions at our creative digital studio."
        />
      </Helmet>

      {/* ───────────────────────────────────────────────────────────
          1. HERO SECTION (2-Column Studio Atmosphere)
          ─────────────────────────────────────────────────────────── */}
      <section
        id="career-hero"
        className="relative bg-[#F7F9FC] text-[#141B2A] pt-24 pb-14 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-20 xl:pb-24 border-b border-[#E3E8F0] overflow-hidden"
      >
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute -top-32 right-[-5%] h-[620px] w-[620px] lg:h-[700px] lg:w-[700px] rounded-full bg-gradient-to-br from-[#2764F5]/7 via-[#35C5E8]/5 to-transparent blur-3xl" />
          <div className="absolute top-1/4 left-[-10%] h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-[#35C5E8]/6 via-[#2764F5]/4 to-transparent blur-3xl" />

          {/* Dotted pattern right */}
          <svg
            className="absolute top-20 right-10 lg:right-20 w-64 h-64 text-[#2764F5]/[0.05] hidden sm:block"
            viewBox="0 0 240 240"
            fill="currentColor"
          >
            <pattern id="career-dots-right" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
              <circle cx="3" cy="3" r="1.5" />
            </pattern>
            <rect width="240" height="240" fill="url(#career-dots-right)" />
          </svg>
        </div>

        <Container className="relative z-10 max-w-[1440px] xl:max-w-[1540px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-4 xl:gap-8 items-center">
            {/* Left Column: Eyebrow, Heading, Description, CTA */}
            <div className="lg:col-span-5 xl:col-span-5 flex flex-col items-start gap-5 sm:gap-6 order-1 pr-0 lg:pr-2">
              <motion.div {...fadeUp(0.04, 12, 0.45)}>
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#2764F5]">
                  <span className="h-0.5 w-5 rounded-full bg-[#2764F5]" aria-hidden="true" />
                  <span>JOIN OUR TEAM</span>
                </span>
              </motion.div>

              <h1 className="font-heading text-[2.25rem] sm:text-[2.85rem] md:text-[3.3rem] lg:text-[clamp(2.45rem,2.9vw,3.35rem)] xl:text-[clamp(2.85rem,3.3vw,3.75rem)] font-extrabold tracking-tight leading-[1.12] text-[#141B2A] max-w-xl text-left">
                <motion.span className="block" {...fadeUp(0.1, 16, 0.55)}>
                  Build What's Next with
                </motion.span>
                <motion.span className="block text-[#2764F5]" {...fadeUp(0.18, 16, 0.55)}>
                  Creative Freedom.
                </motion.span>
              </h1>

              <motion.p
                className="max-w-lg text-[15px] sm:text-[16.5px] lg:text-[17px] text-[#687386] leading-relaxed text-left"
                {...fadeUp(0.36, 14, 0.5)}
              >
                We are a close-knit collective of engineers, designers, and innovators. We build high-impact web systems, mobile apps, and custom digital software for ambitious businesses around the world.
              </motion.p>

              <motion.div
                className="flex flex-wrap items-center gap-3.5 sm:gap-4 pt-1"
                {...fadeUp(0.44, 14, 0.5)}
              >
                <a
                  href="#open-roles"
                  className="inline-flex items-center justify-center rounded-xl px-6 sm:px-7 py-3 sm:py-3.5 text-[15px] sm:text-[15.5px] font-semibold bg-[#2764F5] text-white hover:bg-[#1E52D0] shadow-sm hover:shadow transition-all duration-200"
                >
                  View Open Roles
                  <ArrowRight size={17} className="ml-2" />
                </a>
                <Button
                  to="/about"
                  variant="secondary"
                  size="md"
                  className="px-6 sm:px-7 py-3 sm:py-3.5 text-[15px] sm:text-[15.5px]"
                >
                  About Our Studio
                </Button>
              </motion.div>

              {/* Studio Culture Highlights */}
              <motion.div
                className="flex flex-wrap items-center gap-x-3.5 gap-y-2 pt-5 sm:pt-6 mt-1 border-t border-[#E3E8F0] w-full text-[12.5px] sm:text-[13px] font-semibold text-[#141B2A]"
                {...fadeUp(0.52, 10, 0.5)}
              >
                <span className="text-[11.5px] sm:text-xs font-bold uppercase tracking-wider text-[#2764F5]">
                  Culture:
                </span>
                <span>Remote Friendly</span>
                <span className="text-[#CBD5E1]">·</span>
                <span>Craft Focused</span>
                <span className="text-[#CBD5E1]">·</span>
                <span>Zero Micro-management</span>
                <span className="text-[#CBD5E1]">·</span>
                <span>Rapid Impact</span>
              </motion.div>
            </div>

            {/* Right Column: Visual Mockup */}
            <div className="lg:col-span-7 xl:col-span-7 w-full order-2 flex items-center justify-center lg:justify-end">
              <motion.div
                className="relative w-full max-w-[560px] lg:max-w-[620px] xl:max-w-[680px] flex items-center justify-center lg:justify-end"
                {...showcaseVariant()}
              >
                <img
                  src={heroMockup}
                  alt="NEXZIVO Studio team & project showcase"
                  className="w-full h-auto max-h-[380px] sm:max-h-[440px] md:max-h-[480px] lg:max-h-[520px] xl:max-h-[560px] object-contain drop-shadow-[0_16px_36px_rgba(16,27,45,0.07)]"
                  loading="eager"
                  decoding="async"
                />
              </motion.div>
            </div>
          </div>
        </Container>
      </section>

      {/* ───────────────────────────────────────────────────────────
          2. STUDIO CULTURE & PERKS (Left-Aligned Heading + 6 Cards)
          ─────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-white border-b border-[#E3E8F0]">
        <Container>
          <SectionReveal>
            <div className="text-left max-w-2xl mb-12 sm:mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-[#2764F5] block mb-2">
                WHY WORK WITH US
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#141B2A] text-left">
                Perks &amp; Studio Environment
              </h2>
              <p className="mt-2 text-sm sm:text-base text-[#687386] text-left">
                We believe that great software and intuitive designs are created by happy, inspired teams with true autonomy.
              </p>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {perks.map((perk, i) => {
              const Icon = perk.icon;
              return (
                <SectionReveal key={perk.title} delay={i * 0.08}>
                  <div className="h-full flex flex-col p-8 rounded-2xl bg-[#F7F9FC] border border-[#E3E8F0] shadow-xs hover:border-[#2764F5]/40 hover:bg-white hover:shadow-md transition-all duration-300 text-left">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#EEF4FF] text-[#2764F5] mb-5">
                      <Icon size={24} />
                    </span>
                    <h3 className="font-heading text-xl font-bold text-[#141B2A] mb-2.5 text-left">
                      {perk.title}
                    </h3>
                    <p className="text-sm text-[#687386] leading-relaxed text-left">
                      {perk.desc}
                    </p>
                  </div>
                </SectionReveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ───────────────────────────────────────────────────────────
          3. OPEN ROLES DIRECTORY & APPLICATION INTERFACE
          ─────────────────────────────────────────────────────────── */}
      <section id="open-roles" className="py-16 sm:py-24 bg-[#FAFBFD] border-b border-[#E3E8F0]">
        <Container>
          <SectionReveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
              <div className="text-left max-w-2xl">
                <span className="text-xs font-bold uppercase tracking-widest text-[#2764F5] block mb-2">
                  OPPORTUNITIES
                </span>
                <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#141B2A] text-left">
                  Current Open Positions
                </h2>
                <p className="mt-2 text-sm sm:text-base text-[#687386] text-left">
                  Explore available roles below. Don't see an exact match? We are always happy to meet passionate developers and creators.
                </p>
              </div>

              {/* Department Filter Tabs */}
              <div className="flex items-center gap-2 p-1.5 rounded-xl bg-white border border-[#E3E8F0] shadow-2xs self-start md:self-end">
                {departments.map((dept) => (
                  <button
                    key={dept}
                    onClick={() => setSelectedDept(dept)}
                    className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all duration-200 cursor-pointer ${
                      selectedDept === dept
                        ? 'bg-[#101B2D] text-white shadow-2xs'
                        : 'text-[#687386] hover:text-[#141B2A]'
                    }`}
                  >
                    {dept}
                  </button>
                ))}
              </div>
            </div>
          </SectionReveal>

          {/* Job Listings Grid */}
          <div className="grid grid-cols-1 gap-5">
            {filteredJobs.map((job) => (
              <SectionReveal key={job.id}>
                <div className="group p-6 sm:p-8 rounded-2xl bg-white border border-[#E3E8F0] hover:border-[#2764F5]/50 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                  <div className="flex-1 text-left">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="inline-block text-[11px] font-mono font-bold uppercase tracking-wider text-[#2764F5] bg-[#EEF4FF] px-2.5 py-0.5 rounded border border-[#DCE4F0]">
                        {job.department}
                      </span>
                      <span className="inline-block text-[11px] font-mono font-bold text-[#687386] bg-[#F7F9FC] px-2.5 py-0.5 rounded border border-[#E3E8F0]">
                        {job.type}
                      </span>
                    </div>

                    <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#141B2A] group-hover:text-[#2764F5] transition-colors">
                      {job.title}
                    </h3>

                    <p className="text-sm text-[#687386] mt-2 mb-4 max-w-3xl leading-relaxed">
                      {job.overview}
                    </p>

                    <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-[#8E9AA8]">
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin size={14} className="text-[#2764F5]" />
                        {job.location}
                      </span>
                      <span>·</span>
                      <span className="inline-flex items-center gap-1.5">
                        <Briefcase size={14} className="text-[#2764F5]" />
                        {job.experience}
                      </span>
                    </div>
                  </div>

                  <div className="shrink-0 flex items-center gap-3">
                    <button
                      onClick={() => handleApplyClick(job)}
                      className="px-6 py-3 rounded-xl bg-[#2764F5] text-white hover:bg-[#1E52D0] font-semibold text-sm transition-all duration-200 cursor-pointer shadow-sm hover:shadow flex items-center gap-2"
                    >
                      <span>Apply Now</span>
                      <ChevronRight size={16} />
                    </button>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>

          {/* Application Modal */}
          <AnimatePresence>
            {selectedJob && (
              <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs overflow-y-auto">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 15 }}
                  transition={{ duration: 0.25 }}
                  className="relative w-full max-w-2xl bg-white rounded-3xl p-6 sm:p-10 shadow-2xl border border-[#E3E8F0] my-8 text-left"
                >
                  <button
                    onClick={() => setSelectedJob(null)}
                    className="absolute top-6 right-6 text-[#8E9AA8] hover:text-[#141B2A] text-2xl font-bold cursor-pointer"
                  >
                    ✕
                  </button>

                  {!applicationSubmitted ? (
                    <>
                      <div className="mb-6">
                        <span className="text-xs font-mono font-bold text-[#2764F5] uppercase tracking-wider">
                          APPLICATION FORM
                        </span>
                        <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#141B2A] mt-1">
                          {selectedJob.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-[#687386] mt-1">
                          {selectedJob.department} · {selectedJob.location} · {selectedJob.type}
                        </p>
                      </div>

                      <form onSubmit={handleFormSubmit} className="space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-bold text-[#141B2A] mb-1">
                              Full Name *
                            </label>
                            <input
                              type="text"
                              required
                              name="name"
                              value={formData.name}
                              onChange={handleFormChange}
                              placeholder="e.g. John Doe"
                              className="w-full px-4 py-2.5 rounded-xl border border-[#E3E8F0] focus:border-[#2764F5] focus:outline-none text-sm text-[#141B2A]"
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-bold text-[#141B2A] mb-1">
                              Email Address *
                            </label>
                            <input
                              type="email"
                              required
                              name="email"
                              value={formData.email}
                              onChange={handleFormChange}
                              placeholder="john@example.com"
                              className="w-full px-4 py-2.5 rounded-xl border border-[#E3E8F0] focus:border-[#2764F5] focus:outline-none text-sm text-[#141B2A]"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-bold text-[#141B2A] mb-1">
                              Phone Number *
                            </label>
                            <input
                              type="tel"
                              required
                              name="phone"
                              value={formData.phone}
                              onChange={handleFormChange}
                              placeholder="+91 98765 43210"
                              className="w-full px-4 py-2.5 rounded-xl border border-[#E3E8F0] focus:border-[#2764F5] focus:outline-none text-sm text-[#141B2A]"
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-bold text-[#141B2A] mb-1">
                              Portfolio / GitHub URL
                            </label>
                            <input
                              type="url"
                              name="portfolio"
                              value={formData.portfolio}
                              onChange={handleFormChange}
                              placeholder="https://github.com/yourhandle"
                              className="w-full px-4 py-2.5 rounded-xl border border-[#E3E8F0] focus:border-[#2764F5] focus:outline-none text-sm text-[#141B2A]"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-[#141B2A] mb-1">
                            LinkedIn Profile URL
                          </label>
                          <input
                            type="url"
                            name="linkedin"
                            value={formData.linkedin}
                            onChange={handleFormChange}
                            placeholder="https://linkedin.com/in/yourhandle"
                            className="w-full px-4 py-2.5 rounded-xl border border-[#E3E8F0] focus:border-[#2764F5] focus:outline-none text-sm text-[#141B2A]"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-[#141B2A] mb-1">
                            Short Note / Why NEXZIVO? *
                          </label>
                          <textarea
                            rows={3}
                            required
                            name="coverNote"
                            value={formData.coverNote}
                            onChange={handleFormChange}
                            placeholder="Tell us briefly about your background and what you love building..."
                            className="w-full px-4 py-2.5 rounded-xl border border-[#E3E8F0] focus:border-[#2764F5] focus:outline-none text-sm text-[#141B2A]"
                          />
                        </div>

                        <div className="pt-2 flex items-center justify-end gap-3">
                          <button
                            type="button"
                            onClick={() => setSelectedJob(null)}
                            className="px-5 py-2.5 rounded-xl border border-[#E3E8F0] text-[#687386] hover:bg-[#F7F9FC] text-sm font-semibold cursor-pointer"
                          >
                            Cancel
                          </button>
                          <button
                            type="submit"
                            className="px-6 py-2.5 rounded-xl bg-[#2764F5] text-white hover:bg-[#1E52D0] font-semibold text-sm cursor-pointer shadow-sm hover:shadow"
                          >
                            Submit Application
                          </button>
                        </div>
                      </form>
                    </>
                  ) : (
                    <div className="py-8 text-center flex flex-col items-center gap-4">
                      <div className="h-16 w-16 rounded-full bg-[#EEF4FF] text-[#2764F5] flex items-center justify-center">
                        <CheckCircle2 size={32} />
                      </div>
                      <h4 className="font-heading text-2xl font-bold text-[#141B2A]">
                        Application Received!
                      </h4>
                      <p className="text-sm text-[#687386] max-w-md">
                        Thank you for applying for the <strong>{selectedJob.title}</strong> role. Our team will review your credentials and get back to you within 3 business days.
                      </p>
                      <button
                        onClick={() => setSelectedJob(null)}
                        className="mt-3 px-6 py-2.5 rounded-xl bg-[#101B2D] text-white hover:bg-[#18263E] text-sm font-semibold cursor-pointer"
                      >
                        Close Window
                      </button>
                    </div>
                  )}
                </motion.div>
              </div>
            )}
          </AnimatePresence>
        </Container>
      </section>

      {/* ───────────────────────────────────────────────────────────
          4. CLOSING CTA BANNER (Deep Navy Banner)
          ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#F7F9FC] py-14 sm:py-18 lg:py-20">
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute top-1/2 left-[-5%] h-[400px] w-[400px] rounded-full bg-[#2764F5]/4 blur-3xl" />
          <div className="absolute top-1/2 right-[-5%] h-[400px] w-[400px] rounded-full bg-[#35C5E8]/4 blur-3xl" />
        </div>

        <Container className="relative z-10">
          <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl bg-[#101B2D] p-8 sm:p-12 lg:p-14 text-white shadow-xl border border-[#273752]">
            <div
              className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[#2764F5]/20 blur-2xl"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[#35C5E8]/15 blur-2xl"
              aria-hidden="true"
            />

            <div className="relative z-10 max-w-2xl mx-auto text-center flex flex-col items-center gap-6">
              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#35C5E8]/15 border border-[#35C5E8]/30 text-xs font-bold uppercase tracking-[0.2em] text-[#35C5E8]">
                SPONTANEOUS APPLICATION
              </span>

              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Don't See Your Role? Say Hello Anyway.
              </h2>

              <p className="text-base sm:text-lg text-[#CBD5E1] leading-relaxed">
                We are constantly expanding our engineering and design capabilities. Send us your portfolio, project work, or Github profile.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4 pt-3">
                <Button to="/contact" variant="primary" size="lg" iconRight={<ArrowRight size={18} />}>
                  Contact Our Studio
                </Button>
                <Button to="/work" variant="outlineDark" size="lg">
                  Explore Case Studies
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
