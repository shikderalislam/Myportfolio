const projects = [
  {
    category: 'Featured Research',
    title: 'Person Re-Identification via Deep Learning',
    description:
      'A thesis project focused on identifying individuals across images and video frames using CNN-based architectures, augmentation strategies, and robust evaluation.',
    tags: ['Deep Learning', 'Computer Vision', 'Python', 'Research'],
    accent: 'bg-[radial-gradient(circle_at_top,rgba(214,177,115,0.36),transparent_60%)]',
  },
  {
    category: 'Applied ML',
    title: 'Email Spam Classifier',
    description:
      'Built a real-time classifier with strong accuracy using preprocessing pipelines and multiple ML models, packaged in an interactive web app.',
    tags: ['NLP', 'Streamlit', 'Classification'],
    accent: 'bg-[radial-gradient(circle_at_top,rgba(157,220,255,0.32),transparent_60%)]',
  },
  {
    category: 'Product Build',
    title: 'Library Management System',
    description:
      'A responsive app with CRUD flows, search, and dashboard management for smoother library operations and clearer system visibility.',
    tags: ['React', 'CRUD', 'Dashboard'],
    accent: 'bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.14),transparent_60%)]',
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="section-wrap reveal">
      <div className="section-intro">
        <div className="section-label">04 / Projects</div>
        <h2 className="section-title max-w-3xl">
          Selected work that blends technical depth with a sharper product lens.
        </h2>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <article className="premium-card group relative overflow-hidden p-6 md:p-8">
          <div className={`absolute inset-0 opacity-80 transition-transform duration-500 group-hover:scale-110 ${projects[0].accent}`} />
          <div className="relative z-10">
            <div className="eyebrow">{projects[0].category}</div>
            <h3 className="mt-5 max-w-2xl font-head text-4xl leading-tight text-white md:text-5xl">{projects[0].title}</h3>
            <p className="mt-5 max-w-2xl text-base leading-8 text-white/64">{projects[0].description}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              {projects[0].tags.map((tag) => (
                <span key={tag} className="skill-chip">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </article>

        <div className="grid gap-6">
          {projects.slice(1).map((project) => (
            <article key={project.title} className="premium-card group relative overflow-hidden p-6">
              <div className={`absolute inset-0 opacity-80 transition-transform duration-500 group-hover:scale-110 ${project.accent}`} />
              <div className="relative z-10">
                <div className="eyebrow">{project.category}</div>
                <h3 className="mt-4 font-head text-3xl leading-tight text-white">{project.title}</h3>
                <p className="mt-4 text-base leading-8 text-white/62">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-3">
                  {project.tags.map((tag) => (
                    <span key={tag} className="skill-chip">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
