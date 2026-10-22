import React from 'react';
import { Award, Trophy, Star, ShieldCheck, Sparkles, CheckCircle2 } from 'lucide-react';

export default function AwardsSection({ onOpenQuote }) {
  return (
    <section id="awards" className="section-padding" style={{ position: 'relative', overflow: 'hidden' }}>
      
      {/* Background Ambient Radial Glow */}
      <div className="ambient-glow ambient-gold" style={{ width: '600px', height: '600px', top: '20%', left: '50%', transform: 'translateX(-50%)', opacity: 0.7 }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        
        {/* Main Award Feature Glass Box */}
        <div className="glass-panel" style={{
          padding: 'clamp(2.5rem, 5vw, 4.5rem) clamp(1.5rem, 4vw, 3.5rem)',
          borderRadius: '28px',
          border: '1.5px solid rgba(255, 215, 0, 0.45)',
          background: 'linear-gradient(135deg, rgba(20, 55, 91, 0.9) 0%, rgba(25, 71, 119, 0.72) 50%, rgba(13, 38, 67, 0.96) 100%)',
          boxShadow: '0 30px 80px rgba(0, 0, 0, 0.8), 0 0 50px rgba(255, 215, 0, 0.25)',
          textAlign: 'center',
          position: 'relative'
        }}>
          
          {/* Top Award Crest */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '90px',
            height: '90px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
            color: '#050A12',
            boxShadow: '0 0 35px rgba(255, 215, 0, 0.6)',
            marginBottom: '1.75rem',
            position: 'relative'
          }}>
            <Trophy size={46} strokeWidth={2.2} />
          </div>

          {/* 5 Golden Stars */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginBottom: '1.25rem' }}>
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={22} fill="#FFD700" color="#FFD700" />
            ))}
          </div>

          {/* Eyebrow */}
          <div style={{
            fontSize: '0.9rem',
            fontFamily: 'var(--font-heading)',
            fontWeight: 800,
            color: '#FFD700',
            textTransform: 'uppercase',
            letterSpacing: '0.15em',
            marginBottom: '0.75rem'
          }}>
            NATIONAL FLEET MOBILITY HONORS
          </div>

          {/* Primary Award Title */}
          <h2 style={{
            fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)',
            fontWeight: 900,
            lineHeight: 1.2,
            marginBottom: '1.5rem',
            color: '#FFFFFF'
          }}>
            Best Corporate Car Rental <br />
            <span className="text-gradient-gold">Of The Year 2024</span>
          </h2>

          {/* Subtitle */}
          <p style={{
            fontSize: 'clamp(1rem, 2vw, 1.2rem)',
            color: '#CBD5E1',
            maxWidth: '740px',
            margin: '0 auto 2.5rem auto',
            lineHeight: 1.7
          }}>
            Recognized by the National Corporate Mobility Federation for outstanding reliability, commuter safety innovations, and pioneering enterprise telematics across India.
          </p>

          {/* 3 Certifications & Merits */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1.25rem',
            maxWidth: '900px',
            margin: '0 auto 2.5rem auto'
          }}>
            <div style={{
              background: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '14px',
              padding: '1.25rem',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              textAlign: 'left'
            }}>
              <Award size={32} color="#FFD700" style={{ flexShrink: 0 }} />
              <div>
                <div style={{ fontWeight: 800, color: '#FFFFFF', fontSize: '0.95rem' }}>ISO 9001:2015</div>
                <div style={{ fontSize: '0.8rem', color: '#94A3B8' }}>Quality Fleet Management</div>
              </div>
            </div>

            <div style={{
              background: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '14px',
              padding: '1.25rem',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              textAlign: 'left'
            }}>
              <ShieldCheck size={32} color="#10B981" style={{ flexShrink: 0 }} />
              <div>
                <div style={{ fontWeight: 800, color: '#FFFFFF', fontSize: '0.95rem' }}>PoSH Compliant</div>
                <div style={{ fontSize: '0.8rem', color: '#94A3B8' }}>Women Workplace Safety</div>
              </div>
            </div>

            <div style={{
              background: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '14px',
              padding: '1.25rem',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              textAlign: 'left'
            }}>
              <Sparkles size={32} color="#38BDF8" style={{ flexShrink: 0 }} />
              <div>
                <div style={{ fontWeight: 800, color: '#FFFFFF', fontSize: '0.95rem' }}>99.8% On-Time SLA</div>
                <div style={{ fontSize: '0.8rem', color: '#94A3B8' }}>Verified Audit 2024-2026</div>
              </div>
            </div>
          </div>

          {/* Action */}
          <div>
            <button
              onClick={() => onOpenQuote()}
              className="btn-gold"
              style={{ fontSize: '1rem', padding: '0.95rem 2.2rem' }}
            >
              Choose An Award-Winning Fleet Partner
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
