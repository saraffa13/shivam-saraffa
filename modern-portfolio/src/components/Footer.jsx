import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const links = [
  { icon: <FaGithub size={15} />, href: 'https://github.com/saraffa13', label: 'GitHub' },
  {
    icon: <FaLinkedin size={15} />,
    href: 'https://www.linkedin.com/in/shivam-kumar-saraffa-66167a1b8/',
    label: 'LinkedIn',
  },
  { icon: <FaTwitter size={15} />, href: 'https://x.com/shivam13537194', label: 'Twitter' },
  { icon: <Mail size={15} />, href: 'mailto:ssaraffa786@gmail.com', label: 'Email' },
];

export default function Footer() {
  return (
    <footer className="border-t border-outline-variant bg-surface-low py-8">
      <div className="section-shell flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-center font-mono text-xs text-outline sm:text-left">
          Copyright {new Date().getFullYear()} Shivam Kumar Saraffa. All rights reserved.
        </p>
        <div className="flex items-center gap-3">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              aria-label={link.label}
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-outline-variant text-on-surface-variant transition-all duration-200 hover:border-primary hover:text-primary"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
