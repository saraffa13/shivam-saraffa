import { motion } from 'framer-motion';
import { FaDownload, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { SiCodeforces, SiLeetcode } from 'react-icons/si';

const chips = [
  { label: 'RAG', top: '12%', left: '8%', delay: 0 },
  { label: 'LangChain', top: '22%', left: '42%', delay: 0.4 },
  { label: 'NestJS', top: '8%', left: '62%', delay: 0.8 },
  { label: 'Next.js', top: '20%', left: '78%', delay: 0.2 },
  { label: 'PostgreSQL', top: '48%', left: '5%', delay: 1.0 },
  { label: 'Docker', top: '55%', left: '52%', delay: 0.6 },
];

const socialLinks = [
  { icon: <FaGithub size={18} />, url: 'https://github.com/saraffa13', label: 'GitHub' },
  {
    icon: <FaLinkedin size={18} />,
    url: 'https://www.linkedin.com/in/shivam-kumar-saraffa-66167a1b8/',
    label: 'LinkedIn',
  },
  { icon: <FaTwitter size={18} />, url: 'https://x.com/shivam13537194', label: 'Twitter' },
  { icon: <SiCodeforces size={18} />, url: 'https://codeforces.com/profile/shiv13', label: 'Codeforces' },
  { icon: <SiLeetcode size={18} />, url: 'https://leetcode.com/u/ssaraffa/', label: 'LeetCode' },
];

function FloatingChip({ label, top, left, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: delay + 0.8, duration: 0.4 }}
      style={{ top, left, position: 'absolute' }}
    >
      <motion.span
        animate={{ y: [0, -8, 0] }}
        transition={{
          duration: 3 + delay,
          repeat: Infinity,
          repeatType: 'loop',
          ease: 'easeInOut',
          delay: delay * 0.5,
        }}
        className="inline-block select-none whitespace-nowrap rounded-md border border-outline-variant bg-surface-container px-3 py-1.5 font-mono text-xs text-on-surface-variant transition-colors duration-200 hover:border-primary hover:text-primary"
        style={{ boxShadow: '0 0 12px rgba(77,142,255,0.06)' }}
      >
        {label}
      </motion.span>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden bg-surface">
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(#adc6ff 1px, transparent 1px), linear-gradient(90deg, #adc6ff 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      <div className="section-shell relative grid w-full grid-cols-1 items-center gap-12 pb-16 pt-24 lg:grid-cols-2">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="mb-6 font-mono text-xs uppercase tracking-widest text-primary"
          >
            Full Stack &amp; AI Engineer
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-6 font-display text-[clamp(2.5rem,5vw,3.75rem)] font-extrabold leading-[1.1] tracking-tight text-on-surface"
          >
            Hi, I&apos;m{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(135deg, #adc6ff 0%, #4d8eff 100%)' }}
            >
              Shivam
            </span>
            <br />
            Kumar Saraffa.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="mb-10 max-w-2xl text-base leading-relaxed text-on-surface-variant"
          >
            I build production-grade web apps and autonomous AI systems, from NestJS backends and React frontends
            to multi-agent LLM pipelines and RAG systems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-16 flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="rounded-lg px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:scale-[1.02]"
              style={{ background: 'linear-gradient(135deg, #3b82f6 0%, #6366f1 100%)' }}
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="rounded-lg border border-outline-variant bg-transparent px-6 py-3 text-sm font-semibold text-on-surface transition-all duration-200 hover:border-primary hover:bg-surface-high"
            >
              Contact Me
            </a>
            <a
              href="/resume.pdf"
              download="Shivam_Kumar_Saraffa_Resume.pdf"
              className="flex items-center gap-2 rounded-lg border border-outline-variant bg-transparent px-6 py-3 text-sm font-semibold text-on-surface-variant transition-all duration-200 hover:border-primary hover:text-primary"
            >
              <FaDownload size={13} /> Resume
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.65 }}
            className="flex items-center gap-4"
          >
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
          </motion.div>
        </motion.div>

        <div className="relative hidden h-[480px] lg:block">
          {chips.map((chip) => (
            <FloatingChip key={chip.label} {...chip} />
          ))}
        </div>
      </div>
    </section>
  );
}
