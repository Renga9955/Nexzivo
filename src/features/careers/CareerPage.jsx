import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'motion/react';
import {
  Briefcase,
  Sparkles,
  Heart,
  TrendingUp,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Laptop,
  GraduationCap,
  Users,
  Compass,
  ArrowRight,
  Shield,
  FileCheck,
  Check,
  Zap,
} from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { SectionReveal } from '@/components/ui/SectionReveal';
import { useReducedMotionPreference } from '@/hooks/useReducedMotionPreference';
import { siteConfig } from '@/config/site';

// Benefits & Perks
const perks = [
  {
    icon: Laptop,
    title: 'Modern Tech Stack & Autonomy',
    desc: 'Work with clean architectures, modern React, Tailwind, Next.js, and cutting-edge design tooling with genuine creative freedom.',
  },
  {
    icon: TrendingUp,
    title: 'Fast-Track Career Growth',
    desc: 'Rapid progression path with direct mentorship from company founders, architecting real products right from day one.',
  },
  {
    icon: Clock,
    title: 'Flexible & Hybrid Work',
    desc: 'We care about output and quality, not rigid clock-watching. Enjoy collaborative remote-friendly arrangements.',
  },
  {
    icon: GraduationCap,
    title: 'Continuous Learning & Upskilling',
    desc: 'Budget and sponsored access for books, professional certifications, hackathons, and industry workshops.',
  },
  {
    icon: Heart,
    title: 'People-First Culture',
    desc: 'Inclusive, transparent team that values open discussions, empathy, mental wellness, and celebration of wins.',
  },
  {
    icon: Zap,
    title: 'Competitive Compensation & Bonuses',
    desc: 'Rewarding packages, project completion incentives, and performance bonuses that grow as NEXZIVO expands.',
  },
];

