import React, { useState } from 'react';
import { Mail, Phone, Send, MessageCircle, CheckCircle2, Building2, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { COMPANY_INFO } from '../data/mockData';

export default function ContactSection({ onNewLeadAdded }) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    service: 'Employee Transportation',
    city: 'Pune',
    fleetSize: '10 - 25 Cabs',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitMode, setSubmitMode] = useState('server');
  const [submitError, setSubmitError] = useState('');

  const handleSubmit = async (e, buttonType = 'Get Quote') => {
    e.preventDefault();
    setLoading(true);
    setSubmitError('');

    try {
      const result = await onNewLeadAdded({
        ...formData,
        message: `${buttonType === 'Talk To Expert' ? '[REQUESTED CALL WITH EXPERT] ' : ''}${formData.message || 'Direct RFP / Quote Request from Website'}`,
      });
      setSubmitMode(result.mode);
      setSubmitted(true);

      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#FFD700', '#113D89', '#FFFFFF', '#10B981']
      });
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : 'Unable to submit your request. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="contact-section section-padding">
      
      {/* Background Ambient Glow */}
      <div className="ambient-glow ambient-blue" style={{ width: '550px', height: '550px', top: '15%', right: '-10%' }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        
        {/* Section Header */}
        <div className="section-head">
          <div className="pill-gold" style={{ marginBottom: '1rem' }}>
            <Sparkles size={14} />
            <span>Connect With Enterprise Sales</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', marginBottom: '1.25rem' }}>
            Transform Your Corporate Mobility. <br />
            <span className="text-gradient-gold">Request An Instant Quote</span>
          </h2>
          <p style={{ fontSize: '1.08rem', color: '#5B6F86', lineHeight: 1.65 }}>
            Our corporate transport specialists analyze your company's routes, employee rosters, and shift schedules to deliver a customized, cost-optimized fleet proposal within 30 minutes.
          </p>
        </div>

        {/* 2-Column Contact Layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2.5rem',
          alignItems: 'start'
        }}>
          
          {/* Left: Contact Info & Hub Direct Lines */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            
            {/* Pune Head Office Card */}
            <div className="glass-panel" style={{ padding: '1.75rem', borderRadius: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.75rem' }}>
                <div style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '8px',
                  background: 'rgba(201, 162, 39, 0.12)',
                  color: '#C9A227',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Building2 size={18} />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#8A6A00', fontWeight: 700, textTransform: 'uppercase' }}>
                    HEAD OFFICE (PUNE)
                  </div>
                  <div style={{ fontSize: '1.1rem', color: '#0B1F3A', fontWeight: 800 }}>
                    Parveen Fleets Pvt Ltd
                  </div>
                </div>
              </div>
              <p style={{ fontSize: '0.88rem', color: '#5B6F86', lineHeight: 1.6, marginBottom: '1rem' }}>
                {COMPANY_INFO.headOffice.address}
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.85rem' }}>
                <a href="tel:+919545899838" style={{ color: '#8A6A00', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Phone size={14} /> +91 95458 99838 (Hotline)
                </a>
                <a href="tel:+917744000844" style={{ color: '#0B1F3A', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Phone size={14} /> +91 77440 00844
                </a>
                <a href="mailto:sales@parveenfleets.in" style={{ color: '#60A5FA', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Mail size={14} /> sales@parveenfleets.in
                </a>
              </div>
            </div>

            {/* Regional Branches Quick Grid */}
            <div className="glass-card" style={{ padding: '1.75rem', borderRadius: '16px' }}>
              <div style={{ fontWeight: 800, color: '#0B1F3A', marginBottom: '1rem', fontSize: '1rem' }}>
                Regional Hubs & Command Centers
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {COMPANY_INFO.branches.map((branch) => (
                  <div key={branch.city} style={{ borderBottom: '1px solid #E3EAF2', paddingBottom: '0.75rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <strong style={{ color: '#8A6A00', fontSize: '0.95rem' }}>{branch.city} Hub</strong>
                      <span style={{ fontSize: '0.75rem', color: '#34D399', fontWeight: 600 }}>{branch.type}</span>
                    </div>
                    <div style={{ fontSize: '0.8rem', color: '#94A3B8', marginTop: '0.2rem' }}>
                      {branch.address}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct WhatsApp Box */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(37, 211, 102, 0.1), #FFFFFF)',
              border: '1px solid rgba(37, 211, 102, 0.28)',
              borderRadius: '16px',
              padding: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1rem'
            }}>
              <div>
                <div style={{ color: '#128C4A', fontWeight: 800, fontSize: '1rem', marginBottom: '0.2rem' }}>
                  Need Immediate Fleet Dispatch?
                </div>
                <div style={{ color: '#5B6F86', fontSize: '0.85rem' }}>
                  Connect with our 24x7 desk on WhatsApp
                </div>
              </div>
              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: '#25D366',
                  color: '#050A12',
                  padding: '0.65rem 1.1rem',
                  borderRadius: '8px',
                  fontWeight: 800,
                  fontSize: '0.85rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  flexShrink: 0
                }}
              >
                <MessageCircle size={16} /> WhatsApp
              </a>
            </div>

          </div>

          {/* Right: Enterprise Quote Form */}
          <div className="navy-surface glass-panel" style={{
            padding: '2.5rem',
            borderRadius: '22px'
          }}>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                <div style={{
                  width: '68px',
                  height: '68px',
                  borderRadius: '50%',
                  background: 'rgba(16, 185, 129, 0.2)',
                  border: '2px solid #10B981',
                  color: '#10B981',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.5rem'
                }}>
                  <CheckCircle2 size={36} />
                </div>
                <h3 style={{ fontSize: '1.75rem', color: '#FFFFFF', marginBottom: '0.5rem' }}>
                  {submitMode === 'server' ? 'Quote Request Received!' : 'Request Saved On This Device'}
                </h3>
                <p style={{ color: '#CBD5E1', fontSize: '1rem', maxWidth: '480px', margin: '0 auto 1.5rem auto', lineHeight: 1.6 }}>
                  {submitMode === 'server'
                    ? <>Thank you, <strong>{formData.name}</strong> from <strong>{formData.company}</strong>. Our team has received your request and will contact you at <strong>{formData.phone}</strong>.</>
                    : <>Thank you, <strong>{formData.name}</strong>. This preview is not connected to the company lead system, so your request has only been saved in this browser. Call <a href="tel:+919545899838" style={{ color: '#FFD700' }}>+91 95458 99838</a> to reach the team.</>}
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setSubmitError('');
                    setFormData({
                      name: '',
                      company: '',
                      phone: '',
                      email: '',
                      service: 'Employee Transportation',
                      city: 'Pune',
                      fleetSize: '10 - 25 Cabs',
                      message: ''
                    });
                  }}
                  className="btn-outline"
                >
                  Submit Another RFP
                </button>
              </div>
            ) : (
              <form onSubmit={(e) => handleSubmit(e, 'Get Quote')}>
                <div style={{ marginBottom: '1.5rem' }}>
                  <h3 style={{ fontSize: '1.5rem', color: '#FFFFFF', fontWeight: 800, marginBottom: '0.35rem' }}>
                    Request Custom Corporate Proposal
                  </h3>
                  <p style={{ fontSize: '0.85rem', color: '#94A3B8' }}>
                    Fill out the fields below for priority pricing and dedicated SLA terms.
                  </p>
                </div>

                {submitError && (
                  <p role="alert" style={{ color: '#FCA5A5', marginBottom: '1rem' }}>
                    {submitError}
                  </p>
                )}

                {/* Form Fields Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '1rem' }}>
                  <div>
                    <label style={{ fontSize: '0.78rem', color: '#CBD5E1', fontWeight: 600, display: 'block', marginBottom: '0.35rem' }}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Vikram Malhotra"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="pf-input"
                    />
                  </div>

                  <div>
                    <label style={{ fontSize: '0.78rem', color: '#CBD5E1', fontWeight: 600, display: 'block', marginBottom: '0.35rem' }}>
                      Company / Organization *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Infosys / Tech Mahindra"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="pf-input"
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '1rem' }}>
                  <div>
                    <label style={{ fontSize: '0.78rem', color: '#CBD5E1', fontWeight: 600, display: 'block', marginBottom: '0.35rem' }}>
                      Official Mobile Phone *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98XXX XXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="pf-input"
                    />
                  </div>

                  <div>
                    <label style={{ fontSize: '0.78rem', color: '#CBD5E1', fontWeight: 600, display: 'block', marginBottom: '0.35rem' }}>
                      Corporate Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="pf-input"
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '1rem' }}>
                  <div>
                    <label style={{ fontSize: '0.78rem', color: '#CBD5E1', fontWeight: 600, display: 'block', marginBottom: '0.35rem' }}>
                      Service Required *
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="pf-input"
                    >
                      <option value="Employee Transportation" style={{ background: '#081B3A' }}>Employee Transportation</option>
                      <option value="Corporate Cab Services" style={{ background: '#081B3A' }}>Corporate Cab Services</option>
                      <option value="Luxury Car Rentals" style={{ background: '#081B3A' }}>Luxury Car Rentals (CXO)</option>
                      <option value="Airport Transfers" style={{ background: '#081B3A' }}>Airport Transfers</option>
                      <option value="Shuttle Services" style={{ background: '#081B3A' }}>Shuttle Services</option>
                      <option value="Long-Term Rentals" style={{ background: '#081B3A' }}>Long-Term Rentals</option>
                      <option value="Bus & Coach Rentals" style={{ background: '#081B3A' }}>Bus & Coach Rentals</option>
                      <option value="Tourism Solutions" style={{ background: '#081B3A' }}>Tourism & Events Solutions</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ fontSize: '0.78rem', color: '#CBD5E1', fontWeight: 600, display: 'block', marginBottom: '0.35rem' }}>
                      Primary Operational City *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Pune / Mumbai / Delhi NCR"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="pf-input"
                    />
                  </div>
                </div>

                <div style={{ marginBottom: '1.25rem' }}>
                  <label style={{ fontSize: '0.78rem', color: '#CBD5E1', fontWeight: 600, display: 'block', marginBottom: '0.35rem' }}>
                    Fleet Requirement Details & Shift Notes
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Provide details such as daily headcount, shift timings, pickup zones, or specific vehicle preferences..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="pf-input"
                    style={{ resize: 'vertical' }}
                  />
                </div>

                {/* 2 Buttons: Get Quote & Talk To Expert */}
                <div style={{ display: 'flex', gap: '0.85rem', flexWrap: 'wrap' }}>
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-gold"
                    style={{ flex: 1, minWidth: '160px', padding: '0.9rem' }}
                  >
                    <Send size={16} />
                    <span>{loading ? 'Processing...' : 'Get Instant Quote'}</span>
                  </button>

                  <button
                    type="button"
                    disabled={loading}
                    onClick={(e) => handleSubmit(e, 'Talk To Expert')}
                    className="btn-outline"
                    style={{ flex: 1, minWidth: '160px', padding: '0.9rem' }}
                  >
                    <Phone size={16} color="#FFD700" />
                    <span>Talk To Expert</span>
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
