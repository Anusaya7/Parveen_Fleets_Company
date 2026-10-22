import React, { useEffect, useRef, useState } from 'react';
import { ShieldCheck, AlertTriangle, Radio, Users, CheckCircle, Navigation, Gauge, KeyRound, QrCode, FileText, UserCheck, ArrowRight } from 'lucide-react';
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
    <section id="safety" className="section-padding" style={{ position: 'relative' }}>
      
      {/* Background Ambient Glow */}
      <div className="ambient-glow ambient-blue" style={{ width: '550px', height: '550px', top: '15%', left: '-10%' }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 4rem auto' }}>
          <div className="pill-gold" style={{ marginBottom: '1rem' }}>
            <ShieldCheck size={14} />
            <span>Uncompromising Security Standards</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', marginBottom: '1.25rem' }}>
            Zero-Compromise <span className="text-gradient-gold">Employee Safety Architecture</span>
          </h2>
          <p style={{ fontSize: '1.1rem', color: '#94A3B8', lineHeight: 1.6 }}>
            Building enterprise trust through proactive defense. Every vehicle, trip, and chauffeur is bound by 12 comprehensive safety checkpoints certified under PoSH guidelines.
          </p>
        </div>

        {/* Interactive Safety Command Simulator */}
        <div className="glass-panel" style={{
          padding: '2rem 2.25rem',
          borderRadius: '20px',
          border: '1px solid rgba(255, 215, 0, 0.3)',
          marginBottom: '4rem',
          background: 'linear-gradient(135deg, rgba(20, 55, 91, 0.88) 0%, rgba(13, 38, 67, 0.96) 100%)'
        }}>
          <p style={{ color: '#94A3B8', fontSize: '0.8rem', marginBottom: '1rem' }}>
            Demonstration only. This simulation does not contact emergency services or represent a live trip.
          </p>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
            marginBottom: '1.5rem',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            paddingBottom: '1rem'
          }}>
            <div>
              <span style={{ fontSize: '0.8rem', color: '#FFD700', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                DEMONSTRATION • EMERGENCY RESPONSE SIMULATOR
              </span>
              <h3 style={{ fontSize: '1.4rem', color: '#FFFFFF' }}>
                Test The Parveen Fleets Instant Response Protocol
              </h3>
            </div>

            <div style={{ display: 'flex', gap: '0.75rem' }}>
              {!simulatorActive ? (
                <button onClick={startSimulator} className="btn-gold" style={{ padding: '0.6rem 1.25rem', fontSize: '0.85rem' }}>
                  <AlertTriangle size={15} /> Simulate SOS Trigger
                </button>
              ) : (
                <button onClick={resetSimulator} className="btn-outline" style={{ padding: '0.6rem 1.25rem', fontSize: '0.85rem' }}>
                  Reset Protocol
                </button>
              )}
            </div>
          </div>

          {/* Steps Timeline Grid */}
          <div aria-live="polite" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1rem'
          }}>
            <div style={{
              background: simulatorStep >= 1 ? 'rgba(239, 68, 68, 0.15)' : 'rgba(255, 255, 255, 0.03)',
              border: '1px solid ' + (simulatorStep >= 1 ? '#EF4444' : 'rgba(255, 255, 255, 0.08)'),
              borderRadius: '12px',
              padding: '1.25rem',
              transition: 'all 0.3s ease'
            }}>
              <div style={{ fontSize: '0.75rem', color: simulatorStep >= 1 ? '#F87171' : '#94A3B8', fontWeight: 700, marginBottom: '0.35rem' }}>
                STEP 1 • 0 TO 5 SECONDS
              </div>
              <div style={{ color: '#FFFFFF', fontWeight: 800, fontSize: '0.95rem', marginBottom: '0.35rem' }}>
                SOS Alert Broadcasted
              </div>
              <p style={{ fontSize: '0.8rem', color: '#CBD5E1' }}>
                Physical cab button or mobile app trigger ping received by 24x7 Pune Central Command.
              </p>
            </div>

            <div style={{
              background: simulatorStep >= 2 ? 'rgba(245, 158, 11, 0.15)' : 'rgba(255, 255, 255, 0.03)',
              border: '1px solid ' + (simulatorStep >= 2 ? '#F59E0B' : 'rgba(255, 255, 255, 0.08)'),
              borderRadius: '12px',
              padding: '1.25rem',
              transition: 'all 0.3s ease'
            }}>
              <div style={{ fontSize: '0.75rem', color: simulatorStep >= 2 ? '#FBBF24' : '#94A3B8', fontWeight: 700, marginBottom: '0.35rem' }}>
                STEP 2 • 15 SECONDS
              </div>
              <div style={{ color: '#FFFFFF', fontWeight: 800, fontSize: '0.95rem', marginBottom: '0.35rem' }}>
                Voice Intercom & Live Video
              </div>
              <p style={{ fontSize: '0.8rem', color: '#CBD5E1' }}>
                Operator establishes handsfree dual-way cab intercom & locks live GPS telemetry stream.
              </p>
            </div>

            <div style={{
              background: simulatorStep >= 3 ? 'rgba(59, 130, 246, 0.15)' : 'rgba(255, 255, 255, 0.03)',
              border: '1px solid ' + (simulatorStep >= 3 ? '#3B82F6' : 'rgba(255, 255, 255, 0.08)'),
              borderRadius: '12px',
              padding: '1.25rem',
              transition: 'all 0.3s ease'
            }}>
              <div style={{ fontSize: '0.75rem', color: simulatorStep >= 3 ? '#60A5FA' : '#94A3B8', fontWeight: 700, marginBottom: '0.35rem' }}>
                STEP 3 • 45 SECONDS
              </div>
              <div style={{ color: '#FFFFFF', fontWeight: 800, fontSize: '0.95rem', marginBottom: '0.35rem' }}>
                Patrol & Security Dispatch
              </div>
              <p style={{ fontSize: '0.8rem', color: '#CBD5E1' }}>
                Nearest ground quick response marshal deployed; Corporate HR security lead automatically alerted.
              </p>
            </div>

            <div style={{
              background: simulatorStep >= 4 ? 'rgba(16, 185, 129, 0.15)' : 'rgba(255, 255, 255, 0.03)',
              border: '1px solid ' + (simulatorStep >= 4 ? '#10B981' : 'rgba(255, 255, 255, 0.08)'),
              borderRadius: '12px',
              padding: '1.25rem',
              transition: 'all 0.3s ease'
            }}>
              <div style={{ fontSize: '0.75rem', color: simulatorStep >= 4 ? '#34D399' : '#94A3B8', fontWeight: 700, marginBottom: '0.35rem' }}>
                STEP 4 • RESOLVED
              </div>
              <div style={{ color: '#FFFFFF', fontWeight: 800, fontSize: '0.95rem', marginBottom: '0.35rem' }}>
                Safe Reach Validated
              </div>
              <p style={{ fontSize: '0.8rem', color: '#CBD5E1' }}>
                Employee confirmed 100% secure with digital incident audit log registered for enterprise compliance.
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '3rem' }}>
            <button type="button" onClick={() => onOpenQuote()} className="btn-outline">
              Discuss your employee safety requirements <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* 12 Detailed Safety Protocol Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem'
        }}>
          {SAFETY_FEATURES.map((item) => {
            const Icon = iconMap[item.id] || ShieldCheck;

            return (
              <div
                key={item.id}
                className="glass-card"
                style={{
                  padding: '1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  border: '1px solid rgba(255, 255, 255, 0.08)'
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                    <div style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '12px',
                      background: 'rgba(255, 215, 0, 0.12)',
                      border: '1px solid rgba(255, 215, 0, 0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#FFD700'
                    }}>
                      <Icon size={22} />
                    </div>

                    <span style={{
                      background: 'rgba(16, 185, 129, 0.12)',
                      border: '1px solid rgba(16, 185, 129, 0.3)',
                      color: '#34D399',
                      padding: '0.2rem 0.6rem',
                      borderRadius: '9999px',
                      fontSize: '0.7rem',
                      fontWeight: 700
                    }}>
                      {item.tag}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.15rem', color: '#FFFFFF', marginBottom: '0.5rem', fontWeight: 700 }}>
                    {item.title}
                  </h3>

                  <p style={{ fontSize: '0.88rem', color: '#94A3B8', lineHeight: 1.6 }}>
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
