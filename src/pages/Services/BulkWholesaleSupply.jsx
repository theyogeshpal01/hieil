import React, { useEffect } from 'react';
import './BulkWholesaleSupply.css';
import { Link } from 'react-router-dom';
import { PackageOpen, TrendingUp, ShieldCheck, Target, Globe, Star, Clock, HeartHandshake, Search, Scale, Package, Users, Award, Box } from 'lucide-react';

const BulkWholesaleSupply = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const stats = [
    { value: '50+', label: 'Wholesale Partners' },
    { value: '1M+', label: 'categories Delivered' },
    { value: '2+', label: 'Years Experience' },
    { value: '50+', label: 'Countries Served' }
  ];

  const advantages = [
    { title: 'Quality Consistency', icon: <ShieldCheck size={24} />, desc: 'Every product undergoes rigorous quality checks to ensure consistent standards across all bulk orders.' },
    { title: 'Reliable Delivery', icon: <Clock size={24} />, desc: 'Streamlined logistics and supply chain management ensure timely delivery of your wholesale orders.' },
    { title: 'Steady Inventory', icon: <Package size={24} />, desc: 'Maintain consistent stock levels with our reliable volume supply, preventing out-of-stock situations.' },
    { title: 'Partnership Approach', icon: <HeartHandshake size={24} />, desc: 'We work as your strategic partner, understanding your business needs and growing together.' },
    { title: 'Global Reach', desc: 'Experience in shipping to multiple countries with understanding of international trade requirements.' },
    { title: 'Dedicated Support', icon: <Users size={24} />, desc: 'Personal account managers and 24/7 customer support for all your wholesale business needs.' },
    { title: '100% Transparency', icon: <Search size={24} />, desc: 'Complete visibility into pricing, documentation, and tracking for total peace of mind.' },
    { title: 'No Corruption Policy', icon: <Scale size={24} />, desc: 'Ethical business practices with zero tolerance for corruption across all global operations.' }
  ];

  const processSteps = [
    { num: '1', title: 'Consultation', desc: 'Discuss your business needs, product requirements, and volume expectations with our wholesale experts.' },
    { num: '2', title: 'Quotation', desc: 'Receive detailed pricing, MOQ information, and delivery timelines tailored to your specific requirements.' },
    { num: '3', title: 'Order Placement', desc: 'Place your order with flexible payment terms and secure your production slot in our manufacturing schedule.' },
    { num: '4', title: 'Delivery', desc: 'Track your order through production and receive timely delivery with complete documentation support.' }
  ];

  const partners = [
    { title: 'Proven Track Record', desc: '2+ years of experience in wholesale supply with hundreds of satisfied business partners worldwide.', icon: <Award size={32} /> },
    { title: 'Scalable Production', desc: 'Manufacturing capabilities to handle orders from hundreds to hundreds of thousands of units.', icon: <TrendingUp size={32} /> },
    { title: 'Quality Assurance', desc: 'Stringent quality control processes ensure every product meets international standards and your expectations.', icon: <ShieldCheck size={32} /> },
    { title: 'Partnership Focus', desc: 'We invest in long-term relationships, providing support and flexibility to help your business grow.', icon: <HeartHandshake size={32} /> }
  ];

  return (
    <div className="wholesale-page">
      {/* What We Offer */}
      <section className="ws-offer-section">
        <div className="container">
          <div className="page-header" data-aos="fade-up">
            <span className="ws-tag">Service Directory</span>
            <h1 className="page-title">Scaling Your Business with Consistent <span style={{ color: 'var(--color-brand-base)' }}>Quality</span></h1>
            <p className="page-subtitle">
              We specialize in handling large-scale bulk orders while maintaining uncompromised quality consistency. With years of experience in wholesale distribution, we understand the unique demands of volume business and provide reliable supply chain solutions that keep your inventory stocked and your customers satisfied.
            </p>
          </div>
          <div className="offer-grid">
            <div className="offer-card" data-aos="fade-up" data-aos-delay="100">
              <div className="offer-icon"><TrendingUp size={40} /></div>
              <h3>Large-scale Production</h3>
              <p>Experienced in handling bulk orders of any size while maintaining consistent quality across all categories.</p>
            </div>
            <div className="offer-card" data-aos="fade-up" data-aos-delay="200">
              <div className="offer-icon"><Box size={40} /></div>
              <h3>Wide Product Range</h3>
              <p>Rugs, Home Decor, Furniture, Brassware, Wall Art, and more - all available for wholesale purchase.</p>
            </div>
            <div className="offer-card" data-aos="fade-up" data-aos-delay="300">
              <div className="offer-icon"><PackageOpen size={40} /></div>
              <h3>Flexible MOQ</h3>
              <p>Minimum Order Quantity tailored to support both emerging businesses and established distributors.</p>
            </div>
            <div className="offer-card" data-aos="fade-up" data-aos-delay="400">
              <div className="offer-icon"><Target size={40} /></div>
              <h3>Competitive Pricing</h3>
              <p>Wholesale rates that give you maximum margin while maintaining product quality and value.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Product categories */}
      <section className="ws-categories-section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2>Wholesale <br /> <span style={{ color: 'var(--color-brand-base)' }}>Product categories</span></h2>
            <p>Extensive Range for All Your Business Needs</p>
          </div>
          <div className="categories-grid">
            {/* Category 1 */}
            <div className="category-card" data-aos="fade-up">
              <div className="category-image">
                <img src="/jaipur.jpeg" alt="Handcrafted Blue Pottery" />
                <span className="moq-badge">MOQ: 100 pcs</span>
              </div>
              <div className="category-content">
                <h3>Handcrafted Blue Pottery categories</h3>
                <p>Handcrafted Blue Pottery is a traditional art form known for its vibrant blue and turquoise designs. Crafted by skilled artisans using a unique blend of quartz, glass, and natural materials, these pieces include plates, bowls, tiles, and decorative items, reflecting rich heritage, fine craftsmanship, and timeless artistic beauty.</p>
                <Link to="/contact" className="cat-btn">Request Catalog</Link>
              </div>
            </div>

            {/* Category 2 */}
            <div className="category-card" data-aos="fade-up">
              <div className="category-image">
                <img src="/carousel4.png" alt="Handcrafted Metal categories" />
                <span className="moq-badge">MOQ: 100 pcs</span>
              </div>
              <div className="category-content">
                <h3>Handcrafted Metal categories</h3>
                <p>Handcrafted metal categories are skillfully created by experienced artisans using high-quality metals such as brass, copper, iron, and aluminum. These items include decorative pieces, sculptures, utensils, and home dÃ©cor accessories. Each product reflects traditional craftsmanship, durability, and artistic elegance.</p>
                <Link to="/contact" className="cat-btn">Request Catalog</Link>
              </div>
            </div>

            {/* Category 3 */}
            <div className="category-card" data-aos="fade-up">
              <div className="category-image">
                <img src="/carousel2.png" alt="Handcrafted Stone categories" />
                <span className="moq-badge">MOQ: 100 pcs</span>
              </div>
              <div className="category-content">
                <h3>Handcrafted Stone categories</h3>
                <p>Handcrafted stone categories are beautifully carved by skilled artisans using natural stones such as marble, sandstone, and granite. These items include sculptures, tabletops, decorative pieces, and architectural elements. Each product reflects traditional craftsmanship, durability, and timeless elegance.</p>
                <Link to="/contact" className="cat-btn">Request Catalog</Link>
              </div>
            </div>

            {/* Category 4 */}
            <div className="category-card" data-aos="fade-up">
              <div className="category-image">
                <img src="/carousel1.png" alt="Handcrafted Wooden categories" />
                <span className="moq-badge">MOQ: 100 pcs</span>
              </div>
              <div className="category-content">
                <h3>Handcrafted Wooden categories</h3>
                <p>Handcrafted wooden categories are carefully created by skilled artisans using high-quality natural wood. These categories include decorative items, furniture, kitchenware, and home dÃ©cor pieces. Each item reflects fine craftsmanship, traditional techniques, and natural beauty.</p>
                <Link to="/contact" className="cat-btn">Request Catalog</Link>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Business Advantage */}
      <section className="ws-advantage-section py-10">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2>Your <span style={{ color: 'var(--color-brand-base)' }}>Business Advantage</span></h2>
            <p>Why Partner with Us for Wholesale Supply?</p>
          </div>
          <div className="advantage-grid">
            {advantages.map((adv, index) => (
              <div className="adv-item" key={index} data-aos="fade-up" data-aos-delay={index * 50}>
                <div className="adv-icon">{adv.icon}</div>
                <div className="adv-content">
                  <h4>{adv.title}</h4>
                  <p>{adv.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Order Process */}
      <section className="ws-process-section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2>Simple <br /> <span style={{ color: 'var(--color-brand-base)' }}>Order Process</span></h2>
            <p>Streamlined for Your Convenience</p>
          </div>
          <div className="process-timeline">
            {processSteps.map((step, index) => (
              <div className="timeline-step" key={index} data-aos="fade-left" data-aos-delay={index * 100}>
                <div className="timeline-number">{step.num}</div>
                <div className="timeline-content">
                  <h4>{step.title}</h4>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="ws-cta-section" data-aos="zoom-in">
        <div className="ws-cta-inner">
          <h2>Ready To Scale <br /> <span style={{ color: 'var(--color-brand-base)' }}>Your Business</span>?</h2>
          <p>Partner with us for reliable bulk wholesale supply that ensures steady inventory and consistent quality for your customers. Let's discuss how we can support your growth with our extensive product range and flexible wholesale solutions.</p>
          <Link to="/contact" className="ws-btn">Start Wholesale Partnership</Link>
        </div>
      </section>

      {/* Why Partners Choose Us */}
      <section className="ws-partners-section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2>Why Wholesale <br /> <span style={{ color: 'var(--color-brand-base)' }}>Partners Choose Us</span></h2>
          </div>
          <div className="partners-grid">
            {partners.map((partner, index) => (
              <div className="partner-card" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="partner-icon">{partner.icon}</div>
                <h4>{partner.title}</h4>
                <p>{partner.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default BulkWholesaleSupply;
