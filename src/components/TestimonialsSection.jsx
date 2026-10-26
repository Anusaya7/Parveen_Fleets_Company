import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/mockData';
import { useSiteContent } from '../context/SiteContentContext';

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { content } = useSiteContent();
  const testimonials = content.testimonials?.length ? content.testimonials : TESTIMONIALS_DATA;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const current = testimonials[currentIndex] || testimonials[0];

  return (
    <section className="testimonials-section section-padding">
      
      {/* Background Glow */}
      <div className="ambient-glow ambient-blue" style={{ width: '450px', height: '450px', top: '20%', right: '-5%' }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        
        {/* Section Header */}
        <div className="section-head">
          <div className="pill-gold" style={{ marginBottom: '1rem' }}>
            <Star size={14} />
            <span>Client Endorsements & Proof</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', marginBottom: '1.25rem' }}>
            Trusted by Leaders at <span className="text-gradient-gold">Fortune 500 Enterprises</span>
          </h2>
          <p style={{ fontSize: '1.08rem', color: '#5B6F86', lineHeight: 1.65 }}>
            Read how global corporations rely on Parveen Fleets for daily workforce punctuality, executive VIP delegations, and absolute employee safety.
          </p>
        </div>

        {/* Featured Testimonial Card */}
        <div className="glass-panel" style={{
          width: '100%',
          padding: 'clamp(2rem, 4vw, 3.5rem)',
          borderRadius: '22px',
          position: 'relative'
        }}>
          
          <Quote size={48} color="#FFD700" style={{ opacity: 0.3, position: 'absolute', top: '2rem', right: '2rem' }} />

          {/* Star Rating */}
          <div style={{ display: 'flex', gap: '0.35rem', marginBottom: '1.5rem' }}>
            {[...Array(current.rating)].map((_, i) => (
              <Star key={i} size={20} fill="#FFD700" color="#FFD700" />
            ))}
          </div>

          {/* Quote Text */}
          <p style={{
            fontSize: 'clamp(1.08rem, 2.2vw, 1.32rem)',
            color: '#0B1F3A',
            lineHeight: 1.7,
            fontStyle: 'italic',
            marginBottom: '2rem',
            fontFamily: 'var(--font-heading)',
            fontWeight: 500
          }}>
            "{current.quote}"
          </p>

          {/* Author Details & Navigation Controls */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1.5rem',
            borderTop: '1px solid #E3EAF2',
            paddingTop: '1.5rem'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <img
                src={current.avatar}
                alt={current.clientName}
                loading="lazy"
                decoding="async"
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  border: '2px solid #FFD700'
                }}
              />
              <div>
                <div style={{ fontWeight: 800, color: '#0B1F3A', fontSize: '1.1rem' }}>
                  {current.clientName}
                </div>
                <div style={{ color: '#8A6A00', fontSize: '0.85rem', fontWeight: 600 }}>
                  {current.title}
                </div>
                <div style={{ color: '#5B6F86', fontSize: '0.8rem' }}>
                  {current.company}
                </div>
              </div>
            </div>

            {/* Slider Controls */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <button
                onClick={handlePrev}
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  background: '#F4F7FB',
                  border: '1px solid #D8E3EE',
                  color: '#0B1F3A',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer'
                }}
                aria-label="Previous Testimonial"
              >
                <ChevronLeft size={20} />
              </button>

              <button
                onClick={handleNext}
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #FFD700, #FFA500)',
                  border: 'none',
                  color: '#050A12',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer'
                }}
                aria-label="Next Testimonial"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
