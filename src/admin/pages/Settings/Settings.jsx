import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import api from '../../config/api';

const Settings = () => {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [currentPdfUrl, setCurrentPdfUrl] = useState('');

  useEffect(() => {
    fetchSettings();
  }, []);

  const fetchSettings = async () => {
    try {
      const res = await api.get('/settings?key=companyProfilePdf');
      if (res.data && res.data.companyProfilePdf) {
        setCurrentPdfUrl(res.data.companyProfilePdf);
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
      // 1. Upload file to get URL
      const uploadRes = await api.post('/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      const fileUrl = uploadRes.data.url;

      // 2. Save URL in settings
      await api.post('/settings', {
        key: 'companyProfilePdf',
        value: fileUrl
      });

      setCurrentPdfUrl(fileUrl);
      setFile(null);
      Swal.fire('Success', 'Company Profile PDF uploaded successfully', 'success');
      
      // Reset input
      const fileInput = document.getElementById('pdf-upload');
      if (fileInput) fileInput.value = '';
    } catch (error) {
      console.error('Upload error:', error);
      Swal.fire('Error', 'Failed to upload PDF', 'error');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">Global Settings</h2>
      </div>

      <div className="bg-white dark:bg-[#212b36] rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-800 mb-6">
        <h3 className="text-xl font-medium text-gray-800 dark:text-white mb-4">Company Profile PDF</h3>
        
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
            className={`py-2 px-4 rounded-md text-white font-medium ${
              uploading || !file ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
            }`}
          >
            {uploading ? 'Uploading...' : 'Upload & Save'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Settings;
