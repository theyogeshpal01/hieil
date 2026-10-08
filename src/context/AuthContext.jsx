import React, { createContext, useState, useEffect, useContext } from 'react';
import api from '../config/api';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('userToken'));
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      if (token) {
        try {
          const res = await api.get('/users/auth/me', {
            headers: { Authorization: \`Bearer \${token}\` }
          });
          setUser(res.data);
        } catch (error) {
          console.error("Auth fetch error:", error);
          logout();
        }
      }
      setLoading(false);
    };
    fetchUser();
  }, [token]);

  const login = (userData, jwtToken) => {
    localStorage.setItem('userToken', jwtToken);
    setToken(jwtToken);
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem('userToken');
    setToken(null);
    setUser(null);
  };

  const toggleWishlist = async (productId) => {
    if (!token) return false;
    try {
      const res = await api.post('/users/auth/wishlist/toggle', { productId }, {
        headers: { Authorization: \`Bearer \${token}\` }
      });
      setUser(prev => ({ ...prev, wishlist: res.data }));
      return true;
    } catch (error) {
      console.error("Wishlist error:", error);
      return false;
    }
  };

  return (
    <AuthContext.Provider value={{ user, token, loading, login, logout, toggleWishlist }}>
      {children}
    </AuthContext.Provider>
  );
};
