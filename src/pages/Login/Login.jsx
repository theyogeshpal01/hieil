import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const Login = () => {
  const cardRef = useScrollAnimation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#15110F]">
      {/* Top Banner */}
      <div className="bg-[#15110F] py-16 text-center">
        <h1 className="font-serif text-2xl text-white mb-2 uppercase tracking-[1.5px]">ACCOUNT</h1>
        <div className="font-serif text-[0.95rem] text-[#b5aaa0] [&_a]:text-[#b5aaa0] [&_a]:no-underline hover:[&_a]:text-[#cb6b51] [&_a]:transition-colors [&_a]:duration-200">
          <Link to="/">Home</Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex justify-center py-16 px-4">
        <div className="w-full max-w-[550px] bg-[#15110F] p-16 text-center border border-[#f2f2f2] max-sm:p-10 max-sm:px-6 max-sm:border-none" ref={cardRef} style={{opacity:0,transform:'translateY(40px)',transition:'opacity 0.7s ease,transform 0.7s ease'}}>
          <h2 className="font-serif text-[2.2rem] text-white mb-12 font-normal">Log in <br /> <span style={{ color: 'var(--color-brand-base)' }}>to your account</span></h2>
          
          <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
            <div className="w-full">
              <input 
                type="email" 
                placeholder="Email" 
                className="w-full p-[1.2rem] border border-[#2c241c] font-sans text-[0.95rem] text-white bg-[#15110F] transition-colors duration-200 focus:outline-none focus:border-[#cb6b51] placeholder-[#aaaaaa]" 
                required 
              />
            </div>
            
            <div className="w-full">
              <input 
                type="password" 
                placeholder="Password" 
                className="w-full p-[1.2rem] border border-[#2c241c] font-sans text-[0.95rem] text-white bg-[#15110F] transition-colors duration-200 focus:outline-none focus:border-[#cb6b51] placeholder-[#aaaaaa]" 
                required 
              />
            </div>
            
            <div className="text-left -mt-1 [&_a]:font-serif [&_a]:text-[1rem] [&_a]:text-white [&_a]:underline [&_a]:decoration-1 [&_a]:underline-offset-4 hover:[&_a]:text-[#cb6b51]">
              <Link to="/forgot-password">Forgot your password?</Link>
            </div>
            
            <button type="submit" className="bg-[#cb6b51] text-white border-none p-[1.2rem] font-sans text-[0.9rem] font-medium tracking-[1px] uppercase cursor-pointer transition-colors duration-300 mt-4 hover:bg-[#b55c45]">
              SIGN IN
            </button>
            
            <div className="mt-6 [&_a]:font-serif [&_a]:text-[1rem] [&_a]:text-white [&_a]:underline [&_a]:decoration-1 [&_a]:underline-offset-4 hover:[&_a]:text-[#cb6b51]">
              <Link to="/register">No account yet? Create an account</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
