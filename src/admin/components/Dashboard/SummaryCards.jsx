import React, { useState, useEffect } from 'react';
import api from '../../config/api';
import './SummaryCards.css';

const SummaryCards = () => {
  const [stats, setStats] = useState({
    categories: 0, products: 0, orders: 0, blogs: 0, revenue: 0, avgRate: 0
  });

  useEffect(() => {
    api.get('/dashboard/stats')
      .then(res => setStats(res.data))
      .catch(err => console.error(err));
  }, []);

  const cards = [
    { title: 'Categories', value: stats.categories.toString(), label: 'Active List', color: 'purple' },
    { title: 'Total Orders', value: stats.orders.toString(), label: 'Processing', color: 'red' },
    { title: 'Products', value: stats.products.toString(), label: 'Live Catalog', color: 'teal' },
    { title: 'Blogs', value: stats.blogs.toString(), label: 'Published', color: 'darkblue' },
    { title: 'Revenue', value: `₹${(stats.revenue > 1000) ? (stats.revenue / 1000).toFixed(1) + 'K' : stats.revenue}`, label: 'Net Paid', color: 'orange' },
    { title: 'Avg Rate', value: `₹${stats.avgRate}`, label: 'Per Order', color: 'yellow' },
  ];

  return (
    <div className="summary-cards">
      {cards.map((card, index) => (
        <div key={index} className={`card card-${card.color}`}>
          <h4>{card.title}</h4>
          <h2>{card.value}</h2>
          <span className="badge">{card.label}</span>
        </div>
      ))}
    </div>
  );
};

export default SummaryCards;
