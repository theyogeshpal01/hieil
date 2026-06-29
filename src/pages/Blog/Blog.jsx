import React, { useEffect, useState } from 'react';
import './Blog.css';
import { Search, Mail } from 'lucide-react';

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeTab, setActiveTab] = useState('All Posts');

  const topics = [
    'All Posts',
    'Handcrafted Wooden categories',
    'Handmade Painting Art'
  ];

  const subTopics = [
    'Latest Blogs',
    'Recommended Blogs',
    'Woven Stories'
  ];

  const artisans = [
    {
      name: 'Surajmal & team',
      craft: 'Handcrafted Wooden categories',
      desc: 'Surajmal is a skilled artisan known for his expertise in crafting high-quality handcrafted wooden categories. With years of experience in traditional woodworking, he combines time-honored techniques with creative design to produce unique and elegant wooden handicrafts.\n\nHis craftsmanship reflects patience, precision, and a deep respect for natural materials. Each wooden piece created by Surajmal is carefully shaped, carved, and finished by hand, ensuring durability, beauty, and authenticity. His work often features traditional patterns and artistic detailing that represent the rich heritage of Indian handicrafts.',
      image: '/artisan1.png', 
    },
    {
      name: 'Ahmad Ali & team',
      craft: 'Handcrafted Blue Pottery',
      desc: 'Ahmad Ali is a skilled artisan specializing in the traditional art of handcrafted Blue Pottery, a craft deeply rooted in the rich cultural heritage of Rajasthan. With years of experience and dedication to this unique ceramic art form, he has mastered the intricate techniques of shaping, glazing, and decorating exquisite blue pottery pieces.\n\nHis work reflects the beauty of traditional craftsmanship combined with artistic precision. Each piece created by Ahmad Ali carries distinctive patterns, vibrant blue hues, and detailed hand-painted designs that represent the timeless elegance of Rajasthani heritage.',
      image: '/artisan2.png',
    }
  ];

  return (
    <div className="blog-page">
      {/* Hero Section */}
      <section className="blog-hero">
        <div className="blog-hero-content" data-aos="fade-up">
          <h1 className="blog-title">Hieil Insights</h1>
          <div className="blog-search-bar">
            <input type="text" placeholder="Search Topics..." />
            <button className="search-btn"><Search size={20} /></button>
          </div>
        </div>
      </section>

      {/* Topics Section */}
      <section className="blog-topics-section">
        <div className="container">
          <div className="topics-header" data-aos="fade-up">
            <h3>Explore Topics:</h3>
            <div className="topics-list">
              {topics.map((topic, index) => (
                <button 
                  key={index} 
                  className={`topic-btn ${activeTab === topic ? 'active' : ''}`}
                  onClick={() => setActiveTab(topic)}
                >
                  {topic}
                </button>
              ))}
            </div>
          </div>

          <div className="sub-topics-list" data-aos="fade-up" data-aos-delay="100">
            {subTopics.map((sub, index) => (
              <button key={index} className="sub-topic-btn">{sub}</button>
            ))}
          </div>

          <div className="blog-content-area" data-aos="fade-in" data-aos-delay="200">
            <div className="empty-state">
              <p>No Articles Found In This Collection.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Artisans Section */}
      <section className="blog-artisans-section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2>Meet <br /> <span style={{ color: 'var(--color-brand-base)' }}>Our Artisans</span></h2>
            <p className="subtitle">Authentic videos showcasing the skill, dedication, and stories behind our master craftsmen.</p>
            <h3 className="section-subtitle mt-4">The Hands Behind Our Crafts</h3>
          </div>

          <div className="artisans-grid">
            {artisans.map((artisan, index) => (
              <div className="artisan-card" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="artisan-video-placeholder">
                  {/* Using an image to showcase the artisan */}
                  <img src={artisan.image} alt={artisan.name} className="artisan-thumbnail" />
                  <span className="artisan-tag">Artisan Work</span>
                </div>
                <div className="artisan-info">
                  <span className="artisan-craft">{artisan.craft}</span>
                  <h3>{artisan.name}</h3>
                  <div className="artisan-desc">
                    {artisan.desc.split('\n\n').map((para, i) => (
                      <p key={i}>{para}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="blog-newsletter-section">
        <div className="container">
          <div className="newsletter-box" data-aos="zoom-in">
            <div className="newsletter-content">
              <h2>Get <br /> <span style={{ color: 'var(--color-brand-base)' }}>Importer-Focused Insights</span></h2>
              <p>Subscribe to receive exclusive guides, market intelligence, and early access to new artisan collections curated for international buyers.</p>
            </div>
            <div className="newsletter-form">
              <div className="input-group">
                <Mail size={20} className="mail-icon" />
                <input type="email" placeholder="Enter your business email" />
                <button type="button">Subscribe</button>
              </div>
              <p className="privacy-text">We respect your privacy. Unsubscribe anytime.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
