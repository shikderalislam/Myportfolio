const experiences = [
  {
    company: 'Softbeez',
    role: 'Software Engineer',
    period: 'Mar 2024 - Present',
    summary:
      'Building dynamic websites and web apps with JavaScript, PHP, and Laravel, integrating APIs and shipping secure, production-ready experiences.',
  },
  {
    company: 'Fiverr',
    role: 'Freelance Developer',
    period: 'Feb 2023 - Present',
    summary:
      'Delivered tailored WordPress and web solutions for clients across industries, balancing speed, customization, and strong visual polish.',
  },
  {
    company: 'Trends Bird Ltd',
    role: 'Associate Software Engineer',
    period: 'Sep 2023 - Mar 2024',
    summary:
      'Worked on customized software solutions that improved functionality and efficiency across client-facing products.',
  },
  
  {
    company: 'MEC Computer Club',
    role: 'President',
    period: 'Jan 2022 - Jan 2023',
    summary:
      'Led mentorship, programming initiatives, and collaborative learning in web development, AI, and career growth.',
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="section-wrap reveal">
      <div className="section-intro">
        <div className="section-label">03 / Experience</div>
        <h2 className="section-title max-w-3xl">
          Professional work grounded in shipping, iteration, and clear client value.
        </h2>
      </div>

      <div className="mt-10 space-y-4">
        {experiences.map((experience) => (
          <article key={`${experience.company}-${experience.role}`} className="timeline-card">
            <div className="grid gap-6 lg:grid-cols-[0.7fr_0.9fr_1.4fr] lg:items-start">
              <div>
                <div className="font-head text-3xl text-white">{experience.company}</div>
                <div className="mt-2 text-sm uppercase tracking-[0.22em] text-[#d6b173]">{experience.role}</div>
              </div>
              <div className="text-sm uppercase tracking-[0.22em] text-white/40">{experience.period}</div>
              <p className="text-base leading-8 text-white/62">{experience.summary}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
