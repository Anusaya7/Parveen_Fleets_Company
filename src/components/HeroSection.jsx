'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Phone, ArrowRight, ShieldCheck, Zap, Car, ChevronLeft, ChevronRight } from 'lucide-react';
import { useSiteContent } from '../context/SiteContentContext';
import { DEFAULT_HERO_SLIDES } from '../lib/defaultContent';

function buildHeroSlides(hero = {}) {
  if (hero.sliderMode === 'video') {
    const videos = (hero.videos || [])
      .map((item) => (typeof item === 'string' ? item : item?.video))
      .filter(Boolean)
      .map((video) => ({ type: 'video', video }));
    if (hero.videoUrl && !videos.some((item) => item.video === hero.videoUrl)) {
      videos.unshift({ type: 'video', video: hero.videoUrl });
    }
    if (videos.length) return videos;
  }

  return (hero.slides?.length ? hero.slides : DEFAULT_HERO_SLIDES)
    .map((slide) => ({ type: 'image', image: slide.image || '' }))
    .filter((slide) => slide.image);
}

function HeroVideo({ src, active }) {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;
    if (active) {
      node.play().catch(() => {});
    } else {
      node.pause();
    }
    return undefined;
  }, [active, src]);

  return (
    <video
      ref={ref}
      className="hero-slide-video"
      src={src}
      muted
      loop
      playsInline
      autoPlay={active}
    />
  );
}

