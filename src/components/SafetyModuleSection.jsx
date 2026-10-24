import React, { useEffect, useRef, useState } from 'react';
import { ShieldCheck, AlertTriangle, Radio, Users, CheckCircle, Navigation, Gauge, KeyRound, QrCode, FileText, UserCheck, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
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

const PROTOCOL_STEPS = [
  {
    step: 1,
    time: '0 TO 5 SECONDS',
    title: 'SOS Alert Broadcasted',
    text: 'Physical cab button or mobile app trigger ping received by 24x7 Pune Central Command.'
  },
  {
    step: 2,
    time: '15 SECONDS',
    title: 'Voice Intercom & Live Video',
    text: 'Operator establishes handsfree dual-way cab intercom & locks live GPS telemetry stream.'
  },
  {
    step: 3,
    time: '45 SECONDS',
    title: 'Patrol & Security Dispatch',
    text: 'Nearest ground quick response marshal deployed; Corporate HR security lead automatically alerted.'
  },
  {
    step: 4,
    time: 'RESOLVED',
    title: 'Safe Reach Validated',
    text: 'Employee confirmed 100% secure with digital incident audit log registered for enterprise compliance.'
  }
];

function getVisibleCount() {
  if (typeof window === 'undefined') return 4;
  if (window.innerWidth <= 680) return 1;
  if (window.innerWidth <= 1100) return 2;
  return 4;
}

export default function SafetyModuleSection({ onOpenQuote }) {
  const [simulatorStep, setSimulatorStep] = useState(0);
  const [simulatorActive, setSimulatorActive] = useState(false);
  const [index, setIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(4);
  const [paused, setPaused] = useState(false);
  const simulatorTimers = useRef([]);
  const viewportRef = useRef(null);
  const maxIndex = Math.max(0, SAFETY_FEATURES.length - visibleCount);

  const scrollToIndex = (nextIndex) => {
    const viewport = viewportRef.current;
    const card = viewport?.querySelector('.safety-feature-card');
    if (!viewport || !card) return;
    const gap = Number.parseFloat(getComputedStyle(viewport).gap) || 0;
    const bounded = Math.max(0, Math.min(nextIndex, maxIndex));
    viewport.scrollTo({ left: bounded * (card.offsetWidth + gap), behavior: 'smooth' });
    setIndex(bounded);
  };

  const go = (direction) => {
    if (maxIndex === 0) return;
    let next = index + direction;
    if (next < 0) next = maxIndex;
    if (next > maxIndex) next = 0;
    scrollToIndex(next);
  };

  useEffect(() => () => {
    simulatorTimers.current.forEach((timer) => window.clearTimeout(timer));
  }, []);

  useEffect(() => {
    const onResize = () => setVisibleCount(getVisibleCount());
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    setIndex(0);
    viewportRef.current?.scrollTo({ left: 0, behavior: 'auto' });
  }, [visibleCount]);

  useEffect(() => {
    if (paused || maxIndex === 0) return undefined;
    const timer = window.setInterval(() => {
      const viewport = viewportRef.current;
      const card = viewport?.querySelector('.safety-feature-card');
      if (!viewport || !card) return;
      const gap = Number.parseFloat(getComputedStyle(viewport).gap) || 0;
      const current = Math.round(viewport.scrollLeft / (card.offsetWidth + gap));
      const next = current >= maxIndex ? 0 : current + 1;
      viewport.scrollTo({ left: next * (card.offsetWidth + gap), behavior: 'smooth' });
      setIndex(next);
    }, 5200);
    return () => window.clearInterval(timer);
  }, [paused, maxIndex]);

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
    <section id="safety" className="safety-section section-padding">
      
      {/* Background Ambient Glow */}
      <div className="ambient-glow ambient-blue" style={{ width: '550px', height: '550px', top: '15%', left: '-10%' }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        
        {/* Section Header */}
        <div className="section-head">
          <div className="pill-gold" style={{ marginBottom: '1rem' }}>
            <ShieldCheck size={14} />
            <span>Uncompromising Security Standards</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', marginBottom: '1.25rem' }}>
            Zero-Compromise <span className="text-gradient-gold">Employee Safety Architecture</span>
          </h2>
          <p style={{ fontSize: '1.08rem', color: '#5B6F86', lineHeight: 1.65 }}>
            Building enterprise trust through proactive defense. Every vehicle, trip, and chauffeur is bound by 12 comprehensive safety checkpoints certified under PoSH guidelines.
          </p>
        </div>

        <div className="safety-sim navy-surface">
          <p className="safety-sim-note">
            Demonstration only. This simulation does not contact emergency services or represent a live trip.
          </p>

          <div className="safety-sim-head">
            <div>
              <span>Demonstration • Emergency Response Simulator</span>
              <h3>Test The Parveen Fleets Instant Response Protocol</h3>
            </div>
            {!simulatorActive ? (
              <button type="button" onClick={startSimulator} className="btn-gold safety-sim-trigger">
                <AlertTriangle size={15} /> Simulate SOS Trigger
              </button>
            ) : (
              <button type="button" onClick={resetSimulator} className="btn-outline safety-sim-trigger">
                Reset Protocol
              </button>
            )}
          </div>

          <div className="safety-steps" aria-live="polite">
            {PROTOCOL_STEPS.map((item) => (
              <article
                key={item.step}
                className={`safety-step is-step-${item.step} ${simulatorStep >= item.step ? 'is-active' : ''}`}
              >
                <div className="safety-step-label">Step {item.step} • {item.time}</div>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </article>
            ))}
          </div>

          <div className="safety-sim-cta">
            <button type="button" onClick={() => onOpenQuote()} className="safety-sim-cta-btn">
              Discuss your employee safety requirements
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

        <div
          className="safety-features-stage"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="safety-features-toolbar">
            <div className="services-nav-group">
              <button type="button" className="services-nav" aria-label="Previous safety protocols" onClick={() => go(-1)}>
                <ChevronLeft size={20} />
              </button>
              <button type="button" className="services-nav" aria-label="Next safety protocols" onClick={() => go(1)}>
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          <div
            ref={viewportRef}
            className="safety-viewport"
            role="region"
            aria-roledescription="carousel"
            aria-label="Employee safety protocols"
            onScroll={(event) => {
              const viewport = event.currentTarget;
              const card = viewport.querySelector('.safety-feature-card');
              if (!card) return;
              const gap = Number.parseFloat(getComputedStyle(viewport).gap) || 0;
              setIndex(Math.round(viewport.scrollLeft / (card.offsetWidth + gap)));
            }}
          >
            {SAFETY_FEATURES.map((item) => {
              const Icon = iconMap[item.id] || ShieldCheck;

              return (
                <article key={item.id} className="glass-card safety-feature-card">
                  <div className="safety-feature-top">
                    <div className="safety-feature-icon">
                      <Icon size={22} />
                    </div>
                    <span className="safety-feature-tag">{item.tag}</span>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              );
            })}
          </div>

          <div className="services-dots" role="tablist" aria-label="Safety protocol carousel pages">
            {Array.from({ length: maxIndex + 1 }, (_, page) => (
              <button
                key={page}
                type="button"
                role="tab"
                aria-selected={index === page}
                className={index === page ? 'is-active' : ''}
                onClick={() => scrollToIndex(page)}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
