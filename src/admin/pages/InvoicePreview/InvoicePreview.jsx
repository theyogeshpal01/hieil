import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaPrint, FaArrowLeft } from 'react-icons/fa';
import './InvoicePreview.css';

const InvoicePreview = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // In a real app, you would fetch the invoice details using the `id` from the URL.
  // Using static mock data based on the screenshot for this demonstration.
  const invoiceData = {
    invoiceNo: id || 'INV-2026-0001',
    quotationRef: 'QT-2025-',
    incoterms: 'FOB Jaipur, India',
    date: '18 / 04 / 2025',
    dueDate: '18 / 05 / 2025',
    currency: 'USD',
    seller: {
      name: 'HIEIL',
      tagline: 'Handcrafted Products, Inspired by India',
      address: 'Jaipur, Rajasthan, India',
      website: 'www.hieil.com',
      email: 'info@hieil.com',
      phone: '+91 XXXXX XXXXX',
      gst: 'XXXXXXXXXXXXXXX',
      iec: 'XXXXXXXXXX'
    },
    buyer: {
      company: '[Buyer Company Name]',
      contact: '[Contact Person Name]',
      addressLine1: '[Address Line 1]',
      city: '[City, Country, ZIP]',
      email: '[buyer@email.com]',
      phone: '[+XX XXXXX XXXXX]',
      tax: '[0000000000]'
    },
    products: [
      {
        id: 1,
        descTitle: 'Jaipur Blue Pottery Vase',
        descSub: 'Handcrafted Blue Pottery - Luxury Home Decor',
        hsn: '6912 00 00',
        unit: 'Pcs',
        qty: 50,
        price: '18.00',
        amount: '900.00'
      },
      {
        id: 2,
        descTitle: 'Brass Metal Wall Art Panel',
        descSub: 'Handcrafted Metal Products - Metal Wall Art',
        hsn: '8306 29 00',
        unit: 'Pcs',
        qty: 30,
        price: '42.00',
        amount: '1,260.00'
      },
      {
        id: 3,
        descTitle: 'Marble Inlay Decorative Plate',
        descSub: 'Handcrafted Stone Products - Decorative Plates',
        hsn: '6802 91 00',
        unit: 'Pcs',
        qty: 25,
        price: '35.00',
        amount: '875.00'
      },
      {
        id: 4,
        descTitle: 'Sheesham Wood Trinket Box',
        descSub: 'Handcrafted Wooden Products - Luxury Trinket Boxes',
        hsn: '4420 90 00',
        unit: 'Pcs',
        qty: 40,
        price: '22.00',
        amount: '880.00'
      },
      {
        id: 5,
        descTitle: 'Antique Finish Wall Clock',
        descSub: 'Luxury Clock Collection',
        hsn: '9105 91 00',
        unit: 'Pcs',
        qty: 20,
        price: '55.00',
        amount: '1,100.00'
      }
    ],
    subtotal: '5,015.00',
    shipping: '385.00',
    grandTotal: '5,400.00'
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
            <h1>HIEIL</h1>
            <p>Handcrafted Products, Inspired by India</p>
            <p>www.hieil.com | Jaipur, Rajasthan, India</p>
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
              <td>HIEIL (Handcrafted Products Inspired by India)</td>
            </tr>
            <tr>
              <td className="info-label">Bank Name</td>
              <td>[Your Bank Name]</td>
            </tr>
            <tr>
              <td className="info-label">Account Number</td>
              <td>[Your Account Number]</td>
            </tr>
            <tr>
              <td className="info-label">IFSC Code</td>
              <td>[Your IFSC Code]</td>
            </tr>
            <tr>
              <td className="info-label">SWIFT / BIC Code</td>
              <td>[Your SWIFT Code]</td>
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
              [Authorised Signatory Name]<br/>
              [Designation] | HIEIL
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
          <p><strong>Thank you for your business with HIEIL | Authentic Indian Handicraft Exports</strong></p>
          <p>For queries: www.hieil.com/contact | Confidential & Proprietary</p>
        </div>

      </div>
    </div>
  );
};

export default InvoicePreview;
