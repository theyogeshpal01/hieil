import React, { useEffect } from 'react';
import { X } from 'lucide-react';

const CartSidebar = ({ isOpen, onClose }) => {
  // Prevent body scroll when sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      <div 
        className={`fixed top-0 left-0 w-screen h-screen bg-white z-[1000] transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`} 
        onClick={onClose}
        aria-hidden="true"
      />
      <div className={`fixed top-0 w-full max-w-[450px] max-sm:max-w-[100vw] h-screen bg-[#15110F] shadow-[-4px_0_15px_rgba(0,0,0,0.1)] transition-[right] duration-500 ease-[cubic-bezier(0.77,0,0.175,1)] z-[1001] flex flex-col ${isOpen ? 'right-0' : '-right-[450px]'}`}>
        <button className="absolute top-6 right-6 bg-transparent border-none text-white cursor-pointer flex items-center justify-center transition-transform duration-200 hover:scale-110" onClick={onClose} aria-label="Close Cart">
          <X size={28} strokeWidth={1} />
        </button>

        <div className="flex-1 flex flex-col items-center justify-center p-12 text-center">
          <h2 className="font-serif text-[2.2rem] font-normal text-white mb-10 tracking-[0.5px]">Your cart is empty</h2>
          
          <button className="bg-[#c8956c] text-white border-none py-4 px-8 font-sans text-[0.85rem] font-medium tracking-[1.5px] uppercase cursor-pointer transition-colors duration-200 w-full max-w-[320px] mb-14 hover:bg-[#0c5650]" onClick={onClose}>
            CONTINUE SHOPPING
          </button>

          <div className="flex flex-col gap-2">
            <p className="font-serif text-2xl text-white m-0">Have an account?</p>
            <p className="font-serif text-[1.1rem] text-[#b5aaa0] m-0">
              <a href="/login" className="text-white underline underline-offset-4 hover:text-[#c8956c]">Log in</a> to check out faster.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartSidebar;
