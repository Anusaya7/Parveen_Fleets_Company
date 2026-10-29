import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, Phone, Mail, ShieldCheck } from 'lucide-react';

export default function Navbar({ onOpenQuote }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Fleet', href: '#fleet' },
    { name: 'Instagram', href: '#instagram' },
    { name: 'Safety', href: '#safety' },
    { name: 'Presence', href: '#presence' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (href.startsWith('/')) {
      window.location.assign(href);
      return;
    }
    const target = document.querySelector(href);
    if (target) {
      const header = document.querySelector('header');
      const top = target.getBoundingClientRect().top + window.scrollY - (header?.offsetHeight || 80);
      window.scrollTo({ top, behavior: 'smooth' });
      return;
    }
    window.location.assign(`/${href}`);
  };

  return (
    <>
      <div className="site-topbar">
        <div className="container" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
          paddingTop: '0.45rem',
          paddingBottom: '0.45rem',
          flexWrap: 'wrap'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
            <a href="tel:+919545899838" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#E8C547', fontWeight: 600 }}>
              <Phone size={13} /> +91 95458 99838
            </a>
            <a href="mailto:sales@parveenfleets.in" className="topbar-email" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
              <Mail size={13} /> sales@parveenfleets.in
            </a>
          </div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#C5D2E0', fontWeight: 600, letterSpacing: '0.04em' }}>
            <ShieldCheck size={13} color="#E8C547" /> ISO 9001:2015 · PoSH Certified · 24×7 Support
          </div>
        </div>
      </div>

      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 50,
          background: scrolled ? 'rgba(11, 31, 58, 0.98)' : '#0B1F3A',
          backdropFilter: scrolled ? 'blur(14px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(14px)' : 'none',
          borderBottom: '1px solid rgba(232, 197, 71, 0.18)',
          transition: 'all 0.3s ease',
          boxShadow: scrolled ? '0 10px 28px rgba(8, 22, 40, 0.28)' : 'none'
        }}
      >
        <div className="container navbar-main" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '0.7rem', paddingBottom: '0.7rem' }}>

          <a href="#home" onClick={(e) => handleLinkClick(e, '#home')} aria-label="Parveen Fleets home" className="brand-link">
            <img
              src="/PARVEEN_FLEETS_NEW_LOGO-removebg-preview.png"
              alt="Parveen Fleets Pvt Ltd"
              className="brand-logo"
            />
          </a>

          <nav style={{ alignItems: 'center', gap: '0.15rem' }} className="desktop-nav">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                style={{
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  color: '#D6E0EC',
                  position: 'relative',
                  padding: '0.45rem 0.55rem'
                }}
                className="nav-hover-link"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="navbar-actions" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <button
              onClick={() => onOpenQuote()}
              className="btn-gold"
              style={{ padding: '0.58rem 1.2rem', fontSize: '0.84rem' }}
            >
              <span className="nav-quote-desktop">Get Instant Quote</span>
              <span className="nav-quote-mobile">Quote</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                background: 'rgba(255, 255, 255, 0.06)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
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

        {mobileMenuOpen && (
          <div
            style={{
              background: '#081628',
              borderTop: '1px solid rgba(232, 197, 71, 0.16)',
              padding: '1.25rem 1.5rem 1.5rem'
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.15rem' }}>
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  style={{
                    fontSize: '1.02rem',
                    fontWeight: 600,
                    color: '#FFFFFF',
                    padding: '0.7rem 0',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}
                >
                  {link.name}
                  <ChevronRight size={16} color="#E8C547" />
                </a>
              ))}
              <div style={{ paddingTop: '1rem' }}>
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

      <style>{`
        @media (min-width: 1100px) {
          .desktop-nav { display: flex !important; }
          .mobile-toggle { display: none !important; }
        }
        @media (max-width: 1099px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: flex !important; }
        }
        .nav-quote-mobile { display: none; }
        @media (max-width: 720px) {
          .topbar-email { display: none !important; }
          .site-topbar .container { justify-content: center !important; padding-left: 0.75rem !important; padding-right: 0.75rem !important; }
        }
        @media (max-width: 640px) {
          .navbar-main { gap: 0.5rem; padding-left: 0.75rem !important; padding-right: 0.75rem !important; }
          .navbar-main .brand-logo { height: 48px; max-width: 150px; }
          .navbar-actions { gap: 0.4rem !important; }
          .navbar-actions > .btn-gold { padding: 0.5rem 0.7rem !important; white-space: nowrap; }
          .nav-quote-desktop { display: none; }
          .nav-quote-mobile { display: inline; }
        }
        .nav-hover-link:hover {
          color: #E8C547 !important;
        }
      `}</style>
    </>
  );
}
