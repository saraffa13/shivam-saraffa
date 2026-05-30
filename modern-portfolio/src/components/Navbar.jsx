import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
  { name: 'Home', href: '#home' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 h-16 transition-all duration-300 ${
        scrolled ? 'border-b border-outline-variant bg-surface/80 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="section-shell flex h-full items-center justify-between">
        <a href="#home" className="font-display text-lg font-bold tracking-tight text-primary">
          Shivam<span className="text-primary-bright">.</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map(({ name, href }) => (
            <li key={name}>
              <a
                href={href}
                className="font-mono text-xs uppercase tracking-widest text-on-surface-variant transition-colors duration-200 hover:text-primary"
              >
                {name}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setOpen((current) => !current)}
          className="rounded-md p-2 text-on-surface-variant transition-colors hover:text-primary md:hidden"
          aria-label={open ? 'Close navigation' : 'Open navigation'}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <div
        className={`fixed inset-x-0 top-16 h-[calc(100vh-4rem)] bg-surface/95 backdrop-blur-md transition-all duration-300 md:hidden ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <ul className="flex h-full flex-col items-center justify-center gap-10">
          {links.map(({ name, href }) => (
            <li key={name}>
              <a
                href={href}
                onClick={() => setOpen(false)}
                className="font-display text-2xl font-semibold text-on-surface transition-colors duration-200 hover:text-primary"
              >
                {name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
