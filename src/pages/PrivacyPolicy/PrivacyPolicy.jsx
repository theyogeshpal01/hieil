import React, { useEffect } from 'react';
import { Shield, Lock, FileText, Database, Share2, Mail } from 'lucide-react';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      icon: <Database size={24} />,
      title: 'Information We Collect',
      content: 'We collect information you provide directly to us, such as when you create an account, subscribe to our newsletter, make a purchase, or contact us for support. This may include your name, email address, phone number, shipping and billing addresses, payment information, and any other details you choose to provide.'
    },
    {
      icon: <Lock size={24} />,
      title: 'How We Use Your Information',
      content: 'We use the information we collect to fulfill your orders, provide customer support, send you updates about your shipments, and improve our services. With your consent, we may also send you promotional emails about new products, special offers, and other information we think you may find interesting.'
    },
    {
      icon: <Share2 size={24} />,
      title: 'Information Sharing',
      content: 'We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties except to trusted third parties who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential.'
    },
    {
      icon: <Shield size={24} />,
      title: 'Data Security',
      content: 'We implement a variety of security measures to maintain the safety of your personal information. Your personal information is contained behind secured networks and is only accessible by a limited number of persons who have special access rights to such systems, and are required to keep the information confidential.'
    },
    {
      icon: <FileText size={24} />,
      title: 'Cookies and Tracking',
      content: 'We use cookies to help us remember and process the items in your shopping cart, understand and save your preferences for future visits, and compile aggregate data about site traffic and site interaction so that we can offer better site experiences and tools in the future.'
    },
    {
      icon: <Mail size={24} />,
      title: 'Contact Us',
      content: 'If you have any questions regarding this privacy policy, you may contact us using the information below: indiaexport@hieil.com or call us at +91 9050001972.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#1C1713] text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-6 md:px-12 lg:px-24 border-b border-[#2c241c] overflow-hidden">
        <div className="absolute inset-0 bg-[#15110F]"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#c8956c]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-3 px-6 py-2 border border-[#c8956c] text-[#c8956c] rounded-full text-[0.75rem] font-sans tracking-[4px] uppercase mb-6 bg-transparent">
            <span>LEGAL</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold font-serif mb-6">
            Privacy <span className="text-[#c8956c]">Matters</span>
          </h1>
          <p className="text-[#b5aaa0] text-lg max-w-2xl mx-auto leading-relaxed">
            Your privacy is critically important to us. This policy outlines how we collect, use, and protect your personal data when you interact with our services.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 px-6 md:px-12 bg-[#1C1713]">
        <div className="max-w-4xl mx-auto space-y-12">
          {sections.map((section, index) => (
            <div key={index} className="bg-[#15110F] p-8 md:p-10 border border-[#2c241c] rounded-none hover:border-[#c8956c]/50 transition-colors duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-none bg-[#1C1713] border border-[#2c241c] flex items-center justify-center text-[#c8956c]">
                  {section.icon}
                </div>
                <h2 className="text-2xl font-serif font-bold text-white">{section.title}</h2>
              </div>
              <p className="text-[#b5aaa0] leading-relaxed text-[15.2px]">
                {section.content}
              </p>
            </div>
          ))}

          <div className="mt-12 p-8 bg-[#c8956c]/5 border border-[#c8956c]/20 text-center">
            <p className="text-[#b5aaa0] text-sm">
              Last Updated: June 2024. We reserve the right to modify this privacy policy at any time, so please review it frequently.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
