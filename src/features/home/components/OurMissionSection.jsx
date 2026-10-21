import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Container } from '@/components/ui/Container';
import { SectionReveal } from '@/components/ui/SectionReveal';
import { useReducedMotionPreference } from '@/hooks/useReducedMotionPreference';
import { Zap, Bot, BarChart3, Target, Compass, Globe2, ShieldCheck, Sparkles } from 'lucide-react';

const missionData = {
  tab: 'mission',
  titleWord: 'Mission',
  tagline: 'Empowering digital innovation with clear direction and measurable outcomes.',
  leftCard: {
    badge: 'MISSION · 2030',
    title: 'To Build Technology That Moves Ideas Forward.',
    description:
      'We aim to transform ideas into practical solutions through thoughtful design, reliable development, and a clear understanding of the problems we are solving. From business platforms to final-year academic projects, we create outcomes that serve real purpose.',
    highlightText:
      'Global Recognition by 2030. We aim to become a globally recognized digital technology and creative development partner.',
  },
  items: [
    {
      icon: Zap,
      title: '40% Faster Digital Adoption',
      description:
        'We strive to help businesses and students achieve rapid, seamless adoption of modern digital technologies.',
    },
    {
      icon: Bot,
      title: 'Secure, Scalable, AI-Driven Solutions',
      description:
        'Our solutions are designed to be secure, scalable, and powered by AI for future-ready performance.',
    },
    {
      icon: BarChart3,
      title: 'Measurable Business Impact',
      description:
        'We focus on delivering solutions that result in tangible, measurable improvements for our clients.',
    },
  ],
};

const visionData = {
  tab: 'vision',
  titleWord: 'Vision',
  tagline: 'Leading the future of human-centered technology and purposeful creative design.',
  leftCard: {
    badge: 'VISION · FUTURE',
    title: 'Shaping a Smarter, More Accessible Digital World.',
    description:
      'We envision a future where digital technology bridges human aspiration with effortless execution. By merging intuitive design systems with high-performance code, we enable businesses, professionals, and students to build what is next with confidence.',
    highlightText:
      'Pioneering practical innovation across web platforms, intelligent applications, and academic mentorship.',
  },
  items: [
    {
      icon: Globe2,
      title: 'Accessible Innovation Everywhere',
      description:
        'Democratizing high-caliber design and modern software engineering for startups, enterprises, and learners alike.',
    },
    {
      icon: ShieldCheck,
      title: 'Clean, Sustainable Engineering',
      description:
        'Crafting maintainable, accessible codebases and human-first user experiences that stand the test of time.',
    },
    {
      icon: Sparkles,
      title: 'Inspiring Technical Confidence',
      description:
        'Fostering deep technical understanding and creative problem solving across every project we touch.',
    },
  ],
};

// Motion variant for container orchestrating children staggered reveals
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.16, // slowly come one by one
      delayChildren: 0.06,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      staggerChildren: 0.06,
      staggerDirection: -1,
      duration: 0.25,
    },
  },
};

// Motion variant for individual boxes (smooth slide up + subtle scale)
const boxVariants = {
  hidden: {
    opacity: 0,
    y: 26,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.65,
      ease: [0.16, 1, 0.3, 1],
    },
  },
  exit: {
    opacity: 0,
    y: -16,
    scale: 0.98,
    transition: {
      duration: 0.25,
      ease: [0.2, 0.8, 0.2, 1],
    },
  },
};

/**
 * OurMissionSection — Automatically switches between Our Mission & Our Vision
 * every 5 seconds with a staggered "one-by-one box" style entrance.
 * The top eyebrow ("OUR HORIZON") and button tab bar have been removed for a clean,
 * distraction-free automated loop.
 */
