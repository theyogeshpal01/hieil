import React from 'react';
import { Check, MapPin, TrendingUp, Users, Globe2, Award, Handshake, ShieldCheck, CheckCircle2 } from 'lucide-react';
import useScrollAnimation from '../../../../hooks/useScrollAnimation';

const stats = [
  { number: '2+',    label: 'Years Experience', icon: <TrendingUp size={20} strokeWidth={1.5} /> },
  { number: '25+',   label: 'Countries Served'},
  { number: '500+',  label: 'Artisan Clusters',  icon: <Users     size={20} strokeWidth={1.5} /> },
  { number: '1000+', label: 'Local Clients',      icon: <Award     size={20} strokeWidth={1.5} /> },
];

const countries = [
  'USA', 'UK', 'Canada', 'Australia', 'Germany',
  'France', 'UAE', 'Japan', 'Singapore', 'South Africa',
  'Italy', 'Netherlands', 'New Zealand', 'Sweden', 'Brazil',
];

const certifications = [
  'MSME Certified',
  'Handicraft Export Promotion Council Member',
  'Fair Trade Certified',
  'Eco-Friendly Production Certified',
  'Government of India Recognized Exporter',
];

const associations = [
  'Federation of Indian Export Organisations (FIEO)',
  'Export Promotion Council for Handicrafts (EPCH)',
  'Craftmark \u2014 All India Artisans & Craftworkers',
  'Associated with 500+ Artisan Clusters',
];

const GlobalClients = () => {
  const headingRef = useScrollAnimation();
  const statsRef   = useScrollAnimation();
  const lowerRef   = useScrollAnimation();

  return (
    <section className="py-12 px-8 bg-[#15110F]">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-14">

        {/* Top: heading + stats */}
        <div className="grid grid-cols-1 min-[900px]:grid-cols-2 gap-10 min-[900px]:gap-16 items-center">
          <div className="" ref={headingRef} style={{opacity:0,transform:'translateX(-40px)',transition:'opacity 0.7s ease,transform 0.7s ease'}}>
            <div className="font-sans text-xs tracking-[4px] uppercase text-[#c8956c] border border-[#c8956c] rounded-full py-2 px-6 inline-flex items-center gap-3 mb-6 bg-transparent">
              <span>OUR GLOBAL PRESENCE</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-serif font-normal text-white leading-[1.15] m-0 mb-5 global-section-title max-[900px]:text-[3.5rem]">Trusted By Global<br /><span style={{ color: 'var(--color-brand-base)' }}>Clients & Partners</span></h2>
            <p className="font-sans text-[1.1rem] text-[#888888] leading-[1.75] m-0 max-w-full min-[900px]:max-w-[420px]">
              Over 2+ years of excellence in exporting authentic Indian handicrafts \u2014 maintaining the highest standards of quality and reliability worldwide.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4" ref={statsRef} style={{opacity:0,transform:'translateX(40px)',transition:'opacity 0.7s ease,transform 0.7s ease'}}>
            {stats.map((s, i) => (
              <div key={i} className="bg-[#15110F] border border-[#2c241c] rounded-[14px] py-7 px-6 flex flex-col gap-1.5 transition-all duration-250 hover:shadow-[0_4px_20px_rgba(0,0,0,0.5)] hover:-translate-y-[3px]">
                <div className="text-[var(--color-brand-base)] mb-1">{s.icon}</div>
                <span className="font-serif text-[2.2rem] font-semibold text-white leading-[1]">{s.number}</span>
                <span className="font-sans text-[0.78rem] text-[#999999] tracking-[0.4px]">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Re-designed Lower Section */}
        <div className="flex flex-col gap-6" ref={lowerRef} style={{opacity:0,transform:'translateY(30px)',transition:'opacity 0.7s ease,transform 0.7s ease'}}>
          
          <div className="grid grid-cols-1 min-[900px]:grid-cols-[1.6fr_1fr] gap-6">
            {/* Export Network Box */}
            <div className="bg-[#1a1512] border border-[#2c241c] rounded p-6 sm:p-10 flex flex-col transition-all duration-300 hover:border-[#4a3e35]">
              <div className="flex items-center gap-3 mb-8">
                <h3 className="font-serif text-[1.2rem] font-medium text-white tracking-[1px] uppercase m-0">EXPORTING TO</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {countries.map((c, i) => (
                  <span key={i} className="font-sans text-[0.8rem] text-[#b5aaa0] border border-[#2c241c] rounded py-[0.6rem] px-5 bg-transparent transition-all duration-200 cursor-default hover:border-[var(--color-brand-base)] hover:text-[var(--color-brand-base)]">{c}</span>
                ))}
              </div>
            </div>

            {/* Trade Associations Box */}
            <div className="bg-[#1a1512] border border-[#2c241c] rounded p-6 sm:p-10 flex flex-col transition-all duration-300 hover:border-[#4a3e35]">
              <div className="flex items-center gap-3 mb-8">
                <ShieldCheck size={16} strokeWidth={1.5} className="text-[var(--color-brand-base)]" />
                <h3 className="font-serif text-[1.2rem] font-medium text-white tracking-[1px] uppercase m-0">TRADE ASSOCIATIONS</h3>
              </div>
              <div className="flex flex-col gap-0">
                {associations.map((item, i) => (
                  <div key={i} className="flex items-center justify-between py-4 border-b border-[#2c241c] last:border-b-0 last:pb-0 first:pt-0">
                    <span className="font-sans text-[0.85rem] text-[#b5aaa0] leading-[1.5]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Certifications Box */}
          <div className="bg-[#1a1512] border border-[#2c241c] rounded p-6 sm:p-10 flex flex-col transition-all duration-300 hover:border-[#4a3e35]">
            <div className="flex items-center gap-3 mb-8">
              <Award size={16} strokeWidth={1.5} className="text-[var(--color-brand-base)]" />
              <h3 className="font-serif text-[1.2rem] font-medium text-white tracking-[1px] uppercase m-0">CERTIFICATIONS & QUALITY</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 min-[1024px]:grid-cols-3 lg:grid-cols-4 gap-6">
              {certifications.map((item, i) => (
                <div key={i} className="flex items-center gap-2.5 font-sans text-[0.85rem] text-[#b5aaa0]">
                  <CheckCircle2 size={14} strokeWidth={1.5} className="text-[var(--color-brand-base)] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default GlobalClients;