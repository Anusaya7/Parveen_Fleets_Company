import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Car, Crown, PlaneTakeoff, BusFront, CalendarClock, ShieldAlert, Compass, ArrowRight, CheckCircle, Sparkles } from 'lucide-react';
import { SERVICES_DATA } from '../data/mockData';

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

export default function ServicesSection({ onSelectService }) {
  const [activeFilter, setActiveFilter] = useState('all');
  const filters = [
    { id: 'all', label: 'All Services' },
    { id: 'commute', label: 'Employee Commute' },
    { id: 'executive', label: 'Executive Transit' },
    { id: 'group', label: 'Coaches & Groups' }
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
    <section id="services" className="section-padding bg-obsidian mesh-grid" style={{ position: 'relative' }}>
      
      {/* Ambient background glow */}
      <div 
        style={{ 
          position: 'absolute',
          width: '650px', 
          height: '650px', 
          bottom: '5%', 
          left: '-5%',
          background: 'radial-gradient(circle, rgba(0, 200, 150, 0.14) 0%, transparent 70%)',
          filter: 'blur(130px)',
          pointerEvents: 'none',
          zIndex: 0
        }} 
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 3.5rem auto' }}>
          <div className="pill-emerald" style={{ marginBottom: '1rem' }}>
            <Sparkles size={14} />
            <span>Comprehensive Corporate Mobility Suite</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2.2rem, 3.8vw, 3.4rem)', marginBottom: '1.25rem' }}>
            Engineered For <span className="text-gradient-emerald">Enterprise Excellence</span>
          </h2>
          <p style={{ fontSize: '1.1rem', color: '#94A3B8', lineHeight: 1.75 }}>
            From automated daily employee commutes to high-protocol CXO luxury delegations, Parveen Fleets delivers turnkey, reliable transportation across 112+ Indian cities.
          </p>
        </div>

        {/* Filter Pills */}
        <div role="group" aria-label="Filter services" style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '0.65rem',
          marginBottom: '3rem'
        }}>
          {filters.map((filter) => (
            <button
              key={filter.id}
              type="button"
              aria-pressed={activeFilter === filter.id}
              onClick={() => setActiveFilter(filter.id)}
              style={{
                background: activeFilter === filter.id ? 'var(--emerald-gradient)' : 'rgba(15, 23, 42, 0.6)',
                color: activeFilter === filter.id ? '#05080F' : '#94A3B8',
                border: `1px solid ${activeFilter === filter.id ? '#00C896' : 'rgba(255, 255, 255, 0.08)'}`,
                padding: '0.6rem 1.4rem',
                borderRadius: '9999px',
                fontWeight: 700,
                fontSize: '0.84rem',
                boxShadow: activeFilter === filter.id ? '0 0 20px rgba(0, 200, 150, 0.35)' : 'none',
                transition: 'all 0.25s ease'
              }}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* 8 Services Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
          gap: '1.75rem'
        }}>
          {visibleServices.map((service, index) => {
            const IconComponent = iconMap[service.icon] || Car;

            return (
              <motion.div
                key={service.id}
                className="glass-card card-gold-hairline group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                whileHover={{ y: -6 }}
                style={{
                  padding: '2.2rem 1.85rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  borderRadius: '22px',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  background: 'rgba(15, 23, 42, 0.65)'
                }}
              >
                <div>
                  {/* Top Icon Box */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '1.5rem'
                  }}>
                    <div style={{
                      width: '52px',
                      height: '52px',
                      borderRadius: '14px',
                      background: 'rgba(0, 200, 150, 0.1)',
                      border: '1px solid rgba(0, 200, 150, 0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#00C896',
                      transition: 'all 0.3s ease'
                    }} className="group-hover:border-[#D4AF37] group-hover:text-[#D4AF37] group-hover:shadow-[0_0_20px_rgba(212,175,55,0.25)]">
                      <IconComponent size={26} />
                    </div>

                    <span className="pill-gold" style={{ fontSize: '0.68rem', padding: '0.2rem 0.6rem' }}>
                      Enterprise Tier
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.25rem', color: '#FFFFFF', marginBottom: '0.45rem', fontWeight: 800 }}>
                    {service.title}
                  </h3>

                  <div style={{ fontSize: '0.8rem', color: '#00C896', fontWeight: 600, marginBottom: '0.85rem' }}>
                    {service.tagline}
                  </div>

                  <p style={{ fontSize: '0.88rem', color: '#94A3B8', lineHeight: 1.65, marginBottom: '1.5rem' }}>
                    {service.description}
                  </p>

                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.75rem' }}>
                    {service.features.slice(0, 3).map((feat, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.82rem', color: '#CBD5E1' }}>
                        <CheckCircle size={14} color="#00C896" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div style={{ paddingTop: '1.25rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
                  <button
                    onClick={() => onSelectService(service)}
                    className="btn-ghost"
                    style={{ width: '100%', padding: '0.75rem 1rem', fontSize: '0.86rem', justifyContent: 'center' }}
                  >
                    <span>Request Service Deck</span>
                    <ArrowRight size={15} />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
