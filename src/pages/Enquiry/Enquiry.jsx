import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronRight, ArrowLeft } from 'lucide-react';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import axios from 'axios';

const Enquiry = () => {
  const { id } = useParams();
  
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const headerRef = useScrollAnimation();
  const formRef = useScrollAnimation();

  useEffect(() => {
    window.scrollTo(0, 0);
    axios.get(`${import.meta.env.VITE_API_URL || 'http://localhost:3000'}/products/${id}`)
      .then(res => {
        setProduct(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching product:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div className="min-h-screen bg-[#15110F] flex items-center justify-center text-white">Loading...</div>;
  }

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col bg-[#15110F]">
        <div className="text-center p-20">
          <h2 className="text-white text-3xl font-serif">Product <br /> <span style={{ color: 'var(--color-brand-base)' }}>not found</span></h2>
          <Link to="/" className="text-[#8b6b55] hover:underline font-medium">Return to Home</Link>
        </div>
      </div>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Enquiry sent successfully!");
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#15110F]">
      <main className="flex-1 max-w-[1200px] mx-auto p-8 w-full">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-[0.85rem] text-[#b5aaa0] mb-8 [&_a]:text-[#8b6b55] [&_a]:font-medium hover:[&_a]:underline">
          <Link to="/">Home</Link>
          <ChevronRight size={14} />
          <span>categories</span>
          <ChevronRight size={14} />
          <Link to={`/product/${product._id}`}>{product.productName}</Link>
          <ChevronRight size={14} />
          <span className="text-white font-semibold">Product Enquiry</span>
        </nav>

        <div className="bg-[#15110F] rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.5)] p-12 max-w-[900px] mx-auto max-md:p-8">
          <div className="text-center mb-12" ref={headerRef} style={{opacity:0,transform:'translateY(30px)',transition:'opacity 0.7s ease,transform 0.7s ease'}}>
            <Link to={`/product/${product._id}`} className="inline-flex items-center gap-2 text-[#b5aaa0] no-underline font-semibold text-[0.9rem] mb-6 transition-colors duration-200 hover:text-[#8b6b55]"><ArrowLeft size={18} /> Back to Product</Link>
            <h1 className="font-serif text-[2.5rem] text-white mb-4">Product Enquiry</h1>
            <p className="text-[#b5aaa0] max-w-[600px] mx-auto leading-relaxed">Looking for a specialized quote? Fill out the form below and our team will get back to you with custom pricing and details.</p>
            
            <div className="mt-10 flex flex-col items-center gap-4">
              <span className="text-[0.9rem] font-semibold text-[#8b6b55] uppercase tracking-[1px]">Inquiry Details For</span>
              <div className="flex items-center gap-6 bg-[#15110F] border border-[#2c241c] py-4 px-6 rounded-lg text-left">
                <img src={product.mainImage || 'https://images.unsplash.com/photo-1578500494198-246f612d3b3d?q=80&w=500&auto=format&fit=crop'} alt={product.productName} className="w-20 h-20 object-cover rounded" />
                <div className="productCardInfo">
                  <h3 className="font-serif text-white text-[1.2rem] mb-1">{product.productName}</h3>
                  <p className="text-[0.85rem] text-[#888888] m-0">SKU: {product.specifications ? product.specifications['SKU / Code'] : product.sku || 'N/A'}</p>
                </div>
              </div>
            </div>
          </div>

          <form className="form" onSubmit={handleSubmit} ref={formRef} style={{opacity:0,transform:'translateY(40px)',transition:'opacity 0.7s ease,transform 0.7s ease,transition-delay:0.15s'}}>
            {/* Section 1: Personal Info */}
            <div className="mb-12">
              <h2 className="font-serif text-[1.4rem] text-white border-b-2 border-[#f0e6d2] pb-3 mb-6">Personal <br /> <span style={{ color: 'var(--color-brand-base)' }}>Information</span></h2>
              <div className="grid grid-cols-2 gap-6 max-md:grid-cols-1">
                <div className="flex flex-col gap-2">
                  <label className="font-semibold text-[0.9rem] text-white">Full Name *</label>
                  <input type="text" placeholder="E.g. John Doe" required className="py-[0.9rem] px-[1.2rem] border border-[#2c241c] rounded-md font-sans text-[0.95rem] bg-[#15110F] text-white transition-all duration-200 focus:outline-none focus:border-[#8b6b55] focus:shadow-[0_0_0_3px_rgba(139,107,85,0.1)]" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-semibold text-[0.9rem] text-white">Email Address *</label>
                  <input type="email" placeholder="john@example.com" required className="py-[0.9rem] px-[1.2rem] border border-[#2c241c] rounded-md font-sans text-[0.95rem] bg-[#15110F] text-white transition-all duration-200 focus:outline-none focus:border-[#8b6b55] focus:shadow-[0_0_0_3px_rgba(139,107,85,0.1)]" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-semibold text-[0.9rem] text-white">Mobile Number *</label>
                  <input type="tel" placeholder="+00 Phone Number" required className="py-[0.9rem] px-[1.2rem] border border-[#2c241c] rounded-md font-sans text-[0.95rem] bg-[#15110F] text-white transition-all duration-200 focus:outline-none focus:border-[#8b6b55] focus:shadow-[0_0_0_3px_rgba(139,107,85,0.1)]" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-semibold text-[0.9rem] text-white">WhatsApp Number <span className="font-normal text-[#999999] text-[0.8rem]">(Optional)</span></label>
                  <input type="tel" placeholder="WhatsApp Number" className="py-[0.9rem] px-[1.2rem] border border-[#2c241c] rounded-md font-sans text-[0.95rem] bg-[#15110F] text-white transition-all duration-200 focus:outline-none focus:border-[#8b6b55] focus:shadow-[0_0_0_3px_rgba(139,107,85,0.1)]" />
                </div>
                <div className="flex flex-col gap-2 col-span-full">
                  <label className="font-semibold text-[0.9rem] text-white">Company Name *</label>
                  <input type="text" placeholder="Your Business Name" required className="py-[0.9rem] px-[1.2rem] border border-[#2c241c] rounded-md font-sans text-[0.95rem] bg-[#15110F] text-white transition-all duration-200 focus:outline-none focus:border-[#8b6b55] focus:shadow-[0_0_0_3px_rgba(139,107,85,0.1)]" />
                </div>
              </div>
            </div>

            {/* Section 2: Location Details */}
            <div className="mb-12">
              <h2 className="font-serif text-[1.4rem] text-white border-b-2 border-[#f0e6d2] pb-3 mb-6">Location <br /> <span style={{ color: 'var(--color-brand-base)' }}>Details</span></h2>
              <div className="grid grid-cols-2 gap-6 max-md:grid-cols-1">
                <div className="flex flex-col gap-2">
                  <label className="font-semibold text-[0.9rem] text-white">Country *</label>
                  <select required defaultValue="" className="py-[0.9rem] px-[1.2rem] border border-[#2c241c] rounded-md font-sans text-[0.95rem] bg-[#15110F] text-white transition-all duration-200 focus:outline-none focus:border-[#8b6b55] focus:shadow-[0_0_0_3px_rgba(139,107,85,0.1)] appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'%23666666\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'%3e%3cpolyline points=\'6 9 12 15 18 9\'%3e%3c/polyline%3e%3c/svg%3e')] bg-no-repeat bg-[position:right_1rem_center] bg-[length:1em]">
                    <option value="" disabled>Search country...</option>
                    <option value="US">United States</option>
                    <option value="IN">India</option>
                    <option value="UK">United Kingdom</option>
                    <option value="AU">Australia</option>
                    <option value="CA">Canada</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-semibold text-[0.9rem] text-white">State / Province *</label>
                  <input type="text" placeholder="State" required className="py-[0.9rem] px-[1.2rem] border border-[#2c241c] rounded-md font-sans text-[0.95rem] bg-[#15110F] text-white transition-all duration-200 focus:outline-none focus:border-[#8b6b55] focus:shadow-[0_0_0_3px_rgba(139,107,85,0.1)]" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-semibold text-[0.9rem] text-white">City *</label>
                  <input type="text" placeholder="City" required className="py-[0.9rem] px-[1.2rem] border border-[#2c241c] rounded-md font-sans text-[0.95rem] bg-[#15110F] text-white transition-all duration-200 focus:outline-none focus:border-[#8b6b55] focus:shadow-[0_0_0_3px_rgba(139,107,85,0.1)]" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-semibold text-[0.9rem] text-white">Order Source *</label>
                  <select required defaultValue="" className="py-[0.9rem] px-[1.2rem] border border-[#2c241c] rounded-md font-sans text-[0.95rem] bg-[#15110F] text-white transition-all duration-200 focus:outline-none focus:border-[#8b6b55] focus:shadow-[0_0_0_3px_rgba(139,107,85,0.1)] appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'%23666666\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'%3e%3cpolyline points=\'6 9 12 15 18 9\'%3e%3c/polyline%3e%3c/svg%3e')] bg-no-repeat bg-[position:right_1rem_center] bg-[length:1em]">
                    <option value="" disabled>Select Option</option>
                    <option value="retail">Retail</option>
                    <option value="wholesale">Wholesale</option>
                    <option value="distributor">Distributor</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Section 3: Project Requirements */}
            <div className="mb-12">
              <h2 className="font-serif text-[1.4rem] text-white border-b-2 border-[#f0e6d2] pb-3 mb-6">Project <br /> <span style={{ color: 'var(--color-brand-base)' }}>Requirements</span></h2>
              <div className="grid grid-cols-2 gap-6 max-md:grid-cols-1">
                <div className="flex flex-col gap-2">
                  <label className="font-semibold text-[0.9rem] text-white">Total Quantity *</label>
                  <input type="number" min="1" defaultValue="1" required className="py-[0.9rem] px-[1.2rem] border border-[#2c241c] rounded-md font-sans text-[0.95rem] bg-[#15110F] text-white transition-all duration-200 focus:outline-none focus:border-[#8b6b55] focus:shadow-[0_0_0_3px_rgba(139,107,85,0.1)]" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-semibold text-[0.9rem] text-white">Approx. Budget *</label>
                  <input type="text" placeholder="Budget Range" required className="py-[0.9rem] px-[1.2rem] border border-[#2c241c] rounded-md font-sans text-[0.95rem] bg-[#15110F] text-white transition-all duration-200 focus:outline-none focus:border-[#8b6b55] focus:shadow-[0_0_0_3px_rgba(139,107,85,0.1)]" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-semibold text-[0.9rem] text-white">Shipping Terms *</label>
                  <select required defaultValue="" className="py-[0.9rem] px-[1.2rem] border border-[#2c241c] rounded-md font-sans text-[0.95rem] bg-[#15110F] text-white transition-all duration-200 focus:outline-none focus:border-[#8b6b55] focus:shadow-[0_0_0_3px_rgba(139,107,85,0.1)] appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'%23666666\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'%3e%3cpolyline points=\'6 9 12 15 18 9\'%3e%3c/polyline%3e%3c/svg%3e')] bg-no-repeat bg-[position:right_1rem_center] bg-[length:1em]">
                    <option value="" disabled>FOB, CIF, etc.</option>
                    <option value="FOB">FOB</option>
                    <option value="CIF">CIF</option>
                    <option value="EXW">EXW</option>
                    <option value="DDP">DDP</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-semibold text-[0.9rem] text-white">Destination Port</label>
                  <input type="text" placeholder="Port Name" className="py-[0.9rem] px-[1.2rem] border border-[#2c241c] rounded-md font-sans text-[0.95rem] bg-[#15110F] text-white transition-all duration-200 focus:outline-none focus:border-[#8b6b55] focus:shadow-[0_0_0_3px_rgba(139,107,85,0.1)]" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-semibold text-[0.9rem] text-white">GST Number <span className="font-normal text-[#999999] text-[0.8rem]">(Optional for International)</span></label>
                  <input type="text" placeholder="GST Number" className="py-[0.9rem] px-[1.2rem] border border-[#2c241c] rounded-md font-sans text-[0.95rem] bg-[#15110F] text-white transition-all duration-200 focus:outline-none focus:border-[#8b6b55] focus:shadow-[0_0_0_3px_rgba(139,107,85,0.1)]" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-semibold text-[0.9rem] text-white">Requested Date</label>
                  <input type="date" className="py-[0.9rem] px-[1.2rem] border border-[#2c241c] rounded-md font-sans text-[0.95rem] bg-[#15110F] text-white transition-all duration-200 focus:outline-none focus:border-[#8b6b55] focus:shadow-[0_0_0_3px_rgba(139,107,85,0.1)]" />
                </div>
                <div className="flex flex-col gap-2 col-span-full">
                  <label className="font-semibold text-[0.9rem] text-white">Detailed Message *</label>
                  <textarea placeholder="Describe your specific needs..." rows="5" required className="py-[0.9rem] px-[1.2rem] border border-[#2c241c] rounded-md font-sans text-[0.95rem] bg-[#15110F] text-white transition-all duration-200 focus:outline-none focus:border-[#8b6b55] focus:shadow-[0_0_0_3px_rgba(139,107,85,0.1)]"></textarea>
                </div>
              </div>
            </div>

            <button type="submit" className="w-full p-[1.2rem] bg-white text-black border-none rounded-md font-sans text-[1.1rem] font-semibold uppercase tracking-[1px] cursor-pointer transition-colors duration-200 mt-4 hover:bg-[#8b6b55] hover:text-white">Send Enquiry</button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Enquiry;
