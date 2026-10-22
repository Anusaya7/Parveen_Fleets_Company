import React, { useState } from 'react';
import { Phone, Mail, Globe, Award, CheckCircle2, LayoutDashboard } from 'lucide-react';
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

  return (
    <footer style={{
      background: 'linear-gradient(180deg, #12365E 0%, #0D2343 100%)',
      borderTop: '1px solid rgba(255, 215, 0, 0.2)',
      paddingTop: '5rem',
      paddingBottom: '2.5rem',
      position: 'relative',
      overflow: 'hidden'
    }}>
      
      {/* Background Ambient Glow */}
      <div className="ambient-glow ambient-blue" style={{ width: '500px', height: '500px', bottom: '-10%', right: '-10%' }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        
        {/* Top Newsletter Bar */}
        <div className="glass-panel" style={{
          padding: '2.5rem',
          borderRadius: '20px',
          border: '1px solid rgba(255, 215, 0, 0.3)',
          marginBottom: '4.5rem',
          background: 'linear-gradient(135deg, rgba(8, 27, 58, 0.8) 0%, rgba(17, 61, 137, 0.4) 100%)'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            alignItems: 'center'
          }}>
            <div>
              <div className="pill-gold" style={{ marginBottom: '0.65rem' }}>
                <Award size={13} />
                <span>Enterprise Mobility Newsletter</span>
              </div>
              <h3 style={{ fontSize: '1.75rem', color: '#FFFFFF', fontWeight: 900, marginBottom: '0.35rem' }}>
                Stay Informed On Corporate Transit Innovations
              </h3>
              <p style={{ color: '#CBD5E1', fontSize: '0.92rem' }}>
                Subscribe for monthly fleet management whitepapers, ESG carbon offset benchmarks, and regulatory updates.
              </p>
            </div>

            <div>
              {subscribed ? (
                <div style={{ background: 'rgba(16, 185, 129, 0.2)', border: '1px solid #10B981', color: '#34D399', padding: '1rem', borderRadius: '10px', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 700 }}>
                  <CheckCircle2 size={18} /> Thank you for subscribing to Parveen Mobility Insights!
                </div>
              ) : (
                <form onSubmit={handleSubscribe} style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
                  <input
                    type="email"
                    required
                    placeholder="Enter your corporate email..."
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="pf-input"
                    style={{ flex: 1, minWidth: '220px' }}
                  />
                  <button type="submit" className="btn-gold" style={{ padding: '0.85rem 1.5rem', fontSize: '0.9rem' }}>
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
                borderRadius: '10px',
                background: 'linear-gradient(135deg, #081B3A 0%, #113D89 60%, #FFD700 100%)',
                border: '1.5px solid rgba(255, 215, 0, 0.6)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 15px rgba(255, 215, 0, 0.3)'
              }}>
                <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 900, fontSize: '1.3rem', color: '#FFFFFF' }}>
                  P<span style={{ color: '#FFD700' }}>F</span>
                </span>
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 900, fontSize: '1.2rem', color: '#FFFFFF' }}>
                  PARVEEN <span style={{ color: '#FFD700' }}>FLEETS</span>
                </div>
                <div style={{ fontSize: '0.65rem', color: '#94A3B8', fontWeight: 600, letterSpacing: '0.12em' }}>
                  PVT LTD • ESTD 2012
                </div>
              </div>
            </div>

            <p style={{ fontSize: '0.88rem', color: '#94A3B8', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              "{COMPANY_INFO.tagline}"
            </p>

            <div style={{ display: 'flex', gap: '0.65rem' }}>
              <a href={COMPANY_INFO.socials.linkedin} target="_blank" rel="noreferrer" className="fab-btn" style={{ width: '38px', height: '38px', background: 'rgba(255, 255, 255, 0.06)' }} aria-label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a href={COMPANY_INFO.socials.facebook} target="_blank" rel="noreferrer" className="fab-btn" style={{ width: '38px', height: '38px', background: 'rgba(255, 255, 255, 0.06)' }} aria-label="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href={COMPANY_INFO.socials.instagram} target="_blank" rel="noreferrer" className="fab-btn" style={{ width: '38px', height: '38px', background: 'rgba(255, 255, 255, 0.06)' }} aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href={COMPANY_INFO.socials.twitter} target="_blank" rel="noreferrer" className="fab-btn" style={{ width: '38px', height: '38px', background: 'rgba(255, 255, 255, 0.06)' }} aria-label="Twitter">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z"/><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"/></svg>
              </a>
            </div>
          </div>

          {/* Column 2: Head Office & Branches */}
          <div>
            <h4 style={{ color: '#FFD700', fontSize: '1rem', fontWeight: 800, marginBottom: '1.25rem', letterSpacing: '0.05em' }}>
              OFFICES & COMMAND HUBS
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.85rem' }}>
              <div>
                <strong style={{ color: '#FFFFFF', display: 'block', marginBottom: '0.2rem' }}>
                  Head Office (Pune):
                </strong>
                <p style={{ color: '#94A3B8', lineHeight: 1.5 }}>
                  {COMPANY_INFO.headOffice.address}
                </p>
              </div>

              <div>
                <strong style={{ color: '#FFFFFF', display: 'block', marginBottom: '0.2rem' }}>
                  Regional Branches:
                </strong>
                <ul style={{ listStyle: 'none', color: '#94A3B8', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                  <li>• <strong>Mumbai:</strong> Bandra Kurla Complex (BKC)</li>
                  <li>• <strong>Delhi NCR:</strong> Worldmark 2, Aerocity</li>
                  <li>• <strong>Hyderabad:</strong> Mindspace, Hitec City</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Column 3: Direct Contact */}
          <div>
            <h4 style={{ color: '#FFD700', fontSize: '1rem', fontWeight: 800, marginBottom: '1.25rem', letterSpacing: '0.05em' }}>
              DIRECT CONTACT
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.88rem' }}>
              <div>
                <span style={{ fontSize: '0.75rem', color: '#94A3B8', display: 'block' }}>24x7 Enterprise Hotline</span>
                <a href="tel:+919545899838" style={{ color: '#FFD700', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Phone size={14} /> +91 95458 99838
                </a>
              </div>

              <div>
                <span style={{ fontSize: '0.75rem', color: '#94A3B8', display: 'block' }}>Operations Desk</span>
                <a href="tel:+917744000844" style={{ color: '#E2E8F0', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Phone size={14} /> +91 77440 00844
                </a>
              </div>

              <div>
                <span style={{ fontSize: '0.75rem', color: '#94A3B8', display: 'block' }}>Sales & Corporate RFPs</span>
                <a href="mailto:sales@parveenfleets.in" style={{ color: '#60A5FA', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Mail size={14} /> sales@parveenfleets.in
                </a>
              </div>

              <div>
                <span style={{ fontSize: '0.75rem', color: '#94A3B8', display: 'block' }}>Leadership Desk</span>
                <a href="mailto:vajidmirza@parveenfleets.in" style={{ color: '#94A3B8', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Mail size={14} /> vajidmirza@parveenfleets.in
                </a>
              </div>

              <div>
                <span style={{ fontSize: '0.75rem', color: '#94A3B8', display: 'block' }}>Official Website</span>
                <a href="https://www.parveenfleets.in" style={{ color: '#E2E8F0', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Globe size={14} /> www.parveenfleets.in
                </a>
              </div>
            </div>
          </div>

          {/* Column 4: Quick Links & Portal */}
          <div>
            <h4 style={{ color: '#FFD700', fontSize: '1rem', fontWeight: 800, marginBottom: '1.25rem', letterSpacing: '0.05em' }}>
              ENTERPRISE SERVICES
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.88rem', color: '#CBD5E1' }}>
              <li><a href="#services" style={{ hover: { color: '#FFD700' } }}>Employee Transportation</a></li>
              <li><a href="#services">Corporate Cab Services</a></li>
              <li><a href="#fleet">Luxury Car Rentals (CXO)</a></li>
              <li><a href="#services">Airport Transfers</a></li>
              <li><a href="#services">Bus & Coach Rentals</a></li>
              <li><a href="#presence">PAN India 112+ Hubs</a></li>
              <li><a href="#safety">Women Safety Protocols</a></li>
              <li style={{ paddingTop: '0.5rem' }}>
                <button
                  onClick={onOpenAdmin}
                  style={{
                    background: 'rgba(255, 215, 0, 0.15)',
                    border: '1px solid rgba(255, 215, 0, 0.4)',
                    color: '#FFD700',
                    padding: '0.4rem 0.85rem',
                    borderRadius: '6px',
                    fontSize: '0.8rem',
                    fontWeight: 700
                  }}
                >
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                    <LayoutDashboard size={14} /> Admin Portal Login →
                  </span>
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          paddingTop: '2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          fontSize: '0.82rem',
          color: '#64748B'
        }}>
          <div>
            © {new Date().getFullYear()} <strong>PARVEEN FLEETS PVT LTD</strong>. All Rights Reserved. ISO 9001:2015 & PoSH Certified.
          </div>

          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <a href="#" style={{ color: '#94A3B8' }}>Privacy Policy</a>
            <a href="#" style={{ color: '#94A3B8' }}>Terms & Conditions</a>
            <a href="#" style={{ color: '#94A3B8' }}>Safety Compliance</a>
            <a href="#" style={{ color: '#94A3B8' }}>Sitemap</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
