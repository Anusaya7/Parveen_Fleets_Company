import React from 'react';
import { MapPin, Cpu, Radio, Headphones, Award, ShieldCheck, FileCheck, BarChart3, UserCheck, CheckCircle2, XCircle, Sparkles } from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/mockData';

const iconMap = {
  MapPin,
  Cpu,
  Radio,
  Headphones,
  Award,
  ShieldCheck,
  FileCheck,
  BarChart3,
  UserCheck
};

const COMPARISON = [
  {
    dimension: 'GPS Telematics & Tracking',
    us: 'Dual-redundant live GPS + speed control',
    them: 'Manual phone calls, no real-time data'
  },
  {
    dimension: 'Safety & Female Escort Protocol',
    us: '100% PoSH, SOS button, Safe Reach OTP',
    them: 'Informal, high compliance and legal risk'
  },
  {
    dimension: 'Driver Verification',
    us: '5-tier police & court background check',
    them: 'Unverified ad-hoc sub-contractors'
  },
  {
    dimension: 'Billing Accuracy & Trip Sheets',
    us: 'Tamper-proof digital GPS toll-linked invoicing',
    them: 'Inflated manual paper trip sheets'
  },
  {
    dimension: 'PAN India Reach & Scale',
    us: '112+ operational hubs with a single SLA',
    them: 'City-restricted, fragmented vendors'
  }
];

export default function WhyChooseUsSection({ onOpenQuote }) {
  return (
    <section className="advantage-section section-padding">
      <div className="container">
        <div className="section-head">
          <div className="pill-gold">
            <Sparkles size={14} />
            <span>The Enterprise Advantage</span>
          </div>
          <h2>
            Why Leading Corporations <span className="text-gradient-gold">Choose Parveen Fleets</span>
          </h2>
          <p>
            Eliminating traditional transport bottlenecks through automated telematics, verified chauffeurs, strict safety protocols, and transparent GPS-backed billing.
          </p>
        </div>

        <div className="advantage-grid">
          {WHY_CHOOSE_US.map((item, index) => {
            const IconComponent = iconMap[item.icon] || ShieldCheck;
            return (
              <article key={item.title} className="advantage-card">
                <div className="advantage-card-top">
                  <div className="advantage-icon">
                    <IconComponent size={20} />
                  </div>
                  <span>0{index + 1}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </article>
            );
          })}
        </div>

        <div className="compare-panel">
          <div className="compare-head">
            <h3>Parveen Fleets vs. Traditional Vendors</h3>
            <p>See why corporate procurement and admin teams move their entire fleet to a single enterprise partner.</p>
          </div>

          <div className="compare-table-wrap">
            <div className="compare-row compare-row-head">
              <div>Operational dimension</div>
              <div>Parveen Fleets</div>
              <div>Traditional vendors</div>
            </div>
            {COMPARISON.map((row) => (
              <div key={row.dimension} className="compare-row">
                <div className="compare-dim">{row.dimension}</div>
                <div className="compare-us">
                  <CheckCircle2 size={16} />
                  <span>{row.us}</span>
                </div>
                <div className="compare-them">
                  <XCircle size={16} />
                  <span>{row.them}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="compare-cta">
            <button type="button" onClick={() => onOpenQuote()} className="btn-gold">
              Request Enterprise SLA & Tariff Deck
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
