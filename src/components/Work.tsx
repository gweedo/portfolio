import { EXPERIENCE } from '../data/cv';
import { renderRich } from '../utils/renderRich';

export function Work() {
  return (
    <section id="work" className="at-section">
      <div className="at-section-hd">
        <span className="at-section-num">02 — Experience</span>
        <h2 className="at-section-title">Where my pipelines have run.</h2>
      </div>

      <div className="at-exp">
        {EXPERIENCE.map((job, i) => (
          <article
            key={job.company}
            className="at-job"
            data-reveal
            style={{ '--rd': `${i * 80}ms` }}
          >
            <div className="at-job-meta">
              <b>{job.company}</b>
              <div>{job.period}</div>
              <div>{job.location}</div>
            </div>
            <div className="at-job-head">
              <h3>{job.role}</h3>
              <p className="at-job-summary">{job.summary}</p>
              <div className="at-stack">
                {job.stack.map((s) => <span key={s}>{s}</span>)}
              </div>
            </div>
            {job.bullets.length > 0 && (
              <ul className="at-job-bullets">
                {job.bullets.map((b, k) => (
                  <li key={k}>{renderRich(b)}</li>
                ))}
              </ul>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
