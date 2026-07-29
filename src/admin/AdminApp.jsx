import React, { useState, useEffect, Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout/Layout';

const Dashboard = lazy(() => import('./pages/Dashboard/Dashboard'));
const GenericList = lazy(() => import('./pages/GenericList/GenericList'));
const SubAdminMgmt = lazy(() => import('./pages/SubAdminMgmt/SubAdminMgmt'));
const CreateQuotation = lazy(() => import('./pages/CreateQuotation/CreateQuotation'));
const InvoicePreview = lazy(() => import('./pages/InvoicePreview/InvoicePreview'));
const QuotationPreview = lazy(() => import('./pages/QuotationPreview/QuotationPreview'));
const OrderDetails = lazy(() => import('./pages/OrderDetails/OrderDetails'));
const ReportDashboard = lazy(() => import('./pages/ReportDashboard/ReportDashboard'));
const PayoutPreview = lazy(() => import('./pages/PayoutPreview/PayoutPreview'));
const Login = lazy(() => import('./pages/Login/Login'));
const AdminProfile = lazy(() => import('./pages/AdminProfile/AdminProfile'));
const Settings = lazy(() => import('./pages/Settings/Settings'));
import { pageConfigs, genericData } from './config/pageConfigs';
import './index.css';

function AdminApp() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem('isAuthenticated') === 'true'
  );

  if (!isAuthenticated) {
    return <Login onLogin={() => setIsAuthenticated(true)} />;
  }

  return (
    <Suspense fallback={<div style={{height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}><div className="hieil-spinner"></div></div>}>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="profile" element={<AdminProfile />} />
          <Route path="settings" element={<Settings />} />
          
          {/* Create Quotation Routes */}
          <Route path="retailer-system/product-inquiries/create-quotation/:id" element={<CreateQuotation />} />
          <Route path="inquiry-system/product-inquiries/create-quotation/:id" element={<CreateQuotation />} />
          
          {/* Invoice Preview Routes */}
          <Route path="retailer-system/invoices/preview/:id" element={<InvoicePreview />} />
          <Route path="inquiry-system/invoices/preview/:id" element={<InvoicePreview />} />

          {/* Quotation Preview Routes */}
          <Route path="retailer-system/quotations/preview/:id" element={<QuotationPreview />} />
          <Route path="inquiry-system/quotations/preview/:id" element={<QuotationPreview />} />

          {/* Order Details Route */}
          <Route path="inquiry-system/orders/details/:id" element={<OrderDetails />} />
          
          {/* Payout Preview Route */}
          <Route path="vendor-management/payout-preview/:id" element={<PayoutPreview />} />
          
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
    </Suspense>
  );
}

export default AdminApp;
