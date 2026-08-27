import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaPrint, FaArrowLeft } from 'react-icons/fa';
import Swal from 'sweetalert2';
import api from '../../../config/api';
import './PurchaseOrderPreview.css';

const formatImageUrl = (url) => {
  if (!url) return '';
  if (url.startsWith('http')) return url;
  const baseUrl = import.meta.env.VITE_API_URL || 'http://localhost:3000';
  return url.startsWith('/') ? `${baseUrl}${url}` : `${baseUrl}/${url}`;
};

const PurchaseOrderPreview = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [vendorOrder, setVendorOrder] = useState(null);
  const [clientOrder, setClientOrder] = useState(null);
  const [vendor, setVendor] = useState(null);
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
    signatoryName: '[Authorised Signatory Name]',
    designation: '[Designation]'
  });

  useEffect(() => {
    const fetchPO = async () => {
      try {
        const voRes = await api.get(`/vendor-orders/${id}`);
        const vo = voRes.data;
        if (!vo) {
          Swal.fire('Error', 'Purchase Order not found', 'error');
          setLoading(false);
          return;
        }
        setVendorOrder(vo);

        if (vo.vendorId) {
          try {
            const vendorRes = await api.get(`/vendors/${vo.vendorId}`);
            setVendor(vendorRes.data);
          } catch(e) {}
        }
        
        if (vo.orderId) {
          try {
            const orderRes = await api.get(`/orders/${vo.orderId}`);
            setClientOrder(orderRes.data);
          } catch(e) {}
        }

        try {
          const settingsRes = await api.get('/settings?key=companyDetails');
          if (settingsRes.data && settingsRes.data.companyDetails) {
            setCompanyDetails(prev => ({ ...prev, ...JSON.parse(settingsRes.data.companyDetails) }));
          }
        } catch(e) {}
        
      } catch (error) {
        console.error('Error fetching PO:', error);
        Swal.fire('Error', 'Failed to fetch PO details', 'error');
      } finally {
        setLoading(false);
      }
    };

    fetchPO();
  }, [id]);

  const handlePrint = () => {
    window.print();
  };

  if (loading) {
    return <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Loading Purchase Order...</div>;
  }

  if (!vendorOrder) {
    return <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>PO data is unavailable.</div>;
  }

  const dateStr = new Date(vendorOrder.createdAt || Date.now()).toLocaleDateString('en-IN', {
    day: '2-digit', month: '2-digit', year: 'numeric'
  });

  const deliveryDateStr = vendorOrder.expectedDeliveryDate ? new Date(vendorOrder.expectedDeliveryDate).toLocaleDateString('en-IN') : '[DD/MM/YYYY]';

  // Use vendor amount as unit price, fallback to agreedPriceInr / qty if not available
  const vendorUnitPrice = vendor && vendor.amount ? parseFloat(vendor.amount) : 0;
  
  let items = [];
  let calculatedSubtotal = 0;

  if (clientOrder && clientOrder.products && clientOrder.products.length > 0) {
    const totalQty = clientOrder.products.reduce((sum, p) => sum + (parseFloat(p.qty || p.quantity) || 1), 0);
    items = clientOrder.products.map((p, i) => {
      const qty = parseFloat(p.qty || p.quantity) || 1;
      const unitPrice = vendorUnitPrice > 0 ? vendorUnitPrice : (vendorOrder.agreedPriceInr / totalQty);
      const amount = unitPrice * qty;
      calculatedSubtotal += amount;

      return {
        id: i + 1,
        descTitle: p.name || p.productName || 'Product',
        descSub: p.productId ? `ID: ${p.productId}` : '',
        hsn: p.hsn || '',
        qty: qty,
        unit: p.unit || 'Pcs',
        price: unitPrice.toFixed(2),
        amount: amount.toFixed(2)
      };
    });
  } else {
    const unitPrice = vendorUnitPrice > 0 ? vendorUnitPrice : vendorOrder.agreedPriceInr;
    calculatedSubtotal = unitPrice;
    
    items = [{
      id: 1,
      descTitle: 'Manufactured Goods as per Order',
      descSub: '',
      hsn: '-',
      qty: 1,
      unit: 'Lot',
      price: unitPrice.toFixed(2),
      amount: unitPrice.toFixed(2)
    }];
  }

  // Use calculated subtotal if vendor amount was used, otherwise use agreed price
  const displayTotal = vendorUnitPrice > 0 ? calculatedSubtotal.toFixed(2) : vendorOrder.agreedPriceInr.toFixed(2);

  return (
    <div className="po-preview-page">
      <div className="po-preview-actions no-print">
        <button className="btn-back" onClick={() => navigate(-1)}>
          <FaArrowLeft /> Back
        </button>
        <button className="btn-print" onClick={handlePrint}>
          <FaPrint /> Print / Download PDF
        </button>
      </div>

      <div className="po-paper">
        {/* Top Header */}
        <div className="po-top-row">
          <div className="po-brand-box">
            <h1>{companyDetails.name}</h1>
            <p className="tagline">{companyDetails.tagline}</p>
            <p>{companyDetails.website} | {companyDetails.address}</p>
          </div>
          <div className="po-title-box">
            <h2>PURCHASE ORDER</h2>
            <p>Export Purchase Order</p>
          </div>
        </div>

        {/* Meta Details */}
        <table className="po-meta-table">
          <tbody>
            <tr>
              <td className="label">PO Number</td>
              <td className="value">{vendorOrder.poNumber}</td>
              <td className="label">PO Date</td>
              <td className="value">{dateStr}</td>
            </tr>
            <tr>
              <td className="label">Invoice Ref</td>
              <td className="value">{clientOrder ? clientOrder.invoiceNo || clientOrder.orderNo : '-'}</td>
              <td className="label">Delivery Required By</td>
              <td className="value">{deliveryDateStr}</td>
            </tr>
            <tr>
              <td className="label">Incoterms</td>
              <td className="value">{vendorOrder.incoterm || 'FOB Jaipur, India'}</td>
              <td className="label">Currency</td>
              <td className="value">{vendorOrder.currency || 'INR'}</td>
            </tr>
          </tbody>
        </table>

        {/* Addresses */}
        <div className="po-address-row">
          <div className="po-address-box">
            <div className="po-address-header">BUYER (PURCHASER / EXPORTER)</div>
            <div className="po-address-content">
              <strong>{companyDetails.name}</strong><br/>
              {companyDetails.address}<br/>
              Website: {companyDetails.website}<br/>
              Email: {companyDetails.email}<br/>
              Phone: {companyDetails.phone}<br/>
              Tax / VAT No.: {companyDetails.gst}<br/>
              IEC No.: {companyDetails.iec}
            </div>
          </div>
          <div className="po-address-box">
            <div className="po-address-header">VENDOR (SELLER)</div>
            <div className="po-address-content">
              <strong>{vendor ? vendor.vendorName || vendor.name : 'Vendor Name'}</strong><br/>
              {vendor && vendor.address ? <>{vendor.address}<br/></> : null}
              {vendor && vendor.city ? <>{vendor.city}, {vendor.state}<br/></> : null}
              Email: {vendor ? vendor.email : '-'}<br/>
              Phone: {vendor ? vendor.phone : '-'}<br/>
              GST No.: {vendor ? vendor.gst : '-'}
            </div>
          </div>
        </div>

        {/* Ordered Items */}
        <div className="po-items-table-wrapper">
          <div className="po-section-header">ORDERED ITEMS</div>
          <table className="po-items-table">
            <thead>
              <tr>
                <th>#</th>
                <th className="left">PRODUCT DESCRIPTION</th>
                <th>ITEM CODE</th>
                <th>UOM</th>
                <th>QTY</th>
                <th className="right">UNIT PRICE</th>
                <th className="right" style={{backgroundColor: '#d4af37'}}>AMOUNT ({vendorOrder.currency || 'INR'})</th>
                <th>REQUIRED BY</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td className="left">
                    <span className="item-title">{item.descTitle}</span>
                    <span className="item-sub">{item.descSub}</span>
                  </td>
                  <td>{item.hsn}</td>
                  <td>{item.unit}</td>
                  <td>{item.qty}</td>
                  <td className="right">₹{item.price}</td>
                  <td className="right bold">₹{item.amount}</td>
                  <td>{deliveryDateStr}</td>
                </tr>
              ))}
            </tbody>
          </table>
          
          <table className="po-totals">
            <tbody>
              <tr>
                <td className="label">SUBTOTAL (EX-WORKS)</td>
                <td className="value">₹{displayTotal}</td>
              </tr>
              <tr>
                <td className="label">Shipping & Insurance (EST.)</td>
                <td className="value">₹0.00</td>
              </tr>
              <tr className="po-totals-grand">
                <td className="label">TOTAL ORDER VALUE ({vendorOrder.currency || 'INR'})</td>
                <td className="value">₹{displayTotal}</td>
              </tr>
            </tbody>
          </table>
          <div className="clearfix"></div>
        </div>

        {/* Terms & Conditions */}
        <div className="po-section-header">TERMS & CONDITIONS</div>
        <table className="po-info-table">
          <tbody>
            <tr>
              <td className="info-label">Payment Terms</td>
              <td>{vendorOrder.paymentTerms || 'As agreed per installments / advance schedules.'}</td>
            </tr>
            <tr>
              <td className="info-label">Payment Method</td>
              <td>{vendorOrder.paymentMethod || 'Bank Transfer / UPI'}</td>
            </tr>
            <tr>
              <td className="info-label">Delivery Port</td>
              <td>{vendorOrder.deliveryPort || 'Jaipur / Delhi'}</td>
            </tr>
            <tr>
              <td className="info-label">Packaging</td>
              <td>{vendorOrder.packaging || 'Export-grade double-wall corrugated with custom foam inserts for fragile items.'}</td>
            </tr>
            <tr>
              <td className="info-label">Quality Assurance</td>
              <td>{vendorOrder.qualityAssurance || '100% inspection before dispatch, photographic proof provided.'}</td>
            </tr>
            <tr>
              <td className="info-label">Lead Time</td>
              <td>{vendorOrder.leadTime || 'As specified per product. Customizations may require additional time.'}</td>
            </tr>
            <tr>
              <td className="info-label">Cancellation</td>
              <td>{vendorOrder.cancellation || 'Any cancellation or quantity change requests require notice.'}</td>
            </tr>
          </tbody>
        </table>

        {/* Shipping / Delivery */}
        <div className="po-section-header">SHIPPING / DELIVERY INSTRUCTIONS</div>
        <table className="po-info-table">
          <tbody>
            <tr>
              <td className="info-label">Ship To</td>
              <td>{companyDetails.address}</td>
            </tr>
            <tr>
              <td className="info-label">Shipping Mode</td>
              <td>{vendorOrder.shippingMode || 'Road Transport / Local Logistics'}</td>
            </tr>
            <tr>
              <td className="info-label">Preferred Carrier</td>
              <td>{vendorOrder.preferredCarrier || 'As agreed'}</td>
            </tr>
            <tr>
              <td className="info-label">Special Instructions</td>
              <td>{vendorOrder.specialInstructions || vendorOrder.notes || 'Ensure safe handling and proper packaging for transit.'}</td>
            </tr>
          </tbody>
        </table>

        <div className="po-note-highlight">
          <strong>Note:</strong> This Purchase Order constitutes a binding commitment by the Buyer. Vendor acceptance of this PO implies agreement to all stated terms. All prices are in INR unless otherwise stated.
        </div>

        {/* Signatures */}
        <div className="po-section-header">AUTHORISED SIGNATORY</div>
        <div className="po-sig-row">
          <div className="po-sig-box">
            <p style={{margin: '0 0 10px 0'}}><strong>Buyer Signature:</strong></p>
            {companyDetails.signatureUrl && (
              <img src={formatImageUrl(companyDetails.signatureUrl)} alt="Signature" style={{ maxHeight: '50px', display: 'block' }} />
            )}
            <div className="po-sig-line">
              {companyDetails.signatoryName || 'Authorised Signatory'} — {companyDetails.name}<br/>
              {companyDetails.designation || 'Designation'}
            </div>
          </div>
          <div className="po-sig-box">
            <p style={{margin: '0 0 10px 0'}}><strong>Vendor Acceptance Signature:</strong></p>
            <br/>
            <div className="po-sig-line" style={{marginTop: '25px'}}>
              Authorised Signatory — {vendor ? vendor.vendorName || vendor.name : 'Vendor'}<br/>
              Designation
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="po-footer-strip">
          {companyDetails.name} | Authentic Indian Handcraft Exports | {companyDetails.website} | Confidential & Proprietary
        </div>

      </div>
    </div>
  );
};

export default PurchaseOrderPreview;
