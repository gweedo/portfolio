import { useState, useEffect, useRef } from 'react';
import { NAV } from '../data/cv';

export function Nav() {
  const [open, setOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const burgerRef = useRef<HTMLButtonElement>(null);

  // Scroll lock + close on Escape / click-outside
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.width = '100%';

    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); };
    const onPointer = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onPointer);
    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('pointerdown', onPointer);
    };
  }, [open]);

  // Focus management
  useEffect(() => {
    if (open) {
      document.querySelector<HTMLAnchorElement>('#at-mobile-menu a')?.focus();
    } else {
      burgerRef.current?.focus();
    }
  }, [open]);

  // Close when resized back to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 900 && open) setOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <nav className="at-nav" ref={navRef}>
      <div className="at-nav-row">
        <a href="#hero" className="at-brand" onClick={closeMenu}><i></i>Guido Soncini</a>

        <ul className="at-nav-links">
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

        <button
          ref={burgerRef}
          className={`at-burger${open ? ' at-burger--open' : ''}`}
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="at-mobile-menu"
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          type="button"
        >
          <span className="at-burger-bar" />
          <span className="at-burger-bar" />
          <span className="at-burger-bar" />
        </button>
      </div>

      <div
        id="at-mobile-menu"
        className={`at-mobile-menu${open ? ' at-mobile-menu--open' : ''}`}
        aria-hidden={!open}
      >
        <ul className="at-mobile-links">
          {NAV.map((n) => (
            <li key={n.href}>
              <a
                href={n.href}
                onClick={closeMenu}
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
