import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import api from '../../config/api';

const Settings = () => {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [currentPdfUrl, setCurrentPdfUrl] = useState('');

  const [companyDetails, setCompanyDetails] = useState({
    name: 'HIEIL',
    tagline: 'Handcrafted Products, Inspired by India',
    address: 'Jaipur, Rajasthan, India',
    website: 'www.hieil.com',
    email: 'info@hieil.com',
    phone: '+91',
    gst: '',
    iec: '',
    bankAccountName: 'HIEIL (Handcrafted Products Inspired by India)',
    bankName: '',
    accountNumber: '',
    ifsc: '',
    swift: '',
    signatoryName: '',
    designation: ''
  });
  const [savingCompanyDetails, setSavingCompanyDetails] = useState(false);

  useEffect(() => {
    fetchSettings();
  }, []);

  const fetchSettings = async () => {
    try {
      const resPdf = await api.get('/settings?key=companyProfilePdf');
      if (resPdf.data && resPdf.data.companyProfilePdf) {
        setCurrentPdfUrl(resPdf.data.companyProfilePdf);
      }
      
      const resDetails = await api.get('/settings?key=companyDetails');
      if (resDetails.data && resDetails.data.companyDetails) {
        try {
          const parsed = JSON.parse(resDetails.data.companyDetails);
          setCompanyDetails(prev => ({ ...prev, ...parsed }));
        } catch(e) {}
      }
    } catch (err) {
      console.error('Failed to fetch settings:', err);
    }
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file) {
      Swal.fire('Error', 'Please select a PDF file to upload', 'error');
      return;
    }

    setUploading(true);
    const formData = new FormData();
    formData.append('file', file);

    try {
      const uploadRes = await api.post('/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      const fileUrl = uploadRes.data.url;

      await api.post('/settings', {
        key: 'companyProfilePdf',
        value: fileUrl
      });

      setCurrentPdfUrl(fileUrl);
      setFile(null);
      Swal.fire('Success', 'Company Profile PDF uploaded successfully', 'success');
      
      const fileInput = document.getElementById('pdf-upload');
      if (fileInput) fileInput.value = '';
    } catch (error) {
      console.error('Upload error:', error);
      Swal.fire('Error', 'Failed to upload PDF', 'error');
    } finally {
      setUploading(false);
    }
  };

  const handleSaveCompanyDetails = async (e) => {
    e.preventDefault();
    setSavingCompanyDetails(true);
    try {
      await api.post('/settings', {
        key: 'companyDetails',
        value: JSON.stringify(companyDetails)
      });
      Swal.fire('Success', 'Company details saved successfully', 'success');
    } catch (error) {
      console.error('Save error:', error);
      Swal.fire('Error', 'Failed to save company details', 'error');
    } finally {
      setSavingCompanyDetails(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCompanyDetails(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="p-6">
      <style>{`#root h2.settings-title-fix { color: #000000 !important; font-family: 'Inter', sans-serif !important; text-transform: none !important; } body.dark-mode #root h2.settings-title-fix { color: #ffffff !important; }`}</style>
      <div className="flex justify-between items-center mb-6">
        <h2 className="settings-title-fix text-2xl font-semibold tracking-normal">Global Settings</h2>
      </div>

      <div className="bg-white dark:bg-[#212b36] rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-800 mb-6">
        <h3 className="text-xl font-medium !text-black dark:!text-white !font-sans !normal-case tracking-normal mb-4">Company Profile PDF</h3>
        
        {currentPdfUrl && (
          <div className="mb-4">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Current PDF:</p>
            <a href={currentPdfUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              View Current Company Profile PDF
            </a>
          </div>
        )}

        <form onSubmit={handleUpload} className="flex flex-col gap-4 max-w-md">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Upload New PDF
            </label>
            <input 
              id="pdf-upload"
              type="file" 
              accept="application/pdf"
              onChange={handleFileChange}
              className="block w-full text-sm text-gray-500 dark:text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 dark:file:bg-gray-700 dark:file:text-gray-200"
            />
          </div>
          
          <button 
            type="submit" 
            disabled={uploading || !file}
            className={`py-2 px-4 rounded-md text-white font-medium w-fit ${
              uploading || !file ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
            }`}
          >
            {uploading ? 'Uploading...' : 'Upload & Save'}
          </button>
        </form>
      </div>

      <div className="bg-white dark:bg-[#212b36] rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-800 mb-6">
        <h3 className="text-xl font-medium !text-black dark:!text-white !font-sans !normal-case tracking-normal mb-4">Company Details (For Invoices & Quotations)</h3>
        
        <form onSubmit={handleSaveCompanyDetails} className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Company Name</label>
            <input type="text" name="name" value={companyDetails.name} onChange={handleInputChange} className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-white" required />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Tagline</label>
            <input type="text" name="tagline" value={companyDetails.tagline} onChange={handleInputChange} className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-white" />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Address</label>
            <input type="text" name="address" value={companyDetails.address} onChange={handleInputChange} className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-white" required />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Website</label>
            <input type="text" name="website" value={companyDetails.website} onChange={handleInputChange} className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-white" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
            <input type="email" name="email" value={companyDetails.email} onChange={handleInputChange} className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-white" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Phone Number</label>
            <input type="text" name="phone" value={companyDetails.phone} onChange={handleInputChange} className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-white" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">GST No.</label>
            <input type="text" name="gst" value={companyDetails.gst} onChange={handleInputChange} className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-white" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">IEC No.</label>
            <input type="text" name="iec" value={companyDetails.iec} onChange={handleInputChange} className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-white" />
          </div>

          <div className="md:col-span-2 mt-4 border-t border-gray-200 dark:border-gray-700 pt-4">
            <h4 className="text-lg font-medium text-gray-800 dark:text-white mb-4">Bank Details</h4>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Bank Account Name</label>
            <input type="text" name="bankAccountName" value={companyDetails.bankAccountName} onChange={handleInputChange} className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-white" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Bank Name</label>
            <input type="text" name="bankName" value={companyDetails.bankName} onChange={handleInputChange} className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-white" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Account Number</label>
            <input type="text" name="accountNumber" value={companyDetails.accountNumber} onChange={handleInputChange} className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-white" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">IFSC Code</label>
            <input type="text" name="ifsc" value={companyDetails.ifsc} onChange={handleInputChange} className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-white" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">SWIFT / BIC Code</label>
            <input type="text" name="swift" value={companyDetails.swift} onChange={handleInputChange} className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-white" />
          </div>

          <div className="md:col-span-2 mt-4 border-t border-gray-200 dark:border-gray-700 pt-4">
            <h4 className="text-lg font-medium text-gray-800 dark:text-white mb-4">Signatory Details</h4>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Authorised Signatory Name</label>
            <input type="text" name="signatoryName" value={companyDetails.signatoryName} onChange={handleInputChange} className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-white" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Designation</label>
            <input type="text" name="designation" value={companyDetails.designation} onChange={handleInputChange} className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-white" />
          </div>

          <div className="md:col-span-2 mt-4">
            <button 
              type="submit" 
              disabled={savingCompanyDetails}
              className={`py-2 px-6 rounded-md text-white font-medium ${
                savingCompanyDetails ? 'bg-green-400 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700'
              }`}
            >
              {savingCompanyDetails ? 'Saving...' : 'Save Company Details'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Settings;
