import React from 'react';
import { MapPin, Car, Radio, ShieldCheck } from 'lucide-react';
import { HERO_STATS } from '../data/mockData';
import { useSiteContent } from '../context/SiteContentContext';

const icons = [MapPin, Car, Radio, ShieldCheck];

export default function StatsSection() {
  const { content } = useSiteContent();
  const stats = content.stats?.length ? content.stats : HERO_STATS;

  return (
    <section className="stats-section" aria-label="Parveen Fleets key figures">
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, index) => {
            const Icon = icons[index] || MapPin;
            return (
              <article key={stat.label} className="stat-card">
                <div className="stat-card-icon">
                  <Icon size={22} />
                </div>
                <div className="stat-card-value">{stat.value}</div>
                <div className="stat-card-label">{stat.label}</div>
                <div className="stat-card-sub">{stat.sub}</div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
