import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import {
  Mail,
  Linkedin,
  Twitter,
  Clock,
  ShieldCheck,
  Send,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { siteConfig } from '@/config/site';
import { useReducedMotionPreference } from '@/hooks/useReducedMotionPreference';
import contactImg from '@/assets/contact.png';

const EASE_OUT_EXPO = [0.22, 1, 0.36, 1];

export function ContactPage() {
  const reducedMotion = useReducedMotionPreference();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: 'Website Development',
    message: '',
  });

  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: null });

    setTimeout(() => {
      setStatus({
        submitting: false,
        submitted: true,
        error: null,
      });
    }, 600);
  };

  // Coordinated entrance animation variants matching homepage hero
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

  const bgShapeVariant = (delay = 0) => {
    if (reducedMotion) {
      return {
        initial: { opacity: 1 },
        animate: { opacity: 1 },
      };
    }
    return {
      initial: { opacity: 0, scale: 0.98 },
      animate: { opacity: 1, scale: 1 },
      transition: { duration: 0.9, delay, ease: EASE_OUT_EXPO },
    };
  };

  return (
    <div className="bg-white min-h-screen text-[#526581]">
      <Helmet>
        <title>Start a Project — {siteConfig.name} Studio</title>
        <meta
          name="description"
          content="Start a conversation with NEXZIVO creative and technical leads. We build distinctive websites, mobile apps, UI/UX systems, posters, and custom software."
        />
      </Helmet>

      {/* Hero Header with Homepage Hero Layout and Animation */}
      <section className="relative overflow-hidden bg-[#F7F9FC] text-[#141B2A] pt-28 pb-14 sm:pt-32 sm:pb-16 lg:pt-36 lg:pb-20 xl:pb-24 border-b border-[#DFE7F3]">
        {/* Soft atmospheric gradient wash behind illustration */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          <motion.div
            {...bgShapeVariant(0)}
            className="absolute -top-32 right-[-5%] h-[620px] w-[620px] lg:h-[700px] lg:w-[700px] rounded-full bg-gradient-to-br from-[#2764F5]/7 via-[#35C5E8]/5 to-transparent blur-3xl"
          />
          <motion.div
            {...bgShapeVariant(0.1)}
            className="absolute top-1/4 left-[-10%] h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-[#35C5E8]/6 via-[#2764F5]/4 to-transparent blur-3xl"
          />
        </div>

        <Container className="relative z-10 max-w-[1440px] xl:max-w-[1540px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 xl:gap-8 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-6 xl:col-span-5 flex flex-col items-start gap-5 sm:gap-6 z-20 pr-0 lg:pr-2">
              {/* Eyebrow matching homepage line-dash style */}
              <motion.div {...fadeUp(0.04, 12, 0.45)}>
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#2764F5]">
                  <span className="h-0.5 w-5 rounded-full bg-[#2764F5]" aria-hidden="true" />
                  <span>INITIATE PROJECT</span>
                </span>
              </motion.div>

              {/* Headline with Staggered Entrance Animation */}
              <h1 className="font-heading text-[2.25rem] sm:text-[2.85rem] md:text-[3.3rem] lg:text-[clamp(2.35rem,2.8vw,3.25rem)] xl:text-[clamp(2.75rem,3.2vw,3.65rem)] font-extrabold tracking-tight leading-[1.12] text-[#141B2A] max-w-xl">
                <motion.span className="block" {...fadeUp(0.1, 16, 0.55)}>
                  Let's create something
                </motion.span>
                <motion.span className="block" {...fadeUp(0.18, 16, 0.55)}>
                  <span className="text-[#2764F5]">extraordinary.</span>
                </motion.span>
              </h1>

              {/* Supporting Description */}
              <motion.p
                className="text-[15px] sm:text-[16.5px] lg:text-[17px] text-[#687386] leading-relaxed max-w-lg font-normal"
                {...fadeUp(0.32, 14, 0.5)}
              >
                Whether you need an ultra-fast custom website, a mobile app, creative graphic design, or a full product software solution, we are ready to collaborate.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-wrap items-center gap-3.5 sm:gap-4 pt-1"
                {...fadeUp(0.42, 14, 0.5)}
              >
                <a
                  href="#contact-form"
                  className="inline-flex items-center justify-center gap-2 font-medium text-[15px] sm:text-[15.5px] text-white bg-[#2864FF] hover:bg-[#1a4acc] px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl shadow-sm hover:shadow transition-all"
                >
                  Send Inquiry Brief
                  <ArrowRight size={17} />
                </a>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="inline-flex items-center justify-center font-medium text-[15px] sm:text-[15.5px] text-[#111B36] hover:text-[#2864FF] px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl border border-[#DFE7F3] bg-white hover:bg-[#F5F9FF] transition-all shadow-sm"
                >
                  Email Directly
                </a>
              </motion.div>
            </div>

            {/* Right Hero Image Showcase with Homepage Animation */}
            <div className="lg:col-span-6 xl:col-span-7 w-full flex items-center justify-center lg:justify-end z-10">
              <motion.div
                className="relative w-full max-w-[540px] lg:max-w-[600px] flex items-center justify-center lg:justify-end"
                {...showcaseVariant()}
              >
                <img
                  src={contactImg}
                  alt="NEXZIVO Studio Contact Showcase — Let's talk and build something extraordinary"
                  className="w-full h-auto max-h-[360px] sm:max-h-[420px] md:max-h-[460px] lg:max-h-[500px] xl:max-h-[540px] object-contain drop-shadow-[0_16px_36px_rgba(16,27,45,0.07)]"
                  loading="eager"
                  decoding="async"
                />
              </motion.div>
            </div>
          </div>
        </Container>
      </section>

      {/* Contact Content & Form with Refined Architectural Background */}
      <section id="contact-form" className="relative bg-[#FAFBFD] py-20 lg:py-28 overflow-hidden">
        {/* Architectural Studio Atmosphere & Background Design Layers */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          {/* Subtle Architectural / Digital Studio Precision Grid Pattern */}
          <svg
            className="absolute inset-0 w-full h-full text-[#2764F5]/[0.03]"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern id="contact-studio-grid" width="48" height="48" patternUnits="userSpaceOnUse">
                <path d="M 48 0 L 0 0 0 48" fill="none" stroke="currentColor" strokeWidth="1" />
                <circle cx="0" cy="0" r="1.5" fill="currentColor" opacity="0.6" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#contact-studio-grid)" />
          </svg>

          {/* Soft Radial Ambient Vignettes */}
          <div className="absolute -top-32 -left-32 h-[520px] w-[520px] rounded-full bg-gradient-to-br from-[#2764F5]/6 via-[#35C5E8]/4 to-transparent blur-3xl" />
          <div className="absolute -bottom-36 -right-36 h-[560px] w-[560px] rounded-full bg-gradient-to-tl from-[#35C5E8]/6 via-[#2764F5]/4 to-transparent blur-3xl" />

          {/* Dynamic Studio Wave Ribbon behind the form */}
          <svg
            className="absolute top-20 -right-20 w-[560px] h-[560px] text-[#2764F5]/[0.035]"
            viewBox="0 0 600 600"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M 50 150 C 200 80, 350 320, 550 220"
              stroke="currentColor"
              strokeWidth="28"
              strokeLinecap="round"
            />
            <path
              d="M 80 200 C 220 140, 370 380, 580 270"
              stroke="currentColor"
              strokeWidth="4"
              strokeDasharray="12 12"
              strokeLinecap="round"
            />
          </svg>
        </div>

        <Container className="relative z-10 max-w-[1440px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Direct Contact Info */}
            <div className="lg:col-span-5 flex flex-col gap-8">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#2764F5] mb-3">
                  <span className="h-0.5 w-5 rounded-full bg-[#2764F5]" aria-hidden="true" />
                  <span>STUDIO INQUIRIES</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#111B36] mb-4">
                  Direct lead designer &amp; engineer access
                </h2>
                <p className="text-base text-[#526581] leading-relaxed mb-6">
                  No junior account managers. You speak directly with the creative directors and developers who build the work.
                </p>
              </div>

              {/* Contact Channels */}
              <div className="flex flex-col gap-4">
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-[#DFE7F3] shadow-sm hover:border-[#2864FF]/45 hover:shadow-md transition-all group"
                >
                  <span className="h-12 w-12 rounded-xl bg-[#F5F9FF] border border-[#DFE7F3] text-[#2864FF] flex items-center justify-center shrink-0 group-hover:bg-[#2864FF] group-hover:text-white transition-colors">
                    <Mail size={20} />
                  </span>
                  <div>
                    <div className="text-[11px] font-mono uppercase tracking-wider text-[#526581]">
                      Direct Electronic Mail
                    </div>
                    <div className="text-base font-bold text-[#111B36] group-hover:text-[#2864FF] transition-colors">
                      {siteConfig.contact.email}
                    </div>
                  </div>
                </a>

                <div className="grid grid-cols-2 gap-4">
                  <a
                    href={siteConfig.contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 rounded-xl bg-white border border-[#DFE7F3] shadow-sm hover:border-[#2864FF]/45 hover:shadow-sm transition-all text-[#526581] hover:text-[#2864FF]"
                  >
                    <Linkedin size={18} className="text-[#2864FF]" />
                    <span className="text-sm font-semibold text-[#111B36]">LinkedIn</span>
                  </a>
                  <a
                    href={siteConfig.contact.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 rounded-xl bg-white border border-[#DFE7F3] shadow-sm hover:border-[#2864FF]/45 hover:shadow-sm transition-all text-[#526581] hover:text-[#2864FF]"
                  >
                    <Twitter size={18} className="text-[#2864FF]" />
                    <span className="text-sm font-semibold text-[#111B36]">X (Twitter)</span>
                  </a>
                </div>
              </div>

              {/* Guarantees */}
              <div className="p-6 rounded-2xl bg-white border border-[#DFE7F3] shadow-sm mt-2">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-[#F5F9FF] border border-[#DFE7F3] flex items-center justify-center text-[#2864FF] shrink-0">
                    <Clock size={16} />
                  </div>
                  <span className="text-sm font-bold text-[#111B36] font-mono">
                    24-Hour Proposal Turnaround
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#526581] leading-relaxed mb-4">
                  Every inquiry receives an initial creative and architectural estimate within one business day.
                </p>
                <div className="flex items-center gap-2 text-xs text-[#526581] pt-3 border-t border-[#DFE7F3]">
                  <ShieldCheck size={16} className="text-[#2864FF] shrink-0" />
                  <span>NDAs respected before initial creative discussion</span>
                </div>
              </div>
            </div>

            {/* Interactive Enquiry Form */}
            <div className="lg:col-span-7">
              <div className="bg-white p-8 sm:p-12 rounded-3xl border border-[#DFE7F3] shadow-[0_10px_35px_rgba(40,100,255,0.05)]">
                <h3 className="text-2xl font-bold text-[#111B36] mb-2">
                  Project Brief &amp; Scope
                </h3>
                <p className="text-sm text-[#526581] mb-8">
                  Share your requirements and we will prepare a preliminary concept proposal.
                </p>

                {status.submitted ? (
                  <div className="p-8 rounded-2xl bg-[#F5F9FF] border border-[#2864FF]/30 text-[#111B36] flex flex-col items-center text-center gap-4 animate-in fade-in duration-300">
                    <span className="h-16 w-16 rounded-full bg-[#2864FF] text-white flex items-center justify-center font-bold shadow-md">
                      <CheckCircle2 size={32} />
                    </span>
                    <h4 className="text-2xl font-bold text-[#111B36]">
                      Brief Received
                    </h4>
                    <p className="text-sm text-[#526581] max-w-md">
                      Thank you, {formData.name}. We have received your submission regarding <strong>{formData.service}</strong>. A studio lead will follow up with you at <strong>{formData.email}</strong> within 24 hours.
                    </p>
                    <Button
                      variant="primary"
                      onClick={() => {
                        setStatus({ submitting: false, submitted: false, error: null });
                        setFormData({
                          name: '',
                          email: '',
                          company: '',
                          phone: '',
                          service: 'Website Development',
                          message: '',
                        });
                      }}
                      className="mt-4"
                    >
                      Send Another Inquiry
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label htmlFor="name" className="text-xs font-mono font-bold uppercase tracking-wider text-[#111B36]">
                          Your Name <span className="text-[#2864FF]">*</span>
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="e.g. Alex Rivera"
                          className="h-12 px-4 rounded-xl bg-[#F8FAFC] border border-[#DFE7F3] focus:border-[#2864FF] focus:bg-white focus:outline-none text-sm text-[#111B36] transition-colors"
                        />
                      </div>

                      <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="text-xs font-mono font-bold uppercase tracking-wider text-[#111B36]">
                          Email Address <span className="text-[#2864FF]">*</span>
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="alex@studio.com"
                          className="h-12 px-4 rounded-xl bg-[#F8FAFC] border border-[#DFE7F3] focus:border-[#2864FF] focus:bg-white focus:outline-none text-sm text-[#111B36] transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label htmlFor="company" className="text-xs font-mono font-bold uppercase tracking-wider text-[#111B36]">
                          Company / Venture
                        </label>
                        <input
                          id="company"
                          name="company"
                          type="text"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Organization or project name"
                          className="h-12 px-4 rounded-xl bg-[#F8FAFC] border border-[#DFE7F3] focus:border-[#2864FF] focus:bg-white focus:outline-none text-sm text-[#111B36] transition-colors"
                        />
                      </div>

                      <div className="flex flex-col gap-2">
                        <label htmlFor="phone" className="text-xs font-mono font-bold uppercase tracking-wider text-[#111B36]">
                          Mobile Number
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          autoComplete="tel"
                          inputMode="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="e.g. +1 555 123 4567"
                          className="h-12 px-4 rounded-xl bg-[#F8FAFC] border border-[#DFE7F3] focus:border-[#2864FF] focus:bg-white focus:outline-none text-sm text-[#111B36] transition-colors"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="service" className="text-xs font-mono font-bold uppercase tracking-wider text-[#111B36]">
                        Required Studio Service
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="h-12 px-4 rounded-xl bg-[#F8FAFC] border border-[#DFE7F3] focus:border-[#2864FF] focus:bg-white focus:outline-none text-sm text-[#111B36] transition-colors cursor-pointer"
                      >
                        <option value="Website Development">Website Development</option>
                        <option value="Mobile App Development">Mobile App Development</option>
                        <option value="UI/UX Design">UI/UX Design</option>
                        <option value="Poster & Graphic Design">Poster &amp; Graphic Design</option>
                        <option value="Custom Software Development">Custom Software Development</option>
                        <option value="Final Year Project Support">Final Year Project Support</option>
                      </select>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="message" className="text-xs font-mono font-bold uppercase tracking-wider text-[#111B36]">
                        Project Context &amp; Goals <span className="text-[#2864FF]">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        required
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about what you want to build or design, target timeline, and aesthetic direction..."
                        className="p-4 rounded-xl bg-[#F8FAFC] border border-[#DFE7F3] focus:border-[#2864FF] focus:bg-white focus:outline-none text-sm text-[#111B36] transition-colors resize-y"
                      />
                    </div>

                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      disabled={status.submitting}
                      iconRight={<Send size={16} />}
                      className="justify-center mt-2 rounded-xl shadow-md hover:shadow-lg"
                    >
                      {status.submitting ? 'Sending Request...' : 'Submit Project Brief'}
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
