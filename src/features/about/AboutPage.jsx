import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import {
  ArrowRight,
  Target,
  Compass,
  Code2,
  Palette,
  Smartphone,
  Cpu,
  CheckCircle2,
  Users,
  Lightbulb,
  ShieldCheck,
  Zap,
  Linkedin,
  Github,
  Mail,
} from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { SectionReveal } from '@/components/ui/SectionReveal';
import { useReducedMotionPreference } from '@/hooks/useReducedMotionPreference';

// Leadership: Founder & Co-Founder
const founders = [
  {
    name: 'Renga R',
    role: 'Founder & CEO',
    subtitle: 'Vision, Product Strategy & Architecture',
    bio: 'Leads NEXZIVO with a focus on building accessible, high-performance digital products and practical software architectures that solve real industry problems.',
    image: '/team/founder.jpg',
    focusAreas: ['System Architecture', 'Product Strategy', 'Full-Stack Engineering'],
    socials: {
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
      email: 'founder@nexzivo.com',
    },
  },
  {
    name: 'Vikky R',
    role: 'Co-Founder & CEO',
    subtitle: 'Technical Innovation & Engineering',
    bio: 'Drives technical execution, scalable cloud architecture, and modern mobile platforms, ensuring every solution built is fast, reliable, and scalable.',
    image: '/team/vikky.jpg',
    focusAreas: ['Cloud Architecture', 'Mobile Apps & Web', 'Technical Operations'],
    socials: {
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
      email: 'cto@nexzivo.com',
    },
  },
];

// 4 Core Things We Do
const whatWeDoList = [
  {
    icon: Code2,
    title: 'Website Development',
    desc: 'High-speed, responsive websites designed to represent your business and convert visitors into clients.',
    to: '/services/website-development',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    desc: 'Clean, intuitive, and modern user interfaces crafted around real user needs and effortless usability.',
    to: '/services/ui-ux-design',
  },
  {
    icon: Smartphone,
    title: 'Mobile Applications',
    desc: 'Practical iOS and Android mobile apps engineered for fluid performance and everyday convenience.',
    to: '/services/mobile-app-development',
  },
  {
    icon: Cpu,
    title: 'Custom Software & Projects',
    desc: 'Tailored digital tools, admin portals, and structured final-year academic project support.',
    to: '/services/custom-software-solutions',
  },
];

// 3 Key Reasons Clients Choose Us
const whyChooseUs = [
  {
    icon: Users,
    title: 'Client-Centered Partnership',
    desc: 'We speak your language with zero unnecessary jargon. You collaborate directly with the designers and developers building your project.',
  },
  {
    icon: ShieldCheck,
    title: 'Quality & Longevity',
    desc: 'Every line of code and interface element is built cleanly, securely, and structured to grow smoothly as your needs expand.',
  },
  {
    icon: Zap,
    title: 'Fast & Predictable Delivery',
    desc: 'Clear milestones, transparent pricing, and structured progress updates from first concept to final launch.',
  },
];

// Simple 4-Step Working Process
const simpleProcess = [
  { step: '01', title: 'Listen & Plan', desc: 'We understand your goals, audience, and project requirements.' },
  { step: '02', title: 'Design', desc: 'We create clear wireframes and interactive visual prototypes.' },
  { step: '03', title: 'Develop', desc: 'We engineer fast, secure, and modern digital solutions.' },
  { step: '04', title: 'Launch & Support', desc: 'We test thoroughly, deploy cleanly, and help you grow.' },
];

/**
 * AboutPage — Simple, client-focused, clean, and highly attractive About Us page.
 * Distills everything a client wants to know into 5 clear, digestible sections.
 */
