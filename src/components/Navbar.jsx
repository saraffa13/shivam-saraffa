import React, { useState, useEffect } from 'react';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { name: 'Home', link: '#home' },
    { name: 'Experience', link: '#experience' },
    { name: 'Projects', link: '#projects' },
    { name: 'Skills', link: '#skills' },
    { name: 'Education', link: '#education' },
    { name: 'Contact', link: '#contact' },
  ];

  return (
    <nav
      className={`fixed w-full h-16 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-surface/70 backdrop-blur-md border-b border-outline-variant'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-8 h-full flex justify-between items-center">
        <a href="#home" className="font-display font-bold text-lg text-primary tracking-tight">
          Shivam<span className="text-primary-bright">.</span>
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map(({ name, link }) => (
            <li key={name}>
              <a
                href={link}
                className="font-mono text-xs tracking-widest text-on-surface-variant uppercase hover:text-primary transition-colors duration-200"
              >
                {name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button onClick={() => setNav(!nav)} className="md:hidden text-on-surface-variant hover:text-primary transition-colors">
          {nav ? <HiX size={22} /> : <HiMenuAlt3 size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden fixed inset-0 top-16 bg-surface/95 backdrop-blur-md transition-all duration-300 ${
          nav ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <ul className="flex flex-col items-center justify-center h-full gap-10">
          {links.map(({ name, link }) => (
            <li key={name} onClick={() => setNav(false)}>
              <a href={link} className="font-display text-2xl font-semibold text-on-surface hover:text-primary transition-colors duration-200">
                {name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
