const skillGroups = [
  {
    title: 'Frontend',
    description: 'Refined interfaces, responsive systems, smooth interactions.',
    skills: ['React', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    title: 'Backend',
    description: 'Reliable APIs, full-stack delivery, practical integrations.',
    skills: ['Node.js', 'PHP', 'Laravel', 'REST APIs', 'WordPress'],
  },
  {
    title: 'Machine Learning',
    description: 'Research-backed experimentation and applied intelligence.',
    skills: ['Python', 'Deep Learning', 'CNN', 'Streamlit', 'Data Visualization'],
  },
  {
    title: 'Engineering',
    description: 'Strong fundamentals, collaboration, and deployment discipline.',
    skills: ['Git/GitHub', 'Cloud Computing', 'RDBMS', 'DevOps', 'C / C++'],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="section-wrap reveal">
      <div className="section-intro">
        <div className="section-label">02 / Skills</div>
        <h2 className="section-title max-w-3xl">
          A modern stack shaped by product work, research, and hands-on client delivery.
        </h2>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {skillGroups.map((group) => (
          <div key={group.title} className="premium-card p-6 md:p-8">
            <div className="eyebrow">{group.title}</div>
            <p className="mt-4 max-w-md text-base leading-8 text-white/62">{group.description}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              {group.skills.map((skill) => (
                <span key={skill} className="skill-chip">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
