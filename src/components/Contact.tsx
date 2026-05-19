import { PROFILE } from '../data/cv';

export function Contact() {
  return (
    <>
      <section id="contact" className="at-section">
        <div className="at-section-hd">
          <span className="at-section-num">05 — Contact</span>
          <h2 className="at-section-title">Let's build something.</h2>
        </div>
        <div className="at-contact">
          <aside className="at-about-meta" data-reveal>
            <div>Reach out</div>
            <b>Any timezone</b>
            <div>Reply within 24h</div>
          </aside>
          <div data-reveal style={{ '--rd': '80ms' }}>
            <h2>
              Let's work{' '}
              <a href={`mailto:${PROFILE.email}`}>together</a>.
            </h2>
            <div className="at-contact-links">
              <a href={`mailto:${PROFILE.email}`}>
                <span>Email</span>
                <span>↗ {PROFILE.email}</span>
              </a>
              <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer">
                <span>LinkedIn</span>
                <span>↗ /guidosoncini</span>
              </a>
              <a href={`tel:${PROFILE.phone.replace(/\s/g, '')}`}>
                <span>Phone</span>
                <span>↗ {PROFILE.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="at-foot">
        <span>© 2025 Guido Soncini</span>
        <span>Data Engineer — Reggio Emilia, Italy</span>
      </footer>
    </>
  );
}
