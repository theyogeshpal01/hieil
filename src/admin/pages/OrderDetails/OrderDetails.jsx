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
  const [addressInput, setAddressInput] = useState('');
  
  const [productsInput, setProductsInput] = useState([]);
  const [isSavingProducts, setIsSavingProducts] = useState(false);

  useEffect(() => {
    fetchOrderDetails();
  }, [id]);

  const fetchOrderDetails = async () => {
    try {
      const response = await api.get(`/orders/${id}`);
      setOrder(response.data);
      setAddressInput(response.data.address || '');
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
      await api.put(`/orders/${id}`, { address: addressInput });
      Swal.fire('Saved!', 'Address has been updated.', 'success');
      setIsEditingAddress(false);
      setOrder({ ...order, address: addressInput });
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
        <h2 className="order-details-title">Order Details: {order.orderNo}</h2>
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
                    
                    const invoiceData = {
                      invoiceNo: 'INV-' + Date.now().toString().slice(-6),
                      orderNo: order.orderNo,
                      customer: order.customer,
                      country: order.country,
                      total: calcTotal.toString(),
                      type: order.type
                    };
                    
                    await api.post('/invoices', invoiceData);
                    Swal.fire({
                      title: 'Success!',
                      text: 'Invoice generated successfully.',
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
                  <div className="address-display">
                    {order.address}
                  </div>
                  <button className="edit-btn" onClick={() => setIsEditingAddress(true)}>
                    Edit Address
                  </button>
                </div>
              ) : (
                <div>
                  <textarea 
                    className="address-textarea"
                    placeholder="Enter full delivery address here..."
                    value={addressInput}
                    onChange={(e) => setAddressInput(e.target.value)}
                  ></textarea>
                  <div style={{display: 'flex', gap: '10px'}}>
                    <button className="save-btn" onClick={handleSaveAddress}>
                      Save Address
                    </button>
                    {order.address && (
                      <button className="back-button" onClick={() => {
                        setIsEditingAddress(false);
                        setAddressInput(order.address);
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
