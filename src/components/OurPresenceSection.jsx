import React, { useState } from 'react';
import { MapPin, Navigation, Building2, Search, CheckCircle, Phone, ArrowRight, Globe } from 'lucide-react';
import { OPERATIONAL_STATES, COMPANY_INFO } from '../data/mockData';

export default function OurPresenceSection({ onOpenQuote }) {
  const [selectedState, setSelectedState] = useState(OPERATIONAL_STATES[0]);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredStates = OPERATIONAL_STATES.filter(state =>
    state.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    state.hubs.some(hub => hub.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <section id="presence" className="section-padding" style={{ position: 'relative' }}>
      
      {/* Background Ambient Glow */}
      <div className="ambient-glow ambient-blue" style={{ width: '500px', height: '500px', bottom: '10%', left: '-5%' }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 3.5rem auto' }}>
          <div className="pill-gold" style={{ marginBottom: '1rem' }}>
            <Globe size={14} />
            <span>PAN India Operational Network</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', marginBottom: '1.25rem' }}>
            Operating Across <span className="text-gradient-gold">112+ Indian Locations</span>
          </h2>
          <p style={{ fontSize: '1.1rem', color: '#94A3B8', lineHeight: 1.6 }}>
            Headquartered in Pune with major regional command hubs in Mumbai, Delhi NCR, and Hyderabad. Experience guaranteed single-vendor enterprise mobility in any industrial or tech corridor in India.
          </p>
        </div>

        {/* Search and Overview Bar */}
        <div style={{
          maxWidth: '600px',
          margin: '0 auto 2.5rem auto',
          position: 'relative'
        }}>
          <Search size={18} color="#FFD700" style={{ position: 'absolute', left: '1.2rem', top: '50%', transform: 'translateY(-50%)' }} />
          <input
            type="text"
            placeholder="Search city, state or industrial corridor (e.g., Pune, BKC, Hitec City, Noida)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pf-input"
            style={{ paddingLeft: '3rem', fontSize: '0.95rem' }}
          />
        </div>

        {/* 2-Column Interactive Map & Hub Viewer */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2rem',
          alignItems: 'start'
        }}>
          
          {/* Left Column: Interactive State Selector Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '0.85rem',
            maxHeight: '520px',
            overflowY: 'auto',
            paddingRight: '0.5rem'
          }}>
            {filteredStates.map((state) => {
              const isSelected = selectedState.name === state.name;

              return (
                <div
                  key={state.name}
                  onClick={() => setSelectedState(state)}
                  className="glass-card"
                  style={{
                    padding: '1.2rem',
                    cursor: 'pointer',
                    border: isSelected ? '1.5px solid #FFD700' : '1px solid rgba(255, 255, 255, 0.08)',
                    background: isSelected ? 'rgba(17, 61, 137, 0.35)' : 'rgba(255, 255, 255, 0.03)',
                    transform: isSelected ? 'translateY(-2px)' : 'none',
                    boxShadow: isSelected ? '0 8px 25px rgba(255, 215, 0, 0.25)' : 'none'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.35rem' }}>
                    <span style={{ fontWeight: 800, color: isSelected ? '#FFD700' : '#FFFFFF', fontSize: '1.05rem' }}>
                      {state.name}
                    </span>
                    {state.highlight && (
                      <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#FFD700', display: 'inline-block' }} />
                    )}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: '#94A3B8', marginBottom: '0.5rem' }}>
                    {state.status}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: '#34D399', fontWeight: 700 }}>
                    {state.vehicles}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Selected State Deep-Dive & Branch Info */}
          <div className="glass-panel" style={{
            padding: '2.25rem',
            borderRadius: '20px',
            border: '1px solid rgba(255, 215, 0, 0.3)',
            background: 'linear-gradient(135deg, rgba(20, 55, 91, 0.92) 0%, rgba(13, 38, 67, 0.97) 100%)'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem', borderBottom: '1px solid rgba(255, 255, 255, 0.08)', paddingBottom: '1.25rem' }}>
              <div>
                <span className="pill-gold" style={{ marginBottom: '0.5rem' }}>
                  {selectedState.status}
                </span>
                <h3 style={{ fontSize: '2rem', color: '#FFFFFF', fontWeight: 900 }}>
                  {selectedState.name}
                </h3>
              </div>

              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '0.8rem', color: '#94A3B8' }}>ALLOCATED FLEET</div>
                <div style={{ fontSize: '1.4rem', fontWeight: 900, color: '#34D399' }}>
                  {selectedState.vehicles}
                </div>
              </div>
            </div>

            {/* Hubs in this State */}
            <div style={{ marginBottom: '1.75rem' }}>
              <div style={{ fontSize: '0.85rem', color: '#FFD700', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.75rem' }}>
                Operational Clusters & City Hubs
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                {selectedState.hubs.map((hub, hIdx) => (
                  <span
                    key={hIdx}
                    style={{
                      background: 'rgba(255, 255, 255, 0.06)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      color: '#E2E8F0',
                      padding: '0.45rem 0.85rem',
                      borderRadius: '8px',
                      fontSize: '0.85rem',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem'
                    }}
                  >
                    <MapPin size={13} color="#FFD700" />
                    {hub}
                  </span>
                ))}
              </div>
            </div>

            {/* Special Branch Details if Pune/Mumbai/Delhi/Hyderabad */}
            {selectedState.name === 'Maharashtra' && (
              <div style={{
                background: 'rgba(17, 61, 137, 0.25)',
                border: '1px solid rgba(255, 215, 0, 0.25)',
                padding: '1.25rem',
                borderRadius: '12px',
                marginBottom: '1.75rem'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#FFD700', fontWeight: 700, fontSize: '0.9rem', marginBottom: '0.4rem' }}>
                  <Building2 size={16} /> Parveen Fleets Corporate HQ (Pune)
                </div>
                <p style={{ fontSize: '0.85rem', color: '#CBD5E1', marginBottom: '0.5rem' }}>
                  {COMPANY_INFO.headOffice.address}
                </p>
                <div style={{ fontSize: '0.8rem', color: '#94A3B8' }}>
                  24x7 Operations War Room: <strong>+91 95458 99838</strong>
                </div>
              </div>
            )}

            {selectedState.name === 'Delhi NCR' && (
              <div style={{
                background: 'rgba(17, 61, 137, 0.25)',
                border: '1px solid rgba(255, 215, 0, 0.25)',
                padding: '1.25rem',
                borderRadius: '12px',
                marginBottom: '1.75rem'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#FFD700', fontWeight: 700, fontSize: '0.9rem', marginBottom: '0.4rem' }}>
                  <Building2 size={16} /> Northern Regional Hub (Aerocity, New Delhi)
                </div>
                <p style={{ fontSize: '0.85rem', color: '#CBD5E1', marginBottom: '0.5rem' }}>
                  Worldmark 2, Aerocity Hospitality District, New Delhi 110037
                </p>
              </div>
            )}

            {selectedState.name === 'Telangana' && (
              <div style={{
                background: 'rgba(17, 61, 137, 0.25)',
                border: '1px solid rgba(255, 215, 0, 0.25)',
                padding: '1.25rem',
                borderRadius: '12px',
                marginBottom: '1.75rem'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#FFD700', fontWeight: 700, fontSize: '0.9rem', marginBottom: '0.4rem' }}>
                  <Building2 size={16} /> Southern Tech Hub (Hitec City, Hyderabad)
                </div>
                <p style={{ fontSize: '0.85rem', color: '#CBD5E1', marginBottom: '0.5rem' }}>
                  Mindspace Cyberabad, Hitec City, Madhapur, Hyderabad 500081
                </p>
              </div>
            )}

            {/* Action */}
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <button
                onClick={() => onOpenQuote({ city: selectedState.name })}
                className="btn-gold"
                style={{ fontSize: '0.88rem', padding: '0.75rem 1.4rem' }}
              >
                <span>Deploy Fleet in {selectedState.name}</span>
                <ArrowRight size={15} />
              </button>

              <a
                href="tel:+919545899838"
                className="btn-outline"
                style={{ fontSize: '0.88rem', padding: '0.75rem 1.25rem' }}
              >
                <Phone size={15} color="#FFD700" />
                <span>Call State Hub</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