// Open Positions Data
const jobOpenings = [
  {
    id: 'frontend-engineer',
    title: 'Frontend Engineer (React / Next.js)',
    department: 'Engineering',
    location: 'Remote / Hybrid (India)',
    type: 'Full-Time',
    experience: '1 - 3 Years / High Aptitude Freshers',
    description:
      'We are looking for a dedicated Frontend Engineer who takes pride in pixel-perfection, smooth micro-interactions, and writing modular, maintainable React/TypeScript code.',
    responsibilities: [
      'Build performant, responsive, and accessible web applications using React, Next.js, and Tailwind CSS.',
      'Collaborate with UI/UX designers to bring wireframes, animations, and design tokens to life.',
      'Integrate REST/GraphQL APIs and optimize client-side performance, core web vitals, and SEO.',
      'Contribute to internal reusable UI component libraries and design systems.',
    ],
    requirements: [
      'Strong proficiency in JavaScript (ES6+), React, Tailwind CSS, and HTML5/CSS3.',
      'Familiarity with state management, component lifecycle, and animation libraries like Framer Motion.',
      'Eye for design aesthetics, clean typography, responsive layouts, and cross-browser quirks.',
      'Git workflow proficiency and passion for code quality.',
    ],
  },
  {
    id: 'ui-ux-designer',
    title: 'UI/UX & Product Designer',
    department: 'Design Studio',
    location: 'Remote / Hybrid (India)',
    type: 'Full-Time',
    experience: '1 - 3 Years / Strong Portfolio',
    description:
      'Join our creative design arm to create striking digital experiences, sleek brand design systems, and intuitive SaaS dashboards for global clients.',
    responsibilities: [
      'Design high-fidelity user interfaces, user flows, wireframes, and interactive clickable prototypes in Figma.',
      'Develop cohesive design systems, icon kits, and visual assets aligned with brand guidelines.',
      'Conduct usability tests, user research, and refine UX flows based on client feedback.',
      'Work alongside developers during handoff to ensure fidelity and interaction nuances are preserved.',
    ],
    requirements: [
      'Demonstrated portfolio showcasing end-to-end web & mobile app design projects in Figma.',
      'Strong grasp of visual hierarchy, modern color theory, responsive layout grids, and micro-interactions.',
      'Understanding of web feasibility, HTML/CSS layout concepts, and design system governance.',
      'Strong verbal communication to present ideas and design rationale to stakeholders.',
    ],
  },
  {
    id: 'fullstack-engineer',
    title: 'Full-Stack Developer (Node.js / React)',
    department: 'Engineering',
    location: 'Hybrid / On-site',
    type: 'Full-Time',
    experience: '2 - 4 Years',
    description:
      'Lead end-to-end feature delivery across frontend and backend services, architecting reliable databases, secure authentication systems, and cloud-native solutions.',
    responsibilities: [
      'Develop robust RESTful APIs, microservices, and database models using Node.js/Express, PostgreSQL, or MongoDB.',
      'Connect backend services with high-performing React/Next.js interfaces.',
      'Implement security standards, JWT authentication, role-based permissions, and cloud deployment pipelines.',
      'Troubleshoot architecture bottlenecks, optimize queries, and maintain unit/integration tests.',
    ],
    requirements: [
      'Solid experience with Node.js, Express, PostgreSQL/MySQL or MongoDB, and React.',
      'Understanding of cloud services (AWS, Vercel, Docker) and CI/CD pipelines.',
      'Clean coding practices, modular architecture patterns, and debugging acumen.',
      'Self-driven mindset to architect features from concept to production deployment.',
    ],
  },
  {
    id: 'graphic-brand-designer',
    title: 'Brand & Graphic Designer (Posters & Media)',
    department: 'Creative Studio',
    location: 'Remote / Hybrid',
    type: 'Full-Time / Contract',
    experience: '1+ Years / Impressive Portfolio',
    description:
      'Create high-impact visual stories, editorial posters, marketing collateral, social media creative systems, and distinctive corporate branding assets.',
    responsibilities: [
      'Produce bold graphic designs, promotional posters, event visuals, and digital assets.',
      'Craft brand identities including logos, typography guides, and brand books for emerging businesses.',
      'Collaborate with the marketing and engineering team to produce launch campaigns and website visuals.',
      'Maintain visual consistency across all touchpoints and client deliverables.',
    ],
    requirements: [
      'Proficiency in Adobe Creative Suite (Photoshop, Illustrator, InDesign) and Figma.',
      'Solid eye for experimental typography, layout composition, and contemporary aesthetics.',
      'Strong attention to detail and ability to iterate quickly based on creative briefs.',
      'Portfolio displaying branding systems, editorial layouts, or graphic art.',
    ],
  },
  {
    id: 'software-intern',
    title: 'Software Engineering Intern',
    department: 'Engineering & Innovation',
    location: 'Hybrid / Remote',
    type: 'Internship (3 - 6 Months)',
    experience: 'Final Year Students / Fresh Graduates',
    description:
      'Kickstart your engineering career. Receive hands-on experience on live client projects, learn industry standards, and get considered for a full-time role upon completion.',
    responsibilities: [
      'Collaborate with senior developers on building frontend components and API endpoints.',
      'Write clean, readable code and participate in peer code reviews.',
      'Assist in testing, bug fixes, and documentation of software products.',
      'Explore emerging frameworks, tools, and technical best practices.',
    ],
    requirements: [
      'Solid grounding in computer science fundamentals, data structures, and web technologies.',
      'Familiarity with JavaScript, React, Python, or Node.js through academic or personal projects.',
      'Curiosity, hunger to learn fast, and great problem-solving aptitude.',
      'Active GitHub profile or portfolio showcasing projects is an advantage.',
    ],
  },
];

// Hiring Process Steps
const hiringSteps = [
  {
    step: '01',
    title: 'Application Review',
    desc: 'Submit your resume and portfolio. Our hiring leads carefully review every submission for relevant work and alignment.',
  },
  {
    step: '02',
    title: 'Introductory Conversation',
    desc: 'A relaxed 20-30 min chat to know your story, aspirations, values, and how NEXZIVO fits your career trajectory.',
  },
  {
    step: '03',
    title: 'Technical / Design Challenge',
    desc: 'A practical, real-world task or portfolio deep-dive. No trick algorithm puzzles — just practical craftsmanship.',
  },
  {
    step: '04',
    title: 'Offer & Welcome',
    desc: 'Clear, competitive offer letter followed by a structured onboarding experience with direct mentorship.',
  },
];

