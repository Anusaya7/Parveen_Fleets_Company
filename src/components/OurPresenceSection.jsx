import React, { useMemo, useState } from 'react';
import { ArrowRight, MapPin } from 'lucide-react';
import { CITIES_WE_SERVE_COLUMNS, CITY_GEO } from '../data/mockData';

const HUB_CITIES = new Set([
  'Pune',
  'Mumbai',
  'Hyderabad',
  'Bangalore',
  'Chennai',
  'Gurugram',
  'Kolkata',
  'Ahmedabad'
]);

function projectCity(lat, lng) {
  const top = 6.2 + ((37.1 - lat) / (37.1 - 6.7)) * 83.8;
  const left = lng >= 90
    ? 68 + ((lng - 90) / (97.5 - 90)) * 26.5
    : 4.5 + ((lng - 68) / (90 - 68)) * 57.5;
  return { left: `${left}%`, top: `${top}%` };
}

export default function OurPresenceSection({ onOpenQuote }) {
  const [activeCity, setActiveCity] = useState(null);

  const pins = useMemo(() => (
    CITIES_WE_SERVE_COLUMNS.flatMap((column) =>
      column.flatMap((state) =>
        state.cities.map((city) => {
          const geo = CITY_GEO[city];
          if (!geo) return null;
          return {
            city,
            state: state.name,
            ...projectCity(geo[0], geo[1]),
            hub: HUB_CITIES.has(city)
          };
        })
      )
    ).filter(Boolean)
  ), []);

  return (
    <section id="presence" className="presence-section section-padding">
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="cities-serve">
          <span className="cities-serve-dots cities-serve-dots-tl" aria-hidden="true" />
          <span className="cities-serve-dots cities-serve-dots-br" aria-hidden="true" />

          <div className="cities-serve-map">
            <div className="cities-serve-title">
              <span className="cities-serve-mark" aria-hidden="true" />
              <h2>Cities We Serve</h2>
            </div>

            <div className="cities-serve-map-frame">
              <img
                src="/india_cities_map_light.png?v=2"
                alt="India map with Parveen Fleets service locations"
                className="cities-serve-india"
              />
              {pins.map((pin) => {
                const isActive = activeCity === pin.city;
                return (
                  <button
                    key={`${pin.state}-${pin.city}`}
                    type="button"
                    className={`cities-pin${pin.hub ? ' is-hub' : ''}${isActive ? ' is-active' : ''}`}
                    style={{ left: pin.left, top: pin.top }}
                    aria-label={`${pin.city}, ${pin.state}`}
                    onMouseEnter={() => setActiveCity(pin.city)}
                    onMouseLeave={() => setActiveCity(null)}
                    onFocus={() => setActiveCity(pin.city)}
                    onBlur={() => setActiveCity(null)}
                    onClick={() => onOpenQuote({ city: pin.city })}
                  >
                    <span className="cities-pin-tooltip">
                      {pin.city}
                      <small>{pin.state}</small>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="cities-serve-panel">
            <div className="cities-serve-list-head">
              <span className="cities-serve-kicker">
                <MapPin size={14} />
                PAN India network
              </span>
              <strong>{pins.length} cities · {CITIES_WE_SERVE_COLUMNS.flat().length} states</strong>
            </div>

            <div className="cities-serve-list">
              {CITIES_WE_SERVE_COLUMNS.map((column, colIdx) => (
                <div key={colIdx} className="cities-serve-col">
                  {column.map((state) => (
                    <article key={state.name} className={`cities-state is-${state.tone}`}>
                      <div className="cities-state-head">
                        <h3 className={`cities-state-name is-${state.tone}`}>{state.name}</h3>
                        <span className="cities-state-count">{state.cities.length}</span>
                      </div>
                      <ul>
                        {state.cities.map((city) => (
                          <li key={city}>
                            <button
                              type="button"
                              className={`cities-chip${activeCity === city ? ' is-active' : ''}`}
                              onMouseEnter={() => setActiveCity(city)}
                              onMouseLeave={() => setActiveCity(null)}
                              onFocus={() => setActiveCity(city)}
                              onBlur={() => setActiveCity(null)}
                              onClick={() => onOpenQuote({ city })}
                            >
                              {city}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </article>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="cities-serve-cta">
          <button type="button" className="btn-gold" onClick={() => onOpenQuote({ city: 'PAN India' })}>
            <span>Deploy fleet in your city</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
