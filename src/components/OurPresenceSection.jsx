import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, Building2, Search, CheckCircle, Phone, ArrowRight, Globe, Sparkles, Radio } from 'lucide-react';
import { OPERATIONAL_STATES, COMPANY_INFO } from '../data/mockData';

export default function OurPresenceSection({ onOpenQuote }) {
  const [selectedState, setSelectedState] = useState(OPERATIONAL_STATES[0]);
  const [searchQuery, setSearchQuery] = useState('');
  const [hoveredCity, setHoveredCity] = useState(null);

  const filteredStates = OPERATIONAL_STATES.filter(state =>
    state.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    state.hubs.some(hub => hub.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  // Strategic Headquarters & Key Hubs with map coordinates (% based on India map crop)
  const KEY_HUBS = [
    {
      id: 'pune',
      name: 'Pune',
      role: 'National Corporate Headquarters',
      top: '58%',
      left: '34%',
      cabs: '280+ Active Fleet',
      sla: '15-Min Emergency SLA',
      isHQ: true
    },
    {
      id: 'mumbai',
      name: 'Mumbai',
      role: 'BKC & Andheri Hub',
      top: '55%',
      left: '28%',
      cabs: '190+ Active Fleet',
      sla: '20-Min SLA Response',
      isHQ: false
    },
    {
      id: 'delhi',
      name: 'Delhi NCR',
      role: 'Aerocity & Gurugram Regional Hub',
      top: '31%',
      left: '38%',
      cabs: '220+ Active Fleet',
      sla: '20-Min SLA Response',
      isHQ: false
    },
    {
      id: 'hyderabad',
      name: 'Hyderabad',
      role: 'Hitec City & Kukatpally Regional Hub',
      top: '64%',
      left: '46%',
      cabs: '175+ Active Fleet',
      sla: '20-Min SLA Response',
      isHQ: false
    }
  ];

  return (
    <section id="presence" className="section-padding bg-obsidian mesh-grid" style={{ position: 'relative' }}>
      
      {/* Background Ambient Glow */}
      <div 
        style={{ 
          position: 'absolute',
          width: '650px', 
          height: '650px', 
          bottom: '10%', 
          left: '-5%',
          background: 'radial-gradient(circle, rgba(0, 200, 150, 0.16) 0%, transparent 70%)',
          filter: 'blur(130px)',
          pointerEvents: 'none',
          zIndex: 0
        }} 
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 3.5rem auto' }}>
          <div className="pill-emerald" style={{ marginBottom: '1rem' }}>
            <Globe size={14} />
            <span>PAN India Operational Network</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2.2rem, 3.8vw, 3.4rem)', marginBottom: '1.25rem' }}>
            Operating Across <span className="text-gradient-emerald">112+ Indian Locations</span>
          </h2>
          <p style={{ fontSize: '1.1rem', color: '#94A3B8', lineHeight: 1.75 }}>
            Headquartered in Pune with major regional command hubs in Mumbai, Delhi NCR, and Hyderabad. Experience guaranteed single-vendor enterprise mobility in any industrial or tech corridor in India.
          </p>
        </div>

        {/* Search Bar */}
        <div style={{
          maxWidth: '560px',
          margin: '0 auto 3rem auto',
          position: 'relative'
        }}>
          <Search size={18} color="#00C896" style={{ position: 'absolute', left: '1.2rem', top: '50%', transform: 'translateY(-50%)' }} />
          <input
            type="text"
            placeholder="Search city, state or corridor (e.g., Pune, BKC, Hitec City, Noida)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pf-input"
            style={{ paddingLeft: '3.2rem', fontSize: '0.95rem' }}
          />
        </div>

        {/* 2-Column: Dark Mode India Map with Pulsing Dots (Left) & State Directory (Right) */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '2.5rem',
          alignItems: 'center'
        }}>
          
          {/* Left Column: Real PDF India Map with Dark Mode Filter & Pulsing Emerald Dots */}
          <motion.div 
            className="glass-panel"
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            style={{
              padding: '1.75rem',
              borderRadius: '24px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              background: 'rgba(15, 23, 42, 0.7)',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 25px 60px rgba(0, 0, 0, 0.75), 0 0 35px rgba(0, 200, 150, 0.15)'
            }}
          >
            {/* Header info */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem', flexWrap: 'wrap', gap: '0.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span className="pill-gold" style={{ padding: '0.2rem 0.65rem', fontSize: '0.7rem' }}>
                  PDF PAGE 11
                </span>
                <span style={{ color: '#FFFFFF', fontWeight: 800, fontSize: '0.95rem' }}>
                  Interactive National Fleet Grid
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#00C896', fontSize: '0.76rem', fontWeight: 700 }}>
                <Radio size={13} className="animate-pulse" />
                <span>Sub-Second Telematics</span>
              </div>
            </div>

            {/* Map Canvas with Dark Mode Invert Filter & Pulsing Dots */}
            <div style={{
              position: 'relative',
              width: '100%',
              minHeight: '440px',
              background: '#04070E',
              borderRadius: '16px',
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '1rem'
            }}>
              {/* Real Map Image from PDF (Page 11) Color-Corrected to Dark Obsidian & Emerald */}
              <img
                src="/images/assets/india_cities_map_dark.png"
                alt="Parveen Fleets Cities We Serve India Map from Company Profile PDF"
                loading="lazy"
                decoding="async"
                style={{
                  width: '100%',
                  height: 'auto',
                  maxHeight: '480px',
                  objectFit: 'contain',
                  filter: 'drop-shadow(0 0 25px rgba(0, 200, 150, 0.25))',
                  borderRadius: '12px'
                }}
              />

              {/* Pulsing Emerald Dot: Mumbai */}
              {KEY_HUBS.map((hub) => (
                <div
                  key={hub.id}
                  style={{
                    position: 'absolute',
                    top: hub.top,
                    left: hub.left,
                    transform: 'translate(-50%, -50%)',
                    zIndex: 10,
                    cursor: 'pointer'
                  }}
                  onMouseEnter={() => setHoveredCity(hub)}
                  onMouseLeave={() => setHoveredCity(null)}
                >
                  {/* Ping Animation Ring */}
                  <div style={{
                    position: 'absolute',
                    width: '26px',
                    height: '26px',
                    borderRadius: '50%',
                    background: 'rgba(0, 200, 150, 0.45)',
                    transform: 'translate(-50%, -50%)',
                    top: '50%',
                    left: '50%'
                  }} className="animate-ping-emerald" />

                  {/* Core Glowing Dot */}
                  <div style={{
                    width: hub.isHQ ? '14px' : '11px',
                    height: hub.isHQ ? '14px' : '11px',
                    borderRadius: '50%',
                    background: hub.isHQ ? '#D4AF37' : '#00C896',
                    border: '2px solid #FFFFFF',
                    boxShadow: hub.isHQ ? '0 0 15px #D4AF37' : '0 0 15px #00C896',
                    position: 'relative'
                  }} />

                  {/* Permanent City Name Tag */}
                  <div style={{
                    position: 'absolute',
                    top: '15px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: 'rgba(5, 8, 15, 0.85)',
                    border: '1px solid ' + (hub.isHQ ? '#D4AF37' : 'rgba(0, 200, 150, 0.4)'),
                    color: hub.isHQ ? '#D4AF37' : '#FFFFFF',
                    fontSize: '0.68rem',
                    fontWeight: 800,
                    padding: '0.15rem 0.45rem',
                    borderRadius: '4px',
                    whiteSpace: 'nowrap',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.8)'
                  }}>
                    {hub.name} {hub.isHQ && '★ (HQ)'}
                  </div>
                </div>
              ))}

              {/* Hover Tooltip Card */}
              {hoveredCity && (
                <div style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  background: 'rgba(15, 23, 42, 0.95)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(0, 200, 150, 0.4)',
                  padding: '0.85rem 1.15rem',
                  borderRadius: '12px',
                  boxShadow: '0 12px 30px rgba(0,0,0,0.8), 0 0 20px rgba(0, 200, 150, 0.2)',
                  zIndex: 20,
                  maxWidth: '220px'
                }}>
                  <div style={{ color: '#00C896', fontWeight: 800, fontSize: '0.92rem' }}>
                    {hoveredCity.name} Hub
                  </div>
                  <div style={{ fontSize: '0.72rem', color: '#94A3B8', marginTop: '2px' }}>
                    {hoveredCity.role}
                  </div>
                  <div style={{ marginTop: '0.5rem', fontSize: '0.78rem', color: '#F8FAFC', fontWeight: 700 }}>
                    {hoveredCity.cabs}
                  </div>
                  <div style={{ fontSize: '0.72rem', color: '#D4AF37', fontWeight: 600 }}>
                    {hoveredCity.sla}
                  </div>
                </div>
              )}
            </div>

            {/* Quick 4 Metro Legend */}
            <div style={{
              marginTop: '1.25rem',
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '0.5rem',
              textAlign: 'center',
              fontSize: '0.75rem'
            }}>
              <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '0.5rem', borderRadius: '8px', border: '1px solid rgba(212, 175, 55, 0.3)' }}>
                <strong style={{ color: '#D4AF37', display: 'block' }}>Pune (HQ)</strong>
                <span style={{ color: '#94A3B8', fontSize: '0.7rem' }}>280+ Cabs</span>
              </div>
              <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '0.5rem', borderRadius: '8px', border: '1px solid rgba(0, 200, 150, 0.2)' }}>
                <strong style={{ color: '#00C896', display: 'block' }}>Mumbai</strong>
                <span style={{ color: '#94A3B8', fontSize: '0.7rem' }}>190+ Cabs</span>
              </div>
              <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '0.5rem', borderRadius: '8px', border: '1px solid rgba(0, 200, 150, 0.2)' }}>
                <strong style={{ color: '#00C896', display: 'block' }}>Delhi NCR</strong>
                <span style={{ color: '#94A3B8', fontSize: '0.7rem' }}>220+ Cabs</span>
              </div>
              <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '0.5rem', borderRadius: '8px', border: '1px solid rgba(0, 200, 150, 0.2)' }}>
                <strong style={{ color: '#00C896', display: 'block' }}>Hyderabad</strong>
                <span style={{ color: '#94A3B8', fontSize: '0.7rem' }}>175+ Cabs</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: State Directory & City Hubs List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            
            {/* Active Selected State Card */}
            <div className="glass-card" style={{ padding: '2rem', borderRadius: '20px', border: '1px solid rgba(0, 200, 150, 0.35)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                <div>
                  <div style={{ fontSize: '0.72rem', color: '#D4AF37', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                    OPERATIONAL REGION SELECTED
                  </div>
                  <h3 style={{ fontSize: '1.6rem', color: '#FFFFFF', fontWeight: 800 }}>
                    {selectedState.name}
                  </h3>
                </div>
                <span className="pill-emerald" style={{ padding: '0.35rem 0.85rem' }}>
                  {selectedState.vehicles}
                </span>
              </div>

              <p style={{ color: '#94A3B8', fontSize: '0.9rem', marginBottom: '1.25rem' }}>
                {selectedState.status}
              </p>

              {/* City Hub Chips */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.75rem' }}>
                {selectedState.hubs.map((city, idx) => (
                  <span
                    key={idx}
                    style={{
                      background: 'rgba(0, 200, 150, 0.08)',
                      border: '1px solid rgba(0, 200, 150, 0.25)',
                      color: '#F8FAFC',
                      padding: '0.35rem 0.75rem',
                      borderRadius: '8px',
                      fontSize: '0.82rem',
                      fontWeight: 600,
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem'
                    }}
                  >
                    <MapPin size={12} color="#00C896" />
                    {city}
                  </span>
                ))}
              </div>

              <button
                onClick={() => onOpenQuote({ city: selectedState.name, notes: `PAN India deployment in ${selectedState.name}` })}
                className="btn-emerald"
                style={{ width: '100%', padding: '0.85rem', fontSize: '0.92rem' }}
              >
                <span>Deploy Fleet in {selectedState.name}</span>
                <ArrowRight size={16} />
              </button>
            </div>

            {/* Quick State Grid Selector */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
              gap: '0.65rem',
              maxHeight: '260px',
              overflowY: 'auto',
              paddingRight: '0.35rem'
            }}>
              {filteredStates.map((state) => {
                const isSelected = selectedState.name === state.name;
                return (
                  <div
                    key={state.name}
                    onClick={() => setSelectedState(state)}
                    style={{
                      padding: '0.85rem',
                      cursor: 'pointer',
                      borderRadius: '12px',
                      border: isSelected ? '1px solid #00C896' : '1px solid rgba(255, 255, 255, 0.07)',
                      background: isSelected ? 'rgba(0, 200, 150, 0.12)' : 'rgba(15, 23, 42, 0.5)',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <div style={{ fontWeight: 700, fontSize: '0.88rem', color: isSelected ? '#00C896' : '#FFFFFF' }}>
                      {state.name}
                    </div>
                    <div style={{ fontSize: '0.72rem', color: '#94A3B8', marginTop: '2px' }}>
                      {state.hubs.length} Hubs
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
