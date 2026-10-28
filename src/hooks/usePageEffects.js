import { useEffect } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

const prefersReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Lenis smooth scroll plus the [data-fade] reveal used across every section.
const usePageEffects = () => {
  useEffect(() => {
    let lenis;
    if (!prefersReducedMotion()) {
      lenis = new Lenis({
        autoRaf: true,
        anchors: true,
        lerp: 0.07,
        wheelMultiplier: 0.8,
      });
    }

    document.documentElement.classList.add('fade-ready');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: '0px 0px -10% 0px' }
    );
    document.querySelectorAll('[data-fade]').forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
      lenis?.destroy();
    };
  }, []);
};

export { prefersReducedMotion };
export default usePageEffects;
