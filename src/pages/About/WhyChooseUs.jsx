import React from 'react';
import { 
  ShieldCheck, 
  Globe, 
  Settings, 
  Truck, 
  Star, 
  CheckCircle2, 
  Users, 
  Package,
  Award,
  ChevronRight,
  MapPin,
  Building,
  Target,
  FileText,
  HeartHandshake,
  Download
} from 'lucide-react';

const WhyChooseUs = () => {
  return (
    <div className="min-h-screen bg-[#1C1713]">
      {/* Hero Section */}
      <section className="relative py-20 px-6 md:px-12 lg:px-24 border-b border-[#2c241c] overflow-hidden">
        <div className="absolute inset-0 bg-[#15110F]"></div>
        <div className="absolute top-0 left-0 w-64 h-64 bg-[#c8956c]/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/3"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-3 px-6 py-2 border border-[#c8956c] text-[#c8956c] rounded-full text-[0.75rem] font-sans tracking-[4px] uppercase mb-6 bg-transparent">
            <span>WHY CHOOSE US</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 font-serif">
            More Than Just Exporters — <br />
            <span className="text-[#c8956c]">Partners in Your Success</span>
          </h1>
          <p className="text-[15.2px] text-white mb-10 leading-relaxed max-w-3xl mx-auto">
            At HIEIL, we are more than just exporters — we are partners in your success. Based in Jaipur, India's hub of heritage and craftsmanship, we bring together traditional artistry and modern business standards to deliver authentic handicrafts trusted worldwide. Experience the perfect blend of Indian tradition and world-class business reliability.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto border-t border-white/10 pt-10">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#c8956c] mb-1">100%</div>
              <div className="text-sm text-[#b5aaa0] font-medium">Customizations</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#c8956c] mb-1">100%</div>
              <div className="text-sm text-[#b5aaa0] font-medium">Reliable</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#c8956c] mb-1">50+</div>
              <div className="text-sm text-[#b5aaa0] font-medium">Global Markets</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#c8956c] mb-1">24/7</div>
              <div className="text-sm text-[#b5aaa0] font-medium">Dedicated Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Standards, Local Craft */}
      <section className="py-20 px-6 md:px-12 bg-[#15110F]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-3 px-6 py-2 border border-[#c8956c] text-[#c8956c] rounded-full text-[0.75rem] font-sans tracking-[4px] uppercase mb-6 bg-transparent mx-auto">
              <span>GLOBAL STANDARDS, LOCAL CRAFT</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">Where Tradition Meets <span className="text-[#c8956c]">Excellence</span></h3>
            <p className="text-[15.2px] text-[#b5aaa0] leading-relaxed mb-6">
              <strong className="text-white">Authentic Craftsmanship Meets Modern Excellence.</strong> Every product is handmade by skilled artisans and passes through strict quality control and export compliance checks. From design to packaging, we ensure that each piece meets international quality expectations while preserving the authentic touch of traditional Indian craftsmanship.
            </p>
            <div className="space-y-6 mt-8">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-[#15110F] rounded-none flex items-center justify-center shrink-0">
                  <Star className="text-[#c8956c]" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-1">Handcrafted Excellence</h4>
                  <p className="text-[#b5aaa0] text-sm">Each piece created by skilled artisans with generations of craftsmanship heritage.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-[#15110F] rounded-none flex items-center justify-center shrink-0">
                  <ShieldCheck className="text-[#c8956c]" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-1">Quality Assured</h4>
                  <p className="text-[#b5aaa0] text-sm">Rigorous quality control processes meeting international standards and expectations.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-[#15110F] rounded-none flex items-center justify-center shrink-0">
                  <FileText className="text-[#c8956c]" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-1">Export Compliance</h4>
                  <p className="text-[#b5aaa0] text-sm">Full compliance with international export regulations and documentation requirements.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative h-full min-h-[400px] rounded-none overflow-hidden shadow-none">
             <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1610992015732-2449b76344bc?auto=format&fit=crop&q=80')] bg-cover bg-center"></div>
             <div className="absolute inset-0 bg-gradient-to-t from-[#1C1713]/80 to-transparent"></div>
             <div className="absolute bottom-8 left-8 right-8 text-white">
                <div className="flex items-center gap-3 mb-2">
                  <Award className="text-[#c8956c]" size={32} />
                  <span className="text-2xl font-serif font-bold">100% Quality Assured</span>
                </div>
                <p className="text-[#2c241c]">Tested and verified for international markets.</p>
             </div>
          </div>
        </div>
      </section>

      {/* Our Trust Factors */}
      <section className="py-20 px-6 md:px-12 bg-[#1C1713] border-y border-[#1C1713]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 px-6 py-2 border border-[#c8956c] text-[#c8956c] rounded-full text-[0.75rem] font-sans tracking-[4px] uppercase mb-6 bg-transparent">
              <span>OUR TRUST FACTORS</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-white">Why Businesses Worldwide <span className="text-[#c8956c]">Trust Us</span></h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Truck, title: 'Global Shipping', desc: 'Seamless worldwide delivery with trusted logistics partners and transparent tracking' },
              { icon: ShieldCheck, title: 'Quality Control', desc: 'Multi-stage quality checks ensuring every product meets international standards' },
              { icon: HeartHandshake, title: 'Partnerships', desc: 'Long-term business relationships built on trust, reliability, and mutual success' },
              { icon: Star, title: 'Handcrafted', desc: 'Authentic categories handmade by skilled artisans preserving traditional techniques' },
            ].map((feature, i) => (
              <div key={i} className="bg-[#15110F] p-8 rounded-none shadow-none border border-[#1C1713] hover:shadow-none transition-all duration-300 group">
                <div className="w-14 h-14 bg-[#15110F] rounded-none flex items-center justify-center mb-6 group-hover:bg-[#15110F] transition-colors duration-300">
                  <feature.icon className="text-[#c8956c] group-hover:text-white transition-colors" size={28} />
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{feature.title}</h4>
                <p className="text-[#b5aaa0] text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* End-to-end Export Solutions */}
      <section className="py-20 px-6 md:px-12 bg-[#1C1713] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 justify-between items-end mb-16 border-b border-white/10 pb-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-3 px-6 py-2 border border-[#c8956c] text-[#c8956c] rounded-full text-[0.75rem] font-sans tracking-[4px] uppercase mb-6 bg-transparent mx-auto">
              <span>END-TO-END EXPORT SOLUTIONS</span>
            </div>
              <h3 className="text-3xl md:text-4xl font-serif font-bold">Making Importing from India <span className="text-[#c8956c]">Simple and Secure</span></h3>
            </div>
            <p className="text-[#b5aaa0] max-w-md">
              Comprehensive services designed to streamline your sourcing process from conception to delivery.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
            {[
              { icon: Settings, title: 'Custom Product Development', desc: 'Tailored solutions designed to meet your specific market needs and brand requirements.' },
              { icon: Package, title: 'Bulk Supply', desc: 'Reliable volume supply maintaining consistent quality across all orders and shipments.' },
              { icon: Target, title: 'Private Labeling', desc: 'Complete branding solutions with your logo, packaging, and custom specifications.' },
              { icon: Truck, title: 'Global Shipping', desc: 'Comprehensive logistics with partners ensuring smooth deliveries worldwide.' },
            ].map((sol, i) => (
              <div key={i} className="flex gap-6 items-start group">
                <div className="w-16 h-16 bg-[#15110F]/5 border border-white/10 rounded-none flex items-center justify-center shrink-0 group-hover:bg-[#15110F]/20 group-hover:border-[#c8956c]/50 transition-all duration-300">
                  <sol.icon className="text-[#c8956c]" size={32} />
                </div>
                <div>
                  <h4 className="text-2xl font-bold mb-2">{sol.title}</h4>
                  <p className="text-[#b5aaa0] leading-relaxed">{sol.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence & Valued Clients */}
      <section className="py-20 px-6 md:px-12 bg-[#15110F]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">
          {/* Global Presence */}
          <div>
            <div className="inline-flex items-center gap-3 px-6 py-2 border border-[#c8956c] text-[#c8956c] rounded-full text-[0.75rem] font-sans tracking-[4px] uppercase mb-6 bg-transparent mx-auto">
              <span>BY INTERNATIONAL BUYERS</span>
            </div>
            <h3 className="text-3xl font-serif font-bold text-white mb-8">Growing Global Presence Across <span className="text-[#c8956c]">Continents</span></h3>
            <div className="space-y-6">
              {[
                { region: 'United States', desc: 'Strong partnerships with retailers and distributors across major US cities and states.' },
                { region: 'Europe', desc: 'Established network across UK, Germany, France, Italy and other European markets.' },
                { region: 'Middle East', desc: 'Growing presence in UAE, Saudi Arabia, Qatar with understanding of regional markets.' },
                { region: 'Asia Pacific', desc: 'Expanding reach in Australia, Japan, Singapore and other Asian markets.' },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start p-4 rounded-none hover:bg-[#1C1713] transition-colors border border-transparent hover:border-[#1C1713]">
                  <MapPin className="text-[#c8956c] shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="text-lg font-bold text-white mb-1">{item.region}</h4>
                    <p className="text-[#b5aaa0] text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Valued Clients */}
          <div>
            <div className="inline-flex items-center gap-3 px-6 py-2 border border-[#c8956c] text-[#c8956c] rounded-full text-[0.75rem] font-sans tracking-[4px] uppercase mb-6 bg-transparent mx-auto">
              <span>OUR VALUED CLIENTS</span>
            </div>
            <h3 className="text-3xl font-serif font-bold text-white mb-8">Trusted by Industry Leaders <span className="text-[#c8956c]">Worldwide</span></h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { title: 'Retailers', desc: 'Boutique stores, chain retailers, and specialty shops worldwide trust our quality and reliability.' },
                { title: 'Wholesalers', desc: 'Distribution partners relying on our consistent quality and scalable supply solutions.' },
                { title: 'Interior Designers', desc: 'Creative professionals choosing our categories for their unique projects and client requirements.' },
                { title: 'Hotel Chains', desc: 'Luxury and boutique hotels selecting our categories for their premium guest experiences.' },
              ].map((client, i) => (
                <div key={i} className="bg-[#1C1713] p-6 rounded-none border border-[#1C1713]">
                  <Building className="text-[#c8956c] mb-4" size={32} />
                  <h4 className="text-xl font-bold text-white mb-2">{client.title}</h4>
                  <p className="text-[#b5aaa0] text-sm leading-relaxed">{client.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Your Success Partner */}
      <section className="py-20 px-6 md:px-12 bg-[#1C1713] border-t border-[#1C1713]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 px-6 py-2 border border-[#c8956c] text-[#c8956c] rounded-full text-[0.75rem] font-sans tracking-[4px] uppercase mb-6 bg-transparent mx-auto">
              <span>YOUR SUCCESS PARTNER</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-white">Why Choose Us as Your <span className="text-[#c8956c]">Export Partner</span></h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Reliability', desc: 'Consistent quality and on-time delivery that you can depend on for your business operations.' },
              { title: 'Craftsmanship', desc: 'Authentic handmade categories preserving traditional techniques with modern quality standards.' },
              { title: 'Partnership Approach', desc: 'We work as your strategic partner, invested in your success and committed to your growth.' },
              { title: 'Quality Assurance', desc: 'Rigorous quality control processes and international certifications for complete peace of mind.' },
              { title: 'Flexible Solutions', desc: 'Customized services that adapt to your unique business needs and market requirements.' },
              { title: 'Dedicated Support', desc: 'Personal account managers and 24/7 customer support for all your export needs.' },
            ].map((prop, i) => (
              <div key={i} className="bg-[#15110F] px-8 py-10 rounded-[4px] border border-[#2c241c] shadow-none flex flex-col items-start text-left transition-all duration-400 hover:border-[#4a3e35] hover:bg-white/5">
                <CheckCircle2 className="text-[#c8956c] shrink-0 mb-6" size={24} />
                <div>
                  <h4 className="font-serif text-[1.15rem] font-medium text-white mb-4 uppercase tracking-[1px]">{prop.title}</h4>
                  <p className="text-[#b5aaa0] text-[15.2px] leading-[1.8] m-0 font-sans">{prop.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-[#15110F] rounded-none p-8 border border-orange-100 flex flex-col md:flex-row gap-8 items-center shadow-none shadow-[#c8956c]/5 relative overflow-hidden">
             <div className="absolute top-0 right-0 p-8 opacity-5">
               <ShieldCheck size={120} />
             </div>
             <div className="flex-1 relative z-10">
               <h4 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                 <Star className="text-[#c8956c]" size={20} fill="currentColor" /> 100% Transparency
               </h4>
               <p className="text-[#b5aaa0] mb-6">Complete visibility into development costs, material sourcing, and production timelines.</p>
               
               <h4 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                 <ShieldCheck className="text-[#c8956c]" size={20} fill="currentColor" /> No Corruption Policy
               </h4>
               <p className="text-[#b5aaa0]">Zero-tolerance for unethical practices, ensuring fair and honest product development cycles.</p>
             </div>
          </div>
        </div>
      </section>

      {/* The Hieil Difference */}
      <section className="py-20 px-6 md:px-12 bg-[#1C1713] text-white text-center">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-3 px-6 py-2 border border-[#c8956c] text-[#c8956c] rounded-full text-[0.75rem] font-sans tracking-[4px] uppercase mb-6 bg-transparent mx-auto">
            <span>THE HIEIL DIFFERENCE</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-serif font-bold mb-12">Setting Standards in <span className="text-[#c8956c]">Export Excellence</span></h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { title: 'Heritage & Experience', desc: '2+ years of expertise combining traditional craftsmanship with modern practices.' },
              { title: 'Quality Excellence', desc: 'Rigorous quality control and international certifications ensuring premium standards.' },
              { title: 'Global Reach', desc: 'Established presence in 50+ countries with reliable logistics and export expertise.' },
              { title: 'Client Success', desc: 'Proven track record of helping businesses grow through reliable partnerships.' },
            ].map((diff, i) => (
              <div key={i}>
                <div className="w-12 h-12 bg-[#15110F]/20 text-[#c8956c] rounded-none flex items-center justify-center mx-auto mb-4 border border-[#c8956c]/30">
                  <span className="font-bold">{i+1}</span>
                </div>
                <h4 className="text-lg font-bold mb-2">{diff.title}</h4>
                <p className="text-[#b5aaa0] text-sm leading-relaxed">{diff.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 md:px-12 bg-[#15110F]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">Ready To <br /> <span style={{ color: 'var(--color-brand-base)' }}>Experience Excellence?</span></h2>
          <p className="text-[15.2px] text-[#b5aaa0] mb-10 max-w-2xl mx-auto leading-relaxed">
            Work with us, and experience the perfect blend of Indian tradition and world-class business reliability. Join hundreds of satisfied clients worldwide who trust us for their handicraft sourcing needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-4 bg-[#1C1713] hover:bg-[#2c241c] text-white rounded-none font-semibold transition-all duration-300 shadow-none hover:shadow-none hover:-translate-y-1 flex items-center gap-2">
              Request a Quote <ChevronRight size={20} />
            </button>
            <button className="px-8 py-4 bg-[#15110F] text-white border border-[#2c241c] hover:border-[#c8956c] hover:text-[#917751] rounded-none font-semibold transition-all duration-300 shadow-none flex items-center gap-2">
              <Download size={20} /> Download Our Catalogue
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyChooseUs;
