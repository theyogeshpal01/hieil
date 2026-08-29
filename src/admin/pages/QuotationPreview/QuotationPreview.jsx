import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaPrint, FaArrowLeft } from 'react-icons/fa';
import Swal from 'sweetalert2';
import api from '../../../config/api';
import html2pdf from 'html2pdf.js';
// We use InvoicePreview.css to match the standard bill design
import '../InvoicePreview/InvoicePreview.css';

const formatImageUrl = (url) => {
  if (!url) return '';
  if (url.startsWith('http')) return url;
  const baseUrl = import.meta.env.VITE_API_URL || 'http://localhost:3000';
  return url.startsWith('/') ? `${baseUrl}${url}` : `${baseUrl}/${url}`;
};

const QuotationPreview = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quotation, setQuotation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [companyDetails, setCompanyDetails] = useState({
    name: 'HIEIL',
    tagline: 'Handcrafted Products, Inspired by India',
    address: 'Jaipur, Rajasthan, India',
    website: 'www.hieil.com',
    email: 'info@hieil.com',
    phone: '+91 XXXXX XXXXX',
    gst: 'XXXXXXXXXXXXXXX',
    iec: 'XXXXXXXXXX',
    bankAccountName: 'HIEIL (Handcrafted Products Inspired by India)',
    bankName: '[Your Bank Name]',
    accountNumber: '[Your Account Number]',
    ifsc: '[Your IFSC Code]',
    swift: '[Your SWIFT Code]',
    signatoryName: '[Authorised Signatory Name]',
    designation: '[Designation]'
  });

  useEffect(() => {
    const fetchQuotation = async () => {
      try {
        const response = await api.get(`/quotations/${id}`);
        if (response.data) {
          setQuotation(response.data);
        } else {
          Swal.fire('Error', 'Quotation not found', 'error');
        }
        
        try {
          const settingsRes = await api.get('/settings?key=companyDetails');
          if (settingsRes.data && settingsRes.data.companyDetails) {
            setCompanyDetails(prev => ({ ...prev, ...JSON.parse(settingsRes.data.companyDetails) }));
          }
        } catch(e) {}
        
      } catch (error) {
        console.error('Error fetching quotation:', error);
        Swal.fire('Error', 'Failed to fetch quotation details', 'error');
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchQuotation();
    }
  }, [id]);

  const handlePrint = () => {
    const element = document.querySelector('.invoice-paper');
    const opt = {
      margin:       [0.2, 0.2, 0.2, 0.2],
      filename:     `Quotation-${quotation?.quoteNo || id}.pdf`,
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2, useCORS: true },
      jsPDF:        { unit: 'in', format: 'a4', orientation: 'portrait' }
    };
    html2pdf().set(opt).from(element).save();
  };

  if (loading) {
    return <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Loading Quotation...</div>;
  }

  if (!quotation) {
    return <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Quotation data is unavailable.</div>;
  }

  
  const dateStr = new Date(quotation.createdAt || Date.now()).toLocaleString('en-IN', {
    day: '2-digit', month: '2-digit', year: 'numeric'
  });

  let parsedAddress = quotation.address;
  let buyerName = quotation.customer || quotation.customerName || '-';
  let buyerEmail = quotation.customerEmail || '-';
  let buyerPhone = quotation.mobile || quotation.phone || '-';
  let buyerTax = '';
  let buyerCountry = quotation.country || '';

  if (typeof parsedAddress === 'string') {
    try {
      const parsed = JSON.parse(parsedAddress);
      if (parsed.company) buyerName = parsed.company;
      if (parsed.email && buyerEmail === '-') buyerEmail = parsed.email;
      if (parsed.phone && buyerPhone === '-') buyerPhone = parsed.phone;
      if (parsed.tax) buyerTax = parsed.tax;
      if (parsed.country && !buyerCountry) buyerCountry = parsed.country;
      
      const addrLines = [parsed.line1, parsed.city, parsed.state, parsed.country].filter(Boolean);
      parsedAddress = addrLines.join(', ');
    } catch(e) {
      // not JSON
    }
  }


  return (
    <div className="invoice-preview-page">
      <div className="invoice-preview-actions no-print">
        <button className="btn-back" onClick={() => navigate(-1)}>
          <FaArrowLeft /> Back
        </button>
        <button className="btn-print" onClick={handlePrint}>
          <FaPrint /> Print / Download PDF
        </button>
      </div>

      <div className="invoice-paper">
        {/* Top Header */}
        <div className="inv-top-header">
          <div className="inv-brand-box">
            <h1>{companyDetails.name}</h1>
            <p>{companyDetails.tagline}</p>
            <p>{companyDetails.website} | {companyDetails.address}</p>
          </div>
          <div className="inv-title-box">
            <h2 style={{ fontSize: '30px', letterSpacing: '1px' }}>QUOTATION</h2>
            <p>Official Export Quotation</p>
          </div>
        </div>

        {/* Meta Details */}
        <div className="inv-meta-grid">
          <table className="inv-meta-table">
            <tbody>
              <tr>
                <td className="meta-label">Quote No.</td>
                <td><strong>{quotation.quoteNo || id}</strong></td>
              </tr>
              <tr>
                <td className="meta-label">Incoterms</td>
                <td>{quotation.incoterm || '-'}</td>
              </tr>
              <tr>
                <td className="meta-label">Delivery Port</td>
                <td>{quotation.deliveryPort || '-'}</td>
              </tr>
            </tbody>
          </table>
          <table className="inv-meta-table">
            <tbody>
              <tr>
                <td className="meta-label">Quote Date</td>
                <td>{dateStr}</td>
              </tr>
              <tr>
                <td className="meta-label">Valid Until</td>
                <td>{quotation.validTill || '-'}</td>
              </tr>
              <tr>
                <td className="meta-label">Currency</td>
                <td>USD</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Addresses */}
        <div className="inv-address-section">
          <div className="inv-address-box">
            <div className="inv-address-header">EXPORTER</div>
            <div className="inv-address-content">
              <h4>{companyDetails.name}</h4>
              <p>{companyDetails.tagline}</p>
              <p>{companyDetails.address}</p>
              <p>Website: {companyDetails.website}</p>
              <p>Email: {companyDetails.email}</p>
              <p>Phone: {companyDetails.phone}</p>
              <p>GST No.: {companyDetails.gst}</p>
              <p>IEC No.: {companyDetails.iec}</p>
            </div>
          </div>
          <div className="inv-address-box">
            <div className="inv-address-header">PROSPECTIVE BUYER</div>
              <div className="inv-address-content">
                <h4>{buyerName}</h4>
                <p>{parsedAddress || '-'}</p>
                {buyerCountry && <p>{buyerCountry}</p>}
                <p>Email: {buyerEmail}</p>
                <p>Phone: {buyerPhone}</p>
                {buyerTax && <p>Tax ID: {buyerTax}</p>}
              </div>
          </div>
        </div>

        {/* Itemised Quotation */}
        <div className="inv-section-title">QUOTATION DETAILS</div>
        <table className="inv-item-table">
          <thead>
            <tr>
              <th className="text-center">#</th>
              <th>Product Description</th>
              <th className="text-center">Qty</th>
              <th className="text-right">Unit Price</th>
              <th className="text-right">Amount<br/>(USD)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-center">1</td>
              <td>
                <span className="item-desc-title">{quotation.product}</span>
              </td>
              <td className="text-center">{quotation.qty || quotation.quantity || 1}</td>
              <td className="text-right">${quotation.rate || 0}</td>
              <td className="text-right bold">${quotation.subtotal || quotation.total || 0}</td>
            </tr>
          </tbody>
        </table>

        {/* Totals */}
        <table className="inv-totals-table">
          <tbody>
            {quotation.subtotal && (
              <tr>
                <td style={{width: '80%'}}>Subtotal:</td>
                <td className="bold" style={{width: '20%'}}>${quotation.subtotal}</td>
              </tr>
            )}
            {quotation.gstAmount && quotation.gstAmount > 0 && (
              <tr>
                <td>Tax / GST ({quotation.gstPercent}%):</td>
                <td className="bold">${quotation.gstAmount}</td>
              </tr>
            )}
            <tr className="inv-grand-total">
              <td>GRAND TOTAL (USD):</td>
              <td>${quotation.total || quotation.subtotal || 0}</td>
            </tr>
          </tbody>
        </table>

        <br/>

        {/* Bank Details */}
        <div className="inv-section-title">BANK / PAYMENT DETAILS</div>
        <table className="inv-info-table">
          <tbody>
            <tr>
              <td className="info-label">Account Name</td>
              <td>{companyDetails.bankAccountName}</td>
            </tr>
            <tr>
              <td className="info-label">Bank Name</td>
              <td>{companyDetails.bankName}</td>
            </tr>
            <tr>
              <td className="info-label">Account Number</td>
              <td>{companyDetails.accountNumber}</td>
            </tr>
            <tr>
              <td className="info-label">IFSC Code</td>
              <td>{companyDetails.ifsc}</td>
            </tr>
            <tr>
              <td className="info-label">SWIFT / BIC Code</td>
              <td>{companyDetails.swift}</td>
            </tr>
          </tbody>
        </table>

        <div className="inv-note">
          <strong>Note:</strong> {quotation.validTill && `This quotation is valid until ${quotation.validTill}. `}
          All prices are in USD. Prices are subject to final confirmation upon receipt of formal purchase order.
        </div>

        {/* Signatory */}
        <div className="inv-section-title">AUTHORISED SIGNATORY</div>
        <div className="inv-sign-box">
          <div className="inv-sign-left">
            <p>Signature:</p>
            {companyDetails.signatureUrl && (
              <img src={formatImageUrl(companyDetails.signatureUrl)} alt="Signature" style={{ maxHeight: '60px', margin: '10px 0', display: 'block' }} />
            )}
            <div className="inv-sign-line">
              {companyDetails.signatoryName || '[Authorised Signatory Name]'}<br/>
              {companyDetails.designation || '[Designation]'} | {companyDetails.name}
            </div>
          </div>
          <div className="inv-sign-right">
            <p>Company Stamp:</p>
            {companyDetails.stampUrl ? (
              <img src={formatImageUrl(companyDetails.stampUrl)} alt="Company Stamp" style={{ maxHeight: '80px', margin: '10px 0', display: 'block' }} />
            ) : (
              <div className="inv-sign-line">[Stamp Here]</div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="inv-footer-strip">
          <p><strong>Thank you for your business with {companyDetails.name} | {companyDetails.tagline}</strong></p>
          <p>For queries: {companyDetails.website}/contact | Confidential & Proprietary</p>
        </div>

      </div>
    </div>
  );
};

export default QuotationPreview;
