import React, { useState } from 'react';
import { FaChevronLeft, FaUsers, FaPlus, FaEdit, FaTrash } from 'react-icons/fa';
import './SubAdminMgmt.css';

const permissionsList = [
  'Dashboard', "Category's", "Subcategory's", "Product's", 
  "Custom Products", "Wholesale Categories", "Blog Category", 
  "Blog's", "Testimonials", "Submissions", "Gallery", 
  "Inquiry System", "Brands", "Product C & Q", "Artisan", 
  "Leader's", "FAQ", "Certifications", "Slider's", 
  "Contact", "Service Inquiries", "Download Leads", 
  "Vendor Management", "Retailer System", "Bulk-FMOQ", 
  "Shipping List", "Index States", "Sub Admin Management"
];

// Helper to initialize permissions
const initPermissions = (list) => {
  const perms = {};
  list.forEach(item => {
    if (item === 'Dashboard') {
      perms[item] = { view: false };
    } else {
      perms[item] = { view: false, add: false, edit: false, delete: false };
    }
  });
  return perms;
};

const mockAdmins = [
  { 
    id: 1, 
    name: 'Admin Two', 
    email: 'admin2@hieil.com', 
    password: '***', 
    status: 'ACTIVE', 
    permissions: { ...initPermissions(permissionsList), 'Dashboard': { view: true }, "Category's": { view: true, add: true, edit: false, delete: false } }
  }
];

