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
  AlertCircle,
  Loader2,
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

  const [honeypot, setHoneypot] = useState('');

  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'phone') {
      // Allow only numbers and cap at 10 digits
      const digitsOnly = value.replace(/\D/g, '').slice(0, 10);
      setFormData((prev) => ({ ...prev, phone: digitsOnly }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
    if (status.error) {
      setStatus((prev) => ({ ...prev, error: null }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prevent duplicate submissions while in progress
    if (status.submitting) return;

    // Validate required fields
    if (!formData.name?.trim()) {
      setStatus({ submitting: false, submitted: false, error: 'Please enter your name.' });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email?.trim() || !emailRegex.test(formData.email.trim())) {
      setStatus({ submitting: false, submitted: false, error: 'Please enter a valid email address.' });
      return;
    }

    if (formData.phone && formData.phone.length !== 10) {
      setStatus({ submitting: false, submitted: false, error: 'Please enter a valid 10-digit mobile number.' });
      return;
    }

    if (!formData.message?.trim()) {
      setStatus({ submitting: false, submitted: false, error: 'Please enter your project context and goals.' });
      return;
    }

    setStatus({ submitting: true, submitted: false, error: null });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          phone: formData.phone,
          service: formData.service,
          message: formData.message,
          website_hp: honeypot,
        }),
      });

      // Safely parse JSON response to prevent "Unexpected end of JSON input" SyntaxErrors
      let result = null;
      const contentType = response.headers.get('content-type') || '';
      if (contentType.includes('application/json')) {
        try {
          result = await response.json();
        } catch {
          result = null;
        }
      } else {
        const text = await response.text().catch(() => '');
        try {
          result = JSON.parse(text);
        } catch {
          result = null;
        }
      }

      if (!response.ok || !result?.success) {
        const fallbackMsg = response.status === 404
          ? 'Contact API endpoint not found. If running locally, make sure to use npm run dev with the built-in API handler or vercel dev.'
          : 'Unable to send your enquiry. Please try again later.';
        throw new Error(result?.message || fallbackMsg);
      }

      // Success: Clear form inputs and display confirmation
      setStatus({
        submitting: false,
        submitted: true,
        error: null,
      });

      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: 'Website Development',
        message: '',
      });
      setHoneypot('');
    } catch (err) {
      console.error('Contact submission error:', err);
      // On error, preserve entered form data and display helpful feedback
      setStatus({
        submitting: false,
        submitted: false,
        error: err.message || 'Unable to send your enquiry. Please try again later.',
      });
    }
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
      <section className="relative min-h-[calc(100svh-4rem)] sm:min-h-[calc(100svh-5rem)] lg:min-h-[100svh] overflow-hidden bg-[#F7F9FC] text-[#141B2A] pt-20 pb-12 sm:pt-24 sm:pb-16 lg:pt-20 lg:pb-8 flex flex-col justify-center border-b border-[#DFE7F3]">
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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-6 xl:gap-8 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-6 xl:col-span-5 flex flex-col items-start gap-4 sm:gap-5 lg:gap-6 z-20 pr-0 lg:pr-2">
              {/* Eyebrow matching homepage line-dash style */}
              <motion.div {...fadeUp(0.04, 12, 0.45)}>
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#2764F5]">
                  <span className="h-0.5 w-5 rounded-full bg-[#2764F5]" aria-hidden="true" />
                  <span>INITIATE PROJECT</span>
                </span>
              </motion.div>

              {/* Headline with Staggered Entrance Animation */}
              <h1 className="font-heading text-[1.725rem] xs:text-[2rem] sm:text-[2.6rem] md:text-[3.05rem] lg:text-[clamp(2.3rem,2.8vw,3.2rem)] xl:text-[clamp(2.85rem,3.35vw,3.85rem)] font-extrabold tracking-tight leading-[1.14] sm:leading-[1.12] text-[#141B2A] max-w-xl text-left">
                <motion.span className="block" {...fadeUp(0.1, 16, 0.55)}>
                  Let's create something
                </motion.span>
                <motion.span className="block" {...fadeUp(0.18, 16, 0.55)}>
                  <span className="text-[#2764F5]">extraordinary.</span>
                </motion.span>
              </h1>

              {/* Supporting Description */}
              <motion.p
                className="text-[14px] sm:text-[16px] lg:text-[18px] text-[#687386] leading-relaxed max-w-lg font-normal text-left"
                {...fadeUp(0.32, 14, 0.5)}
              >
                Whether you need an ultra-fast custom website, a mobile app, creative graphic design, or a full product software solution, we are ready to collaborate.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-wrap items-center gap-2.5 sm:gap-3.5 pt-0.5 sm:pt-1 w-full xs:w-auto"
                {...fadeUp(0.42, 14, 0.5)}
              >
                <a
                  href="#contact-form"
                  className="w-full xs:w-auto inline-flex items-center justify-center font-medium text-[14px] sm:text-[15.5px] text-white bg-[#2764F5] hover:bg-[#1E52D0] px-5 sm:px-7 py-2.5 sm:py-3.5 rounded-xl shadow-sm hover:shadow transition-all"
                >
                  Fill Project Brief
                </a>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="w-full xs:w-auto inline-flex items-center justify-center font-medium text-[14px] sm:text-[15.5px] text-[#141B2A] hover:text-[#2764F5] px-5 sm:px-7 py-2.5 sm:py-3.5 rounded-xl border border-[#DFE7F3] bg-white hover:bg-[#F8FAFC] transition-all shadow-sm"
                >
                  Direct Email
                </a>
              </motion.div>

              {/* Trust Indicators Pill Strip */}
              <motion.div
                className="flex flex-wrap items-center gap-y-1.5 gap-x-4 pt-3.5 sm:pt-4 border-t border-[#DFE7F3] w-full text-[11px] xs:text-xs font-semibold text-[#141B2A]"
                {...fadeUp(0.52, 10, 0.5)}
              >
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#00D2BA]" />
                  <span>Available for New Projects</span>
                </div>
                <div className="flex items-center gap-2 text-[#687386]">
                  <Clock size={13} className="text-[#2764F5]" />
                  <span>24hr Response Time</span>
                </div>
              </motion.div>
            </div>

            {/* Right Column: Hero Visual Artwork */}
            <div className="lg:col-span-6 xl:col-span-7 w-full flex items-center justify-center lg:justify-end">
              <motion.div
                className="relative w-full max-w-[380px] xs:max-w-[440px] sm:max-w-[540px] lg:max-w-[580px] xl:w-[112%] xl:max-w-none flex items-center justify-center"
                {...showcaseVariant()}
              >
                <img
                  src={contactImg}
                  alt="Start a project collaboration with NEXZIVO"
                  className="w-full h-auto max-h-[280px] xs:max-h-[330px] sm:max-h-[400px] md:max-h-[460px] lg:max-h-[520px] xl:max-h-[640px] object-contain drop-shadow-[0_12px_28px_rgba(16,27,45,0.07)]"
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                />
              </motion.div>
            </div>
          </div>
        </Container>
      </section>

      {/* Main Form & Studio Coordinates Section */}
      <section id="contact-form" className="py-16 sm:py-24 bg-white relative">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left Studio Information Column */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#2864FF] block mb-2">
                  Direct Inquiries
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold text-[#111B36] tracking-tight mb-4">
                  Let’s talk about your next milestone.
                </h2>
                <p className="text-base text-[#526581] mb-8 leading-relaxed">
                  Have a specific scope, an RFP, or just an ambitious early concept? Reach out through our structured brief form or connect directly with our studio leads.
                </p>

                {/* Studio Coordinate Cards */}
                <div className="space-y-4 mb-8">
                  <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-[#DFE7F3] flex items-start gap-4">
                    <div className="h-10 w-10 rounded-xl bg-[#2864FF]/10 text-[#2864FF] flex items-center justify-center shrink-0">
                      <Mail size={18} />
                    </div>
                    <div>
                      <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#526581] mb-0.5">
                        Email Us
                      </div>
                      <a
                        href={`mailto:${siteConfig.contact.email}`}
                        className="text-base font-bold text-[#111B36] hover:text-[#2864FF] transition-colors"
                      >
                        {siteConfig.contact.email}
                      </a>
                    </div>
                  </div>

                  <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-[#DFE7F3] flex items-start gap-4">
                    <div className="h-10 w-10 rounded-xl bg-[#2864FF]/10 text-[#2864FF] flex items-center justify-center shrink-0">
                      <Clock size={18} />
                    </div>
                    <div>
                      <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#526581] mb-0.5">
                        Turnaround Expectation
                      </div>
                      <div className="text-base font-bold text-[#111B36]">
                        Within 24 Hours (Mon – Sat)
                      </div>
                    </div>
                  </div>
                </div>

                {/* Professional Socials */}
                <div className="pt-6 border-t border-[#DFE7F3]">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#526581] block mb-3">
                    Connect With Leadership
                  </span>
                  <div className="flex items-center gap-3">
                    <a
                      href={siteConfig.contact.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-10 w-10 rounded-xl bg-[#F8FAFC] border border-[#DFE7F3] flex items-center justify-center text-[#526581] hover:text-white hover:bg-[#2864FF] hover:border-[#2864FF] transition-all"
                      aria-label="LinkedIn"
                    >
                      <Linkedin size={18} />
                    </a>
                    <a
                      href={siteConfig.contact.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-10 w-10 rounded-xl bg-[#F8FAFC] border border-[#DFE7F3] flex items-center justify-center text-[#526581] hover:text-white hover:bg-[#2864FF] hover:border-[#2864FF] transition-all"
                      aria-label="X / Twitter"
                    >
                      <Twitter size={18} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Security & Confidentiality Tag */}
              <div className="mt-8 pt-6 border-t border-[#DFE7F3] flex items-center gap-3 text-xs text-[#526581]">
                <ShieldCheck size={16} className="text-[#2864FF] shrink-0" />
                <span>All project briefs and intellectual property are kept strictly confidential under mutual NDA.</span>
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
                      Thank You!
                    </h4>
                    <p className="text-sm text-[#526581] max-w-md">
                      Your enquiry has been submitted successfully. We will contact you soon.
                    </p>
                    <Button
                      variant="primary"
                      onClick={() => {
                        setStatus({ submitting: false, submitted: false, error: null });
                      }}
                      className="mt-4"
                    >
                      Send Another Inquiry
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                    {/* Bot Honeypot field */}
                    <div style={{ display: 'none' }} aria-hidden="true">
                      <input
                        type="text"
                        name="website_hp"
                        tabIndex={-1}
                        autoComplete="off"
                        value={honeypot}
                        onChange={(e) => setHoneypot(e.target.value)}
                      />
                    </div>

                    {/* Error Feedback */}
                    {status.error && (
                      <div
                        role="alert"
                        className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm flex items-start gap-3 animate-in fade-in duration-200"
                      >
                        <AlertCircle size={18} className="text-red-500 shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold text-xs uppercase tracking-wider text-red-800">
                            Submission Error
                          </p>
                          <p className="text-xs mt-0.5 text-red-600 leading-relaxed">
                            {status.error}
                          </p>
                        </div>
                      </div>
                    )}

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
                          disabled={status.submitting}
                          className="h-12 px-4 rounded-xl bg-[#F8FAFC] border border-[#DFE7F3] focus:border-[#2864FF] focus:bg-white focus:outline-none text-sm text-[#111B36] transition-colors disabled:opacity-60"
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
                          disabled={status.submitting}
                          className="h-12 px-4 rounded-xl bg-[#F8FAFC] border border-[#DFE7F3] focus:border-[#2864FF] focus:bg-white focus:outline-none text-sm text-[#111B36] transition-colors disabled:opacity-60"
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
                          disabled={status.submitting}
                          className="h-12 px-4 rounded-xl bg-[#F8FAFC] border border-[#DFE7F3] focus:border-[#2864FF] focus:bg-white focus:outline-none text-sm text-[#111B36] transition-colors disabled:opacity-60"
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
                          inputMode="numeric"
                          pattern="[0-9]{10}"
                          maxLength={10}
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="e.g. 9876543210"
                          disabled={status.submitting}
                          className="h-12 px-4 rounded-xl bg-[#F8FAFC] border border-[#DFE7F3] focus:border-[#2864FF] focus:bg-white focus:outline-none text-sm text-[#111B36] transition-colors disabled:opacity-60"
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
                        disabled={status.submitting}
                        className="h-12 px-4 rounded-xl bg-[#F8FAFC] border border-[#DFE7F3] focus:border-[#2864FF] focus:bg-white focus:outline-none text-sm text-[#111B36] transition-colors cursor-pointer disabled:opacity-60"
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
                        disabled={status.submitting}
                        className="p-4 rounded-xl bg-[#F8FAFC] border border-[#DFE7F3] focus:border-[#2864FF] focus:bg-white focus:outline-none text-sm text-[#111B36] transition-colors resize-y disabled:opacity-60"
                      />
                    </div>

                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      disabled={status.submitting}
                      iconRight={
                        status.submitting ? (
                          <Loader2 size={16} className="animate-spin" />
                        ) : (
                          <Send size={16} />
                        )
                      }
                      className="justify-center mt-2 rounded-xl shadow-md hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {status.submitting ? 'Sending your enquiry...' : 'Submit Project Brief'}
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
