import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import api from '../../../config/api';
import './AdminProfile.css';

const AdminProfile = () => {
  const [formData, setFormData] = useState({
    email: '',
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });
  
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // We could fetch the current admin details, or get from localStorage
    const authData = localStorage.getItem('auth_data');
    if (authData) {
      try {
        const parsed = JSON.parse(authData);
        if (parsed && parsed.admin && parsed.admin.email) {
          setFormData(prev => ({ ...prev, email: parsed.admin.email }));
        }
      } catch (e) {}
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.newPassword !== formData.confirmPassword) {
      return Swal.fire('Error', 'New passwords do not match!', 'error');
    }
    
    try {
      setLoading(true);
      const res = await api.put('/auth/update-credentials', {
        email: formData.email,
        currentPassword: formData.currentPassword,
        newPassword: formData.newPassword
      });
      
      Swal.fire('Success', 'Admin credentials updated successfully!', 'success');
      
      // Update local storage if email changed
      if (res.data && res.data.admin) {
        const authData = JSON.parse(localStorage.getItem('auth_data') || '{}');
        authData.admin = res.data.admin;
        localStorage.setItem('auth_data', JSON.stringify(authData));
      }
      
      setFormData({ ...formData, currentPassword: '', newPassword: '', confirmPassword: '' });
    } catch (err) {
      console.error(err);
      Swal.fire('Error', err.response?.data?.message || 'Failed to update credentials', 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="admin-profile-page">
      <div className="page-header">
        <h1>Admin Profile</h1>
        <p>Update your admin email and password</p>
      </div>
      
      <div className="profile-card">
        <form onSubmit={handleSubmit} className="profile-form">
          <div className="form-group">
            <label>Email Address</label>
            <input 
              type="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              required 
            />
          </div>
          
          <div className="form-group">
            <label>Current Password</label>
            <input 
              type="password" 
              name="currentPassword" 
              value={formData.currentPassword} 
              onChange={handleChange} 
              placeholder="Leave blank if you only want to change email"
            />
          </div>
          
          {formData.currentPassword && (
            <>
              <div className="form-group">
                <label>New Password</label>
                <input 
                  type="password" 
                  name="newPassword" 
                  value={formData.newPassword} 
                  onChange={handleChange} 
                  required={!!formData.currentPassword}
                />
              </div>
              
              <div className="form-group">
                <label>Confirm New Password</label>
                <input 
                  type="password" 
                  name="confirmPassword" 
                  value={formData.confirmPassword} 
                  onChange={handleChange} 
                  required={!!formData.currentPassword}
                />
              </div>
            </>
          )}
          
          <button type="submit" disabled={loading} className="save-btn">
            {loading ? 'Saving...' : 'Save Changes'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminProfile;
