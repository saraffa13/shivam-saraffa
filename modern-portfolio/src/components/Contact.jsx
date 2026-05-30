import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const emptyForm = {
  user_name: '',
  user_email: '',
  subject: '',
  message: '',
};

const socialLinks = [
  { icon: <FaGithub size={16} />, url: 'https://github.com/saraffa13', label: 'GitHub' },
  {
    icon: <FaLinkedin size={16} />,
    url: 'https://www.linkedin.com/in/shivam-kumar-saraffa-66167a1b8/',
    label: 'LinkedIn',
  },
  { icon: <FaTwitter size={16} />, url: 'https://x.com/shivam13537194', label: 'Twitter' },
];

const inputClass =
  'w-full rounded-lg border border-outline-variant bg-surface-low px-4 py-3 text-sm text-on-surface placeholder:text-outline transition-colors duration-200 focus:border-primary-bright focus:outline-none';

export default function Contact() {
  const [formData, setFormData] = useState(emptyForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (event) => {
    setFormData((current) => ({ ...current, [event.target.name]: event.target.value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setSubmitStatus('missing-config');
      return;
    }

    setIsSubmitting(true);
    try {
      await emailjs.send(serviceId, templateId, formData, { publicKey });
      setSubmitStatus('success');
      setFormData(emptyForm);
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      window.setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  return (
    <section id="contact" className="bg-surface-low py-20">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-primary">Say Hello</p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-on-surface">Get In Touch</h2>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <p className="max-w-xl leading-relaxed text-on-surface-variant">
              I&apos;m open to full-time roles, freelance projects, and interesting collaborations. Drop me a message
              and I&apos;ll get back to you.
            </p>

            <a href="mailto:ssaraffa786@gmail.com" className="group flex items-center gap-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-outline-variant bg-surface-container text-primary transition-colors duration-200 group-hover:border-primary">
                <Mail size={17} />
              </span>
              <span>
                <span className="mb-0.5 block font-mono text-xs uppercase tracking-widest text-outline">Email</span>
                <span className="block text-sm text-on-surface transition-colors duration-200 group-hover:text-primary">
                  ssaraffa786@gmail.com
                </span>
              </span>
            </a>

            <div>
              <p className="mb-4 font-mono text-xs uppercase tracking-widest text-outline">Follow Me</p>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-outline-variant text-on-surface-variant transition-all duration-200 hover:border-primary hover:text-primary"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Field label="Name">
                <input
                  type="text"
                  name="user_name"
                  value={formData.user_name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className={inputClass}
                />
              </Field>
              <Field label="Email">
                <input
                  type="email"
                  name="user_email"
                  value={formData.user_email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                  className={inputClass}
                />
              </Field>
            </div>
            <Field label="Subject">
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="What's this about?"
                className={inputClass}
              />
            </Field>
            <Field label="Message">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                placeholder="Your message..."
                className={`${inputClass} resize-none`}
              />
            </Field>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-lg py-3 text-sm font-semibold text-white transition-all duration-200 hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-50"
              style={{ background: 'linear-gradient(135deg, #3b82f6 0%, #6366f1 100%)' }}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>

            <Status status={submitStatus} />
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="mb-2 block font-mono text-xs uppercase tracking-widest text-outline">{label}</span>
      {children}
    </label>
  );
}

function Status({ status }) {
  if (!status) return null;

  const messages = {
    success: ['text-green-400', 'Message sent successfully!'],
    error: ['text-red-400', 'Failed to send. Please try again.'],
    'missing-config': ['text-amber-300', 'Email service is not configured yet.'],
  };
  const [color, message] = messages[status];

  return (
    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className={`text-center text-sm ${color}`}>
      {message}
    </motion.p>
  );
}
