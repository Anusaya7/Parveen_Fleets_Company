import React from 'react';
import { motion } from 'framer-motion';
import { Award, Trophy, Star, ShieldCheck, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

export default function AwardsSection({ onOpenQuote }) {
  return (
    <section id="awards" className="section-padding bg-obsidian mesh-grid" style={{ position: 'relative', overflow: 'hidden' }}>
      
      {/* Background Soft Champagne Gold Ambient Glow */}
      <div 
        style={{ 
          position: 'absolute',
          width: '750px', 
          height: '750px', 
          top: '20%', 
          left: '50%', 
          transform: 'translateX(-50%)',
          background: 'radial-gradient(circle, rgba(212, 175, 55, 0.16) 0%, transparent 70%)',
          filter: 'blur(140px)',
          pointerEvents: 'none',
          zIndex: 0
        }} 
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        
        {/* Main Award Feature Card with Champagne Gold Gradient Border */}
        <motion.div 
          className="glass-panel"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{
            padding: 'clamp(2.5rem, 5vw, 4.5rem) clamp(1.5rem, 4vw, 3.5rem)',
            borderRadius: '28px',
            border: '1.5px solid rgba(212, 175, 55, 0.45)',
            background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.85) 0%, rgba(20, 30, 55, 0.75) 50%, rgba(10, 16, 30, 0.95) 100%)',
            boxShadow: '0 30px 80px rgba(0, 0, 0, 0.85), 0 0 50px rgba(212, 175, 55, 0.22)',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Subtle gold top-rim light */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: '10%',
            right: '10%',
            height: '2px',
            background: 'linear-gradient(90deg, transparent 0%, #D4AF37 50%, transparent 100%)',
            boxShadow: '0 0 20px #D4AF37'
          }} />

          {/* Top Pill & Stars */}
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <div className="pill-gold" style={{ marginBottom: '1.25rem', boxShadow: '0 0 20px rgba(212, 175, 55, 0.25)' }}>
              <Trophy size={14} color="#D4AF37" />
              <span>NATIONAL EXCELLENCE RECOGNITION • PAGE 7</span>
            </div>

            {/* 5 Golden Stars */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '0.45rem', marginBottom: '1rem' }}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={22} fill="#D4AF37" color="#D4AF37" style={{ filter: 'drop-shadow(0 0 8px rgba(212, 175, 55, 0.6))' }} />
              ))}
            </div>

            {/* Required Exact Heading */}
            <h2 style={{
              fontSize: 'clamp(2.4rem, 4.8vw, 3.8rem)',
              fontWeight: 800,
              lineHeight: 1.15,
              marginBottom: '1.25rem',
              color: '#FFFFFF'
            }}>
              Awarded Best Corporate Car Rental <br />
              <span className="text-gradient-gold">2024</span>
            </h2>

            <p style={{
              fontSize: 'clamp(1.05rem, 2vw, 1.25rem)',
              color: '#CBD5E1',
              maxWidth: '780px',
              margin: '0 auto',
              lineHeight: 1.75
            }}>
              Mr. Vajid Mirza, Director of Parveen Fleets Pvt Ltd, was honored with the prestigious 
              <strong> International Business Startup and Entrepreneurs Association (IBSEA) Award </strong> 
              at the India@2047 Conference in New Delhi for pioneering safety, commuter comfort, and corporate fleet reliability.
            </p>
          </div>

          {/* 2-Column: Real IBSEA Award Trophy & Stage Presentation Photo */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2.5rem',
            alignItems: 'center',
            maxWidth: '960px',
            margin: '0 auto 3rem auto'
          }}>
            
            {/* Real Ashoka Pillar Trophy Card */}
            <motion.div
              className="glass-card"
              whileHover={{ scale: 1.02 }}
              style={{
                borderRadius: '20px',
                border: '1px solid rgba(212, 175, 55, 0.45)',
                background: 'rgba(5, 8, 15, 0.8)',
                padding: '1.75rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                boxShadow: '0 20px 45px rgba(0,0,0,0.8), 0 0 30px rgba(212, 175, 55, 0.18)'
              }}
            >
              <div style={{ position: 'relative', height: '280px', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img
                  src="/images/assets/ibsea_award_trophy.png"
                  alt="IBSEA Emblem of Gratitude Trophy Awarded to Mr. Vajid Mirza"
                  loading="lazy"
                  decoding="async"
                  style={{
                    maxHeight: '100%',
                    maxWidth: '100%',
                    objectFit: 'contain',
                    filter: 'drop-shadow(0 15px 30px rgba(0,0,0,0.9)) drop-shadow(0 0 25px rgba(212, 175, 55, 0.35))'
                  }}
                />
              </div>
              <div style={{ textAlign: 'center', marginTop: '1rem', borderTop: '1px solid rgba(212, 175, 55, 0.25)', paddingTop: '0.85rem', width: '100%' }}>
                <div style={{ color: '#D4AF37', fontWeight: 800, fontSize: '0.92rem' }}>
                  IBSEA Emblem of Gratitude Trophy
                </div>
                <div style={{ fontSize: '0.78rem', color: '#94A3B8', marginTop: '2px' }}>
                  Best Corporate Car Rental of the Year 2024
                </div>
              </div>
            </motion.div>

            {/* Stage Ceremony Presentation Photo */}
            <motion.div
              className="glass-card"
              whileHover={{ scale: 1.02 }}
              style={{
                borderRadius: '20px',
                border: '1px solid rgba(212, 175, 55, 0.45)',
                background: 'rgba(5, 8, 15, 0.8)',
                padding: '1.75rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                boxShadow: '0 20px 45px rgba(0,0,0,0.8), 0 0 30px rgba(212, 175, 55, 0.18)'
              }}
            >
              <div style={{ position: 'relative', height: '280px', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', borderRadius: '12px' }}>
                <img
                  src="/images/assets/ibsea_award_ceremony.png"
                  alt="Mr. Vajid Mirza Director receiving IBSEA Award on Stage"
                  loading="lazy"
                  decoding="async"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: '12px',
                    filter: 'contrast(1.05) brightness(0.95)'
                  }}
                />
              </div>
              <div style={{ textAlign: 'center', marginTop: '1rem', borderTop: '1px solid rgba(212, 175, 55, 0.25)', paddingTop: '0.85rem', width: '100%' }}>
                <div style={{ color: '#D4AF37', fontWeight: 800, fontSize: '0.92rem' }}>
                  Award Ceremony Presentation
                </div>
                <div style={{ fontSize: '0.78rem', color: '#94A3B8', marginTop: '2px' }}>
                  Presented to Director Mr. Vajid Mirza on Saturday, 21st Dec 2024
                </div>
              </div>
            </motion.div>

          </div>

          {/* 3 Certifications and Merits */}
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
              gap: '1rem'
            }}>
              <CheckCircle2 size={24} color="#00C896" style={{ flexShrink: 0 }} />
              <div>
                <div style={{ fontWeight: 800, color: '#FFFFFF', fontSize: '0.95rem' }}>ISO 9001:2015</div>
                <div style={{ fontSize: '0.78rem', color: '#94A3B8' }}>Certified Quality Management</div>
              </div>
            </div>

            <div style={{
              background: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '14px',
              padding: '1.25rem',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem'
            }}>
              <ShieldCheck size={24} color="#00C896" style={{ flexShrink: 0 }} />
              <div>
                <div style={{ fontWeight: 800, color: '#FFFFFF', fontSize: '0.95rem' }}>100% PoSH Audited</div>
                <div style={{ fontSize: '0.78rem', color: '#94A3B8' }}>Zero-Tolerance Female Escort Safety</div>
              </div>
            </div>

            <div style={{
              background: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '14px',
              padding: '1.25rem',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem'
            }}>
              <Award size={24} color="#D4AF37" style={{ flexShrink: 0 }} />
              <div>
                <div style={{ fontWeight: 800, color: '#FFFFFF', fontSize: '0.95rem' }}>Dun & Bradstreet</div>
                <div style={{ fontSize: '0.78rem', color: '#94A3B8' }}>Verified Sovereign B2B Partner</div>
              </div>
            </div>
          </div>

          {/* Action CTA */}
          <div style={{ textAlign: 'center' }}>
            <button
              onClick={() => onOpenQuote()}
              className="btn-emerald"
              style={{ padding: '1rem 2.25rem', fontSize: '1rem' }}
            >
              <span>Partner With India's Awarded Corporate Fleet</span>
              <ArrowRight size={18} />
            </button>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
