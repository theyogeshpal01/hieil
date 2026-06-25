import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';
import './index.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main style={{ padding: '80px 40px', color: '#fff', textAlign: 'center', minHeight: '60vh' }}>
          <h1>New HIEIL Frontend</h1>
          <p style={{ marginTop: '20px', color: '#b5aaa0' }}>
            Awaiting next screenshots for content.
          </p>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
