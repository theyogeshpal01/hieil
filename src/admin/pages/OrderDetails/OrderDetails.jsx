import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../../config/api';
import Swal from 'sweetalert2';
import './OrderDetails.css';
import { FaTrash, FaPlus } from 'react-icons/fa';

const OrderDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('general');
  const [isEditingAddress, setIsEditingAddress] = useState(false);
  const [addressInput, setAddressInput] = useState({
    company: '',
    contact: '',
    line1: '',
    city: '',
    email: '',
    phone: '',
    tax: ''
  });
  
  const [productsInput, setProductsInput] = useState([]);
  const [isSavingProducts, setIsSavingProducts] = useState(false);

  useEffect(() => {
    fetchOrderDetails();
  }, [id]);

  const fetchOrderDetails = async () => {
    try {
      const response = await api.get(`/orders/${id}`);
      setOrder(response.data);
      
      let parsedAddr = { company: '', contact: '', line1: '', city: '', email: '', phone: '', tax: '' };
      if (response.data.address) {
        try {
          parsedAddr = JSON.parse(response.data.address);
        } catch(e) {
          parsedAddr.line1 = response.data.address;
        }
      }
      setAddressInput(parsedAddr);

      setProductsInput(response.data.products || []);
      setLoading(false);
    } catch (err) {
      console.error(err);
      Swal.fire('Error', 'Failed to load order details.', 'error');
      setLoading(false);
    }
  };

  const handleSaveAddress = async () => {
    try {
      const addrStr = JSON.stringify(addressInput);
      await api.put(`/orders/${id}`, { address: addrStr });
      Swal.fire('Saved!', 'Address has been updated.', 'success');
      setIsEditingAddress(false);
      setOrder({ ...order, address: addrStr });
    } catch (err) {
      Swal.fire('Error', 'Failed to update address.', 'error');
    }
  };

  const handleProductChange = (index, field, value) => {
    const updatedProducts = [...productsInput];
    updatedProducts[index][field] = value;
    setProductsInput(updatedProducts);
  };

  const handleAddProduct = () => {
    setProductsInput([...productsInput, { name: '', quantity: '', price: '' }]);
  };

  const handleRemoveProduct = (index) => {
    const updatedProducts = productsInput.filter((_, i) => i !== index);
    setProductsInput(updatedProducts);
  };

  const handleSaveProducts = async () => {
    setIsSavingProducts(true);
    try {
      await api.put(`/orders/${id}`, { products: productsInput });
      Swal.fire('Saved!', 'Products have been updated.', 'success');
      setOrder({ ...order, products: productsInput });
    } catch (err) {
      Swal.fire('Error', 'Failed to update products.', 'error');
    } finally {
      setIsSavingProducts(false);
    }
  };

  if (loading) return <div className="loading-state">Loading order details...</div>;
  if (!order) return <div className="error-state">Order not found</div>;

  return (
    <div className="order-details-container">
      <div className="order-details-header">
        <div className="order-details-title" style={{fontSize: '24px', fontWeight: 'bold'}}>Order Details: {order.orderNo}</div>
        <button className="back-button" onClick={() => navigate(-1)}>
          &larr; Back to Orders
        </button>
      </div>

      <div className="order-details-card">
        <div className="order-tabs">
          <button 
            className={`order-tab ${activeTab === 'general' ? 'active' : ''}`}
            onClick={() => setActiveTab('general')}
          >
            General Info
          </button>
          <button 
            className={`order-tab ${activeTab === 'address' ? 'active' : ''}`}
            onClick={() => setActiveTab('address')}
          >
            Address
          </button>
          <button 
            className={`order-tab ${activeTab === 'products' ? 'active' : ''}`}
            onClick={() => setActiveTab('products')}
          >
            Products
          </button>
        </div>

        <div className="order-tab-content">
          {activeTab === 'general' && (
            <>
              <div className="info-grid">
                <div className="info-item">
                  <span className="info-label">Order Number</span>
                  <span className="info-value">{order.orderNo}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Linked Quotation</span>
                  <span className="info-value">{order.quotation}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Customer</span>
                  <span className="info-value">{order.customer || 'N/A'}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Country</span>
                  <span className="info-value">{order.country || 'N/A'}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Status</span>
                  <span className="info-value">
                    <span style={{
                      backgroundColor: order.status === 'Delivered' ? '#dcfce7' : order.status === 'Cancelled' ? '#fee2e2' : order.status === 'Processing' ? '#fef08a' : '#bfdbfe',
                      color: order.status === 'Delivered' ? '#166534' : order.status === 'Cancelled' ? '#991b1b' : order.status === 'Processing' ? '#854d0e' : '#1e3a8a',
                      padding: '4px 10px',
                      borderRadius: '4px',
                      fontSize: '12px',
                      fontWeight: '600'
                    }}>
                      {order.status || 'Processing'}
                    </span>
                  </span>
                </div>
                <div className="info-item">
                  <span className="info-label">Order Type</span>
                  <span className="info-value" style={{textTransform: 'capitalize'}}>{order.type}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Created At</span>
                  <span className="info-value">{new Date(order.createdAt).toLocaleString()}</span>
                </div>
              </div>
              
              <div style={{marginTop: '30px', paddingTop: '20px', borderTop: '1px solid #e5e7eb'}}>
              <button 
                onClick={async () => {
                    try {
                      let calcTotal = 0;
                      productsInput.forEach(p => {
                        const qty = parseFloat(p.quantity) || 0;
                        const price = parseFloat(p.price) || 0;
                        calcTotal += qty * price;
                      });
                      
                      const invRes = await api.get('/invoices');
                      const existingInvoice = invRes.data.find(inv => inv.orderNo === order.orderNo);

                      const invoiceData = {
                        orderNo: order.orderNo,
                        customer: order.customer,
                        country: order.country,
                        total: calcTotal.toString(),
                        type: order.type
                      };

                      if (existingInvoice) {
                        invoiceData.invoiceNo = existingInvoice.invoiceNo; // Keep the old invoice no
                        await api.put(`/invoices/${existingInvoice._id}`, invoiceData);
                      } else {
                        invoiceData.invoiceNo = 'INV-' + Date.now().toString().slice(-6);
                        await api.post('/invoices', invoiceData);
                      }
                      
                      Swal.fire({
                        title: 'Success!',
                        text: existingInvoice ? 'Invoice updated successfully.' : 'Invoice generated successfully.',
                        icon: 'success',
                        confirmButtonText: 'Go to Invoices'
                      }).then((result) => {
                        if (result.isConfirmed) {
                          navigate('/admin/inquiry-system/invoices');
                        }
                      });
                    } catch (err) {
                    Swal.fire('Error', 'Failed to generate invoice.', 'error');
                  }
                }}
                style={{backgroundColor: '#10b981', color: 'white', border: 'none', padding: '12px 24px', borderRadius: '6px', cursor: 'pointer', fontWeight: '600', fontSize: '15px'}}
              >
                Generate Invoice
              </button>
            </div>
            </>
          )}

          {activeTab === 'address' && (
            <div className="address-section">
              {!isEditingAddress && order.address ? (
                <div>
                  <div className="address-display" style={{display: 'flex', flexDirection: 'column', gap: '8px', backgroundColor: '#f9fafb', padding: '20px', borderRadius: '8px'}}>
                    {(() => {
                      try {
                        const addr = JSON.parse(order.address);
                        return (
                          <>
                            <div><strong>Company:</strong> {addr.company || 'N/A'}</div>
                            <div><strong>Contact Person:</strong> {addr.contact || 'N/A'}</div>
                            <div><strong>Address:</strong> {addr.line1 || 'N/A'}</div>
                            <div><strong>City/Country/ZIP:</strong> {addr.city || 'N/A'}</div>
                            <div><strong>Email:</strong> {addr.email || 'N/A'}</div>
                            <div><strong>Phone:</strong> {addr.phone || 'N/A'}</div>
                            <div><strong>Tax/VAT No:</strong> {addr.tax || 'N/A'}</div>
                          </>
                        );
                      } catch (e) {
                        return <div>{order.address}</div>;
                      }
                    })()}
                  </div>
                  <button className="edit-btn" onClick={() => setIsEditingAddress(true)}>
                    Edit Address Details
                  </button>
                </div>
              ) : (
                <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                  <input type="text" className="address-textarea" style={{minHeight: '40px', padding: '10px', marginBottom: '0'}} placeholder="Company Name" value={addressInput.company} onChange={(e) => setAddressInput({...addressInput, company: e.target.value})} />
                  <input type="text" className="address-textarea" style={{minHeight: '40px', padding: '10px', marginBottom: '0'}} placeholder="Contact Person Name" value={addressInput.contact} onChange={(e) => setAddressInput({...addressInput, contact: e.target.value})} />
                  <input type="text" className="address-textarea" style={{minHeight: '40px', padding: '10px', marginBottom: '0'}} placeholder="Address Line 1" value={addressInput.line1} onChange={(e) => setAddressInput({...addressInput, line1: e.target.value})} />
                  <input type="text" className="address-textarea" style={{minHeight: '40px', padding: '10px', marginBottom: '0'}} placeholder="City, Country, ZIP" value={addressInput.city} onChange={(e) => setAddressInput({...addressInput, city: e.target.value})} />
                  <input type="email" className="address-textarea" style={{minHeight: '40px', padding: '10px', marginBottom: '0'}} placeholder="Email" value={addressInput.email} onChange={(e) => setAddressInput({...addressInput, email: e.target.value})} />
                  <input type="text" className="address-textarea" style={{minHeight: '40px', padding: '10px', marginBottom: '0'}} placeholder="Phone" value={addressInput.phone} onChange={(e) => setAddressInput({...addressInput, phone: e.target.value})} />
                  <input type="text" className="address-textarea" style={{minHeight: '40px', padding: '10px', marginBottom: '0'}} placeholder="Tax / VAT No." value={addressInput.tax} onChange={(e) => setAddressInput({...addressInput, tax: e.target.value})} />
                  
                  <div style={{display: 'flex', gap: '10px', marginTop: '10px'}}>
                    <button className="save-btn" onClick={handleSaveAddress}>
                      Save Address Details
                    </button>
                    {order.address && (
                      <button className="back-button" onClick={() => {
                        setIsEditingAddress(false);
                        try {
                          setAddressInput(JSON.parse(order.address));
                        } catch(e) {
                          setAddressInput({company:'', contact:'', line1: order.address, city:'', email:'', phone:'', tax:''});
                        }
                      }}>
                        Cancel
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>
          )}

          {activeTab === 'products' && (
            <div className="products-section">
              <div className="products-list" style={{display: 'flex', flexDirection: 'column', gap: '16px'}}>
                {productsInput.length === 0 ? (
                  <p style={{color: '#6b7280'}}>No products added to this order yet.</p>
                ) : (
                  productsInput.map((product, index) => (
                    <div key={index} className="product-row" style={{display: 'flex', gap: '12px', alignItems: 'center', backgroundColor: '#f9fafb', padding: '16px', borderRadius: '8px', border: '1px solid #e5e7eb'}}>
                      <div style={{flex: 2}}>
                        <label className="info-label" style={{display: 'block', marginBottom: '6px'}}>Product Name</label>
                        <input 
                          type="text" 
                          value={product.name} 
                          onChange={(e) => handleProductChange(index, 'name', e.target.value)}
                          className="address-textarea"
                          style={{minHeight: '40px', marginBottom: '0', padding: '8px 12px'}}
                          placeholder="Product Name"
                        />
                      </div>
                      <div style={{flex: 1}}>
                        <label className="info-label" style={{display: 'block', marginBottom: '6px'}}>Quantity</label>
                        <input 
                          type="text" 
                          value={product.quantity} 
                          onChange={(e) => handleProductChange(index, 'quantity', e.target.value)}
                          className="address-textarea"
                          style={{minHeight: '40px', marginBottom: '0', padding: '8px 12px'}}
                          placeholder="Qty"
                        />
                      </div>
                      <div style={{flex: 1}}>
                        <label className="info-label" style={{display: 'block', marginBottom: '6px'}}>Price/Rate</label>
                        <input 
                          type="text" 
                          value={product.price} 
                          onChange={(e) => handleProductChange(index, 'price', e.target.value)}
                          className="address-textarea"
                          style={{minHeight: '40px', marginBottom: '0', padding: '8px 12px'}}
                          placeholder="Price"
                        />
                      </div>
                      <button 
                        onClick={() => handleRemoveProduct(index)}
                        style={{backgroundColor: '#fee2e2', color: '#ef4444', border: 'none', padding: '10px', borderRadius: '6px', cursor: 'pointer', marginTop: '22px'}}
                        title="Remove Product"
                      >
                        <FaTrash />
                      </button>
                    </div>
                  ))
                )}
              </div>
              <div style={{display: 'flex', gap: '12px', marginTop: '24px'}}>
                <button 
                  onClick={handleAddProduct}
                  style={{backgroundColor: '#e0f2fe', color: '#0ea5e9', border: 'none', padding: '10px 20px', borderRadius: '6px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: '600'}}
                >
                  <FaPlus /> Add Product
                </button>
                <button 
                  onClick={handleSaveProducts}
                  disabled={isSavingProducts}
                  className="save-btn"
                >
                  {isSavingProducts ? 'Saving...' : 'Save Products'}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
