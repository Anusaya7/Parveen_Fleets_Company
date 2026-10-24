import React, { useState } from 'react';
import { Cpu, Radio, MapPin, BarChart3, FileSpreadsheet, Smartphone, Monitor, Navigation } from 'lucide-react';

export default function TechPlatformSection() {
  const [activeTab, setActiveTab] = useState('tracking');

  const techFeatures = [
    { id: 'automation', title: 'Transport Automation', icon: Cpu, desc: 'Zero-touch roster clustering and scheduled automated driver dispatch.' },
    { id: 'routing', title: 'Dynamic Auto Routing', icon: Navigation, desc: 'AI routing engine optimizes pickup sequences considering live traffic bottlenecks.' },
    { id: 'tracking', title: 'Live GPS Telematics', icon: Radio, desc: 'Sub-second real-time vehicle telemetry with geofence alarms and speed monitor.' },
    { id: 'allocation', title: 'Vendor & Fleet Allocation', icon: MapPin, desc: 'Automated vehicle and chauffeur allocation based on location proximity.' },
    { id: 'analytics', title: 'Power BI Analytics', icon: BarChart3, desc: 'Executive intelligence dashboards visualizing SLAs, costs, and carbon offsets.' },
    { id: 'reports', title: 'MIS & Real-Time Reports', icon: FileSpreadsheet, desc: 'Instant 1-click download of automated trip sheets and attendance logs.' },
    { id: 'app', title: 'Employee Mobile App', icon: Smartphone, desc: 'Intuitive iOS & Android commuter app with live cab ETA, SOS & Safe Reach.' },
    { id: 'admin', title: 'Admin Command Monitor', icon: Monitor, desc: 'Centralized web command room for 24x7 enterprise security oversight.' }
  ];
  const activeFeature = techFeatures.find((feature) => feature.id === activeTab) || techFeatures[0];

  return (
    <section id="tech" className="tech-section section-padding">
      
      {/* Background Glow */}
      <div className="ambient-glow ambient-gold" style={{ width: '500px', height: '500px', top: '10%', right: '-10%' }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        
        {/* Section Header */}
        <div className="section-head">
          <div className="pill-gold" style={{ marginBottom: '1rem' }}>
            <Cpu size={14} />
            <span>Proprietary Telematics Platform</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', marginBottom: '1.25rem' }}>
            Next-Gen <span className="text-gradient-gold">Fleet OS & Command Center</span>
          </h2>
          <p style={{ fontSize: '1.08rem', color: '#5B6F86', lineHeight: 1.65 }}>
            Powered by advanced IoT telematics, AI route clustering, and automated employee attendance to deliver 99.8% on-time execution.
          </p>
        </div>

        {/* Advanced Interactive Dashboard Preview */}
        <div className="navy-surface glass-panel" style={{
          borderRadius: '20px',
          overflow: 'hidden',
          marginBottom: '4rem'
        }}>
          
          {/* Dashboard Header Bar */}
          <div style={{
            background: 'linear-gradient(90deg, #081B3A 0%, #113D89 100%)',
            padding: '1.2rem 1.75rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#EF4444' }} />
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#F59E0B' }} />
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#10B981' }} />
              <span style={{ marginLeft: '0.75rem', fontWeight: 800, fontSize: '0.95rem', letterSpacing: '0.05em', color: '#FFFFFF' }}>
                PARVEEN FLEET OS • {activeFeature.title.toUpperCase()}
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '0.8rem', color: '#94A3B8' }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#34D399', fontWeight: 600 }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10B981', display: 'inline-block' }} />
                Illustrative dashboard
              </span>
              <span>Sample data • not a live tracking feed</span>
            </div>
          </div>

          {/* Dashboard Body Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            background: '#112C4B',
            padding: '1.75rem',
            gap: '1.5rem'
          }}>
            
            {/* Left: Live Simulated Telematics Route */}
            <div style={{
              background: 'rgba(8, 27, 58, 0.6)',
              borderRadius: '16px',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              padding: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <span style={{ fontSize: '0.8rem', color: '#FFD700', fontWeight: 700, textTransform: 'uppercase' }}>
                    GPS TELEMETRY PREVIEW
                  </span>
                  <span style={{ background: 'rgba(56, 189, 248, 0.12)', color: '#7DD3FC', padding: '0.2rem 0.6rem', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 700 }}>
                    SAMPLE DATA
                  </span>
                </div>

                <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '0.25rem' }}>
                  Toyota Innova Hycross • Demo vehicle
                </div>
                <div style={{ color: '#94A3B8', fontSize: '0.85rem', marginBottom: '1.25rem' }}>
                  Example trip • Pune
                </div>

                {/* Simulated Visual Route Path */}
                <div style={{
                  background: 'rgba(13, 35, 61, 0.88)',
                  borderRadius: '12px',
                  padding: '1.25rem',
                  border: '1px solid rgba(255, 215, 0, 0.2)',
                  marginBottom: '1.25rem'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#38BDF8' }} />
                    <div style={{ fontSize: '0.85rem', color: '#E2E8F0' }}>
                      <strong>Pickup:</strong> Pune Station (08:15 AM)
                    </div>
                  </div>
                  <div style={{ height: '24px', borderLeft: '2px dashed rgba(255, 215, 0, 0.6)', marginLeft: '4px', margin: '-4px 0 4px 4px' }} />
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#10B981' }} />
                    <div style={{ fontSize: '0.85rem', color: '#E2E8F0' }}>
                      <strong>Destination:</strong> Infosys Phase 2, Hinjawadi
                    </div>
                  </div>
                </div>

                {/* Real-time Telemetry Readouts */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem', textAlign: 'center' }}>
                  <div style={{ background: 'rgba(255, 255, 255, 0.04)', padding: '0.75rem', borderRadius: '8px' }}>
                    <div style={{ fontSize: '0.7rem', color: '#94A3B8' }}>SPEED</div>
                    <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#38BDF8' }}>44 km/h</div>
                  </div>
                  <div style={{ background: 'rgba(255, 255, 255, 0.04)', padding: '0.75rem', borderRadius: '8px' }}>
                    <div style={{ fontSize: '0.7rem', color: '#94A3B8' }}>ETA</div>
                    <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#FFD700' }}>14 Mins</div>
                  </div>
                  <div style={{ background: 'rgba(255, 255, 255, 0.04)', padding: '0.75rem', borderRadius: '8px' }}>
                    <div style={{ fontSize: '0.7rem', color: '#94A3B8' }}>GEOFENCE</div>
                    <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#10B981' }}>Secure</div>
                  </div>
                </div>
              </div>

              <div style={{ marginTop: '1.25rem', paddingTop: '1rem', borderTop: '1px solid rgba(255, 255, 255, 0.06)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.75rem', color: '#94A3B8' }}>Next boarding: sample passenger</span>
                <span style={{ color: '#FFD700', fontSize: '0.75rem', fontWeight: 700 }}>Illustrative preview</span>
              </div>
            </div>

            {/* Right: Power BI Analytics Preview */}
            <div style={{
              background: 'rgba(8, 27, 58, 0.6)',
              borderRadius: '16px',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              padding: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <span style={{ fontSize: '0.8rem', color: '#FFD700', fontWeight: 700, textTransform: 'uppercase' }}>
                    Power BI Enterprise Analytics
                  </span>
                  <span style={{ fontSize: '0.75rem', color: '#94A3B8' }}>                  Sample metrics</span>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', marginBottom: '1.25rem' }}>
                  <div style={{ background: 'rgba(17, 61, 137, 0.25)', border: '1px solid rgba(17, 61, 137, 0.5)', padding: '1rem', borderRadius: '10px' }}>
                    <div style={{ fontSize: '0.75rem', color: '#94A3B8' }}>ON-TIME PERFORMANCE</div>
                    <div style={{ fontSize: '1.6rem', fontWeight: 900, color: '#10B981' }}>99.8%</div>
                    <div style={{ fontSize: '0.7rem', color: '#34D399' }}>+0.4% vs Industry SLA</div>
                  </div>

                  <div style={{ background: 'rgba(255, 215, 0, 0.08)', border: '1px solid rgba(255, 215, 0, 0.3)', padding: '1rem', borderRadius: '10px' }}>
                    <div style={{ fontSize: '0.75rem', color: '#94A3B8' }}>ROUTE OPTIMIZATION</div>
                    <div style={{ fontSize: '1.6rem', fontWeight: 900, color: '#FFD700' }}>24.2%</div>
                    <div style={{ fontSize: '0.7rem', color: '#FBBF24' }}>Fuel & Carbon Offset</div>
                  </div>
                </div>

                {/* Progress Visual Bars */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: '#CBD5E1', marginBottom: '0.3rem' }}>
                      <span>Automated Roster Compliance</span>
                      <span style={{ color: '#10B981', fontWeight: 700 }}>100%</span>
                    </div>
                    <div style={{ height: '8px', background: 'rgba(255,255,255,0.08)', borderRadius: '4px', overflow: 'hidden' }}>
                      <div style={{ width: '100%', height: '100%', background: '#10B981', borderRadius: '4px' }} />
                    </div>
                  </div>

                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: '#CBD5E1', marginBottom: '0.3rem' }}>
                      <span>Billing & GPS Accuracy</span>
                      <span style={{ color: '#FFD700', fontWeight: 700 }}>99.9%</span>
                    </div>
                    <div style={{ height: '8px', background: 'rgba(255,255,255,0.08)', borderRadius: '4px', overflow: 'hidden' }}>
                      <div style={{ width: '99.9%', height: '100%', background: 'linear-gradient(90deg, #FFD700, #FFA500)', borderRadius: '4px' }} />
                    </div>
                  </div>

                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: '#CBD5E1', marginBottom: '0.3rem' }}>
                      <span>Commuter Satisfaction Rating</span>
                      <span style={{ color: '#38BDF8', fontWeight: 700 }}>4.95 / 5.0</span>
                    </div>
                    <div style={{ height: '8px', background: 'rgba(255,255,255,0.08)', borderRadius: '4px', overflow: 'hidden' }}>
                      <div style={{ width: '98%', height: '100%', background: '#38BDF8', borderRadius: '4px' }} />
                    </div>
                  </div>
                </div>
              </div>

              <div style={{ marginTop: '1.25rem', paddingTop: '1rem', borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}>
                <span style={{ fontSize: '0.75rem', color: '#94A3B8' }}>
                  Example reporting view • integrations depend on deployment
                </span>
              </div>
            </div>

          </div>
        </div>

        <div className="tech-grid">
          {techFeatures.map((item, index) => {
            const Icon = item.icon;
            return (
              <article
                key={item.id}
                className={`tech-card ${activeTab === item.id ? 'is-active' : ''}`}
                role="button"
                tabIndex={0}
                aria-pressed={activeTab === item.id}
                onClick={() => setActiveTab(item.id)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    setActiveTab(item.id);
                  }
                }}
              >
                <div className="tech-card-top">
                  <div className="tech-card-icon">
                    <Icon size={20} />
                  </div>
                  <span>0{index + 1}</span>
                </div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}
