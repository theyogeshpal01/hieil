import React, { useEffect } from 'react';
import { FileText, CheckCircle2, AlertCircle, Scale, Building, Truck } from 'lucide-react';

const TermsOfService = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      icon: <Building size={24} />,
      title: 'Company Information',
      content: 'Welcome to HIEIL (Hind Import Export International OPC Pvt. Ltd.). By accessing or using our website, you agree to be bound by these Terms and Conditions. Our registered office is located in Jaipur, Rajasthan – 302 001, India.'
    },
    {
      icon: <CheckCircle2 size={24} />,
      title: 'Product Information & Orders',
      content: 'We strive to display our handcrafted products as accurately as possible. However, due to the nature of handmade items, slight variations in color, texture, and size may occur. All orders are subject to acceptance and availability. We reserve the right to refuse or cancel any order for any reason.'
    },
    {
      icon: <Scale size={24} />,
      title: 'Pricing & Payments',
      content: 'All prices are subject to change without notice. For bulk and export orders, payment terms will be agreed upon individually. We accept standard payment methods including bank transfers and major credit cards. You agree to provide current, complete, and accurate purchase information for all purchases made.'
    },
    {
      icon: <Truck size={24} />,
      title: 'Shipping & Delivery',
      content: 'Delivery times are estimates and may vary depending on the destination and customs processing. We are not responsible for delays outside our control. The risk of loss and title for items pass to you upon our delivery to the carrier.'
    },
    {
      icon: <AlertCircle size={24} />,
      title: 'Returns & Refunds',
      content: 'Due to the custom nature of our bulk and export orders, returns and refunds are handled on a case-by-case basis. Please inspect your order upon reception and contact us immediately if the item is defective, damaged, or if you receive the wrong item, so that we can evaluate the issue and make it right.'
    },
    {
      icon: <FileText size={24} />,
      title: 'Intellectual Property',
      content: 'All content on this site, including text, graphics, logos, images, and software, is the property of HIEIL or its content suppliers and protected by international copyright laws. You may not reproduce, duplicate, copy, sell, or exploit any portion of the Service without express written permission by us.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#1C1713] text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-6 md:px-12 lg:px-24 border-b border-[#2c241c] overflow-hidden">
        <div className="absolute inset-0 bg-[#15110F]"></div>
        <div className="absolute top-0 left-0 w-64 h-64 bg-[#c8956c]/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/3"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-3 px-6 py-2 border border-[#c8956c] text-[#c8956c] rounded-full text-[0.75rem] font-sans tracking-[4px] uppercase mb-6 bg-transparent">
            <span>AGREEMENT</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold font-serif mb-6">
            Terms & <span className="text-[#c8956c]">Conditions</span>
          </h1>
          <p className="text-[#b5aaa0] text-lg max-w-2xl mx-auto leading-relaxed">
            Please read these terms of service carefully before accessing or using our website and services.
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
            <p className="text-[#b5aaa0] text-sm mb-2">
              By using our site, you agree to these terms of service.
            </p>
            <p className="text-[#b5aaa0] text-sm">
              Questions about the Terms of Service should be sent to us at indiaexport@hieil.com.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfService;
