import React from 'react';
import { CreditCard, Landmark, Send, DollarSign, Globe, ShieldCheck, FileText, Lock, UserCheck } from 'lucide-react';
import useScrollAnimation from '../../../../hooks/useScrollAnimation';

const paymentMethods = [
  { title: 'T/T Transfer',      subtitle: 'Telegraphic Transfer',  tag: 'RELIABLE',  Icon: Landmark   },
  { title: 'Credit/Debit',      subtitle: 'Visa & MasterCard',     tag: 'SECURE',    Icon: CreditCard },
  { title: 'SWIFT',             subtitle: 'International Banks',   tag: '3-5 DAYS',  Icon: Send       },
  { title: 'PayPal',            subtitle: 'Online Payments',       tag: 'INSTANT',   Icon: DollarSign },
  { title: 'Wise',              subtitle: "Int'l Transfers",       tag: 'LOW FEES',  Icon: Globe      },
  { title: 'Letter of Credit',  subtitle: 'Trade Finance',         tag: 'PROTECTED', Icon: FileText   },
];

const trustBadges = [
  { icon: <Lock size={16} strokeWidth={2} />, label: '256-bit SSL' },
  { icon: <ShieldCheck size={16} strokeWidth={2} />, label: 'PCI DSS' },
  { icon: <UserCheck size={16} strokeWidth={2} />, label: 'Fraud Protection' },
];

const SecurePaymentOptions = () => {
  const leftRef = useScrollAnimation();
  const rightRef = useScrollAnimation();
  return (
    <section id="payment" className="py-32 px-8 bg-[#15110F] relative overflow-hidden border-t border-[rgba(255,255,255,0.03)]">
      <div className="absolute -top-[20%] -left-[10%] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(200,149,108,0.12)_0%,rgba(21,17,15,0)_70%)] rounded-full pointer-events-none z-0 max-lg:w-[400px] max-lg:h-[400px] max-lg:top-0 max-lg:left-1/2 max-lg:-translate-x-1/2"></div>
      <div className="max-w-[1250px] mx-auto grid grid-cols-[400px_1fr] max-lg:grid-cols-1 gap-24 max-lg:gap-16 items-center relative z-10">

        <div className="flex flex-col" ref={leftRef} style={{opacity:0,transform:'translateX(-40px)',transition:'all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1)'}}>
          <div className="flex items-center gap-4 mb-8">
            <span className="w-10 h-px bg-[var(--color-brand-base)]"></span>
            <div className="font-['Inter','Outfit',sans-serif] text-[0.75rem] tracking-[4px] uppercase text-[#c8956c] border border-[#c8956c] rounded-full py-2 px-6 inline-flex items-center gap-3 mb-6 bg-transparent">
              <span>PAYMENTS</span>
            </div>
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-normal text-white leading-[1.1] m-0 mb-6 max-sm:text-[3.5rem]">
            Secure 
            <span className="text-[var(--color-brand-base)] italic"> Payment</span><br />
            Options
          </h2>
          <p className="font-sans text-[1.1rem] font-normal text-[#b5aaa0] mb-12">
            Experience hassle-free global transactions with our trusted, safe, and compliant payment gateways.
          </p>
          <div className="flex flex-row flex-wrap gap-6 max-md:flex-col">
            {trustBadges.map((b, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[rgba(200,149,108,0.1)] text-[var(--color-brand-base)] flex items-center justify-center">{b.icon}</div>
                <span className="font-sans text-[0.85rem] font-medium text-white">{b.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="" ref={rightRef} style={{opacity:0,transform:'translateX(40px)',transition:'all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) 0.2s'}}>
          <div className="grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-6">
            <div className="flex flex-col gap-6">
              <Card m={paymentMethods[0]} />
              <Card m={paymentMethods[3]} />
            </div>
            <div className="flex flex-col gap-6 mt-12 max-lg:mt-0">
              <Card m={paymentMethods[1]} />
              <Card m={paymentMethods[4]} />
            </div>
            <div className="flex flex-col gap-6">
              <Card m={paymentMethods[2]} />
              <Card m={paymentMethods[5]} />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

const Card = ({ m }) => (
  <div className="bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)] rounded-2xl py-7 px-6 relative overflow-hidden flex flex-col gap-6 backdrop-blur-[10px] transition-all duration-400 ease-in-out cursor-pointer group hover:-translate-y-2 hover:border-[rgba(200,149,108,0.4)] hover:bg-[rgba(255,255,255,0.04)]">
    <div className="absolute -top-[50px] -right-[50px] w-[100px] h-[100px] bg-[var(--color-brand-base)] blur-[50px] opacity-0 transition-opacity duration-500 ease-in-out pointer-events-none group-hover:opacity-30"></div>
    <div className="flex justify-between items-start relative z-10">
      <div className="w-[45px] h-[45px] rounded-xl bg-[linear-gradient(135deg,rgba(200,149,108,0.2)_0%,rgba(200,149,108,0.05)_100%)] border border-[rgba(200,149,108,0.2)] text-[var(--color-brand-base)] flex items-center justify-center transition-all duration-400 ease-in-out group-hover:scale-110 group-hover:bg-[var(--color-brand-base)] group-hover:text-[#15110F]">
        <m.Icon size={20} strokeWidth={1.5} />
      </div>
      <span className="font-sans text-[0.6rem] font-bold tracking-[1px] text-[var(--color-brand-base)] bg-[rgba(200,149,108,0.08)] py-1.5 px-3 rounded-full">{m.tag}</span>
    </div>
    <div className="relative z-10">
      <h3 className="font-serif text-[1.15rem] font-normal text-white m-0 mb-1.5">{m.title}</h3>
      <p className="font-sans text-[3.5rem] text-[#888888] m-0 leading-[1.4]">{m.subtitle}</p> 
    </div>
  </div>
);

export default SecurePaymentOptions;
