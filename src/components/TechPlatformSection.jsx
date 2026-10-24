import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Cpu, 
  Radio, 
  MapPin, 
  BarChart3, 
  FileSpreadsheet, 
  Smartphone, 
  Monitor, 
  Navigation,
  ShieldCheck,
  Zap,
  Activity,
  Layers,
  Sparkles
} from 'lucide-react';

export default function TechPlatformSection() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const techFeatures = [
    { id: 'dashboard', title: 'Real Time Operations Dashboard', icon: BarChart3, desc: 'Fully customized Power BI analytics, real-time data streaming & SLA drilldowns.' },
    { id: 'routing', title: 'Dynamic AI Auto Routing', icon: Navigation, desc: 'AI routing engine clusters employee rosters & minimizes traffic bottlenecks.' },
    { id: 'tracking', title: 'Sub-Second GPS Telematics', icon: Radio, desc: 'Dual-redundant live IoT telemetry with geofence alarms and speed monitor.' },
    { id: 'app', title: 'Employee Commuter App', icon: Smartphone, desc: 'Highest rated commuter app on iOS & Android with PIN/QR code confirmation.' },
    { id: 'admin', title: '24x7 Security Command Center', icon: Monitor, desc: 'Centralized enterprise command monitor with instantaneous SOS trigger alarms.' }
  ];

  return (
    <section id="tech" className="section-padding bg-obsidian mesh-grid" style={{ position: 'relative', overflow: 'hidden' }}>
      
      {/* Background Emerald Ambient Glow */}
      <div 
        style={{ 
          position: 'absolute',
          width: '750px', 
          height: '750px', 
          top: '20%', 
          left: '50%', 
          transform: 'translateX(-50%)',
          background: 'radial-gradient(circle, rgba(0, 200, 150, 0.22) 0%, transparent 70%)',
          filter: 'blur(140px)',
          pointerEvents: 'none',
          zIndex: 0
        }} 
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 4rem auto' }}>
          <div className="pill-emerald" style={{ marginBottom: '1rem' }}>
            <Cpu size={14} />
            <span>Proprietary Telematics Platform</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2.2rem, 3.8vw, 3.4rem)', marginBottom: '1.25rem' }}>
            Fleet OS & <span className="text-gradient-emerald">Enterprise Command Center</span>
          </h2>
          <p style={{ fontSize: '1.1rem', color: '#94A3B8', lineHeight: 1.75 }}>
            Powered by advanced IoT telematics, AI route clustering, and automated employee attendance to deliver 99.8% on-time execution.
          </p>
        </div>

        {/* Feature Selector Tabs */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '0.65rem',
          marginBottom: '3.5rem'
        }}>
          {techFeatures.map((feat) => {
            const Icon = feat.icon;
            const isSelected = activeTab === feat.id;
            return (
              <button
                key={feat.id}
                onClick={() => setActiveTab(feat.id)}
                style={{
                  background: isSelected ? 'rgba(0, 200, 150, 0.15)' : 'rgba(15, 23, 42, 0.6)',
                  border: isSelected ? '1px solid #00C896' : '1px solid rgba(255, 255, 255, 0.08)',
                  color: isSelected ? '#00C896' : '#94A3B8',
                  padding: '0.65rem 1.25rem',
                  borderRadius: '999px',
                  fontSize: '0.82rem',
                  fontWeight: 700,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  transition: 'all 0.25s ease',
                  boxShadow: isSelected ? '0 0 20px rgba(0, 200, 150, 0.25)' : 'none'
                }}
              >
                <Icon size={15} />
                <span>{feat.title}</span>
              </button>
            );
          })}
        </div>

        {/* Real PDF Dashboard Showcase Frame with Emerald Glow & Floating Metric Cards */}
        <div style={{ position: 'relative', maxWidth: '1100px', margin: '0 auto' }}>
          
          {/* Intense Emerald Soft Backlight Glow */}
          <div style={{
            position: 'absolute',
            inset: '-20px',
            background: 'radial-gradient(ellipse at center, rgba(0, 200, 150, 0.3) 0%, rgba(0, 200, 150, 0.08) 50%, transparent 75%)',
            filter: 'blur(50px)',
            zIndex: 0,
            pointerEvents: 'none'
          }} />

          {/* Central Command Display Screen */}
          <motion.div 
            className="glass-panel"
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            style={{
              position: 'relative',
              zIndex: 1,
              borderRadius: '24px',
              overflow: 'hidden',
              border: '1px solid rgba(0, 200, 150, 0.35)',
              background: '#070D18',
              boxShadow: '0 30px 90px rgba(0, 0, 0, 0.85), 0 0 45px rgba(0, 200, 150, 0.2)'
            }}
          >
            {/* Command Center Window Header */}
            <div style={{
              background: 'linear-gradient(90deg, #091322 0%, #0D1E36 100%)',
              padding: '1rem 1.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
              flexWrap: 'wrap',
              gap: '0.75rem'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{ display: 'flex', gap: '6px' }}>
                  <span style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#EF4444' }} />
                  <span style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#F59E0B' }} />
                  <span style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#10B981' }} />
                </div>
                <span style={{ fontWeight: 800, fontSize: '0.88rem', letterSpacing: '0.06em', color: '#F8FAFC' }}>
                  PARVEEN FLEET OS • OPERATIONS DASHBOARD (POWER BI)
                </span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', fontSize: '0.76rem' }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#00C896', fontWeight: 600 }}>
                  <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#00C896', display: 'inline-block', boxShadow: '0 0 8px #00C896' }} className="animate-pulse" />
                  Live Telematics Streaming Active
                </span>
                <span style={{ color: '#D4AF37', fontWeight: 700 }}>
                  Page 5 Verified
                </span>
              </div>
            </div>

            {/* Real Dashboard Image from PDF (Page 5) */}
            <div style={{
              position: 'relative',
              background: '#03060C',
              padding: '1rem',
              overflow: 'hidden'
            }}>
              <img
                src="/images/assets/dashboard_analytics.png"
                alt="Parveen Fleets Operations Dashboard Real Time Analytics from Company Profile PDF"
                loading="lazy"
                decoding="async"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  borderRadius: '12px',
                  filter: 'contrast(1.08) brightness(0.96)',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.7)'
                }}
              />

              {/* Seamless Dark Edge Vignette Mask */}
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'radial-gradient(ellipse at center, transparent 75%, rgba(3, 6, 12, 0.6) 95%, #03060C 100%)',
                pointerEvents: 'none'
              }} />
            </div>

            {/* Dashboard Footer Stats Strip */}
            <div style={{
              padding: '1.25rem 1.75rem',
              background: 'rgba(15, 23, 42, 0.85)',
              borderTop: '1px solid rgba(255, 255, 255, 0.08)',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '1.25rem',
              alignItems: 'center'
            }}>
              <div>
                <div style={{ fontSize: '0.72rem', color: '#94A3B8', textTransform: 'uppercase', fontWeight: 600 }}>
                  Active Employees Served
                </div>
                <div className="font-mono" style={{ fontSize: '1.4rem', fontWeight: 800, color: '#00C896' }}>
                  3,016 Daily
                </div>
              </div>

              <div>
                <div style={{ fontSize: '0.72rem', color: '#94A3B8', textTransform: 'uppercase', fontWeight: 600 }}>
                  Total Completed Trips
                </div>
                <div className="font-mono" style={{ fontSize: '1.4rem', fontWeight: 800, color: '#F8FAFC' }}>
                  18,362 Trips
                </div>
              </div>

              <div>
                <div style={{ fontSize: '0.72rem', color: '#94A3B8', textTransform: 'uppercase', fontWeight: 600 }}>
                  SOS Safety Resolution
                </div>
                <div className="font-mono" style={{ fontSize: '1.4rem', fontWeight: 800, color: '#D4AF37' }}>
                  100% Immediate
                </div>
              </div>

              <div>
                <div style={{ fontSize: '0.72rem', color: '#94A3B8', textTransform: 'uppercase', fontWeight: 600 }}>
                  Mobile Commuter App
                </div>
                <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#00C896', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <Smartphone size={16} /> iOS & Android 4.9★
                </div>
              </div>
            </div>
          </motion.div>

          {/* Floating Glass Metric Card 1: Top-Right (Live GPS) */}
          <motion.div 
            className="glass-card"
            style={{
              position: 'absolute',
              top: '-25px',
              right: '-30px',
              padding: '1rem 1.4rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.85rem',
              borderRadius: '18px',
              border: '1px solid rgba(0, 200, 150, 0.4)',
              background: 'rgba(15, 23, 42, 0.85)',
              backdropFilter: 'blur(20px)',
              boxShadow: '0 20px 40px rgba(0,0,0,0.7), 0 0 25px rgba(0, 200, 150, 0.25)',
              zIndex: 3
            }}
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
          >
            <div style={{
              width: '42px',
              height: '42px',
              borderRadius: '12px',
              background: 'rgba(0, 200, 150, 0.15)',
              border: '1px solid rgba(0, 200, 150, 0.4)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#00C896'
            }}>
              <Radio size={20} className="animate-pulse" />
            </div>
            <div>
              <div style={{ fontSize: '0.7rem', color: '#94A3B8', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                LIVE GPS TELEMATICS
              </div>
              <div style={{ fontSize: '0.98rem', color: '#FFFFFF', fontWeight: 800 }}>
                132 Active Vehicles Pinging
              </div>
            </div>
          </motion.div>

          {/* Floating Glass Metric Card 2: Bottom-Left (AI Dynamic Routing) */}
          <motion.div 
            className="glass-card"
            style={{
              position: 'absolute',
              bottom: '-30px',
              left: '-25px',
              padding: '1rem 1.4rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.85rem',
              borderRadius: '18px',
              border: '1px solid rgba(212, 175, 55, 0.4)',
              background: 'rgba(15, 23, 42, 0.85)',
              backdropFilter: 'blur(20px)',
              boxShadow: '0 20px 40px rgba(0,0,0,0.7), 0 0 25px rgba(212, 175, 55, 0.2)',
              zIndex: 3
            }}
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut', delay: 1 }}
          >
            <div style={{
              width: '42px',
              height: '42px',
              borderRadius: '12px',
              background: 'rgba(212, 175, 55, 0.15)',
              border: '1px solid rgba(212, 175, 55, 0.4)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#D4AF37'
            }}>
              <Navigation size={20} />
            </div>
            <div>
              <div style={{ fontSize: '0.7rem', color: '#94A3B8', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                AI DYNAMIC ROUTING
              </div>
              <div style={{ fontSize: '0.98rem', color: '#FFFFFF', fontWeight: 800 }}>
                <span className="font-mono" style={{ color: '#00C896' }}>99.8%</span> On-Time SLA
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
