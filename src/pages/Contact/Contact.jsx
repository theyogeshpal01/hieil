import React, { useState, useEffect } from 'react';
import './Contact.css';
import { 
  Phone, 
  Mail, 
  MessageCircle, 
  MapPin, 
  Clock, 
  Send,
  Building,
  HelpCircle,
  AlertCircle,
  ChevronDown
} from 'lucide-react';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    { q: "What Is Your Response Time For Inquiries?", a: "We typically respond to all inquiries within 24 hours. For urgent matters, please use our 24/7 emergency line." },
    { q: "Do You Offer International Shipping?", a: "Yes, we offer seamless worldwide delivery with trusted logistics partners and transparent tracking." },
    { q: "Can I Visit Your Workshop?", a: "We welcome buyers to visit our facilities by appointment. Please contact our team to schedule a visit." },
    { q: "Do You Offer Custom Design Services?", a: "Absolutely. We offer tailored solutions designed to meet your specific market needs and brand requirements." }
  ];

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero-content" data-aos="fade-up">
          <span className="contact-tag">Contact Us</span>
          <h1 className="contact-title">Get In Touch With <span style={{ color: 'var(--color-brand-base)' }}>Us</span></h1>
          <p className="contact-subtitle">
            We'd love to hear from you! Whether you have questions about our categories, need assistance with your order, want to discuss a custom project, or just want to learn more about our handicrafts, our team is here to help. Reach out to us through any of the following methods.
          </p>
        </div>
      </section>

      {/* Quick Contacts */}
      <section className="quick-contacts-section">
        <div className="container">
          <div className="quick-contacts-grid">
            <div className="quick-contact-card" data-aos="fade-up" data-aos-delay="0">
              <div className="qc-icon"><Phone size={32} /></div>
              <h3>Call Us</h3>
              <p>Speak directly with our experts</p>
              <span className="qc-highlight">+91 9050001972</span>
            </div>
            
            <div className="quick-contact-card" data-aos="fade-up" data-aos-delay="100">
              <div className="qc-icon"><Mail size={32} /></div>
              <h3>Email Us</h3>
              <p>Send us your queries</p>
              <span className="qc-highlight">indiaexport@hieil.com</span>
            </div>
            
            <div className="quick-contact-card" data-aos="fade-up" data-aos-delay="200">
              <div className="qc-icon"><MessageCircle size={32} /></div>
              <h3>Whatsapp</h3>
              <p>Quick chat support</p>
              <span className="qc-highlight">+91 9050001972</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area (Form & Sidebar) */}
      <section className="contact-main-section">
        <div className="container">
          <div className="contact-layout">
            
            {/* Form Section */}
            <div className="contact-form-container" data-aos="fade-right">
              <h2>Send Us <br /> <span style={{ color: 'var(--color-brand-base)' }}>A Message</span></h2>
              <p className="form-intro">Have a specific inquiry? Fill out the form below and our team will get back to you shortly.</p>
              
              <form className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label>Full Name *</label>
                    <input type="text" placeholder="e.g. John Doe" />
                  </div>
                  <div className="form-group">
                    <label>Email Address *</label>
                    <input type="email" placeholder="john@example.com" />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Select Country *</label>
                    <div className="select-wrapper">
                      <select>
                        <option>Search country...</option>
                        <option>United States</option>
                        <option>United Kingdom</option>
                        <option>Australia</option>
                        <option>India</option>
                      </select>
                      <ChevronDown className="select-icon" size={18} />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Phone Number *</label>
                    <div className="phone-input">
                      <span className="country-code">+00</span>
                      <input type="text" placeholder="000 000 0000" />
                    </div>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Subject *</label>
                    <div className="select-wrapper">
                      <select>
                        <option>Select a subject</option>
                        <option>Product Inquiry</option>
                        <option>Order Status</option>
                        <option>Custom Project</option>
                        <option>Partnership</option>
                      </select>
                      <ChevronDown className="select-icon" size={18} />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Inquiry Category *</label>
                    <div className="select-wrapper">
                      <select>
                        <option>Select a category</option>
                        <option>Wholesale</option>
                        <option>Retail</option>
                        <option>Support</option>
                      </select>
                      <ChevronDown className="select-icon" size={18} />
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <label>Your Message *</label>
                  <textarea rows="5" placeholder="Write your message here..."></textarea>
                </div>

                <button type="button" className="btn-submit">
                  SEND MESSAGE <Send size={18} />
                </button>
              </form>
            </div>

            {/* Sidebar Section */}
            <div className="contact-sidebar" data-aos="fade-left">
              <div className="sidebar-card info-card">
                <h3>Contact Information</h3>
                
                <div className="info-item">
                  <MapPin className="info-icon" size={24} />
                  <div>
                    <h4>Our Showroom</h4>
                    <a href="#map" className="visit-link">Visit Virtual Map</a>
                  </div>
                </div>

                <div className="info-item">
                  <Clock className="info-icon" size={24} />
                  <div>
                    <h4>Business Hours</h4>
                    <p>Mon - Fri: 9:00 AM - 7:00 PM</p>
                    <p>Sat: 10:00 AM - 6:00 PM</p>
                  </div>
                </div>

                <div className="info-item">
                  <HelpCircle className="info-icon" size={24} />
                  <div>
                    <h4>Support Hours</h4>
                    <p>Phone Support: 24/7 Available</p>
                    <p>Email: within 24 hours</p>
                  </div>
                </div>
              </div>

              <div className="sidebar-card urgent-card">
                <AlertCircle className="urgent-bg-icon" size={120} />
                <div className="urgent-content">
                  <h3>Need Urgent Help?</h3>
                  <p>Connect with our dedicated support team directly for immediate assistance.</p>
                  <div className="urgent-phone">+91 9050001972</div>
                  <span className="urgent-tag">Available 24/7 for Global Support</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="office-locations-section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <p className="subtitle">Our Office Locations</p>
            <h2>Visit Us at Any <br /> <span style={{ color: 'var(--color-brand-base)' }}>of Our Convenient Locations</span></h2>
          </div>
          
          <div className="locations-grid">
            {/* Kota HQ */}
            <div className="location-card" data-aos="fade-up" data-aos-delay="0">
              <div className="location-image kota-bg"></div>
              <div className="location-details">
                <div className="location-title">
                  <div className="loc-icon-wrapper"><Building size={24} /></div>
                  <h4>Kota Headquarters</h4>
                </div>
                <ul className="loc-info-list">
                  <li><MapPin size={18} /> <span>Hind Import Export International (OPC) Pvt. Ltd. Ground Floor, Ganesh Nagar, Kota, 324005, Rajasthan, India</span></li>
                  <li><Phone size={18} /> <span>+91 9050001972</span></li>
                  <li><Mail size={18} /> <span>indiaexport@hieil.com</span></li>
                  <li><Clock size={18} /> <span>Mon-Sat: 9:00 AM - 7:00 PM</span></li>
                </ul>
                <button className="btn-loc-map">Kota Map <MapPin size={18} /></button>
              </div>
            </div>

            {/* Jaipur HQ */}
            <div className="location-card" data-aos="fade-up" data-aos-delay="100">
              <div className="location-image jaipur-bg"></div>
              <div className="location-details">
                <div className="location-title">
                  <div className="loc-icon-wrapper"><Building size={24} /></div>
                  <h4>Jaipur Headquarters</h4>
                </div>
                <ul className="loc-info-list">
                  <li><MapPin size={18} /> <span>Hind Import Export International (OPC) Pvt. Ltd. Ground Floor, Jaipur, 302021, Rajasthan, India</span></li>
                  <li><Phone size={18} /> <span>+91 9050001972</span></li>
                  <li><Mail size={18} /> <span>indiaexport@hieil.com</span></li>
                  <li><Clock size={18} /> <span>Mon-Sat: 9:30 AM - 7:30 PM</span></li>
                </ul>
                <button className="btn-loc-map">Jaipur Map <MapPin size={18} /></button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ & Support Layout */}
      <section className="faq-support-section">
        <div className="container">
          <div className="faq-support-layout">
            
            {/* FAQs */}
            <div className="faq-container" data-aos="fade-right">
              <p className="subtitle">Frequently Asked Questions</p>
              <h2>Quick Answers <br /> <span style={{ color: 'var(--color-brand-base)' }}>to Common Questions</span></h2>
              
              <div className="faq-list">
                {faqs.map((faq, index) => (
                  <div className="faq-item" key={index}>
                    <button 
                      className={`faq-question ${openFaq === index ? 'active' : ''}`}
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    >
                      {faq.q}
                      <ChevronDown size={20} className="faq-icon" />
                    </button>
                    <div className={`faq-answer ${openFaq === index ? 'open' : ''}`}>
                      <div className="faq-answer-inner">
                        {faq.a}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Support Details */}
            <div className="support-details" data-aos="fade-left">
              <div className="support-card business-hours">
                <h3><Clock size={24} /> Business Hours</h3>
                <ul>
                  <li><span>Monday - Friday</span> <span>9:00 AM - 7:00 PM</span></li>
                  <li><span>Saturday</span> <span>10:00 AM - 6:00 PM</span></li>
                  <li><span>Sunday</span> <span>11:00 AM - 5:00 PM</span></li>
                </ul>
              </div>

              <div className="support-card emergency-support">
                <h3><AlertCircle size={24} /> Need Urgent Assistance?</h3>
                <p>For urgent matters outside business hours, our emergency support line is available 24/7</p>
                
                <div className="emergency-contacts">
                  <div className="emerg-contact">
                    <div className="icon-circle phone"><Phone size={20} /></div>
                    <div>
                      <strong>+91-9050001972</strong>
                      <span>24/7 Emergency Line</span>
                    </div>
                  </div>
                  
                  <div className="emerg-contact">
                    <div className="icon-circle whatsapp"><MessageCircle size={20} /></div>
                    <div>
                      <strong>+91-9050001972</strong>
                      <span>WhatsApp Support</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Map Section */}
      <section id="map" className="contact-map-section">
         <iframe 
            title="Office Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113911.23861214088!2d75.71714036125071!3d26.885141679549525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4adf4c57e281%3A0xce1c63a0cf22e09!2sJaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
         ></iframe>
      </section>
    </div>
  );
};

export default Contact;
