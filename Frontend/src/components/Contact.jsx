import { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle, Copy, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const emailAddress = 'ayanstack.dev@gmail.com';
  const linkedinUrl = 'https://www.linkedin.com/in/ayan-khan-a6081239a';
  const githubUrl = 'https://github.com/ayankhan1213';

  const copyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formState.name && formState.email && formState.message) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormState({ name: '', email: '', subject: '', message: '' });
      }, 4000);
    }
  };

  const handleChange = (e) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section
      id="contact"
      aria-label="Contact Ayan Khan — Get In Touch"
      style={{ scrollMarginTop: '6rem' }}
      className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      {/* Clean Cohesive Section Header (No awkward split) */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="mb-12 pb-6 border-b"
        style={{
          borderColor: 'color-mix(in srgb, var(--color-text) 10%, transparent)',
        }}
      >
        <div
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-2"
          style={{ color: 'var(--color-accent)' }}
        >
          <Mail className="w-4 h-4" />
          <span>Get In Touch</span>
        </div>

        <h2
          className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-3"
          style={{ color: 'var(--color-text)' }}
        >
          Let's Talk About Your Next Project
        </h2>

        <p
          className="text-base sm:text-lg max-w-2xl leading-relaxed"
          style={{
            color: 'color-mix(in srgb, var(--color-text) 65%, transparent)',
          }}
        >
          Have a question, a project idea, or an opportunity? Feel free to send a message or email me directly at{' '}
          <a
            href={`mailto:${emailAddress}`}
            className="font-semibold underline underline-offset-4 transition-colors"
            style={{ color: 'var(--color-accent)' }}
          >
            {emailAddress}
          </a>.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Contact Info & Copy Email */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 rounded-3xl p-5 sm:p-8 lg:p-10 flex flex-col"
          style={{
            backgroundColor: 'color-mix(in srgb, var(--color-text) 3%, var(--color-bg))',
            border: '1px solid color-mix(in srgb, var(--color-text) 12%, transparent)',
            boxShadow: '0 4px 16px -2px color-mix(in srgb, var(--color-text) 4%, transparent)',
          }}
        >
          <div>
            <h3
              className="text-2xl font-bold tracking-tight mb-2.5"
              style={{ color: 'var(--color-text)' }}
            >
              Contact Details
            </h3>

            <p
              className="text-base leading-relaxed mb-6"
              style={{
                color: 'color-mix(in srgb, var(--color-text) 70%, transparent)',
              }}
            >
              I am always happy to chat about new projects, creative ideas, or engineering roles. You can copy my email below or drop a note through the form.
            </p>

            {/* Quick Email Copy Card */}
            <div
              className="p-3 sm:p-4 rounded-2xl flex items-center justify-between mb-3.5 sm:mb-4 gap-2 sm:gap-3 transition-all duration-200"
              style={{
                backgroundColor: 'var(--color-bg)',
                border: '1px solid color-mix(in srgb, var(--color-text) 12%, transparent)',
              }}
            >
              <div className="flex items-center gap-2.5 sm:gap-3 min-w-0 flex-1">
                <div
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    backgroundColor: 'color-mix(in srgb, var(--color-accent) 12%, transparent)',
                    color: 'var(--color-accent)',
                  }}
                >
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <div
                    className="text-[11px] sm:text-xs font-medium uppercase tracking-wider"
                    style={{ color: 'color-mix(in srgb, var(--color-text) 50%, transparent)' }}
                  >
                    Email Me
                  </div>
                  <div
                    className="text-xs sm:text-sm md:text-base font-semibold truncate select-all tracking-tight"
                    title={emailAddress}
                    style={{ color: 'var(--color-text)' }}
                  >
                    {emailAddress}
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={copyEmail}
                aria-label="Copy email address"
                className="flex-shrink-0 p-2 sm:p-2.5 rounded-xl transition-all duration-200 cursor-pointer"
                style={{
                  backgroundColor: copied
                    ? 'color-mix(in srgb, var(--color-accent) 15%, transparent)'
                    : 'color-mix(in srgb, var(--color-text) 6%, transparent)',
                  color: copied ? 'var(--color-accent)' : 'var(--color-text)',
                }}
              >
                {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Location Card (Matched Box Design) */}
            <div
              className="p-3 sm:p-4 rounded-2xl flex items-center gap-2.5 sm:gap-3 mb-5 sm:mb-6 transition-all duration-200"
              style={{
                backgroundColor: 'var(--color-bg)',
                border: '1px solid color-mix(in srgb, var(--color-text) 12%, transparent)',
              }}
            >
              <div
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{
                  backgroundColor: 'color-mix(in srgb, var(--color-accent) 12%, transparent)',
                  color: 'var(--color-accent)',
                }}
              >
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div className="min-w-0 flex-1">
                <div
                  className="text-[11px] sm:text-xs font-medium uppercase tracking-wider"
                  style={{ color: 'color-mix(in srgb, var(--color-text) 50%, transparent)' }}
                >
                  Location
                </div>
                <div
                  className="text-xs sm:text-sm md:text-base font-semibold truncate"
                  style={{ color: 'var(--color-text)' }}
                >
                  Pakistan (Open to Worldwide Remote)
                </div>
              </div>
            </div>
          </div>

          {/* Social Profiles (GitHub & LinkedIn aligned side-by-side with diagonal hover) */}
          <div
            className="pt-6 border-t mt-auto"
            style={{
              borderColor: 'color-mix(in srgb, var(--color-text) 10%, transparent)',
            }}
          >
            <div
              className="text-xs font-semibold uppercase tracking-wider mb-3"
              style={{ color: 'color-mix(in srgb, var(--color-text) 50%, transparent)' }}
            >
              My Profiles
            </div>

            <div className="grid grid-cols-2 gap-3">
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit GitHub Profile"
                className="group btn-diagonal-secondary flex items-center justify-center gap-2.5 px-4 py-3 rounded-xl text-sm font-semibold tracking-wide"
              >
                <GithubIcon className="w-4 h-4 transition-transform duration-300 group-hover:rotate-12" />
                <span>GitHub</span>
              </a>

              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit LinkedIn Profile"
                className="group btn-diagonal-secondary flex items-center justify-center gap-2.5 px-4 py-3 rounded-xl text-sm font-semibold tracking-wide"
              >
                <LinkedinIcon className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right: Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 rounded-3xl p-8 sm:p-10"
          style={{
            backgroundColor: 'color-mix(in srgb, var(--color-text) 3%, var(--color-bg))',
            border: '1px solid color-mix(in srgb, var(--color-text) 12%, transparent)',
            boxShadow: '0 4px 16px -2px color-mix(in srgb, var(--color-text) 4%, transparent)',
          }}
        >
          {submitted ? (
            <div
              className="h-full min-h-[380px] flex flex-col items-center justify-center text-center p-8 rounded-2xl"
              style={{
                backgroundColor: 'color-mix(in srgb, var(--color-accent) 8%, transparent)',
                border: '1px solid color-mix(in srgb, var(--color-accent) 25%, transparent)',
              }}
            >
              <CheckCircle className="w-12 h-12 mb-4" style={{ color: 'var(--color-accent)' }} />
              <h4 className="text-2xl font-bold mb-2" style={{ color: 'var(--color-text)' }}>
                Message Sent!
              </h4>
              <p
                className="max-w-md text-base leading-relaxed"
                style={{
                  color: 'color-mix(in srgb, var(--color-text) 75%, transparent)',
                }}
              >
                Thank you for reaching out! I have received your message and will get back to you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs sm:text-sm font-semibold uppercase tracking-wider mb-2"
                    style={{
                      color: 'color-mix(in srgb, var(--color-text) 75%, transparent)',
                    }}
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    required
                    value={formState.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full px-4 py-3.5 rounded-xl text-sm sm:text-base transition-all outline-none"
                    style={{
                      backgroundColor: 'var(--color-bg)',
                      color: 'var(--color-text)',
                      border: '1px solid color-mix(in srgb, var(--color-text) 15%, transparent)',
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = 'var(--color-accent)';
                      e.currentTarget.style.boxShadow =
                        '0 0 0 3px color-mix(in srgb, var(--color-accent) 15%, transparent)';
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor =
                        'color-mix(in srgb, var(--color-text) 15%, transparent)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-xs sm:text-sm font-semibold uppercase tracking-wider mb-2"
                    style={{
                      color: 'color-mix(in srgb, var(--color-text) 75%, transparent)',
                    }}
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    required
                    value={formState.email}
                    onChange={handleChange}
                    placeholder="yourname@gmail.com"
                    className="w-full px-4 py-3.5 rounded-xl text-sm sm:text-base transition-all outline-none"
                    style={{
                      backgroundColor: 'var(--color-bg)',
                      color: 'var(--color-text)',
                      border: '1px solid color-mix(in srgb, var(--color-text) 15%, transparent)',
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = 'var(--color-accent)';
                      e.currentTarget.style.boxShadow =
                        '0 0 0 3px color-mix(in srgb, var(--color-accent) 15%, transparent)';
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor =
                        'color-mix(in srgb, var(--color-text) 15%, transparent)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-subject"
                  className="block text-xs sm:text-sm font-semibold uppercase tracking-wider mb-2"
                  style={{
                    color: 'color-mix(in srgb, var(--color-text) 75%, transparent)',
                  }}
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="contact-subject"
                  name="subject"
                  value={formState.subject}
                  onChange={handleChange}
                  placeholder="Website inquiry / Project collaboration"
                  className="w-full px-4 py-3.5 rounded-xl text-sm sm:text-base transition-all outline-none"
                  style={{
                    backgroundColor: 'var(--color-bg)',
                    color: 'var(--color-text)',
                    border: '1px solid color-mix(in srgb, var(--color-text) 15%, transparent)',
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = 'var(--color-accent)';
                    e.currentTarget.style.boxShadow =
                      '0 0 0 3px color-mix(in srgb, var(--color-accent) 15%, transparent)';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor =
                      'color-mix(in srgb, var(--color-text) 15%, transparent)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-xs sm:text-sm font-semibold uppercase tracking-wider mb-2"
                  style={{
                    color: 'color-mix(in srgb, var(--color-text) 75%, transparent)',
                  }}
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  required
                  value={formState.message}
                  onChange={handleChange}
                  placeholder="Tell me a bit about what you need..."
                  className="w-full px-4 py-3.5 rounded-xl text-sm sm:text-base transition-all outline-none resize-none"
                  style={{
                    backgroundColor: 'var(--color-bg)',
                    color: 'var(--color-text)',
                    border: '1px solid color-mix(in srgb, var(--color-text) 15%, transparent)',
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = 'var(--color-accent)';
                    e.currentTarget.style.boxShadow =
                      '0 0 0 3px color-mix(in srgb, var(--color-accent) 15%, transparent)';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor =
                      'color-mix(in srgb, var(--color-text) 15%, transparent)';
                      e.currentTarget.style.boxShadow = 'none';
                  }}
                />
              </div>

              <button
                type="submit"
                className="group btn-diagonal-primary w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-bold text-base tracking-wide"
              >
                <Send className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                <span>Send Message</span>
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
