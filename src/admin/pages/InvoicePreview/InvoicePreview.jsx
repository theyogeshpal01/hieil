import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaPrint, FaArrowLeft } from 'react-icons/fa';
import api from '../../config/api';
import './InvoicePreview.css';

const InvoicePreview = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [invoice, setInvoice] = useState(null);
  const [order, setOrder] = useState(null);
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
    const fetchData = async () => {
      try {
        const invRes = await api.get(`/invoices/${id}`);
        const invData = invRes.data;
        setInvoice(invData);

        const ordRes = await api.get('/orders');
        const matchingOrder = ordRes.data.find(o => o.orderNo === invData.orderNo);
        setOrder(matchingOrder);
        
        try {
          const settingsRes = await api.get('/settings?key=companyDetails');
          if (settingsRes.data && settingsRes.data.companyDetails) {
            setCompanyDetails(prev => ({ ...prev, ...JSON.parse(settingsRes.data.companyDetails) }));
          }
        } catch(e) {}
        
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  if (loading) {
    return <div style={{padding: '50px', textAlign: 'center'}}>Loading Invoice...</div>;
  }

  if (!invoice) {
    return <div style={{padding: '50px', textAlign: 'center'}}>Invoice not found.</div>;
  }

  let parsedAddress = {};
  if (order?.address) {
    try {
      parsedAddress = JSON.parse(order.address);
    } catch (e) {
      parsedAddress = { line1: order.address };
    }
  }

  const invoiceData = {
    invoiceNo: invoice.invoiceNo || id,
    quotationRef: order?.quotation || '-',
    incoterms: 'FOB Jaipur, India',
    date: new Date(invoice.createdAt || Date.now()).toLocaleDateString('en-GB'),
    dueDate: new Date(new Date(invoice.createdAt || Date.now()).getTime() + 15 * 24 * 60 * 60 * 1000).toLocaleDateString('en-GB'), // 15 days later
    currency: 'USD',
    seller: {
      name: companyDetails.name,
      tagline: companyDetails.tagline,
      address: companyDetails.address,
      website: companyDetails.website,
      email: companyDetails.email,
      phone: companyDetails.phone,
      gst: companyDetails.gst,
      iec: companyDetails.iec
    },
    buyer: {
      company: parsedAddress.company || invoice.customer || order?.customer || '[Buyer Name]',
      contact: parsedAddress.contact || '-',
      addressLine1: parsedAddress.line1 || '[Address]',
      city: parsedAddress.city || invoice.country || order?.country || '[Country]',
      email: parsedAddress.email || '-',
      phone: parsedAddress.phone || '-',
      tax: parsedAddress.tax || '-'
    },
    products: order?.products && order.products.length > 0 ? order.products.map((p, idx) => ({
      id: idx + 1,
      descTitle: p.name || 'Product',
      descSub: '-',
      hsn: p.hsn || '-',
      unit: 'Pcs',
      qty: p.quantity || 0,
      price: parseFloat(p.price || 0).toFixed(2),
      amount: (parseFloat(p.quantity || 0) * parseFloat(p.price || 0)).toFixed(2)
    })) : [],
    subtotal: invoice.total || '0.00',
    shipping: '0.00',
    grandTotal: invoice.total || '0.00'
  };

  const handlePrint = () => {
    window.print();
  };

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
            <h2>INVOICE</h2>
            <p>Export Commercial Invoice</p>
          </div>
        </div>

        {/* Meta Details */}
        <div className="inv-meta-grid">
          <table className="inv-meta-table">
            <tbody>
              <tr>
                <td className="meta-label">Invoice No.</td>
                <td><strong>{invoiceData.invoiceNo}</strong></td>
              </tr>
              <tr>
                <td className="meta-label">Quotation Ref.</td>
                <td>{invoiceData.quotationRef}</td>
              </tr>
              <tr>
                <td className="meta-label">Incoterms</td>
                <td>{invoiceData.incoterms}</td>
              </tr>
            </tbody>
          </table>
          <table className="inv-meta-table">
            <tbody>
              <tr>
                <td className="meta-label">Invoice Date</td>
                <td>{invoiceData.date}</td>
              </tr>
              <tr>
                <td className="meta-label">Payment Due Date</td>
                <td>{invoiceData.dueDate}</td>
              </tr>
              <tr>
                <td className="meta-label">Currency</td>
                <td>{invoiceData.currency}</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Addresses */}
        <div className="inv-address-section">
          <div className="inv-address-box">
            <div className="inv-address-header">SELLER / EXPORTER</div>
            <div className="inv-address-content">
              <h4>{invoiceData.seller.name}</h4>
              <p>{invoiceData.seller.tagline}</p>
              <p>{invoiceData.seller.address}</p>
              <p>Website: {invoiceData.seller.website}</p>
              <p>Email: {invoiceData.seller.email}</p>
              <p>Phone: {invoiceData.seller.phone}</p>
              <p>GST No.: {invoiceData.seller.gst}</p>
              <p>IEC No.: {invoiceData.seller.iec}</p>
            </div>
          </div>
          <div className="inv-address-box">
            <div className="inv-address-header">BUYER / IMPORTER</div>
            <div className="inv-address-content">
              <h4>{invoiceData.buyer.company}</h4>
              <p>{invoiceData.buyer.contact}</p>
              <p>{invoiceData.buyer.addressLine1}</p>
              <p>{invoiceData.buyer.city}</p>
              <p>Email: {invoiceData.buyer.email}</p>
              <p>Phone: {invoiceData.buyer.phone}</p>
              <p>Tax / VAT No.: {invoiceData.buyer.tax}</p>
            </div>
          </div>
        </div>

        {/* Itemised Invoice */}
        <div className="inv-section-title">ITEMISED INVOICE</div>
        <table className="inv-item-table">
          <thead>
            <tr>
              <th className="text-center">#</th>
              <th>Product Description</th>
              <th className="text-center">HSN Code</th>
              <th className="text-center">Unit</th>
              <th className="text-center">Qty</th>
              <th className="text-right">Unit Price</th>
              <th className="text-right">Amount<br/>(USD)</th>
            </tr>
          </thead>
          <tbody>
            {invoiceData.products.map((item) => (
              <tr key={item.id}>
                <td className="text-center">{item.id}</td>
                <td>
                  <span className="item-desc-title">{item.descTitle}</span>
                  <span className="item-desc-sub">{item.descSub}</span>
                </td>
                <td className="text-center">{item.hsn}</td>
                <td className="text-center">{item.unit}</td>
                <td className="text-center">{item.qty}</td>
                <td className="text-right">${item.price}</td>
                <td className="text-right bold">${item.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Totals */}
        <table className="inv-totals-table">
          <tbody>
            <tr>
              <td style={{width: '80%'}}>Subtotal (FOB Jaipur):</td>
              <td className="bold" style={{width: '20%'}}>${invoiceData.subtotal}</td>
            </tr>
            <tr>
              <td>Shipping & Insurance (Est.):</td>
              <td className="bold">${invoiceData.shipping}</td>
            </tr>
            <tr className="inv-grand-total">
              <td>GRAND TOTAL (USD):</td>
              <td>${invoiceData.grandTotal}</td>
            </tr>
          </tbody>
        </table>

        <br/>

        {/* Payment Terms */}
        <div className="inv-section-title">PAYMENT TERMS</div>
        <table className="inv-info-table">
          <tbody>
            <tr>
              <td className="info-label">Payment Terms</td>
              <td>50% advance with order confirmation, 50% balance before shipment (T/T Bank Transfer)</td>
            </tr>
            <tr>
              <td className="info-label">Payment Method</td>
              <td>T/T Bank Wire Transfer</td>
            </tr>
            <tr>
              <td className="info-label">Currency</td>
              <td>USD (INR invoicing available for domestic orders)</td>
            </tr>
            <tr>
              <td className="info-label">Delivery Port</td>
              <td>Jaipur / Delhi (JNPT Mumbai for sea freight)</td>
            </tr>
            <tr>
              <td className="info-label">Packaging</td>
              <td>Export-grade double-wall corrugated with custom foam inserts for fragile items</td>
            </tr>
          </tbody>
        </table>

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
            <tr>
              <td className="info-label">Bank Branch</td>
              <td>Jaipur, Rajasthan, India</td>
            </tr>
          </tbody>
        </table>

        <div className="inv-note">
          <strong>Note:</strong> All prices are in USD. FOB Jaipur unless otherwise specified. Prices are subject to final confirmation upon receipt of formal purchase order.
        </div>

        {/* Signatory */}
        <div className="inv-section-title">AUTHORISED SIGNATORY</div>
        <div className="inv-sign-box">
          <div className="inv-sign-left">
            <p>Signature:</p>
            <div className="inv-sign-line">
              {companyDetails.signatoryName || '[Authorised Signatory Name]'}<br/>
              {companyDetails.designation || '[Designation]'} | {companyDetails.name}
            </div>
          </div>
          <div className="inv-sign-right">
            <p>Company Stamp:</p>
            <div className="inv-sign-line">
              [Stamp Here]
            </div>
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

export default InvoicePreview;
