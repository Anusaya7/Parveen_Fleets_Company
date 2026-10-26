import React, { useEffect, useRef, useState } from 'react';
import { Users, Car, Crown, PlaneTakeoff, BusFront, CalendarClock, ShieldAlert, Compass, ArrowRight, CheckCircle, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import { SERVICES_DATA } from '../data/mockData';
import { useSiteContent } from '../context/SiteContentContext';

const iconMap = {
  Users,
  Car,
  Crown,
  PlaneTakeoff,
  BusFront,
  CalendarClock,
  ShieldAlert,
  Compass
};

function getVisibleCount() {
  if (typeof window === 'undefined') return 3;
  if (window.innerWidth <= 680) return 1;
  if (window.innerWidth <= 1100) return 2;
  return 3;
}

export default function ServicesSection({ onSelectService }) {
  const [activeFilter, setActiveFilter] = useState('all');
  const [index, setIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const [paused, setPaused] = useState(false);
  const viewportRef = useRef(null);
  const { content } = useSiteContent();
  const catalog = content.services?.length ? content.services : SERVICES_DATA;
  const filters = [
    { id: 'all', label: 'All services' },
    { id: 'commute', label: 'Employee commute' },
    { id: 'executive', label: 'Executive travel' },
    { id: 'group', label: 'Groups & events' }
  ];
  const serviceGroups = {
    commute: ['employee-transportation', 'shuttle-services'],
    executive: ['corporate-cabs', 'luxury-rentals', 'airport-transfers', 'long-term-rentals'],
    group: ['bus-coach-rentals', 'tourism-solutions']
  };
  const visibleServices = activeFilter === 'all'
    ? catalog
    : catalog.filter((service) => serviceGroups[activeFilter]?.includes(service.id));
  const maxIndex = Math.max(0, visibleServices.length - visibleCount);

  const scrollToIndex = (nextIndex) => {
    const viewport = viewportRef.current;
    const card = viewport?.querySelector('.service-card');
    if (!viewport || !card) return;
    const gap = Number.parseFloat(getComputedStyle(viewport).gap) || 0;
    const bounded = Math.max(0, Math.min(nextIndex, maxIndex));
    viewport.scrollTo({ left: bounded * (card.offsetWidth + gap), behavior: 'smooth' });
    setIndex(bounded);
  };

  const go = (direction) => {
    if (maxIndex === 0) return;
    let next = index + direction;
    if (next < 0) next = maxIndex;
    if (next > maxIndex) next = 0;
    scrollToIndex(next);
  };

  useEffect(() => {
    const onResize = () => setVisibleCount(getVisibleCount());
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    setIndex(0);
    viewportRef.current?.scrollTo({ left: 0, behavior: 'auto' });
  }, [activeFilter, visibleCount]);

  useEffect(() => {
    if (paused || maxIndex === 0) return undefined;
    const timer = window.setInterval(() => {
      const viewport = viewportRef.current;
      const card = viewport?.querySelector('.service-card');
      if (!viewport || !card) return;
      const gap = Number.parseFloat(getComputedStyle(viewport).gap) || 0;
      const current = Math.round(viewport.scrollLeft / (card.offsetWidth + gap));
      const next = current >= maxIndex ? 0 : current + 1;
      viewport.scrollTo({ left: next * (card.offsetWidth + gap), behavior: 'smooth' });
      setIndex(next);
    }, 5200);
    return () => window.clearInterval(timer);
  }, [paused, maxIndex]);

  return (
    <section id="services" className="services-section section-padding">
      <div className="container">
        <div className="section-head">
          <div className="pill-gold">
            <Sparkles size={14} />
            <span>Comprehensive Corporate Mobility Suite</span>
          </div>
          <h2>
            Engineered For <span className="text-gradient-gold">Enterprise Excellence</span>
          </h2>
          <p>
            From automated daily employee commutes to high-protocol CXO luxury delegations, Parveen Fleets delivers turnkey, reliable transportation across 112+ Indian cities.
          </p>
        </div>

        <div
          className="services-stage"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
        <div className="services-toolbar">
          <div className="service-filters" role="group" aria-label="Filter services">
            {filters.map((filter) => (
              <button
                key={filter.id}
                type="button"
                aria-pressed={activeFilter === filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={activeFilter === filter.id ? 'is-active' : ''}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {maxIndex > 0 ? (
            <div className="services-nav-group">
              <button type="button" className="services-nav" aria-label="Previous services" onClick={() => go(-1)}>
                <ChevronLeft size={20} />
              </button>
              <button type="button" className="services-nav" aria-label="Next services" onClick={() => go(1)}>
                <ChevronRight size={20} />
              </button>
            </div>
          ) : null}
        </div>

        <div className="services-carousel">
          <div
            ref={viewportRef}
            className="services-viewport"
            role="region"
            aria-roledescription="carousel"
            aria-label="Corporate mobility services"
            onScroll={(event) => {
              const viewport = event.currentTarget;
              const card = viewport.querySelector('.service-card');
              if (!card) return;
              const gap = Number.parseFloat(getComputedStyle(viewport).gap) || 0;
              setIndex(Math.round(viewport.scrollLeft / (card.offsetWidth + gap)));
            }}
          >
            {visibleServices.map((service, serviceIndex) => {
              const IconComponent = iconMap[service.icon] || Car;

              return (
                <article
                  key={service.id}
                  className={`service-card ${service.popular ? 'is-featured' : ''}`}
                >
                  {service.image ? (
                    <div className="service-card-media">
                      <img src={service.image} alt={service.title} />
                    </div>
                  ) : null}
                  <div className="service-card-top">
                    <div className="service-card-icon">
                      <IconComponent size={22} />
                    </div>
                    {service.popular ? (
                      <span className="service-featured">Featured</span>
                    ) : (
                      <span className="service-index">0{serviceIndex + 1}</span>
                    )}
                  </div>

                  <h3>{service.title}</h3>
                  <div className="service-tagline">{service.tagline}</div>
                  <p>{service.description}</p>

                  <ul className="service-features">
                    {(service.features || []).map((feat) => (
                      <li key={feat}>
                        <CheckCircle size={15} />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <button type="button" className="service-cta" onClick={() => onSelectService(service)}>
                    <span>Book {service.title}</span>
                    <ArrowRight size={16} />
                  </button>
                </article>
              );
            })}
          </div>
        </div>

        {maxIndex > 0 ? (
          <div className="services-dots" role="tablist" aria-label="Service carousel pages">
            {Array.from({ length: maxIndex + 1 }, (_, page) => (
              <button
                key={page}
                type="button"
                role="tab"
                aria-selected={index === page}
                className={index === page ? 'is-active' : ''}
                onClick={() => scrollToIndex(page)}
              />
            ))}
          </div>
        ) : null}
        </div>
      </div>
    </section>
  );
}
