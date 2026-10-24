import React from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Cpu, 
  Radio, 
  Headphones, 
  Award, 
  ShieldCheck, 
  FileCheck, 
  BarChart3, 
  UserCheck, 
  CheckCircle2, 
  XCircle, 
  Sparkles,
  Crown,
  ArrowRight
} from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/mockData';

const iconMap = {
  MapPin,
  Cpu,
  Radio,
  Headphones,
  Award,
  ShieldCheck,
  FileCheck,
  BarChart3,
  UserCheck
};

export default function WhyChooseUsSection({ onOpenQuote }) {
  const COMPARISON_ROWS = [
    {
      dimension: "GPS Telematics & Speed Tracking",
      parveen: "Dual-Redundant Live GPS, Speed Alarms & Sub-Second Pings",
      traditional: "Manual driver phone calls, delayed or unverified data"
    },
    {
      dimension: "Safety & Female Escort Protocol",
      parveen: "100% PoSH Certified, SOS Siren, Safe Reach OTP & Guard Escort",
      traditional: "Informal protocols, high regulatory & legal liability"
    },
    {
      dimension: "Chauffeur Screening & Verification",
      parveen: "5-Tier Police & Court Background Check with Periodic Re-checks",
      traditional: "Ad-hoc sub-contractors, unverified temp drivers"
    },
    {
      dimension: "Billing Accuracy & Invoicing",
      parveen: "Tamper-Proof Digital GPS Toll-Linked Transparent Billing",
      traditional: "Manual inflated paper trip sheets & untracked tolls"
    },
    {
      dimension: "PAN-India Scalability & SLA",
      parveen: "112+ Operational Hubs under Single Enterprise SLA Agreement",
      traditional: "City-restricted, fragmented local vendors & inconsistent SLA"
    },
    {
      dimension: "Fleet Age & Vehicle Hygiene",
      parveen: "Vehicles < 3 Years Old, Dual A/C, Strict Sanitization Standards",
      traditional: "Aging vehicles, frequent roadside breakdowns, poor upkeep"
    }
  ];

  return (
    <section className="section-padding bg-obsidian mesh-grid" style={{ position: 'relative' }}>
      
      {/* Soft Emerald Glow Background */}
      <div 
        style={{ 
          position: 'absolute',
          width: '650px', 
          height: '650px', 
          top: '15%', 
          left: '50%', 
          transform: 'translateX(-50%)',
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
            <Sparkles size={14} />
            <span>The Enterprise Advantage</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2.2rem, 3.8vw, 3.2rem)', marginBottom: '1.25rem' }}>
            Why Leading Multinationals <span className="text-gradient-emerald">Choose Parveen Fleets</span>
          </h2>
          <p style={{ fontSize: '1.1rem', color: '#94A3B8', lineHeight: 1.75 }}>
            Eliminating traditional transport bottlenecks through automated telematics, verified protocol chauffeurs, strict safety compliance, and transparent GPS-backed billing.
          </p>
        </div>

        {/* 9 Feature Cards Grid: Glass Cards with soft emerald gradient border top & hover lift */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '1.75rem',
          marginBottom: '5rem'
        }}>
          {WHY_CHOOSE_US.map((item, index) => {
            const IconComponent = iconMap[item.icon] || ShieldCheck;

            return (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -5 }}
                style={{
                  background: 'rgba(15, 23, 42, 0.6)',
                  backdropFilter: 'blur(24px)',
                  WebkitBackdropFilter: 'blur(24px)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderTop: '2px solid rgba(0, 200, 150, 0.45)',
                  borderRadius: '20px',
                  padding: '2.2rem 1.85rem',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1.35rem',
                  boxShadow: '0 16px 36px rgba(0, 0, 0, 0.5)',
                  transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                  overflow: 'hidden'
                }}
              >
                {/* Subtle faint gold watermark icon that appears on hover */}
                <div 
                  className="absolute -right-4 -bottom-4 text-[#D4AF37]/5 transition-opacity duration-300 group-hover:text-[#D4AF37]/15 pointer-events-none"
                >
                  <Crown size={90} />
                </div>

                {/* Primary Feature Icon Box */}
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
                  flexShrink: 0,
                  transition: 'all 0.3s ease'
                }} className="group-hover:border-[#D4AF37] group-hover:text-[#D4AF37] group-hover:shadow-[0_0_20px_rgba(212,175,55,0.25)]">
                  <IconComponent size={24} />
                </div>

                <div style={{ position: 'relative', zIndex: 1 }}>
                  <h3 style={{ fontSize: '1.18rem', color: '#FFFFFF', marginBottom: '0.45rem', fontWeight: 700 }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '0.92rem', color: '#94A3B8', lineHeight: 1.65 }}>
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Enterprise Comparison: Premium SaaS Pricing Matrix Table */}
        <motion.div 
          className="glass-panel"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{
            padding: ' clamp(2rem, 4vw, 3.5rem)',
            borderRadius: '24px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            background: 'rgba(15, 23, 42, 0.65)',
            boxShadow: '0 25px 60px rgba(0, 0, 0, 0.7), 0 0 35px rgba(0, 200, 150, 0.12)'
          }}
        >
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <div className="pill-gold" style={{ marginBottom: '0.75rem' }}>
              <Crown size={13} color="#D4AF37" fill="#D4AF37" />
              <span>Direct Vendor Matrix</span>
            </div>
            <h3 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', color: '#FFFFFF', marginBottom: '0.65rem', fontWeight: 800 }}>
              Parveen Fleets vs. Traditional Vendors
            </h3>
            <p style={{ color: '#94A3B8', fontSize: '0.95rem', maxWidth: '650px', margin: '0 auto' }}>
              Compare our audited institutional mobility standard against unorganized market vendors across India.
            </p>
          </div>

          <div style={{ overflowX: 'auto', borderRadius: '16px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
            <table style={{ width: '100%', minWidth: '720px', borderCollapse: 'collapse', textAlign: 'left' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
                  <th style={{ padding: '1.25rem 1.5rem', width: '32%', color: '#94A3B8', fontSize: '0.82rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                    OPERATIONAL BENCHMARK
                  </th>
                  
                  {/* Left Side: Parveen Fleets with Dark Emerald Tint & Gold Crown Header */}
                  <th style={{
                    padding: '1.25rem 1.5rem',
                    width: '38%',
                    background: 'linear-gradient(180deg, rgba(0, 200, 150, 0.16) 0%, rgba(0, 200, 150, 0.08) 100%)',
                    borderLeft: '1px solid rgba(0, 200, 150, 0.3)',
                    borderRight: '1px solid rgba(0, 200, 150, 0.3)'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#D4AF37', fontWeight: 800, fontSize: '0.95rem' }}>
                      <Crown size={18} color="#D4AF37" fill="#D4AF37" />
                      <span>PARVEEN FLEETS (ENTERPRISE)</span>
                    </div>
                    <div style={{ fontSize: '0.72rem', color: '#00C896', fontWeight: 600, marginTop: '0.2rem' }}>
                      ✦ Sovereign SLA & ISO 9001:2015
                    </div>
                  </th>

                  {/* Right Side: Traditional Vendors with Muted Desaturated Gray */}
                  <th style={{
                    padding: '1.25rem 1.5rem',
                    width: '30%',
                    background: 'rgba(255, 255, 255, 0.02)',
                    color: '#64748B',
                    fontSize: '0.82rem',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase'
                  }}>
                    Traditional Local Vendors
                  </th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON_ROWS.map((row, idx) => (
                  <tr 
                    key={idx}
                    style={{ 
                      borderBottom: idx === COMPARISON_ROWS.length - 1 ? 'none' : '1px solid rgba(255, 255, 255, 0.06)',
                      background: idx % 2 === 0 ? 'rgba(255, 255, 255, 0.01)' : 'transparent'
                    }}
                  >
                    <td style={{ padding: '1.15rem 1.5rem', color: '#F8FAFC', fontWeight: 600, fontSize: '0.92rem' }}>
                      {row.dimension}
                    </td>

                    {/* Parveen Fleets Cell: Dark Emerald Tinted Background */}
                    <td style={{
                      padding: '1.15rem 1.5rem',
                      background: 'rgba(0, 200, 150, 0.06)',
                      borderLeft: '1px solid rgba(0, 200, 150, 0.2)',
                      borderRight: '1px solid rgba(0, 200, 150, 0.2)',
                      color: '#F8FAFC',
                      fontSize: '0.92rem'
                    }}>
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                        <CheckCircle2 size={18} color="#00C896" style={{ flexShrink: 0, marginTop: '2px' }} />
                        <span>{row.parveen}</span>
                      </div>
                    </td>

                    {/* Traditional Vendor Cell: Desaturated Muted Gray */}
                    <td style={{
                      padding: '1.15rem 1.5rem',
                      background: 'rgba(255, 255, 255, 0.01)',
                      color: '#64748B',
                      fontSize: '0.88rem'
                    }}>
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', opacity: 0.75 }}>
                        <XCircle size={18} color="#64748B" style={{ flexShrink: 0, marginTop: '2px' }} />
                        <span>{row.traditional}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <button
              onClick={() => onOpenQuote()}
              className="btn-emerald"
              style={{ padding: '0.95rem 2.2rem', fontSize: '0.95rem' }}
            >
              <span>Migrate Fleet to Parveen Enterprise</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
