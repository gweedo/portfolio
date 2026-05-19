import { useEffect } from 'react';

export function useReveal() {
  useEffect(() => {
    const root = document.querySelector('.atelier') as HTMLElement | null;

    if (!document.hidden && root) {
      root.classList.add('animate');
    }

    const vh = window.innerHeight;
    document.querySelectorAll('[data-reveal]').forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.top < vh * 0.9 && r.bottom > 0) {
        (el as HTMLElement).dataset.revealed = '';
      }
    });

    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll('[data-reveal]').forEach((el) => {
        (el as HTMLElement).dataset.revealed = '';
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).dataset.revealed = '';
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' },
    );

    document.querySelectorAll('[data-reveal]:not([data-revealed])').forEach((el) =>
      observer.observe(el),
    );

    return () => observer.disconnect();
  }, []);
}
