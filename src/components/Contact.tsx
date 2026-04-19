export const Contact = () => {
  return (
    <section id="contact" className="section-wrap reveal pb-20">
      <div className="premium-card relative overflow-hidden px-6 py-10 md:px-10 md:py-14">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(214,177,115,0.22),transparent_38%),radial-gradient(circle_at_bottom_right,rgba(157,220,255,0.15),transparent_30%)]" />

        <div className="relative z-10 grid gap-10 xl:grid-cols-[0.9fr_1.1fr] xl:items-start">
          <div className="max-w-3xl">
            <div className="section-label">06 / Contact</div>
            <h2 className="section-title max-w-2xl">Let&apos;s build something sharp and modern.</h2>
            <p className="mt-4 max-w-xl text-base leading-8 text-white/56">
              For freelance work, collaborations, or software engineering opportunities.
            </p>

            <div className="contact-meta mt-8">
              <a href="mailto:shikderalislam@gmail.com" className="contact-mini-link">
                <span>Email</span>
                <strong>shikderalislam@gmail.com</strong>
              </a>
              <a href="tel:+8801832828601" className="contact-mini-link">
                <span>Phone</span>
                <strong>+880 183 2828 601</strong>
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {['Dhaka, Bangladesh', 'Open to Remote', 'Fast Response'].map((item) => (
                <span key={item} className="skill-chip">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <form
            action="https://formsubmit.co/shikderalislam@gmail.com"
            method="POST"
            className="contact-form"
          >
            <input type="hidden" name="_subject" value="New portfolio contact message" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />

            <div className="grid gap-4 md:grid-cols-2">
              <label className="form-field">
                <span>Name</span>
                <input type="text" name="name" placeholder="Your name" required />
              </label>
              <label className="form-field">
                <span>Email</span>
                <input type="email" name="email" placeholder="your@email.com" required />
              </label>
            </div>

            <label className="form-field mt-4">
              <span>Subject</span>
              <input type="text" name="subject" placeholder="Project subject" required />
            </label>

            <label className="form-field mt-4">
              <span>Message</span>
              <textarea name="message" rows={6} placeholder="Tell me about your project or opportunity" required />
            </label>

            <button
              type="submit"
              className="mt-5 inline-flex items-center justify-center rounded-full bg-[#d6b173] px-7 py-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#08101c] transition-transform duration-300 hover:-translate-y-1"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
