import React from 'react';
import { motion } from 'framer-motion';

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

const Navbar = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-gradient-to-b from-[#0a0a0f]/80 to-transparent backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 text-white">
        <motion.a
          href="#home"
          className="text-lg font-extrabold tracking-tight"
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          dev<span className="text-fuchsia-500">•</span>studio
        </motion.a>
        <nav className="hidden gap-6 text-sm sm:flex">
          {links.map((l, i) => (
            <motion.a
              key={l.href}
              href={l.href}
              className="text-white/80 transition hover:text-white"
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 * i }}
            >
              {l.label}
            </motion.a>
          ))}
        </nav>
        <a
          href="#contact"
          className="hidden rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold text-white backdrop-blur transition hover:bg-white/10 sm:inline-flex"
        >
          Hire Me
        </a>
      </div>
    </header>
  );
};

export default Navbar;
