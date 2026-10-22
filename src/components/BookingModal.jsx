import React, { useState, useEffect } from 'react';
import { X, Car, CheckCircle2, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function BookingModal({ isOpen, onClose, initialData, onNewLeadAdded }) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    service: 'Employee Transportation',
    vehiclePreference: 'Toyota Innova Hycross',
    city: 'Pune',
    pickupDate: '',
    duration: 'Monthly Enterprise Contract',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitMode, setSubmitMode] = useState('server');
  const [submitError, setSubmitError] = useState('');

  useEffect(() => {
    if (initialData) {
      setFormData((prev) => ({
        ...prev,
        service: initialData.service || initialData.title || prev.service,
        city: initialData.city || prev.city,
        vehiclePreference: initialData.name || prev.vehiclePreference,
        notes: initialData.notes || prev.notes
      }));
    }
  }, [initialData]);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSubmitError('');

    try {
      const result = await onNewLeadAdded({
        ...formData,
        fleetSize: formData.vehiclePreference,
        message: `Direct Booking Request: ${formData.vehiclePreference} in ${formData.city} (${formData.duration}). Pickup: ${formData.pickupDate || 'Immediate'}. Notes: ${formData.notes || 'None'}`,
      });
      setSubmitMode(result.mode);
      setSubmitted(true);

      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.5 },
        colors: ['#FFD700', '#113D89', '#10B981']
      });
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : 'Unable to submit your request. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="glass-panel"
        style={{
          width: 'clamp(320px, 94vw, 680px)',
          maxHeight: '90vh',
          overflowY: 'auto',
          background: 'linear-gradient(135deg, rgba(20, 55, 91, 0.97) 0%, rgba(11, 30, 54, 0.99) 100%)',
          border: '1.5px solid rgba(255, 215, 0, 0.4)',
          borderRadius: '24px',
          padding: '2.5rem',
          boxShadow: '0 30px 80px rgba(0, 0, 0, 0.9)',
          position: 'relative'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1.5rem',
            right: '1.5rem',
            background: 'rgba(255, 255, 255, 0.08)',
            border: 'none',
            color: '#FFFFFF',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer'
          }}
          aria-label="Close"
        >
          <X size={20} />
        </button>

        {submitted ? (
          <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
            <div style={{
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              background: 'rgba(16, 185, 129, 0.2)',
              border: '2px solid #10B981',
              color: '#10B981',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1.25rem'
            }}>
              <CheckCircle2 size={32} />
            </div>
            <h3 style={{ fontSize: '1.75rem', color: '#FFFFFF', marginBottom: '0.5rem' }}>
              {submitMode === 'server' ? 'Booking Request Received!' : 'Request Saved On This Device'}
            </h3>
            <p style={{ color: '#CBD5E1', fontSize: '0.95rem', maxWidth: '440px', margin: '0 auto 1.5rem auto', lineHeight: 1.6 }}>
              {submitMode === 'server'
                ? <>Thank you, <strong>{formData.name}</strong>. Your requirement for <strong>{formData.vehiclePreference}</strong> in <strong>{formData.city}</strong> has been sent to our team.</>
                : <>This preview is not connected to the company booking system, so your request has only been saved in this browser. Call <a href="tel:+919545899838" style={{ color: '#FFD700' }}>+91 95458 99838</a> to reach the team.</>}
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem' }}>
              <button onClick={onClose} className="btn-gold">
                Done & Return to Site
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            {submitError && (
              <p role="alert" style={{ color: '#FCA5A5', marginBottom: '1rem' }}>
                {submitError}
              </p>
            )}
            <div style={{ marginBottom: '1.75rem' }}>
              <div className="pill-gold" style={{ marginBottom: '0.65rem' }}>
                <Car size={13} />
                <span>Instant Corporate Booking Desk</span>
              </div>
              <h3 style={{ fontSize: '1.8rem', color: '#FFFFFF', fontWeight: 900, marginBottom: '0.35rem' }}>
                Book Your Corporate Fleet
              </h3>
              <p style={{ fontSize: '0.9rem', color: '#94A3B8' }}>
                Direct enterprise allocation with guaranteed vehicle availability and certified chauffeur.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', marginBottom: '1rem' }}>
              <div>
                <label style={{ fontSize: '0.78rem', color: '#CBD5E1', fontWeight: 600, display: 'block', marginBottom: '0.35rem' }}>
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your Full Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="pf-input"
                />
              </div>

              <div>
                <label style={{ fontSize: '0.78rem', color: '#CBD5E1', fontWeight: 600, display: 'block', marginBottom: '0.35rem' }}>
                  Company Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Organization / MNC"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="pf-input"
                />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', marginBottom: '1rem' }}>
              <div>
                <label style={{ fontSize: '0.78rem', color: '#CBD5E1', fontWeight: 600, display: 'block', marginBottom: '0.35rem' }}>
                  Phone Number *
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
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="official@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="pf-input"
                />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', marginBottom: '1rem' }}>
              <div>
                <label style={{ fontSize: '0.78rem', color: '#CBD5E1', fontWeight: 600, display: 'block', marginBottom: '0.35rem' }}>
                  Vehicle Preference
                </label>
                <select
                  value={formData.vehiclePreference}
                  onChange={(e) => setFormData({ ...formData, vehiclePreference: e.target.value })}
                  className="pf-input"
                >
                  <option value="Suzuki Dzire" style={{ background: '#081B3A' }}>Suzuki Dzire (Sedan)</option>
                  <option value="Suzuki Ciaz" style={{ background: '#081B3A' }}>Suzuki Ciaz (Executive)</option>
                  <option value="Toyota Innova Hycross" style={{ background: '#081B3A' }}>Toyota Innova Hycross (Hybrid MPV)</option>
                  <option value="Premium SUVs" style={{ background: '#081B3A' }}>Premium SUVs (Fortuner / Audi / Mercedes)</option>
                  <option value="Tempo Traveller" style={{ background: '#081B3A' }}>Tempo Traveller (12/17/26 Seats)</option>
                  <option value="Mini Buses" style={{ background: '#081B3A' }}>Mini Buses (20-32 Seats)</option>
                  <option value="Luxury Coaches" style={{ background: '#081B3A' }}>Luxury Coaches (40-49 Seats)</option>
                  <option value="Volvo Coaches" style={{ background: '#081B3A' }}>Volvo Multi-Axle Coaches (50+ Seats)</option>
                </select>
              </div>

              <div>
                <label style={{ fontSize: '0.78rem', color: '#CBD5E1', fontWeight: 600, display: 'block', marginBottom: '0.35rem' }}>
                  Operational City *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Pune, Mumbai, Delhi, Hyderabad..."
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="pf-input"
                />
              </div>
            </div>

            <div style={{ marginBottom: '1.25rem' }}>
              <label style={{ fontSize: '0.78rem', color: '#CBD5E1', fontWeight: 600, display: 'block', marginBottom: '0.35rem' }}>
                Special Requirements or Shift Schedule
              </label>
              <textarea
                rows={2}
                placeholder="Number of vehicles, shift timing, special protocol instructions..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="pf-input"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn-gold"
              style={{ width: '100%', padding: '0.95rem' }}
            >
              <span>{loading ? 'Confirming Fleet Availability...' : 'Confirm Corporate Fleet Reservation'}</span>
              <ArrowRight size={16} />
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
