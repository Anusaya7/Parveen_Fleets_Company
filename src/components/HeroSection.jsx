import React, { useState } from 'react';
import { Phone, ArrowRight, ShieldCheck, Zap, Sparkles, Car } from 'lucide-react';
import { HERO_STATS } from '../data/mockData';

export default function HeroSection({ onOpenQuote, onBookFleet }) {
  const [quickService, setQuickService] = useState('Employee Transportation');
  const [quickCity, setQuickCity] = useState('Pune');
  const [quickPassengers, setQuickPassengers] = useState('10 - 50 Employees');

  const handleQuickEstimate = (e) => {
    e.preventDefault();
    onOpenQuote({
      service: quickService,
      city: quickCity,
      notes: `Quick Estimator: Requirement for ${quickPassengers} in ${quickCity}`
    });
  };

  return (
    <section id="home" className="home-hero" style={{
      position: 'relative',
      minHeight: 'calc(100vh - 150px)',
      display: 'flex',
      alignItems: 'center',
      padding: '5rem 0 4rem',
      overflow: 'hidden',
      background: 'linear-gradient(130deg, #FAFCFF 0%, #EFF5FB 58%, #E6EFF8 100%)'
    }}>
      {/* Background Ambient Glows */}
      <div className="ambient-glow ambient-blue" style={{ width: '600px', height: '600px', top: '-10%', left: '-10%' }} />
      <div className="ambient-glow ambient-gold" style={{ width: '500px', height: '500px', top: '30%', right: '-10%' }} />

      {/* Grid Pattern Overlay */}
      <div className="bg-grid-pattern" style={{ position: 'absolute', inset: 0, opacity: 0.6, pointerEvents: 'none' }} />

      <div className="container" style={{ position: 'relative', zIndex: 1, width: '100%' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '3.5rem',
          alignItems: 'center'
        }}>
          
          {/* Left Column: Headline & Action */}
          <div>
            {/* Top Eyebrow Tag */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.25rem' }}>
              <div className="pill-gold">
                <Sparkles size={14} />
                <span>Trusted corporate mobility partner</span>
              </div>
              <div className="pill-blue">
                <span>Since 2012</span>
              </div>
            </div>

            {/* Headline */}
            <h1 style={{
              fontSize: 'clamp(2.4rem, 5vw, 3.8rem)',
              fontWeight: 900,
              letterSpacing: '-0.02em',
              lineHeight: 1.15,
              marginBottom: '1.5rem',
              color: '#102B4D'
            }}>
              India's Most Trusted
              <br />
              <span className="text-gradient-gold">Corporate Transportation</span>
              <br />
              Partner
            </h1>

            <p className="hero-tagline">
              Redefining Travel with Safety, Comfort and Innovation
            </p>

            {/* Subheading */}
            <p style={{
              fontSize: 'clamp(1.05rem, 2vw, 1.25rem)',
              color: '#526A84',
              lineHeight: 1.6,
              marginBottom: '2.25rem',
              maxWidth: '620px'
            }}>
              Technology-driven employee transportation, cab rentals, bus rentals, airport transfers, and fleet solutions across India — designed around safety, comfort, and reliability.
            </p>

            {/* Primary quote and contact actions */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1rem',
              marginBottom: '2.5rem'
            }}>
              <button
                onClick={() => onOpenQuote()}
                className="btn-gold"
                style={{ fontSize: '1rem', padding: '0.95rem 1.85rem' }}
              >
                <span>Get Instant Quote</span>
                <ArrowRight size={18} />
              </button>

              <button
                onClick={() => onBookFleet()}
                className="btn-outline"
                style={{ fontSize: '1rem', padding: '0.95rem 1.75rem' }}
              >
                <Car size={18} color="#FFD700" />
                <span>Book Fleet</span>
              </button>

              <a
                href="tel:+919545899838"
                className="btn-outline"
                style={{ fontSize: '0.95rem', padding: '0.95rem 1.5rem' }}
              >
                <Phone size={17} color="#FFD700" />
                <span>Call Now</span>
              </a>

            </div>

            {/* Quick Interactive Fleet Estimator Bar */}
            <div className="glass-panel" style={{
              padding: '1.25rem 1.5rem',
              borderRadius: '14px',
              border: '1px solid rgba(255, 215, 0, 0.25)',
              background: 'rgba(19, 49, 82, 0.94)',
              backdropFilter: 'blur(18px)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.85rem', color: '#FFD700', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                <Zap size={14} /> Quick Corporate Fleet Estimator
              </div>

              <form onSubmit={handleQuickEstimate} style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                gap: '0.75rem',
                alignItems: 'center'
              }}>
                <div>
                  <label style={{ fontSize: '0.75rem', color: '#94A3B8', display: 'block', marginBottom: '0.25rem' }}>Service</label>
                  <select
                    value={quickService}
                    onChange={(e) => setQuickService(e.target.value)}
                    className="pf-input"
                    style={{ padding: '0.6rem 0.75rem', fontSize: '0.85rem' }}
                  >
                    <option value="Employee Transportation" style={{ background: '#081B3A' }}>Employee Transport</option>
                    <option value="Corporate Cab Services" style={{ background: '#081B3A' }}>Corporate Cabs</option>
                    <option value="Luxury Car Rentals" style={{ background: '#081B3A' }}>Luxury Rentals (CXO)</option>
                    <option value="Bus & Coach Rentals" style={{ background: '#081B3A' }}>Bus & Coach Rentals</option>
                    <option value="Airport Transfers" style={{ background: '#081B3A' }}>Airport Transfers</option>
                  </select>
                </div>

                <div>
                  <label style={{ fontSize: '0.75rem', color: '#94A3B8', display: 'block', marginBottom: '0.25rem' }}>Location / City</label>
                  <select
                    value={quickCity}
                    onChange={(e) => setQuickCity(e.target.value)}
                    className="pf-input"
                    style={{ padding: '0.6rem 0.75rem', fontSize: '0.85rem' }}
                  >
                    <option value="Pune" style={{ background: '#081B3A' }}>Pune (HQ)</option>
                    <option value="Mumbai" style={{ background: '#081B3A' }}>Mumbai</option>
                    <option value="Delhi NCR" style={{ background: '#081B3A' }}>Delhi NCR</option>
                    <option value="Hyderabad" style={{ background: '#081B3A' }}>Hyderabad</option>
                    <option value="Bengaluru" style={{ background: '#081B3A' }}>Bengaluru</option>
                    <option value="PAN India" style={{ background: '#081B3A' }}>PAN India (Multi-City)</option>
                  </select>
                </div>

                <div>
                  <label style={{ fontSize: '0.75rem', color: '#94A3B8', display: 'block', marginBottom: '0.25rem' }}>Volume / Size</label>
                  <select
                    value={quickPassengers}
                    onChange={(e) => setQuickPassengers(e.target.value)}
                    className="pf-input"
                    style={{ padding: '0.6rem 0.75rem', fontSize: '0.85rem' }}
                  >
                    <option value="1 - 10 Passengers" style={{ background: '#081B3A' }}>1 - 10 Passengers</option>
                    <option value="10 - 50 Employees" style={{ background: '#081B3A' }}>10 - 50 Employees</option>
                    <option value="50 - 200 Employees" style={{ background: '#081B3A' }}>50 - 200 Employees</option>
                    <option value="200+ Enterprise" style={{ background: '#081B3A' }}>200+ Enterprise</option>
                  </select>
                </div>

                <div style={{ alignSelf: 'flex-end' }}>
                  <button
                    type="submit"
                    className="btn-gold"
                    style={{ width: '100%', padding: '0.65rem 1rem', fontSize: '0.85rem' }}
                  >
                    Calculate
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Right Column: Visual Fleet Presentation with Floating Telematics */}
          <div className="hero-visual-column" style={{ position: 'relative' }}>
            
            {/* Main Visual Frame */}
            <div className="hero-image-frame" style={{
              position: 'relative',
              borderRadius: '24px',
              overflow: 'hidden',
              border: '1px solid rgba(255, 255, 255, 0.26)',
              boxShadow: '0 32px 75px rgba(4, 21, 43, 0.45), 0 0 55px rgba(93, 160, 218, 0.18)'
            }}>
              <img
                src="/images/hero_fleet.jpg"
                alt="Parveen Fleets Luxury Fleet Showcase with Mercedes S-Class, Toyota Innova Hycross and Volvo Coach"
                fetchPriority="high"
                decoding="async"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  transform: 'scale(1.02)',
                  transition: 'transform 0.8s ease'
                }}
              />
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(8, 25, 48, 0.86) 0%, rgba(8, 25, 48, 0.12) 60%, transparent 100%)'
              }} />

              {/* In-Image Caption */}
              <div style={{
                position: 'absolute',
                bottom: '1.25rem',
                left: '1.5rem',
                right: '1.5rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '0.5rem'
              }}>
                <div>
                  <div style={{ color: '#FFD700', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.05em' }}>
                    ENTERPRISE GRADE MOBILITY
                  </div>
                  <div style={{ color: '#FFFFFF', fontWeight: 800, fontSize: '1rem' }}>
                    Toyota Hycross • Mercedes S-Class • Volvo Coaches
                  </div>
                </div>
                <div style={{
                  background: 'rgba(16, 185, 129, 0.2)',
                  border: '1px solid rgba(16, 185, 129, 0.4)',
                  color: '#34D399',
                  padding: '0.3rem 0.75rem',
                  borderRadius: '9999px',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem'
                }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10B981', display: 'inline-block' }} />
                  Live GPS Active
                </div>
              </div>
            </div>

            {/* Floating Telematics Widget 1: Top Left */}
            <div className="glass-panel animate-float" style={{
              position: 'absolute',
              top: '-20px',
              left: '-20px',
              padding: '0.85rem 1.25rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.85rem',
              borderRadius: '14px',
              border: '1px solid rgba(255, 215, 0, 0.35)',
              boxShadow: '0 15px 35px rgba(0, 0, 0, 0.5)'
            }}>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                background: 'linear-gradient(135deg, #FFD700, #FFA500)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#050A12'
              }}>
                <ShieldCheck size={22} />
              </div>
              <div>
                <div style={{ fontSize: '0.75rem', color: '#94A3B8', fontWeight: 600 }}>SAFETY INDEX</div>
                <div style={{ fontSize: '1.05rem', color: '#FFFFFF', fontWeight: 800 }}>100% PoSH & Verified</div>
              </div>
            </div>

            {/* Floating Telematics Widget 2: Bottom Right */}
            <div className="glass-panel animate-float-delayed" style={{
              position: 'absolute',
              bottom: '-25px',
              right: '-15px',
              padding: '0.85rem 1.25rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.85rem',
              borderRadius: '14px',
              border: '1px solid rgba(96, 165, 250, 0.35)',
              boxShadow: '0 15px 35px rgba(0, 0, 0, 0.5)'
            }}>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                background: 'linear-gradient(135deg, #113D89, #081B3A)',
                border: '1px solid #60A5FA',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#60A5FA'
              }}>
                <Zap size={22} />
              </div>
              <div>
                <div style={{ fontSize: '0.75rem', color: '#94A3B8', fontWeight: 600 }}>ON-TIME PERFORMANCE</div>
                <div style={{ fontSize: '1.05rem', color: '#FFD700', fontWeight: 800 }}>99.8% SLA Guaranteed</div>
              </div>
            </div>

          </div>

        </div>

        {/* Real-time Statistics Bar */}
        <div style={{
          marginTop: '4.5rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '1.25rem'
        }}>
          {HERO_STATS.map((stat, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                padding: '1.5rem',
                textAlign: 'center',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '2.5rem',
                fontWeight: 900,
                color: '#FFD700',
                lineHeight: 1,
                marginBottom: '0.4rem',
                textShadow: '0 0 20px rgba(255, 215, 0, 0.4)'
              }}>
                {stat.value}
              </div>
              <div style={{
                fontWeight: 700,
                color: '#FFFFFF',
                fontSize: '1rem',
                marginBottom: '0.2rem'
              }}>
                {stat.label}
              </div>
              <div style={{
                fontSize: '0.8rem',
                color: '#94A3B8'
              }}>
                {stat.sub}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
