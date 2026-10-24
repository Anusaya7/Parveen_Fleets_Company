import React from 'react';
import { CLIENT_LOGOS } from '../data/mockData';

export default function ClientsMarquee() {
  const logos = [...CLIENT_LOGOS, ...CLIENT_LOGOS];

  return (
    <section className="clients-marquee">
      <div className="container clients-marquee-inner">
        <div className="clients-marquee-copy">
          <span>Trusted mobility partner</span>
          <strong>for India's foremost enterprises</strong>
        </div>
        <div className="clients-marquee-mask">
          <div className="marquee-track">
            {logos.map((client, idx) => (
              <article key={`${client.name}-${idx}`} className="clients-logo-card">
                <img src={client.logo} alt={`${client.name} logo`} loading="lazy" />
                <span>{client.name}</span>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
