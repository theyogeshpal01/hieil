import React, { useState, useEffect } from 'react';
import { Navigate, Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { LogOut, User, Heart, FileText, CheckCircle } from 'lucide-react';
import api from '../../config/api';
import Swal from 'sweetalert2';

const UserDashboard = () => {
  const { user, token, loading, logout } = useAuth();
  const [activeTab, setActiveTab] = useState('profile');
  const [inquiries, setInquiries] = useState([]);
  const [quotations, setQuotations] = useState([]);
  const [orders, setOrders] = useState([]);
  const [dataLoading, setDataLoading] = useState(false);

  useEffect(() => {
    if (token) {
      fetchDashboardData();
    }
  }, [token, activeTab]);

  const fetchDashboardData = async () => {
    setDataLoading(true);
    try {
      if (activeTab === 'inquiries') {
        const res = await api.get('/users/auth/inquiries', { headers: { Authorization: 'Bearer ' + token } });
        setInquiries(res.data.inquiries || []);
        setQuotations(res.data.quotations || []);
      } else if (activeTab === 'orders') {
        const res = await api.get('/users/auth/orders', { headers: { Authorization: 'Bearer ' + token } });
        setOrders(res.data || []);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setDataLoading(false);
    }
  };

  const handleAcceptQuotation = async (quotationId) => {
    try {
      const result = await Swal.fire({
        title: 'Accept Quotation & Place Order?',
        text: 'Are you sure you want to proceed with this quotation?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#c8956c',
        cancelButtonColor: '#ef4444',
        confirmButtonText: 'Yes, Place Order'
      });
      
      if (result.isConfirmed) {
        await api.post(`/users/auth/quotations/${quotationId}/accept`, {}, {
          headers: { Authorization: 'Bearer ' + token }
        });
        Swal.fire('Success', 'Order placed successfully!', 'success');
        fetchDashboardData();
      }
    } catch (err) {
      Swal.fire('Error', err.response?.data?.message || 'Failed to accept quotation', 'error');
    }
  };

  if (loading) return <div className="min-h-screen bg-[#15110F] text-white flex items-center justify-center">Loading...</div>;
  if (!user) return <Navigate to="/auth" />;

  const tabs = [
    { id: 'profile', label: 'My Profile', icon: <User size={18} /> },
    { id: 'inquiries', label: 'My Inquiries & Quotations', icon: <FileText size={18} /> },
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
                  className={'flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-left ' + (activeTab === tab.id ? 'bg-[#c8956c] text-[#15110F] font-bold' : 'text-[#888888] hover:bg-[#2c241c] hover:text-white')}
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
          
          {/* PROFILE TAB */}
          {activeTab === 'profile' && (
            <div>
              <h3 className="text-2xl font-serif text-[#c8956c] mb-6">Profile Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#15110F] p-6 rounded-xl border border-[#2c241c]">
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
          
          {/* INQUIRIES & QUOTATIONS TAB */}
          {activeTab === 'inquiries' && (
            <div>
              <h3 className="text-2xl font-serif text-[#c8956c] mb-6">My Inquiries & Quotations</h3>
              {dataLoading ? (
                <div className="flex justify-center py-10"><div className="w-8 h-8 border-4 border-[#c8956c] border-t-transparent rounded-full animate-spin"></div></div>
              ) : (
                <div className="flex flex-col gap-6">
                  {inquiries.length === 0 && quotations.length === 0 ? (
                    <p className="text-[#888888]">You haven't made any inquiries yet.</p>
                  ) : (
                    <>
                      {/* Active Quotations */}
                      {quotations.map(quote => (
                        <div key={quote._id} className="bg-[#15110F] p-6 rounded-xl border border-[#c8956c] relative overflow-hidden">
                          <div className="absolute top-0 right-0 bg-[#c8956c] text-[#15110F] text-xs font-bold px-3 py-1 uppercase rounded-bl-lg">Quotation Received</div>
                          <h4 className="font-serif text-xl mb-2 text-white">Quotation #{quote.quoteNo || quote._id.substring(0,6)}</h4>
                          <div className="grid grid-cols-2 gap-4 mb-4 text-[#888888] text-sm">
                            <div><span className="block text-[#b5aaa0]">Product</span>{quote.product}</div>
                            <div><span className="block text-[#b5aaa0]">Total Amount</span>${quote.total}</div>
                            <div><span className="block text-[#b5aaa0]">Valid Till</span>{quote.validTill || 'N/A'}</div>
                            <div><span className="block text-[#b5aaa0]">Status</span><span className={`font-bold ${quote.status === 'Accepted' ? 'text-green-500' : 'text-white'}`}>{quote.status || 'Sent'}</span></div>
                          </div>
                          {quote.status !== 'Accepted' && (
                            <button 
                              onClick={() => handleAcceptQuotation(quote._id)}
                              className="mt-2 bg-[#c8956c] text-[#15110F] px-5 py-2 rounded font-bold tracking-wide hover:bg-white transition-colors"
                            >
                              Accept Quotation & Place Order
                            </button>
                          )}
                        </div>
                      ))}

                      {/* Pending Inquiries */}
                      {inquiries.filter(inq => inq.status !== 'Quotation Created' && inq.status !== 'Accepted').map(inq => (
                        <div key={inq._id} className="bg-[#15110F] p-6 rounded-xl border border-[#2c241c]">
                          <div className="flex justify-between items-start mb-4">
                            <h4 className="font-serif text-lg text-white">{inq.product || 'General Inquiry'}</h4>
                            <span className="bg-[#2c241c] text-[#888888] text-xs px-2 py-1 rounded uppercase">{inq.status || 'Pending'}</span>
                          </div>
                          <p className="text-sm text-[#888888] mb-2"><span className="text-[#b5aaa0]">Quantity:</span> {inq.qty || 'N/A'}</p>
                          <p className="text-sm text-[#888888] line-clamp-2"><span className="text-[#b5aaa0]">Message:</span> {inq.message || 'No additional message'}</p>
                        </div>
                      ))}
                    </>
                  )}
                </div>
              )}
            </div>
          )}
          
          {/* WISHLIST TAB */}
          {activeTab === 'wishlist' && (
            <div>
              <h3 className="text-2xl font-serif text-[#c8956c] mb-6">My Wishlist</h3>
              {user?.wishlist?.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {user.wishlist.map(item => (
                    <div key={item._id || item} className="bg-[#15110F] overflow-hidden rounded-xl border border-[#2c241c] flex flex-col transition-all hover:border-[#c8956c]">
                      <img src={item.mainImage} alt={item.productName || 'Product'} className="w-full h-[200px] object-cover" />
                      <div className="p-4">
                        <h4 className="font-serif text-lg mb-3 line-clamp-1">{item.productName || 'Product'}</h4>
                        <Link to={`/product/${item._id}`} className="text-[#c8956c] text-sm uppercase tracking-wider font-bold hover:text-white transition-colors">
                          View Details
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-[#888888]">Your wishlist is currently empty.</p>
              )}
            </div>
          )}
          
          {/* ORDERS TAB */}
          {activeTab === 'orders' && (
            <div>
              <h3 className="text-2xl font-serif text-[#c8956c] mb-6">Order History</h3>
              {dataLoading ? (
                <div className="flex justify-center py-10"><div className="w-8 h-8 border-4 border-[#c8956c] border-t-transparent rounded-full animate-spin"></div></div>
              ) : (
                <div className="flex flex-col gap-4">
                  {orders.length === 0 ? (
                    <p className="text-[#888888]">You haven't placed any orders yet.</p>
                  ) : (
                    orders.map(order => (
                      <div key={order._id} className="bg-[#15110F] p-5 rounded-xl border border-[#2c241c] flex flex-col md:flex-row justify-between items-start md:items-start gap-4">
                        <div className="flex-1 w-full">
                          <div className="text-[#c8956c] font-bold mb-1">{order.orderNo || order._id}</div>
                          <div className="text-white text-lg font-serif">{order.product}</div>
                          <div className="text-sm text-[#888888] mt-1 mb-4">{new Date(order.createdAt).toLocaleDateString()}</div>
                          
                          <div className="w-full bg-[#110e0c] p-4 rounded-lg">
                            <h5 className="text-[#c8956c] font-bold mb-3 text-sm">PAYMENT ENTRIES</h5>
                            {order.payments?.length > 0 ? (
                              <div className="overflow-x-auto">
                                <table className="w-full text-sm text-left">
                                  <thead className="text-[#888888] border-b border-[#2c241c]">
                                    <tr>
                                      <th className="py-2">Date</th>
                                      <th className="py-2">Amount</th>
                                      <th className="py-2">Mode</th>
                                      <th className="py-2">Reference</th>
                                      <th className="py-2">Status</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {order.payments.map(p => (
                                      <tr key={p._id} className="border-b border-[#2c241c]/50 text-white">
                                        <td className="py-2">{new Date(p.createdAt).toLocaleDateString()}</td>
                                        <td className="py-2 font-bold">${p.amount}</td>
                                        <td className="py-2 uppercase">{p.mode}</td>
                                        <td className="py-2 text-[#888888]">{p.reference || 'N/A'}</td>
                                        <td className="py-2">
                                          <span className={`px-2 py-1 rounded text-[10px] uppercase font-bold tracking-wider ${p.status === 'Completed' ? 'bg-green-500/20 text-green-500' : 'bg-yellow-500/20 text-yellow-500'}`}>
                                            {p.status || 'Pending'}
                                          </span>
                                        </td>
                                      </tr>
                                    ))}
                                  </tbody>
                                </table>
                              </div>
                            ) : (
                              <p className="text-[#888888] text-sm italic">
                                No payment entries yet. Payments are handled directly (Bank/UPI). 
                                Admin will update this log once payment is received.
                              </p>
                            )}
                          </div>
                        </div>
                        <div className="text-left md:text-right shrink-0">
                          <div className="text-xl text-white font-bold mb-2">${order.totalAmount}</div>
                          <span className="bg-[#c8956c]/20 text-[#c8956c] text-xs px-2 py-1 rounded uppercase font-bold tracking-wider">{order.status || 'Processing'}</span>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
