import React, { useState } from 'react';
import { FaFileAlt, FaCheck } from 'react-icons/fa';
import Swal from 'sweetalert2';
import api from '../../../services/api'; // Or just use fetch if api isn't easily importable

const CreateQuotation = () => {
  const [formData, setFormData] = useState({
    customerName: 'Ankit',
    customerEmail: '', // Added email field
    product: 'Blue Pottery Tortoise Goodluck Gift-Paper Weight (Set of 2)',
    quantity: '500',
    country: 'USA',
    rate: '',
    gstPercent: '18',
    subtotal: '',
    gstAmount: '',
    totalAmount: '',
    validTill: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.customerEmail) {
      Swal.fire({
        icon: 'error',
        title: 'Missing Email',
        text: 'Please enter the Customer Email to send the quotation.',
        confirmButtonColor: '#3b82f6'
      });
      return;
    }

    setIsSubmitting(true);
    Swal.fire({
      title: 'Sending Quotation...',
      text: 'Please wait while the email is being sent.',
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      }
    });

    try {
      const response = await fetch('http://localhost:3000/api/quotation-email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        Swal.fire({
          icon: 'success',
          title: 'Sent!',
          text: 'Quotation has been successfully sent to the customer.',
          confirmButtonColor: '#22c55e'
        });
      } else {
        throw new Error(data.message || 'Failed to send');
      }
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: error.message || 'An error occurred while sending the quotation.',
        confirmButtonColor: '#ef4444'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="p-5 fade-in">
      <div className="mb-5 flex">
        <h1 className="flex items-center font-['Plus_Jakarta_Sans',serif] text-[22px] text-black m-0 font-bold">
          <FaFileAlt className="mr-2.5 text-[20px] text-black" /> Create Quotation (Retailer)
        </h1>
      </div>

      <div className="bg-white rounded-lg border border-slate-200 shadow-[0_1px_3px_rgba(0,0,0,0.05)] overflow-hidden">
        <div className="p-5 border-b border-slate-200">
          <h3 className="m-0 text-slate-700 text-base font-bold font-['Plus_Jakarta_Sans',serif] uppercase tracking-[0.5px]">QUOTATION DETAILS</h3>
        </div>
        
        <form className="p-6 flex flex-col gap-5" onSubmit={handleSubmit}>
          
          <div className="flex flex-col gap-2">
            <label className="text-slate-500 text-sm font-medium">Customer Name</label>
            <input 
              type="text" 
              name="customerName"
              value={formData.customerName} 
              onChange={handleChange}
              className="px-4 py-3 border border-slate-300 rounded-md text-sm text-slate-700 bg-white transition-all duration-200 font-['Inter',sans-serif] focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-slate-500 text-sm font-medium">Customer Email (Required for sending)</label>
            <input 
              type="email" 
              name="customerEmail"
              required
              value={formData.customerEmail} 
              onChange={handleChange}
              className="px-4 py-3 border border-slate-300 rounded-md text-sm text-slate-700 bg-white transition-all duration-200 font-['Inter',sans-serif] focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-slate-500 text-sm font-medium">Product</label>
            <input 
              type="text" 
              name="product"
              value={formData.product} 
              onChange={handleChange}
              className="px-4 py-3 border border-slate-300 rounded-md text-sm text-slate-700 bg-white transition-all duration-200 font-['Inter',sans-serif] focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-slate-500 text-sm font-medium">Quantity</label>
            <input 
              type="number" 
              name="quantity"
              value={formData.quantity} 
              onChange={handleChange}
              className="px-4 py-3 border border-slate-300 rounded-md text-sm text-slate-700 bg-white transition-all duration-200 font-['Inter',sans-serif] focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-slate-500 text-sm font-medium">Country</label>
            <input 
              type="text" 
              name="country"
              value={formData.country} 
              onChange={handleChange}
              className="px-4 py-3 border border-slate-300 rounded-md text-sm text-slate-700 bg-white transition-all duration-200 font-['Inter',sans-serif] focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-slate-500 text-sm font-medium">Rate (per unit)</label>
            <input 
              type="number" 
              name="rate"
              value={formData.rate} 
              onChange={handleChange}
              className="px-4 py-3 border border-slate-300 rounded-md text-sm text-slate-700 bg-white transition-all duration-200 font-['Inter',sans-serif] focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-slate-500 text-sm font-medium">GST %</label>
            <input 
              type="number" 
              name="gstPercent"
              value={formData.gstPercent} 
              onChange={handleChange}
              className="px-4 py-3 border border-slate-300 rounded-md text-sm text-slate-700 bg-white transition-all duration-200 font-['Inter',sans-serif] focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-slate-500 text-sm font-medium">Subtotal</label>
            <input 
              type="number" 
              name="subtotal"
              value={formData.subtotal} 
              onChange={handleChange}
              className="px-4 py-3 border border-slate-300 rounded-md text-sm text-slate-700 bg-white transition-all duration-200 font-['Inter',sans-serif] focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-slate-500 text-sm font-medium">GST Amount</label>
            <input 
              type="number" 
              name="gstAmount"
              value={formData.gstAmount} 
              onChange={handleChange}
              className="px-4 py-3 border border-slate-300 rounded-md text-sm text-slate-700 bg-white transition-all duration-200 font-['Inter',sans-serif] focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-slate-500 text-sm font-medium">Total Amount</label>
            <input 
              type="number" 
              name="totalAmount"
              value={formData.totalAmount} 
              onChange={handleChange}
              className="px-4 py-3 border border-slate-300 rounded-md text-sm text-slate-700 bg-white transition-all duration-200 font-['Inter',sans-serif] focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-slate-500 text-sm font-medium">Valid Till</label>
            <input 
              type="date" 
              name="validTill"
              value={formData.validTill} 
              onChange={handleChange}
              className="px-4 py-3 border border-slate-300 rounded-md text-sm text-slate-700 bg-white transition-all duration-200 font-['Inter',sans-serif] focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
            />
          </div>

          <div className="mt-2.5 flex justify-start">
            <button type="submit" className="flex items-center gap-2 bg-green-500 text-white border-none px-5 py-3 rounded text-[15px] font-semibold cursor-pointer transition-colors duration-200 hover:bg-green-600">
              <FaCheck /> Save Quotation
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default CreateQuotation;
