import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const PartnershipForm = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#15110F] min-h-screen pt-[120px] pb-[80px] px-5">
      <div className="max-w-[800px] mx-auto bg-[#1C1713] border border-[#2c241c] p-[40px] md:p-[60px] rounded-[4px] relative">
        <Link to="/services/wholesale" className="inline-flex items-center gap-2 text-[#b5aaa0] hover:text-[#c8956c] transition-colors no-underline mb-8 text-[0.9rem]">
          <ArrowLeft size={16} /> Back to Wholesale Service
        </Link>
        
        <div className="text-center mb-[40px]">
          <h1 className="text-3xl md:text-4xl font-serif text-white uppercase tracking-[1px] mb-4">Wholesale Partnership <br /> <span className="text-[#c8956c]">Application</span></h1>
          <p className="text-[#b5aaa0] leading-[1.6]">Fill out the form below and our wholesale team will get back to you within 24 hours to discuss partnership opportunities.</p>
        </div>
        
        <form className="flex flex-col gap-6" onSubmit={(e) => { e.preventDefault(); alert('Application submitted successfully!'); }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-white text-[0.9rem] uppercase tracking-[1px]">Company Name *</label>
              <input type="text" className="w-full bg-[#15110F] border border-[#2c241c] text-white p-4 focus:outline-none focus:border-[#c8956c] transition-colors rounded-[2px]" required placeholder="Your Company Ltd." />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-white text-[0.9rem] uppercase tracking-[1px]">Contact Person *</label>
              <input type="text" className="w-full bg-[#15110F] border border-[#2c241c] text-white p-4 focus:outline-none focus:border-[#c8956c] transition-colors rounded-[2px]" required placeholder="John Doe" />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-white text-[0.9rem] uppercase tracking-[1px]">Email Address *</label>
              <input type="email" className="w-full bg-[#15110F] border border-[#2c241c] text-white p-4 focus:outline-none focus:border-[#c8956c] transition-colors rounded-[2px]" required placeholder="john@company.com" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-white text-[0.9rem] uppercase tracking-[1px]">Phone Number</label>
              <input type="tel" className="w-full bg-[#15110F] border border-[#2c241c] text-white p-4 focus:outline-none focus:border-[#c8956c] transition-colors rounded-[2px]" placeholder="+1 234 567 8900" />
            </div>
          </div>
          
          <div className="flex flex-col gap-2">
            <label className="text-white text-[0.9rem] uppercase tracking-[1px]">Business Type</label>
            <select className="w-full bg-[#15110F] border border-[#2c241c] text-white p-4 focus:outline-none focus:border-[#c8956c] transition-colors appearance-none rounded-[2px] cursor-pointer">
              <option value="" className="bg-[#15110F]">Select your business type...</option>
              <option value="retail" className="bg-[#15110F]">Retail Store</option>
              <option value="distributor" className="bg-[#15110F]">Distributor / Wholesaler</option>
              <option value="interior" className="bg-[#15110F]">Interior Designer / Architect</option>
              <option value="hospitality" className="bg-[#15110F]">Hotel / Hospitality</option>
              <option value="other" className="bg-[#15110F]">Other</option>
            </select>
          </div>
          
          <div className="flex flex-col gap-2">
            <label className="text-white text-[0.9rem] uppercase tracking-[1px]">Message / Requirements *</label>
            <textarea rows="6" className="w-full bg-[#15110F] border border-[#2c241c] text-white p-4 focus:outline-none focus:border-[#c8956c] transition-colors resize-none rounded-[2px]" required placeholder="Tell us about your requirements, expected order volume, regions of operation, etc."></textarea>
          </div>
          
          <button type="submit" className="mt-6 w-full py-4 bg-[#c8956c] text-[#15110F] font-semibold text-[1rem] tracking-[2px] uppercase transition-all duration-300 hover:bg-[#b5855c] hover:-translate-y-1 shadow-none border-none cursor-pointer rounded-[2px]">
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
};

export default PartnershipForm;