/**
 * CareerPage — Modern, inspiring, conversion-focused careers page for NEXZIVO.
 */
export function CareerPage() {
  const reducedMotion = useReducedMotionPreference();
  const [selectedDept, setSelectedDept] = useState('All');
  const [expandedJobId, setExpandedJobId] = useState('frontend-engineer');
  const [applicationModal, setApplicationModal] = useState({
    isOpen: false,
    jobTitle: '',
  });

  // Application Form State
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    portfolio: '',
    experience: 'Fresher / Entry-Level',
    resumeUrl: '',
    coverNote: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // Departments for filtering
  const departments = ['All', 'Engineering', 'Design Studio', 'Creative Studio', 'Engineering & Innovation'];

  const filteredJobs = selectedDept === 'All'
    ? jobOpenings
    : jobOpenings.filter((job) => job.department.toLowerCase().includes(selectedDept.toLowerCase()));

  const handleApplyClick = (jobTitle) => {
    setApplicationModal({
      isOpen: true,
      jobTitle: jobTitle || 'General Application',
    });
    setFormSubmitted(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setFormSubmitted(true);
    }, 700);
  };

  return (
    <>
      <Helmet>
        <title>Careers at NEXZIVO | Build What’s Next</title>
        <meta
          name="description"
          content="Explore high-impact career opportunities at NEXZIVO. Join our passionate team of developers, designers, and innovators building digital products that matter."
        />
      </Helmet>

      {/* ───────────────────────────────────────────────────────────
          1. HERO SECTION
          ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-white text-[var(--color-text-body)] pt-32 pb-20 lg:pt-40 lg:pb-28 border-b border-[var(--color-muted-border)]">
        {/* Subtle decorative background gradients */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full bg-[var(--color-green-light)]/60 blur-3xl" />
          <div className="absolute bottom-0 -left-32 h-[400px] w-[400px] rounded-full bg-[var(--color-lime)]/15 blur-3xl" />
          <div
            className="absolute inset-0 opacity-[0.3]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(39,100,245,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(39,100,245,0.04) 1px, transparent 1px)',
              backgroundSize: '48px 48px',
            }}
          />
        </div>

        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
            <motion.div
              initial={reducedMotion ? {} : { opacity: 0, y: 12 }}
              animate={reducedMotion ? {} : { opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--color-green-light)] text-[var(--color-green)] border border-[var(--color-green)]/20 text-xs font-bold uppercase tracking-[0.2em]">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-green)]" />
                CAREERS AT NEXZIVO
              </span>
            </motion.div>

            <motion.h1
              initial={reducedMotion ? {} : { opacity: 0, y: 16 }}
              animate={reducedMotion ? {} : { opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[var(--color-deep-green)] leading-[1.12]"
            >
              Do the Best Work of Your Career.{' '}
              <span className="text-[var(--color-green)]">
                Build What’s Next.
              </span>
            </motion.h1>

            <motion.p
              initial={reducedMotion ? {} : { opacity: 0, y: 16 }}
              animate={reducedMotion ? {} : { opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-[var(--color-text-muted)] leading-relaxed"
            >
              We are a team of curious problem-solvers, engineers, and creators. At NEXZIVO, you won’t just write code or make mockups — you will shape products that empower real businesses.
            </motion.p>

            <motion.div
              initial={reducedMotion ? {} : { opacity: 0, y: 16 }}
              animate={reducedMotion ? {} : { opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center justify-center gap-4 pt-2"
            >
              <a href="#open-positions">
                <Button variant="primary" size="lg" iconRight={<Briefcase size={18} />}>
                  View Open Roles ({jobOpenings.length})
                </Button>
              </a>
              <Button
                variant="outline"
                size="lg"
                onClick={() => handleApplyClick('General Talent Pool')}
                iconRight={<Send size={16} />}
              >
                Send Open Application
              </Button>
            </motion.div>

            {/* Quick Metrics Bar */}
            <motion.div
              initial={reducedMotion ? {} : { opacity: 0, y: 16 }}
              animate={reducedMotion ? {} : { opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-10 mt-6 border-t border-[var(--color-muted-border)] w-full max-w-2xl"
            >
              <div className="flex flex-col items-center">
                <span className="text-2xl sm:text-3xl font-bold text-[var(--color-deep-green)]">100%</span>
                <span className="text-xs text-[var(--color-text-muted)] mt-1 font-medium">Collaborative Team</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-2xl sm:text-3xl font-bold text-[var(--color-deep-green)]">Flexible</span>
                <span className="text-xs text-[var(--color-text-muted)] mt-1 font-medium">Work Environment</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-2xl sm:text-3xl font-bold text-[var(--color-deep-green)]">High</span>
                <span className="text-xs text-[var(--color-text-muted)] mt-1 font-medium">Impact Ownership</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-2xl sm:text-3xl font-bold text-[var(--color-deep-green)]">Zero</span>
                <span className="text-xs text-[var(--color-text-muted)] mt-1 font-medium">Micromanagement</span>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* ───────────────────────────────────────────────────────────
          2. CULTURE & VALUES
          ─────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-[var(--color-off-white)] border-b border-[var(--color-muted-border)]">
        <Container>
          <SectionReveal>
            <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-green)] block mb-2">
                LIFE AT NEXZIVO
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-deep-green)]">
                Why You’ll Love Working Here
              </h2>
              <p className="mt-2 text-sm sm:text-base text-[var(--color-text-muted)]">
                We believe exceptional work happens when talented individuals are trusted, supported, and given room to innovate.
              </p>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {perks.map((perk, i) => {
              const Icon = perk.icon;
              return (
                <SectionReveal key={perk.title} delay={i * 0.08}>
                  <div className="h-full flex flex-col p-8 rounded-2xl bg-white border border-[var(--color-muted-border)] shadow-xs hover:shadow-md hover:border-[var(--color-green)]/40 transition-all duration-300">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-green-light)] text-[var(--color-green)] mb-5">
                      <Icon size={24} />
                    </span>
                    <h3 className="text-xl font-bold text-[var(--color-deep-green)] mb-3">
                      {perk.title}
                    </h3>
                    <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
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
          3. OPEN ROLES ACCORDION / LIST
          ─────────────────────────────────────────────────────────── */}
      <section id="open-positions" className="py-16 sm:py-24 bg-white border-b border-[var(--color-muted-border)] scroll-mt-20">
        <Container>
          <SectionReveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-green)] block mb-2">
                  JOIN OUR ROSTER
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-deep-green)]">
                  Current Open Positions
                </h2>
                <p className="mt-2 text-sm sm:text-base text-[var(--color-text-muted)]">
                  Find the role that matches your skills, passion, and ambition.
                </p>
              </div>

              {/* Department Filter Chips */}
              <div className="flex flex-wrap items-center gap-2">
                {departments.map((dept) => (
                  <button
                    key={dept}
                    onClick={() => setSelectedDept(dept)}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                      selectedDept === dept
                        ? 'bg-[var(--color-deep-green)] text-white shadow-sm'
                        : 'bg-[var(--color-off-white)] border border-[var(--color-muted-border)] text-[var(--color-text-muted)] hover:text-[var(--color-deep-green)] hover:border-[var(--color-green)]'
                    }`}
                  >
                    {dept}
                  </button>
                ))}
              </div>
            </div>
          </SectionReveal>

          {/* Job Listings */}
          <div className="flex flex-col gap-4">
            {filteredJobs.length === 0 ? (
              <div className="p-12 text-center bg-[var(--color-off-white)] rounded-2xl border border-[var(--color-muted-border)]">
                <p className="text-base text-[var(--color-text-muted)] font-medium">
                  No positions currently matching this category.
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="mt-4"
                  onClick={() => setSelectedDept('All')}
                >
                  Clear Filter
                </Button>
              </div>
            ) : (
              filteredJobs.map((job) => {
                const isExpanded = expandedJobId === job.id;
                return (
                  <div
                    key={job.id}
                    className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                      isExpanded
                        ? 'border-[var(--color-green)] bg-[var(--color-off-white)]/50 shadow-md ring-1 ring-[var(--color-green)]/20'
                        : 'border-[var(--color-muted-border)] bg-white hover:border-[var(--color-green)]/50 hover:shadow-xs'
                    }`}
                  >
                    {/* Job Header Bar */}
                    <div
                      className="p-6 sm:p-7 flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer select-none"
                      onClick={() => setExpandedJobId(isExpanded ? null : job.id)}
                    >
                      <div className="flex flex-col gap-2">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="px-2.5 py-0.5 rounded-md bg-[var(--color-green-light)] text-[var(--color-green)] text-xs font-semibold">
                            {job.department}
                          </span>
                          <span className="px-2.5 py-0.5 rounded-md bg-white border border-[var(--color-muted-border)] text-[var(--color-text-muted)] text-xs font-medium">
                            {job.type}
                          </span>
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold text-[var(--color-deep-green)]">
                          {job.title}
                        </h3>
                        <div className="flex flex-wrap items-center gap-4 text-xs text-[var(--color-text-muted)]">
                          <span className="flex items-center gap-1.5">
                            <MapPin size={14} className="text-[var(--color-green)]" />
                            {job.location}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <Clock size={14} className="text-[var(--color-green)]" />
                            Exp: {job.experience}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 pt-2 md:pt-0">
                        <Button
                          variant="primary"
                          size="sm"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleApplyClick(job.title);
                          }}
                        >
                          Apply Now
                        </Button>
                        <button
                          type="button"
                          className="h-10 w-10 rounded-xl bg-white border border-[var(--color-muted-border)] flex items-center justify-center text-[var(--color-text-muted)] hover:text-[var(--color-deep-green)] transition-colors"
                          aria-label={isExpanded ? 'Collapse role details' : 'Expand role details'}
                        >
                          {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                        </button>
                      </div>
                    </div>

                    {/* Collapsible Details */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={reducedMotion ? {} : { height: 0, opacity: 0 }}
                          animate={reducedMotion ? {} : { height: 'auto', opacity: 1 }}
                          exit={reducedMotion ? {} : { height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="px-6 pb-7 sm:px-7 sm:pb-8 pt-2 border-t border-[var(--color-muted-border)]/60 text-sm"
                        >
                          <p className="text-[var(--color-text-muted)] text-base leading-relaxed mb-6">
                            {job.description}
                          </p>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                            <div>
                              <h4 className="font-bold text-[var(--color-deep-green)] uppercase text-xs tracking-wider mb-3">
                                Key Responsibilities
                              </h4>
                              <ul className="flex flex-col gap-2.5">
                                {job.responsibilities.map((resp, i) => (
                                  <li key={i} className="flex items-start gap-2.5 text-[var(--color-text-body)]">
                                    <CheckCircle2 size={16} className="text-[var(--color-green)] shrink-0 mt-0.5" />
                                    <span>{resp}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div>
                              <h4 className="font-bold text-[var(--color-deep-green)] uppercase text-xs tracking-wider mb-3">
                                What We Look For
                              </h4>
                              <ul className="flex flex-col gap-2.5">
                                {job.requirements.map((req, i) => (
                                  <li key={i} className="flex items-start gap-2.5 text-[var(--color-text-body)]">
                                    <Sparkles size={16} className="text-[var(--color-lime)] shrink-0 mt-0.5" />
                                    <span>{req}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>

                          <div className="flex items-center gap-4 pt-4 border-t border-[var(--color-muted-border)]">
                            <Button
                              variant="primary"
                              size="md"
                              onClick={() => handleApplyClick(job.title)}
                              iconRight={<ArrowRight size={16} />}
                            >
                              Apply for {job.title}
                            </Button>
                            <span className="text-xs text-[var(--color-text-muted)]">
                              Questions? Reach us at <a href={`mailto:${siteConfig.contact.email}`} className="text-[var(--color-green)] underline">careers@nexzivo.com</a>
                            </span>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })
            )}
          </div>
        </Container>
      </section>

      {/* ───────────────────────────────────────────────────────────
          4. HIRING PROCESS (Straightforward, transparent)
          ─────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-[var(--color-off-white)] border-b border-[var(--color-muted-border)]">
        <Container>
          <SectionReveal>
            <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-green)] block mb-2">
                TRANSPARENCY FIRST
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-deep-green)]">
                Our Hiring Process
              </h2>
              <p className="mt-2 text-sm sm:text-base text-[var(--color-text-muted)]">
                Simple, conversational, and respectful of your time. No tedious 6-round marathons.
              </p>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {hiringSteps.map((step, idx) => (
              <SectionReveal key={step.step} delay={idx * 0.1}>
                <div className="h-full p-6 sm:p-7 rounded-2xl bg-white border border-[var(--color-muted-border)] flex flex-col justify-between shadow-xs">
                  <div>
                    <span className="font-mono text-3xl font-extrabold text-[var(--color-green)] block mb-3">
                      {step.step}
                    </span>
                    <h3 className="text-lg font-bold text-[var(--color-deep-green)] mb-2">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[var(--color-text-muted)] leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ───────────────────────────────────────────────────────────
          5. APPLICATION MODAL / DIALOG
          ─────────────────────────────────────────────────────────── */}
      <AnimatePresence>
        {applicationModal.isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setApplicationModal({ isOpen: false, jobTitle: '' })}
              className="fixed inset-0 bg-black/60 backdrop-blur-xs"
              aria-hidden="true"
            />

            {/* Modal Dialog Card */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 15 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-[var(--color-muted-border)] p-6 sm:p-8 z-10 my-8 text-left max-h-[90vh] overflow-y-auto"
            >
              {formSubmitted ? (
                <div className="py-12 flex flex-col items-center text-center gap-4">
                  <div className="h-16 w-16 rounded-full bg-[var(--color-green-light)] text-[var(--color-green)] flex items-center justify-center">
                    <CheckCircle2 size={36} />
                  </div>
                  <h3 className="text-2xl font-bold text-[var(--color-deep-green)]">
                    Application Received!
                  </h3>
                  <p className="text-sm text-[var(--color-text-muted)] max-w-md">
                    Thank you, <strong>{formData.fullName}</strong>. We have received your application for <strong>{applicationModal.jobTitle}</strong>. Our hiring team will review your profile and reach out within 2-3 business days.
                  </p>
                  <Button
                    variant="primary"
                    className="mt-4"
                    onClick={() => {
                      setApplicationModal({ isOpen: false, jobTitle: '' });
                      setFormSubmitted(false);
                      setFormData({
                        fullName: '',
                        email: '',
                        phone: '',
                        portfolio: '',
                        experience: 'Fresher / Entry-Level',
                        resumeUrl: '',
                        coverNote: '',
                      });
                    }}
                  >
                    Done
                  </Button>
                </div>
              ) : (
                <>
                  <div className="flex items-center justify-between pb-4 border-b border-[var(--color-muted-border)] mb-6">
                    <div>
                      <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[var(--color-green)]">
                        APPLYING FOR
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold text-[var(--color-deep-green)]">
                        {applicationModal.jobTitle}
                      </h3>
                    </div>
                    <button
                      type="button"
                      onClick={() => setApplicationModal({ isOpen: false, jobTitle: '' })}
                      className="text-[var(--color-text-muted)] hover:text-[var(--color-deep-green)] p-1.5 rounded-lg hover:bg-[var(--color-off-white)] transition-colors"
                      aria-label="Close dialog"
                    >
                      ✕
                    </button>
                  </div>

                  <form onSubmit={handleFormSubmit} className="flex flex-col gap-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-semibold text-[var(--color-deep-green)]">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="fullName"
                          required
                          value={formData.fullName}
                          onChange={handleInputChange}
                          placeholder="e.g. Priyanshu Sharma"
                          className="h-11 px-3.5 rounded-xl border border-[var(--color-muted-border)] text-sm focus:border-[var(--color-green)] focus:ring-1 focus:ring-[var(--color-green)] outline-none"
                        />
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-semibold text-[var(--color-deep-green)]">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="priyanshu@example.com"
                          className="h-11 px-3.5 rounded-xl border border-[var(--color-muted-border)] text-sm focus:border-[var(--color-green)] focus:ring-1 focus:ring-[var(--color-green)] outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-semibold text-[var(--color-deep-green)]">
                          Contact / WhatsApp Number <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+91 98765 43210"
                          className="h-11 px-3.5 rounded-xl border border-[var(--color-muted-border)] text-sm focus:border-[var(--color-green)] focus:ring-1 focus:ring-[var(--color-green)] outline-none"
                        />
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-semibold text-[var(--color-deep-green)]">
                          Experience Level
                        </label>
                        <select
                          name="experience"
                          value={formData.experience}
                          onChange={handleInputChange}
                          className="h-11 px-3.5 rounded-xl border border-[var(--color-muted-border)] text-sm focus:border-[var(--color-green)] focus:ring-1 focus:ring-[var(--color-green)] outline-none bg-white"
                        >
                          <option value="Fresher / Entry-Level">Fresher / Entry-Level (0 - 1 yr)</option>
                          <option value="1 - 3 Years">Mid-Level (1 - 3 yrs)</option>
                          <option value="3+ Years">Senior (3+ yrs)</option>
                          <option value="Student Intern">Student / Intern</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-semibold text-[var(--color-deep-green)]">
                          Portfolio / GitHub / LinkedIn URL <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="url"
                          name="portfolio"
                          required
                          value={formData.portfolio}
                          onChange={handleInputChange}
                          placeholder="https://github.com/yourhandle"
                          className="h-11 px-3.5 rounded-xl border border-[var(--color-muted-border)] text-sm focus:border-[var(--color-green)] focus:ring-1 focus:ring-[var(--color-green)] outline-none"
                        />
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-semibold text-[var(--color-deep-green)]">
                          Resume Drive / PDF Link
                        </label>
                        <input
                          type="url"
                          name="resumeUrl"
                          value={formData.resumeUrl}
                          onChange={handleInputChange}
                          placeholder="Google Drive / Dropbox / Notion link"
                          className="h-11 px-3.5 rounded-xl border border-[var(--color-muted-border)] text-sm focus:border-[var(--color-green)] focus:ring-1 focus:ring-[var(--color-green)] outline-none"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold text-[var(--color-deep-green)]">
                        Why are you excited to join NEXZIVO?
                      </label>
                      <textarea
                        name="coverNote"
                        rows={3}
                        value={formData.coverNote}
                        onChange={handleInputChange}
                        placeholder="Tell us briefly about your projects, skills, or what drives you..."
                        className="p-3 rounded-xl border border-[var(--color-muted-border)] text-sm focus:border-[var(--color-green)] focus:ring-1 focus:ring-[var(--color-green)] outline-none resize-none"
                      />
                    </div>

                    <div className="flex items-center justify-end gap-3 pt-4 border-t border-[var(--color-muted-border)] mt-2">
                      <Button
                        type="button"
                        variant="ghost"
                        size="md"
                        onClick={() => setApplicationModal({ isOpen: false, jobTitle: '' })}
                      >
                        Cancel
                      </Button>
                      <Button
                        type="submit"
                        variant="primary"
                        size="md"
                        disabled={submitting}
                        iconRight={<Send size={15} />}
                      >
                        {submitting ? 'Submitting...' : 'Submit Application'}
                      </Button>
                    </div>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ───────────────────────────────────────────────────────────
          6. CLOSING CTA BANNER
          ─────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-[var(--color-deep-green)] text-white relative overflow-hidden">
        {/* Ambient glow */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute top-0 right-1/4 h-80 w-80 rounded-full bg-[var(--color-green)]/30 blur-3xl" />
          <div className="absolute bottom-0 left-1/4 h-80 w-80 rounded-full bg-[var(--color-lime)]/15 blur-3xl" />
        </div>

        <Container className="relative z-10">
          <div className="max-w-2xl mx-auto text-center flex flex-col items-center gap-6">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[var(--color-lime)]/15 border border-[var(--color-lime)]/30 text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-lime)]">
              DON’T SEE A FIT?
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              We Are Always Looking for Exceptional Talent.
            </h2>

            <p className="text-base sm:text-lg text-[var(--color-light-muted)] leading-relaxed">
              If you’re passionate about modern engineering, clean user experience, or brand design, introduce yourself. We’d love to speak with you.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-3">
              <Button
                variant="lime"
                size="lg"
                onClick={() => handleApplyClick('Open / General Application')}
                iconRight={<ArrowRight size={18} />}
              >
                Send General Application
              </Button>
              <Button to="/about" variant="outlineLight" size="lg">
                About NEXZIVO
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
