import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaPrint, FaArrowLeft } from 'react-icons/fa';
import Swal from 'sweetalert2';
import api from '../../../config/api';
import './QuotationPreview.css';

const QuotationPreview = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quotation, setQuotation] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchQuotation = async () => {
      try {
        const response = await api.get(`/quotations/${id}`);
        if (response.data) {
          setQuotation(response.data);
        } else {
          Swal.fire('Error', 'Quotation not found', 'error');
        }
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
    window.print();
  };

  if (loading) {
    return <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Loading Quotation...</div>;
  }

  if (!quotation) {
    return <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Quotation data is unavailable.</div>;
  }

  // Format date
  const dateStr = new Date(quotation.createdAt || Date.now()).toLocaleString('en-IN', {
    day: '2-digit', month: '2-digit', year: 'numeric',
    hour: '2-digit', minute: '2-digit'
  });

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
          <span>{dateStr}</span>
          <span>Quotation {quotation.quoteNo || id}</span>
        </div>

        <div className="invoice-title">
          <h2>HIEIL EXPORTS - OFFICIAL QUOTATION</h2>
          <hr />
        </div>

        <div className="invoice-details">
          <strong>To:</strong><br />
          {quotation.customer || quotation.customerName}<br />
          {quotation.customerEmail && <>{quotation.customerEmail}<br /></>}
          {quotation.phone && <>{quotation.phone}<br /></>}
          {quotation.country && <>{quotation.country}</>}
        </div>

        <table className="invoice-table">
          <thead>
            <tr>
              <th>Description / Product</th>
              <th className="col-qty">Quantity</th>
              <th className="col-total">Rate</th>
              <th className="col-total">Subtotal</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{quotation.product}</td>
              <td className="text-center">{quotation.qty || quotation.quantity || 1}</td>
              <td className="text-right">${quotation.rate || 0}</td>
              <td className="text-right">${quotation.subtotal || quotation.total || 0}</td>
            </tr>
          </tbody>
        </table>

        <div className="invoice-summary-container">
          <table className="invoice-summary-table">
            <tbody>
              {quotation.subtotal && (
                <tr>
                  <td><strong>Subtotal</strong></td>
                  <td className="text-right">${quotation.subtotal}</td>
                </tr>
              )}
              {quotation.gstAmount && quotation.gstAmount > 0 && (
                <tr>
                  <td><strong>Tax / GST ({quotation.gstPercent}%)</strong></td>
                  <td className="text-right">${quotation.gstAmount}</td>
                </tr>
              )}
              <tr>
                <td><strong>Grand Total</strong></td>
                <td className="text-right"><strong>${quotation.total || quotation.subtotal}</strong></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="invoice-footer">
          {quotation.validTill && (
            <p><strong>Note:</strong> This quotation is valid until {quotation.validTill}.</p>
          )}
          <p>If you have any questions concerning this quotation, please contact us at info@hieil.com.</p>
          <p style={{ marginTop: '30px' }}><strong>Thank you for your business!</strong></p>
        </div>

        <div className="invoice-footer-meta">
          <span>https://hieil.com/admin/inquiry-system/quotations/preview/{id}</span>
          <span>1/1</span>
        </div>
      </div>
    </div>
  );
};

export default QuotationPreview;
