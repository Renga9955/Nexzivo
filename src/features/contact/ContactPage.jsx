import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import {
  Mail,
  Linkedin,
  Twitter,
  Clock,
  ShieldCheck,
  Send,
  CheckCircle2,
} from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { siteConfig } from '@/config/site';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
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

  return (
    <>
      <Helmet>
        <title>Start a Project — {siteConfig.name} Studio</title>
        <meta
          name="description"
          content="Start a conversation with NEXZIVO creative and technical leads. We build distinctive websites, posters, and UI/UX systems."
        />
      </Helmet>

      {/* Hero Header */}
      <section className="relative overflow-hidden bg-[#080A0F] text-[#F3F5F9] pt-36 pb-20 lg:pt-44 lg:pb-28 border-b border-[#232B3E]">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          aria-hidden="true"
          style={{
            backgroundImage:
              'linear-gradient(var(--color-accent-soft) 1px, transparent 1px), linear-gradient(90deg, var(--color-accent-soft) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />

        <Container>
          <div className="max-w-3xl">
            <span className="inline-block text-xs font-mono font-bold tracking-widest uppercase text-[var(--color-accent-soft)] mb-4">
              Initiate Project
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.08] mb-6 text-white">
              Let's create something extraordinary.
            </h1>
            <p className="text-lg sm:text-xl text-[#8B95A5] leading-relaxed">
              Whether you need an ultra-fast custom website, an editorial poster series, or a full product UI/UX design system, we are ready to collaborate.
            </p>
          </div>
        </Container>
      </section>

      {/* Contact Content & Form */}
      <section className="section bg-[#080A0F]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Direct Contact Info */}
            <div className="lg:col-span-5 flex flex-col gap-8">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[var(--color-accent-soft)] mb-2 block">
                  Studio Inquiries
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                  Direct lead designer &amp; engineer access
                </h2>
                <p className="text-base text-[#8B95A5] leading-relaxed mb-6">
                  No junior account managers. You speak directly with the creative directors and developers who build the work.
                </p>
              </div>

              {/* Contact Channels */}
              <div className="flex flex-col gap-4">
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="flex items-center gap-4 p-5 rounded-2xl bg-[#0F131C] border border-[#232B3E] shadow-sm hover:border-[var(--color-accent-soft)]/50 transition-all group"
                >
                  <span className="h-12 w-12 rounded-xl bg-[#151A26] border border-[#232B3E] text-[var(--color-accent-soft)] flex items-center justify-center shrink-0 group-hover:bg-[var(--color-accent-strong)] group-hover:text-white transition-colors">
                    <Mail size={20} />
                  </span>
                  <div>
                    <div className="text-[11px] font-mono uppercase tracking-wider text-[#8B95A5]">
                      Direct Electronic Mail
                    </div>
                    <div className="text-base font-bold text-white group-hover:text-[var(--color-accent-soft)] transition-colors">
                      {siteConfig.contact.email}
                    </div>
                  </div>
                </a>

                <div className="grid grid-cols-2 gap-4">
                  <a
                    href={siteConfig.contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 rounded-xl bg-[#0F131C] border border-[#232B3E] shadow-sm hover:border-[var(--color-accent-soft)]/40 transition-all text-[#8B95A5] hover:text-white"
                  >
                    <Linkedin size={18} className="text-[var(--color-accent-soft)]" />
                    <span className="text-sm font-semibold">LinkedIn</span>
                  </a>
                  <a
                    href={siteConfig.contact.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 rounded-xl bg-[#0F131C] border border-[#232B3E] shadow-sm hover:border-[var(--color-accent-soft)]/40 transition-all text-[#8B95A5] hover:text-white"
                  >
                    <Twitter size={18} className="text-[var(--color-accent-soft)]" />
                    <span className="text-sm font-semibold">X (Twitter)</span>
                  </a>
                </div>
              </div>

              {/* Guarantees */}
              <div className="p-6 rounded-2xl bg-[#0F131C] border border-[#232B3E] mt-4">
                <div className="flex items-center gap-3 mb-2">
                  <Clock size={18} className="text-[var(--color-accent-soft)]" />
                  <span className="text-sm font-bold text-white font-mono">
                    24-Hour Proposal Turnaround
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#8B95A5] leading-relaxed mb-4">
                  Every inquiry receives an initial creative and architectural estimate within one business day.
                </p>
                <div className="flex items-center gap-2 text-xs text-[#8B95A5]">
                  <ShieldCheck size={14} className="text-[var(--color-accent-soft)]" />
                  <span>NDAs respected before initial creative discussion</span>
                </div>
              </div>
            </div>

            {/* Interactive Enquiry Form */}
            <div className="lg:col-span-7">
              <div className="bg-[#0F131C] p-8 sm:p-12 rounded-3xl border border-[#232B3E] shadow-xl">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Project Brief &amp; Scope
                </h3>
                <p className="text-sm text-[#8B95A5] mb-8">
                  Share your requirements and we will prepare a preliminary concept proposal.
                </p>

                {status.submitted ? (
                  <div className="p-8 rounded-2xl bg-[#151A26] border border-[var(--color-accent-soft)]/40 text-white flex flex-col items-center text-center gap-4 animate-in fade-in duration-300">
                    <span className="h-16 w-16 rounded-full bg-[var(--color-accent-strong)] text-white flex items-center justify-center font-bold">
                      <CheckCircle2 size={32} />
                    </span>
                    <h4 className="text-2xl font-bold text-white">
                      Brief Received
                    </h4>
                    <p className="text-sm text-[#8B95A5] max-w-md">
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
                        <label htmlFor="name" className="text-xs font-mono font-bold uppercase tracking-wider text-[#F3F5F9]">
                          Your Name <span className="text-[var(--color-accent-soft)]">*</span>
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="e.g. Alex Rivera"
                          className="h-12 px-4 rounded-xl bg-[#080A0F] border border-[#232B3E] focus:border-[var(--color-accent-soft)] focus:outline-none text-sm text-white transition-colors"
                        />
                      </div>

                      <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="text-xs font-mono font-bold uppercase tracking-wider text-[#F3F5F9]">
                          Email Address <span className="text-[var(--color-accent-soft)]">*</span>
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="alex@studio.com"
                          className="h-12 px-4 rounded-xl bg-[#080A0F] border border-[#232B3E] focus:border-[var(--color-accent-soft)] focus:outline-none text-sm text-white transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label htmlFor="company" className="text-xs font-mono font-bold uppercase tracking-wider text-[#F3F5F9]">
                          Company / Venture
                        </label>
                        <input
                          id="company"
                          name="company"
                          type="text"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Organization or project name"
                          className="h-12 px-4 rounded-xl bg-[#080A0F] border border-[#232B3E] focus:border-[var(--color-accent-soft)] focus:outline-none text-sm text-white transition-colors"
                        />
                      </div>

                      <div className="flex flex-col gap-2">
                        <label htmlFor="service" className="text-xs font-mono font-bold uppercase tracking-wider text-[#F3F5F9]">
                          Required Studio Service
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="h-12 px-4 rounded-xl bg-[#080A0F] border border-[#232B3E] focus:border-[var(--color-accent-soft)] focus:outline-none text-sm text-white transition-colors"
                        >
                          <option value="Website Development">Website Development</option>
                          <option value="Poster & Graphic Design">Poster &amp; Graphic Design</option>
                          <option value="UI/UX & Product Design">UI/UX &amp; Product Design</option>
                          <option value="Brand Strategy & Innovation">Brand Strategy &amp; Innovation</option>
                          <option value="Full Creative Engagement">Full Creative Engagement</option>
                        </select>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="message" className="text-xs font-mono font-bold uppercase tracking-wider text-[#F3F5F9]">
                        Project Context &amp; Goals <span className="text-[var(--color-accent-soft)]">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        required
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about what you want to build or design, target timeline, and aesthetic direction..."
                        className="p-4 rounded-xl bg-[#080A0F] border border-[#232B3E] focus:border-[var(--color-accent-soft)] focus:outline-none text-sm text-white transition-colors resize-y"
                      />
                    </div>

                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      disabled={status.submitting}
                      iconRight={<Send size={16} />}
                      className="justify-center mt-2"
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
    </>
  );
}