export default function HeroSection({ onOpenQuote, onBookFleet }) {
  const { content } = useSiteContent();
  const hero = content.hero || {};
  const slides = buildHeroSlides(hero);
  const phone = content.company?.phones?.[0] || '+91 95458 99838';
  const [quickService, setQuickService] = useState('Employee Transportation');
  const [quickCity, setQuickCity] = useState('Pune');
  const [quickPassengers, setQuickPassengers] = useState('10 - 50 Employees');
  const [slideIndex, setSlideIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const setHeaderOffset = () => {
      const header = document.querySelector('header');
      const topbar = document.querySelector('.site-topbar');
      const height = (header?.offsetHeight || 0) + (topbar?.offsetHeight || 0);
      document.documentElement.style.setProperty('--site-header-offset', `${height}px`);
    };
    setHeaderOffset();
    window.addEventListener('resize', setHeaderOffset);
    return () => window.removeEventListener('resize', setHeaderOffset);
  }, []);

  const activeSlide = slides[slideIndex] || slides[0] || {};
  const activeIsVideo = activeSlide.type === 'video' || Boolean(activeSlide.video);

  useEffect(() => {
    if (slideIndex >= slides.length) setSlideIndex(0);
  }, [slideIndex, slides.length]);

  useEffect(() => {
    setSlideIndex(0);
  }, [hero.sliderMode]);

  useEffect(() => {
    if (paused || slides.length < 2) return undefined;
    const timer = window.setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % slides.length);
    }, activeIsVideo ? 10000 : 5500);
    return () => window.clearInterval(timer);
  }, [paused, activeIsVideo, slides.length]);

  const goTo = (index) => {
    setSlideIndex((index + slides.length) % Math.max(slides.length, 1));
  };

  const handleQuickEstimate = (e) => {
    e.preventDefault();
    onOpenQuote({
      service: quickService,
      city: quickCity,
      notes: `Quick Estimator: Requirement for ${quickPassengers} in ${quickCity}`
    });
  };

  return (
    <section
      id="home"
      className="home-hero"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="hero-slider" aria-hidden="true">
        {slides.map((slide, index) => {
          const isVideo = slide.type === 'video' || Boolean(slide.video);
          const media = slide.video || slide.image;
          return (
            <div
              key={`${media}-${index}`}
              className={`hero-slide ${index === slideIndex ? 'is-active' : ''}`}
              style={isVideo ? undefined : { backgroundImage: `url(${media})` }}
            >
              {isVideo ? <HeroVideo src={media} active={index === slideIndex} /> : null}
            </div>
          );
        })}
      </div>
      <div className="hero-slider-overlay" aria-hidden="true" />

      <div className="container hero-inner">
        <div className="hero-copy">
          <h1>
            {hero.title || "India's Most Trusted"}
            <br />
            <span className="text-gradient-gold">{hero.highlight || 'Corporate Transportation Partner'}</span>
          </h1>

          <p className="hero-tagline">
            {hero.tagline || 'Redefining Travel with Safety, Comfort and Innovation'}
          </p>

          <div className="hero-actions">
            <button onClick={() => onOpenQuote()} className="btn-gold">
              <span>Get Instant Quote</span>
              <ArrowRight size={18} />
            </button>
            <button onClick={() => onBookFleet()} className="btn-outline">
              <Car size={18} />
              <span>Book Fleet</span>
            </button>
            <a href={`tel:${String(phone).replace(/[^\d+]/g, '')}`} className="btn-outline">
              <Phone size={17} />
              <span>Call Now</span>
            </a>
          </div>

          <div className="hero-estimator">
            <div className="hero-estimator-label">
              <Zap size={14} /> Quick Corporate Fleet Estimator
            </div>
            <form onSubmit={handleQuickEstimate} className="hero-estimator-form">
              <label>
                <span>Service</span>
                <select value={quickService} onChange={(e) => setQuickService(e.target.value)} className="pf-input">
                  <option value="Employee Transportation">Employee Transport</option>
                  <option value="Corporate Cab Services">Corporate Cabs</option>
                  <option value="Luxury Car Rentals">Luxury Rentals (CXO)</option>
                  <option value="Bus & Coach Rentals">Bus & Coach Rentals</option>
                  <option value="Airport Transfers">Airport Transfers</option>
                </select>
              </label>
              <label>
                <span>Location / City</span>
                <select value={quickCity} onChange={(e) => setQuickCity(e.target.value)} className="pf-input">
                  <option value="Pune">Pune (HQ)</option>
                  <option value="Mumbai">Mumbai</option>
                  <option value="Delhi NCR">Delhi NCR</option>
                  <option value="Hyderabad">Hyderabad</option>
                  <option value="Bengaluru">Bengaluru</option>
                  <option value="PAN India">PAN India (Multi-City)</option>
                </select>
              </label>
              <label>
                <span>Volume / Size</span>
                <select value={quickPassengers} onChange={(e) => setQuickPassengers(e.target.value)} className="pf-input">
                  <option value="1 - 10 Passengers">1 - 10 Passengers</option>
                  <option value="10 - 50 Employees">10 - 50 Employees</option>
                  <option value="50 - 200 Employees">50 - 200 Employees</option>
                  <option value="200+ Enterprise">200+ Enterprise</option>
                </select>
              </label>
              <button type="submit" className="btn-gold">Calculate</button>
            </form>
          </div>
        </div>

        <aside className="hero-slide-card">
          <div className="hero-live-badge">
            <span /> Live GPS Active
          </div>
          <div className="hero-slide-kicker">{hero.highlight || 'Corporate Transportation Partner'}</div>
          <div className="hero-slide-caption">{hero.tagline || 'Redefining Travel with Safety, Comfort and Innovation'}</div>
          <div className="hero-float-row">
            <div className="hero-float-item">
              <ShieldCheck size={18} />
              <div>
                <small>Safety index</small>
                <strong>100% PoSH verified</strong>
              </div>
            </div>
            <div className="hero-float-item">
              <Zap size={18} />
              <div>
                <small>On-time SLA</small>
                <strong>99.8% guaranteed</strong>
              </div>
            </div>
          </div>
        </aside>
      </div>

      <div className="hero-controls">
        <button type="button" className="hero-nav" aria-label="Previous slide" onClick={() => goTo(slideIndex - 1)}>
          <ChevronLeft size={20} />
        </button>
        <div className="hero-dots" role="tablist" aria-label="Hero slides">
          {slides.map((slide, index) => (
            <button
              key={`${slide.image || slide.video || 'slide'}-${index}`}
              type="button"
              role="tab"
              aria-selected={index === slideIndex}
              aria-label={`Show slide ${index + 1}`}
              className={index === slideIndex ? 'is-active' : ''}
              onClick={() => goTo(index)}
            />
          ))}
        </div>
        <button type="button" className="hero-nav" aria-label="Next slide" onClick={() => goTo(slideIndex + 1)}>
          <ChevronRight size={20} />
        </button>
      </div>
    </section>
  );
}
