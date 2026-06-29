import React, { useEffect } from 'react';
import './Testimonials.css';
import { Link } from 'react-router-dom';
import { Quote, Star, PenTool, Camera, CheckCircle } from 'lucide-react';

const Testimonials = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const stats = [
    { value: '100%', label: 'Customizations' },
    { value: '100%', label: 'On-Time Delivery' }
  ];

  // Placeholder for brand logos
  const brands = [
    'Brand 1', 'Brand 2', 'Brand 3', 'Brand 4', 'Brand 5'
  ];

  return (
    <div className="testimonials-page">
      {/* Hero Section */}
      <section className="testimonials-hero">
        <div className="testimonials-hero-content" data-aos="fade-up">
          <span className="testimonials-tag">Testimonials</span>
          <h1 className="testimonials-title">What Our Customers Say</h1>
          <p className="testimonials-subtitle">
            Discover why thousands of customers trust HIEIL for their handicraft needs. Read genuine testimonials from homeowners, interior designers, and businesses who have transformed their spaces with our premium handmade categories and exceptional services.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="testimonials-stats-section">
        <div className="container">
          <div className="stats-grid-small">
            {stats.map((stat, index) => (
              <div className="stat-card" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                <h3>{stat.value}</h3>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Testimonial */}
      <section className="featured-testimonial-section">
        <div className="container">
          <div className="featured-testimonial-card" data-aos="zoom-in">
            <Quote className="quote-icon" size={80} />
            <div className="stars">
              <Star size={24} fill="currentColor" />
              <Star size={24} fill="currentColor" />
              <Star size={24} fill="currentColor" />
              <Star size={24} fill="currentColor" />
              <Star size={24} fill="currentColor" />
            </div>
            <p className="testimonial-text">
              "I recently purchased a beautiful handicraft from Hieil Company, and I am deeply impressed by the skill involved. In Japan, we deeply respect the 'Takumi' (artisan) spirit, and I see that same dedication in Hieil’s categories. The balance of tradition and quality is excellent. It is a wonderful addition to my collection in Tokyo."
            </p>
            <div className="testimonial-author-wrapper">
              <div className="author-line"></div>
              <div className="testimonial-author">
                <h4>Sakura</h4>
                <p>Business Man , Japan , Tokyo</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Brands Section */}
      <section className="trusted-brands-section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2>Trusted By <br /> <span style={{ color: 'var(--color-brand-base)' }}>Leading Brands</span></h2>
            <p>Our clients include some of the most prestigious names in the industry</p>
          </div>
          <div className="brands-logo-grid" data-aos="fade-up">
            {brands.map((brand, index) => (
              <div className="brand-logo-card" key={index}>
                <span className="brand-name">{brand}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Action Sections */}
      <section className="testimonials-actions-section">
        <div className="container">
          <div className="actions-grid">
            {/* CTA 1: Create Success Story */}
            <div className="action-card primary-action" data-aos="fade-right">
              <CheckCircle className="action-icon" size={48} />
              <h2>Ready To Create <br /> <span style={{ color: 'var(--color-brand-base)' }}>Your Success Story</span>?</h2>
              <p>Join thousands of satisfied customers who have transformed their spaces with HIEIL handicrafts</p>
              <Link to="/contact" className="btn-primary">Start Your Project</Link>
            </div>

            {/* CTA 2: Share Experience */}
            <div className="action-card secondary-action" data-aos="fade-left">
              <h2>Share <br /> <span style={{ color: 'var(--color-brand-base)' }}>Your Experience</span></h2>
              <p>Loved our categories and services? We'd love to hear about your experience! Share your story and help others discover the quality and craftsmanship of HIEIL handicrafts.</p>
              <div className="action-buttons">
                <button className="btn-outline"><PenTool size={18} /> Write a Review</button>
                <button className="btn-outline"><Camera size={18} /> Share Photos</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
