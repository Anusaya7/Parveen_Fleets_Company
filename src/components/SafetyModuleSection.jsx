import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, AlertTriangle, Radio, Users, CheckCircle, Navigation, Gauge, KeyRound, QrCode, FileText, UserCheck, ArrowRight, Sparkles } from 'lucide-react';
import { SAFETY_FEATURES } from '../data/mockData';

const iconMap = {
  sos: AlertTriangle,
  'trip-sharing': Navigation,
  'live-tracking': Radio,
  'women-safety': Users,
  'safe-reach': CheckCircle,
  'route-deviation': Navigation,
  'speed-monitoring': Gauge,
  'otp-verification': KeyRound,
  'qr-boarding': QrCode,
  'posh-compliance': FileText,
  'escort-facility': UserCheck,
  'background-verified': ShieldCheck
};

export default function SafetyModuleSection({ onOpenQuote }) {
  const [simulatorStep, setSimulatorStep] = useState(0);
  const [simulatorActive, setSimulatorActive] = useState(false);
  const simulatorTimers = useRef([]);

  useEffect(() => () => {
    simulatorTimers.current.forEach((timer) => window.clearTimeout(timer));
  }, []);

  const startSimulator = () => {
    simulatorTimers.current.forEach((timer) => window.clearTimeout(timer));
    setSimulatorActive(true);
    setSimulatorStep(1);
    simulatorTimers.current = [
      window.setTimeout(() => setSimulatorStep(2), 1200),
      window.setTimeout(() => setSimulatorStep(3), 2400),
      window.setTimeout(() => setSimulatorStep(4), 3600)
    ];
  };

  const resetSimulator = () => {
    simulatorTimers.current.forEach((timer) => window.clearTimeout(timer));
    simulatorTimers.current = [];
    setSimulatorActive(false);
    setSimulatorStep(0);
  };

  return (
    <section id="safety" className="section-padding bg-obsidian mesh-grid" style={{ position: 'relative' }}>
      
      {/* Background Soft Emerald Glow */}
      <div 
        style={{ 
          position: 'absolute',
          width: '650px', 
          height: '650px', 
          top: '15%', 
          left: '-10%',
          background: 'radial-gradient(circle, rgba(0, 200, 150, 0.14) 0%, transparent 70%)',
          filter: 'blur(130px)',
          pointerEvents: 'none',
          zIndex: 0
        }} 
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 4rem auto' }}>
          <div className="pill-emerald" style={{ marginBottom: '1rem' }}>
            <ShieldCheck size={14} />
            <span>Uncompromising Security Standards</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2.2rem, 3.8vw, 3.4rem)', marginBottom: '1.25rem' }}>
            Zero-Compromise <span className="text-gradient-emerald">Employee Safety Architecture</span>
          </h2>
          <p style={{ fontSize: '1.1rem', color: '#94A3B8', lineHeight: 1.75 }}>
            Building enterprise trust through proactive defense. Every vehicle, trip, and chauffeur is bound by 12 comprehensive safety checkpoints certified under PoSH guidelines.
          </p>
        </div>

        {/* Interactive Safety Command Simulator */}
        <motion.div 
          className="glass-panel"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{
            padding: '2.5rem',
            borderRadius: '24px',
            border: '1px solid rgba(0, 200, 150, 0.3)',
            marginBottom: '4.5rem',
            background: 'rgba(15, 23, 42, 0.72)',
            boxShadow: '0 25px 60px rgba(0, 0, 0, 0.75), 0 0 35px rgba(0, 200, 150, 0.12)'
          }}
        >
          <p style={{ color: '#94A3B8', fontSize: '0.8rem', marginBottom: '1.25rem' }}>
            Demonstration only. This simulation illustrates how the 24x7 Pune Central Command Center resolves alerts in sub-seconds.
          </p>

          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
            marginBottom: '2rem',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            paddingBottom: '1.25rem'
          }}>
            <div>
              <span className="pill-gold" style={{ marginBottom: '0.4rem', fontSize: '0.72rem' }}>
                LIVE DEMO • EMERGENCY RESPONSE SIMULATOR
              </span>
              <h3 style={{ fontSize: '1.5rem', color: '#FFFFFF', fontWeight: 800, marginTop: '0.35rem' }}>
                Test The Parveen Fleets Instant Response Protocol
              </h3>
            </div>

            <div style={{ display: 'flex', gap: '0.75rem' }}>
              {!simulatorActive ? (
                <button onClick={startSimulator} className="btn-emerald" style={{ padding: '0.7rem 1.4rem', fontSize: '0.86rem' }}>
                  <AlertTriangle size={15} /> Simulate SOS Trigger
                </button>
              ) : (
                <button onClick={resetSimulator} className="btn-ghost" style={{ padding: '0.7rem 1.4rem', fontSize: '0.86rem' }}>
                  Reset Protocol
                </button>
              )}
            </div>
          </div>

          {/* Steps Timeline Grid */}
          <div aria-live="polite" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1.25rem'
          }}>
            <div style={{
              background: simulatorStep >= 1 ? 'rgba(239, 68, 68, 0.18)' : 'rgba(5, 8, 15, 0.6)',
              border: '1px solid ' + (simulatorStep >= 1 ? '#EF4444' : 'rgba(255, 255, 255, 0.08)'),
              borderRadius: '16px',
              padding: '1.4rem',
              transition: 'all 0.3s ease'
            }}>
              <div style={{ fontSize: '0.74rem', color: simulatorStep >= 1 ? '#F87171' : '#94A3B8', fontWeight: 700, marginBottom: '0.4rem' }}>
                STEP 1 • 0 TO 5 SECONDS
              </div>
              <div style={{ color: '#FFFFFF', fontWeight: 800, fontSize: '1rem', marginBottom: '0.35rem' }}>
                SOS Alert Broadcasted
              </div>
              <p style={{ fontSize: '0.82rem', color: '#CBD5E1', lineHeight: 1.5 }}>
                Physical cab button or mobile app trigger ping received by 24x7 Pune Central Command.
              </p>
            </div>

            <div style={{
              background: simulatorStep >= 2 ? 'rgba(245, 158, 11, 0.18)' : 'rgba(5, 8, 15, 0.6)',
              border: '1px solid ' + (simulatorStep >= 2 ? '#F59E0B' : 'rgba(255, 255, 255, 0.08)'),
              borderRadius: '16px',
              padding: '1.4rem',
              transition: 'all 0.3s ease'
            }}>
              <div style={{ fontSize: '0.74rem', color: simulatorStep >= 2 ? '#FBBF24' : '#94A3B8', fontWeight: 700, marginBottom: '0.4rem' }}>
                STEP 2 • 15 SECONDS
              </div>
              <div style={{ color: '#FFFFFF', fontWeight: 800, fontSize: '1rem', marginBottom: '0.35rem' }}>
                Voice Intercom & Live Stream
              </div>
              <p style={{ fontSize: '0.82rem', color: '#CBD5E1', lineHeight: 1.5 }}>
                Operator establishes handsfree dual-way cab intercom & locks live GPS telemetry stream.
              </p>
            </div>

            <div style={{
              background: simulatorStep >= 3 ? 'rgba(0, 200, 150, 0.18)' : 'rgba(5, 8, 15, 0.6)',
              border: '1px solid ' + (simulatorStep >= 3 ? '#00C896' : 'rgba(255, 255, 255, 0.08)'),
              borderRadius: '16px',
              padding: '1.4rem',
              transition: 'all 0.3s ease'
            }}>
              <div style={{ fontSize: '0.74rem', color: simulatorStep >= 3 ? '#00C896' : '#94A3B8', fontWeight: 700, marginBottom: '0.4rem' }}>
                STEP 3 • 45 SECONDS
              </div>
              <div style={{ color: '#FFFFFF', fontWeight: 800, fontSize: '1rem', marginBottom: '0.35rem' }}>
                Marshal & Security Dispatch
              </div>
              <p style={{ fontSize: '0.82rem', color: '#CBD5E1', lineHeight: 1.5 }}>
                Nearest ground quick response marshal deployed; Corporate HR security lead automatically alerted.
              </p>
            </div>

            <div style={{
              background: simulatorStep >= 4 ? 'rgba(0, 200, 150, 0.25)' : 'rgba(5, 8, 15, 0.6)',
              border: '1px solid ' + (simulatorStep >= 4 ? '#00C896' : 'rgba(255, 255, 255, 0.08)'),
              borderRadius: '16px',
              padding: '1.4rem',
              transition: 'all 0.3s ease'
            }}>
              <div style={{ fontSize: '0.74rem', color: simulatorStep >= 4 ? '#00C896' : '#94A3B8', fontWeight: 700, marginBottom: '0.4rem' }}>
                STEP 4 • RESOLVED
              </div>
              <div style={{ color: '#FFFFFF', fontWeight: 800, fontSize: '1rem', marginBottom: '0.35rem' }}>
                Incident Logged & Cleared
              </div>
              <p style={{ fontSize: '0.82rem', color: '#CBD5E1', lineHeight: 1.5 }}>
                Commuter marked safe with digital OTP verification; complete telemetry audit report archived.
              </p>
            </div>
          </div>
        </motion.div>

        {/* 12 Point Safety Architecture Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.75rem'
        }}>
          {SAFETY_FEATURES.map((item, index) => {
            const IconComponent = iconMap[item.id] || ShieldCheck;

            return (
              <motion.div
                key={item.id}
                className="glass-card feature-glass-card group"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.04 }}
                whileHover={{ y: -5 }}
                style={{
                  padding: '1.75rem',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1.15rem',
                  borderRadius: '18px'
                }}
              >
                <div style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '12px',
                  background: 'rgba(0, 200, 150, 0.1)',
                  border: '1px solid rgba(0, 200, 150, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#00C896',
                  flexShrink: 0,
                  transition: 'all 0.3s ease'
                }} className="group-hover:border-[#D4AF37] group-hover:text-[#D4AF37]">
                  <IconComponent size={22} />
                </div>

                <div>
                  <h4 style={{ fontSize: '1.05rem', color: '#FFFFFF', marginBottom: '0.35rem', fontWeight: 700 }}>
                    {item.title}
                  </h4>
                  <p style={{ fontSize: '0.86rem', color: '#94A3B8', lineHeight: 1.6 }}>
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
