import React, { useState } from 'react';
import { BookOpen, Clock, ArrowRight } from 'lucide-react';
import { INITIAL_BLOGS } from '../data/mockData';
import { useSiteContent } from '../context/SiteContentContext';

export default function BlogSection({ onReadBlog }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const { content } = useSiteContent();
  const blogs = content.blogs?.length ? content.blogs : INITIAL_BLOGS;

  const categories = ['All', 'Corporate Transport', 'Employee Safety', 'Fleet Management', 'Travel', 'Tourism'];

  const filteredBlogs = selectedCategory === 'All'
    ? blogs
    : blogs.filter((blog) => blog.category === selectedCategory);

  return (
    <section id="blog" className="blog-section section-padding">
      <div className="container">
        <div className="section-head">
          <div className="pill-gold">
            <BookOpen size={14} />
            <span>Enterprise Knowledge Hub</span>
          </div>
          <h2>
            Mobility Insights, <span className="text-gradient-gold">Trends & Best Practices</span>
          </h2>
          <p>
            Stay ahead with thought leadership articles on fleet electrification, corporate safety standards, telematics optimization, and executive travel protocols.
          </p>
        </div>

        <div className="blog-filters" role="group" aria-label="Filter articles by topic">
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

        <div className="blog-grid">
          {filteredBlogs.map((blog, index) => (
            <article key={blog.id} className={`blog-card ${index === 0 ? 'is-featured' : ''}`}>
              <div className="blog-card-top">
                <span className="blog-index">0{index + 1}</span>
                <span className="blog-read">
                  <Clock size={13} />
                  {blog.readTime}
                </span>
              </div>

              <span className="blog-category">{blog.category}</span>
              <h3>{blog.title}</h3>
              <p>{blog.summary}</p>

              <div className="blog-meta">
                <span>{blog.author}</span>
                <span>{blog.date}</span>
              </div>

              <button type="button" onClick={() => onReadBlog(blog)} className="blog-cta">
                <span>Read Article</span>
                <ArrowRight size={15} />
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
