import React, { useState } from 'react';
import { Users, Car, Crown, PlaneTakeoff, BusFront, CalendarClock, ShieldAlert, Compass, ArrowRight, CheckCircle, Sparkles } from 'lucide-react';
import { SERVICES_DATA } from '../data/mockData';

const iconMap = {
  Users: Users,
  Car: Car,
  Crown: Crown,
  PlaneTakeoff: PlaneTakeoff,
  BusFront: BusFront,
  CalendarClock: CalendarClock,
  ShieldAlert: ShieldAlert,
  Compass: Compass
};

export default function ServicesSection({ onSelectService }) {
  const [activeFilter, setActiveFilter] = useState('all');
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
    ? SERVICES_DATA
    : SERVICES_DATA.filter((service) => serviceGroups[activeFilter].includes(service.id));

  return (
    <section id="services" className="section-padding" style={{ position: 'relative', background: 'rgba(15, 39, 68, 0.4)' }}>
      
      {/* Ambient background glow */}
      <div className="ambient-glow ambient-gold" style={{ width: '450px', height: '450px', bottom: '5%', left: '-5%' }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 4rem auto' }}>
          <div className="pill-gold" style={{ marginBottom: '1rem' }}>
            <Sparkles size={14} />
            <span>Comprehensive Corporate Mobility Suite</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', marginBottom: '1.25rem' }}>
            Engineered For <span className="text-gradient-gold">Enterprise Excellence</span>
          </h2>
          <p style={{ fontSize: '1.1rem', color: '#94A3B8', lineHeight: 1.6 }}>
            From automated daily employee commutes to high-protocol CXO luxury delegations, Parveen Fleets delivers turnkey, reliable transportation across 112+ Indian cities.
          </p>
        </div>

        <div role="group" aria-label="Filter services" style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '0.65rem',
          marginBottom: '2rem'
        }}>
          {filters.map((filter) => (
            <button
              key={filter.id}
              type="button"
              aria-pressed={activeFilter === filter.id}
              onClick={() => setActiveFilter(filter.id)}
              style={{
                background: activeFilter === filter.id ? 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)' : 'rgba(255, 255, 255, 0.05)',
                color: activeFilter === filter.id ? '#050A12' : '#CBD5E1',
                border: `1px solid ${activeFilter === filter.id ? '#FFD700' : 'rgba(255, 255, 255, 0.1)'}`,
                padding: '0.55rem 1.1rem',
                borderRadius: '9999px',
                fontWeight: 700,
                fontSize: '0.82rem'
              }}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Interactive Service Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
          gap: '1.75rem'
        }}>
          {visibleServices.map((service) => {
            const IconComponent = iconMap[service.icon] || Car;

            return (
              <div
                key={service.id}
                className="glass-card"
                style={{
                  padding: '2.25rem 1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative',
                  overflow: 'hidden',
                  border: service.popular ? '1px solid rgba(255, 215, 0, 0.4)' : '1px solid rgba(255, 255, 255, 0.08)'
                }}
              >
                {/* Popular Badge */}
                {service.popular && (
                  <div style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    background: 'rgba(255, 215, 0, 0.2)',
                    border: '1px solid #FFD700',
                    color: '#FFD700',
                    padding: '0.2rem 0.65rem',
                    borderRadius: '9999px',
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}>
                    Featured
                  </div>
                )}

                <div>
                  {/* Icon Header */}
                  <div style={{
                    width: '58px',
                    height: '58px',
                    borderRadius: '14px',
                    background: service.popular
                      ? 'linear-gradient(135deg, rgba(255, 215, 0, 0.25), rgba(17, 61, 137, 0.4))'
                      : 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 215, 0, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#FFD700',
                    marginBottom: '1.5rem',
                    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.3)'
                  }}>
                    <IconComponent size={28} />
                  </div>

                  {/* Title & Tagline */}
                  <h3 style={{ fontSize: '1.35rem', color: '#FFFFFF', marginBottom: '0.35rem', fontWeight: 800 }}>
                    {service.title}
                  </h3>
                  <div style={{ color: '#FFD700', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1rem' }}>
                    {service.tagline}
                  </div>

                  {/* Description */}
                  <p style={{ fontSize: '0.92rem', color: '#94A3B8', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                    {service.description}
                  </p>

                  {/* Key Feature Bullets */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '1.75rem' }}>
                    {service.features.map((feat, fIdx) => (
                      <div key={fIdx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: '#CBD5E1' }}>
                        <CheckCircle size={14} color="#10B981" style={{ flexShrink: 0 }} />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action */}
                <div style={{ paddingTop: '1rem', borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}>
                  <button
                    onClick={() => onSelectService(service)}
                    style={{
                      width: '100%',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 215, 0, 0.3)',
                      color: '#FFD700',
                      padding: '0.75rem 1rem',
                      borderRadius: '8px',
                      fontWeight: 700,
                      fontSize: '0.85rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.5rem',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = '#FFD700';
                      e.currentTarget.style.color = '#050A12';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                      e.currentTarget.style.color = '#FFD700';
                    }}
                  >
                    <span>Book {service.title}</span>
                    <ArrowRight size={16} />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
