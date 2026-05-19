import { ABOUT, STATS, CERTS } from '../data/cv';
import { renderRich } from '../utils/renderRich';

export function About() {
  return (
    <section id="about" className="at-section">
      <div className="at-section-hd">
        <span className="at-section-num">01 — About</span>
        <h2 className="at-section-title">A patient builder of invisible systems.</h2>
      </div>

      <div className="at-about">
        <aside className="at-about-meta" data-reveal>
          <div>Based</div>
          <b>Reggio Emilia</b>
          <div>Italy</div>
          <br />
          <div>Available</div>
          <b>Q1 2026</b>
        </aside>

        <div className="at-about-body" data-reveal style={{ '--rd': '80ms' }}>
          {ABOUT.slice(0, 2).map((p, i) => (
            <p key={i}>{renderRich(p.body)}</p>
          ))}
        </div>

        <div className="at-about-body" data-reveal style={{ '--rd': '160ms' }}>
          {ABOUT.slice(2).map((p, i) => (
            <p key={i}>{renderRich(p.body)}</p>
          ))}
        </div>

        <div className="at-stats" data-reveal style={{ '--rd': '240ms' }}>
          {STATS.map((s) => (
            <div key={s.label} className="at-stat">
              <div className="at-stat-v">
                {s.value}
                {s.plus && <sup>+</sup>}
                {s.mark && <sup>{s.mark}</sup>}
              </div>
              <div className="at-stat-l">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="at-certs" data-reveal style={{ '--rd': '300ms' }}>
          {CERTS.map((c) => (
            <div key={c.title} className="at-cert">
              <div>
                <h4 className="at-cert-t">{c.title}</h4>
                <div className="at-cert-m">{c.meta}</div>
              </div>
              <div className="at-cert-y">{c.year}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
