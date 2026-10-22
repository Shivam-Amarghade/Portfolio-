import { useState, useRef } from "react";
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaLocationDot,
  FaPhone,
  FaCopy,
  FaCheck,
  FaPaperPlane,
} from "react-icons/fa6";
import emailjs from "emailjs-com";
import { personalInfo } from "../assets/asstes";

export default function Contect() {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const copyPhone = () => {
    navigator.clipboard.writeText(personalInfo.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage(null);

    emailjs
      .sendForm(
        "service_tt57oei",
        "template_klcguy6",
        form.current,
        "Jx6-jbD8vE_jcZfG6"
      )
      .then(
        () => {
          setLoading(false);
          setStatusMessage({
            type: "success",
            text: "Thank you! Your message has been sent directly to Shivam.",
          });
          form.current.reset();
          setTimeout(() => setStatusMessage(null), 5000);
        },
        (error) => {
          console.error(error);
          setLoading(false);
          setStatusMessage({
            type: "error",
            text: "Unable to send form message right now. Please email directly or call.",
          });
        }
      );
  };

  return (
    <section id="Contact" className="py-28 relative apple-ambient-glow scroll-mt-28">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="mb-14 pb-8 border-b border-white/[0.08]">
          <div className="text-xs font-mono text-[#86868b] uppercase tracking-widest mb-2">
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-apple-headline tracking-tight">
            Connect.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Info (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="apple-card p-6 rounded-3xl space-y-5">
              <div>
                <h3 className="text-xl font-bold text-white mb-1.5">
                  Direct Inquiries
                </h3>
                <p className="text-xs text-[#86868b] leading-relaxed">
                  Available for full-time Software Engineer / Associate System Engineer positions, full-stack roles, and technical discussions.
                </p>
              </div>

              {/* Email Box */}
              <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-white/[0.06] flex items-center justify-center text-white text-xs">
                    <FaEnvelope />
                  </div>
                  <div>
                    <div className="text-[10px] text-[#86868b] font-mono uppercase tracking-wider">Email</div>
                    <div className="text-xs font-semibold text-white">{personalInfo.email}</div>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={copyEmail}
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-[#86868b] hover:text-white transition-colors cursor-pointer"
                  title="Copy email"
                >
                  {copiedEmail ? <FaCheck className="text-[#30d158] text-xs" /> : <FaCopy className="text-xs" />}
                </button>
              </div>

              {/* Phone Box */}
              <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-white/[0.06] flex items-center justify-center text-white text-xs">
                    <FaPhone />
                  </div>
                  <div>
                    <div className="text-[10px] text-[#86868b] font-mono uppercase tracking-wider">Phone / WhatsApp</div>
                    <div className="text-xs font-semibold text-white">{personalInfo.phone}</div>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={copyPhone}
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-[#86868b] hover:text-white transition-colors cursor-pointer"
                  title="Copy phone"
                >
                  {copiedPhone ? <FaCheck className="text-[#30d158] text-xs" /> : <FaCopy className="text-xs" />}
                </button>
              </div>

              {/* Location & Status */}
              <div className="space-y-2 pt-1 text-xs text-[#86868b]">
                <div className="flex items-center gap-2.5">
                  <FaLocationDot className="text-white text-xs flex-shrink-0" />
                  <span>{personalInfo.location}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#30d158] inline-block flex-shrink-0" />
                  <span>Actively interviewing & open for immediate joining</span>
                </div>
              </div>

              {/* Networks */}
              <div className="pt-3 border-t border-white/[0.06]">
                <div className="flex gap-2.5">
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 px-3 rounded-xl apple-btn-secondary flex items-center justify-center gap-2 text-xs font-medium"
                  >
                    <FaLinkedin className="text-sm text-[#2997ff]" />
                    <span>LinkedIn</span>
                  </a>

                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 px-3 rounded-xl apple-btn-secondary flex items-center justify-center gap-2 text-xs font-medium"
                  >
                    <FaGithub className="text-sm text-white" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Clean Form (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="apple-card p-7 sm:p-8 rounded-3xl">
              
              {statusMessage && (
                <div
                  className={`mb-6 p-4 rounded-2xl text-xs font-medium ${
                    statusMessage.type === "success"
                      ? "bg-white/[0.06] border border-white/20 text-white"
                      : "bg-red-500/10 border border-red-500/30 text-red-300"
                  }`}
                  role="status"
                  aria-live="polite"
                >
                  {statusMessage.text}
                </div>
              )}

              <form ref={form} onSubmit={sendEmail} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-[11px] font-mono text-[#86868b] mb-1.5 uppercase tracking-wider"
                    >
                      Your Name *
                    </label>
                    <input
                      required
                      id="contact-name"
                      name="user_name"
                      type="text"
                      autoComplete="name"
                      placeholder="Alex Morgan"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] focus:border-white/30 focus:outline-none text-xs text-white placeholder:text-[#52525b] transition-all"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-[11px] font-mono text-[#86868b] mb-1.5 uppercase tracking-wider"
                    >
                      Your Email *
                    </label>
                    <input
                      required
                      id="contact-email"
                      name="user_email"
                      type="email"
                      autoComplete="email"
                      placeholder="alex@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] focus:border-white/30 focus:outline-none text-xs text-white placeholder:text-[#52525b] transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-subject"
                    className="block text-[11px] font-mono text-[#86868b] mb-1.5 uppercase tracking-wider"
                  >
                    Subject *
                  </label>
                  <input
                    required
                    id="contact-subject"
                    name="subject"
                    type="text"
                    autoComplete="off"
                    placeholder="Role Opportunity / Collaboration at..."
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] focus:border-white/30 focus:outline-none text-xs text-white placeholder:text-[#52525b] transition-all"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-[11px] font-mono text-[#86868b] mb-1.5 uppercase tracking-wider"
                  >
                    Message *
                  </label>
                  <textarea
                    required
                    id="contact-message"
                    name="message"
                    rows={4}
                    autoComplete="off"
                    placeholder="Share role details, team, and next steps..."
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] focus:border-white/30 focus:outline-none text-xs text-white placeholder:text-[#52525b] transition-all resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 rounded-full text-xs font-semibold apple-btn-primary flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {loading ? (
                      <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <span>Send Message</span>
                        <FaPaperPlane className="text-[10px]" />
                      </>
                    )}
                  </button>
                </div>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
