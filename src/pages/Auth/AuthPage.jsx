import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import api from '../../config/api';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ name: '', email: '', password: '', phone: '', companyName: '' });
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const endpoint = isLogin ? '/users/auth/login' : '/users/auth/register';
      const res = await api.post(endpoint, formData);
      login(res.data.user, res.data.token);
      navigate('/account');
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong');
    }
  };

  return (
    <div className="min-h-screen bg-[#15110F] flex items-center justify-center p-4 pt-[100px]">
      <div className="w-full max-w-md bg-[rgba(28,23,19,0.6)] backdrop-blur-[10px] border border-[#2c241c] rounded-2xl p-8">
        <h2 className="text-3xl font-serif text-white text-center mb-6">{isLogin ? 'Login' : 'Register'}</h2>
        
        {error && <div className="bg-red-500/10 border border-red-500 text-red-500 p-3 rounded-lg mb-6 text-sm">{error}</div>}

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {!isLogin && (
            <>
              <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required className="w-full bg-[#15110F] border border-[#2c241c] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#c8956c] transition-colors" />
              <input type="text" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} className="w-full bg-[#15110F] border border-[#2c241c] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#c8956c] transition-colors" />
              <input type="text" name="companyName" placeholder="Company Name (Optional)" value={formData.companyName} onChange={handleChange} className="w-full bg-[#15110F] border border-[#2c241c] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#c8956c] transition-colors" />
            </>
          )}
          
          <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required className="w-full bg-[#15110F] border border-[#2c241c] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#c8956c] transition-colors" />
          <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required className="w-full bg-[#15110F] border border-[#2c241c] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#c8956c] transition-colors" />
          
          <button type="submit" className="w-full bg-[#c8956c] text-[#15110F] font-bold uppercase tracking-wider py-3 rounded-lg hover:bg-white transition-colors mt-2">
            {isLogin ? 'Sign In' : 'Create Account'}
          </button>
        </form>

        <div className="mt-6 text-center text-[#888888]">
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <button type="button" onClick={() => setIsLogin(!isLogin)} className="text-[#c8956c] hover:text-white transition-colors">
            {isLogin ? 'Register here' : 'Login here'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
