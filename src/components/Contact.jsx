import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({ user_name: '', user_email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const socialLinks = [
    { icon: <FaGithub size={16} />, url: 'https://github.com/saraffa13', label: 'GitHub' },
    { icon: <FaLinkedin size={16} />, url: 'https://www.linkedin.com/in/shivam-kumar-saraffa-66167a1b8/', label: 'LinkedIn' },
    { icon: <FaTwitter size={16} />, url: 'https://x.com/shivam13537194', label: 'Twitter' },
  ];

  const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await emailjs.send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        formData,
        process.env.REACT_APP_USER_ID
      );
      setSubmitStatus('success');
      setFormData({ user_name: '', user_email: '', subject: '', message: '' });
    } catch {
      setSubmitStatus('error');
    }
    setIsSubmitting(false);
    setTimeout(() => setSubmitStatus(null), 5000);
  };

  const inputClass =
    'w-full px-4 py-3 rounded-lg bg-surface-low border border-outline-variant text-on-surface font-body text-sm placeholder-outline focus:outline-none focus:border-primary-bright transition-colors duration-200';

  return (
    <section id="contact" className="py-20 bg-surface-low">
      <div className="max-w-[1280px] mx-auto px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="font-mono text-xs tracking-widest text-primary uppercase mb-3">Say Hello</p>
          <h2 className="font-display font-bold text-3xl text-on-surface tracking-tight">Get In Touch</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <p className="font-body text-on-surface-variant leading-relaxed">
              I'm open to full-time roles, freelance projects, and interesting collaborations. Drop me a message and I'll get back to you.
            </p>

            <a
              href="mailto:ssaraffa786@gmail.com"
              className="flex items-center gap-4 group"
            >
              <div className="w-10 h-10 rounded-lg border border-outline-variant bg-surface-container flex items-center justify-center text-primary group-hover:border-primary transition-colors duration-200">
                <FaEnvelope size={15} />
              </div>
              <div>
                <p className="font-mono text-xs text-outline uppercase tracking-widest mb-0.5">Email</p>
                <p className="font-body text-sm text-on-surface group-hover:text-primary transition-colors duration-200">ssaraffa786@gmail.com</p>
              </div>
            </a>

            <div>
              <p className="font-mono text-xs text-outline uppercase tracking-widest mb-4">Follow Me</p>
              <div className="flex gap-3">
                {socialLinks.map(s => (
                  <a
                    key={s.label}
                    href={s.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.label}
                    className="w-9 h-9 rounded-lg border border-outline-variant flex items-center justify-center text-on-surface-variant hover:border-primary hover:text-primary transition-all duration-200"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-mono text-xs text-outline uppercase tracking-widest mb-2">Name</label>
                  <input type="text" name="user_name" value={formData.user_name} onChange={handleChange} required placeholder="Your name" className={inputClass} />
                </div>
                <div>
                  <label className="block font-mono text-xs text-outline uppercase tracking-widest mb-2">Email</label>
                  <input type="email" name="user_email" value={formData.user_email} onChange={handleChange} required placeholder="your@email.com" className={inputClass} />
                </div>
              </div>
              <div>
                <label className="block font-mono text-xs text-outline uppercase tracking-widest mb-2">Subject</label>
                <input type="text" name="subject" value={formData.subject} onChange={handleChange} required placeholder="What's this about?" className={inputClass} />
              </div>
              <div>
                <label className="block font-mono text-xs text-outline uppercase tracking-widest mb-2">Message</label>
                <textarea name="message" value={formData.message} onChange={handleChange} required rows="5" placeholder="Your message..." className={`${inputClass} resize-none`} />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 rounded-lg font-body font-semibold text-sm text-white transition-all duration-200 hover:scale-[1.01] disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ background: 'linear-gradient(135deg, #3b82f6 0%, #6366f1 100%)' }}
              >
                {isSubmitting ? 'Sending…' : 'Send Message'}
              </button>

              {submitStatus === 'success' && (
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="font-body text-sm text-green-400 text-center">
                  Message sent successfully!
                </motion.p>
              )}
              {submitStatus === 'error' && (
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="font-body text-sm text-red-400 text-center">
                  Failed to send. Please try again.
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
