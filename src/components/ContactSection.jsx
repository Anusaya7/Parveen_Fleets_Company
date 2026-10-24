import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Send, MessageCircle, CheckCircle2, Building2, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
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
        colors: ['#00C896', '#D4AF37', '#FFFFFF', '#05080F']
      });
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : 'Unable to submit your request. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const REAL_MINI_LOGOS = [
    { name: "SBI", src: "/images/assets/logos/sbi.png" },
    { name: "Bajaj Allianz", src: "/images/assets/logos/bajaj_allianz.png" },
    { name: "Hitachi", src: "/images/assets/logos/hitachi_solutions.png" },
    { name: "Druva", src: "/images/assets/logos/druva.png" },
    { name: "TeamLease", src: "/images/assets/logos/teamlease.png" },
    { name: "PubMatic", src: "/images/assets/logos/pubmatic.png" },
    { name: "Carraro", src: "/images/assets/logos/carraro.png" },
    { name: "Springer Nature", src: "/images/assets/logos/springer_nature.png" }
  ];

  return (
    <section id="contact" className="section-padding bg-obsidian mesh-grid" style={{ position: 'relative' }}>
      
      {/* Background Soft Emerald Glow */}
      <div 
        style={{ 
          position: 'absolute',
          width: '650px', 
          height: '650px', 
          top: '15%', 
          right: '-10%',
          background: 'radial-gradient(circle, rgba(0, 200, 150, 0.16) 0%, transparent 70%)',
          filter: 'blur(140px)',
          pointerEvents: 'none',
          zIndex: 0
        }} 
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 4rem auto' }}>
          <div className="pill-emerald" style={{ marginBottom: '1rem' }}>
            <Sparkles size={14} />
            <span>Connect With Enterprise Mobility Sales</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2.2rem, 3.8vw, 3.4rem)', marginBottom: '1.25rem' }}>
            Transform Your Corporate Transit. <br />
            <span className="text-gradient-emerald">Request An Instant Proposal</span>
          </h2>
          <p style={{ fontSize: '1.1rem', color: '#94A3B8', lineHeight: 1.75 }}>
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
            <motion.div 
              className="glass-panel" 
              whileHover={{ y: -4 }}
              style={{ padding: '2rem', borderRadius: '20px', border: '1px solid rgba(212, 175, 55, 0.35)' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '1rem' }}>
                <div style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '12px',
                  background: 'rgba(212, 175, 55, 0.12)',
                  border: '1px solid rgba(212, 175, 55, 0.35)',
                  color: '#D4AF37',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Building2 size={22} />
                </div>
                <div>
                  <div style={{ fontSize: '0.72rem', color: '#D4AF37', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                    HEAD OFFICE (PUNE) • PDF PAGE 12
                  </div>
                  <div style={{ fontSize: '1.2rem', color: '#FFFFFF', fontWeight: 800 }}>
                    Parveen Fleets Pvt Ltd
                  </div>
                </div>
              </div>

              <p style={{ fontSize: '0.9rem', color: '#CBD5E1', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                {COMPANY_INFO.headOffice.address}
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.88rem' }}>
                <a href="tel:+919545899838" style={{ color: '#00C896', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Phone size={15} color="#00C896" /> +91 95458 99838 (24x7 Priority Hotline)
                </a>
                <a href="tel:+917744000844" style={{ color: '#E2E8F0', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Phone size={15} color="#94A3B8" /> +91 77440 00844
                </a>
                <a href="mailto:sales@parveenfleets.in" style={{ color: '#94A3B8', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Mail size={15} color="#00C896" /> sales@parveenfleets.in / vajidmirza@parveenfleets.in
                </a>
              </div>
            </motion.div>

            {/* Regional Branches Quick Grid */}
            <div className="glass-card" style={{ padding: '2rem', borderRadius: '20px' }}>
              <div style={{ fontWeight: 800, color: '#FFFFFF', marginBottom: '1.25rem', fontSize: '1.05rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span>Regional Command Depots</span>
                <span className="pill-emerald" style={{ fontSize: '0.7rem' }}>Multi-City</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
                {COMPANY_INFO.branches.map((branch) => (
                  <div key={branch.city} style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.05)', paddingBottom: '0.85rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <strong style={{ color: '#00C896', fontSize: '0.98rem' }}>{branch.city} Hub</strong>
                      <span style={{ fontSize: '0.75rem', color: '#D4AF37', fontWeight: 600 }}>{branch.type}</span>
                    </div>
                    <div style={{ fontSize: '0.82rem', color: '#94A3B8', marginTop: '0.25rem', lineHeight: 1.5 }}>
                      {branch.address}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct WhatsApp Box */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(37, 211, 102, 0.12) 0%, rgba(15, 23, 42, 0.6) 100%)',
              border: '1px solid rgba(37, 211, 102, 0.35)',
              borderRadius: '18px',
              padding: '1.5rem 1.75rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1rem',
              flexWrap: 'wrap'
            }}>
              <div>
                <div style={{ color: '#25D366', fontWeight: 800, fontSize: '1rem', marginBottom: '0.2rem' }}>
                  Need Immediate Fleet Dispatch?
                </div>
                <div style={{ color: '#CBD5E1', fontSize: '0.85rem' }}>
                  Connect directly with our 24x7 desk on WhatsApp
                </div>
              </div>
              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: '#25D366',
                  color: '#05080F',
                  padding: '0.7rem 1.25rem',
                  borderRadius: '10px',
                  fontWeight: 800,
                  fontSize: '0.88rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  flexShrink: 0
                }}
              >
                <MessageCircle size={16} /> WhatsApp Desk
              </a>
            </div>

          </div>

          {/* Right: Enterprise Quote Form with Dark Inputs & Emerald Focus Ring */}
          <motion.div 
            className="glass-panel"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            style={{
              padding: 'clamp(2rem, 4vw, 3rem)',
              borderRadius: '24px',
              border: '1px solid rgba(0, 200, 150, 0.3)',
              background: 'rgba(15, 23, 42, 0.72)',
              boxShadow: '0 25px 60px rgba(0, 0, 0, 0.8), 0 0 35px rgba(0, 200, 150, 0.12)'
            }}
          >
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '3.5rem 1rem' }}>
                <div style={{
                  width: '72px',
                  height: '72px',
                  borderRadius: '50%',
                  background: 'rgba(0, 200, 150, 0.15)',
                  border: '2px solid #00C896',
                  color: '#00C896',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.5rem',
                  boxShadow: '0 0 30px rgba(0, 200, 150, 0.35)'
                }}>
                  <CheckCircle2 size={38} />
                </div>
                <h3 style={{ fontSize: '1.85rem', color: '#FFFFFF', marginBottom: '0.65rem', fontWeight: 800 }}>
                  {submitMode === 'server' ? 'Quote Request Dispatched!' : 'Request Saved On Device'}
                </h3>
                <p style={{ color: '#CBD5E1', fontSize: '1rem', maxWidth: '480px', margin: '0 auto 2rem auto', lineHeight: 1.7 }}>
                  {submitMode === 'server'
                    ? <>Thank you, <strong>{formData.name}</strong> from <strong>{formData.company}</strong>. Our enterprise team has received your requirement and will connect with your SLA proposal within 30 minutes at <strong>{formData.phone}</strong>.</>
                    : <>Thank you, <strong>{formData.name}</strong>. For instant SLA consultation, call our 24x7 desk at <a href="tel:+919545899838" style={{ color: '#00C896' }}>+91 95458 99838</a>.</>}
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
                  className="btn-ghost"
                >
                  Submit Another RFP
                </button>
              </div>
            ) : (
              <form onSubmit={(e) => handleSubmit(e, 'Get Quote')}>
                <div style={{ marginBottom: '1.75rem' }}>
                  <div className="pill-gold" style={{ marginBottom: '0.65rem' }}>
                    <ShieldCheck size={13} color="#D4AF37" />
                    <span>GUARANTEED 30-MIN SLA RESPONSE</span>
                  </div>
                  <h3 style={{ fontSize: '1.6rem', color: '#FFFFFF', fontWeight: 800, marginBottom: '0.45rem' }}>
                    Request Custom Corporate Proposal
                  </h3>
                  <p style={{ fontSize: '0.88rem', color: '#94A3B8' }}>
                    Fill out the fields below for priority pricing and dedicated SLA terms.
                  </p>
                </div>

                {submitError && (
                  <p role="alert" style={{ color: '#FCA5A5', marginBottom: '1rem', background: 'rgba(239, 68, 68, 0.1)', padding: '0.75rem', borderRadius: '8px', border: '1px solid rgba(239, 68, 68, 0.3)' }}>
                    {submitError}
                  </p>
                )}

                {/* Form Fields Grid with dark inputs & emerald focus ring */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.1rem', marginBottom: '1.1rem' }}>
                  <div>
                    <label style={{ fontSize: '0.78rem', color: '#CBD5E1', fontWeight: 600, display: 'block', marginBottom: '0.4rem' }}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g., Rajesh Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="pf-input"
                    />
                  </div>

                  <div>
                    <label style={{ fontSize: '0.78rem', color: '#CBD5E1', fontWeight: 600, display: 'block', marginBottom: '0.4rem' }}>
                      Company / Organization *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g., Infosys, Tata Motors, SBI"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="pf-input"
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.1rem', marginBottom: '1.1rem' }}>
                  <div>
                    <label style={{ fontSize: '0.78rem', color: '#CBD5E1', fontWeight: 600, display: 'block', marginBottom: '0.4rem' }}>
                      Corporate Phone / Mobile *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="pf-input"
                    />
                  </div>

                  <div>
                    <label style={{ fontSize: '0.78rem', color: '#CBD5E1', fontWeight: 600, display: 'block', marginBottom: '0.4rem' }}>
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

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.1rem', marginBottom: '1.1rem' }}>
                  <div>
                    <label style={{ fontSize: '0.78rem', color: '#CBD5E1', fontWeight: 600, display: 'block', marginBottom: '0.4rem' }}>
                      Primary Mobility Service
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="pf-input"
                    >
                      <option value="Employee Transportation">Employee Transportation (Daily Shift)</option>
                      <option value="Executive Chauffeur Transit">Executive Chauffeur (CXO / Board)</option>
                      <option value="Corporate Cab Solutions">Dedicated Corporate Cabs</option>
                      <option value="Luxury Bus & Coach Rentals">Luxury Coaches (Volvo/Scania)</option>
                      <option value="Airport VIP Transfers">Airport VIP Chauffeur</option>
                      <option value="PAN India Mobility">PAN India Multi-City Contract</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ fontSize: '0.78rem', color: '#CBD5E1', fontWeight: 600, display: 'block', marginBottom: '0.4rem' }}>
                      Primary Operating City
                    </label>
                    <select
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="pf-input"
                    >
                      <option value="Pune">Pune (HQ)</option>
                      <option value="Mumbai">Mumbai (BKC)</option>
                      <option value="Delhi NCR">Delhi NCR (Aerocity / Noida)</option>
                      <option value="Hyderabad">Hyderabad (Hitec City)</option>
                      <option value="Bengaluru">Bengaluru</option>
                      <option value="Chennai">Chennai</option>
                      <option value="Other Pan-India">Other PAN India Region</option>
                    </select>
                  </div>
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{ fontSize: '0.78rem', color: '#CBD5E1', fontWeight: 600, display: 'block', marginBottom: '0.4rem' }}>
                    Specific RFP Notes / Route Requirements
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Provide details on shift times, female escort requirements, employee count, or vehicle preference..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="pf-input"
                    style={{ resize: 'vertical' }}
                  />
                </div>

                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-emerald"
                    style={{ flex: 1, padding: '1rem', fontSize: '1rem' }}
                  >
                    <span>{loading ? 'Transmitting RFP...' : 'Generate Corporate Proposal'}</span>
                    <Send size={16} />
                  </button>

                  <button
                    type="button"
                    onClick={(e) => handleSubmit(e, 'Talk To Expert')}
                    disabled={loading}
                    className="btn-ghost"
                    style={{ padding: '1rem 1.5rem', fontSize: '0.92rem' }}
                  >
                    <Phone size={16} color="#00C896" />
                    <span>Talk to Expert</span>
                  </button>
                </div>
              </form>
            )}
          </motion.div>

        </div>

      </div>
    </section>
  );
}
