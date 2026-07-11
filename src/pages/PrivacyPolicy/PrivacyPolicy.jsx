import React, { useEffect } from 'react';
import { Shield, Lock, FileText, Database, Share2, Mail, Clock, ShieldAlert, Globe, Activity, HelpCircle } from 'lucide-react';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      icon: <Database size={24} />,
      title: 'Information We Collect',
      content: (
        <>
          <p className="mb-4"><strong>1.1 Information You Provide Voluntarily</strong><br />
          When you interact with HIEIL &mdash; through inquiries, quote requests, bulk order forms, newsletter sign-ups, or partnership applications &mdash; you may share: Full name and professional title, Business name, GST/trade registration number, Email address and phone number, Billing and shipping address, and Product preferences.</p>

          <p className="mb-4"><strong>1.2 Transaction &amp; Order Information</strong><br />
          We collect details necessary to process and fulfill orders. Sensitive financial details are never stored or processed directly by HIEIL &mdash; all payment transactions are handled by certified, PCI-DSS-compliant third-party gateways.</p>

          <p><strong>1.3 Technical &amp; Usage Data</strong><br />
          Our servers and analytics tools may automatically record your IP address, browser type, operating system, pages visited, referring URLs, and session duration. This data is used solely to improve website performance and user experience.</p>
        </>
      )
    },
    {
      icon: <Activity size={24} />,
      title: 'Why We Collect Your Data',
      content: (
        <>
          <p className="mb-4">HIEIL processes personal data only for clear, legitimate purposes:</p>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>Processing and fulfilling product orders and bulk wholesale requests</li>
            <li>Communicating about quotes, order status, custom product development, and export documentation</li>
            <li>Verifying the identity of merchant exporters and B2B trade partners</li>
            <li>Sending relevant product updates or trade newsletters (with your prior consent)</li>
            <li>Improving website functionality through anonymized analytics</li>
            <li>Fulfilling legal, regulatory, and export compliance obligations</li>
          </ul>
          <div className="p-4 bg-[#c8956c]/10 border-l-2 border-[#c8956c] italic">
            We do not use your data for profiling, targeted advertising, or any purpose unrelated to our core B2B handicraft export services.
          </div>
        </>
      )
    },
    {
      icon: <Shield size={24} />,
      title: 'How We Protect Your Data',
      content: 'We implement multi-layered safeguards to prevent unauthorized access, loss, alteration, or disclosure of your information. This includes SSL/TLS encryption, secure server infrastructure, and restricted database access protocols. Access to personal data is limited to authorized personnel with a verified operational need. All service partners who process data on our behalf are contractually bound to equivalent privacy and security standards.'
    },
    {
      icon: <Clock size={24} />,
      title: 'Data Retention',
      content: 'We retain your personal data only for as long as necessary to fulfill the purposes described in this policy &mdash; or as required by applicable law (e.g., tax records, export documentation, GST compliance). If you request deletion of your data and no active order, pending inquiry, or legal obligation exists, your information will be securely erased from our systems within 30 business days of your verified request.'
    },
    {
      icon: <Share2 size={24} />,
      title: 'Sharing & Disclosure',
      content: 'HIEIL does not sell, rent, or trade your personal information to any third party under any circumstances. We share data only in limited, necessary situations: with logistics and freight partners solely to fulfill and track your shipment, with certified payment processors for secure transaction handling, and with government or regulatory authorities when required by law or export regulation.'
    },
    {
      icon: <Lock size={24} />,
      title: 'Your Rights',
      content: 'Depending on your jurisdiction, you may be entitled to access the personal data we hold about you, request correction of inaccurate information, request deletion of your data, withdraw consent to marketing communications, or object to specific forms of data processing. To exercise any of these rights, please use our official contact form. We will respond within 15 business days.'
    },
    {
      icon: <Globe size={24} />,
      title: 'International Data Transfers',
      content: 'As an export house serving buyers across the globe, your data may be processed in countries other than your own. Where such transfers occur, HIEIL ensures appropriate contractual and technical safeguards are in place in accordance with applicable data protection law, including standard contractual clauses where required.'
    },
    {
      icon: <FileText size={24} />,
      title: 'Cookies & Tracking',
      content: 'We use cookies and similar technologies to maintain website functionality, remember your preferences, and analyze aggregate traffic patterns. We do not use tracking technologies to build individual behavioral profiles for advertising. You may adjust your cookie preferences at any time through your browser settings.'
    },
    {
      icon: <ShieldAlert size={24} />,
      title: 'No Data from Minors',
      content: 'HIEIL\'s services are directed exclusively at businesses and adult trade buyers. We do not knowingly collect personal information from individuals under the age of 18. If we become aware that such data has been submitted, it will be promptly deleted.'
    },
    {
      icon: <HelpCircle size={24} />,
      title: 'Changes to This Policy',
      content: 'We may update this Privacy Matters document from time to time to reflect changes in our practices, services, or legal obligations. Any updates will be published on this page with a revised effective date. Your continued use of hieil.com after any update constitutes your acceptance of the revised policy.'
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
            <span>LEGAL & COMPLIANCE</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-normal leading-tight font-serif tracking-wide mb-6">
            Privacy <span className="text-[#c8956c]">Matters</span>
          </h1>
          <p className="text-[#b5aaa0] text-lg max-w-2xl mx-auto leading-relaxed">
            Effective Date: 2025 &middot; Hind Import Export International (OPC) Pvt. Ltd.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 px-6 md:px-12 bg-[#1C1713]">
        <div className="max-w-4xl mx-auto space-y-12">
          
          <div className="bg-[#15110F] p-8 md:p-10 border border-[#2c241c] rounded-none mb-12">
            <p className="text-[#b5aaa0] leading-relaxed text-[15.2px]">
              At HIEIL &mdash; Hind Import Export International (OPC) Pvt. Ltd. &mdash; we believe that privacy is not a formality; it is a commitment. When you engage with us through hieil.com, whether to explore our handcrafted collections, submit a trade inquiry, or partner with us as a wholesale buyer, you trust us with your information. We take that trust seriously. This Privacy Matters document explains what personal data we collect, why we collect it, how we protect it, and the rights you hold.
            </p>
          </div>

          {sections.map((section, index) => (
            <div key={index} className="bg-[#15110F] p-8 md:p-10 border border-[#2c241c] rounded-none hover:border-[#c8956c]/50 transition-colors duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-none bg-[#1C1713] border border-[#2c241c] flex items-center justify-center text-[#c8956c]">
                  {section.icon}
                </div>
                <h2 className="text-2xl font-serif font-normal text-white">{section.title}</h2>
              </div>
              <div className="text-[#b5aaa0] leading-relaxed text-[15.2px]">
                {section.content}
              </div>
            </div>
          ))}

          <div className="mt-12 p-8 bg-[#c8956c]/5 border border-[#c8956c]/20 text-center">
            <h3 className="text-xl font-serif text-white mb-2">Questions & Contact</h3>
            <p className="text-[#b5aaa0] text-sm mb-4">
              All privacy-related queries, data access requests, or deletion requests should be directed through our official contact form.
            </p>
            <p className="text-[#b5aaa0] text-sm font-semibold">
              HIEIL &mdash; Hind Import Export International (OPC) Pvt. Ltd.<br />
              +91 90500 01972
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
