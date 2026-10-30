'use client';

import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { Video, Play, Volume2, X, ArrowRight } from 'lucide-react';
import { useSiteContent } from '../context/SiteContentContext';

function ReelCard({ item, onOpen }) {
  const videoRef = useRef(null);

  const playPreview = () => {
    videoRef.current?.play().catch(() => {});
  };

  const stopPreview = () => {
    if (!videoRef.current) return;
    videoRef.current.pause();
    videoRef.current.currentTime = 0;
  };

  return (
    <button
      type="button"
      className="ig-reel-card"
      onClick={() => onOpen(item)}
      onMouseEnter={playPreview}
      onMouseLeave={stopPreview}
      aria-label={item.title || 'Play Instagram video'}
    >
      {item.video ? (
        <video ref={videoRef} src={item.video} muted loop playsInline preload="metadata" />
      ) : (
        <div className="ig-reel-empty">9:16</div>
      )}
      <span className="ig-reel-play">
        <Play size={18} fill="currentColor" />
      </span>
      {item.title ? <span className="ig-reel-title">{item.title}</span> : null}
    </button>
  );
}

export default function InstagramReelsSection({ variant = 'home' }) {
  const { content } = useSiteContent();
  const videos = (content.instagramVideos || []).filter((item) => item.video);
  const [active, setActive] = useState(null);
  const [mounted, setMounted] = useState(false);
  const isPage = variant === 'page';
  const shown = isPage ? videos : videos.slice(0, 6);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!active) return undefined;
    const html = document.documentElement;
    html.classList.add('ig-reel-open');
    document.body.classList.add('ig-reel-open');
    return () => {
      html.classList.remove('ig-reel-open');
      document.body.classList.remove('ig-reel-open');
    };
  }, [active]);

  const popup = active?.video && mounted
    ? createPortal(
      <div className="modal-overlay ig-reel-overlay" onClick={() => setActive(null)}>
        <div className="ig-reel-modal" role="dialog" aria-modal="true" onClick={(event) => event.stopPropagation()}>
          <button type="button" className="ig-reel-close" onClick={() => setActive(null)} aria-label="Close video">
            <X size={18} />
          </button>
          <div className="ig-reel-player">
            <video key={active.video} src={active.video} controls autoPlay playsInline preload="metadata" />
          </div>
          <div className="ig-reel-meta">
            <strong>{active.title || 'Instagram reel'}</strong>
            {active.caption ? <p>{active.caption}</p> : null}
            {active.instagramUrl ? (
              <a href={active.instagramUrl} target="_blank" rel="noreferrer">
                <Volume2 size={14} /> Open on Instagram
              </a>
            ) : null}
          </div>
        </div>
      </div>,
      document.body
    )
    : null;

  return (
    <section id="instagram" className={`instagram-section section-padding ${isPage ? 'is-page' : ''}`}>
      <div className="container">
        <div className="section-head">
          <div className="pill-gold">
            <Video size={14} />
            <span>Instagram Reels</span>
          </div>
          <p>
            Watch vertical Instagram-style reels of our chauffeurs, luxury fleet, and corporate commute operations. Add more from the admin panel.
          </p>
        </div>

        {shown.length ? (
          <div className={isPage ? 'ig-reel-grid' : 'ig-reel-row'}>
            {shown.map((item) => (
              <ReelCard key={item.id} item={item} onOpen={setActive} />
            ))}
          </div>
        ) : (
          <div className="ig-empty">
            <Video size={22} />
            <p>No Instagram videos yet. Upload 9:16 reels from the admin Instagram tab.</p>
          </div>
        )}

        {!isPage ? (
          <div className="ig-section-cta">
            <a href="/instagram" className="btn-outline">
              View all reels
              <ArrowRight size={15} />
            </a>
          </div>
        ) : null}
      </div>

      {popup}
    </section>
  );
}
