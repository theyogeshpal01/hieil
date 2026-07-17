import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { 
  FaHome, FaList, FaTags, FaShoppingCart, FaCogs, 
  FaThLarge, FaBlogger, FaPowerOff, FaStar, FaBell,
  FaBuilding, FaClipboardList, FaUserTie, FaUsers,
  FaImages, FaQuestionCircle, FaCertificate, FaSlidersH,
  FaEnvelope, FaInfoCircle, FaDownload, FaUserCog,
  FaBoxOpen, FaStore, FaLayerGroup, FaShippingFast,
  FaMapMarkerAlt, FaUserShield, FaChevronDown, FaChevronRight
} from 'react-icons/fa';
import './Sidebar.css';

const SidebarItem = ({ to, icon, label, exact, children }) => {
  const location = useLocation();
  
  // Check if any child is active
  const isChildActive = children && children.some(child => {
    const childPath = `/admin${child.to}`;
    return location.pathname === childPath || location.pathname.startsWith(`${childPath}/`);
  });

  const [isOpen, setIsOpen] = useState(isChildActive);
  const Icon = icon;

  const adminTo = to === '/' ? '/admin' : (to ? `/admin${to}` : undefined);

  if (children) {
    return (
      <li className="has-children">
        <div className={`nav-link-wrapper ${isChildActive ? 'active' : ''}`} onClick={() => setIsOpen(!isOpen)}>
          <div className="nav-link-content">
            <Icon className="nav-icon" /> <span className="nav-label">{label}</span>
          </div>
          {isOpen ? <FaChevronDown className="chevron" /> : <FaChevronRight className="chevron" />}
        </div>
        <ul className={`submenu ${isOpen ? 'open' : ''}`}>
          {children.map((child, idx) => (
            <li key={idx}>
              <NavLink to={`/admin${child.to}`} className={({ isActive }) => isActive ? 'active' : ''}>
                <span className="nav-label">{child.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </li>
    );
  }

  return (
    <li>
      <NavLink to={adminTo} className={({ isActive }) => isActive ? 'active' : ''} end={exact}>
        <Icon className="nav-icon" /> <span className="nav-label">{label}</span>
      </NavLink>
    </li>
  );
};

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-profile">
        <div className="profile-img">
          <img src="https://i.pravatar.cc/150?img=11" alt="Admin" />
        </div>
        <div className="profile-info">
          <h3>HIEIL ADMIN</h3>
          <p>hieil@gmail.com</p>
        </div>
      </div>

      <div className="sidebar-nav-container">
        {/* Section 1 */}
        <div className="sidebar-section-header">WEBSITE CONTENT DATA</div>
        <nav className="sidebar-nav">
          <ul>
            <SidebarItem to="/" icon={FaHome} label="Dashboard" exact />
            <SidebarItem to="/categories" icon={FaList} label="Category's" />
            <SidebarItem to="/subcategories" icon={FaList} label="Subcategory's" />
            <SidebarItem to="/products" icon={FaShoppingCart} label="Product's" />
            <SidebarItem to="/custom-products" icon={FaCogs} label="Custom Products" />
            <SidebarItem to="/wholesale-categories" icon={FaLayerGroup} label="Wholesale Categories" />
            <SidebarItem to="/blog-category" icon={FaTags} label="Blog Category" />
            <SidebarItem to="/blogs" icon={FaBlogger} label="Blog's" />
            <SidebarItem to="/blog-fdgw" icon={FaBlogger} label="Blog-FDGW" />
            <SidebarItem icon={FaBell} label="Manage Submissions">
               {[
                 {to: '/submissions/reviews', label: 'Reviews/Testimonials'},
                 {to: '/submissions/user-moments', label: 'User Moments/Photos'},
                 {to: '/submissions/feedback', label: 'Customer Feedback'},
                 {to: '/submissions/newsletter', label: 'Newsletter Subscribers'}
               ]}
            </SidebarItem>
            <SidebarItem to="/brands" icon={FaBuilding} label="Brands" />
            <SidebarItem to="/product-cq" icon={FaClipboardList} label="Product C & Q" />
            <SidebarItem to="/artisan" icon={FaUserTie} label="Our Artisan" />
            <SidebarItem to="/leaders" icon={FaUsers} label="Our Leader's" />
            <SidebarItem to="/gallery-category" icon={FaImages} label="Gallery Category" />
            <SidebarItem to="/gallery" icon={FaImages} label="Gallery" />
            <SidebarItem to="/faq-category" icon={FaQuestionCircle} label="FAQ Category" />
            <SidebarItem to="/faq" icon={FaQuestionCircle} label="FAQ" />
            <SidebarItem to="/certifications" icon={FaCertificate} label="Our Certifications" />
            <SidebarItem to="/sliders" icon={FaSlidersH} label="Slider's" />
            <SidebarItem to="/contact" icon={FaEnvelope} label="Contact" />
          </ul>
        </nav>

        {/* Section 2 */}
        <div className="sidebar-section-header">ADMIN & OPERATIONS</div>
        <nav className="sidebar-nav">
          <ul>
            <SidebarItem to="/service-inquiries" icon={FaInfoCircle} label="Service Inquiries" />
            <SidebarItem to="/download-leads" icon={FaDownload} label="Download Leads" />
            <SidebarItem icon={FaUserCog} label="Vendor Management">
               {[
                 {to: '/vendor-management/master', label: 'Vendor Master'},
                 {to: '/vendor-management/report', label: 'Vendor Report'},
                 {to: '/vendor-management/payout', label: 'Vendor Payout'}
               ]}
            </SidebarItem>
            <SidebarItem icon={FaBoxOpen} label="Inquiry System">
               {[
                 {to: '/inquiry-system/product-inquiries', label: 'Product Inquiries'},
                 {to: '/inquiry-system/orders', label: 'Orders'},
                 {to: '/inquiry-system/quotations', label: 'Quotations'},
                 {to: '/inquiry-system/invoices', label: 'Invoices'},
                 {to: '/inquiry-system/payments', label: 'Payments'},
                 {to: '/inquiry-system/shipping', label: 'Shipping'},
                 {to: '/inquiry-system/reports', label: 'Reports'}
               ]}
            </SidebarItem>
            <SidebarItem icon={FaStore} label="Retailer System">
               {[
                 {to: '/retailer-system/product-inquiries', label: 'Product Inquiries'},
                 {to: '/retailer-system/orders', label: 'Orders'},
                 {to: '/retailer-system/quotations', label: 'Quotations'},
                 {to: '/retailer-system/invoices', label: 'Invoices'},
                 {to: '/retailer-system/payments', label: 'Payments'},
                 {to: '/retailer-system/shipping', label: 'Shipping'}
               ]}
            </SidebarItem>
            <SidebarItem to="/bulk-fmoq" icon={FaLayerGroup} label="Bulk-FMOQ" />
            <SidebarItem to="/shipping-list" icon={FaShippingFast} label="Shipping List" />
            <SidebarItem to="/index-states" icon={FaMapMarkerAlt} label="Index States" />
          </ul>
        </nav>

        {/* Section 3 */}
        <div className="sidebar-section-header">SUB ADMIN CONTROL</div>
        <nav className="sidebar-nav">
          <ul>
            <SidebarItem to="/sub-admin-mgmt" icon={FaUserShield} label="Sub Admin Mgmt" />
          </ul>
        </nav>
      </div>

      <div className="sidebar-footer">
        <button className="logout-btn" onClick={() => { localStorage.removeItem('isAuthenticated'); window.location.href = '/'; }}>
          <FaPowerOff className="nav-icon" /> <span className="nav-label">Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
