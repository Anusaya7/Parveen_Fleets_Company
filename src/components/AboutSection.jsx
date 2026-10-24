import React, { useState } from 'react';
import { Building2, Award, Calendar, CheckCircle2, MapPin, TrendingUp, Shield, ArrowRight } from 'lucide-react';
import { TIMELINE_MILESTONES } from '../data/mockData';

const PILLARS = [
  {
    icon: Calendar,
    title: '2012 → 2021',
    tag: 'Pvt Ltd Milestone',
    text: 'Over a decade of uncompromised excellence in corporate fleet logistics and institutional passenger transit.',
    tone: 'gold'
  },
  {
    icon: Building2,
    title: 'Pune Head Office',
    tag: 'Corporate Headquarters',
    text: 'Central Command Control Center in Viman Nagar, Pune, managing real-time telematics across all 112+ hubs.',
    tone: 'blue'
  },
  {
    icon: MapPin,
    title: '3 Major Hubs',
    tag: 'Mumbai • Delhi • Hyderabad',
    text: 'Full-scale regional operational centers in Mumbai BKC, Delhi Aerocity, and Hyderabad Hitec City.',
    tone: 'green'
  },
  {
    icon: Shield,
    title: '100% Certified',
    tag: 'ISO 9001:2015 & PoSH',
    text: 'Rigorous compliance protocols, female commuter security escorts, and 100% police background verification.',
    tone: 'gold'
  }
];

const HIGHLIGHTS = [
  { label: 'Head Office', text: 'Viman Nagar, Pune corporate headquarters with 24x7 War Room.' },
  { label: 'Key Regional Hubs', text: 'BKC Mumbai, Aerocity New Delhi, Hitec City Hyderabad.' },
  { label: 'Fleet Technology', text: 'Real-time telematics, dynamic route clustering & digital attendance.' },
  { label: 'Enterprise Trust', text: 'Servicing Tier-1 IT, BFSI, Aerospace, and Automotive giants nationwide.' }
];

export default function AboutSection({ onOpenQuote }) {
  const [activeMilestone, setActiveMilestone] = useState(3);
  const milestone = TIMELINE_MILESTONES[activeMilestone];

  return (
    <section id="about" className="about-section section-padding">
      <div className="container">
        <div className="section-head">
          <div className="pill-gold">
            <Award size={14} />
            <span>Our Heritage & Corporate Evolution</span>
          </div>
          <h2>
            Built on Trust. <span className="text-gradient-gold">Powered by Innovation.</span>
          </h2>
          <p>
            From our founding in 2012 in Pune to incorporating as a Private Limited company in 2021, Parveen Fleets Pvt Ltd has grown into India's premier corporate mobility partner for Fortune 500 enterprises.
          </p>
        </div>

        <div className="about-pillars">
          {PILLARS.map((item, index) => {
            const Icon = item.icon;
            return (
              <article key={item.title} className={`about-pillar tone-${item.tone}`}>
                <span className="about-pillar-index">0{index + 1}</span>
                <div className="about-pillar-icon">
                  <Icon size={22} />
                </div>
                <h3>{item.title}</h3>
                <div className="about-pillar-tag">{item.tag}</div>
                <p>{item.text}</p>
              </article>
            );
          })}
        </div>

        <div className="about-timeline">
          <div className="about-timeline-top">
            <div>
              <span className="about-kicker">Journey of excellence</span>
              <h3>The Parveen Fleets Growth Story</h3>
            </div>
            <p>Tap a year to see how the company scaled from Pune to a PAN-India enterprise network.</p>
          </div>

          <div className="about-year-track" role="tablist" aria-label="Company timeline">
            <span className="about-year-line" />
            {TIMELINE_MILESTONES.map((item, index) => (
              <button
                key={item.year}
                type="button"
                role="tab"
                aria-selected={activeMilestone === index}
                className={`about-year ${activeMilestone === index ? 'is-active' : ''}`}
                onClick={() => setActiveMilestone(index)}
              >
                <span className="about-year-dot" />
                <strong>{item.year}</strong>
                <small>{item.badge}</small>
              </button>
            ))}
          </div>

          <div className="about-milestone">
            <div>
              <span className="pill-gold">{milestone.badge}</span>
              <div className="about-milestone-year">{milestone.year}</div>
              <h4>{milestone.title}</h4>
              <p>{milestone.description}</p>
              <button type="button" onClick={() => onOpenQuote()} className="btn-gold">
                Partner With Us <ArrowRight size={16} />
              </button>
            </div>

            <div className="about-highlights">
              <div className="about-highlights-title">
                <TrendingUp size={18} />
                Strategic Highlights
              </div>
              <ul>
                {HIGHLIGHTS.map((item) => (
                  <li key={item.label}>
                    <CheckCircle2 size={16} />
                    <span><strong>{item.label}:</strong> {item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
