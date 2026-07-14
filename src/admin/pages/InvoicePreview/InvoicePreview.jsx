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
    invoiceNo: id || 'SK2-INV-2026-1774173680',
    orderNo: 'SK2-ORD-2026-1774173675',
    date: '22-03-2026',
    country: 'USA',
    currency: 'INR',
    product: 'Blue Pottery Tortoise Goodluck Gift-Paper Weight (Set of 2)',
    qty: 500,
    totalPrice: '59,000.00',
    subtotal: '50,000.00',
    gst: '9,000.00',
    grandTotal: '59,000.00 INR'
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
        <div className="invoice-header-meta">
          <span>28/06/2026, 18:03</span>
          <span>Retailer Invoice {invoiceData.invoiceNo}</span>
        </div>

        <div className="invoice-title">
          <h2>HIEIL EXPORTS (Retailer)</h2>
          <hr />
        </div>

        <div className="invoice-details">
          <div><strong>Invoice No:</strong> {invoiceData.invoiceNo}</div>
          <div><strong>Order No:</strong> {invoiceData.orderNo}</div>
          <div><strong>Date:</strong> {invoiceData.date}</div>
          <div><strong>Country:</strong> {invoiceData.country}</div>
          <div><strong>Currency:</strong> {invoiceData.currency}</div>
        </div>

        <table className="invoice-table">
          <thead>
            <tr>
              <th className="col-product">Product</th>
              <th className="col-qty">Qty</th>
              <th className="col-total">Total Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{invoiceData.product}</td>
              <td className="text-center">{invoiceData.qty}</td>
              <td className="text-right">{invoiceData.totalPrice}</td>
            </tr>
          </tbody>
        </table>

        <div className="invoice-summary-container">
          <table className="invoice-summary-table">
            <tbody>
              <tr>
                <td><strong>Subtotal</strong></td>
                <td className="text-right">{invoiceData.subtotal}</td>
              </tr>
              <tr>
                <td><strong>GST</strong></td>
                <td className="text-right">{invoiceData.gst}</td>
              </tr>
              <tr>
                <td><strong>Grand Total</strong></td>
                <td className="text-right"><strong>{invoiceData.grandTotal}</strong></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="invoice-footer">
          <p>For <strong>HIEIL EXPORTS (Retailer)</strong></p>
          <br /><br /><br />
          <p>Authorized Signatory</p>
        </div>

        <div className="invoice-footer-meta">
          <span>https://hieil.com/admin/sk2-invoice-pdf.php?id=4</span>
          <span>1/1</span>
        </div>
      </div>
    </div>
  );
};

export default InvoicePreview;
