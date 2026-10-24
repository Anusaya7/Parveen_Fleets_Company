import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Building2, Award, Calendar, CheckCircle2, MapPin, TrendingUp, Users, Shield, ArrowRight, Sparkles } from 'lucide-react';
import { TIMELINE_MILESTONES, COMPANY_INFO } from '../data/mockData';

export default function AboutSection({ onOpenQuote }) {
  const [activeMilestone, setActiveMilestone] = useState(3);

  return (
    <section id="about" className="section-padding bg-obsidian mesh-grid" style={{ position: 'relative' }}>
      
      {/* Background Soft Emerald Glow */}
      <div 
        style={{ 
          position: 'absolute',
          width: '600px', 
          height: '600px', 
          top: '10%', 
          right: '-5%',
          background: 'radial-gradient(circle, rgba(0, 200, 150, 0.14) 0%, transparent 70%)',
          filter: 'blur(130px)',
          pointerEvents: 'none',
          zIndex: 0
        }} 
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 4rem auto' }}>
          <div className="pill-gold" style={{ marginBottom: '1rem' }}>
            <Award size={14} color="#D4AF37" />
            <span>Our Heritage & Corporate Evolution</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2.2rem, 3.8vw, 3.4rem)', marginBottom: '1.25rem' }}>
            Built on Trust. <span className="text-gradient-emerald">Powered by Innovation.</span>
          </h2>
          <p style={{ fontSize: '1.1rem', color: '#94A3B8', lineHeight: 1.75 }}>
            From our founding in 2012 in Pune to incorporating as a Private Limited company in 2021, Parveen Fleets Pvt Ltd has grown into India's premier corporate mobility partner for Fortune 500 enterprises.
          </p>
        </div>

        {/* 4 Pillars of Leadership Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '1.75rem',
          marginBottom: '4.5rem'
        }}>
          <motion.div 
            className="glass-card card-gold-hairline"
            whileHover={{ y: -5 }}
            style={{ padding: '2.2rem 1.85rem', background: 'rgba(15, 23, 42, 0.6)' }}
          >
            <div style={{
              width: '50px',
              height: '50px',
              borderRadius: '12px',
              background: 'rgba(212, 175, 55, 0.12)',
              border: '1px solid rgba(212, 175, 55, 0.35)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#D4AF37',
              marginBottom: '1.25rem'
            }}>
              <Calendar size={24} />
            </div>
            <div className="font-mono" style={{ fontSize: '1.8rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '0.25rem' }}>
              2012 → 2021
            </div>
            <div style={{ color: '#D4AF37', fontWeight: 700, fontSize: '0.9rem', marginBottom: '0.5rem' }}>
              Pvt Ltd Milestone
            </div>
            <p style={{ fontSize: '0.9rem', color: '#94A3B8', lineHeight: 1.6 }}>
              Over a decade of uncompromised excellence in corporate fleet logistics and institutional passenger transit.
            </p>
          </motion.div>

          <motion.div 
            className="glass-card card-gold-hairline"
            whileHover={{ y: -5 }}
            style={{ padding: '2.2rem 1.85rem', background: 'rgba(15, 23, 42, 0.6)' }}
          >
            <div style={{
              width: '50px',
              height: '50px',
              borderRadius: '12px',
              background: 'rgba(0, 200, 150, 0.12)',
              border: '1px solid rgba(0, 200, 150, 0.35)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#00C896',
              marginBottom: '1.25rem'
            }}>
              <Building2 size={24} />
            </div>
            <div style={{ fontSize: '1.65rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '0.25rem' }}>
              Pune Head Office
            </div>
            <div style={{ color: '#00C896', fontWeight: 700, fontSize: '0.9rem', marginBottom: '0.5rem' }}>
              National Headquarters
            </div>
            <p style={{ fontSize: '0.9rem', color: '#94A3B8', lineHeight: 1.6 }}>
              Central Command Control Center in Viman Nagar / Shivajinagar, managing real-time telematics across all 112+ hubs.
            </p>
          </motion.div>

          <motion.div 
            className="glass-card card-gold-hairline"
            whileHover={{ y: -5 }}
            style={{ padding: '2.2rem 1.85rem', background: 'rgba(15, 23, 42, 0.6)' }}
          >
            <div style={{
              width: '50px',
              height: '50px',
              borderRadius: '12px',
              background: 'rgba(0, 200, 150, 0.12)',
              border: '1px solid rgba(0, 200, 150, 0.35)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#00C896',
              marginBottom: '1.25rem'
            }}>
              <MapPin size={24} />
            </div>
            <div className="font-mono" style={{ fontSize: '1.8rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '0.25rem' }}>
              3 Major Hubs
            </div>
            <div style={{ color: '#00C896', fontWeight: 700, fontSize: '0.9rem', marginBottom: '0.5rem' }}>
              Mumbai • Delhi • Hyderabad
            </div>
            <p style={{ fontSize: '0.9rem', color: '#94A3B8', lineHeight: 1.6 }}>
              Full-scale regional operational centers in Mumbai BKC, Delhi Aerocity/Dwarka, and Hyderabad Kukatpally.
            </p>
          </motion.div>

          <motion.div 
            className="glass-card card-gold-hairline"
            whileHover={{ y: -5 }}
            style={{ padding: '2.2rem 1.85rem', background: 'rgba(15, 23, 42, 0.6)' }}
          >
            <div style={{
              width: '50px',
              height: '50px',
              borderRadius: '12px',
              background: 'rgba(212, 175, 55, 0.12)',
              border: '1px solid rgba(212, 175, 55, 0.35)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#D4AF37',
              marginBottom: '1.25rem'
            }}>
              <Shield size={24} />
            </div>
            <div className="font-mono" style={{ fontSize: '1.8rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '0.25rem' }}>
              100% Certified
            </div>
            <div style={{ color: '#D4AF37', fontWeight: 700, fontSize: '0.9rem', marginBottom: '0.5rem' }}>
              ISO 9001:2015 & PoSH
            </div>
            <p style={{ fontSize: '0.9rem', color: '#94A3B8', lineHeight: 1.6 }}>
              Rigorous compliance protocols, female commuter security escorts, and 100% police background verification.
            </p>
          </motion.div>
        </div>

        {/* Growth Story Interactive Timeline */}
        <div className="glass-panel" style={{
          padding: '2.75rem 2.25rem',
          borderRadius: '24px',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          background: 'rgba(15, 23, 42, 0.7)'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
            marginBottom: '2.5rem',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            paddingBottom: '1.5rem'
          }}>
            <div>
              <div style={{ color: '#D4AF37', fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                JOURNEY OF EXCELLENCE
              </div>
              <h3 style={{ fontSize: '1.75rem', color: '#FFFFFF', fontWeight: 800 }}>
                The Parveen Fleets Growth Story
              </h3>
            </div>

            {/* Timeline Year Selectors */}
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {TIMELINE_MILESTONES.map((item, index) => (
                <button
                  key={item.year}
                  onClick={() => setActiveMilestone(index)}
                  style={{
                    background: activeMilestone === index ? 'var(--emerald-gradient)' : 'rgba(255, 255, 255, 0.05)',
                    color: activeMilestone === index ? '#05080F' : '#94A3B8',
                    border: '1px solid ' + (activeMilestone === index ? '#00C896' : 'rgba(255, 255, 255, 0.08)'),
                    padding: '0.5rem 1.15rem',
                    borderRadius: '8px',
                    fontWeight: 700,
                    fontSize: '0.85rem',
                    boxShadow: activeMilestone === index ? '0 0 15px rgba(0, 200, 150, 0.35)' : 'none',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {item.year}
                </button>
              ))}
            </div>
          </div>

          {/* Active Milestone Card Detail */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
            alignItems: 'center'
          }}>
            <div>
              <div className="pill-gold" style={{ marginBottom: '0.75rem' }}>
                <Sparkles size={13} color="#D4AF37" />
                <span>Milestone {TIMELINE_MILESTONES[activeMilestone].year}</span>
              </div>
              <h4 style={{ fontSize: '1.65rem', color: '#FFFFFF', fontWeight: 800, marginBottom: '0.75rem' }}>
                {TIMELINE_MILESTONES[activeMilestone].title}
              </h4>
              <p style={{ color: '#94A3B8', fontSize: '1rem', lineHeight: 1.75, marginBottom: '1.5rem' }}>
                {TIMELINE_MILESTONES[activeMilestone]?.description || TIMELINE_MILESTONES[activeMilestone]?.desc}
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', color: '#00C896', fontWeight: 700, fontSize: '0.92rem' }}>
                <CheckCircle2 size={18} color="#00C896" />
                <span>{TIMELINE_MILESTONES[activeMilestone]?.metric || TIMELINE_MILESTONES[activeMilestone]?.badge}</span>
              </div>
            </div>

            <div style={{
              background: 'rgba(5, 8, 15, 0.6)',
              borderRadius: '16px',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              padding: '1.75rem',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '0.75rem', color: '#D4AF37', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>
                AUDITED SCALE
              </div>
              <div className="font-mono" style={{ fontSize: '2.5rem', fontWeight: 900, color: '#FFFFFF', marginBottom: '0.35rem' }}>
                {(TIMELINE_MILESTONES[activeMilestone]?.metric || '100+ Enterprise').split(' ')[0]}
              </div>
              <div style={{ color: '#00C896', fontWeight: 600, fontSize: '0.9rem' }}>
                {(TIMELINE_MILESTONES[activeMilestone]?.metric || '100+ Enterprise').split(' ').slice(1).join(' ')}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
