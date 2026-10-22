import React from 'react';
import { CLIENT_LOGOS } from '../data/mockData';

export default function ClientsMarquee() {
  // Duplicate array for seamless infinite marquee loop
  const logos = [...CLIENT_LOGOS, ...CLIENT_LOGOS];

  return (
    <section style={{
      padding: '3rem 0',
      background: 'rgba(15, 39, 68, 0.78)',
      borderTop: '1px solid rgba(255, 255, 255, 0.06)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
      overflow: 'hidden'
    }}>
      <div className="container" style={{ textAlign: 'center', marginBottom: '1.75rem' }}>
        <p style={{
          fontSize: '0.82rem',
          fontFamily: 'var(--font-heading)',
          fontWeight: 700,
          color: '#FFD700',
          textTransform: 'uppercase',
          letterSpacing: '0.15em'
        }}>
          TRUSTED MOBILITY PARTNER FOR INDIA'S FOREMOST ENTERPRISES
        </p>
      </div>

      <div style={{ width: '100%', overflow: 'hidden' }}>
        <div className="marquee-track" style={{ gap: '2.5rem', alignItems: 'center' }}>
          {logos.map((client, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                padding: '1rem 2rem',
                minWidth: '180px',
                textAlign: 'center',
                border: '1px solid rgba(255, 255, 255, 0.06)',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.6rem'
              }}
            >
              <div style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: '#FFD700'
              }} />
              <span style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 800,
                fontSize: '1.1rem',
                color: '#E2E8F0',
                letterSpacing: '0.04em'
              }}>
                {client.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
