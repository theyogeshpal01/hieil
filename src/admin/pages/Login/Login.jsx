import React, { useState } from 'react';
import './Login.css';
import { FaEnvelope, FaLock, FaSignInAlt, FaExclamationCircle } from 'react-icons/fa';

import api from '../../config/api';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await api.post('/auth/login', { email, password });
      if (res.data && res.data.token) {
        localStorage.setItem('adminToken', res.data.token);
        localStorage.setItem('isAuthenticated', 'true');
        onLogin();
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Invalid email or password. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <div className="login-logo">
            <span className="logo-icon">H</span>
          </div>
          <h1 className="text-black text-5xl mb-4">Welcome Back</h1>
          <p>Sign in to Hieil Admin Dashboard</p>
        </div>

        {error && (
          <div className="login-error">
            <FaExclamationCircle />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="login-form">
          <div className="input-group">
            <label>Email Address</label>
            <div className="input-wrapper">
              <FaEnvelope className="input-icon" />
              <input 
                type="email" 
                placeholder="Enter your email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="input-group">
            <label>Password</label>
            <div className="input-wrapper">
              <FaLock className="input-icon" />
              <input 
                type="password" 
                placeholder="Enter your password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="form-options">
            <label className="remember-me">
              <input type="checkbox" />
              <span>Remember me</span>
            </label>
            <a href="#" className="forgot-password">Forgot Password?</a>
          </div>

          <button type="submit" className="login-submit-btn">
            <FaSignInAlt />
            <span>Sign In</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
