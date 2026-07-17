import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown, ChevronUp } from 'lucide-react';
import { HEADER_LINKS } from '../../../constants/navigation';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState(null);
  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleMobileDropdown = (e, label) => {
    e.preventDefault();
    setOpenMobileDropdown(openMobileDropdown === label ? null : label);
  };

  return (
    <header className="bg-[#15110F] flex justify-between items-center px-5 sm:px-8 lg:px-[60px] h-[70px] sm:h-[85px] font-sans border-b border-white/5 sticky top-0 z-50">
      <Link to="/" className="flex items-center gap-4 no-underline group">
        <img src="/logo.png" alt="HIEIL Logo" className="w-8 h-8 sm:w-10 sm:h-10 stroke-[#c8956c] stroke-1 fill-none" />
        <span className="text-[18px] sm:text-[22px] tracking-[4px] font-light text-white font-serif">HIEIL</span>
      </Link>

      {/* Desktop Nav */}
      <nav className="hidden lg:flex gap-5 h-full items-center">
        {HEADER_LINKS.map((link) => (
          <div key={link.label} className="relative h-full flex items-center group">
            {link.hasDropdown ? (
              <>
                <Link to={link.href} className="text-[#b5aaa0] no-underline text-[11px] tracking-[1.5px] font-medium transition-colors duration-300 uppercase flex items-center gap-1.5 p-2.5 group-hover:text-[#c8956c]">
                  {link.label}
                  <ChevronDown size={14} className="-mt-[1px]" />
                </Link>
                <div className="absolute top-full left-1/2 -translate-x-1/2 translate-y-2.5 bg-[#15110F]/98 backdrop-blur-md border border-[#2c241c] min-w-[250px] py-4 shadow-[0_10px_40px_rgba(0,0,0,0.8)] opacity-0 invisible transition-all duration-300 z-50 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0">
                  {link.dropdownItems.map((item) => (
                    <Link key={item.label} to={item.href} className="block px-6 py-2.5 text-[#b5aaa0] no-underline text-[12px] tracking-[1.5px] uppercase transition-all duration-300 whitespace-nowrap hover:text-[#c8956c] hover:bg-[#c2a373]/5 hover:pl-7">
                      {item.label}
                    </Link>
                  ))}
                </div>
              </>
            ) : (
              <Link to={link.href} className="text-[#b5aaa0] no-underline text-[11px] tracking-[1.5px] font-medium transition-colors duration-300 uppercase flex items-center gap-1.5 p-2.5 hover:text-[#c8956c]">
                {link.label}
              </Link>
            )}
          </div>
        ))}
      </nav>

      <div className="flex items-center gap-4">
        <button className="hidden lg:block bg-[#c8956c] text-[#110e0c] border border-[#c8956c] py-3 px-7 text-[12px] tracking-[2px] cursor-pointer uppercase font-bold transition-all duration-300 hover:bg-transparent hover:text-[#c8956c]" onClick={() => navigate('/contact')}>GET QUOTE</button>
        <button className="block lg:hidden bg-transparent border-none text-[#c8956c] cursor-pointer p-1" onClick={toggleMobileMenu} aria-label="Toggle menu">
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      {isMobileMenuOpen && (
        <div className="block lg:hidden absolute top-[70px] sm:top-[85px] left-0 right-0 bg-[#110e0c] px-5 py-5 pb-8 sm:px-[30px] sm:py-[20px] sm:pb-[40px] border-b border-white/5 z-40 shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
          <div className="flex flex-col gap-2.5">
            {HEADER_LINKS.map((link) => (
              <div key={link.label} className="flex flex-col">
                {link.hasDropdown ? (
                  <>
                    <div 
                      className="text-[#b5aaa0] no-underline text-[14px] tracking-[2px] font-medium uppercase transition-colors duration-300 py-2.5 flex justify-between items-center cursor-pointer hover:text-[#c8956c]" 
                      onClick={(e) => toggleMobileDropdown(e, link.label)}
                    >
                      {link.label}
                      {openMobileDropdown === link.label ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                    </div>
                    {openMobileDropdown === link.label && (
                      <div className="flex flex-col pl-5 border-l border-[#2c241c] mt-1 mb-2.5 ml-2.5">
                        {link.dropdownItems.map((item) => (
                          <Link 
                            key={item.label} 
                            to={item.href} 
                            className="text-[#8c8279] no-underline text-[12px] tracking-[1px] py-2.5 uppercase transition-colors duration-300 hover:text-[#c8956c]"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link 
                    to={link.href} 
                    className="text-[#b5aaa0] no-underline text-[14px] tracking-[2px] font-medium uppercase transition-colors duration-300 py-2.5 flex justify-between items-center cursor-pointer hover:text-[#c8956c]"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
            <button className="bg-[#c8956c] text-[#110e0c] border border-[#c8956c] py-3.5 px-7 text-[12px] tracking-[2px] cursor-pointer uppercase font-bold mt-5 text-center transition-all duration-300 hover:bg-transparent hover:text-[#c8956c]" onClick={() => { navigate('/contact'); setIsMobileMenuOpen(false); }}>GET QUOTE</button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
