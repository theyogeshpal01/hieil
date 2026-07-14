import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Dashboard from './pages/Dashboard/Dashboard';
import GenericList from './pages/GenericList/GenericList';
import SubAdminMgmt from './pages/SubAdminMgmt/SubAdminMgmt';
import CreateQuotation from './pages/CreateQuotation/CreateQuotation';
import InvoicePreview from './pages/InvoicePreview/InvoicePreview';
import ReportDashboard from './pages/ReportDashboard/ReportDashboard';
import Login from './pages/Login/Login';
import { pageConfigs, genericData } from './config/pageConfigs';

function AdminApp() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem('isAuthenticated') === 'true'
  );

  if (!isAuthenticated) {
    return <Login onLogin={() => setIsAuthenticated(true)} />;
  }

  return (
    <Routes>
        <Route element={<Layout />}>
          <Route index element={<Dashboard />} />
          
          {/* Create Quotation Routes */}
          <Route path="retailer-system/product-inquiries/create-quotation/:id" element={<CreateQuotation />} />
          <Route path="inquiry-system/product-inquiries/create-quotation/:id" element={<CreateQuotation />} />
          
          {/* Invoice Preview Routes */}
          <Route path="retailer-system/invoices/preview/:id" element={<InvoicePreview />} />
          <Route path="inquiry-system/invoices/preview/:id" element={<InvoicePreview />} />
          
          {/* Dynamically render all the CRUD pages based on sidebar links */}
          {pageConfigs.map((config, index) => (
            <Route 
              key={index} 
              path={config.path} 
              element={
                config.path === 'sub-admin-mgmt' ? (
                  <SubAdminMgmt />
                ) : config.path === 'inquiry-system/reports' ? (
                  <ReportDashboard />
                ) : (
                  <GenericList 
                    title={config.title} 
                    subtitle={config.subtitle}
                    columns={config.columns} 
                    data={config.data || genericData} 
                    config={config}
                  />
                )
              } 
            />
          ))}
          
        </Route>
      </Routes>
  );
}

export default AdminApp;
