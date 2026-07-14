import React from 'react';
import { FaEnvelope, FaFileAlt, FaShoppingCart, FaWallet, FaFileInvoiceDollar, FaReceipt, FaTruck, FaClock, FaCheckCircle, FaChartLine, FaDollarSign } from 'react-icons/fa';
import './ReportDashboard.css';

const ReportDashboard = () => {
  return (
    <div className="report-dashboard-page">
      <div className="rd-header">
        <h1>Report Dashboard</h1>
        <div className="rd-breadcrumbs">
          <span style={{color: '#3b82f6'}}>🏠 Home</span> / <span>Report Dashboard</span>
        </div>
      </div>

      {/* Sales Funnel Section */}
      <div className="rd-section">
        <h2 className="rd-section-title">
          <FaChartLine style={{marginRight: '8px', color: '#4b5563'}} /> Sales Funnel
        </h2>
        <div className="rd-grid rd-grid-4">
          <div className="rd-card">
            <FaEnvelope className="rd-icon" style={{color: '#0ea5e9'}} />
            <div className="rd-value">14</div>
            <div className="rd-label">Inquiries</div>
          </div>
          <div className="rd-card">
            <FaFileAlt className="rd-icon" style={{color: '#3b82f6'}} />
            <div className="rd-value">12</div>
            <div className="rd-label">Quotations</div>
          </div>
          <div className="rd-card">
            <FaShoppingCart className="rd-icon" style={{color: '#22c55e'}} />
            <div className="rd-value">7</div>
            <div className="rd-label">Orders</div>
          </div>
          <div className="rd-card">
            <FaWallet className="rd-icon" style={{color: '#eab308'}} />
            <div className="rd-value">0</div>
            <div className="rd-label">Pending Payments</div>
          </div>
        </div>
      </div>

      {/* Finance Overview Section */}
      <div className="rd-section">
        <h2 className="rd-section-title">
          <FaDollarSign style={{marginRight: '8px', color: '#4b5563'}} /> Finance Overview
        </h2>
        <div className="rd-grid rd-grid-2">
          <div className="rd-card">
            <FaFileInvoiceDollar className="rd-icon" style={{color: '#ef4444'}} />
            <div className="rd-value">5</div>
            <div className="rd-label">Vendor Payout Due</div>
          </div>
          <div className="rd-card">
            <FaReceipt className="rd-icon" style={{color: '#22c55e'}} />
            <div className="rd-value">₹ 62,540.24</div>
            <div className="rd-label">GST Collected</div>
          </div>
        </div>
      </div>

      {/* Shipping Overview Section */}
      <div className="rd-section">
        <h2 className="rd-section-title">
          <FaTruck style={{marginRight: '8px', color: '#4b5563'}} /> Shipping Overview
        </h2>
        <div className="rd-grid rd-grid-3">
          <div className="rd-card">
            <FaTruck className="rd-icon" style={{color: '#3b82f6'}} />
            <div className="rd-value">2</div>
            <div className="rd-label">Total Shipments</div>
          </div>
          <div className="rd-card">
            <FaClock className="rd-icon" style={{color: '#eab308'}} />
            <div className="rd-value">1</div>
            <div className="rd-label">In Transit</div>
          </div>
          <div className="rd-card">
            <FaCheckCircle className="rd-icon" style={{color: '#22c55e'}} />
            <div className="rd-value">1</div>
            <div className="rd-label">Delivered</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportDashboard;
