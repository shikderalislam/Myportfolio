import { motion } from 'framer-motion';

const education = [
  {
    period: 'Apr 2026 - Running',
    title: 'M.Sc in Engg. in CSE',
    school: 'Military Institute of Science and Technology (MIST)',
    detail:
      'Currently pursuing postgraduate study in computer science and engineering to deepen research, systems thinking, and advanced technical knowledge.',
  },
  {
    period: '2018 - 2023',
    title: 'Bachelor of Computer Science and Engineering',
    school: 'University of Dhaka, Bangladesh',
    detail:
      'Graduated with a CGPA of 3.70/4.0. Thesis centered on person re-identification from images and videos using deep learning.',
  },
  {
    period: '2015 - 2017',
    title: 'Higher Secondary Certificate - Science',
    school: 'Vashantek Government College, Dhaka',
    detail:
      'Built a strong foundation in mathematics, analytical reasoning, and scientific problem solving.',
  },
];

const certifications = [
  { title: 'Problem Solving', issuer: 'HackerRank', link: 'https://www.hackerrank.com/' },
  { title: 'Python', issuer: 'HackerRank', link: 'https://www.hackerrank.com/' },
  { title: 'JavaScript', issuer: 'HackerRank', link: 'https://www.hackerrank.com/' },
  { title: 'Git and GitHub', issuer: 'Udemy', link: 'https://www.udemy.com/' },
  { title: 'Problem Solving', issuer: 'Codeforces', link: 'https://codeforces.com/' },
  { title: 'Problem Solving', issuer: 'CodeChef', link: 'https://www.codechef.com/' },
];

export const Education = () => {
  return (
    <section id="education" className="section-wrap reveal">
      <div className="section-intro">
        <div className="section-label">05 / Education</div>
        <h2 className="section-title max-w-3xl">
          Academic depth, continuous learning, and a strong problem-solving foundation.
        </h2>
      </div>

      <div className="education-timeline mt-10">
        {education.map((item, index) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: index * 0.08 }}
            className="timeline-entry"
          >
            <div className="timeline-year">{item.period}</div>
            <div className="timeline-dot" />
            <div className="premium-card timeline-panel p-6 md:p-8">
              <div className="eyebrow">Qualification</div>
              <h3 className="mt-4 font-head text-3xl leading-tight text-white">{item.title}</h3>
              <div className="mt-3 text-sm uppercase tracking-[0.22em] text-[#d6b173]">{item.school}</div>
              <p className="mt-5 text-base leading-8 text-white/62">{item.detail}</p>
            </div>
          </motion.article>
        ))}
      </div>

      <div className="mt-10 premium-card p-6 md:p-8">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="eyebrow">Certifications</div>
            <h3 className="mt-3 font-head text-3xl text-white">Selected credentials and learning platforms</h3>
          </div>
          <div className="text-sm text-white/42">Modern credential showcase</div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {certifications.map((certification, index) => (
            <motion.a
              key={`${certification.title}-${certification.issuer}`}
              href={certification.link}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.05 }}
              className="certificate-card"
            >
              <div className="certificate-top">
                <span className="certificate-badge">{certification.issuer}</span>
                <span className="certificate-arrow">↗</span>
              </div>
              <div className="mt-6 font-head text-2xl text-white">{certification.title}</div>
              <div className="mt-3 text-sm leading-7 text-white/52">
                View issuer page and present your certifications in a cleaner, more premium layout.
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
