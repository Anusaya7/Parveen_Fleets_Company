import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  ShieldCheck, 
  Zap, 
  Sparkles, 
  Car, 
  Radio, 
  MapPin, 
  Clock, 
  TrendingUp,
  Building2,
  CheckCircle2,
  ChevronRight
} from 'lucide-react';

export default function HeroSection({ onOpenQuote, onBookFleet }) {
  const [quickService, setQuickService] = useState('Employee Transportation');
  const [quickCity, setQuickCity] = useState('Pune');
  const [quickPassengers, setQuickPassengers] = useState('10 - 50 Employees');
  // Dynamic live telematics ticker
  const [livePings, setLivePings] = useState(248);
  useEffect(() => {
    const timer = setInterval(() => {
      setLivePings((prev) => prev + (Math.random() > 0.4 ? 1 : 0));
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const handleQuickEstimate = (e) => {
    e.preventDefault();
    onOpenQuote({
      service: quickService,
      city: quickCity,
      notes: `Quick Estimator: Requirement for ${quickPassengers} in ${quickCity}`
    });
  };

  const STATS_BAND = [
    {
      stat: "2012 → 2021",
      label: "Genesis to Pvt Ltd",
      sub: "13+ Years of Sovereign Corporate Trust",
      icon: TrendingUp,
      badge: "Sovereign Heritage"
    },
    {
      stat: "112+",
      label: "Operational Hubs",
      sub: "Pan-India Tier 1 & Tier 2 Coverage",
      icon: MapPin,
      badge: "National Network"
    },
    {
      stat: "3 Major Hubs",
      label: "Strategic Regional HQ",
      sub: "Pune (HQ) • Mumbai • Delhi NCR • Hyderabad",
      icon: Building2,
      badge: "Tier-1 Depots"
    },
    {
      stat: "100%",
      label: "Certified & Verified",
      sub: "ISO 9001:2015 & PoSH Compliant Chauffeurs",
      icon: ShieldCheck,
      badge: "Zero Compromise"
    }
  ];

  return (
    <section 
      id="home" 
      className="bg-obsidian mesh-grid" 
      style={{
        position: 'relative',
        padding: '2.5rem 0 5rem',
        overflow: 'hidden'
      }}
    >
      {/* Cinematic Headquarters Background Image Layer (Cleaned Facade, No 'GLOBALSPIRE HQ') */}
      <div 
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: "url('/images/hero_fleet_clean_hq.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center 40%',
          opacity: 0.36,
          filter: 'saturate(1.12) contrast(1.06)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      {/* Multi-tier Obsidian Vignette & Scrim Overlays for Superior Contrast & Readability */}
      <div 
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(90deg, #05080F 0%, rgba(5, 8, 15, 0.94) 38%, rgba(5, 8, 15, 0.72) 65%, rgba(5, 8, 15, 0.50) 85%, rgba(5, 8, 15, 0.88) 100%)',
          pointerEvents: 'none',
          zIndex: 1
        }}
      />
      <div 
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, #05080F 0%, transparent 18%, transparent 75%, #05080F 100%)',
          pointerEvents: 'none',
          zIndex: 1
        }}
      />

      {/* Massive Soft Emerald Radial Glow behind text */}
      <div 
        style={{ 
          position: 'absolute',
          width: '750px', 
          height: '750px', 
          top: '-15%', 
          left: '-15%',
          background: 'radial-gradient(circle, rgba(0, 200, 150, 0.22) 0%, rgba(5, 8, 15, 0) 70%)',
          filter: 'blur(130px)',
          pointerEvents: 'none',
          zIndex: 0
        }} 
      />

      {/* Secondary Soft Emerald to Cyan Glow on right */}
      <div 
        style={{ 
          position: 'absolute',
          width: '700px', 
          height: '700px', 
          top: '0%', 
          right: '-10%',
          background: 'radial-gradient(circle, rgba(0, 200, 150, 0.20) 0%, rgba(0, 229, 255, 0.08) 40%, rgba(5, 8, 15, 0) 70%)',
          filter: 'blur(130px)',
          pointerEvents: 'none',
          zIndex: 0
        }} 
      />

      <div className="container" style={{ position: 'relative', zIndex: 2, width: '100%' }}>
        
        {/* Main Grid: Left Headline/CTAs & Right Cinematic PDF Vehicle (Top-Aligned) */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '3rem',
          alignItems: 'start'
        }}>
          
          {/* Left Column: Headline, Trust Badges, CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Badges Pill Row */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
              <div className="pill-emerald" style={{ boxShadow: '0 0 18px rgba(0, 200, 150, 0.3)' }}>
                <Radio size={13} className="animate-pulse" />
                <span>₹100Cr+ Corporate Fleet Standard</span>
              </div>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
                padding: '0.35rem 0.85rem',
                borderRadius: '999px',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                color: '#CBD5E1',
                fontSize: '0.78rem',
                fontWeight: 600
              }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#00E5FF', boxShadow: '0 0 8px #00E5FF' }} />
                <span>Pan-India Tier-1 Mobility</span>
              </div>
            </div>

            {/* Eyebrow Label */}
            <div className="eyebrow-label" style={{ marginBottom: '0.85rem' }}>
              INDIA'S PREMIER ENTERPRISE CHAUFFEUR MOBILITY
            </div>

            {/* Massive H1 with gradient text: Pure White to Emerald-Cyan Gradient */}
            <h1 style={{
              fontSize: 'clamp(2.5rem, 5.2vw, 4.2rem)',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              lineHeight: 1.12,
              marginBottom: '1.35rem',
              color: '#FFFFFF'
            }}>
              Built on Trust.
              <br />
              Powered by <span className="text-gradient-emerald-cyan">Innovation.</span>
            </h1>

            {/* Editorial Subheading in Slate-300 */}
            <p style={{
              fontSize: 'clamp(1.05rem, 1.8vw, 1.22rem)',
              color: '#CBD5E1',
              lineHeight: 1.75,
              marginBottom: '2.25rem',
              maxWidth: '65ch',
              fontWeight: 400
            }}>
              Precision corporate transportation, executive chauffeur transit, and smart telematics 
              engineered for India’s Fortune 500 enterprises. Delivering 99.8% on-time arrivals 
              across 112+ strategic hubs.
            </p>

            {/* Two Main CTAs: Emerald Primary with Gold Hover Border + Ghost Secondary */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1rem',
              alignItems: 'center',
              marginBottom: '2.75rem'
            }}>
              <button
                onClick={() => onOpenQuote()}
                className="btn-emerald"
                style={{ fontSize: '1rem', padding: '1rem 2.2rem' }}
                id="hero-request-quote-btn"
              >
                <span>Request Enterprise Quote</span>
                <ArrowRight size={18} />
              </button>

              <button
                onClick={() => onBookFleet()}
                className="btn-ghost"
                style={{ fontSize: '1rem', padding: '1rem 1.85rem' }}
                id="hero-explore-fleet-btn"
              >
                <Car size={18} color="#00C896" />
                <span>Explore Fleet</span>
              </button>

              <a
                href="tel:+919545899838"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: '#94A3B8',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  padding: '0.5rem 0.75rem',
                  borderRadius: '8px',
                  transition: 'color 0.2s ease'
                }}
                className="hover-emerald"
              >
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#00C896', display: 'inline-block', boxShadow: '0 0 10px #00C896' }} />
                <span>24/7 Hotline: +91 95458 99838</span>
              </a>
            </div>

            {/* Quick Interactive Fleet Estimator Glass Surface */}
            <div className="glass-panel" style={{
              padding: '1.35rem 1.6rem',
              borderRadius: '20px',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              background: 'rgba(15, 23, 42, 0.7)',
              position: 'relative'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Zap size={15} color="#00C896" />
                  <span style={{ color: '#F8FAFC', fontSize: '0.82rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                    Instant Corporate Dispatch Estimator
                  </span>
                </div>
                <span style={{ fontSize: '0.72rem', color: '#00C896', fontWeight: 600, background: 'rgba(0, 200, 150, 0.1)', padding: '0.2rem 0.6rem', borderRadius: '999px', border: '1px solid rgba(0, 200, 150, 0.25)' }}>
                  30-Min SLA Response
                </span>
              </div>

              <form onSubmit={handleQuickEstimate} style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(135px, 1fr))',
                gap: '0.85rem',
                alignItems: 'flex-end'
              }}>
                <div>
                  <label style={{ fontSize: '0.72rem', color: '#94A3B8', display: 'block', marginBottom: '0.35rem', fontWeight: 600 }}>
                    MOBILITY SERVICE
                  </label>
                  <select
                    value={quickService}
                    onChange={(e) => setQuickService(e.target.value)}
                    className="pf-input"
                    style={{ padding: '0.65rem 0.85rem', fontSize: '0.85rem' }}
                  >
                    <option value="Employee Transportation">Employee Transportation</option>
                    <option value="Executive Chauffeur Transit">Executive Chauffeur (CXO)</option>
                    <option value="Corporate Cab Solutions">Dedicated Corporate Cabs</option>
                    <option value="Luxury Bus & Coach Rentals">Luxury Coaches (Volvo/Scania)</option>
                    <option value="Airport VIP Transfers">Airport VIP Chauffeur</option>
                  </select>
                </div>

                <div>
                  <label style={{ fontSize: '0.72rem', color: '#94A3B8', display: 'block', marginBottom: '0.35rem', fontWeight: 600 }}>
                    METRO / OPERATING HUB
                  </label>
                  <select
                    value={quickCity}
                    onChange={(e) => setQuickCity(e.target.value)}
                    className="pf-input"
                    style={{ padding: '0.65rem 0.85rem', fontSize: '0.85rem' }}
                  >
                    <option value="Pune">Pune (National HQ)</option>
                    <option value="Mumbai">Mumbai (BKC Hub)</option>
                    <option value="Delhi NCR">Delhi NCR (Aerocity)</option>
                    <option value="Hyderabad">Hyderabad (Hitec City)</option>
                    <option value="Bengaluru">Bengaluru (Whitefield)</option>
                    <option value="PAN India Multi-City">PAN India (Multi-City)</option>
                  </select>
                </div>

                <div>
                  <label style={{ fontSize: '0.72rem', color: '#94A3B8', display: 'block', marginBottom: '0.35rem', fontWeight: 600 }}>
                    EMPLOYEE VOLUME
                  </label>
                  <select
                    value={quickPassengers}
                    onChange={(e) => setQuickPassengers(e.target.value)}
                    className="pf-input"
                    style={{ padding: '0.65rem 0.85rem', fontSize: '0.85rem' }}
                  >
                    <option value="1 - 10 Passengers">1 - 10 Passengers (Chauffeur)</option>
                    <option value="10 - 50 Employees">10 - 50 Employees (Mid-Tier)</option>
                    <option value="50 - 250 Employees">50 - 250 Employees (Corporate)</option>
                    <option value="250+ Enterprise Scale">250+ Enterprise Scale (Custom)</option>
                  </select>
                </div>

                <div>
                  <button
                    type="submit"
                    className="btn-emerald"
                    style={{ width: '100%', padding: '0.72rem 1rem', fontSize: '0.86rem' }}
                  >
                    Calculate SLA
                  </button>
                </div>
              </form>
            </div>
          </motion.div>

          {/* Right Column: Authentic Chauffeur & Vehicle Floating in Front of Cinematic HQ */}
          <motion.div 
            style={{ 
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: '100%',
              marginTop: '0.5rem'
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Seamless Studio Vehicle Display (Zero Green Box, Masked Bottom Blend) */}
            <div style={{
              position: 'relative',
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: '480px'
            }}>
              {/* Soft Emerald to Cyan Studio Radial Glow BEHIND Vehicle */}
              <div style={{
                position: 'absolute',
                width: '580px',
                height: '500px',
                top: '40%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                background: 'radial-gradient(ellipse at 50% 50%, rgba(0, 200, 150, 0.28) 0%, rgba(0, 229, 255, 0.12) 42%, transparent 72%)',
                filter: 'blur(60px)',
                pointerEvents: 'none',
                zIndex: 0
              }} />

              {/* Ground Shadow underneath the vehicle */}
              <div style={{
                position: 'absolute',
                bottom: '15px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '84%',
                height: '35px',
                background: 'radial-gradient(ellipse at 50% 50%, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0.55) 45%, transparent 75%)',
                filter: 'blur(8px)',
                pointerEvents: 'none',
                zIndex: 1
              }} />

              {/* Real Vehicle & Chauffeur Image Floating in Foreground */}
              <motion.img
                src="/images/assets/car_innova_hycross_transparent.png"
                alt="Parveen Fleets Toyota Innova Hycross & Chauffeur"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.55, ease: 'easeOut' }}
                fetchPriority="high"
                decoding="async"
                style={{
                  width: '100%',
                  maxWidth: '540px',
                  height: 'auto',
                  maxHeight: '500px',
                  objectFit: 'contain',
                  position: 'relative',
                  zIndex: 2,
                  filter: 'drop-shadow(0 25px 35px rgba(0,0,0,0.9)) drop-shadow(0 0 25px rgba(0, 200, 150, 0.2))',
                  maskImage: 'linear-gradient(to bottom, black 86%, transparent 100%)',
                  WebkitMaskImage: 'linear-gradient(to bottom, black 86%, transparent 100%)'
                }}
              />

              {/* Floating Badge 1: 100% PoSH & Police Verified (Top Left, Elevated Glassmorphism) */}
              <motion.div 
                className="hero-floating-glass"
                style={{
                  position: 'absolute',
                  top: '12px',
                  left: '-10px',
                  padding: '0.85rem 1.25rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  zIndex: 3
                }}
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut' }}
              >
                <div style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  background: 'linear-gradient(135deg, #00C896 0%, #00E5FF 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#05080F',
                  boxShadow: '0 0 15px rgba(0, 200, 150, 0.4)'
                }}>
                  <ShieldCheck size={22} />
                </div>
                <div>
                  <div style={{ fontSize: '0.66rem', color: '#94A3B8', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                    SAFETY INDEX
                  </div>
                  <div style={{ fontSize: '0.98rem', color: '#FFFFFF', fontWeight: 800 }}>
                    100% PoSH & Verified
                  </div>
                </div>
              </motion.div>

              {/* Floating Badge 2: 99.8% On-Time SLA (Bottom Right, Elevated Glassmorphism) */}
              <motion.div 
                className="hero-floating-glass"
                style={{
                  position: 'absolute',
                  bottom: '25px',
                  right: '-10px',
                  padding: '0.85rem 1.25rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  border: '1px solid rgba(0, 229, 255, 0.35)',
                  zIndex: 3
                }}
                animate={{ y: [0, 6, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut', delay: 0.5 }}
              >
                <div style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  background: 'linear-gradient(135deg, rgba(0, 229, 255, 0.2) 0%, rgba(0, 200, 150, 0.15) 100%)',
                  border: '1px solid rgba(0, 229, 255, 0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#00E5FF',
                  boxShadow: '0 0 15px rgba(0, 229, 255, 0.3)'
                }}>
                  <Zap size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '0.66rem', color: '#94A3B8', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                    ON-TIME PERFORMANCE
                  </div>
                  <div style={{ fontSize: '1rem', color: '#FFFFFF', fontWeight: 800 }}>
                    <span className="font-mono" style={{ color: '#00E5FF' }}>99.8%</span> SLA Guaranteed
                  </div>
                </div>
              </motion.div>

              {/* Sub-Car Specification & Telematics Pill */}
              <div style={{
                position: 'absolute',
                bottom: '-12px',
                left: '50%',
                transform: 'translateX(-50%)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.65rem',
                padding: '0.45rem 1.15rem',
                background: 'rgba(15, 23, 42, 0.88)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                borderRadius: '999px',
                border: '1px solid rgba(0, 200, 150, 0.25)',
                zIndex: 3,
                whiteSpace: 'nowrap',
                boxShadow: '0 10px 25px rgba(0, 0, 0, 0.6)'
              }}>
                <Sparkles size={12} color="#00C896" />
                <span style={{ color: '#FFFFFF', fontSize: '0.8rem', fontWeight: 700 }}>
                  Toyota Innova Hycross • Executive Chauffeur
                </span>
                <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#00C896', display: 'inline-block', boxShadow: '0 0 6px #00C896' }} />
                <span style={{ color: '#00E5FF', fontSize: '0.74rem', fontWeight: 700 }}>
                  {livePings} Live Telematics Pings
                </span>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Phase 1 Stats Band: 2012→2021, 112+ hubs, 3 Major Hubs, 100% Certified */}
        <div style={{
          marginTop: '5rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1.5rem',
          position: 'relative'
        }}>
          {STATS_BAND.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={idx}
                className="glass-card card-gold-hairline"
                style={{
                  padding: '2rem 1.75rem',
                  position: 'relative',
                  overflow: 'hidden',
                  background: 'rgba(15, 23, 42, 0.65)'
                }}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.25 }}
              >
                {/* Header row with icon and pill */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                  <div style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '12px',
                    background: 'rgba(0, 200, 150, 0.08)',
                    border: '1px solid rgba(0, 200, 150, 0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#00C896'
                  }}>
                    <IconComponent size={22} />
                  </div>

                  <span style={{
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    letterSpacing: '0.06em',
                    color: '#D4AF37',
                    textTransform: 'uppercase',
                    background: 'rgba(212, 175, 55, 0.08)',
                    padding: '0.2rem 0.6rem',
                    borderRadius: '6px',
                    border: '1px solid rgba(212, 175, 55, 0.25)'
                  }}>
                    {item.badge}
                  </span>
                </div>

                {/* Big Space Grotesk tabular data number */}
                <div className="font-mono" style={{
                  fontSize: 'clamp(2rem, 3.2vw, 2.75rem)',
                  fontWeight: 700,
                  color: '#F8FAFC',
                  lineHeight: 1.1,
                  marginBottom: '0.5rem',
                  letterSpacing: '-0.03em'
                }}>
                  {item.stat}
                </div>

                {/* Primary Metric Label */}
                <div style={{
                  fontWeight: 700,
                  color: '#00C896',
                  fontSize: '1rem',
                  marginBottom: '0.35rem',
                  letterSpacing: '-0.01em'
                }}>
                  {item.label}
                </div>

                {/* Subtext description */}
                <div style={{
                  fontSize: '0.84rem',
                  color: '#94A3B8',
                  lineHeight: 1.5
                }}>
                  {item.sub}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
