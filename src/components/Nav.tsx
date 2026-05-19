import { NAV } from '../data/cv';

export function Nav() {
  return (
    <nav className="at-nav">
      <div className="at-nav-row">
        <a href="#hero" className="at-brand"><i></i>Guido Soncini</a>
        <ul>
          {NAV.map((n) => (
            <li key={n.href}>
              <a
                href={n.href}
                {...(n.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >
                {n.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
