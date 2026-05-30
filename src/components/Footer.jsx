import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const links = [
    { icon: <FaGithub size={15} />, href: 'https://github.com/saraffa13', label: 'GitHub' },
    { icon: <FaLinkedin size={15} />, href: 'https://www.linkedin.com/in/shivam-kumar-saraffa-66167a1b8/', label: 'LinkedIn' },
    { icon: <FaTwitter size={15} />, href: 'https://x.com/shivam13537194', label: 'Twitter' },
    { icon: <FaEnvelope size={15} />, href: 'mailto:ssaraffa786@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="bg-surface-low border-t border-outline-variant py-8">
      <div className="max-w-[1280px] mx-auto px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs text-outline">
          © {new Date().getFullYear()} Shivam Kumar Saraffa. All rights reserved.
        </p>
        <div className="flex items-center gap-3">
          {links.map(l => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noreferrer"
              aria-label={l.label}
              className="w-8 h-8 rounded-lg border border-outline-variant flex items-center justify-center text-on-surface-variant hover:border-primary hover:text-primary transition-all duration-200"
            >
              {l.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
