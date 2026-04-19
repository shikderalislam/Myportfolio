import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import profileImage from '../assets/profile.jpg';

export const Hero = () => {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY);

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden px-4 pb-14 pt-28 md:px-6 md:pb-20 md:pt-32 lg:px-10">
      <div className="hero-orb hero-orb-left" />
      <div className="hero-orb hero-orb-right" />
      <div className="hero-grid" />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute left-[8%] top-[24%] z-0 hidden h-28 w-28 rounded-full border border-white/8 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.3),rgba(255,255,255,0.04))] lg:block"
        style={{ y: offsetY * 0.18 }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[18%] right-[12%] z-0 hidden h-20 w-20 rounded-full border border-[#d6b173]/20 bg-[radial-gradient(circle_at_30%_30%,rgba(214,177,115,0.3),rgba(214,177,115,0.04))] lg:block"
        style={{ y: offsetY * -0.14 }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-[18%] z-0 hidden overflow-hidden lg:block"
        style={{ y: offsetY * 0.14 }}
      >
        <div className="mx-auto max-w-7xl px-4">
          <div className="font-head text-[11rem] font-semibold uppercase leading-none tracking-[-0.08em] text-white/[0.04]">
            Engineer
          </div>
        </div>
      </motion.div>

      <div className="mx-auto grid min-h-[calc(100vh-8rem)] max-w-7xl items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-[11px] uppercase tracking-[0.34em] text-white/60 backdrop-blur-md"
          >
            <span className="h-2 w-2 rounded-full bg-[#d6b173]" />
            Software Engineer
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.85 }}
            className="mt-8 max-w-4xl font-head text-[clamp(3.2rem,10vw,7.6rem)] font-semibold leading-[0.92] tracking-[-0.05em] text-white"
          >
            Shikder
            <br />
            <span className="bg-gradient-to-r from-[#f0d9a1] via-[#fff2cd] to-[#9ddcff] bg-clip-text text-transparent">
              Al Islam
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-6 max-w-xl text-base leading-8 text-white/66 md:text-lg"
          >
            Software engineer crafting clean interfaces, modern web products, and reliable full-stack experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-8 flex flex-col gap-4 sm:flex-row"
          >
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-full bg-[#d6b173] px-7 py-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#08101c] transition-transform duration-300 hover:-translate-y-1"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-white/14 bg-white/[0.04] px-7 py-4 text-sm font-semibold uppercase tracking-[0.24em] text-white transition-colors duration-300 hover:bg-white/[0.08]"
            >
              Let&apos;s Talk
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-12 grid max-w-2xl gap-4 sm:grid-cols-3"
          >
            {[
              ['3+', 'Years experience'],
              ['10+', 'Shipped builds'],
              ['Full Stack', 'Developer mindset'],
            ].map(([value, label]) => (
              <div key={label} className="glass-panel rounded-[1.75rem] p-5">
                <div className="font-head text-2xl text-white md:text-3xl">{value}</div>
                <div className="mt-2 text-sm uppercase tracking-[0.18em] text-white/45">{label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10"
          style={{ y: offsetY * -0.08 }}
        >
          <div className="relative mx-auto flex max-w-[28rem] justify-center lg:justify-end">
            <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(214,177,115,0.22),transparent_62%)] blur-3xl" />
            <div className="relative">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5.2, repeat: Infinity, ease: 'easeInOut' }}
                className="hero-photo-ring"
              >
                <div className="hero-photo-ring-inner">
                  <img
                    src={profileImage}
                    alt="Shikder Al Islam portrait"
                    className="h-[21rem] w-[21rem] rounded-full object-cover object-center sm:h-[25rem] sm:w-[25rem]"
                  />
                </div>
              </motion.div>

              <div className="absolute -bottom-3 left-1/2 w-[88%] -translate-x-1/2 rounded-full border border-white/10 bg-[#0a1321]/72 px-5 py-3 text-center backdrop-blur-xl">
                <div className="text-[10px] uppercase tracking-[0.34em] text-white/42">Developer Portfolio</div>
                <div className="mt-2 font-head text-xl text-white sm:text-2xl">Software Engineer</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-3 md:flex"
      >
        <span className="text-[10px] uppercase tracking-[0.35em] text-white/35">Scroll</span>
        <span className="flex h-16 w-8 items-start justify-center rounded-full border border-white/12 p-2">
          <span className="scroll-dot h-2.5 w-2.5 rounded-full bg-[#d6b173]" />
        </span>
      </motion.a>
    </section>
  );
};
