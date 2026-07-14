import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../config/api';
import './LatestOrders.css';

const LatestOrders = () => {
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    api.get('/dashboard/latest-orders')
      .then(res => setOrders(res.data))
      .catch(err => console.error(err));
  }, []);

  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { day: 'numeric', month: 'short' });
  };
  
  const formatTime = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  };
  return (
    <div className="latest-orders">
      <h3 className="orders-title">Latest Orders Activity</h3>
      <div className="orders-timeline">
        {orders.length === 0 ? <p style={{textAlign: 'center', color: '#64748b'}}>No orders found</p> : null}
        {orders.map((order, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <span className="time">{formatTime(order.createdAt)}</span>
              <h4>{order.orderId || (order._id ? order._id.substring(0, 8).toUpperCase() : 'NEW-ORD')}</h4>
              <p>Processing on {formatDate(order.createdAt)}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="full-management-btn" onClick={() => navigate('/retailer-system/orders')}>Full Order Management</button>
    </div>
  );
};

export default LatestOrders;
