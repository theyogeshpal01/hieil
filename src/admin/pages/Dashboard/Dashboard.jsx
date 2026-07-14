import React from 'react';
import SummaryCards from '../../components/Dashboard/SummaryCards';
import Charts from '../../components/Dashboard/Charts';
import LatestOrders from '../../components/Dashboard/LatestOrders';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-page">
      <div className="dashboard-header">
        <h1>Dashboard</h1>
        <p>Real-time Dynamic performance analytics</p>
      </div>
      
      <SummaryCards />
      <Charts />
      <LatestOrders />
    </div>
  );
};

export default Dashboard;
