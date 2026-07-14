import React, { useState } from 'react';
import { FaFileAlt, FaCheck } from 'react-icons/fa';
import './CreateQuotation.css';

const CreateQuotation = () => {
  const [formData, setFormData] = useState({
    customerName: 'Ankit',
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Quotation Saved Successfully!');
  };

  return (
    <div className="create-quotation-page fade-in">
      <div className="cq-header">
        <h2><FaFileAlt className="cq-header-icon" /> Create Quotation (Retailer)</h2>
      </div>

      <div className="cq-card">
        <div className="cq-card-header">
          <h3>QUOTATION DETAILS</h3>
        </div>
        
        <form className="cq-form" onSubmit={handleSubmit}>
          
          <div className="cq-form-group">
            <label>Customer Name</label>
            <input 
              type="text" 
              name="customerName"
              value={formData.customerName} 
              onChange={handleChange}
            />
          </div>

          <div className="cq-form-group">
            <label>Product</label>
            <input 
              type="text" 
              name="product"
              value={formData.product} 
              onChange={handleChange}
            />
          </div>

          <div className="cq-form-group">
            <label>Quantity</label>
            <input 
              type="number" 
              name="quantity"
              value={formData.quantity} 
              onChange={handleChange}
            />
          </div>

          <div className="cq-form-group">
            <label>Country</label>
            <input 
              type="text" 
              name="country"
              value={formData.country} 
              onChange={handleChange}
            />
          </div>

          <div className="cq-form-group">
            <label>Rate (per unit)</label>
            <input 
              type="number" 
              name="rate"
              value={formData.rate} 
              onChange={handleChange}
            />
          </div>

          <div className="cq-form-group">
            <label>GST %</label>
            <input 
              type="number" 
              name="gstPercent"
              value={formData.gstPercent} 
              onChange={handleChange}
            />
          </div>

          <div className="cq-form-group">
            <label>Subtotal</label>
            <input 
              type="number" 
              name="subtotal"
              value={formData.subtotal} 
              onChange={handleChange}
            />
          </div>

          <div className="cq-form-group">
            <label>GST Amount</label>
            <input 
              type="number" 
              name="gstAmount"
              value={formData.gstAmount} 
              onChange={handleChange}
            />
          </div>

          <div className="cq-form-group">
            <label>Total Amount</label>
            <input 
              type="number" 
              name="totalAmount"
              value={formData.totalAmount} 
              onChange={handleChange}
            />
          </div>

          <div className="cq-form-group">
            <label>Valid Till</label>
            <input 
              type="date" 
              name="validTill"
              value={formData.validTill} 
              onChange={handleChange}
            />
          </div>

          <div className="cq-form-actions">
            <button type="submit" className="cq-save-btn">
              <FaCheck /> Save Quotation
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default CreateQuotation;
