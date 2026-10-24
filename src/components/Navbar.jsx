import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, Phone, ShieldCheck, ArrowUpRight } from 'lucide-react';

export default function Navbar({ onOpenQuote }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Fleet OS', href: '#tech' },
    { name: 'Safety', href: '#safety' },
    { name: 'Fleet', href: '#fleet' },
    { name: 'Pan-India', href: '#presence' },
    { name: 'Awards', href: '#awards' },
    { name: 'Insights', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Enterprise Trust Utility Bar */}
      <div style={{
        background: '#03050A',
        borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
        padding: '0.45rem 1.5rem',
        fontSize: '0.72rem',
        color: '#94A3B8'
      }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#00C896', fontWeight: 600 }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#00C896', display: 'inline-block', boxShadow: '0 0 10px #00C896' }} />
              24x7 Enterprise Command Center Active
            </span>
            <span style={{ display: 'none', md: 'inline', color: '#334155' }}>•</span>
            <span style={{ color: '#D4AF37', fontWeight: 600, letterSpacing: '0.04em' }}>
              ISO 9001:2015 & 100% PoSH Certified
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
            <a href="tel:+919545899838" style={{ color: '#F8FAFC', display: 'flex', alignItems: 'center', gap: '0.4rem', fontWeight: 600 }}>
              <Phone size={12} color="#00C896" />
              <span>Priority Hotline: +91 95458 99838</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Glass Navbar */}
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 50,
          background: scrolled ? 'rgba(5, 8, 15, 0.94)' : 'rgba(5, 8, 15, 0.82)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
          boxShadow: scrolled ? '0 16px 36px rgba(0, 0, 0, 0.65), 0 0 25px rgba(0, 200, 150, 0.06)' : 'none'
        }}
      >
        <div className="container navbar-main" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.9rem 1.5rem' }}>
          
          {/* Brand Logo & Sovereign Emblem */}
          <a href="#home" onClick={(e) => handleLinkClick(e, '#home')} aria-label="Parveen Fleets home" style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            <div style={{
              width: '44px',
              height: '44px',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, #111827 0%, #1A2235 60%, #00C896 100%)',
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
                color: '#F8FAFC',
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem'
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
          </a>

          {/* Desktop Navigation Links */}
          <nav style={{ alignItems: 'center', gap: '0.85rem' }} className="desktop-nav">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                style={{
                  fontSize: '0.84rem',
                  fontWeight: 600,
                  color: '#94A3B8',
                  position: 'relative',
                  padding: '0.35rem 0.5rem',
                  transition: 'all 0.2s ease',
                  borderRadius: '6px'
                }}
                className="nav-hover-link"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Primary CTA and Controls */}
          <div className="navbar-actions" style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            <button
              onClick={() => onOpenQuote()}
              className="btn-emerald nav-quote-btn"
              style={{ padding: '0.65rem 1.35rem', fontSize: '0.85rem' }}
            >
              <span className="nav-quote-desktop">Request Quote</span>
              <span className="nav-quote-mobile">Quote</span>
              <ArrowUpRight size={16} />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                background: 'rgba(26, 34, 53, 0.8)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                color: '#F8FAFC',
                padding: '0.55rem',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              className="mobile-toggle"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Slide-down Glass Drawer */}
        {mobileMenuOpen && (
          <div
            style={{
              background: 'rgba(10, 14, 26, 0.98)',
              borderBottom: '1px solid rgba(0, 200, 150, 0.2)',
              padding: '1.5rem',
              backdropFilter: 'blur(24px)'
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  style={{
                    fontSize: '1rem',
                    fontWeight: 600,
                    color: '#F8FAFC',
                    padding: '0.65rem 0',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}
                >
                  {link.name}
                  <ChevronRight size={16} color="#00C896" />
                </a>
              ))}
              <div style={{ paddingTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenQuote();
                  }}
                  className="btn-emerald"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  Request Corporate Quote
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Glowing Header Divider Line: transparent -> Emerald Green (#00C896) -> transparent */}
      <div className="header-glow-divider" />

      {/* Responsive CSS Helper for Desktop nav */}
      <style>{`
        @media (min-width: 1060px) {
          .desktop-nav { display: flex !important; }
          .mobile-toggle { display: none !important; }
        }
        @media (max-width: 1059px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: flex !important; }
        }
        .nav-quote-mobile { display: none; }
        @media (max-width: 640px) {
          .navbar-main { gap: 0.5rem; padding-left: 0.85rem !important; padding-right: 0.85rem !important; }
          .navbar-main > a { min-width: 0; gap: 0.5rem !important; }
          .navbar-main > a > div:first-child { width: 38px !important; height: 38px !important; flex: 0 0 38px; }
          .navbar-main > a > div:last-child > div:first-child { font-size: 0.95rem !important; letter-spacing: 0.02em !important; }
          .navbar-main > a > div:last-child > div:last-child { font-size: 0.52rem !important; letter-spacing: 0.08em !important; }
          .navbar-actions { gap: 0.4rem !important; }
          .navbar-actions > .btn-emerald { padding: 0.55rem 0.8rem !important; white-space: nowrap; font-size: 0.8rem !important; }
          .nav-quote-desktop { display: none; }
          .nav-quote-mobile { display: inline; }
          .navbar-actions .mobile-toggle { padding: 0.4rem !important; }
        }
        .nav-hover-link:hover {
          color: #00C896 !important;
          background: rgba(0, 200, 150, 0.08);
        }
        .nav-hover-link[href="#home"] {
          color: #00C896 !important;
        }
      `}</style>
    </>
  );
}