export function AboutPage() {
  const reducedMotion = useReducedMotionPreference();

  return (
    <>
      <Helmet>
        <title>About Us | NEXZIVO — Build What’s Next</title>
        <meta
          name="description"
          content="Learn about NEXZIVO — a modern digital technology and design company turning ambitious ideas into simple, beautiful, and high-impact digital solutions."
        />
      </Helmet>

      {/* ───────────────────────────────────────────────────────────
          1. CLEAN HERO SECTION
          High impact, direct, welcoming
          ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-white text-[var(--color-text-body)] pt-32 pb-16 lg:pt-40 lg:pb-24 border-b border-[var(--color-muted-border)]">
        {/* Subtle ambient brand gradient */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full bg-[var(--color-green-light)]/60 blur-3xl" />
          <div className="absolute bottom-0 -left-32 h-[400px] w-[400px] rounded-full bg-[var(--color-lime)]/15 blur-3xl" />
          <div
            className="absolute inset-0 opacity-[0.3]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(16,40,32,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(16,40,32,0.04) 1px, transparent 1px)',
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
                ABOUT NEXZIVO
              </span>
            </motion.div>

            <motion.h1
              initial={reducedMotion ? {} : { opacity: 0, y: 16 }}
              animate={reducedMotion ? {} : { opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[var(--color-deep-green)] leading-[1.12]"
            >
              We Turn Ideas Into{' '}
              <span className="text-[var(--color-green)] underline decoration-[var(--color-lime)] decoration-wavy">
                Digital Reality.
              </span>
            </motion.h1>

            <motion.p
              initial={reducedMotion ? {} : { opacity: 0, y: 16 }}
              animate={reducedMotion ? {} : { opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-[var(--color-text-muted)] leading-relaxed"
            >
              NEXZIVO is a digital technology and design firm. We help businesses, startups, and students build modern websites, intuitive mobile apps, and custom software that solve real problems.
            </motion.p>

            <motion.div
              initial={reducedMotion ? {} : { opacity: 0, y: 16 }}
              animate={reducedMotion ? {} : { opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center justify-center gap-4 pt-2"
            >
              <Button to="/contact" variant="primary" size="lg">
                Let’s Work Together
              </Button>
              <Button to="/services" variant="outline" size="lg" iconRight={<ArrowRight size={16} />}>
                Explore Services
              </Button>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* ───────────────────────────────────────────────────────────
          2. MISSION & VISION (Side-by-side cards, clean & clear)
          ─────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-[var(--color-off-white)] border-b border-[var(--color-muted-border)]">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {/* Our Mission */}
            <SectionReveal>
              <div className="h-full flex flex-col justify-between p-8 sm:p-10 rounded-2xl bg-[var(--color-deep-green)] text-white shadow-lg relative overflow-hidden">
                <div className="relative z-10 flex flex-col gap-4">
                  <div className="flex items-center gap-2.5 text-xs font-mono font-bold uppercase tracking-wider text-[var(--color-lime)]">
                    <Target size={16} />
                    <span>OUR MISSION</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white">
                    Technology with Purpose
                  </h2>
                  <p className="text-sm sm:text-base text-[var(--color-light-muted)] leading-relaxed">
                    To make digital technology more useful, accessible, and reliable. We transform complex challenges into practical, beautiful solutions that help individuals and businesses take their next step with confidence.
                  </p>
                </div>
              </div>
            </SectionReveal>

            {/* Our Vision */}
            <SectionReveal delay={0.15}>
              <div className="h-full flex flex-col justify-between p-8 sm:p-10 rounded-2xl bg-white text-[var(--color-text-body)] border border-[var(--color-muted-border)] shadow-sm">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-2.5 text-xs font-mono font-bold uppercase tracking-wider text-[var(--color-green)]">
                    <Compass size={16} />
                    <span>OUR VISION</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-[var(--color-deep-green)]">
                    Building What’s Next
                  </h2>
                  <p className="text-sm sm:text-base text-[var(--color-text-muted)] leading-relaxed">
                    To be the most trusted technology and creative design partner, recognized for exceptional quality, user-centered innovation, and long-term client success.
                  </p>
                </div>
              </div>
            </SectionReveal>
          </div>
        </Container>
      </section>

      {/* ───────────────────────────────────────────────────────────
          3. WHAT WE DO (4 Simple Cards with direct value)
          ─────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-white border-b border-[var(--color-muted-border)]">
        <Container>
          <SectionReveal>
            <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-green)] block mb-2">
                WHAT WE BUILD
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-deep-green)]">
                Our Core Services
              </h2>
              <p className="mt-2 text-sm sm:text-base text-[var(--color-text-muted)]">
                Everything you need to launch, scale, and establish your digital presence.
              </p>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whatWeDoList.map((item, idx) => {
              const Icon = item.icon;
              return (
                <SectionReveal key={item.title} delay={idx * 0.08}>
                  <div className="group h-full flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-[var(--color-off-white)] border border-[var(--color-muted-border)] hover:border-[var(--color-green)] hover:bg-white hover:shadow-lg transition-all duration-300">
                    <div>
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-green-light)] text-[var(--color-green)] group-hover:bg-[var(--color-deep-green)] group-hover:text-white transition-colors duration-300 mb-5">
                        <Icon size={22} />
                      </span>
                      <h3 className="text-lg sm:text-xl font-bold text-[var(--color-deep-green)] mb-2">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[var(--color-text-muted)] leading-relaxed">
                        {item.desc}
                      </p>
                    </div>

                    <div className="pt-6 mt-4 border-t border-[var(--color-muted-border)]">
                      <Button to={item.to} variant="ghost" size="sm" iconRight={<ArrowRight size={14} />} className="p-0 text-xs font-bold text-[var(--color-green)] hover:bg-transparent">
                        Learn More
                      </Button>
                    </div>
                  </div>
                </SectionReveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ───────────────────────────────────────────────────────────
          4. WHY CLIENTS CHOOSE US (3 Trust Pillars)
          ─────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-[var(--color-off-white)] border-b border-[var(--color-muted-border)]">
        <Container>
          <SectionReveal>
            <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-green)] block mb-2">
                THE NEXZIVO DIFFERENCE
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-deep-green)]">
                Why Work With Us?
              </h2>
              <p className="mt-2 text-sm sm:text-base text-[var(--color-text-muted)]">
                We believe in simple communication, clean code, and solutions that actually deliver value.
              </p>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {whyChooseUs.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <SectionReveal key={pillar.title} delay={i * 0.1}>
                  <div className="h-full flex flex-col p-8 rounded-2xl bg-white border border-[var(--color-muted-border)] shadow-xs hover:shadow-md transition-shadow">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-green-light)] text-[var(--color-green)] mb-5">
                      <Icon size={24} />
                    </span>
                    <h3 className="text-xl font-bold text-[var(--color-deep-green)] mb-3">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </SectionReveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ───────────────────────────────────────────────────────────
          4B. LEADERSHIP & FOUNDERS (Founder & Co-Founder Spotlight)
          Positioned right after 'Why Work With Us' as requested
          ─────────────────────────────────────────────────────────── */}
      <section className="py-10 sm:py-14 bg-white border-b border-[var(--color-muted-border)] relative overflow-hidden">
        {/* Ambient background decoration */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute top-1/2 -left-48 h-96 w-96 rounded-full bg-[var(--color-green-light)]/40 blur-3xl -translate-y-1/2" />
          <div className="absolute top-1/2 -right-48 h-96 w-96 rounded-full bg-[var(--color-lime)]/10 blur-3xl -translate-y-1/2" />
        </div>

        <Container className="relative z-10">
          <SectionReveal>
            <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--color-deep-green)] tracking-tight">
                Meet the Founders
              </h2>
              <p className="mt-2.5 text-base sm:text-lg text-[var(--color-text-muted)] leading-relaxed">
                The innovators and engineers leading NEXZIVO to build high-impact digital solutions for businesses and future engineers.
              </p>
            </div>
          </SectionReveal>

          {/* Shared SVG Gradient Definition for border tracing */}
          <svg width="0" height="0" className="absolute pointer-events-none" aria-hidden="true">
            <defs>
              <linearGradient id="founder-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2764F5" />
                <stop offset="50%" stopColor="#00D2BA" />
                <stop offset="100%" stopColor="#00BFA5" />
              </linearGradient>
            </defs>
          </svg>

          {/* Founders Grid — Premium Modern Cards with Animated Border Trace */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {founders.map((leader, idx) => (
              <SectionReveal key={leader.name} delay={idx * 0.12}>
                <motion.div
                  whileHover={reducedMotion ? {} : { y: -5 }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                  className="founder-trace-card group relative h-full flex flex-col sm:flex-row bg-white rounded-2xl border border-[var(--color-muted-border)] shadow-sm hover:shadow-xl transition-all duration-300 p-6 sm:p-7 overflow-hidden"
                >
                  {/* Perimeter Tracing SVG (Starts top-left, traces entire card clockwise) */}
                  <svg className="founder-trace-svg" aria-hidden="true">
                    <rect
                      x="1"
                      y="1"
                      width="calc(100% - 2px)"
                      height="calc(100% - 2px)"
                      rx="16"
                      ry="16"
                      className="founder-trace-rect"
                    />
                  </svg>

                  {/* Left Column: Portrait & Social Badges */}
                  <div className="flex flex-col items-center sm:items-start flex-shrink-0 sm:mr-6 mb-5 sm:mb-0 relative z-10">
                    <div className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-2xl overflow-hidden ring-4 ring-[var(--color-off-white)] group-hover:ring-[var(--color-green)]/20 shadow-md transition-all duration-300">
                      <img
                        src={leader.image}
                        alt={`${leader.name} - ${leader.role}`}
                        loading="lazy"
                        className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
                      />
                    </div>

                    {/* Social Touchpoints */}
                    <div className="flex items-center gap-2 mt-4">
                      {leader.socials.linkedin && (
                        <a
                          href={leader.socials.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${leader.name} LinkedIn`}
                          className="h-8 w-8 rounded-lg bg-[var(--color-off-white)] border border-[var(--color-muted-border)] flex items-center justify-center text-[var(--color-text-muted)] hover:text-white hover:bg-[var(--color-green)] hover:border-[var(--color-green)] transition-all duration-200"
                        >
                          <Linkedin size={15} />
                        </a>
                      )}
                      {leader.socials.github && (
                        <a
                          href={leader.socials.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${leader.name} GitHub`}
                          className="h-8 w-8 rounded-lg bg-[var(--color-off-white)] border border-[var(--color-muted-border)] flex items-center justify-center text-[var(--color-text-muted)] hover:text-white hover:bg-[var(--color-deep-green)] hover:border-[var(--color-deep-green)] transition-all duration-200"
                        >
                          <Github size={15} />
                        </a>
                      )}
                      {leader.socials.email && (
                        <a
                          href={`mailto:${leader.socials.email}`}
                          aria-label={`Email ${leader.name}`}
                          className="h-8 w-8 rounded-lg bg-[var(--color-off-white)] border border-[var(--color-muted-border)] flex items-center justify-center text-[var(--color-text-muted)] hover:text-[var(--color-deep-green)] hover:bg-[var(--color-lime)] hover:border-[var(--color-lime)] transition-all duration-200"
                        >
                          <Mail size={15} />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Right Column: Founder Details & Skills */}
                  <div className="flex-1 flex flex-col justify-between text-left relative z-10">
                    <div>
                      {/* Role Pill */}
                      <div className="flex items-center justify-between mb-2">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[var(--color-green-light)] text-[var(--color-green)] text-xs font-semibold uppercase tracking-wider">
                          <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-green)]" />
                          {leader.role}
                        </span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold text-[var(--color-deep-green)] tracking-tight">
                        {leader.name}
                      </h3>

                      <p className="text-xs sm:text-sm font-medium text-[var(--color-green)] mt-0.5 mb-3">
                        {leader.subtitle}
                      </p>

                      <p className="text-xs sm:text-sm text-[var(--color-text-muted)] leading-relaxed">
                        {leader.bio}
                      </p>
                    </div>

                    {/* Expertise Highlights */}
                    <div className="pt-4 mt-4 border-t border-[var(--color-muted-border)]">
                      <div className="flex flex-wrap gap-1.5">
                        {leader.focusAreas.map((tag) => (
                          <span
                            key={tag}
                            className="text-[11px] font-medium px-2.5 py-0.5 rounded-md bg-[var(--color-off-white)] border border-[var(--color-muted-border)] text-[var(--color-text-body)]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </SectionReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ───────────────────────────────────────────────────────────
          5. SIMPLE 4-STEP PROCESS (How we get it done)
          ─────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-white border-b border-[var(--color-muted-border)]">
        <Container>
          <SectionReveal>
            <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-green)] block mb-2">
                HOW WE WORK
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-deep-green)]">
                From Idea to Execution
              </h2>
              <p className="mt-2 text-sm sm:text-base text-[var(--color-text-muted)]">
                A straightforward, collaborative process with zero surprises.
              </p>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {simpleProcess.map((proc, idx) => (
              <SectionReveal key={proc.step} delay={idx * 0.1}>
                <div className="h-full p-6 sm:p-7 rounded-2xl bg-[var(--color-off-white)] border border-[var(--color-muted-border)] flex flex-col justify-between">
                  <div>
                    <span className="font-mono text-3xl font-extrabold text-[var(--color-green)] block mb-3">
                      {proc.step}
                    </span>
                    <h3 className="text-lg font-bold text-[var(--color-deep-green)] mb-2">
                      {proc.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[var(--color-text-muted)] leading-relaxed">
                      {proc.desc}
                    </p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ───────────────────────────────────────────────────────────
          6. HIGH-IMPACT CLOSING CALL TO ACTION
          Deep green canvas, bold invite
          ─────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-[var(--color-deep-green)] text-white relative overflow-hidden">
        {/* Glow */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute top-0 right-1/4 h-80 w-80 rounded-full bg-[var(--color-green)]/30 blur-3xl" />
          <div className="absolute bottom-0 left-1/4 h-80 w-80 rounded-full bg-[var(--color-lime)]/15 blur-3xl" />
        </div>

        <Container className="relative z-10">
          <div className="max-w-2xl mx-auto text-center flex flex-col items-center gap-6">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[var(--color-lime)]/15 border border-[var(--color-lime)]/30 text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-lime)]">
              READY TO BUILD?
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              Have an Idea? Let’s Make It Real.
            </h2>

            <p className="text-base sm:text-lg text-[var(--color-light-muted)] leading-relaxed">
              Whether you need a new website, a custom mobile app, or guidance on an academic software project, we’re ready to help.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-3">
              <Button to="/contact" variant="lime" size="lg" iconRight={<ArrowRight size={18} />}>
                Start a Project
              </Button>
              <Button to="/services" variant="outlineLight" size="lg">
                View All Services
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
