import React from 'react';
import { ShieldCheck, Award, CheckCircle, Radio, Sparkles } from 'lucide-react';

export default function ClientsMarquee() {
  const REAL_CLIENT_LOGOS = [
    { name: "State Bank of India (SBI)", src: "/images/assets/logos/sbi.png" },
    { name: "Bajaj Allianz", src: "/images/assets/logos/bajaj_allianz.png" },
    { name: "Hitachi Solutions", src: "/images/assets/logos/hitachi_solutions.png" },
    { name: "Carraro India", src: "/images/assets/logos/carraro.png" },
    { name: "Druva Data Solutions", src: "/images/assets/logos/druva.png" },
    { name: "TeamLease Services", src: "/images/assets/logos/teamlease.png" },
    { name: "PubMatic Digital", src: "/images/assets/logos/pubmatic.png" },
    { name: "Springer Nature", src: "/images/assets/logos/springer_nature.png" },
    { name: "ESDS Software Solution", src: "/images/assets/logos/esds.png" },
    { name: "Air Products", src: "/images/assets/logos/airproducts.png" },
    { name: "Dexian Global", src: "/images/assets/logos/dexian.png" },
    { name: "OnDirect Logistics", src: "/images/assets/logos/ondirect.png" },
    { name: "Endurance Complete Solutions", src: "/images/assets/logos/endurance.png" },
    { name: "Fulcrum Digital", src: "/images/assets/logos/fulcrum_digital.png" },
    { name: "Alliance Bernstein", src: "/images/assets/logos/alliance_bernstein.png" },
    { name: "Sun Chemical", src: "/images/assets/logos/sun_chemical.png" }
  ];

  // Double the array for seamless infinite marquee loop
  const marqueeItems = [...REAL_CLIENT_LOGOS, ...REAL_CLIENT_LOGOS];

  return (
    <section className="bg-obsidian" style={{
      padding: '4rem 0 3.5rem',
      position: 'relative',
      overflow: 'hidden',
      borderTop: '1px solid rgba(255, 255, 255, 0.06)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.06)'
    }}>
      {/* Eyebrow Label */}
      <div className="container" style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        <div className="eyebrow-label" style={{ justifyContent: 'center' }}>
          ENTERPRISE ACCREDITATION & VALUABLE CLIENTELE (PDF PAGE 12)
        </div>
        <p style={{
          fontSize: '1.05rem',
          color: '#94A3B8',
          marginTop: '0.5rem',
          maxWidth: '650px',
          margin: '0.5rem auto 0'
        }}>
          Trusted mobility backbone for leading banking institutions, automotive giants, and technology multinationals
        </p>
      </div>

      {/* Infinite Logo Marquee Track */}
      <div style={{ width: '100%', overflow: 'hidden', position: 'relative' }}>
        
        {/* Left & Right gradient masks to fade smoothly into deep obsidian */}
        <div style={{
          position: 'absolute',
          left: 0,
          top: 0,
          bottom: 0,
          width: '120px',
          background: 'linear-gradient(to right, #05080F 0%, transparent 100%)',
          zIndex: 2,
          pointerEvents: 'none'
        }} />
        <div style={{
          position: 'absolute',
          right: 0,
          top: 0,
          bottom: 0,
          width: '120px',
          background: 'linear-gradient(to left, #05080F 0%, transparent 100%)',
          zIndex: 2,
          pointerEvents: 'none'
        }} />

        <div className="marquee-track" style={{ gap: '1.75rem', alignItems: 'center' }}>
          {marqueeItems.map((client, idx) => (
            <div
              key={idx}
              className="glass-card client-logo-item"
              style={{
                padding: '0.85rem 1.6rem',
                minWidth: '180px',
                height: '75px',
                textAlign: 'center',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'rgba(255, 255, 255, 0.95)',
                boxShadow: '0 8px 25px rgba(0, 0, 0, 0.4)'
              }}
              title={client.name}
            >
              <img
                src={client.src}
                alt={client.name}
                loading="lazy"
                decoding="async"
                style={{
                  maxHeight: '42px',
                  maxWidth: '135px',
                  objectFit: 'contain',
                  display: 'block'
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
