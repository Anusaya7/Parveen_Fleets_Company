import React, { useState } from 'react';
import { Phone, Mail, Globe, Award, CheckCircle2, LayoutDashboard, Sparkles, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';

export default function Footer({ onOpenAdmin }) {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setNewsletterEmail('');
    }
  };

  const FOOTER_LOGOS = [
    { name: "State Bank of India", src: "/images/assets/logos/sbi.png" },
    { name: "Bajaj Allianz", src: "/images/assets/logos/bajaj_allianz.png" },
    { name: "Hitachi Solutions", src: "/images/assets/logos/hitachi_solutions.png" },
    { name: "Carraro India", src: "/images/assets/logos/carraro.png" },
    { name: "Druva", src: "/images/assets/logos/druva.png" },
    { name: "TeamLease", src: "/images/assets/logos/teamlease.png" },
    { name: "PubMatic", src: "/images/assets/logos/pubmatic.png" },
    { name: "Springer Nature", src: "/images/assets/logos/springer_nature.png" },
    { name: "ESDS", src: "/images/assets/logos/esds.png" }
  ];

  return (
    <footer style={{
      backgroundColor: '#05080F',
      borderTop: '1px solid rgba(255, 255, 255, 0.08)',
      paddingTop: '4.5rem',
      paddingBottom: '2.5rem',
      position: 'relative',
      overflow: 'hidden'
    }}>
      
      {/* Background Soft Emerald Glow */}
      <div 
        style={{ 
          position: 'absolute',
          width: '600px', 
          height: '600px', 
          bottom: '-15%', 
          right: '-10%',
          background: 'radial-gradient(circle, rgba(0, 200, 150, 0.12) 0%, transparent 70%)',
          filter: 'blur(140px)',
          pointerEvents: 'none',
          zIndex: 0
        }} 
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        
        {/* Corporate Client Logos Grayscale Ticker that turns to color on hover */}
        <div style={{ marginBottom: '4rem', paddingBottom: '3rem', borderBottom: '1px solid rgba(255, 255, 255, 0.06)' }}>
          <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
            <span style={{ fontSize: '0.72rem', color: '#94A3B8', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
              TRUSTED INSTITUTIONAL CLIENTS (PDF PAGE 12)
            </span>
          </div>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '1.5rem'
          }}>
            {FOOTER_LOGOS.map((logo, idx) => (
              <div
                key={idx}
                className="client-logo-item"
                style={{
                  background: 'rgba(255, 255, 255, 0.95)',
                  padding: '0.65rem 1.25rem',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minWidth: '130px',
                  height: '52px',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}
                title={logo.name}
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  loading="lazy"
                  decoding="async"
                  style={{
                    maxHeight: '32px',
                    maxWidth: '105px',
                    objectFit: 'contain'
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Top Newsletter Bar in Glassmorphic Obsidian */}
        <div className="glass-panel" style={{
          padding: '2.5rem',
          borderRadius: '22px',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          marginBottom: '4.5rem',
          background: 'rgba(15, 23, 42, 0.65)'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            alignItems: 'center'
          }}>
            <div>
              <div className="pill-gold" style={{ marginBottom: '0.65rem' }}>
                <Award size={13} color="#D4AF37" />
                <span>Enterprise Mobility Insights</span>
              </div>
              <h3 style={{ fontSize: '1.75rem', color: '#FFFFFF', fontWeight: 800, marginBottom: '0.35rem' }}>
                Stay Informed On Corporate Transit Innovations
              </h3>
              <p style={{ color: '#94A3B8', fontSize: '0.92rem' }}>
                Subscribe for monthly fleet management whitepapers, ESG carbon offset benchmarks, and regulatory PoSH updates.
              </p>
            </div>

            <div>
              {subscribed ? (
                <div style={{ background: 'rgba(0, 200, 150, 0.15)', border: '1px solid #00C896', color: '#00C896', padding: '1rem', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 700 }}>
                  <CheckCircle2 size={18} /> Thank you for subscribing to Parveen Mobility Insights!
                </div>
              ) : (
                <form onSubmit={handleSubscribe} style={{ display: 'flex', gap: '0.65rem', flexWrap: 'wrap' }}>
                  <input
                    type="email"
                    required
                    placeholder="Enter your corporate email..."
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="pf-input"
                    style={{ flex: 1, minWidth: '220px' }}
                  />
                  <button type="submit" className="btn-emerald" style={{ padding: '0.85rem 1.6rem', fontSize: '0.9rem' }}>
                    Subscribe
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* 4 Column Corporate Footer Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '3rem',
          marginBottom: '4rem'
        }}>
          
          {/* Column 1: Brand & Identity */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '1.25rem' }}>
              <div style={{
                width: '44px',
                height: '44px',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #090E17 0%, #151D2E 60%, #00C896 100%)',
                border: '1px solid rgba(0, 200, 150, 0.4)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 20px rgba(0, 200, 150, 0.2)',
                position: 'relative'
              }}>
                <span style={{
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 900,
                  fontSize: '1.25rem',
                  color: '#F8FAFC',
                  letterSpacing: '-1px'
                }}>
                  P<span style={{ color: '#00C896' }}>F</span>
                </span>
                <div style={{
                  position: 'absolute',
                  top: '-2px',
                  right: '-2px',
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  background: '#D4AF37'
                }} />
              </div>
              <div>
                <div style={{
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 800,
                  fontSize: '1.2rem',
                  letterSpacing: '0.04em',
                  lineHeight: 1.15,
                  color: '#F8FAFC'
                }}>
                  PARVEEN <span style={{ color: '#00C896' }}>FLEETS</span>
                </div>
                <div style={{
                  fontSize: '0.62rem',
                  color: '#94A3B8',
                  fontWeight: 600,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase'
                }}>
                  PVT LTD • Enterprise Mobility
                </div>
              </div>
            </div>

            <p style={{ fontSize: '0.88rem', color: '#94A3B8', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              Redefining corporate travel across India with safety, comfort, and IoT innovation. ISO 9001:2015 and 100% PoSH compliant fleet operations.
            </p>

            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              <span className="pill-gold" style={{ fontSize: '0.68rem', padding: '0.2rem 0.55rem' }}>
                Since 2012
              </span>
              <span className="pill-emerald" style={{ fontSize: '0.68rem', padding: '0.2rem 0.55rem' }}>
                112+ Hubs
              </span>
            </div>
          </div>

          {/* Column 2: Regional Depots from PDF */}
          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '1rem', fontWeight: 800, marginBottom: '1.25rem' }}>
              Regional Hubs (PDF Page 12)
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.82rem', color: '#94A3B8' }}>
              <div>
                <strong style={{ color: '#D4AF37', display: 'block' }}>Pune (National HO):</strong>
                <span>Shivajinagar, S.B. Road, Pune 411016</span>
              </div>
              <div>
                <strong style={{ color: '#00C896', display: 'block' }}>Mumbai Regional:</strong>
                <span>Andheri Kurla Road, Andheri (E), Mumbai 400093</span>
              </div>
              <div>
                <strong style={{ color: '#00C896', display: 'block' }}>Hyderabad Regional:</strong>
                <span>KPHB Road No. 1, Kukatpally, Hyderabad 500072</span>
              </div>
              <div>
                <strong style={{ color: '#00C896', display: 'block' }}>Delhi Regional:</strong>
                <span>Sector-19, Dwarka, New Delhi 110075</span>
              </div>
            </div>
          </div>

          {/* Column 3: Corporate Mobility Solutions */}
          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '1rem', fontWeight: 800, marginBottom: '1.25rem' }}>
              Enterprise Solutions
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.88rem', color: '#94A3B8' }}>
              <li><a href="#services" className="hover-emerald">Employee Transportation Services</a></li>
              <li><a href="#services" className="hover-emerald">Executive Chauffeur Transit (CXO)</a></li>
              <li><a href="#services" className="hover-emerald">Dedicated Corporate Cab Rentals</a></li>
              <li><a href="#services" className="hover-emerald">Luxury Bus & Coach Rentals</a></li>
              <li><a href="#services" className="hover-emerald">Airport VIP Meet & Greet</a></li>
              <li><a href="#presence" className="hover-emerald">PAN-India Multi-City Accounts</a></li>
            </ul>
          </div>

          {/* Column 4: 24x7 Priority Desk */}
          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '1rem', fontWeight: 800, marginBottom: '1.25rem' }}>
              24x7 Command Hotline
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.88rem' }}>
              <a href="tel:+919545899838" style={{ color: '#00C896', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Phone size={15} color="#00C896" /> +91 95458 99838 (Hotline)
              </a>
              <a href="tel:+917744000844" style={{ color: '#CBD5E1', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Phone size={15} color="#94A3B8" /> +91 77440 00844
              </a>
              <a href="mailto:sales@parveenfleets.in" style={{ color: '#CBD5E1', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Mail size={15} color="#00C896" /> sales@parveenfleets.in
              </a>
              <a href="https://www.parveenfleets.in" target="_blank" rel="noopener noreferrer" style={{ color: '#94A3B8', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Globe size={15} color="#00C896" /> www.parveenfleets.in
              </a>
            </div>

            <div style={{ marginTop: '1.75rem' }}>
              <button
                onClick={onOpenAdmin}
                style={{
                  background: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  color: '#94A3B8',
                  padding: '0.55rem 1rem',
                  borderRadius: '8px',
                  fontSize: '0.75rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  transition: 'all 0.2s ease'
                }}
                className="hover-emerald"
              >
                <LayoutDashboard size={13} color="#00C896" />
                <span>Enterprise Dispatch Portal</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Compliance */}
        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.06)',
          paddingTop: '2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          fontSize: '0.78rem',
          color: '#64748B'
        }}>
          <div>
            © {new Date().getFullYear()} Parveen Fleets Pvt Ltd. All rights reserved. CIN: Corporate Mobility Enterprise.
          </div>
          <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
            <span>ISO 9001:2015</span>
            <span>PoSH Compliant</span>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
