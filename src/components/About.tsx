import { motion } from 'framer-motion';

const stats = [
  { number: '3.70', label: 'CGPA / 4.0' },
  { number: '3+', label: 'Years building' },
  { number: '10+', label: 'Projects delivered' },
  { number: '5+', label: 'Certifications' },
];

export const About = () => {
  return (
    <section id="about" className="section-wrap reveal">
      <div className="section-intro">
        <div className="section-label">01 / About</div>
        <h2 className="section-title max-w-3xl">
          Building digital experiences that feel sharp, intentional, and premium from first scroll to final interaction.
        </h2>
      </div>

      <div className="mt-10 grid gap-8 xl:grid-cols-[1.05fr_0.95fr]">
        <div className="premium-card about-main-card p-6 md:p-8">
          <div className="eyebrow">Who I am</div>
          <div className="about-copy mt-4 max-w-3xl">
            <p className="text-base leading-8 text-white/68">
              I&apos;m a software engineer from Dhaka focused on modern web development, clean interfaces, scalable backend systems, and thoughtful product execution.
            </p>
            <p className="mt-4 text-base leading-8 text-white/62">
              My work blends frontend polish with engineering clarity so products feel simple, fast, and dependable across desktop and mobile.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-[1.4rem] border border-white/10 bg-white/[0.03] p-4">
              <div className="text-[11px] uppercase tracking-[0.26em] text-white/40">Current</div>
              <div className="mt-2 font-head text-2xl text-white">Softbeez</div>
              <div className="mt-1 text-sm text-white/55">Software Engineer</div>
            </div>
            <div className="rounded-[1.4rem] border border-white/10 bg-white/[0.03] p-4">
              <div className="text-[11px] uppercase tracking-[0.26em] text-white/40">Focus</div>
              <div className="mt-2 font-head text-2xl text-white">Full Stack</div>
              <div className="mt-1 text-sm text-white/55">Modern products and UX</div>
            </div>
          </div>
        </div>

        <div className="grid gap-8">
          <div className="premium-card p-6 md:p-8">
            <div className="eyebrow">Approach</div>
            <h3 className="mt-4 font-head text-3xl leading-tight text-white md:text-4xl">
              Design-led engineering with practical product sense.
            </h3>
            <p className="mt-5 max-w-xl text-base leading-8 text-white/62">
              I like interfaces that feel expensive but still convert, motion that adds depth without noise, and architecture that stays clean when products grow.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {stats.map((stat) => (
              <motion.div key={stat.label} whileHover={{ y: -6 }} className="premium-card p-6">
                <div className="font-head text-4xl text-white">{stat.number}</div>
                <div className="mt-3 text-[11px] uppercase tracking-[0.26em] text-white/42">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
