import React, { useState } from 'react';
import { Building2, Award, Calendar, CheckCircle2, MapPin, TrendingUp, Users, Shield, ArrowRight } from 'lucide-react';
import { TIMELINE_MILESTONES, COMPANY_INFO } from '../data/mockData';

export default function AboutSection({ onOpenQuote }) {
  const [activeMilestone, setActiveMilestone] = useState(3); // 2024 or 2026

  return (
    <section id="about" className="section-padding" style={{ position: 'relative' }}>
      
      {/* Background Decorative Ambient */}
      <div className="ambient-glow ambient-blue" style={{ width: '450px', height: '450px', top: '10%', right: '-5%' }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 4rem auto' }}>
          <div className="pill-gold" style={{ marginBottom: '1rem' }}>
            <Award size={14} />
            <span>Our Heritage & Corporate Evolution</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', marginBottom: '1.25rem' }}>
            Built on Trust. <span className="text-gradient-gold">Powered by Innovation.</span>
          </h2>
          <p style={{ fontSize: '1.1rem', color: '#94A3B8', lineHeight: 1.6 }}>
            From our founding in 2012 in Pune to incorporating as a Private Limited company in 2021, Parveen Fleets Pvt Ltd has grown into India's premier corporate mobility partner for Fortune 500 enterprises.
          </p>
        </div>

        {/* 4 Pillars of Leadership Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '1.5rem',
          marginBottom: '4.5rem'
        }}>
          <div className="glass-card" style={{ padding: '2rem 1.75rem' }}>
            <div style={{
              width: '50px',
              height: '50px',
              borderRadius: '12px',
              background: 'rgba(255, 215, 0, 0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#FFD700',
              marginBottom: '1.25rem'
            }}>
              <Calendar size={24} />
            </div>
            <div style={{ fontSize: '1.75rem', fontWeight: 900, color: '#FFFFFF', marginBottom: '0.25rem' }}>
              2012 → 2021
            </div>
            <div style={{ color: '#FFD700', fontWeight: 700, fontSize: '0.9rem', marginBottom: '0.5rem' }}>
              Pvt Ltd Milestone
            </div>
            <p style={{ fontSize: '0.9rem', color: '#94A3B8' }}>
              Over a decade of uncompromised excellence in corporate fleet logistics and institutional passenger transit.
            </p>
          </div>

          <div className="glass-card" style={{ padding: '2rem 1.75rem' }}>
            <div style={{
              width: '50px',
              height: '50px',
              borderRadius: '12px',
              background: 'rgba(17, 61, 137, 0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#60A5FA',
              marginBottom: '1.25rem'
            }}>
              <Building2 size={24} />
            </div>
            <div style={{ fontSize: '1.75rem', fontWeight: 900, color: '#FFFFFF', marginBottom: '0.25rem' }}>
              Pune Head Office
            </div>
            <div style={{ color: '#60A5FA', fontWeight: 700, fontSize: '0.9rem', marginBottom: '0.5rem' }}>
              Corporate Headquarters
            </div>
            <p style={{ fontSize: '0.9rem', color: '#94A3B8' }}>
              Central Command Control Center in Viman Nagar, Pune, managing real-time telematics across all 112+ hubs.
            </p>
          </div>

          <div className="glass-card" style={{ padding: '2rem 1.75rem' }}>
            <div style={{
              width: '50px',
              height: '50px',
              borderRadius: '12px',
              background: 'rgba(16, 185, 129, 0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#34D399',
              marginBottom: '1.25rem'
            }}>
              <MapPin size={24} />
            </div>
            <div style={{ fontSize: '1.75rem', fontWeight: 900, color: '#FFFFFF', marginBottom: '0.25rem' }}>
              3 Major Hubs
            </div>
            <div style={{ color: '#34D399', fontWeight: 700, fontSize: '0.9rem', marginBottom: '0.5rem' }}>
              Mumbai • Delhi • Hyderabad
            </div>
            <p style={{ fontSize: '0.9rem', color: '#94A3B8' }}>
              Full-scale regional operational centers in Mumbai BKC, Delhi Aerocity, and Hyderabad Hitec City.
            </p>
          </div>

          <div className="glass-card" style={{ padding: '2rem 1.75rem' }}>
            <div style={{
              width: '50px',
              height: '50px',
              borderRadius: '12px',
              background: 'rgba(255, 215, 0, 0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#FFD700',
              marginBottom: '1.25rem'
            }}>
              <Shield size={24} />
            </div>
            <div style={{ fontSize: '1.75rem', fontWeight: 900, color: '#FFFFFF', marginBottom: '0.25rem' }}>
              100% Certified
            </div>
            <div style={{ color: '#FFD700', fontWeight: 700, fontSize: '0.9rem', marginBottom: '0.5rem' }}>
              ISO 9001:2015 & PoSH
            </div>
            <p style={{ fontSize: '0.9rem', color: '#94A3B8' }}>
              Rigorous compliance protocols, female commuter security escorts, and 100% police background verification.
            </p>
          </div>
        </div>

        {/* Growth Story Interactive Timeline */}
        <div className="glass-panel" style={{
          padding: '2.5rem 2rem',
          borderRadius: '20px',
          border: '1px solid rgba(255, 215, 0, 0.2)'
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
              <div style={{ color: '#FFD700', fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                JOURNEY OF EXCELLENCE
              </div>
              <h3 style={{ fontSize: '1.75rem', color: '#FFFFFF' }}>
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
                    background: activeMilestone === index ? 'var(--pf-gold)' : 'rgba(255, 255, 255, 0.06)',
                    color: activeMilestone === index ? '#050A12' : '#CBD5E1',
                    border: '1px solid ' + (activeMilestone === index ? '#FFD700' : 'rgba(255, 255, 255, 0.1)'),
                    padding: '0.5rem 1rem',
                    borderRadius: '8px',
                    fontWeight: 700,
                    fontSize: '0.85rem'
                  }}
                >
                  {item.year}
                </button>
              ))}
            </div>
          </div>

          {/* Active Milestone Card */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2.5rem',
            alignItems: 'center'
          }}>
            <div>
              <div className="pill-gold" style={{ marginBottom: '1rem' }}>
                {TIMELINE_MILESTONES[activeMilestone].badge}
              </div>
              <div style={{
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                fontFamily: 'var(--font-heading)',
                fontWeight: 900,
                color: '#FFD700',
                lineHeight: 1,
                marginBottom: '0.5rem'
              }}>
                {TIMELINE_MILESTONES[activeMilestone].year}
              </div>
              <h4 style={{ fontSize: '1.5rem', color: '#FFFFFF', marginBottom: '1rem' }}>
                {TIMELINE_MILESTONES[activeMilestone].title}
              </h4>
              <p style={{ fontSize: '1.05rem', color: '#CBD5E1', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                {TIMELINE_MILESTONES[activeMilestone].description}
              </p>
              <button
                onClick={() => onOpenQuote()}
                className="btn-gold"
                style={{ fontSize: '0.9rem', padding: '0.75rem 1.5rem' }}
              >
                Partner With Us <ArrowRight size={16} />
              </button>
            </div>

            {/* Visual Stats Highlights for Milestone */}
            <div style={{
              background: 'rgba(15, 39, 68, 0.72)',
              borderRadius: '16px',
              padding: '1.75rem',
              border: '1px solid rgba(255, 255, 255, 0.08)'
            }}>
              <div style={{ fontWeight: 700, color: '#FFFFFF', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <TrendingUp size={18} color="#FFD700" />
                Strategic Highlights
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', color: '#CBD5E1', fontSize: '0.9rem' }}>
                  <CheckCircle2 size={16} color="#10B981" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <span><strong>Head Office:</strong> Viman Nagar, Pune corporate headquarters with 24x7 War Room.</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', color: '#CBD5E1', fontSize: '0.9rem' }}>
                  <CheckCircle2 size={16} color="#10B981" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <span><strong>Key Regional Hubs:</strong> BKC Mumbai, Aerocity New Delhi, Hitec City Hyderabad.</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', color: '#CBD5E1', fontSize: '0.9rem' }}>
                  <CheckCircle2 size={16} color="#10B981" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <span><strong>Fleet Technology:</strong> Real-time telematics, dynamic route clustering & digital attendance.</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', color: '#CBD5E1', fontSize: '0.9rem' }}>
                  <CheckCircle2 size={16} color="#10B981" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <span><strong>Enterprise Trust:</strong> Servicing Tier-1 IT, BFSI, Aerospace, and Automotive giants nationwide.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
