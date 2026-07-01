import React, { useEffect } from 'react';
import { BookOpen, AlertCircle, ShoppingCart, CreditCard, Truck, RefreshCcw, ShieldAlert, Users, ShieldCheck, Mail, Edit3, Scale, CheckCircle2 } from 'lucide-react';

const TermsOfService = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      icon: <BookOpen size={24} />,
      title: 'Definitions',
      content: (
        <>
          <p className="mb-4">The following terms carry the meanings assigned below throughout this Agreement:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Company / HIEIL:</strong> Hind Import Export International (OPC) Pvt. Ltd., a registered Indian entity engaged in the sourcing, quality control, branding, and global export of handcrafted products.</li>
            <li><strong>Products:</strong> Any handcrafted item listed or offered through hieil.com, including Blue Pottery, Metal Products, Stone Products, Wooden Products, Luxury Clocks, and any custom-developed goods.</li>
            <li><strong>User / Buyer:</strong> Any individual or legal entity that accesses the Site, requests a quotation, places an order, or engages HIEIL in any commercial capacity.</li>
            <li><strong>Merchant Exporter:</strong> An independent third-party representative who promotes HIEIL products, refers qualified buyers, and earns commission on confirmed bulk orders under a separate written reseller agreement.</li>
            <li><strong>Order:</strong> A confirmed, fully paid request for Products placed by a Buyer and accepted in writing by HIEIL.</li>
            <li><strong>Agreement:</strong> These Terms and Conditions, together with any applicable quotation, proforma invoice, or written confirmation exchanged between HIEIL and the Buyer.</li>
          </ul>
        </>
      )
    },
    {
      icon: <AlertCircle size={24} />,
      title: 'Nature of Products & Handcraft Disclaimer',
      content: (
        <>
          <p className="mb-4">Every product offered by HIEIL is handcrafted by skilled artisans using traditional and time-honoured techniques. You acknowledge and accept the following as inherent characteristics of authentic handmade goods:</p>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>No two products are identical &mdash; natural variation in form, finish, size, and colour is expected and desirable.</li>
            <li>Minor irregularities such as brush marks, glaze variations, natural grain patterns, slight dimensional differences, and surface texture variation are features of authentic craftsmanship, not manufacturing defects.</li>
            <li>Colour representation on screen may differ slightly from the physical product due to photographic conditions and display calibration.</li>
            <li>Products may show natural marks consistent with the raw materials used (wood grain, stone veining, metal patina, pottery dimpling, etc.).</li>
          </ul>
          <div className="p-4 bg-[#c8956c]/10 border-l-2 border-[#c8956c] italic">
            These natural characteristics are not grounds for return, refund, exchange, or complaint. By placing an Order with HIEIL, you affirm your understanding and acceptance of the handmade nature of all products.
          </div>
        </>
      )
    },
    {
      icon: <ShoppingCart size={24} />,
      title: 'Ordering Policy',
      content: (
        <>
          <p className="mb-4"><strong>Sample Orders:</strong> Sample orders are available with a minimum pack of 10 pieces per product type. Variations in colour, pattern, and finish within a sample pack are permitted and expected. Sample orders must be paid in full prior to processing. Sample pricing does not reflect bulk order pricing.</p>
          <p className="mb-4"><strong>Bulk Orders:</strong> Bulk orders carry a Minimum Order Quantity (MOQ) of 100 units per product type unless otherwise agreed in writing. All customization requests are available exclusively for bulk orders and must be fully documented and confirmed in writing by both parties before any payment is made.</p>
          <p className="mb-4"><strong>Order Confirmation:</strong> An Order is deemed confirmed only upon receipt of full advance payment and a written acknowledgement issued by HIEIL. Verbal commitments, informal messages, or unconfirmed quotations do not constitute a binding Order.</p>
          <div className="p-4 border border-dashed border-[#4a3e35]">
            <strong className="text-[#c8956c] text-xs uppercase tracking-wider block mb-2">Important Notice</strong>
            No part-payment, instalment plan, deferred payment, or Cash on Delivery (COD) arrangement is available or accepted under any circumstance. All orders require complete upfront payment before processing begins.
          </div>
        </>
      )
    },
    {
      icon: <CreditCard size={24} />,
      title: 'Payment Policy',
      content: 'All payments must be made in full and in advance through the payment methods specified on the Site or in the proforma invoice issued by HIEIL. Orders are processed only after full payment is confirmed and cleared in HIEIL\'s account. No amendments, cancellations, or order modifications will be accepted after payment is received. HIEIL bears no liability for international currency conversion charges, cross-border transaction fees, intermediary bank charges, or taxes incurred by the Buyer\'s financial institution. In the event of a failed payment, the Order will not be processed and the Buyer must reinitiate payment.'
    },
    {
      icon: <Truck size={24} />,
      title: 'Shipping & Delivery',
      content: 'HIEIL ships globally using reputed international freight and courier partners. Estimated delivery timelines are provided as guidance only and are not contractual guarantees. The Buyer is solely responsible for all import duties, customs clearance fees, local taxes, and compliance with the import regulations of the destination country. HIEIL is not liable for delivery delays caused by natural disasters, customs holds, port congestion, strikes, or events beyond our reasonable control. Risk of loss or damage passes to the Buyer upon handover of the shipment to the freight carrier.'
    },
    {
      icon: <RefreshCcw size={24} />,
      title: 'Returns, Refunds & Cancellations',
      content: (
        <>
          <div className="p-4 border border-dashed border-[#4a3e35] mb-4">
            <strong className="text-[#c8956c] text-xs uppercase tracking-wider block mb-2">Non-Refundable Policy</strong>
            All confirmed and paid Orders are final and non-reversible. HIEIL does not accept returns, issue refunds, or permit cancellations once payment has been received and the Order has been confirmed.
          </div>
          <p className="mb-4">The following do not constitute grounds for a return, refund, or cancellation: Buyer's change of preference; Products not matching subjective expectations of colour/finish; Natural variations inherent to handcrafted goods; Delays in delivery attributable to logistics partners/customs; Rejection of goods by third parties.</p>
          <p className="mb-4"><strong>Exceptions:</strong> A refund or replacement may be considered exclusively if an Order was fully paid but not shipped due to a confirmed internal error by HIEIL, or if a product explicitly listed in the confirmed written Order is entirely absent from the shipment. Any exception-based refund claim must be submitted in writing within 7 days of delivery, along with photographic evidence.</p>
        </>
      )
    },
    {
      icon: <ShieldAlert size={24} />,
      title: 'Intellectual Property',
      content: 'All content on hieil.com &mdash; including but not limited to product images, photography, videos, written descriptions, logo, brand identity, design layouts, and proprietary product data &mdash; is the exclusive intellectual property of HIEIL. Unauthorised reproduction, redistribution, commercial use, scraping, or copying of any Site content is strictly prohibited. The HIEIL name, logo, and associated brand assets may not be used in any promotional or commercial material without prior written consent.'
    },
    {
      icon: <Users size={24} />,
      title: 'Merchant Exporters & Affiliate Partners',
      content: 'Merchant Exporters and Affiliate Partners operate independently and are not employees, agents, co-owners, or legal representatives of HIEIL. Commission is payable on confirmed, fully paid bulk orders only. All buyer interactions, order processing, payment collection, and fulfilment are managed exclusively by HIEIL. Merchant Exporters cannot initiate, request, or authorize refunds or cancellations on behalf of their referred clients.'
    },
    {
      icon: <ShieldCheck size={24} />,
      title: 'Limitation of Liability',
      content: 'To the fullest extent permitted by applicable law, HIEIL, its directors, employees, contractors, and agents shall not be liable for any indirect, consequential, incidental, punitive, or special damages arising from the use of the Site or the purchase of Products, loss of anticipated profits, or damages arising from disputes between the Buyer and their own customers. HIEIL\'s total aggregate liability in connection with any Order shall not exceed the total value of the relevant Order paid by the Buyer.'
    },
    {
      icon: <Mail size={24} />,
      title: 'Communication Policy',
      content: 'HIEIL\'s primary communication channels are its official website contact form and designated email addresses. Informal channels such as personal WhatsApp messages, social media DMs, or unofficial phone calls do not constitute binding communication with HIEIL. Any agreement, commitment, or amendment must be in writing and formally acknowledged by an authorized HIEIL representative to be valid.'
    },
    {
      icon: <Edit3 size={24} />,
      title: 'Modification of Terms',
      content: 'HIEIL reserves the right to update, revise, or amend these Terms and Conditions at any time without prior notice. Any changes will be published on this page with a revised effective date. Your continued use of the Site or engagement in any commercial transaction with HIEIL following any such update constitutes full acceptance of the amended Terms.'
    },
    {
      icon: <Scale size={24} />,
      title: 'Governing Law & Jurisdiction',
      content: 'This Agreement shall be exclusively governed by and construed in accordance with the laws of the Republic of India. All disputes, claims, or proceedings arising from or in connection with this Agreement shall be subject to the exclusive jurisdiction of the competent courts located in Rajasthan, India. HIEIL does not recognise or submit to the jurisdiction of courts in any other country in relation to matters arising from this Agreement.'
    },
    {
      icon: <CheckCircle2 size={24} />,
      title: 'Acceptance of These Terms',
      content: (
        <>
          <p className="mb-4">By using hieil.com, submitting an inquiry, or placing an Order, you confirm and agree that:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>You have read and fully accept these Terms and Conditions in their entirety.</li>
            <li>You understand and accept the handcrafted nature of all products and the natural variations that accompany them.</li>
            <li>You acknowledge that all payments are non-refundable and that confirmed Orders are final.</li>
            <li>You waive any right to claim returns, refunds, or reversals contrary to the policy set out in Section 06.</li>
            <li>You agree that the courts of Rajasthan, India hold exclusive jurisdiction over any dispute arising from your relationship with HIEIL.</li>
            <li>You indemnify and hold harmless HIEIL, its directors, team members, artisans, and partners from any claims, liabilities, or damages arising from your use of the Site or any transaction made under this Agreement.</li>
          </ul>
        </>
      )
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
          <h1 className="text-4xl md:text-5xl font-bold font-serif mb-6">
            Terms & <span className="text-[#c8956c]">Conditions</span>
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
              These Terms and Conditions ("Agreement") govern all use of the website hieil.com ("Site") and all commercial engagements with HIEIL &mdash; Hind Import Export International (OPC) Pvt. Ltd. ("Company", "we", "us", or "our"). By accessing the Site, submitting an inquiry, placing an order, or engaging us as a B2B partner, you agree to be legally bound by the full terms of this Agreement. This Agreement constitutes a legally binding contract. If you do not accept these terms in their entirety, you must not use this website, place any order, or enter into any commercial arrangement with HIEIL.
            </p>
          </div>

          {sections.map((section, index) => (
            <div key={index} className="bg-[#15110F] p-8 md:p-10 border border-[#2c241c] rounded-none hover:border-[#c8956c]/50 transition-colors duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-none bg-[#1C1713] border border-[#2c241c] flex items-center justify-center text-[#c8956c]">
                  {section.icon}
                </div>
                <h2 className="text-2xl font-serif font-bold text-white">{section.title}</h2>
              </div>
              <div className="text-[#b5aaa0] leading-relaxed text-[15.2px]">
                {section.content}
              </div>
            </div>
          ))}

          <div className="mt-12 p-8 bg-[#c8956c]/5 border border-[#c8956c]/20 text-center">
            <h3 className="text-xl font-serif text-white mb-2">Have a question about these terms?</h3>
            <p className="text-[#b5aaa0] text-sm mb-4">
              Submit your query through our official contact form and our team will respond within 5 business days.
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

export default TermsOfService;
