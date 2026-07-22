import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import * as FaIcons from 'react-icons/fa';
import DataTable from '../../components/DataTable/DataTable';
import './GenericList.css';
import JoditEditor from 'jodit-react';
import api from '../../config/api';

const GenericList = ({ title, subtitle, columns, data, config = {} }) => {
  const [tableData, setTableData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({});
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [dynamicCategories, setDynamicCategories] = useState([]);
  const [dynamicSubcategories, setDynamicSubcategories] = useState([]);
  const [hasDynamicCategories, setHasDynamicCategories] = useState(false);

  useEffect(() => {
    const fetchDynamicCategories = async () => {
      try {
        let endpoint = null;
        if (config.path === 'products' || config.path === 'subcategories' || config.path === 'product-cq' || config.path === 'custom-products') {
          endpoint = '/categories';
        } else if (config.path === 'blogs') {
          endpoint = '/blog-categories';
        } else if (config.path === 'gallery') {
          endpoint = '/gallery-categories';
        } else if (config.path === 'faq') {
          endpoint = '/faq-categories';
        }
        
        if (endpoint) {
          setHasDynamicCategories(true);
          const response = await api.get(endpoint);
          const data = Array.isArray(response.data) ? response.data : (response.data.data || []);
          if (data.length > 0) {
            setDynamicCategories(data.map(c => c.name || c.categoryName || c.title || c.category).filter(Boolean));
          } else {
            setDynamicCategories([]);
          }
        } else {
          setHasDynamicCategories(false);
        }
      } catch (err) {
        console.error("Failed to fetch dynamic categories", err);
      }
    };

    const fetchDynamicSubcategories = async () => {
      try {
        const response = await api.get('/subcategories');
        const data = Array.isArray(response.data) ? response.data : (response.data.data || []);
        if (data.length > 0) {
          setDynamicSubcategories(data);
        }
      } catch (err) {
        console.error("Failed to fetch dynamic subcategories", err);
      }
    };

    fetchDynamicCategories();
    fetchDynamicSubcategories();
  }, [config.path]);

  // Map paths to API endpoints based on config path
  const getApiEndpoint = (path) => {
    if (!path) return null;
    
    // Explicit exact matches for known mismatches between frontend paths and backend endpoints
    const exactMap = {
      'custom-products': '/custom-products',
      'product-cq': '/product-cq',
      'wholesale-categories': '/wholesale-categories',
      'brands': '/brands',
      'bulk-fmoq': '/bulk-fmoq',
      'shipping-list': '/shipping-list',
      'index-states': '/index-states',
      'sub-admins': '/sub-admins',
      'sub-admin-mgmt': '/sub-admins',
      'gallery-categories': '/gallery-categories',
      'gallery-category': '/gallery-categories',
      'faq-categories': '/faq-categories',
      'faq-category': '/faq-categories',
      'faq': '/faqs',
      'blog-categories': '/blog-categories',
      'blog-category': '/blog-categories',
      'vendor-payouts': '/vendor-payouts',
      'vendor-management/payout': '/vendor-payouts',
      'vendor-management/master': '/vendors',
      'service-inquiries': '/service-inquiries',
      'download-leads': '/download-leads',
      'blog-fdgw': '/blog-fdgw',
      'artisan': '/artisans',
      'leader': '/leaders',
      'leaders': '/leaders',
      'inquiry-system/product-inquiries': '/inquiries',
      'inquiry-system/orders': '/orders',
      'inquiry-system/quotations': '/quotations',
      'inquiry-system/invoices': '/invoices',
      'inquiry-system/payments': '/payments',
      'inquiry-system/shipping': '/shipping',
      'retailer-system/product-inquiries': '/retailer/inquiries',
      'retailer-system/orders': '/retailer/orders',
      'retailer-system/quotations': '/retailer/quotations',
      'retailer-system/invoices': '/retailer/invoices',
      'retailer-system/payments': '/retailer/payments',
      'retailer-system/shipping': '/retailer/shipping'
    };

    if (exactMap[path]) return exactMap[path];

    // Partial matches
    if (path.includes('subcategories')) return '/subcategories';
    if (path.includes('categories')) return '/categories';
    if (path.includes('products')) return '/products';
    if (path.includes('artisans')) return '/artisans';
    if (path.includes('blogs')) return '/blogs';
    if (path.includes('testimonials') || path.includes('reviews')) return '/testimonials';
    
    // Fallback to exactly the path provided
    return `/${path}`;
  };

  const apiEndpoint = config.apiEndpoint || getApiEndpoint(config.path);

  useEffect(() => {
    if (apiEndpoint) {
      fetchData();
    } else {
      setTableData(data || []);
    }
  }, [config.path, data, apiEndpoint]);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await api.get(apiEndpoint);
      // Determine array data
      const responseData = Array.isArray(response.data) ? response.data : (response.data.data || []);
      // Map _id to id for the table
      const formattedData = responseData.map(item => ({ ...item, id: item._id || item.id }));
      setTableData(formattedData);
    } catch (error) {
      console.error('Error fetching data:', error);
      Swal.fire('Error', 'Failed to fetch data from server', 'error');
      // Fallback to static data on error
      setTableData(data || []);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = (row) => {
    Swal.fire({
      title: 'Are you sure?',
      text: `You want to delete ${row.name || row.title || row.category || 'this item'}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#ef4444',
      cancelButtonColor: '#3b82f6',
      confirmButtonText: 'Yes, delete it!'
    }).then(async (result) => {
      if (result.isConfirmed) {
        if (apiEndpoint) {
          try {
            await api.delete(`${apiEndpoint}/${row.id}`);
            fetchData();
            Swal.fire('Deleted!', 'The item has been deleted.', 'success');
          } catch (error) {
            console.error('Error deleting:', error);
            Swal.fire('Error', 'Failed to delete the item', 'error');
          }
        } else {
          setTableData(tableData.filter(item => item.id !== row.id));
          Swal.fire('Deleted!', 'The item has been deleted.', 'success');
        }
      }
    });
  };

  const handleEdit = (row) => {
    setFormData(row);
    setEditingId(row.id);
    setIsModalOpen(true);
  };

  const handleAdd = () => {
    setFormData({});
    setEditingId(null);
    setIsModalOpen(true);
  };

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      if (apiEndpoint) {
        if (editingId) {
          await api.put(`${apiEndpoint}/${editingId}`, formData);
          Swal.fire('Updated!', 'The item has been updated.', 'success');
        } else {
          await api.post(apiEndpoint, formData);
          Swal.fire('Added!', 'The item has been added.', 'success');
        }
        fetchData();
      } else {
        if (editingId) {
          setTableData(tableData.map(item => item.id === editingId ? { ...item, ...formData } : item));
          Swal.fire('Updated!', 'The item has been updated.', 'success');
        } else {
          const newId = tableData.length > 0 ? Math.max(...tableData.map(d => parseInt(d.id) || 0)) + 1 : 1;
          const newItem = {
            ...formData,
            id: newId,
            createdAt: new Date().toISOString().replace('T', ' ').substring(0, 19),
            status: 'ACTIVE'
          };
          setTableData([...tableData, newItem]);
          Swal.fire('Added!', 'The item has been added.', 'success');
        }
      }
      setIsModalOpen(false);
    } catch (error) {
      console.error('Error saving:', error);
      Swal.fire('Error', 'Failed to save the item', 'error');
    }
  };

  const handleInputChange = (e, key) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFormData({ ...formData, [key]: value });
  };

  const handleUpdateRow = (id, field, value) => {
    if (apiEndpoint) {
      api.put(`${apiEndpoint}/${id}`, { [field]: value })
        .then(() => {
          Swal.fire({
            title: 'Updated!',
            text: 'Status has been updated successfully.',
            icon: 'success',
            timer: 1500,
            showConfirmButton: false
          });
        })
        .catch(err => {
          console.error(err);
          Swal.fire('Error', 'Failed to update status.', 'error');
        });
    }
    setTableData(tableData.map(item => item.id === id ? { ...item, [field]: value } : item));
  };

  const isEditing = editingId !== null;

  if (isModalOpen) {
    return (
      <div className="generic-list-page">
        <div className="page-header" style={{display: 'flex', alignItems: 'center', gap: '15px'}}>
          <button 
            onClick={() => setIsModalOpen(false)}
            style={{background: 'transparent', border: '1px solid #475569', color: '#1e293b', padding: '8px 15px', borderRadius: '4px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px'}}
          >
            <FaIcons.FaArrowLeft /> Back
          </button>
          <div>
            <h1>{isEditing ? (config.formTitleEdit || `Edit ${title}`) : (config.formTitleAdd || `Add ${title}`)}</h1>
            <p>{config.formSubtitle || `Fill in the details below`}</p>
          </div>
        </div>

        <div className="form-card" style={{backgroundColor: 'white', padding: '30px', borderRadius: '8px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'}}>
          <h2 style={{color: '#1e293b', marginBottom: '25px', paddingBottom: '15px', borderBottom: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', gap: '10px'}}>
            {isEditing ? <FaIcons.FaEdit /> : (config.formSubmitIcon && FaIcons[config.formSubmitIcon] ? React.createElement(FaIcons[config.formSubmitIcon], null) : <FaIcons.FaPlus />)}
            {isEditing ? 'Edit Details' : (config.formCardTitle || 'Item Details')}
          </h2>
          
          <form onSubmit={handleSave} className="add-form">
            <div className="form-grid" style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '25px', marginBottom: '30px'}}>
            {columns.headers.filter(col => !col.hideInForm && col.key !== 'id').map(col => (
              <div key={col.key} className="form-group" style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
                <label style={{color: '#475569', fontWeight: '500', fontSize: '14px'}}>
                  {col.formLabel || col.label}
                  {col.required && <span style={{color: '#ef4444', marginLeft: '4px'}}>*</span>}
                </label>
                
                {col.type === 'select' ? (
                  <select 
                    value={formData[col.key] || ''} 
                    onChange={(e) => handleInputChange(e, col.key)}
                    style={{padding: '10px', border: '1px solid #e2e8f0', borderRadius: '4px', outline: 'none'}}
                    required={col.required !== false}
                  >
                    <option value="">-- Select {col.label} --</option>
                    {(() => {
                      if ((col.key === 'category' || col.key === 'categoryName') && hasDynamicCategories) {
                        return dynamicCategories;
                      }
                      if (col.key === 'subCategory' && dynamicSubcategories.length > 0) {
                        const filtered = formData.category 
                          ? dynamicSubcategories.filter(s => s.category === formData.category) 
                          : dynamicSubcategories;
                        // If no exact match (due to DB string mismatches), fallback to all subcategories
                        const finalSubcategories = (filtered.length > 0 ? filtered : dynamicSubcategories);
                        return finalSubcategories.map(s => s.subcategoryName || s.name || s.title).filter(Boolean);
                      }
                      return col.options || [];
                    })().map(opt => <option key={opt} value={opt}>{opt}</option>)}
                  </select>
                ) : col.type === 'file' || col.key.toLowerCase().includes('image') || col.key.toLowerCase().includes('logo') ? (
                  <div>
                    <input 
                      type="file" 
                      accept="image/*"
                      onChange={async (e) => {
                        const file = e.target.files[0];
                        if (!file) return;
                        
                        const uploadData = new FormData();
                        uploadData.append('file', file);
                        
                        try {
                          Swal.fire({
                            title: 'Uploading...',
                            text: 'Please wait while the image is being uploaded',
                            allowOutsideClick: false,
                            didOpen: () => {
                              Swal.showLoading();
                            }
                          });
                          
                          const res = await api.post('/upload', uploadData, {
                            headers: { 'Content-Type': 'multipart/form-data' }
                          });
                          if (res.data && res.data.url) {
                            handleInputChange({ target: { value: res.data.url } }, col.key);
                            Swal.fire({
                              toast: true, position: 'top-end', showConfirmButton: false, timer: 3000,
                              icon: 'success', title: 'Image uploaded successfully'
                            });
                          }
                        } catch (err) {
                          console.error("Upload error", err);
                          Swal.fire('Error', 'Failed to upload image', 'error');
                        }
                      }}
                      style={{padding: '10px', border: '1px solid #e2e8f0', borderRadius: '4px', width: '100%', background: '#fff'}}
                    />
                    {formData[col.key] && (
                      <div style={{marginTop: '10px'}}>
                        <img src={formData[col.key]} alt="Preview" style={{width: '60px', height: '60px', objectFit: 'cover', borderRadius: '4px', border: '1px solid #e2e8f0'}} />
                      </div>
                    )}
                  </div>
                ) : col.type === 'rich-text' ? (
                  <div style={{ border: '1px solid #e2e8f0', borderRadius: '4px', overflow: 'hidden' }}>
                    <JoditEditor
                      value={formData[col.key] || ''}
                      config={{
                        readonly: false,
                        placeholder: col.placeholder || `Enter ${(col.formLabel || col.label).toLowerCase()}`,
                        minHeight: 300,
                      }}
                      onBlur={(newContent) => handleInputChange({ target: { value: newContent } }, col.key)}
                    />
                  </div>
                ) : col.type === 'textarea' ? (
                  <textarea 
                    placeholder={col.placeholder || `Enter ${(col.formLabel || col.label).toLowerCase()}`}
                    value={formData[col.key] || ''} 
                    onChange={(e) => handleInputChange(e, col.key)}
                    required={col.required !== false}
                    style={{width: '100%', minHeight: '150px', padding: '10px', border: '1px solid #e2e8f0', borderRadius: '4px', resize: 'vertical', fontFamily: 'inherit', color: '#000'}}
                  />
                ) : (
                  <input 
                    type="text" 
                    placeholder={col.placeholder || `Enter ${(col.formLabel || col.label).toLowerCase()}`}
                    value={formData[col.key] || ''} 
                    onChange={(e) => handleInputChange(e, col.key)}
                    required={col.required !== false}
                    style={{padding: '10px', border: '1px solid #e2e8f0', borderRadius: '4px', width: '100%'}}
                  />
                )}
              </div>
            ))}
            </div>
            <div className="form-actions" style={{display: 'flex', justifyContent: 'flex-end', gap: '15px', marginTop: '20px', paddingTop: '20px', borderTop: '1px solid #e2e8f0'}}>
              <button type="button" onClick={() => setIsModalOpen(false)} style={{padding: '10px 20px', background: 'white', color: '#000', border: '1px solid #cbd5e1', borderRadius: '4px', cursor: 'pointer', fontWeight: '500'}}>
                Cancel
              </button>
              <button type="submit" className="submit-btn" style={{padding: '10px 20px', backgroundColor: '#3b82f6', color: 'white', border: 'none', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', cursor: 'pointer', fontWeight: '500'}}>
                {columns.formSubmitIcon && FaIcons[columns.formSubmitIcon] ? React.createElement(FaIcons[columns.formSubmitIcon], null) : (isEditing ? '' : '+ ')}
                {isEditing ? 'Save Changes' : (columns.formSubmitText || columns.addButtonText || 'Add')}
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
  
  return (
    <div className="generic-list-page">
      <div className="page-header">
        <h1>{title}</h1>
        <p>{subtitle || `View all ${title.toLowerCase()}`}</p>
      </div>
      
      {loading ? (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '300px', width: '100%' }}>
          <div style={{
            width: '50px', height: '50px', borderRadius: '50%',
            border: '4px solid #e2e8f0', borderTopColor: '#3b82f6',
            animation: 'spin 1s linear infinite'
          }}></div>
          <style>{`
            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
          `}</style>
        </div>
      ) : (
        <DataTable 
          columns={columns} 
          data={tableData} 
          onEdit={handleEdit}
          onDelete={handleDelete}
          onUpdateRow={handleUpdateRow}
          onAdd={handleAdd}
        />
      )}
    </div>
  );
};

export default GenericList;
