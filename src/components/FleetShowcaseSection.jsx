import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Car, Users, Briefcase, Fuel, Shield, ArrowRight, Sparkles, Check, Info, Radio, Zap } from 'lucide-react';

export default function FleetShowcaseSection({ onBookVehicle }) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const REAL_VEHICLES = [
    {
      id: 'hycross',
      name: 'Toyota Innova Hycross (Hybrid)',
      category: 'Premium MPVs',
      capacity: '6-7 Executive Seats',
      luggage: '4 Large Bags',
      fuel: 'Strong Hybrid Electric',
      rateEstimate: '₹22 / km',
      image: '/images/assets/car_innova_hycross_clean.png',
      tag: 'CXO & Director Choice',
      isPremium: true,
      specs: ['Dual-Zone Climate Control', 'Captain Ottoman Recliners', 'Dual GPS IoT Telematics', 'Noise-Insulated Cabin']
    },
    {
      id: 'dzire',
      name: 'Maruti Suzuki Dzire (New)',
      category: 'Executive Sedans',
      capacity: '4 Passengers',
      luggage: '2 Medium Bags',
      fuel: 'Petrol / CNG Compliant',
      rateEstimate: '₹14 / km',
      image: '/images/assets/car_suzuki_dzire_clean.png',
      tag: 'High Reliability Standard',
      isPremium: false,
      specs: ['Rear AC Vents', 'SOS Hardware Emergency Button', 'Real-Time Roster Tracking', '100% Police Verified Driver']
    },
    {
      id: 'crysta',
      name: 'Toyota Innova Crysta',
      category: 'Premium MPVs',
      capacity: '7 Passengers',
      luggage: '5 Large Bags',
      fuel: 'Diesel Turbo',
      rateEstimate: '₹20 / km',
      image: '/images/assets/car_innova_crysta_clean.png',
      tag: 'Airport & Corporate Transit',
      isPremium: true,
      specs: ['High Ground Clearance', 'Ample Legroom & Boot Space', 'Speed Governor (80 km/h)', 'Emergency First Aid & Fire Kit']
    },
    {
      id: 'city',
      name: 'Honda City ZX Executive',
      category: 'Executive Sedans',
      capacity: '4 Passengers',
      luggage: '3 Large Bags',
      fuel: 'i-VTEC Petrol',
      rateEstimate: '₹18 / km',
      image: '/images/assets/car_honda_city_clean.png',
      tag: 'Client Delegations',
      isPremium: true,
      specs: ['Plush Leather Seating', 'Sunroof & Ambient Lighting', 'Corporate Chauffeur in Uniform', 'Mineral Water & Sanitizer']
    },
    {
      id: 'coach',
      name: 'Volvo & Force Luxury Coaches',
      category: 'Coaches & Travellers',
      capacity: '13 to 49 Seats',
      luggage: '25+ Luggage Compartment',
      fuel: 'Euro VI Green Diesel',
      rateEstimate: 'Custom RFP Contract',
      image: '/images/assets/fleet_bus_clean.png',
      tag: 'Campus Shift Shuttle',
      isPremium: true,
      specs: ['Air Suspension Smooth Ride', 'Push-Back Recliners', 'Dedicated CCTV & Escort Seat', 'Automated Attendance RFID']
    }
  ];

  const categories = ['All', 'Executive Sedans', 'Premium MPVs', 'Coaches & Travellers'];

  const filteredFleet = selectedCategory === 'All'
    ? REAL_VEHICLES
    : REAL_VEHICLES.filter(item => item.category === selectedCategory);

  return (
    <section id="fleet" className="section-padding bg-obsidian mesh-grid" style={{ position: 'relative' }}>
      
      {/* Background Soft Emerald Ambient Glow */}
      <div 
        style={{ 
          position: 'absolute',
          width: '700px', 
          height: '700px', 
          top: '25%', 
          right: '-10%',
          background: 'radial-gradient(circle, rgba(0, 200, 150, 0.16) 0%, transparent 70%)',
          filter: 'blur(130px)',
          pointerEvents: 'none',
          zIndex: 0
        }} 
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 3rem auto' }}>
          <div className="pill-gold" style={{ marginBottom: '1rem' }}>
            <Sparkles size={14} />
            <span>Modern, Sanitized & Premium Fleet</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2.2rem, 3.8vw, 3.4rem)', marginBottom: '1.25rem' }}>
            The Parveen Fleets <span className="text-gradient-emerald">Vehicle Showcase</span>
          </h2>
          <p style={{ fontSize: '1.1rem', color: '#94A3B8', lineHeight: 1.75 }}>
            Every vehicle in our fleet is under 3 years old, equipped with dual GPS telematics, climate control air-conditioning, and piloted by certified protocol chauffeurs.
          </p>
        </div>

        {/* 2. FLEET SHOWCASE WIDE BANNER: Suzuki Ciaz, Innova Hycross, Dzire (Page 8) with glass overlay */}
        <motion.div 
          className="glass-panel"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{
            borderRadius: '26px',
            overflow: 'hidden',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            background: 'linear-gradient(180deg, #070B14 0%, #0B1322 100%)',
            boxShadow: '0 25px 70px rgba(0, 0, 0, 0.8), 0 0 35px rgba(0, 200, 150, 0.15)',
            marginBottom: '4.5rem',
            position: 'relative'
          }}
        >
          {/* Header Tag Bar */}
          <div style={{
            padding: '1rem 1.75rem',
            background: 'rgba(15, 23, 42, 0.85)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '0.75rem'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
              <span className="pill-gold" style={{ padding: '0.25rem 0.75rem', fontSize: '0.72rem' }}>
                OFFICIAL COMPANY PROFILE • PAGE 8
              </span>
              <span style={{ color: '#F8FAFC', fontWeight: 800, fontSize: '0.92rem' }}>
                Corporate Fleet & Protocol Chauffeurs Lineup
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#00C896', fontSize: '0.78rem', fontWeight: 700 }}>
              <Radio size={14} className="animate-pulse" />
              <span>100% Uniformed & Police Verified Staff</span>
            </div>
          </div>

          {/* Banner Graphic Area */}
          <div style={{ position: 'relative', width: '100%', minHeight: '320px', background: 'radial-gradient(ellipse at 50% 50%, rgba(0, 200, 150, 0.12) 0%, rgba(7, 11, 20, 0.95) 70%, #05080F 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1.5rem' }}>
            
            <img
              src="/images/assets/fleet_trio_obsidian_banner.png"
              alt="Suzuki Ciaz, Innova Hycross, and Dzire with Chauffeurs from Page 8 of Parveen Fleets Profile"
              loading="lazy"
              decoding="async"
              style={{
                width: '100%',
                maxHeight: '380px',
                objectFit: 'contain',
                filter: 'drop-shadow(0 20px 30px rgba(0,0,0,0.8))',
                borderRadius: '16px'
              }}
            />

            {/* Cinematic Radial Vignette to seamlessly blend into deep obsidian */}
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, rgba(5, 8, 15, 0.92) 0%, transparent 45%, rgba(5, 8, 15, 0.7) 100%), linear-gradient(to right, rgba(5, 8, 15, 0.8) 0%, transparent 15%, transparent 85%, rgba(5, 8, 15, 0.8) 100%)',
              pointerEvents: 'none'
            }} />

            {/* Glass Overlay Showing Fleet Specs */}
            <div style={{
              position: 'absolute',
              bottom: '1.5rem',
              left: '1.5rem',
              right: '1.5rem',
              background: 'rgba(15, 23, 42, 0.82)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              padding: '1.2rem 1.6rem',
              borderRadius: '18px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1.25rem',
              alignItems: 'center'
            }}>
              <div>
                <div style={{ fontSize: '0.72rem', color: '#D4AF37', fontWeight: 700, letterSpacing: '0.06em' }}>
                  CORE SEDAN & MPV SQUAD
                </div>
                <div style={{ color: '#FFFFFF', fontWeight: 800, fontSize: '1.1rem' }}>
                  Suzuki Ciaz • Innova Hycross • Suzuki Dzire
                </div>
              </div>

              <div>
                <div style={{ fontSize: '0.72rem', color: '#94A3B8', fontWeight: 600 }}>
                  CHAUFFEUR STANDARDS
                </div>
                <div style={{ color: '#00C896', fontWeight: 700, fontSize: '0.92rem' }}>
                  White Formal Attire • ID Badge • Multilingual
                </div>
              </div>

              <div>
                <div style={{ fontSize: '0.72rem', color: '#94A3B8', fontWeight: 600 }}>
                  COMPLIANCE ASSURANCE
                </div>
                <div style={{ color: '#F8FAFC', fontWeight: 700, fontSize: '0.92rem' }}>
                  Automated Safe Reach & Speed Violation Alerts
                </div>
              </div>

              <div style={{ textAlign: 'right' }}>
                <button
                  onClick={() => onBookVehicle({ category: 'Corporate Fleet', name: 'Executive Fleet Trio', capacity: 'Sedan & MPV', rateEstimate: 'Custom Corporate SLA' })}
                  className="btn-emerald"
                  style={{ padding: '0.7rem 1.4rem', fontSize: '0.85rem' }}
                >
                  <span>Book Fleet Tier</span>
                  <ArrowRight size={15} />
                </button>
              </div>
            </div>
          </div>
        </motion.div>

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
                background: selectedCategory === cat ? 'linear-gradient(135deg, #00C896 0%, #00A878 100%)' : 'rgba(15, 23, 42, 0.6)',
                color: selectedCategory === cat ? '#05080F' : '#94A3B8',
                border: '1px solid ' + (selectedCategory === cat ? '#00C896' : 'rgba(255, 255, 255, 0.08)'),
                padding: '0.65rem 1.5rem',
                borderRadius: '9999px',
                fontWeight: 700,
                fontSize: '0.85rem',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: selectedCategory === cat ? '0 4px 20px rgba(0, 200, 150, 0.4)' : 'none'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Individual Vehicle Grid with Real Photos & Gold Hairline Borders */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2rem'
        }}>
          {filteredFleet.map((vehicle, idx) => (
            <motion.div
              key={vehicle.id}
              className="glass-card card-gold-hairline group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{ y: -6 }}
              style={{
                borderRadius: '22px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                background: 'rgba(15, 23, 42, 0.65)'
              }}
            >
              <div>
                {/* Real Vehicle Image Frame with Dramatic Lighting */}
                <div style={{ 
                  position: 'relative', 
                  height: '240px', 
                  overflow: 'hidden', 
                  background: 'radial-gradient(circle at 50% 50%, rgba(0, 200, 150, 0.12) 0%, #05080F 85%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '1.25rem'
                }}>
                  <img
                    src={vehicle.image}
                    alt={vehicle.name}
                    loading="lazy"
                    decoding="async"
                    style={{
                      maxHeight: '100%',
                      maxWidth: '100%',
                      objectFit: 'contain',
                      filter: 'drop-shadow(0 15px 25px rgba(0,0,0,0.8))',
                      transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)'
                    }}
                    className="group-hover:scale-105"
                  />

                  {/* Dark Vignette Overlay */}
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(15, 23, 42, 0.95) 0%, transparent 40%)',
                    pointerEvents: 'none'
                  }} />

                  {/* Top Badge: Champagne Gold for Premium tags */}
                  <div style={{
                    position: 'absolute',
                    top: '1rem',
                    left: '1rem',
                    zIndex: 2
                  }}>
                    {vehicle.isPremium ? (
                      <span className="pill-gold" style={{ padding: '0.25rem 0.75rem', fontSize: '0.72rem' }}>
                        <Sparkles size={11} color="#D4AF37" />
                        {vehicle.tag}
                      </span>
                    ) : (
                      <span className="pill-emerald" style={{ padding: '0.25rem 0.75rem', fontSize: '0.72rem' }}>
                        {vehicle.tag}
                      </span>
                    )}
                  </div>
                </div>

                {/* Details Section */}
                <div style={{ padding: '1.5rem 1.75rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.5rem' }}>
                    <h3 style={{ fontSize: '1.25rem', color: '#FFFFFF', fontWeight: 800 }}>
                      {vehicle.name}
                    </h3>
                  </div>

                  <div style={{ fontSize: '0.78rem', color: '#00C896', fontWeight: 600, marginBottom: '1.25rem' }}>
                    {vehicle.category}
                  </div>

                  {/* Specs Quick Metrics */}
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '0.5rem',
                    padding: '0.85rem',
                    borderRadius: '12px',
                    background: 'rgba(5, 8, 15, 0.6)',
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                    marginBottom: '1.25rem',
                    textAlign: 'center'
                  }}>
                    <div>
                      <div style={{ fontSize: '0.68rem', color: '#94A3B8' }}>Capacity</div>
                      <div style={{ fontSize: '0.8rem', color: '#F8FAFC', fontWeight: 700, marginTop: '2px' }}>{vehicle.capacity}</div>
                    </div>
                    <div>
                      <div style={{ fontSize: '0.68rem', color: '#94A3B8' }}>Luggage</div>
                      <div style={{ fontSize: '0.8rem', color: '#F8FAFC', fontWeight: 700, marginTop: '2px' }}>{vehicle.luggage}</div>
                    </div>
                    <div>
                      <div style={{ fontSize: '0.68rem', color: '#94A3B8' }}>Powertrain</div>
                      <div style={{ fontSize: '0.8rem', color: '#00C896', fontWeight: 700, marginTop: '2px' }}>{(vehicle.fuel || 'Hybrid').split(' ')[0]}</div>
                    </div>
                  </div>

                  {/* Key Feature Bullets */}
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.45rem', marginBottom: '1.5rem' }}>
                    {vehicle.specs.map((spec, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.82rem', color: '#CBD5E1' }}>
                        <Check size={14} color="#00C896" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Action Footer */}
              <div style={{
                padding: '1.25rem 1.75rem',
                borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                background: 'rgba(5, 8, 15, 0.4)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}>
                <div>
                  <div style={{ fontSize: '0.68rem', color: '#94A3B8', textTransform: 'uppercase' }}>
                    Indicative SLA Rate
                  </div>
                  <div className="font-mono" style={{ fontSize: '1.15rem', color: '#FFFFFF', fontWeight: 800 }}>
                    {vehicle.rateEstimate}
                  </div>
                </div>

                <button
                  onClick={() => onBookVehicle(vehicle)}
                  className="btn-emerald"
                  style={{ padding: '0.65rem 1.25rem', fontSize: '0.84rem' }}
                >
                  <span>Book Vehicle</span>
                  <ArrowRight size={15} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
