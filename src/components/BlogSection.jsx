import React, { useState } from 'react';
import { BookOpen, Clock, Calendar, User, ArrowRight, Sparkles } from 'lucide-react';
import { INITIAL_BLOGS } from '../data/mockData';

export default function BlogSection({ onReadBlog }) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Corporate Transport', 'Employee Safety', 'Fleet Management', 'Travel', 'Tourism'];

  const filteredBlogs = selectedCategory === 'All'
    ? INITIAL_BLOGS
    : INITIAL_BLOGS.filter(b => b.category === selectedCategory);

  return (
    <section id="blog" className="section-padding" style={{ position: 'relative' }}>
      
      {/* Background Ambient Glow */}
      <div className="ambient-glow ambient-gold" style={{ width: '450px', height: '450px', top: '15%', left: '-5%' }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 3rem auto' }}>
          <div className="pill-gold" style={{ marginBottom: '1rem' }}>
            <BookOpen size={14} />
            <span>Enterprise Knowledge Hub</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', marginBottom: '1.25rem' }}>
            Mobility Insights, <span className="text-gradient-gold">Trends & Best Practices</span>
          </h2>
          <p style={{ fontSize: '1.1rem', color: '#94A3B8', lineHeight: 1.6 }}>
            Stay ahead with thought leadership articles on fleet electrification, corporate safety standards, telematics optimization, and executive travel protocols.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '0.65rem',
          marginBottom: '3rem'
        }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              style={{
                background: selectedCategory === cat ? 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)' : 'rgba(205, 225, 248, 0.08)',
                color: selectedCategory === cat ? '#050A12' : '#CBD5E1',
                border: '1px solid ' + (selectedCategory === cat ? '#FFD700' : 'rgba(255, 255, 255, 0.1)'),
                padding: '0.55rem 1.25rem',
                borderRadius: '9999px',
                fontWeight: 700,
                fontSize: '0.82rem',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Blogs Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.75rem'
        }}>
          {filteredBlogs.map((blog) => (
            <div
              key={blog.id}
              className="glass-card"
              style={{
                padding: '2rem 1.75rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                border: '1px solid rgba(255, 255, 255, 0.08)'
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <span style={{
                    background: 'rgba(255, 215, 0, 0.12)',
                    border: '1px solid rgba(255, 215, 0, 0.3)',
                    color: '#FFD700',
                    padding: '0.25rem 0.65rem',
                    borderRadius: '4px',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    textTransform: 'uppercase'
                  }}>
                    {blog.category}
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.75rem', color: '#94A3B8' }}>
                    <Clock size={13} /> {blog.readTime}
                  </span>
                </div>

                <h3 style={{
                  fontSize: '1.25rem',
                  color: '#FFFFFF',
                  fontWeight: 800,
                  lineHeight: 1.4,
                  marginBottom: '1rem'
                }}>
                  {blog.title}
                </h3>

                <p style={{
                  fontSize: '0.9rem',
                  color: '#94A3B8',
                  lineHeight: 1.6,
                  marginBottom: '1.5rem'
                }}>
                  {blog.summary}
                </p>
              </div>

              <div>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  fontSize: '0.8rem',
                  color: '#64748B',
                  marginBottom: '1.25rem',
                  paddingTop: '1rem',
                  borderTop: '1px solid rgba(255, 255, 255, 0.06)'
                }}>
                  <span>{blog.author}</span>
                  <span>{blog.date}</span>
                </div>

                <button
                  onClick={() => onReadBlog(blog)}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    color: '#FFD700',
                    fontWeight: 700,
                    fontSize: '0.88rem',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    padding: 0,
                    cursor: 'pointer'
                  }}
                >
                  <span>Read Article</span>
                  <ArrowRight size={15} />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
