import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../../config/api';
import Swal from 'sweetalert2';
import './OrderDetails.css';

const OrderDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('general');
  const [isEditingAddress, setIsEditingAddress] = useState(false);
  const [addressInput, setAddressInput] = useState('');

  useEffect(() => {
    fetchOrderDetails();
  }, [id]);

  const fetchOrderDetails = async () => {
    try {
      const response = await api.get(`/orders/${id}`);
      setOrder(response.data);
      setAddressInput(response.data.address || '');
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
        </div>

        <div className="order-tab-content">
          {activeTab === 'general' && (
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
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