const SubAdminMgmt = () => {
  const [admins, setAdmins] = useState(mockAdmins);
  const [isFormOpen, setIsFormOpen] = useState(false);
  
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    password: '', 
    status: 'ACTIVE', 
    permissions: initPermissions(permissionsList)
  });
  
  const [editingId, setEditingId] = useState(null);

  const handleAdd = () => {
    setFormData({ name: '', email: '', password: '', status: 'ACTIVE', permissions: initPermissions(permissionsList) });
    setEditingId(null);
    setIsFormOpen(true);
  };

  const handleEdit = (admin) => {
    setFormData({ ...admin, permissions: { ...initPermissions(permissionsList), ...admin.permissions } });
    setEditingId(admin.id);
    setIsFormOpen(true);
  };

  const handleDelete = (id) => {
    if(window.confirm('Are you sure you want to delete this sub-admin?')) {
      setAdmins(admins.filter(a => a.id !== id));
    }
  };

  const togglePermission = (module, action) => {
    setFormData(prev => ({
      ...prev,
      permissions: {
        ...prev.permissions,
        [module]: {
          ...prev.permissions[module],
          [action]: !prev.permissions[module][action]
        }
      }
    }));
  };

  const handleSelectAll = (e) => {
    e.preventDefault();
    const allSelected = {};
    permissionsList.forEach(item => {
      if (item === 'Dashboard') {
        allSelected[item] = { view: true };
      } else {
        allSelected[item] = { view: true, add: true, edit: true, delete: true };
      }
    });
    setFormData(prev => ({ ...prev, permissions: allSelected }));
  };

  const handleUnselectAll = (e) => {
    e.preventDefault();
    setFormData(prev => ({ ...prev, permissions: initPermissions(permissionsList) }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    if(editingId) {
      setAdmins(admins.map(a => a.id === editingId ? { ...formData, id: editingId } : a));
    } else {
      const newId = admins.length > 0 ? Math.max(...admins.map(a => a.id)) + 1 : 1;
      setAdmins([...admins, { ...formData, id: newId }]);
    }
    setIsFormOpen(false);
  };

  // Helper to render toggles
  const renderToggle = (module, action) => (
    <div className="sam-toggle-row">
      <label className="sam-toggle-switch">
        <input 
          type="checkbox" 
          checked={formData.permissions[module][action]}
          onChange={() => togglePermission(module, action)}
        />
        <span className="sam-slider round"></span>
      </label>
      <span className="sam-toggle-label">{action.charAt(0).toUpperCase() + action.slice(1)}</span>
    </div>
  );

  if (isFormOpen) {
    return (
      <div className="sam-form-container fade-in">
        <div className="sam-form-header-top">
          <h2>{editingId ? 'Edit Sub Admin' : 'Add Sub Admin'}</h2>
          <button type="button" className="sam-btn-outline" onClick={() => setIsFormOpen(false)}>
            <FaChevronLeft style={{fontSize: '10px'}}/> Back to List
          </button>
        </div>

        <div className="sam-form-layout">
          {/* Left Column: Basic Info */}
          <div className="sam-left-col">
            <div className="sam-basic-card">
              <div className="sam-card-header">
                <h3>Basic Info</h3>
              </div>
              <div className="sam-card-body">
                <form id="subAdminForm" onSubmit={handleSave}>
                  <div className="sam-input-group">
                    <label>Full Name</label>
                    <input 
                      type="text" 
                      placeholder="Full Name" 
                      value={formData.name} 
                      onChange={e => setFormData({...formData, name: e.target.value})} 
                      required 
                    />
                  </div>
                  <div className="sam-input-group">
                    <label>Email Address</label>
                    <input 
                      type="email" 
                      placeholder="Email" 
                      value={formData.email} 
                      onChange={e => setFormData({...formData, email: e.target.value})} 
                      required 
                    />
                  </div>
                  <div className="sam-input-group">
                    <label>Password</label>
                    <input 
                      type="password" 
                      placeholder="Password" 
                      value={formData.password} 
                      onChange={e => setFormData({...formData, password: e.target.value})} 
                      required={!editingId} 
                    />
                  </div>
                  <div className="sam-input-group sam-status-group">
                    <label>Status</label>
                    <div className="sam-status-select-wrap">
                       <select 
                        value={formData.status} 
                        onChange={e => setFormData({...formData, status: e.target.value})}
                      >
                        <option value="ACTIVE">Active</option>
                        <option value="INACTIVE">Inactive</option>
                      </select>
                    </div>
                  </div>
                  
                  <button type="submit" className="sam-btn-submit">
                    {editingId ? 'Save Changes' : 'Create Sub Admin'}
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Right Column: Assign Permissions */}
          <div className="sam-right-col">
             <div className="sam-perms-card">
                <div className="sam-perms-header">
                  <h3>Assign Permissions</h3>
                  <div className="sam-bulk-actions">
                    <button type="button" onClick={handleSelectAll}>Select All</button>
                    <button type="button" onClick={handleUnselectAll}>Deselect All</button>
                  </div>
                </div>
                
                <div className="sam-perms-grid">
                  {permissionsList.map(module => (
                    <div key={module} className="sam-module-card">
                      <h4 className="sam-module-title">{module}</h4>
                      <div className="sam-module-toggles">
                        {renderToggle(module, 'view')}
                        {module !== 'Dashboard' && renderToggle(module, 'add')}
                        {module !== 'Dashboard' && renderToggle(module, 'edit')}
                        {module !== 'Dashboard' && renderToggle(module, 'delete')}
                      </div>
                    </div>
                  ))}
                </div>
             </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="generic-list-page fade-in">
      <div className="page-header" style={{marginBottom: '20px'}}>
        <h1 style={{ fontFamily: 'serif' }}>Sub Admin Management</h1>
        <p>Manage roles and permissions</p>
      </div>

      <div className="data-table-container">
        <div className="data-table-header">
          <div className="table-title">
            <FaUsers className="title-icon" style={{marginRight: '8px'}} /> SUB ADMIN LIST
          </div>
          <button className="add-btn" onClick={handleAdd}>
            <FaPlus style={{marginRight: '5px'}}/> Add New Sub Admin
          </button>
        </div>

        <div className="table-responsive">
          <table className="data-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Password</th>
                <th>Status</th>
                <th>Permissions</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {admins.map(admin => {
                 const activePerms = Object.keys(admin.permissions).filter(k => admin.permissions[k].view);
                 const permsDisplay = activePerms.slice(0, 2).join(', ') + (activePerms.length > 2 ? '...' : '');
                 
                 return (
                  <tr key={admin.id}>
                    <td>{admin.id}</td>
                    <td>{admin.name}</td>
                    <td>{admin.email}</td>
                    <td>{admin.password}</td>
                    <td>
                      <span className={`status-badge status-${admin.status.toLowerCase()}`}>
                        {admin.status}
                      </span>
                    </td>
                    <td>{permsDisplay || 'None'}</td>
                    <td className="action-cell">
                      <button className="action-btn edit-btn" onClick={() => handleEdit(admin)}>
                        <FaEdit />
                      </button>
                      <button className="action-btn delete-btn" onClick={() => handleDelete(admin.id)}>
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                );
              })}
              {admins.length === 0 && (
                <tr><td colSpan="7" className="no-data">No sub-admins found.</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SubAdminMgmt;
