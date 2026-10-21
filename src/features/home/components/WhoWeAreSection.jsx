import { motion } from 'motion/react';
import { Container } from '@/components/ui/Container';
import { SectionReveal } from '@/components/ui/SectionReveal';
import { useReducedMotionPreference } from '@/hooks/useReducedMotionPreference';
import { whoWeAreContent } from '../data/homeContent';
import { Sparkles, Users, Layers, ArrowUpRight, CheckCircle2 } from 'lucide-react';

const whoWeAreCards = [
  {
    number: '01',
    icon: Sparkles,
    badge: 'CREATIVITY & STRATEGY',
    title: 'Transforming Ideas into Digital Solutions',
    description:
      'We bring together creative design, strategic thinking, and modern technology to build websites, mobile applications, and digital experiences that are intuitive, useful, and aligned with real-world needs.',
    points: ['Creative & Strategic Direction', 'Intuitive User Experiences', 'Modern Scalable Technology'],
  },
  {
    number: '02',
    icon: Users,
    badge: 'COMMUNITY & CLIENTS',
    title: 'Supporting Businesses & Academic Learners',
    description:
      'From helping startups and established businesses establish a strong online presence to supporting students in bringing their final-year project ideas to life, we approach every challenge with curiosity and commitment.',
    points: ['Business & Startup Growth', 'Academic Final-Year Guidance', 'Direct Hands-On Collaboration'],
  },
  {
    number: '03',
    icon: Layers,
    badge: 'PURPOSE & IMPACT',
    title: 'Purpose-Driven Practical Technology',
    description:
      'Technology should do more than look impressive. We design and build solutions that actively solve problems, simplify complexity, streamline day-to-day operations, and create sustainable opportunities for growth.',
    points: ['Meaningful Problem Solving', 'Simplified User Journeys', 'Sustainable Long-Term Growth'],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.1,
    },
  },
};

const boxVariants = {
  hidden: {
    opacity: 0,
    y: 28,
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
};

/**
 * WhoWeAreSection — Centred prominent heading and 3 structured interactive box-style
 * cards with staggered entrance animations, replacing long wall-of-text paragraphs.
 */
export function WhoWeAreSection() {
  const reducedMotion = useReducedMotionPreference();

  return (
    <section
      id="who-we-are"
      className="py-12 sm:py-16 bg-white text-[var(--color-text-body)] relative"
    >
      <Container>
        <SectionReveal>
          <div className="flex flex-col items-center text-center mb-10 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--color-deep-green)]">
              Who We <span className="text-[var(--color-green)]">Are</span>
            </h2>

            <p className="mt-3 max-w-2xl text-base sm:text-lg text-[var(--color-text-muted)]">
              {whoWeAreContent.heading}
            </p>
          </div>
        </SectionReveal>

        {/* 3 Box-Style Cards with Staggered Entrance Animation */}
        <motion.div
          className="grid gap-6 md:grid-cols-3 items-stretch"
          variants={reducedMotion ? undefined : containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {whoWeAreCards.map((card) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.number}
                variants={reducedMotion ? undefined : boxVariants}
                whileHover={{ y: -4 }}
                transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                className="group relative flex flex-col justify-between p-7 sm:p-8 rounded-2xl bg-[var(--color-off-white)] border border-[var(--color-muted-border)] hover:border-[var(--color-green)] hover:shadow-xl transition-all duration-300"
              >
                <div>
                  {/* Top Bar with Number and Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-2xl font-bold text-[var(--color-text-muted)]/40 group-hover:text-[var(--color-green)] transition-colors">
                      {card.number}
                    </span>

                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white border border-[var(--color-muted-border)] text-[var(--color-green)] group-hover:bg-[var(--color-deep-green)] group-hover:text-[var(--color-lime)] group-hover:border-[var(--color-deep-green)] transition-all duration-300 shadow-xs">
                      <Icon size={22} aria-hidden="true" />
                    </span>
                  </div>

                  {/* Badge */}
                  <span className="inline-block text-[11px] font-bold uppercase tracking-widest text-[var(--color-green)] mb-2">
                    {card.badge}
                  </span>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-[var(--color-deep-green)] group-hover:text-[var(--color-green)] transition-colors leading-tight mb-3">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm leading-relaxed text-[var(--color-text-muted)] mb-6">
                    {card.description}
                  </p>
                </div>

                {/* Key Bullet Highlights */}
                <div className="pt-5 border-t border-[var(--color-muted-border)] flex flex-col gap-2">
                  {card.points.map((pt) => (
                    <div key={pt} className="flex items-center gap-2 text-xs font-semibold text-[var(--color-deep-green)]">
                      <CheckCircle2 size={13} className="text-[var(--color-green)] shrink-0" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
