import React, { useState } from 'react';
import { Car, Users, Briefcase, Fuel, Shield, ArrowRight, Sparkles, Check, Info } from 'lucide-react';
import { FLEET_SHOWCASE } from '../data/mockData';

export default function FleetShowcaseSection({ onBookVehicle }) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Executive Sedans', 'Premium MPVs', 'Luxury & VIP', 'Coaches & Travellers'];

  const filteredFleet = selectedCategory === 'All'
    ? FLEET_SHOWCASE
    : FLEET_SHOWCASE.filter(item => item.category === selectedCategory);

  return (
    <section id="fleet" className="section-padding" style={{ position: 'relative', background: 'rgba(15, 39, 68, 0.4)' }}>
      
      {/* Background Glow */}
      <div className="ambient-glow ambient-gold" style={{ width: '500px', height: '500px', top: '25%', right: '-5%' }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 3rem auto' }}>
          <div className="pill-gold" style={{ marginBottom: '1rem' }}>
            <Sparkles size={14} />
            <span>Modern, Sanitized & Premium Fleet</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', marginBottom: '1.25rem' }}>
            The Parveen Fleets <span className="text-gradient-gold">Luxury Vehicle Showcase</span>
          </h2>
          <p style={{ fontSize: '1.1rem', color: '#94A3B8', lineHeight: 1.6 }}>
            Every vehicle in our fleet is under 3 years old, equipped with dual GPS telematics, climate control air-conditioning, and piloted by certified protocol chauffeurs.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '0.75rem',
          marginBottom: '3rem'
        }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              style={{
                background: selectedCategory === cat ? 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)' : 'rgba(255, 255, 255, 0.05)',
                color: selectedCategory === cat ? '#050A12' : '#CBD5E1',
                border: '1px solid ' + (selectedCategory === cat ? '#FFD700' : 'rgba(255, 255, 255, 0.1)'),
                padding: '0.65rem 1.4rem',
                borderRadius: '9999px',
                fontWeight: 700,
                fontSize: '0.85rem',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: selectedCategory === cat ? '0 4px 20px rgba(255, 215, 0, 0.4)' : 'none'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Fleet Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
          gap: '1.75rem'
        }}>
          {filteredFleet.map((vehicle) => (
            <div
              key={vehicle.id}
              className="glass-card"
              style={{
                borderRadius: '18px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                border: '1px solid rgba(255, 255, 255, 0.08)'
              }}
            >
              <div>
                {/* Vehicle Image Container */}
                <div style={{ position: 'relative', height: '210px', overflow: 'hidden', background: '#081B3A' }}>
                  <img
                    src={vehicle.image}
                    alt={vehicle.name}
                    loading="lazy"
                    decoding="async"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.6s ease'
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.08)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
                  />
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(12, 33, 58, 0.88) 0%, transparent 60%)'
                  }} />

                  {/* Badge */}
                  <div style={{
                    position: 'absolute',
                    top: '1rem',
                    left: '1rem',
                    background: 'rgba(8, 27, 58, 0.85)',
                    border: '1px solid rgba(255, 215, 0, 0.5)',
                    color: '#FFD700',
                    padding: '0.3rem 0.75rem',
                    borderRadius: '9999px',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    backdropFilter: 'blur(8px)'
                  }}>
                    {vehicle.badge}
                  </div>

                  {/* Rate Estimate */}
                  <div style={{
                    position: 'absolute',
                    bottom: '0.75rem',
                    right: '1rem',
                    background: 'rgba(12, 33, 58, 0.94)',
                    padding: '0.25rem 0.7rem',
                    borderRadius: '6px',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    color: '#34D399',
                    fontSize: '0.8rem',
                    fontWeight: 800
                  }}>
                    {vehicle.rateEstimate}
                  </div>
                </div>

                {/* Content */}
                <div style={{ padding: '1.5rem' }}>
                  <div style={{ fontSize: '0.75rem', color: '#94A3B8', textTransform: 'uppercase', fontWeight: 600, letterSpacing: '0.05em' }}>
                    {vehicle.category}
                  </div>
                  <h3 style={{ fontSize: '1.3rem', color: '#FFFFFF', fontWeight: 800, marginBottom: '1rem' }}>
                    {vehicle.name}
                  </h3>

                  {/* Quick Specs Grid */}
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: '0.6rem',
                    background: 'rgba(255, 255, 255, 0.03)',
                    padding: '0.85rem',
                    borderRadius: '10px',
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                    marginBottom: '1.25rem'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.8rem', color: '#CBD5E1' }}>
                      <Users size={14} color="#FFD700" />
                      <span>{vehicle.capacity}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.8rem', color: '#CBD5E1' }}>
                      <Briefcase size={14} color="#FFD700" />
                      <span>{vehicle.luggage}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.8rem', color: '#CBD5E1' }}>
                      <Fuel size={14} color="#34D399" />
                      <span>{vehicle.fuel}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.8rem', color: '#CBD5E1' }}>
                      <Shield size={14} color="#38BDF8" />
                      <span>GPS & AC Enabled</span>
                    </div>
                  </div>

                  {/* Feature Pills */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1rem' }}>
                    {vehicle.features.map((feat, fIdx) => (
                      <span
                        key={fIdx}
                        style={{
                          background: 'rgba(255, 255, 255, 0.04)',
                          color: '#94A3B8',
                          fontSize: '0.72rem',
                          padding: '0.2rem 0.55rem',
                          borderRadius: '4px',
                          border: '1px solid rgba(255, 255, 255, 0.06)'
                        }}
                      >
                        {feat}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div style={{ padding: '0 1.5rem 1.5rem 1.5rem' }}>
                <button
                  onClick={() => onBookVehicle(vehicle)}
                  className="btn-gold"
                  style={{ width: '100%', fontSize: '0.88rem', padding: '0.75rem' }}
                >
                  <span>Book {vehicle.name}</span>
                  <ArrowRight size={15} />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
