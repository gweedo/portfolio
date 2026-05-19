import React from 'react';
import { PROJECTS } from '../data/cv';

type Sector = 'Automotive' | 'Railway' | 'Legal';

interface SectorMarkProps {
  sector: Sector;
  size?: number;
  strokeWidth?: number;
}

function SectorMark({ sector, size = 22, strokeWidth = 1.5 }: SectorMarkProps) {
  const common: React.SVGProps<SVGSVGElement> = {
    width: size, height: size, viewBox: '0 0 32 32',
    fill: 'none', stroke: 'currentColor',
    strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round',
    'aria-hidden': true,
  };
  if (sector === 'Automotive') {
    return (
      <svg {...common}>
        <path d="M4 19 L7 13 L21 13 L25 19" />
        <line x1="3" y1="19" x2="29" y2="19" />
        <circle cx="10" cy="22" r="2.5" />
        <circle cx="22" cy="22" r="2.5" />
      </svg>
    );
  }
  if (sector === 'Railway') {
    return (
      <svg {...common}>
        <line x1="4" y1="11" x2="28" y2="11" />
        <line x1="4" y1="21" x2="28" y2="21" />
        <line x1="9" y1="8" x2="9" y2="24" />
        <line x1="16" y1="8" x2="16" y2="24" />
        <line x1="23" y1="8" x2="23" y2="24" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <line x1="5" y1="9" x2="27" y2="9" />
      <path d="M8 9 L8 23 M14 9 L14 23 M18 9 L18 23 M24 9 L24 23" />
      <line x1="4" y1="25" x2="28" y2="25" />
    </svg>
  );
}

interface SectorHeroProps {
  sector: Sector;
}

function SectorHero({ sector }: SectorHeroProps) {
  const common: React.SVGProps<SVGSVGElement> = {
    viewBox: '0 0 200 140',
    fill: 'none', stroke: 'currentColor',
    strokeWidth: 1.4, strokeLinecap: 'round', strokeLinejoin: 'round',
    'aria-hidden': true,
  };

  if (sector === 'Automotive') {
    return (
      <div className="at-project-hero">
        <svg {...common}>
          <line x1="10" y1="110" x2="190" y2="110" strokeDasharray="2 5" opacity=".55" />
          <path d="M18 100 L18 84 C18 78 22 74 28 74 L48 74 L62 56 C66 51 72 48 79 48 L132 48 C138 48 144 51 148 56 L162 74 L176 78 C182 80 184 84 184 90 L184 100" />
          <path d="M48 74 L162 74" />
          <path d="M62 56 L148 56" opacity=".7" />
          <line x1="86" y1="48" x2="80" y2="74" opacity=".7" />
          <line x1="118" y1="48" x2="124" y2="74" opacity=".7" />
          <line x1="102" y1="48" x2="102" y2="74" opacity=".55" />
          <line x1="74" y1="86" x2="86" y2="86" opacity=".6" />
          <line x1="118" y1="86" x2="130" y2="86" opacity=".6" />
          <path d="M40 100 A14 14 0 0 1 68 100" />
          <path d="M132 100 A14 14 0 0 1 160 100" />
          <circle cx="54" cy="104" r="14" />
          <circle cx="54" cy="104" r="6" opacity=".7" />
          <circle cx="146" cy="104" r="14" />
          <circle cx="146" cy="104" r="6" opacity=".7" />
          <line x1="180" y1="86" x2="184" y2="86" />
        </svg>
      </div>
    );
  }

  if (sector === 'Railway') {
    return (
      <div className="at-project-hero">
        <svg {...common}>
          <line x1="6" y1="118" x2="194" y2="118" />
          <line x1="6" y1="124" x2="194" y2="124" />
          <line x1="20" y1="116" x2="20" y2="126" opacity=".6" />
          <line x1="60" y1="116" x2="60" y2="126" opacity=".6" />
          <line x1="100" y1="116" x2="100" y2="126" opacity=".6" />
          <line x1="140" y1="116" x2="140" y2="126" opacity=".6" />
          <line x1="180" y1="116" x2="180" y2="126" opacity=".6" />
          <path d="M14 44 L14 100 C14 104 17 107 21 107 L179 107 C183 107 186 104 186 100 L186 44 C186 40 183 36 179 36 L21 36 C17 36 14 40 14 44 Z" />
          <line x1="14" y1="50" x2="186" y2="50" opacity=".5" />
          <rect x="24" y="58" width="22" height="22" rx="2" />
          <rect x="54" y="58" width="22" height="22" rx="2" />
          <rect x="84" y="58" width="22" height="22" rx="2" />
          <rect x="114" y="58" width="22" height="22" rx="2" />
          <rect x="144" y="58" width="22" height="22" rx="2" />
          <rect x="174" y="58" width="6" height="38" rx="1" opacity=".7" />
          <circle cx="38" cy="107" r="6" />
          <circle cx="58" cy="107" r="6" />
          <circle cx="142" cy="107" r="6" />
          <circle cx="162" cy="107" r="6" />
        </svg>
      </div>
    );
  }

  return (
    <div className="at-project-hero">
      <svg {...common}>
        <line x1="6" y1="128" x2="194" y2="128" strokeDasharray="2 5" opacity=".55" />
        <line x1="14" y1="120" x2="186" y2="120" />
        <line x1="20" y1="112" x2="180" y2="112" />
        <rect x="26" y="100" width="148" height="12" />
        {[40, 64, 88, 112, 136, 160].map((x) => (
          <g key={x}>
            <line x1={x} y1="56" x2={x} y2="100" />
            <line x1={x + 6} y1="56" x2={x + 6} y2="100" />
            <rect x={x - 2} y="52" width="10" height="4" />
            <rect x={x - 2} y="100" width="10" height="4" />
          </g>
        ))}
        <rect x="22" y="44" width="156" height="10" />
        <path d="M22 44 L100 16 L178 44 Z" />
        <circle cx="100" cy="36" r="4" opacity=".6" />
      </svg>
    </div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="at-section">
      <div className="at-section-hd">
        <span className="at-section-num">03 — Projects</span>
        <h2 className="at-section-title">Selected case studies.</h2>
      </div>

      <div className="at-projects">
        {PROJECTS.map((p, i) => (
          <a
            key={p.n}
            className="at-project"
            href="#"
            data-reveal
            style={{ '--rd': `${i * 60}ms` }}
          >
            <div className="at-project-num">
              Case Study {p.n}
              {p.flag && <small>— {p.flag}</small>}
            </div>
            <div>
              <h3>{p.title}</h3>
              <p>{p.blurb}</p>
              <div className="at-project-tags">
                {p.tags.map((t) => <span key={t}>{t}</span>)}
              </div>
              <span className="at-project-arrow">View case study →</span>
            </div>
            <div className="at-project-side">
              <div className="at-sector">
                <SectorMark sector={p.sector} size={22} strokeWidth={1.6} />
              </div>
              <b>{p.kind}</b>
              <SectorHero sector={p.sector} />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
