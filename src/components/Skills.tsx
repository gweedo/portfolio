import { SKILLS } from '../data/cv';

export function Skills() {
  return (
    <section id="skills" className="at-section">
      <div className="at-section-hd">
        <span className="at-section-num">04 — Skills</span>
        <h2 className="at-section-title">Tools I reach for.</h2>
      </div>

      <div className="at-skills">
        <aside className="at-about-meta" data-reveal>
          <div>Stack</div>
          <b>Microsoft</b>
          <div>+ Open source</div>
        </aside>
        <div className="at-skill-groups">
          {SKILLS.map((g, i) => (
            <div
              key={g.group}
              className="at-skill-group"
              data-reveal
              style={{ '--rd': `${i * 80}ms` }}
            >
              <h4>{g.group}</h4>
              <div className="at-skill-list">
                {g.items.map((it) => <span key={it}>{it}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
