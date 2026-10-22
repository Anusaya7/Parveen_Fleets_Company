import React from 'react';
import { MapPin, Cpu, Radio, Headphones, Award, ShieldCheck, FileCheck, BarChart3, UserCheck, CheckCircle2, XCircle, Sparkles } from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/mockData';

const iconMap = {
  MapPin: MapPin,
  Cpu: Cpu,
  Radio: Radio,
  Headphones: Headphones,
  Award: Award,
  ShieldCheck: ShieldCheck,
  FileCheck: FileCheck,
  BarChart3: BarChart3,
  UserCheck: UserCheck
};

export default function WhyChooseUsSection({ onOpenQuote }) {
  return (
    <section className="section-padding" style={{ position: 'relative' }}>
      
      {/* Background Decorative Glow */}
      <div className="ambient-glow ambient-blue" style={{ width: '500px', height: '500px', top: '20%', left: '50%', transform: 'translateX(-50%)' }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 4rem auto' }}>
          <div className="pill-gold" style={{ marginBottom: '1rem' }}>
            <Sparkles size={14} />
            <span>The Enterprise Advantage</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', marginBottom: '1.25rem' }}>
            Why Leading Corporations <span className="text-gradient-gold">Choose Parveen Fleets</span>
          </h2>
          <p style={{ fontSize: '1.1rem', color: '#94A3B8', lineHeight: 1.6 }}>
            Eliminating traditional transport bottlenecks through automated telematics, verified chauffeurs, strict safety protocols, and transparent GPS-backed billing.
          </p>
        </div>

        {/* 9 Animated Feature Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '1.5rem',
          marginBottom: '4.5rem'
        }}>
          {WHY_CHOOSE_US.map((item, index) => {
            const IconComponent = iconMap[item.icon] || ShieldCheck;

            return (
              <div
                key={index}
                className="glass-card"
                style={{
                  padding: '2rem 1.75rem',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1.25rem',
                  border: '1px solid rgba(255, 255, 255, 0.08)'
                }}
              >
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  background: 'rgba(255, 215, 0, 0.12)',
                  border: '1px solid rgba(255, 215, 0, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFD700',
                  flexShrink: 0
                }}>
                  <IconComponent size={24} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.15rem', color: '#FFFFFF', marginBottom: '0.4rem', fontWeight: 700 }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: '#94A3B8', lineHeight: 1.6 }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Enterprise Comparison: Parveen Fleets vs Traditional Vendors */}
        <div className="glass-panel" style={{
          padding: '2.5rem 2rem',
          borderRadius: '20px',
          border: '1px solid rgba(255, 215, 0, 0.25)'
        }}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1.5rem', color: '#FFFFFF', marginBottom: '0.5rem' }}>
              Parveen Fleets vs. Traditional Unorganized Vendors
            </h3>
            <p style={{ color: '#94A3B8', fontSize: '0.9rem' }}>
              See why leading corporate procurement and administration teams migrate their entire fleet to Parveen Fleets.
            </p>
          </div>

          <div style={{ overflowX: 'auto' }}>
            <table className="enterprise-table" style={{ minWidth: '650px' }}>
              <thead>
                <tr>
                  <th style={{ width: '35%' }}>Operational Dimension</th>
                  <th style={{ width: '35%', color: '#FFD700', fontSize: '0.85rem' }}>
                    ✦ Parveen Fleets Enterprise
                  </th>
                  <th style={{ width: '30%', color: '#EF4444' }}>
                    Traditional Local Vendors
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>GPS Telematics & Tracking</strong></td>
                  <td style={{ color: '#10B981', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <CheckCircle2 size={16} /> Dual-Redundant Live GPS + Speed Control
                  </td>
                  <td style={{ color: '#EF4444', alignItems: 'center', gap: '0.5rem' }}>
                    <XCircle size={16} style={{ display: 'inline', marginRight: '6px' }} /> Manual phone calls, no real-time data
                  </td>
                </tr>
                <tr>
                  <td><strong>Safety & Female Escort Protocol</strong></td>
                  <td style={{ color: '#10B981' }}>
                    <CheckCircle2 size={16} style={{ display: 'inline', marginRight: '6px' }} /> 100% PoSH, SOS Button, Safe Reach OTP
                  </td>
                  <td style={{ color: '#EF4444' }}>
                    <XCircle size={16} style={{ display: 'inline', marginRight: '6px' }} /> Informal, high compliance and legal risk
                  </td>
                </tr>
                <tr>
                  <td><strong>Driver Verification</strong></td>
                  <td style={{ color: '#10B981' }}>
                    <CheckCircle2 size={16} style={{ display: 'inline', marginRight: '6px' }} /> 5-Tier Police & Court Background Check
                  </td>
                  <td style={{ color: '#EF4444' }}>
                    <XCircle size={16} style={{ display: 'inline', marginRight: '6px' }} /> Unverified ad-hoc sub-contractors
                  </td>
                </tr>
                <tr>
                  <td><strong>Billing Accuracy & Trip Sheets</strong></td>
                  <td style={{ color: '#10B981' }}>
                    <CheckCircle2 size={16} style={{ display: 'inline', marginRight: '6px' }} /> Tamper-Proof Digital GPS Toll-Linked Invoicing
                  </td>
                  <td style={{ color: '#EF4444' }}>
                    <XCircle size={16} style={{ display: 'inline', marginRight: '6px' }} /> Inflated manual paper trip sheets
                  </td>
                </tr>
                <tr>
                  <td><strong>PAN India Reach & Scale</strong></td>
                  <td style={{ color: '#10B981' }}>
                    <CheckCircle2 size={16} style={{ display: 'inline', marginRight: '6px' }} /> 112+ Operational Hubs with Single SLA
                  </td>
                  <td style={{ color: '#EF4444' }}>
                    <XCircle size={16} style={{ display: 'inline', marginRight: '6px' }} /> City-restricted, fragmented vendors
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <button
              onClick={() => onOpenQuote()}
              className="btn-gold"
              style={{ padding: '0.85rem 2rem', fontSize: '0.95rem' }}
            >
              Request Enterprise SLA & Tariff Deck
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
