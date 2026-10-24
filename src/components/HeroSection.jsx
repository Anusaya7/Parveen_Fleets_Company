import React, { useEffect, useState } from 'react';
import { Phone, ArrowRight, ShieldCheck, Zap, Car, ChevronLeft, ChevronRight } from 'lucide-react';

const HERO_SLIDES = [
  {
    image: '/images/fleet_luxury_suv.jpg',
    kicker: 'CXO & VIP travel',
    caption: 'Luxury SUVs for board meetings and delegations'
  },
  {
    image: '/images/hero_fleet.jpg',
    kicker: 'Enterprise grade mobility',
    caption: 'Toyota Hycross • Mercedes S-Class • Volvo Coaches'
  },
  {
    image: 'https://images.unsplash.com/photo-1485291571150-772bcfc10da5?auto=format&fit=crop&w=1920&q=80',
    kicker: 'Chauffeur-driven executive cars',
    caption: 'Mercedes, BMW and Audi protocol fleets'
  },
  {
    image: 'https://images.unsplash.com/photo-1544620341-11cb2cd57c62?auto=format&fit=crop&w=1920&q=80',
    kicker: 'Group & campus transport',
    caption: 'Luxury coaches and employee shuttle operations'
  },
  {
    image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=1920&q=80',
    kicker: 'PAN India coverage',
    caption: '112+ hubs with live GPS and 24×7 command support'
  }
];

export default function HeroSection({ onOpenQuote, onBookFleet }) {
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

  useEffect(() => {
    if (paused) return undefined;
    const timer = window.setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5500);
    return () => window.clearInterval(timer);
  }, [paused]);

  const goTo = (index) => {
    setSlideIndex((index + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  const handleQuickEstimate = (e) => {
    e.preventDefault();
    onOpenQuote({
      service: quickService,
      city: quickCity,
      notes: `Quick Estimator: Requirement for ${quickPassengers} in ${quickCity}`
    });
  };

  const activeSlide = HERO_SLIDES[slideIndex];

  return (
    <section
      id="home"
      className="home-hero"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="hero-slider" aria-hidden="true">
        {HERO_SLIDES.map((slide, index) => (
          <div
            key={slide.image}
            className={`hero-slide ${index === slideIndex ? 'is-active' : ''}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          />
        ))}
      </div>
      <div className="hero-slider-overlay" aria-hidden="true" />

      <div className="container hero-inner">
        <div className="hero-copy">
          <h1>
            India's Most Trusted
            <br />
            <span className="text-gradient-gold">Corporate Transportation Partner</span>
          </h1>

          <p className="hero-tagline">
            Redefining Travel with Safety, Comfort and Innovation
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
            <a href="tel:+919545899838" className="btn-outline">
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
          <div className="hero-slide-kicker">{activeSlide.kicker}</div>
          <div className="hero-slide-caption">{activeSlide.caption}</div>
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
          {HERO_SLIDES.map((slide, index) => (
            <button
              key={slide.kicker}
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
