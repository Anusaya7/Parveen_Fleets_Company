import React from 'react';
import { Award, Trophy, Star, ShieldCheck, Sparkles } from 'lucide-react';

const MERITS = [
  {
    icon: Award,
    color: '#E8C547',
    title: 'ISO 9001:2015',
    text: 'Quality Fleet Management'
  },
  {
    icon: ShieldCheck,
    color: '#34D399',
    title: 'PoSH Compliant',
    text: 'Women Workplace Safety'
  },
  {
    icon: Sparkles,
    color: '#38BDF8',
    title: '99.8% On-Time SLA',
    text: 'Verified Audit 2024-2026'
  }
];

export default function AwardsSection({ onOpenQuote }) {
  return (
    <section id="awards" className="awards-section section-padding">
      <div className="container">
        <div className="awards-panel navy-surface">
          <div className="awards-crest">
            <Trophy size={28} strokeWidth={2.2} />
          </div>

          <div className="awards-stars" aria-hidden="true">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={16} fill="#E8C547" color="#E8C547" />
            ))}
          </div>

          <div className="awards-kicker">National Fleet Mobility Honors</div>

          <h2>
            Best Corporate Car Rental
            <span className="text-gradient-gold"> Of The Year 2024</span>
          </h2>

          <p>
            Recognized by the National Corporate Mobility Federation for outstanding reliability, commuter safety innovations, and pioneering enterprise telematics across India.
          </p>

          <div className="awards-merits">
            {MERITS.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="awards-merit">
                  <Icon size={20} color={item.color} />
                  <div>
                    <strong>{item.title}</strong>
                    <span>{item.text}</span>
                  </div>
                </article>
              );
            })}
          </div>

          <button type="button" onClick={() => onOpenQuote()} className="btn-gold awards-cta">
            Choose An Award-Winning Fleet Partner
          </button>
        </div>
      </div>
    </section>
  );
}
