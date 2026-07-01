import React, { useEffect } from 'react';
import { ShieldCheck, Building, Scale, AlertCircle, FileText, Globe, Truck, Anchor, HelpCircle, FileSignature } from 'lucide-react';

const LegalInfo = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      icon: <Building size={24} />,
      title: 'Company Identity',
      content: (
        <>
          <p className="mb-4">HIEIL operates as a registered B2B export house based in India. Below are the official company details for legal and commercial reference:</p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li><strong>Legal Name:</strong> Hind Import Export International (OPC) Pvt. Ltd.</li>
            <li><strong>Trade Name:</strong> HIEIL</li>
            <li><strong>Entity Type:</strong> One Person Company (OPC) &mdash; Private Limited</li>
            <li><strong>Country of Incorporation:</strong> Republic of India</li>
            <li><strong>Registered State:</strong> Rajasthan, India</li>
            <li><strong>Year Established:</strong> 2024</li>
          </ul>
        </>
      )
    },
    {
      icon: <FileSignature size={24} />,
      title: 'Scope & Application',
      content: 'This Legal Info applies to all visitors to and users of hieil.com, regardless of their country of residence or access method. It applies to all wholesale buyers, importers, distributors, resellers, and retail buyers who transact with HIEIL, as well as all Merchant Exporters and Affiliate Partners operating under a written agreement. This document should be read alongside HIEIL\'s Terms & Conditions and Privacy Policy.'
    },
    {
      icon: <AlertCircle size={24} />,
      title: 'Disclaimer of Warranties',
      content: 'HIEIL provides this website and all information contained herein on an "as is" and "as available" basis. To the fullest extent permitted by applicable law, HIEIL expressly disclaims all warranties, representations, and conditions of any kind, whether express, implied, or statutory. All products are handcrafted by skilled artisans. Natural variation in colour, texture, size, finish, and pattern is inherent to the handmade process and does not constitute a defect or grounds for any legal claim.'
    },
    {
      icon: <FileText size={24} />,
      title: 'Intellectual Property',
      content: 'All intellectual property rights in and relating to hieil.com and HIEIL\'s products, branding, and content are owned exclusively by Hind Import Export International (OPC) Pvt. Ltd. This includes brand assets, website content, custom product designs, and commercial materials. Unauthorised reproduction, adaptation, distribution, public display, or commercial exploitation is strictly prohibited.'
    },
    {
      icon: <Globe size={24} />,
      title: 'Export Compliance',
      content: 'HIEIL conducts its export operations in full compliance with the laws and regulations of the Republic of India. The Buyer is solely responsible for compliance with all import regulations, customs procedures, tariff obligations, restricted goods lists, and applicable local laws in the country of destination. HIEIL does not export to sanctioned countries or entities.'
    },
    {
      icon: <ShieldCheck size={24} />,
      title: 'Limitation of Liability',
      content: 'To the maximum extent permitted by law, HIEIL shall not be liable for any loss or damage arising from use of the website, reliance on product descriptions prior to confirmation, delays caused by third parties or customs, or losses arising from non-compliance with import regulations. HIEIL\'s total aggregate liability in connection with any single Order shall not exceed the total invoice value of that specific Order.'
    },
    {
      icon: <Anchor size={24} />,
      title: 'Third-Party Links & Services',
      content: 'hieil.com may contain links to external websites, payment processors, logistics portals, or certification bodies. These links are provided for informational convenience only. HIEIL does not endorse, control, or accept responsibility for the content, privacy practices, or terms of any third-party website or service.'
    },
    {
      icon: <Scale size={24} />,
      title: 'Dispute Resolution',
      content: 'HIEIL is committed to resolving commercial disputes fairly. The aggrieved party must submit a formal written notice describing the dispute in detail via our official contact form. Both parties agree to engage in good-faith negotiations for a period of 30 calendar days. If negotiation fails, either party may refer the matter to a mutually agreed mediator in Rajasthan, India.'
    },
    {
      icon: <HelpCircle size={24} />,
      title: 'Governing Law & Jurisdiction',
      content: 'This Legal Info, and all matters arising from or in connection with your use of hieil.com or any commercial engagement with HIEIL, shall be exclusively governed by and construed in accordance with the laws of the Republic of India. All disputes shall be subject to the exclusive jurisdiction of the competent courts located in Rajasthan, India.'
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
            <span>LEGAL & COMPLIANCE</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold font-[Cinzel] mb-6">
            Legal <span className="text-[#c8956c]">Info</span>
          </h1>
          <p className="text-[#b5aaa0] text-lg max-w-2xl mx-auto leading-relaxed font-[Inter]">
            Effective Date: 2025 &middot; Hind Import Export International (OPC) Pvt. Ltd.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 px-6 md:px-12 bg-[#1C1713]">
        <div className="max-w-4xl mx-auto space-y-12">
          
          <div className="bg-[#15110F] p-8 md:p-10 border border-[#2c241c] rounded-none mb-12">
            <p className="text-[#b5aaa0] leading-relaxed text-[15.2px] font-[Inter]">
              This Legal Information page sets out the legal framework governing your access to and use of hieil.com and all commercial dealings with HIEIL. It consolidates our key legal positions in one authoritative reference. By visiting this website or engaging with HIEIL in any commercial capacity, you confirm that you have read, understood, and accepted the terms stated here.
            </p>
          </div>

          {sections.map((section, index) => (
            <div key={index} className="bg-[#15110F] p-8 md:p-10 border border-[#2c241c] rounded-none hover:border-[#c8956c]/50 transition-colors duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-none bg-[#1C1713] border border-[#2c241c] flex items-center justify-center text-[#c8956c]">
                  {section.icon}
                </div>
                <h2 className="text-2xl font-[Cinzel] font-bold text-white">{section.title}</h2>
              </div>
              <div className="text-[#b5aaa0] leading-relaxed text-[15.2px] font-[Inter]">
                {section.content}
              </div>
            </div>
          ))}

          <div className="mt-12 p-8 bg-[#c8956c]/5 border border-[#c8956c]/20 text-center">
            <p className="text-[#b5aaa0] text-sm mb-2 font-[Inter]">
              Submit all formal notices and legal inquiries through our official contact form.
            </p>
            <p className="text-[#b5aaa0] text-sm font-[Inter]">
              We respond within 5 business days. Phone: +91 90500 01972
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LegalInfo;
