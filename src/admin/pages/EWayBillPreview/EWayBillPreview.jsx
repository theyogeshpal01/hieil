import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaPrint, FaArrowLeft } from 'react-icons/fa';
import html2pdf from 'html2pdf.js';
import api from '../../config/api';
import './EWayBillPreview.css';

const EWayBillPreview = () => {
  const { id } = useParams(); // Can be logistics id or order id depending on route
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [logistics, setLogistics] = useState(null);
  const [order, setOrder] = useState(null);
  const [invoice, setInvoice] = useState(null);
  
  const [companyDetails, setCompanyDetails] = useState({
    name: 'HIEIL',
    tagline: 'Handcrafted Products, Inspired by India',
    address: 'Jaipur, Rajasthan, India',
    website: 'www.hieil.com',
    email: 'info@hieil.com',
    phone: '',
    gst: '',
    state: 'Rajasthan',
    stateCode: '08'
  });

  useEffect(() => {
    fetchData();
  }, [id]);

  const fetchData = async () => {
    try {
      setLoading(true);
      let logisticsRecord = null;
      let orderRecord = null;

      if (window.location.pathname.includes('preview-by-order')) {
        // ID is order ID
        try {
            const logRes = await api.get(`/domestic-logistics/by-order/${id}`);
            logisticsRecord = logRes.data;
        } catch(e) {
            alert("No logistics record found for this order. It might still be generating or missing.");
        }
        
        try {
            const ordRes = await api.get(`/orders/${id}`);
            orderRecord = ordRes.data;
        } catch(e){}
      } else {
        // ID is logistics ID
        try {
            const logRes = await api.get(`/domestic-logistics/${id}`);
            logisticsRecord = logRes.data;
            if (logisticsRecord.orderId && typeof logisticsRecord.orderId === 'object') {
                orderRecord = logisticsRecord.orderId;
            } else if (logisticsRecord.orderId) {
                const ordRes = await api.get(`/orders/${logisticsRecord.orderId}`);
                orderRecord = ordRes.data;
            }
        } catch(e){}
      }

      setLogistics(logisticsRecord);
      setOrder(orderRecord);

      // Attempt to find the invoice for this order
      if (orderRecord && orderRecord.orderNo) {
        try {
            const invsRes = await api.get('/invoices');
            const data = Array.isArray(invsRes.data) ? invsRes.data : (invsRes.data.data || []);
            const matchingInv = data.find(inv => inv.orderNo === orderRecord.orderNo);
            if (matchingInv) setInvoice(matchingInv);
        } catch (e) {
            console.error("Could not fetch invoice:", e);
        }
      }

      // Fetch company details
      try {
        const resDetails = await api.get('/settings?key=companyDetails');
        if (resDetails.data && resDetails.data.companyDetails) {
          const parsed = JSON.parse(resDetails.data.companyDetails);
          setCompanyDetails(prev => ({ ...prev, ...parsed }));
        }
      } catch (err) {
        console.error('Failed to fetch company details:', err);
      }

    } catch (err) {
      console.error('Error fetching data:', err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="loading-state">Loading E-Way Bill...</div>;
  }

  if (!logistics && !order) {
    return (
      <div className="error-state">
        <button onClick={() => navigate(-1)} className="back-btn"><FaArrowLeft /> Go Back</button>
        <p>E-Way Bill / Order data not found.</p>
      </div>
    );
  }

  let parsedAddress = order?.address;
  let parsedTax = order?.taxNo;
  if (typeof parsedAddress === 'string') {
      try {
          const parsed = JSON.parse(parsedAddress);
          parsedAddress = [parsed.company, parsed.line1, parsed.city, parsed.email ? `Email: ${parsed.email}` : null, parsed.phone ? `Phone: ${parsed.phone}` : null].filter(Boolean).join(', ');
          if (parsed.tax && !parsedTax) parsedTax = parsed.tax;
      } catch(e) {
          // If it's not valid JSON, leave it as is
      }
  }

  const printDocument = () => {
    const element = document.querySelector('.ewaybill-container');
    const opt = {
      margin:       [0.2, 0.2, 0.2, 0.2],
      filename:     `${`EWayBill-${logistics?.ewayBillNo || id}`}.pdf`,
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2, useCORS: true },
      jsPDF:        { unit: 'in', format: 'a4', orientation: 'portrait' }
    };
    html2pdf().set(opt).from(element).save();
  };

  const formatDate = (dateStr) => {
    if (!dateStr) return 'N/A';
    const d = new Date(dateStr);
    return d.toLocaleDateString('en-IN', { day: '2-digit', month: '2-digit', year: 'numeric' });
  };

  // Derive item details
  const products = order?.products || [];
  let totalValue = 0;
  
  return (
    <div className="ewaybill-preview-wrapper">
      <div className="preview-actions hide-on-print">
        <button className="back-btn" onClick={() => navigate(-1)}>
          <FaArrowLeft /> Back
        </button>
        <button className="print-btn" onClick={printDocument}>
          <FaPrint /> Print E-Way Bill
        </button>
      </div>

      <div className="ewaybill-container" id="ewaybill-content">
        
        {/* Header Section */}
        <div className="ewb-header">
          <div className="ewb-logo-sec">
             <h1>{companyDetails.name}</h1>
             <p className="tagline">{companyDetails.tagline}</p>
             <p className="contact-info">{companyDetails.website} | {companyDetails.address}</p>
          </div>
          <div className="ewb-title-sec">
             <h2>E-WAY BILL</h2>
             <p>GST E-Way Bill — Export Consignment</p>
             <span>(Form GST EWB-01)</span>
          </div>
        </div>

        {/* Info Grid 1 */}
        <div className="ewb-grid-info mt-15">
            <table className="info-table">
                <tbody>
                    <tr>
                        <td className="lbl">E-Way Bill No.</td>
                        <td className="val"><strong>{logistics?.ewayBillNo || 'N/A'}</strong></td>
                        <td className="lbl">Generated Date</td>
                        <td className="val">{formatDate(logistics?.generatedDate)}</td>
                    </tr>
                    <tr>
                        <td className="lbl">Valid From</td>
                        <td className="val">{formatDate(logistics?.generatedDate)}</td>
                        <td className="lbl">Valid Until</td>
                        <td className="val">{formatDate(logistics?.validUntil)}</td>
                    </tr>
                    <tr>
                        <td className="lbl">Invoice No.</td>
                        <td className="val">{invoice?.invoiceNo || order?.orderNo || 'N/A'}</td>
                        <td className="lbl">Invoice Date</td>
                        <td className="val">{formatDate(invoice?.createdAt || order?.createdAt)}</td>
                    </tr>
                    <tr>
                        <td className="lbl">Document Type</td>
                        <td className="val">Tax Invoice</td>
                        <td className="lbl">Transaction Type</td>
                        <td className="val">Export</td>
                    </tr>
                </tbody>
            </table>
        </div>

        {/* Consignor & Consignee */}
        <div className="ewb-parties mt-15">
            <div className="party-box">
                <div className="party-header">CONSIGNOR (FROM)</div>
                <div className="party-content">
                    <strong>{companyDetails.name}</strong><br/>
                    {companyDetails.tagline}<br/>
                    {companyDetails.address}<br/>
                    GSTIN: <strong>{companyDetails.gst}</strong><br/>
                    State: {companyDetails.state} | State Code: {companyDetails.stateCode}
                </div>
            </div>
            <div className="party-box">
                <div className="party-header">CONSIGNEE (TO)</div>
                <div className="party-content">
                    <strong>{order?.customer || 'N/A'}</strong><br/>
                    {parsedAddress || 'N/A'}<br/>
                    Country: {order?.country || 'N/A'}<br/>
                    GSTIN / Tax No: {parsedTax || 'UNREGISTERED'}<br/>
                    State: {order?.state || 'N/A'} | State Code: {order?.country?.toLowerCase() === 'india' ? '' : '99'}
                </div>
            </div>
        </div>

        {/* Dispatch Details */}
        <div className="ewb-section mt-15">
            <div className="section-header">DISPATCH & DELIVERY DETAILS</div>
            <table className="info-table">
                <tbody>
                    <tr>
                        <td className="lbl">Place of Dispatch</td>
                        <td className="val">{logistics?.dispatchDetails?.placeOfDispatch || companyDetails.address}</td>
                        <td className="lbl">Place of Delivery</td>
                        <td className="val">{logistics?.dispatchDetails?.placeOfDelivery || order?.deliveryPort || 'N/A'}</td>
                    </tr>
                    <tr>
                        <td className="lbl">Port of Export</td>
                        <td className="val">{logistics?.dispatchDetails?.portOfExport || 'JNPT Mumbai / Delhi ICD'}</td>
                        <td className="lbl">Country of Destination</td>
                        <td className="val">{logistics?.dispatchDetails?.countryOfDestination || order?.country || 'N/A'}</td>
                    </tr>
                    <tr>
                        <td className="lbl">Supply Type</td>
                        <td className="val">Outward</td>
                        <td className="lbl">Sub-type</td>
                        <td className="val">Export</td>
                    </tr>
                </tbody>
            </table>
        </div>

        {/* Items Table */}
        <div className="ewb-section mt-15">
            <div className="section-header">GOODS / ITEM DETAILS</div>
            <table className="items-table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Product Name</th>
                        <th>HSN Code</th>
                        <th>Unit</th>
                        <th>Qty</th>
                        <th>Taxable Value</th>
                        <th>CGST</th>
                        <th>SGST</th>
                        <th>IGST</th>
                        <th>Cess</th>
                    </tr>
                </thead>
                <tbody>
                    {products.length > 0 ? products.map((item, idx) => {
                        const price = parseFloat(item.price || item.unitPrice || 0);
                        const qty = parseInt(item.quantity || item.qty || 1);
                        const value = price * qty;
                        totalValue += value;
                        return (
                            <tr key={idx}>
                                <td>{idx + 1}</td>
                                <td>{item.name || item.productName || 'Product'}</td>
                                <td>{item.hsn || '9703'}</td>
                                <td>Pcs</td>
                                <td>{qty}</td>
                                <td>${value.toFixed(2)}</td>
                                <td>NIL</td>
                                <td>NIL</td>
                                <td>NIL</td>
                                <td>NIL</td>
                            </tr>
                        );
                    }) : (
                        <tr>
                            <td colSpan="10" style={{textAlign:'center', padding:'10px'}}>No items found.</td>
                        </tr>
                    )}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="5" style={{textAlign:'right', fontWeight:'bold', paddingRight: '10px'}}>TOTAL</td>
                        <td style={{fontWeight:'bold', background:'#166534', color:'white'}}>${totalValue.toFixed(2)}</td>
                        <td colSpan="4" style={{textAlign:'center', fontWeight:'bold', background:'#dcfce7', color:'#166534'}}>
                            NIL (EXPORT — ZERO RATED)
                        </td>
                    </tr>
                </tfoot>
            </table>
        </div>

        {/* Value Summary */}
        <div className="ewb-section mt-15">
            <div className="section-header">CONSIGNMENT VALUE SUMMARY</div>
            <table className="info-table">
                <tbody>
                    <tr>
                        <td className="lbl">Total Taxable Value</td>
                        <td className="val">${totalValue.toFixed(2)}</td>
                        <td className="lbl">Total Tax Amount</td>
                        <td className="val">NIL (Zero Rated Export)</td>
                    </tr>
                    <tr>
                        <td className="lbl">Shipping & Insurance</td>
                        <td className="val">$0.00</td>
                        <td className="lbl">TOTAL INVOICE VALUE</td>
                        <td className="val" style={{fontWeight:'bold', background:'#166534', color:'white'}}>${totalValue.toFixed(2)}</td>
                    </tr>
                </tbody>
            </table>
        </div>

        {/* Transporter Details */}
        <div className="ewb-section mt-15">
            <div className="section-header">PART B — TRANSPORTER / VEHICLE DETAILS</div>
            <table className="info-table">
                <tbody>
                    <tr>
                        <td className="lbl">Transporter Name</td>
                        <td className="val">{logistics?.transporterDetails?.transporterName || 'N/A'}</td>
                        <td className="lbl">Transporter Doc No/Date</td>
                        <td className="val">{logistics?.transporterDetails?.transporterId || 'N/A'}</td>
                    </tr>
                    <tr>
                        <td className="lbl">Mode of Transport</td>
                        <td className="val">{logistics?.transporterDetails?.modeOfTransport || 'Road'}</td>
                        <td className="lbl">Vehicle / Airway No.</td>
                        <td className="val">{logistics?.transporterDetails?.vehicleNo || 'N/A'}</td>
                    </tr>
                    <tr>
                        <td className="lbl">Approx. Distance (km)</td>
                        <td className="val">{logistics?.transporterDetails?.approxDistance || 'N/A'}</td>
                        <td className="lbl">LR/RR/AirwayBill No.</td>
                        <td className="val">{logistics?.transporterDetails?.lrRrAirwayBill || 'N/A'}</td>
                    </tr>
                    <tr>
                        <td className="lbl">Consignment No.</td>
                        <td className="val">{logistics?.ewayBillNo || 'N/A'}</td>
                        <td className="lbl">No. of Packages</td>
                        <td className="val">{logistics?.packagingDetails?.noOfPackages || 'N/A'}</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div className="footer-details mt-15" style={{display:'flex', gap:'15px'}}>
            <table className="info-table" style={{flex: 1}}>
                <tbody>
                    <tr>
                        <td className="lbl" style={{width: '40%'}}>Gross Weight (kg)</td>
                        <td className="val">{logistics?.packagingDetails?.grossWeight || 'N/A'}</td>
                    </tr>
                </tbody>
            </table>
            <table className="info-table" style={{flex: 1}}>
                <tbody>
                    <tr>
                        <td className="lbl" style={{width: '40%'}}>Packaging Type</td>
                        <td className="val">{logistics?.packagingDetails?.packagingType || 'N/A'}</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div className="ewb-note mt-15">
            <strong>Note:</strong> This is an Export E-Way Bill under GST (EWB-01). Goods are exported under LUT/Bond for Zero Rated Supply. No IGST is applicable on export consignments. E-Way Bill is mandatory for consignments exceeding INR 50,000 in value.
        </div>

        <div className="ewb-section mt-15" style={{borderBottom: 'none'}}>
            <div className="section-header">AUTHORIZED SIGNATORY</div>
            <div style={{display:'flex', justifyContent:'space-between', padding:'20px', alignItems: 'flex-end'}}>
                <div style={{width:'40%', textAlign: 'center'}}>
                    {companyDetails.signatureUrl ? (
                        <img src={companyDetails.signatureUrl} alt="Signature" style={{maxHeight: '60px', marginBottom: '10px', marginLeft: 'auto', marginRight: 'auto', display: 'block'}} />
                    ) : (
                        <div style={{height: '60px'}}></div>
                    )}
                    <div style={{borderTop:'1px solid #000', paddingTop:'5px'}}>
                        <strong>{companyDetails.signatoryName || 'Authorized Signatory'}</strong><br/>
                        <span style={{fontSize:'12px'}}>{companyDetails.designation || 'Signatory'}</span>
                    </div>
                </div>
                <div style={{width:'40%', textAlign: 'center'}}>
                    {companyDetails.stampUrl ? (
                        <img src={companyDetails.stampUrl} alt="Company Stamp" style={{maxHeight: '80px', marginBottom: '10px', marginLeft: 'auto', marginRight: 'auto', display: 'block'}} />
                    ) : (
                        <div style={{height: '80px'}}></div>
                    )}
                    <div style={{borderTop:'1px solid #000', paddingTop:'5px'}}>
                        <span>Company Stamp</span>
                    </div>
                </div>
            </div>
            <div style={{padding:'0 20px 20px 20px', fontWeight:'bold', textAlign:'center'}}>
                For {companyDetails.name || 'HIEIL'}<br/>
                <span style={{fontWeight:'normal', fontSize:'12px'}}>Generated by: System Admin</span>
            </div>
        </div>

        <div className="ewb-footer-strip mt-15">
            {companyDetails.name || 'HIEIL'} | {companyDetails.website} | Form GST EWB-01
        </div>

      </div>
    </div>
  );
};

export default EWayBillPreview;
