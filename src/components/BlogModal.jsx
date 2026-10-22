import React from 'react';
import { X, Calendar, Clock, User, BookOpen, Share2 } from 'lucide-react';

export default function BlogModal({ blog, onClose }) {
  if (!blog) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="glass-panel"
        style={{
          width: 'clamp(320px, 94vw, 750px)',
          maxHeight: '90vh',
          overflowY: 'auto',
          background: 'linear-gradient(135deg, rgba(20, 55, 91, 0.98) 0%, rgba(11, 30, 54, 0.99) 100%)',
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

        {/* Category & Meta */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
          <span style={{
            background: 'rgba(255, 215, 0, 0.15)',
            border: '1px solid rgba(255, 215, 0, 0.4)',
            color: '#FFD700',
            padding: '0.3rem 0.8rem',
            borderRadius: '4px',
            fontSize: '0.75rem',
            fontWeight: 800,
            textTransform: 'uppercase'
          }}>
            {blog.category}
          </span>
          <span style={{ fontSize: '0.8rem', color: '#94A3B8', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
            <Calendar size={13} /> {blog.date}
          </span>
          <span style={{ fontSize: '0.8rem', color: '#94A3B8', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
            <Clock size={13} /> {blog.readTime}
          </span>
        </div>

        {/* Title */}
        <h2 style={{
          fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)',
          fontWeight: 900,
          color: '#FFFFFF',
          lineHeight: 1.3,
          marginBottom: '1.25rem'
        }}>
          {blog.title}
        </h2>

        {/* Author */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
          paddingBottom: '1.5rem',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          marginBottom: '1.75rem'
        }}>
          <div style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #113D89, #FFD700)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#050A12',
            fontWeight: 800
          }}>
            <User size={20} />
          </div>
          <div>
            <div style={{ color: '#FFFFFF', fontWeight: 700, fontSize: '0.95rem' }}>{blog.author}</div>
            <div style={{ color: '#94A3B8', fontSize: '0.78rem' }}>Executive Mobility Analyst • Parveen Fleets</div>
          </div>
        </div>

        {/* Body Content */}
        <div style={{ color: '#CBD5E1', fontSize: '1.02rem', lineHeight: 1.8, marginBottom: '2.5rem' }}>
          <p style={{ marginBottom: '1.25rem' }}>
            {blog.content}
          </p>
          <p style={{ marginBottom: '1.25rem' }}>
            Enterprise mobility solutions require dynamic optimization. By consolidating telematics with automated employee rosters, fleet operations can guarantee zero-unattended female drops, hard-capped road speeds, and automated GPS-audited toll invoices.
          </p>
          <div style={{
            background: 'rgba(255, 215, 0, 0.05)',
            borderLeft: '4px solid #FFD700',
            padding: '1.25rem 1.5rem',
            borderRadius: '0 12px 12px 0',
            margin: '1.5rem 0',
            color: '#FFFFFF',
            fontStyle: 'italic'
          }}>
            "Safety, predictability, and transparent digital billing represent the gold standard of 2026 corporate transportation."
          </div>
          <p>
            For organizations seeking to migrate their operations to an award-winning mobility partner, Parveen Fleets Pvt Ltd provides turnkey feasibility studies and pilot deployment with dedicated account management.
          </p>
        </div>

        {/* Footer actions */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '1.25rem' }}>
          <span style={{ fontSize: '0.85rem', color: '#94A3B8' }}>
            Published by Parveen Fleets Pvt Ltd
          </span>
          <button onClick={onClose} className="btn-gold" style={{ padding: '0.65rem 1.4rem', fontSize: '0.85rem' }}>
            Close Article
          </button>
        </div>
      </div>
    </div>
  );
}
