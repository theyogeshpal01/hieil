import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Quote, Star, PenTool, Camera, CheckCircle, X, Upload } from 'lucide-react';
import axios from 'axios';
import Swal from 'sweetalert2';

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [brands, setBrands] = useState([]);
  
  // Modal states
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [showPhotoModal, setShowPhotoModal] = useState(false);
  const [showProjectModal, setShowProjectModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isProjectSubmitting, setIsProjectSubmitting] = useState(false);
  
  const [reviewForm, setReviewForm] = useState({ userName: '', userDesignation: '', city: '', rating: 5, message: '' });
  const [photoForm, setPhotoForm] = useState({ userName: '', userEmail: '' });
  const [projectForm, setProjectForm] = useState({ customerName: '', email: '', phone: '', location: '', message: '' });
  const [photoFiles, setPhotoFiles] = useState([]);
  const fileInputRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    axios.get(`${import.meta.env.VITE_API_URL || 'http://localhost:3000/api'}/testimonials`)
      .then(res => {
        // Filter out only APPROVED testimonials
        const approved = res.data.filter(t => t.status === 'APPROVED');
        setTestimonials(approved);
      })
      .catch(err => console.error(err));

    axios.get(`${import.meta.env.VITE_API_URL || 'http://localhost:3000/api'}/brands`)
      .then(res => {
        setBrands(res.data.data || res.data || []);
      })
      .catch(err => console.error(err));
  }, []);

  const handleReviewSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await axios.post(`${import.meta.env.VITE_API_URL || 'http://localhost:3000/api'}/testimonials`, reviewForm);
      setShowReviewModal(false);
      setReviewForm({ userName: '', userDesignation: '', city: '', rating: 5, message: '' });
      Swal.fire({
        title: 'Thank You!',
        text: 'Your review has been submitted successfully and is pending admin approval.',
        icon: 'success',
        background: '#1C1713',
        color: '#fff',
        confirmButtonColor: '#c8956c'
      });
    } catch (error) {
      console.error(error);
      Swal.fire('Error', 'Failed to submit review. Please try again.', 'error');
    }
    setIsSubmitting(false);
  };

  const handlePhotoSubmit = async (e) => {
    e.preventDefault();
    if (photoFiles.length === 0) {
      return Swal.fire('Wait', 'Please select at least one photo to share.', 'warning');
    }
    setIsSubmitting(true);
    try {
      // Upload photos first
      const uploadedUrls = [];
      for (const file of photoFiles) {
        const formData = new FormData();
        formData.append('file', file);
        const uploadRes = await axios.post(`${import.meta.env.VITE_API_URL || 'http://localhost:3000/api'}/upload`, formData);
        uploadedUrls.push(uploadRes.data.url);
      }
      
      // Submit user moment
      await axios.post(`${import.meta.env.VITE_API_URL || 'http://localhost:3000/api'}/submissions/user-moments`, {
        ...photoForm,
        submittedPhotos: uploadedUrls
      });
      
      setShowPhotoModal(false);
      setPhotoForm({ userName: '', userEmail: '' });
      setPhotoFiles([]);
      Swal.fire({
        title: 'Photos Shared!',
        text: 'Thank you! Your photos have been submitted and are pending admin approval to appear in the gallery.',
        icon: 'success',
        background: '#1C1713',
        color: '#fff',
        confirmButtonColor: '#c8956c'
      });
    } catch (error) {
      console.error(error);
      Swal.fire('Error', 'Failed to upload photos. Please try again.', 'error');
    }
    setIsSubmitting(false);
  };
  const handleProjectSubmit = async (e) => {
    e.preventDefault();
    setIsProjectSubmitting(true);
    try {
      await axios.post(`${import.meta.env.VITE_API_URL || 'http://localhost:3000/api'}/service-inquiries`, {
        ...projectForm,
        service: 'Custom Project Development'
      });
      Swal.fire({
        title: 'Success!',
        text: 'Your project inquiry has been submitted. We will contact you soon.',
        icon: 'success',
        background: '#1C1713',
        color: '#fff',
        confirmButtonColor: '#c8956c'
      });
      setShowProjectModal(false);
      setProjectForm({ customerName: '', email: '', phone: '', location: '', message: '' });
    } catch (error) {
      console.error(error);
      Swal.fire({
        title: 'Error',
        text: 'Failed to submit inquiry. Please try again.',
        icon: 'error',
        background: '#1C1713',
        color: '#fff',
        confirmButtonColor: '#c8956c'
      });
    }
    setIsProjectSubmitting(false);
  };

  const stats = [
    { value: '100%', label: 'Customizations' },
    { value: '100%', label: 'On-Time Delivery' }
  ];



  return (
    <div className="font-sans text-white bg-[#15110F] overflow-x-hidden relative">
      {/* Hero Section */}
      <section className="bg-[radial-gradient(circle_at_center,#1C1713_0%,#15110F_100%)] text-white pt-[120px] px-5 pb-[100px] text-center relative border-b border-[#2c241c]">
        <div className="max-w-[800px] mx-auto relative z-[2]" data-aos="fade-up">
          <span className="inline-block py-1.5 px-4 bg-transparent border border-[#4a3e35] text-[#c8956c] text-[0.75rem] font-semibold tracking-[3px] uppercase mb-[30px] rounded-[50px]">Testimonials</span>
          <h1 className="font-serif text-[3.5rem] font-normal mb-6 leading-[1.1] text-white max-md:text-[3.5rem] uppercase tracking-[1px]">What Our Customers <span style={{ color: 'var(--color-brand-base)' }}>Say</span></h1>
          <p className="text-[1.1rem] text-[#b5aaa0] leading-[1.8] max-w-[700px] mx-auto">
            Discover why thousands of customers trust HIEIL for their handicraft needs.They have helped homeowners, interior designers and businesses.These customers have transformed their spaces with HIEIL handmade products and great services.Many customers have shared their feedback.Homeowners and businesses read these testimonials to know more, about HIEIL.They see how HIEIL handmade categories and services are exceptional.HIEILs customers are very happy with their handicraft needs met.They trust HIEIL for all their handicraft requirements.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="pt-[100px] pb-[100px] bg-[#15110F] relative z-10">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="flex justify-center gap-[40px] flex-wrap max-md:gap-5">
            {stats.map((stat, index) => (
              <div className="bg-[rgba(21,17,15,0.95)] backdrop-blur-[10px] py-[40px] px-[60px] border border-[#2c241c] shadow-[0_20px_40px_rgba(0,0,0,0.6)] text-center w-[380px] transition-all duration-300 ease-in-out hover:border-[#4a3e35] hover:-translate-y-[5px] max-md:min-w-full" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                <h3 className="font-serif text-[2.5rem] font-normal text-[#c8956c] mb-[5px]">{stat.value}</h3>
                <p className="text-[#b5aaa0] font-medium text-[0.8rem] tracking-[1px] uppercase m-0">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Testimonial */}
      <section className="py-[60px] pb-[100px] bg-[#15110F]">
        <div className="max-w-[1200px] mx-auto px-5">
          {testimonials.length === 0 ? (
            <p className="text-center text-[#b5aaa0] text-lg">No testimonials to show yet. Be the first to write one!</p>
          ) : (
            testimonials.map((testimonial, idx) => (
              <div key={testimonial._id || idx} className="max-w-[800px] mx-auto bg-[#1C1713] py-[60px] px-[80px] max-[992px]:px-[40px] max-md:py-[40px] max-md:px-[20px] border border-[#2c241c] text-center relative transition-all duration-400 ease-in-out hover:border-[#4a3e35] hover:shadow-[0_10px_50px_rgba(194,163,115,0.05)] mb-[40px]" data-aos="zoom-in">
                <Quote className="text-[#c8956c] opacity-[0.15] absolute top-[40px] left-[40px] max-md:hidden" size={80} />
                <div className="text-[#c8956c] mb-[40px] flex justify-center gap-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={24} fill={i < (testimonial.rating || 5) ? "currentColor" : "none"} stroke={i < (testimonial.rating || 5) ? "currentColor" : "#dddddd"} />
                  ))}
                </div>
                <p className="font-serif text-[1.5rem] text-white leading-[1.6] italic font-light mb-[40px] relative z-1 max-md:text-[1.4rem] whitespace-pre-line">
                  "{testimonial.message}"
                </p>
                <div className="flex flex-col items-center">
                  <div className="w-[40px] h-[2px] bg-[#c8956c] mb-[20px]"></div>
                  <div className="testimonial-author">
                    <p className="text-[#b5aaa0] text-[0.9rem] tracking-[1px] m-0">I live in {testimonial.city}, and I work as a {testimonial.userDesignation}.</p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </section>

      {/* Trusted Brands Section */}
      <section className="py-[100px] bg-[#1C1713] border-t border-[#2c241c] border-b">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="text-center mb-[60px]" data-aos="fade-up">
            <h2 className='text-3xl md:text-5xl/15 font-serif font-normal text-white uppercase tracking-[1px] mb-[15px]'>Trusted By <br /> <span style={{ color: 'var(--color-brand-base)' }}>Leading Brands</span></h2>
            <p className="font-sans text-[1.1rem] font-normal text-[#b5aaa0] mb-12">Our clients include some of the most prestigious names in the industry</p>
          </div>
          <div className="flex justify-center flex-wrap gap-[30px]" data-aos="fade-up">
            {brands.map((brand, index) => (
              <div className="w-[180px] h-[100px] bg-[#15110F] border border-[#2c241c] flex items-center justify-center overflow-hidden transition-all duration-400 ease-in-out hover:border-[#c8956c] hover:shadow-[0_4px_20px_rgba(194,163,115,0.1)] hover:-translate-y-[5px] group" key={index}>
                {brand.image ? (
                  <img src={brand.image} alt={brand.title || 'Brand'} className="max-w-[80%] max-h-[80%] object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
                ) : (
                  <span className="text-[#8c8279] font-serif font-medium text-[1.3rem] tracking-[2px] uppercase transition-colors duration-400 ease-in-out group-hover:text-[#c8956c]">{brand.title || `Brand ${index + 1}`}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Action Sections */}
      <section className="py-[100px] bg-[#15110F]">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="grid grid-cols-2 gap-[40px] max-[992px]:grid-cols-1">
            {/* CTA 1: Create Success Story */}
            <div className="py-[60px] px-[50px] text-center flex flex-col items-center justify-center border border-[#2c241c] transition-all duration-400 ease-in-out hover:border-[#4a3e35] bg-gradient-to-br from-[#1C1713] to-[#15110F]" data-aos="fade-right">
              <CheckCircle className="mb-[25px] text-[#c8956c]" size={48} />
              <h2 className="font-serif text-[2.5rem] text-white mb-[20px] font-normal">Ready To Create <br /> <span style={{ color: 'var(--color-brand-base)' }}>Your Success Story?</span></h2>
              <p className="text-[1rem] text-[#b5aaa0] mb-[40px] leading-[1.8]">Join thousands of satisfied customers who have transformed their spaces with HIEIL handicrafts</p>
              <button onClick={() => setShowProjectModal(true)} className="inline-block py-[15px] px-[35px] bg-transparent text-[#c8956c] border border-[#4a3e35] font-medium no-underline text-[0.8rem] tracking-[2px] uppercase cursor-pointer transition-all duration-300 ease-in-out hover:border-[#c8956c] hover:bg-[rgba(194,163,115,0.05)] hover:text-[#c8956c]">Start Your Project</button>
            </div>

            {/* CTA 2: Share Experience */}
            <div className="py-[60px] px-[50px] text-center flex flex-col items-center justify-center border border-[#2c241c] transition-all duration-400 ease-in-out hover:border-[#4a3e35] bg-[#15110F]" data-aos="fade-left">
              <h2 className="font-serif text-[2.5rem] text-white mb-[20px] font-normal">Share <br /> <span style={{ color: 'var(--color-brand-base)' }}>Your Experience</span></h2>
              <p className="text-[#b5aaa0] text-[1rem] leading-[1.8] mb-[40px]">Loved our categories and services? We'd love to hear about your experience! Share your story and help others discover the quality and craftsmanship of HIEIL handicrafts.</p>
              <div className="flex gap-[15px] flex-wrap justify-center max-md:flex-col">
                <button onClick={() => setShowReviewModal(true)} className="flex items-center gap-[10px] py-[12px] px-[25px] bg-transparent text-[#c8956c] border border-[#4a3e35] font-medium text-[0.8rem] tracking-[2px] uppercase cursor-pointer transition-all duration-300 ease-in-out hover:border-[#c8956c] hover:bg-[rgba(194,163,115,0.05)] hover:text-[#c8956c] max-md:w-full max-md:justify-center"><PenTool size={18} /> Write a Review</button>
                <button onClick={() => setShowPhotoModal(true)} className="flex items-center gap-[10px] py-[12px] px-[25px] bg-transparent text-[#c8956c] border border-[#4a3e35] font-medium text-[0.8rem] tracking-[2px] uppercase cursor-pointer transition-all duration-300 ease-in-out hover:border-[#c8956c] hover:bg-[rgba(194,163,115,0.05)] hover:text-[#c8956c] max-md:w-full max-md:justify-center"><Camera size={18} /> Share Photos</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Review Modal */}
      {showReviewModal && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-[1000] p-5 backdrop-blur-sm">
          <div className="bg-[#1C1713] border border-[#2c241c] rounded-[20px] p-[40px] max-w-[600px] w-full relative max-h-[90vh] overflow-y-auto">
            <button onClick={() => setShowReviewModal(false)} className="absolute top-[20px] right-[20px] text-[#b5aaa0] hover:text-[#c8956c] bg-transparent border-none cursor-pointer">
              <X size={24} />
            </button>
            <h3 className="font-serif text-[2rem] text-white mb-[10px] uppercase">Write A Review</h3>
            <p className="text-[#b5aaa0] mb-[30px] text-[0.9rem]">Share your experience with HIEIL handicrafts.</p>
            
            <form onSubmit={handleReviewSubmit} className="flex flex-col gap-[20px]">
              <div className="grid grid-cols-2 gap-[20px] max-sm:grid-cols-1">
                <div>
                  <label className="block text-[#b5aaa0] text-[0.85rem] mb-[5px] uppercase tracking-[1px]">Your Name *</label>
                  <input required type="text" value={reviewForm.userName} onChange={e => setReviewForm({...reviewForm, userName: e.target.value})} className="w-full p-[12px] bg-[#15110F] border border-[#4a3e35] text-white rounded-[8px] outline-none focus:border-[#c8956c]" />
                </div>
                <div>
                  <label className="block text-[#b5aaa0] text-[0.85rem] mb-[5px] uppercase tracking-[1px]">Designation / Role *</label>
                  <input required type="text" value={reviewForm.userDesignation} onChange={e => setReviewForm({...reviewForm, userDesignation: e.target.value})} placeholder="e.g. Homeowner, Architect" className="w-full p-[12px] bg-[#15110F] border border-[#4a3e35] text-white rounded-[8px] outline-none focus:border-[#c8956c]" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-[20px] max-sm:grid-cols-1">
                <div>
                  <label className="block text-[#b5aaa0] text-[0.85rem] mb-[5px] uppercase tracking-[1px]">City *</label>
                  <input required type="text" value={reviewForm.city} onChange={e => setReviewForm({...reviewForm, city: e.target.value})} className="w-full p-[12px] bg-[#15110F] border border-[#4a3e35] text-white rounded-[8px] outline-none focus:border-[#c8956c]" />
                </div>
                <div>
                  <label className="block text-[#b5aaa0] text-[0.85rem] mb-[5px] uppercase tracking-[1px]">Rating *</label>
                  <select value={reviewForm.rating} onChange={e => setReviewForm({...reviewForm, rating: Number(e.target.value)})} className="w-full p-[12px] bg-[#15110F] border border-[#4a3e35] text-white rounded-[8px] outline-none focus:border-[#c8956c]">
                    <option value="5">5 Stars - Excellent</option>
                    <option value="4">4 Stars - Very Good</option>
                    <option value="3">3 Stars - Good</option>
                    <option value="2">2 Stars - Fair</option>
                    <option value="1">1 Star - Poor</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-[#b5aaa0] text-[0.85rem] mb-[5px] uppercase tracking-[1px]">Your Review *</label>
                <textarea required rows="4" value={reviewForm.message} onChange={e => setReviewForm({...reviewForm, message: e.target.value})} className="w-full p-[12px] bg-[#15110F] border border-[#4a3e35] text-white rounded-[8px] outline-none focus:border-[#c8956c] resize-y"></textarea>
              </div>
              <button disabled={isSubmitting} type="submit" className="mt-[10px] w-full py-[15px] bg-[#c8956c] text-[#15110F] font-bold tracking-[2px] uppercase rounded-[8px] hover:bg-[#b8855c] transition-colors disabled:opacity-70">
                {isSubmitting ? 'Submitting...' : 'Submit Review'}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Share Photos Modal */}
      {showPhotoModal && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-[1000] p-5 backdrop-blur-sm">
          <div className="bg-[#1C1713] border border-[#2c241c] rounded-[20px] p-[40px] max-w-[600px] w-full relative max-h-[90vh] overflow-y-auto">
            <button onClick={() => setShowPhotoModal(false)} className="absolute top-[20px] right-[20px] text-[#b5aaa0] hover:text-[#c8956c] bg-transparent border-none cursor-pointer">
              <X size={24} />
            </button>
            <h3 className="font-serif text-[2rem] text-white mb-[10px] uppercase">Share Your Photos</h3>
            <p className="text-[#b5aaa0] mb-[30px] text-[0.9rem]">Showcase how you've styled our products in your space.</p>
            
            <form onSubmit={handlePhotoSubmit} className="flex flex-col gap-[20px]">
              <div>
                <label className="block text-[#b5aaa0] text-[0.85rem] mb-[5px] uppercase tracking-[1px]">Your Name *</label>
                <input required type="text" value={photoForm.userName} onChange={e => setPhotoForm({...photoForm, userName: e.target.value})} className="w-full p-[12px] bg-[#15110F] border border-[#4a3e35] text-white rounded-[8px] outline-none focus:border-[#c8956c]" />
              </div>
              <div>
                <label className="block text-[#b5aaa0] text-[0.85rem] mb-[5px] uppercase tracking-[1px]">Email Address *</label>
                <input required type="email" value={photoForm.userEmail} onChange={e => setPhotoForm({...photoForm, userEmail: e.target.value})} className="w-full p-[12px] bg-[#15110F] border border-[#4a3e35] text-white rounded-[8px] outline-none focus:border-[#c8956c]" />
              </div>
              <div>
                <label className="block text-[#b5aaa0] text-[0.85rem] mb-[5px] uppercase tracking-[1px]">Select Photos *</label>
                <div 
                  className="w-full p-[30px] border-2 border-dashed border-[#4a3e35] rounded-[8px] text-center cursor-pointer hover:border-[#c8956c] bg-[#15110F] transition-colors"
                  onClick={() => fileInputRef.current?.click()}
                >
                  <Upload size={32} className="text-[#c8956c] mx-auto mb-[10px]" />
                  <p className="text-[#b5aaa0] m-0 mb-[5px]">Click to browse files</p>
                  <p className="text-[#8c8279] text-[0.8rem] m-0">You selected {photoFiles.length} file(s)</p>
                </div>
                <input 
                  type="file" 
                  multiple 
                  accept="image/*" 
                  className="hidden" 
                  ref={fileInputRef} 
                  onChange={e => setPhotoFiles(Array.from(e.target.files))} 
                />
              </div>
              <button disabled={isSubmitting} type="submit" className="mt-[10px] w-full py-[15px] bg-[#c8956c] text-[#15110F] font-bold tracking-[2px] uppercase rounded-[8px] hover:bg-[#b8855c] transition-colors disabled:opacity-70">
                {isSubmitting ? 'Uploading...' : 'Upload & Share'}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Project Modal */}
      {showProjectModal && (
        <div className="fixed inset-0 bg-black/80 z-[100] flex items-center justify-center p-5 animate-[fadeIn_0.3s_ease-out]">
          <div className="bg-[#1C1713] w-full max-w-[600px] rounded-lg shadow-[0_10px_40px_rgba(0,0,0,0.5)] border border-[#2c241c] relative animate-[slideUp_0.4s_ease-out]">
            <button 
              onClick={() => setShowProjectModal(false)}
              className="absolute top-4 right-4 bg-transparent border-none text-[#b5aaa0] hover:text-[#c8956c] cursor-pointer transition-colors duration-200"
            >
              <X size={24} />
            </button>
            <div className="p-8">
              <h3 className="font-serif text-[2rem] text-white mb-2 text-center">Start Your Project</h3>
              <p className="text-[#b5aaa0] text-center mb-6 text-[0.95rem]">Fill out the details below and we'll get in touch with you shortly.</p>
              
              <form onSubmit={handleProjectSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
                  <div className="flex flex-col gap-1.5 text-left">
                    <label className="text-white text-[0.85rem] font-medium">Name *</label>
                    <input type="text" name="customerName" required value={projectForm.customerName} onChange={(e) => setProjectForm({...projectForm, customerName: e.target.value})} className="bg-[#15110F] border border-[#2c241c] rounded p-3 text-white text-[0.95rem] outline-none transition-colors duration-200 focus:border-[#c8956c]" placeholder="Your Name" />
                  </div>
                  <div className="flex flex-col gap-1.5 text-left">
                    <label className="text-white text-[0.85rem] font-medium">Email *</label>
                    <input type="email" name="email" required value={projectForm.email} onChange={(e) => setProjectForm({...projectForm, email: e.target.value})} className="bg-[#15110F] border border-[#2c241c] rounded p-3 text-white text-[0.95rem] outline-none transition-colors duration-200 focus:border-[#c8956c]" placeholder="Your Email" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
                  <div className="flex flex-col gap-1.5 text-left">
                    <label className="text-white text-[0.85rem] font-medium">Phone *</label>
                    <input type="tel" name="phone" required value={projectForm.phone} onChange={(e) => setProjectForm({...projectForm, phone: e.target.value})} className="bg-[#15110F] border border-[#2c241c] rounded p-3 text-white text-[0.95rem] outline-none transition-colors duration-200 focus:border-[#c8956c]" placeholder="Phone Number" />
                  </div>
                  <div className="flex flex-col gap-1.5 text-left">
                    <label className="text-white text-[0.85rem] font-medium">Location</label>
                    <input type="text" name="location" value={projectForm.location} onChange={(e) => setProjectForm({...projectForm, location: e.target.value})} className="bg-[#15110F] border border-[#2c241c] rounded p-3 text-white text-[0.95rem] outline-none transition-colors duration-200 focus:border-[#c8956c]" placeholder="City, Country" />
                  </div>
                </div>
                <div className="flex flex-col gap-1.5 text-left">
                  <label className="text-white text-[0.85rem] font-medium">Project Details *</label>
                  <textarea name="message" required value={projectForm.message} onChange={(e) => setProjectForm({...projectForm, message: e.target.value})} className="bg-[#15110F] border border-[#2c241c] rounded p-3 text-white text-[0.95rem] outline-none transition-colors duration-200 focus:border-[#c8956c] min-h-[120px] resize-y" placeholder="Tell us about your project requirements..."></textarea>
                </div>
                
                <button type="submit" disabled={isProjectSubmitting} className="mt-2 bg-[#c8956c] text-[#110e0c] border border-[#c8956c] rounded py-3 px-6 font-semibold text-[0.95rem] tracking-[1px] uppercase cursor-pointer transition-all duration-300 hover:bg-transparent hover:text-[#c8956c] disabled:opacity-50">
                  {isProjectSubmitting ? 'Submitting...' : 'Submit Inquiry'}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Testimonials;
