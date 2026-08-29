import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaPrint, FaArrowLeft } from 'react-icons/fa';
import api from '../../config/api';
import '../PurchaseOrderPreview/PurchaseOrderPreview.css'; 

const PayoutPreview = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [payoutData, setPayoutData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [companyDetails] = useState({
    name: 'HIEIL',
    tagline: 'Handcrafted Products, Inspired by India',
    address: 'Jaipur, Rajasthan, India',
    website: 'www.hieil.com'
  });

  useEffect(() => {
    const fetchPayout = async () => {
      try {
        const response = await api.get(`/vendor-payouts/${id}`);
        const payout = response.data;
        let vendorObj = { vendorName: 'Vendor Name Not Found', email: '', phone: '', gstNo: '' };
        if (payout.vendorId) {
          try {
            const vRes = await api.get(`/vendors/${payout.vendorId}`);
            if (vRes.data && vRes.data.vendorName) {
              vendorObj = vRes.data;
            }
          } catch(e) {}
        }
        setPayoutData({ ...payout, vendor: vendorObj });
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };
    fetchPayout();
  }, [id]);

  if (loading) return <div style={{padding: '40px', textAlign: 'center'}}>Loading Payout Details...</div>;
  if (!payoutData) return <div style={{padding: '40px', textAlign: 'center'}}>Payout details could not be found.</div>;

  const dateStr = new Date(payoutData.createdAt).toLocaleDateString('en-GB');

  return (
    <div className="po-preview-page">
      <div className="po-preview-actions no-print">
        <button className="btn-back" onClick={() => navigate(-1)}>
          <FaArrowLeft /> Back
        </button>
        <button className="btn-print" onClick={() => window.print()}>
          <FaPrint /> Print Receipt
        </button>
      </div>

      <div className="po-paper">
        <div className="po-top-row">
          <div className="po-brand-box">
            <h1>{companyDetails.name}</h1>
            <p className="tagline">{companyDetails.tagline}</p>
            <p>{companyDetails.website} | {companyDetails.address}</p>
          </div>
          <div className="po-title-box">
            <h2>PAYMENT RECEIPT</h2>
            <p>Vendor Payout Record</p>
          </div>
        </div>

        <table className="po-meta-table">
          <tbody>
            <tr>
              <td className="label">Receipt No</td>
              <td className="value">{payoutData._id.substring(0,8).toUpperCase()}</td>
              <td className="label">Date</td>
              <td className="value">{dateStr}</td>
            </tr>
            <tr>
              <td className="label">Invoice / PO Ref</td>
              <td className="value">{payoutData.invoiceId || '-'}</td>
              <td className="label">Status</td>
              <td className="value" style={{color: payoutData.status === 'Released' ? '#16a34a' : '#ea580c', fontWeight: 'bold'}}>{payoutData.status.toUpperCase()}</td>
            </tr>
          </tbody>
        </table>

        <div className="po-parties-row">
          <div className="po-party-box">
            <div className="party-header">ISSUED BY (COMPANY)</div>
            <div className="party-content">
              <p className="bold">HIEIL</p>
              <p>Jaipur, Rajasthan, India</p>
              <p>Website: www.hieil.com</p>
            </div>
          </div>
          <div className="po-party-box">
            <div className="party-header">ISSUED TO (VENDOR)</div>
            <div className="party-content">
              <p className="bold">{payoutData.vendor?.vendorName || '-'}</p>
              {payoutData.vendor?.email && <p>Email: {payoutData.vendor.email}</p>}
              {payoutData.vendor?.phone && <p>Phone: {payoutData.vendor.phone}</p>}
              {payoutData.vendor?.gstNo && <p>GST No.: {payoutData.vendor.gstNo}</p>}
            </div>
          </div>
        </div>

        <div className="po-table-container">
          <table className="po-items-table">
            <thead>
              <tr>
                <th>#</th>
                <th className="left">DESCRIPTION</th>
                <th>ORDER AMOUNT (₹)</th>
                <th className="right" style={{backgroundColor: '#d4af37'}}>PAYOUT AMOUNT (₹)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td className="left">
                  <span className="item-title">{payoutData.commission || 'Installment / Commission'}</span>
                  <span className="item-sub">Against Ref: {payoutData.invoiceId || 'N/A'}</span>
                </td>
                <td>₹{parseFloat(payoutData.invoiceAmount || 0).toFixed(2)}</td>
                <td className="right bold">₹{parseFloat(payoutData.payoutAmount || 0).toFixed(2)}</td>
              </tr>
            </tbody>
          </table>
          
          <table className="po-summary-table">
            <tbody>
              <tr className="po-grand-total">
                <td className="label" style={{textAlign: 'right', paddingRight: '20px'}}>TOTAL PAID AMOUNT:</td>
                <td className="val bold" style={{width: '150px'}}>₹{parseFloat(payoutData.payoutAmount || 0).toFixed(2)}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="po-terms">
          <div className="terms-header">NOTES & CONDITIONS</div>
          <table className="terms-table">
            <tbody>
              <tr>
                <td className="term-label">Declaration</td>
                <td className="term-val">This is a computer generated payment receipt and does not require a physical signature. Amounts are subject to final bank reconciliation.</td>
              </tr>
              <tr>
                <td className="term-label">Contact</td>
                <td className="term-val">For queries, please reach out to admin@hieil.com</td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
};

export default PayoutPreview;