export function OurMissionSection() {
  const [activeTab, setActiveTab] = useState('mission'); // 'mission' | 'vision'
  const [isPaused, setIsPaused] = useState(false);
  const [progressKey, setProgressKey] = useState(0);
  const reducedMotion = useReducedMotionPreference();

  // 5-second automatic looping interval
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setActiveTab((prev) => (prev === 'mission' ? 'vision' : 'mission'));
      setProgressKey((prev) => prev + 1);
    }, 5000); // 5 seconds loop

    return () => clearInterval(timer);
  }, [isPaused, activeTab]);

  const current = activeTab === 'mission' ? missionData : visionData;

  return (
    <section
      id="our-mission"
      className="py-12 sm:py-16 bg-[var(--color-off-white)] text-[var(--color-text-body)] relative border-t border-[var(--color-muted-border)] overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Our Mission and Vision"
    >
      <Container>
        <SectionReveal>
          {/* Clean Centred Headline with Automated Text Transition */}
          <div className="flex flex-col items-center text-center mb-8 sm:mb-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--color-deep-green)]">
              Our{' '}
              <span className="text-[var(--color-green)] transition-all duration-300">
                {current.titleWord}
              </span>
            </h2>

            <p className="mt-2.5 max-w-2xl text-sm sm:text-base text-[var(--color-text-muted)] min-h-[1.5rem]">
              {current.tagline}
            </p>
          </div>
        </SectionReveal>

        {/* Animated 2-Column Showcase Grid with Staggered "One by One Box" Style */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              variants={reducedMotion ? undefined : containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch"
            >
              {/* Box 1 (Left Feature Card): Appears First */}
              <motion.div
                variants={reducedMotion ? undefined : boxVariants}
                className="lg:col-span-7 flex flex-col justify-between p-5 sm:p-7 rounded-2xl bg-white border border-[var(--color-muted-border)] shadow-[var(--shadow-card)] hover:border-[var(--color-green)]/40 transition-shadow"
              >
                {/* Visual Header Banner */}
                <div className="relative h-48 sm:h-56 w-full rounded-xl overflow-hidden bg-gradient-to-br from-[var(--color-deep-green)] via-[#15342A] to-[var(--color-deep-green-dark)] p-5 text-white flex flex-col justify-between">
                  <div
                    className="absolute inset-0 opacity-[0.12]"
                    style={{
                      backgroundImage:
                        'linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)',
                      backgroundSize: '24px 24px',
                    }}
                  />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-56 w-56 rounded-full bg-[var(--color-green)]/35 blur-2xl pointer-events-none" />

                  {/* Top Row: Badge & Icon */}
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase bg-white/10 text-[var(--color-lime)] border border-white/15 backdrop-blur-xs">
                      {current.leftCard.badge}
                    </span>
                    <span className="h-7 w-7 rounded-full bg-white/10 flex items-center justify-center text-[var(--color-lime)] border border-white/15">
                      {activeTab === 'mission' ? <Target size={14} /> : <Compass size={14} />}
                    </span>
                  </div>

                  {/* Center Emblem graphic */}
                  <div className="relative z-10 flex flex-col items-center justify-center text-center my-auto">
                    <div className="relative flex items-center justify-center h-22 w-22 rounded-full border-2 border-white/20 bg-white/5 backdrop-blur-xs shadow-inner">
                      <div className="h-16 w-16 rounded-full border border-[var(--color-lime)]/40 flex items-center justify-center text-center font-heading font-extrabold text-xs uppercase tracking-widest text-[var(--color-lime)]">
                        {activeTab === 'mission' ? 'MISSION' : 'VISION'}
                      </div>

                      <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 h-5 w-5 rounded-full bg-[var(--color-deep-green)] border border-white/40 flex items-center justify-center text-[9px]">
                        <Zap size={10} className="text-[var(--color-lime)]" />
                      </div>
                      <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 h-5 w-5 rounded-full bg-[var(--color-deep-green)] border border-white/40 flex items-center justify-center text-[9px]">
                        <Target size={10} className="text-[var(--color-lime)]" />
                      </div>
                      <div className="absolute top-1/2 -left-1.5 -translate-y-1/2 h-5 w-5 rounded-full bg-[var(--color-deep-green)] border border-white/40 flex items-center justify-center text-[9px]">
                        <Bot size={10} className="text-[var(--color-lime)]" />
                      </div>
                      <div className="absolute top-1/2 -right-1.5 -translate-y-1/2 h-5 w-5 rounded-full bg-[var(--color-deep-green)] border border-white/40 flex items-center justify-center text-[9px]">
                        <BarChart3 size={10} className="text-[var(--color-lime)]" />
                      </div>
                    </div>
                  </div>

                  <div className="relative z-10 flex items-center justify-center">
                    <span className="text-[11px] font-semibold tracking-wide text-[var(--color-light-muted)]">
                      NEXZIVO Strategic Roadmap
                    </span>
                  </div>
                </div>

                {/* Content description */}
                <div className="pt-4 flex flex-col gap-2">
                  <h3 className="text-lg sm:text-xl font-bold text-[var(--color-deep-green)] leading-snug">
                    {current.leftCard.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[var(--color-text-body)] leading-relaxed">
                    {current.leftCard.description}
                  </p>
                </div>
              </motion.div>

              {/* Right Column: Boxes 2, 3, 4 Appear sequentially one after another */}
              <div className="lg:col-span-5 flex flex-col justify-between gap-3 sm:gap-3.5">
                {current.items.map((item) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.title}
                      variants={reducedMotion ? undefined : boxVariants}
                      whileHover={{ scale: 1.015, y: -2 }}
                      transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                      className="flex items-start gap-3.5 p-4 sm:p-5 rounded-2xl bg-white border border-[var(--color-muted-border)] shadow-[var(--shadow-card)] hover:border-[var(--color-green)]/60 hover:shadow-md transition-colors flex-1"
                    >
                      <span className="shrink-0 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--color-green-light)] border border-[var(--color-green)]/20 text-[var(--color-green)] mt-0.5 shadow-xs">
                        <Icon size={18} aria-hidden="true" />
                      </span>

                      <div className="flex flex-col gap-1">
                        <h4 className="text-sm sm:text-base font-bold text-[var(--color-green)] leading-snug">
                          {item.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-[var(--color-text-muted)] leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Minimal Subtle 5-Second Looping Progress Indicator */}
        <div className="flex flex-col items-center justify-center gap-1.5 mt-6" aria-hidden="true">
          <div className="flex items-center gap-2">
            <span
              className={`h-1.5 rounded-full transition-all duration-300 ${
                activeTab === 'mission' ? 'w-8 bg-[var(--color-green)]' : 'w-2 bg-[var(--color-muted-border)]'
              }`}
            />
            <span
              className={`h-1.5 rounded-full transition-all duration-300 ${
                activeTab === 'vision' ? 'w-8 bg-[var(--color-green)]' : 'w-2 bg-[var(--color-muted-border)]'
              }`}
            />
          </div>

          {!isPaused && (
            <div className="w-20 h-0.5 bg-[var(--color-muted-border)] rounded-full overflow-hidden opacity-50">
              <motion.div
                key={progressKey}
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 5, ease: 'linear' }}
                className="h-full bg-[var(--color-green)]"
              />
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
