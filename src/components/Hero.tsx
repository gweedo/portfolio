import { PROFILE } from '../data/cv';

export function Hero() {
  return (
    <header id="hero" className="at-hero">
      <div className="at-hero-left">
        <div>
          <p className="at-eyebrow" data-reveal>Portfolio · 2025</p>
          <h1 data-reveal style={{ '--rd': '60ms' }}>
            Guido<br />
            Sonc<span className="accent"><em>i</em></span>ni<span className="accent">.</span>
          </h1>
          <p className="at-role mono" data-reveal style={{ '--rd': '120ms' }}>
            <b>{PROFILE.role}</b> · {PROFILE.specialty}
          </p>
        </div>
        <div className="at-cta" data-reveal style={{ '--rd': '300ms' }}>
          <a href="#work" className="at-btn">Explore my work <span>→</span></a>
          <span className="at-status"><i></i>{PROFILE.status}</span>
        </div>
      </div>

      <div className="at-hero-side">
        <div className="at-photo" data-reveal style={{ '--rd': '180ms' }}>
          <img
            src={PROFILE.photo}
            alt={PROFILE.name}
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
          />
        </div>
        <p className="at-intro" data-reveal style={{ '--rd': '240ms' }}>{PROFILE.intro}</p>
      </div>

      <div className="at-watermark">
        <span>↓ Scroll</span>
        <span>Data Engineering</span>
        <span>Azure · Fabric · Python</span>
        <span>Est. 2020</span>
      </div>
    </header>
  );
}
