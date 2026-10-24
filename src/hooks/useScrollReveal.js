import { useEffect } from 'react';

const ITEM_SELECTOR = [
  '.section-head',
  '.stat-card',
  '.service-card',
  '.advantage-card',
  '.tech-card',
  '.fleet-card',
  '.blog-card',
  '.cities-state',
  '.cities-serve-map',
  '.cities-serve-panel',
  '.about-pillar',
  '.about-timeline',
  '.awards-panel',
  '.awards-merit',
  '.glass-card',
  '.clients-marquee-copy',
  '.clients-marquee-mask',
  '.service-filters',
  '.fleet-toolbar',
  '.blog-filters',
  '.safety-sim',
  '.compare-panel',
  '.glass-panel',
  '.hero-copy',
  '.hero-estimator',
  '.hero-slide-card',
  '.hero-controls'
].join(',');

export default function useScrollReveal(enabled = true) {
  useEffect(() => {
    if (!enabled || typeof window === 'undefined') return undefined;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    document.documentElement.classList.add('js-reveal');

    const sections = document.querySelectorAll('main section');
    sections.forEach((section) => {
      section.classList.add('reveal-section');
      const items = section.querySelectorAll(ITEM_SELECTOR);
      items.forEach((el, index) => {
        if (el.classList.contains('reveal-item')) return;
        el.classList.add('reveal-item');
        el.style.setProperty('--reveal-delay', `${Math.min(index, 10) * 70}ms`);
      });
    });

    const inViewNow = (el) => {
      const rect = el.getBoundingClientRect();
      return rect.bottom > 80 && rect.top < window.innerHeight * 0.92;
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-inview');
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );

    document.querySelectorAll('.reveal-section, .reveal-item').forEach((el) => {
      if (el.closest('#home') || inViewNow(el)) {
        el.classList.add('is-inview');
        return;
      }
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
      document.documentElement.classList.remove('js-reveal');
    };
  }, [enabled]);
}
