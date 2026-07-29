import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaPrint, FaArrowLeft, FaDownload } from 'react-icons/fa';
import api from '../../../utils/api';
import './PayoutPreview.css';

const PayoutPreview = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [payoutData, setPayoutData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPayout = async () => {
      try {
        const response = await api.get(`/vendor-payouts/${id}`);
        // We also need vendor details, but we can do a secondary fetch if needed, 
        // or just use the basic data we have in the payout record.
        const payout = response.data;
        
        let vendorName = 'Vendor Name Not Found';
        if (payout.vendorId) {
          try {
            const vRes = await api.get(`/vendors/${payout.vendorId}`);
            if (vRes.data && vRes.data.vendorName) {
              vendorName = vRes.data.vendorName;
            }
          } catch(e) {}
        }
        
        setPayoutData({
          ...payout,
          vendorName
        });
        setLoading(false);
      } catch (error) {
        console.error("Error fetching payout:", error);
        setLoading(false);
      }
    };
    fetchPayout();
  }, [id]);

  const handlePrint = () => {
    window.print();
  };

  if (loading) {
    return <div style={{padding: '40px', textAlign: 'center'}}>Loading Payout Details...</div>;
  }

  if (!payoutData) {
    return <div style={{padding: '40px', textAlign: 'center'}}>Payout details could not be found.</div>;
  }

  return (
    <div className="payout-preview-container">
      {/* Top Action Bar - Hidden during print */}
      <div className="payout-action-bar no-print">
        <button className="action-btn-secondary" onClick={() => window.close()}>
          <FaArrowLeft /> Back to List
        </button>
        <div className="action-right">
          <button className="action-btn-primary" onClick={handlePrint}>
            <FaPrint /> Print Receipt
          </button>
        </div>
      </div>

      {/* Printable Receipt Area */}
      <div className="payout-doc">
        
        {/* Header */}
        <div className="payout-header">
          <div className="payout-logo-box">
            <h1 style={{margin:0, color:'#1e3a8a', fontFamily:'Playfair Display, serif'}}>HIEIL</h1>
            <p style={{margin:0, fontSize:'14px', color:'#64748b'}}>HANDCRAFTED EXCELLENCE</p>
          </div>
          <div className="payout-title-box">
            <h2>PAYOUT RECEIPT</h2>
            <p>Vendor Commission Receipt</p>
          </div>
        </div>

        {/* Meta Details */}
        <div className="payout-meta-grid">
          <table className="payout-meta-table">
            <tbody>
              <tr>
                <td className="meta-label">Receipt No.</td>
                <td><strong>{payoutData._id.substring(0,8).toUpperCase()}</strong></td>
              </tr>
              <tr>
                <td className="meta-label">Vendor Name</td>
                <td><strong>{payoutData.vendorName}</strong></td>
              </tr>
            </tbody>
          </table>
          <table className="payout-meta-table">
            <tbody>
              <tr>
                <td className="meta-label">Date</td>
                <td>{new Date(payoutData.createdAt).toLocaleDateString()}</td>
              </tr>
              <tr>
                <td className="meta-label">Status</td>
                <td>
                  <strong style={{color: payoutData.status === 'Released' ? '#16a34a' : '#ea580c'}}>
                    {payoutData.status.toUpperCase()}
                  </strong>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Breakdown */}
        <div className="payout-section-title">PAYOUT BREAKDOWN</div>
        <table className="payout-item-table">
          <thead>
            <tr>
              <th>Invoice ID</th>
              <th className="text-right">Invoice Amount (USD)</th>
              <th className="text-right">Commission Rate</th>
              <th className="text-right">Payout Amount (USD)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{payoutData.invoiceId}</td>
              <td className="text-right">${payoutData.invoiceAmount}</td>
              <td className="text-right">{payoutData.commission}</td>
              <td className="text-right bold">${payoutData.payoutAmount}</td>
            </tr>
          </tbody>
        </table>

        {/* Totals */}
        <table className="payout-totals-table">
          <tbody>
            <tr className="payout-grand-total">
              <td>TOTAL PAYOUT RELEASED:</td>
              <td>${payoutData.payoutAmount}</td>
            </tr>
          </tbody>
        </table>

        <br/>

        <div className="payout-note">
          <strong>Note:</strong> This is a computer generated receipt and does not require a physical signature. Amounts are subject to final bank reconciliation.
        </div>

        {/* Footer */}
        <div className="payout-footer-strip">
          <p><strong>Thank you for partnering with HIEIL</strong></p>
          <p>For queries: admin@hieil.com | Confidential & Proprietary</p>
        </div>

      </div>
    </div>
  );
};

export default PayoutPreview;
