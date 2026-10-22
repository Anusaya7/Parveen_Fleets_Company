import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';

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
    { name: 'Tech Platform', href: '#tech' },
    { name: 'Safety', href: '#safety' },
    { name: 'Fleet', href: '#fleet' },
    { name: 'Our Presence', href: '#presence' },
    { name: 'Awards', href: '#awards' },
    { name: 'Blog', href: '#blog' },
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
      {/* Main Glass Navbar */}
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 50,
          background: scrolled ? 'rgba(13, 35, 67, 0.97)' : 'rgba(13, 35, 67, 0.9)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.12)',
          transition: 'all 0.3s ease',
          boxShadow: scrolled ? '0 10px 30px rgba(5, 20, 40, 0.3)' : 'none'
        }}
      >
        <div className="container navbar-main" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.85rem 1.5rem' }}>
          
          {/* Brand Logo */}
          <a href="#home" onClick={(e) => handleLinkClick(e, '#home')} aria-label="Parveen Fleets home" style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            <div style={{
              width: '46px',
              height: '46px',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, #081B3A 0%, #113D89 60%, #FFD700 100%)',
              border: '1.5px solid rgba(255, 215, 0, 0.6)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 15px rgba(255, 215, 0, 0.3)',
              position: 'relative'
            }}>
              <span style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 900,
                fontSize: '1.4rem',
                color: '#FFFFFF',
                letterSpacing: '-1px'
              }}>
                P<span style={{ color: '#FFD700' }}>F</span>
              </span>
            </div>
            <div>
              <div style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 900,
                fontSize: '1.25rem',
                letterSpacing: '0.08em',
                lineHeight: 1.1,
                color: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem'
              }}>
                PARVEEN <span style={{ color: '#FFD700' }}>FLEETS</span>
              </div>
              <div style={{
                fontSize: '0.65rem',
                color: '#94A3B8',
                fontWeight: 600,
                letterSpacing: '0.15em',
                textTransform: 'uppercase'
              }}>
                PVT LTD • Corporate Mobility
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav style={{ alignItems: 'center', gap: '0.7rem' }} className="desktop-nav">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                style={{
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  color: '#E2E8F0',
                  position: 'relative',
                  padding: '0.25rem 0'
                }}
                className="nav-hover-link"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Primary action */}
          <div className="navbar-actions" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <button
              onClick={() => onOpenQuote()}
              className="btn-gold"
              style={{ padding: '0.6rem 1.25rem', fontSize: '0.85rem' }}
            >
              <span className="nav-quote-desktop">Get Instant Quote</span>
              <span className="nav-quote-mobile">Quote</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                color: '#FFFFFF',
                padding: '0.5rem',
                borderRadius: '8px',
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

        {/* Mobile Slide-down Drawer */}
        {mobileMenuOpen && (
          <div
            style={{
              background: 'rgba(13, 35, 67, 0.99)',
              borderBottom: '1px solid rgba(255, 215, 0, 0.2)',
              padding: '1.5rem',
              backdropFilter: 'blur(20px)'
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  style={{
                    fontSize: '1.05rem',
                    fontWeight: 600,
                    color: '#FFFFFF',
                    padding: '0.6rem 0',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}
                >
                  {link.name}
                  <ChevronRight size={16} color="#FFD700" />
                </a>
              ))}
              <div style={{ paddingTop: '0.75rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenQuote();
                  }}
                  className="btn-gold"
                  style={{ width: '100%' }}
                >
                  Book Fleet Now
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Responsive CSS Helper for Desktop nav */}
      <style>{`
        @media (min-width: 1024px) {
          .desktop-nav { display: flex !important; }
          .mobile-toggle { display: none !important; }
        }
        @media (max-width: 1023px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: flex !important; }
        }
        .nav-quote-mobile { display: none; }
        @media (max-width: 640px) {
          .navbar-main { gap: 0.5rem; padding-left: 0.75rem !important; padding-right: 0.75rem !important; }
          .navbar-main > a { min-width: 0; gap: 0.5rem !important; }
          .navbar-main > a > div:first-child { width: 40px !important; height: 40px !important; flex: 0 0 40px; }
          .navbar-main > a > div:last-child > div:first-child { font-size: 0.9rem !important; letter-spacing: 0.02em !important; }
          .navbar-main > a > div:last-child > div:last-child { font-size: 0.52rem !important; letter-spacing: 0.08em !important; }
          .navbar-actions { gap: 0.4rem !important; }
          .navbar-actions > .btn-gold { padding: 0.55rem 0.7rem !important; white-space: nowrap; }
          .nav-quote-desktop { display: none; }
          .nav-quote-mobile { display: inline; }
          .navbar-actions .mobile-toggle { padding: 0.4rem !important; }
        }
        .nav-hover-link:hover {
          color: #FFD700 !important;
        }
        .nav-hover-link[href="#home"] {
          color: #FFD700 !important;
        }
      `}</style>
    </>
  );
}
