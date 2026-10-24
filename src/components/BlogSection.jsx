import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Clock, Calendar, User, ArrowRight, Sparkles } from 'lucide-react';
import { INITIAL_BLOGS } from '../data/mockData';

export default function BlogSection({ onReadBlog }) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Corporate Transport', 'Employee Safety', 'Fleet Management', 'Travel', 'Tourism'];

  const filteredBlogs = selectedCategory === 'All'
    ? INITIAL_BLOGS
    : INITIAL_BLOGS.filter(b => b.category === selectedCategory);

  return (
    <section id="blog" className="section-padding bg-obsidian mesh-grid" style={{ position: 'relative' }}>
      
      {/* Background Soft Emerald Glow */}
      <div 
        style={{ 
          position: 'absolute',
          width: '650px', 
          height: '650px', 
          top: '15%', 
          left: '-5%',
          background: 'radial-gradient(circle, rgba(0, 200, 150, 0.14) 0%, transparent 70%)',
          filter: 'blur(130px)',
          pointerEvents: 'none',
          zIndex: 0
        }} 
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 3rem auto' }}>
          <div className="pill-emerald" style={{ marginBottom: '1rem' }}>
            <BookOpen size={14} />
            <span>Enterprise Knowledge Hub</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2.2rem, 3.8vw, 3.4rem)', marginBottom: '1.25rem' }}>
            Mobility Insights, <span className="text-gradient-emerald">Trends & Best Practices</span>
          </h2>
          <p style={{ fontSize: '1.1rem', color: '#94A3B8', lineHeight: 1.75 }}>
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
                background: selectedCategory === cat ? 'var(--emerald-gradient)' : 'rgba(15, 23, 42, 0.6)',
                color: selectedCategory === cat ? '#05080F' : '#94A3B8',
                border: '1px solid ' + (selectedCategory === cat ? '#00C896' : 'rgba(255, 255, 255, 0.08)'),
                padding: '0.6rem 1.35rem',
                borderRadius: '9999px',
                fontWeight: 700,
                fontSize: '0.84rem',
                cursor: 'pointer',
                boxShadow: selectedCategory === cat ? '0 0 20px rgba(0, 200, 150, 0.35)' : 'none',
                transition: 'all 0.25s ease'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Blog Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2rem'
        }}>
          {filteredBlogs.map((blog, idx) => (
            <motion.div
              key={blog.id}
              className="glass-card card-gold-hairline group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.06 }}
              whileHover={{ y: -6 }}
              style={{
                borderRadius: '22px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                background: 'rgba(15, 23, 42, 0.65)'
              }}
            >
              <div>
                {/* Blog Image Frame */}
                <div style={{ position: 'relative', height: '220px', overflow: 'hidden', background: '#05080F' }}>
                  <img
                    src={blog.image}
                    alt={blog.title}
                    loading="lazy"
                    decoding="async"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      filter: 'brightness(0.92)',
                      transition: 'transform 0.5s ease'
                    }}
                    className="group-hover:scale-105"
                  />
                  <div style={{
                    position: 'absolute',
                    top: '1rem',
                    left: '1rem',
                    zIndex: 2
                  }}>
                    <span className="pill-emerald" style={{ padding: '0.25rem 0.75rem', fontSize: '0.72rem' }}>
                      {blog.category}
                    </span>
                  </div>
                  {/* Subtle bottom vignette */}
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(15, 23, 42, 0.95) 0%, transparent 50%)',
                    pointerEvents: 'none'
                  }} />
                </div>

                <div style={{ padding: '1.75rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '0.76rem', color: '#94A3B8', marginBottom: '0.85rem' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                      <Calendar size={13} color="#00C896" /> {blog.date}
                    </span>
                    <span>•</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                      <Clock size={13} color="#D4AF37" /> {blog.readTime}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.22rem', color: '#FFFFFF', fontWeight: 800, marginBottom: '0.75rem', lineHeight: 1.35 }}>
                    {blog.title}
                  </h3>

                  <p style={{ fontSize: '0.88rem', color: '#94A3B8', lineHeight: 1.65, marginBottom: '1.5rem' }}>
                    {blog.excerpt}
                  </p>
                </div>
              </div>

              <div style={{
                padding: '1.25rem 1.75rem',
                borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                background: 'rgba(5, 8, 15, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}>
                <span style={{ fontSize: '0.8rem', color: '#CBD5E1', fontWeight: 600 }}>
                  By {blog.author}
                </span>

                <button
                  onClick={() => onReadBlog(blog)}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    color: '#00C896',
                    fontWeight: 700,
                    fontSize: '0.86rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                  className="hover-gold"
                >
                  <span>Read Article</span>
                  <ArrowRight size={15} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
