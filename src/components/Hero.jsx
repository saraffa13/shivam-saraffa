import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { SiCodeforces, SiLeetcode } from 'react-icons/si';
import { motion } from 'framer-motion';

const chips = [
  { label: 'RAG',         top: '12%',  left: '8%',  delay: 0 },
  { label: 'LangChain',   top: '22%',  left: '42%', delay: 0.4 },
  { label: 'NestJS',      top: '8%',   left: '62%', delay: 0.8 },
  { label: 'Next.js',     top: '20%',  left: '78%', delay: 0.2 },
  { label: 'PostgreSQL',  top: '48%',  left: '5%',  delay: 1.0 },
  { label: 'Docker',      top: '55%',  left: '52%', delay: 0.6 },
];

const FloatingChip = ({ label, top, left, delay }) => (
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
      className="inline-block font-mono text-xs px-3 py-1.5 rounded-md border border-outline-variant bg-surface-container text-on-surface-variant hover:border-primary hover:text-primary cursor-default transition-colors duration-200 select-none whitespace-nowrap"
      style={{ boxShadow: '0 0 12px rgba(77,142,255,0.06)' }}
    >
      {label}
    </motion.span>
  </motion.div>
);

const Hero = () => {
  const socialLinks = [
    { icon: <FaGithub size={18} />, url: 'https://github.com/saraffa13', label: 'GitHub' },
    { icon: <FaLinkedin size={18} />, url: 'https://www.linkedin.com/in/shivam-kumar-saraffa-66167a1b8/', label: 'LinkedIn' },
    { icon: <FaTwitter size={18} />, url: 'https://x.com/shivam13537194', label: 'Twitter' },
    { icon: <SiCodeforces size={18} />, url: 'https://codeforces.com/profile/shiv13', label: 'Codeforces' },
    { icon: <SiLeetcode size={18} />, url: 'https://leetcode.com/u/ssaraffa/', label: 'LeetCode' },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-surface overflow-hidden">
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'linear-gradient(#adc6ff 1px, transparent 1px), linear-gradient(90deg, #adc6ff 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />
      {/* Glow blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-bright/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-[1280px] mx-auto px-8 pt-24 pb-16 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left — text content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="font-mono text-xs tracking-widest text-primary uppercase mb-6"
          >
            Full Stack &amp; AI Engineer
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="font-display font-extrabold text-[clamp(2.5rem,5vw,3.75rem)] leading-[1.1] tracking-tight text-on-surface mb-6"
          >
            Hi, I'm{' '}
            <span
              className="text-transparent bg-clip-text"
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
            className="font-body text-base text-on-surface-variant leading-relaxed mb-10"
          >
            I build production-grade web apps and autonomous AI systems — from NestJS backends and React frontends to multi-agent LLM pipelines and RAG systems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap gap-4 mb-16"
          >
            <a
              href="#projects"
              className="px-6 py-3 rounded-lg font-body font-semibold text-sm text-white transition-all duration-200 hover:scale-[1.02]"
              style={{ background: 'linear-gradient(135deg, #3b82f6 0%, #6366f1 100%)' }}
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-lg font-body font-semibold text-sm text-on-surface border border-outline-variant bg-transparent hover:bg-surface-high hover:border-primary transition-all duration-200"
            >
              Contact Me
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.65 }}
            className="flex items-center gap-4"
          >
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="w-9 h-9 flex items-center justify-center rounded-lg border border-outline-variant text-on-surface-variant hover:border-primary hover:text-primary transition-all duration-200"
              >
                {s.icon}
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right — floating chips */}
        <div className="relative hidden lg:block h-[480px]">
          {chips.map((chip) => (
            <FloatingChip key={chip.label} {...chip} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
