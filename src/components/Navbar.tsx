import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import profileImage from '../assets/profile.jpg';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed inset-x-0 top-0 z-50 px-4 py-4 md:px-6 lg:px-10 ${
          scrolled ? 'pt-3' : 'pt-5'
        }`}
      >
        <div
          className={`mx-auto flex w-full max-w-7xl items-center justify-between rounded-full border px-4 py-3 transition-all duration-300 md:px-6 ${
            scrolled
              ? 'border-white/15 bg-[#09111f]/72 shadow-[0_16px_50px_rgba(3,8,20,0.35)] backdrop-blur-xl'
              : 'border-white/10 bg-white/[0.04] backdrop-blur-md'
          }`}
        >
          <a href="#hero" className="flex items-center gap-3">
            <div className="h-10 w-10 overflow-hidden rounded-full border border-[rgba(255,255,255,0.16)] bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.35),_rgba(255,255,255,0.08))] shadow-[0_8px_24px_rgba(0,0,0,0.18)]">
              <img src={profileImage} alt="Shikder Al Islam" className="h-full w-full object-cover object-center" />
            </div>
            <div>
              <div className="font-head text-base tracking-[0.16em] text-white uppercase">Al Islam</div>
              <div className="text-[10px] uppercase tracking-[0.32em] text-white/45">Software Engineer</div>
            </div>
          </a>

          <ul className="hidden items-center gap-7 lg:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-[11px] font-medium uppercase tracking-[0.28em] text-white/60 transition-colors duration-300 hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-3 lg:flex">
            <div className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_20px_rgba(52,211,153,0.75)]" />
            <span className="text-[11px] uppercase tracking-[0.28em] text-white/55">Open to work</span>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen((value) => !value)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span className="flex flex-col gap-1.5">
              <span
                className={`h-px w-5 bg-current transition-transform duration-300 ${
                  menuOpen ? 'translate-y-2 rotate-45' : ''
                }`}
              />
              <span className={`h-px w-5 bg-current transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
              <span
                className={`h-px w-5 bg-current transition-transform duration-300 ${
                  menuOpen ? '-translate-y-2 -rotate-45' : ''
                }`}
              />
            </span>
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-[#07101d]/95 px-6 pb-8 pt-28 backdrop-blur-2xl lg:hidden"
          >
            <div className="mx-auto flex h-full max-w-xl flex-col rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.35)]">
              <div className="mb-8 text-[11px] uppercase tracking-[0.4em] text-white/45">Navigation</div>
              <div className="flex flex-1 flex-col gap-4">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 16 }}
                    transition={{ delay: index * 0.05 }}
                    className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 font-head text-2xl text-white"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="mt-8 inline-flex items-center justify-center rounded-full bg-[#d6b173] px-5 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-[#0b1018]"
              >
                Start a project
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
