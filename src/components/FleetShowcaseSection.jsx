import React, { useState } from 'react';
import { Users, Briefcase, Fuel, Shield, ArrowRight, Sparkles, Check } from 'lucide-react';
import { FLEET_SHOWCASE } from '../data/mockData';
import { useSiteContent } from '../context/SiteContentContext';

export default function FleetShowcaseSection({ onBookVehicle }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const { content } = useSiteContent();
  const fleet = content.fleet?.length ? content.fleet : FLEET_SHOWCASE;

  const categories = ['All', 'Executive Sedans', 'Premium MPVs', 'Luxury & VIP', 'Coaches & Travellers'];

  const filteredFleet = selectedCategory === 'All'
    ? fleet
    : fleet.filter((item) => item.category === selectedCategory);

  return (
    <section id="fleet" className="fleet-section section-padding">
      <div className="container">
        <div className="section-head">
          <div className="pill-gold">
            <Sparkles size={14} />
            <span>Modern, Sanitized & Premium Fleet</span>
          </div>
          <h2>
            The Parveen Fleets <span className="text-gradient-gold">Luxury Vehicle Showcase</span>
          </h2>
          <p>
            Every vehicle in our fleet is under 3 years old, equipped with dual GPS telematics, climate control air-conditioning, and piloted by certified protocol chauffeurs.
          </p>
        </div>

        <div className="fleet-toolbar">
          <div className="fleet-filters" role="group" aria-label="Filter fleet by category">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                aria-pressed={selectedCategory === cat}
                onClick={() => setSelectedCategory(cat)}
                className={selectedCategory === cat ? 'is-active' : ''}
              >
                {cat}
              </button>
            ))}
          </div>
          <span className="fleet-count">{filteredFleet.length} vehicle classes</span>
        </div>

        <div className="fleet-grid">
          {filteredFleet.map((vehicle, index) => (
            <article
              key={vehicle.id}
              className={`fleet-card ${vehicle.badge === 'Most Popular Daily' ? 'is-featured' : ''}`}
            >
              <div className="fleet-card-media">
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  loading="lazy"
                  decoding="async"
                />
                <span className="fleet-badge">{vehicle.badge}</span>
                <span className="fleet-index">0{index + 1}</span>
              </div>

              <div className="fleet-card-body">
                <div className="fleet-card-meta">
                  <span>{vehicle.category}</span>
                  <strong>{vehicle.rateEstimate}</strong>
                </div>
                <h3>{vehicle.name}</h3>

                <div className="fleet-specs">
                  <span><Users size={14} /> {vehicle.capacity}</span>
                  <span><Briefcase size={14} /> {vehicle.luggage}</span>
                  <span><Fuel size={14} /> {vehicle.fuel}</span>
                  <span><Shield size={14} /> GPS & AC Enabled</span>
                </div>

                <ul className="fleet-features">
                  {vehicle.features.slice(0, 4).map((feat) => (
                    <li key={feat}>
                      <Check size={13} />
                      {feat}
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  onClick={() => onBookVehicle(vehicle)}
                  className="fleet-cta"
                >
                  <span>Book {vehicle.name}</span>
                  <ArrowRight size={15} />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
