import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { LogOut, User, Heart, FileText, CheckCircle } from 'lucide-react';

const UserDashboard = () => {
  const { user, loading, logout } = useAuth();
  const [activeTab, setActiveTab] = useState('profile');

  if (loading) return <div className="min-h-screen bg-[#15110F] text-white flex items-center justify-center">Loading...</div>;
  if (!user) return <Navigate to="/auth" />;

  const tabs = [
    { id: 'profile', label: 'My Profile', icon: <User size={18} /> },
    { id: 'inquiries', label: 'My Inquiries', icon: <FileText size={18} /> },
    { id: 'wishlist', label: 'Wishlist', icon: <Heart size={18} /> },
    { id: 'orders', label: 'Orders', icon: <CheckCircle size={18} /> },
  ];

  return (
    <div className="min-h-screen bg-[#15110F] pt-[120px] pb-[60px] font-sans">
      <div className="max-w-[1200px] mx-auto px-5 flex flex-col md:flex-row gap-8">
        
        {/* Sidebar */}
        <div className="w-full md:w-[300px] shrink-0">
          <div className="bg-[rgba(28,23,19,0.6)] backdrop-blur-[10px] border border-[#2c241c] rounded-2xl p-6 sticky top-[100px]">
            <h2 className="text-2xl font-serif text-white mb-6 uppercase tracking-[1px]">My Account</h2>
            <div className="flex flex-col gap-2">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={\`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-left \${activeTab === tab.id ? 'bg-[#c8956c] text-[#15110F] font-bold' : 'text-[#888888] hover:bg-[#2c241c] hover:text-white'}\`}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                </button>
              ))}
              <button onClick={logout} className="flex items-center gap-3 px-4 py-3 rounded-lg text-[#ef4444] hover:bg-[#ef4444]/10 transition-colors text-left mt-4">
                <LogOut size={18} />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 bg-[rgba(28,23,19,0.6)] backdrop-blur-[10px] border border-[#2c241c] rounded-2xl p-6 md:p-8 text-white">
          {activeTab === 'profile' && (
            <div>
              <h3 className="text-2xl font-serif text-[#c8956c] mb-6">Profile Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-[#888888] mb-1">Full Name</label>
                  <p className="text-lg">{user.name}</p>
                </div>
                <div>
                  <label className="block text-sm text-[#888888] mb-1">Email</label>
                  <p className="text-lg">{user.email}</p>
                </div>
                <div>
                  <label className="block text-sm text-[#888888] mb-1">Phone</label>
                  <p className="text-lg">{user.phone || 'N/A'}</p>
                </div>
                <div>
                  <label className="block text-sm text-[#888888] mb-1">Company</label>
                  <p className="text-lg">{user.companyName || 'N/A'}</p>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'inquiries' && (
            <div>
              <h3 className="text-2xl font-serif text-[#c8956c] mb-6">My Inquiries</h3>
              <p className="text-[#888888]">You will see your past product inquiries here soon...</p>
            </div>
          )}
          
          {activeTab === 'wishlist' && (
            <div>
              <h3 className="text-2xl font-serif text-[#c8956c] mb-6">My Wishlist</h3>
              <p className="text-[#888888]">Your saved products will appear here...</p>
            </div>
          )}
          
          {activeTab === 'orders' && (
            <div>
              <h3 className="text-2xl font-serif text-[#c8956c] mb-6">Order History</h3>
              <p className="text-[#888888]">Accepted quotations and orders will appear here...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
