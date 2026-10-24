import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight, CheckCircle2, Sparkles } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/mockData';

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
    }, 6500);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS_DATA.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
  };

  const current = TESTIMONIALS_DATA[currentIndex];

  return (
    <section className="section-padding bg-obsidian mesh-grid" style={{ position: 'relative' }}>
      
      {/* Background Soft Emerald Glow */}
      <div 
        style={{ 
          position: 'absolute',
          width: '650px', 
          height: '650px', 
          top: '20%', 
          right: '-5%',
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
            <span>Institutional Endorsements & Proof</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2.2rem, 3.8vw, 3.4rem)', marginBottom: '1.25rem' }}>
            Trusted by Procurement Leaders at <span className="text-gradient-emerald">Fortune 500 Enterprises</span>
          </h2>
          <p style={{ fontSize: '1.1rem', color: '#94A3B8', lineHeight: 1.75 }}>
            Read how global corporations rely on Parveen Fleets for daily workforce punctuality, executive VIP delegations, and absolute employee safety.
          </p>
        </div>

        {/* Featured Testimonial Card */}
        <motion.div 
          className="glass-panel"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{
            maxWidth: '920px',
            margin: '0 auto',
            padding: 'clamp(2.5rem, 5vw, 4rem)',
            borderRadius: '26px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            background: 'rgba(15, 23, 42, 0.7)',
            boxShadow: '0 25px 70px rgba(0, 0, 0, 0.8), 0 0 35px rgba(0, 200, 150, 0.12)',
            position: 'relative'
          }}
        >
          <Quote size={52} color="#D4AF37" style={{ opacity: 0.25, position: 'absolute', top: '2.5rem', right: '2.5rem' }} />

          {/* Star Rating */}
          <div style={{ display: 'flex', gap: '0.4rem', marginBottom: '1.75rem' }}>
            {[...Array(current.rating)].map((_, i) => (
              <Star key={i} size={20} fill="#D4AF37" color="#D4AF37" style={{ filter: 'drop-shadow(0 0 6px rgba(212, 175, 55, 0.5))' }} />
            ))}
          </div>

          {/* Quote Text with AnimatePresence */}
          <AnimatePresence mode="wait">
            <motion.p 
              key={currentIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
              style={{
                fontSize: 'clamp(1.15rem, 2.2vw, 1.45rem)',
                color: '#FFFFFF',
                lineHeight: 1.75,
                marginBottom: '2.25rem',
                fontFamily: 'var(--font-heading)',
                fontWeight: 500
              }}
            >
              "{current.quote}"
            </motion.p>
          </AnimatePresence>

          {/* Author Details & Navigation Controls */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1.5rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            paddingTop: '1.75rem'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.15rem' }}>
              <img
                src={current.avatar}
                alt={current.clientName}
                loading="lazy"
                decoding="async"
                style={{
                  width: '58px',
                  height: '58px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  border: '2px solid #D4AF37',
                  boxShadow: '0 0 15px rgba(212, 175, 55, 0.3)'
                }}
              />
              <div>
                <div style={{ fontWeight: 800, color: '#FFFFFF', fontSize: '1.15rem' }}>
                  {current.clientName}
                </div>
                <div style={{ color: '#D4AF37', fontSize: '0.86rem', fontWeight: 600 }}>
                  {current.title}
                </div>
                <div style={{ color: '#94A3B8', fontSize: '0.82rem', marginTop: '1px' }}>
                  {current.company}
                </div>
              </div>
            </div>

            {/* Slider Controls */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <button
                onClick={handlePrev}
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  color: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
                className="hover-emerald"
                aria-label="Previous Testimonial"
              >
                <ChevronLeft size={20} />
              </button>

              <button
                onClick={handleNext}
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '50%',
                  background: 'var(--emerald-gradient)',
                  border: 'none',
                  color: '#05080F',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  boxShadow: '0 0 20px rgba(0, 200, 150, 0.4)',
                  transition: 'all 0.2s ease'
                }}
                aria-label="Next Testimonial"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
