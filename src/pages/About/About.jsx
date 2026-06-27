import React from 'react';
import { 
  Download, 
  Globe, 
  Users, 
  Award, 
  Leaf, 
  Heart, 
  ShieldCheck, 
  Clock, 
  CheckCircle2,
  ChevronRight
} from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-[#1C1713]">
      {/* Hero Section */}
      <section className="relative bg-[#1C1713] text-white py-16 md:py-24 px-6 md:px-12 lg:px-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1605814574921-689b94000302?auto=format&fit=crop&q=80')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#1C1713] via-[#1C1713]/90 to-transparent"></div>
        <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block px-4 py-2 bg-white/10 text-[#c8956c] rounded-none text-sm font-semibold tracking-wider mb-6">
              HIEIL CRAFTSMANSHIP
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 font-serif">
              A Few Words <br />
              <span className="text-[#c8956c]">About Us</span>
            </h1>
            <p className="text-lg text-white mb-6 leading-relaxed">
              HIEIL is committed to preserving the rich heritage of Indian craftsmanship by connecting skilled artisans to global markets. We work directly with artisan communities, ensuring fair wages, transparency, and sustainable growth.
            </p>
            <p className="text-lg text-white mb-8 leading-relaxed">
              With every handcrafted creation, we strive to tell a story â€” a story of culture, legacy, and passion, making each piece a true representation of India's traditional artistry.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-[#c8956c] hover:bg-[#917751] text-black rounded-none font-semibold transition-all duration-300 shadow-none  flex items-center gap-2">
                Contact Us <ChevronRight size={20} />
              </button>
            </div>
          </div>
          <div className="hidden md:flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-none border-4 border-[#c8956c]/30 flex items-center justify-center p-4 relative z-10 bg-[url('/aboutus.png')] bg-cover bg-center overflow-hidden shadow-none">
                <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>
                <div className="text-center relative z-20">
                  <span className="block text-6xl font-bold text-[#c8956c] mb-2">2+</span>
                  <span className="block text-xl font-medium tracking-wide uppercase text-white">Years of<br/>Excellence</span>
                </div>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#c8956c]/10 rounded-none animate-pulse blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Profile Download Section */}
      <section className="py-10 bg-[#15110F] border-y border-[#2c241c]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold text-white mb-1">Company Profile Pdf</h3>
            <p className="text-[#b5aaa0]">Download our complete journey & catalog</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <button className="px-6 py-3 bg-[#1C1713] text-white border border-[#2c241c] hover:border-[#c8956c] hover:text-[#c8956c] rounded-none font-medium transition-colors flex items-center gap-2 shadow-none">
              <Globe size={18} /> View Online
            </button>
            <button className="px-6 py-3 bg-[#c8956c] hover:bg-[#917751] text-black rounded-none font-medium transition-colors flex items-center gap-2 shadow-none">
              <Download size={18} /> Download Catalog
            </button>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 px-6 md:px-12 bg-[#15110F]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-sm font-bold tracking-widest text-[#c8956c] uppercase mb-4">Who We Are</h2>
          <h3 className="text-3xl md:text-5xl font-serif font-bold text-white mb-8">Crafting Excellence, Empowering Artisans</h3>
          <p className="text-lg text-[#b5aaa0] leading-relaxed mb-6">
            We are a Jaipur-based handicraft export firm led by Jogendra Singh, with over 2+ years of dedicated industry experience and a team of 800 highly skilled artisans. Our mission is to empower traditional Indian craftsmen, enhance their livelihoods, and introduce the rich cultural artistry of India to discerning international buyers.
          </p>
          <p className="text-lg text-[#b5aaa0] leading-relaxed mb-6">
            Through strict quality assurance, ethical sourcing, and innovative design, we deliver authentic, handcrafted categories that reflect the heritage and craftsmanship of our region. By partnering with us, you support sustainable artisan communities and gain access to exquisite, one-of-a-kind creations that elevate your product offerings.
          </p>
          <p className="text-lg font-medium text-white mt-8">
            We invite you to experience the unique value, trust, and reliability our organization brings to the global handicraft market.
          </p>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-[#1C1713] text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center mb-12">
          <h2 className="text-sm font-bold tracking-widest text-[#c8956c] uppercase mb-3">Our Impact</h2>
          <h3 className="text-3xl md:text-4xl font-serif font-bold">Crafting change through innovation,<br/>sustainability & empowerment.</h3>
        </div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: Globe, count: '20+', label: 'Countries', desc: 'Delivering excellence globally' },
            { icon: Users, count: '500+', label: 'Artisans', desc: 'Supported with fair wages' },
            { icon: Award, count: '1500+', label: 'categories', desc: 'Curated premium crafts' },
            { icon: Clock, count: '7+', label: 'Years', desc: 'Of trust & quality' },
          ].map((stat, i) => (
            <div key={i} className="text-center p-6 rounded-none bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
              <stat.icon className="w-10 h-10 text-[#c8956c] mx-auto mb-4 opacity-80" />
              <div className="text-4xl font-bold mb-1">{stat.count}</div>
              <div className="text-base font-medium text-[#2c241c] mb-1">{stat.label}</div>
              <div className="text-sm text-[#b5aaa0]">{stat.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 px-6 md:px-12 bg-[#1C1713]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-sm font-bold tracking-widest text-[#c8956c] uppercase mb-3">Our Leaders</h2>
            <h3 className="text-3xl md:text-5xl font-serif font-bold text-white">Visionaries Crafting India's Heritage Legacy</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10">
            {/* Jogendra Singh */}
            <div className="bg-[#15110F] rounded-none p-8 md:p-10 shadow-none hover:shadow-none transition-all duration-300 border border-[#2c241c] relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 transition-transform duration-500">
                <ShieldCheck size={100} />
              </div>
              <div className="relative z-10">
                <div className="flex items-center gap-5 mb-6">
                  <div className="w-20 h-20 bg-[#c8956c]/20 rounded-none flex items-center justify-center text-[#c8956c] text-2xl font-bold">
                    JS
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-white">Jogendra Singh</h4>
                    <p className="text-[#c8956c] font-medium text-sm">Founder & Director</p>
                  </div>
                </div>
                <div className="space-y-4 text-[#b5aaa0] leading-relaxed mb-8">
                  <p>Jogendra Singh is the Founder and Director of Hind Import Export International (OPC) Private Limited, bringing over seven years of distinguished experience in the Indian handicraft export industry. With a deep appreciation for India's artistic legacy, he established the company to present handcrafted excellence as a symbol of timeless luxury on the global stage.</p>
                  <p>Rooted in heritage yet driven by contemporary vision, he collaborates closely with master artisans to preserve authenticity while elevating craftsmanship to international standards. His leadership is guided by a commitment to refined quality, ethical sourcing, and sustainable artisan empowerment.</p>
                </div>
                <ul className="flex flex-wrap gap-2">
                  {['Visionary Leader', 'Artisan Advocate', 'Global Strategist'].map((tag, i) => (
                    <li key={i} className="px-3 py-1.5 bg-[#1C1713] rounded-none text-sm font-medium text-[#b5aaa0] flex items-center gap-2 border border-[#2c241c]">
                      <CheckCircle2 size={14} className="text-[#c8956c]" /> {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Renu Kumari */}
            <div className="bg-[#15110F] rounded-none p-8 md:p-10 shadow-none hover:shadow-none transition-all duration-300 border border-[#2c241c] relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 transition-transform duration-500">
                <Award size={100} />
              </div>
              <div className="relative z-10">
                <div className="flex items-center gap-5 mb-6">
                  <div className="w-20 h-20 bg-[#2c241c] rounded-none flex items-center justify-center text-white text-2xl font-bold">
                    RK
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-white">Renu Kumari</h4>
                    <p className="text-[#c8956c] font-medium text-sm">Chief Executive Officer</p>
                  </div>
                </div>
                <div className="space-y-4 text-[#b5aaa0] leading-relaxed mb-8">
                  <p>Renu Kumari is the Chief Executive Officer, embodying refined leadership and a contemporary global outlook. With a deep commitment to excellence, she steers the company's operations with precision, ensuring that every expression of Indian craftsmanship meets the highest international luxury standards.</p>
                  <p>Guided by a philosophy of understated elegance and uncompromising quality, she oversees strategic execution, global partnerships, and brand refinement. Her leadership bridges heritage artistry with modern business sophistication, transforming handcrafted traditions into curated luxury experiences.</p>
                </div>
                <ul className="flex flex-wrap gap-2">
                  {['Strategic Leader', 'Luxury Curator', 'Global Partner'].map((tag, i) => (
                    <li key={i} className="px-3 py-1.5 bg-[#1C1713] rounded-none text-sm font-medium text-[#b5aaa0] flex items-center gap-2 border border-[#2c241c]">
                      <CheckCircle2 size={14} className="text-[#c8956c]" /> {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-20 px-6 md:px-12 bg-[#15110F]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-sm font-bold tracking-widest text-[#c8956c] uppercase mb-3">Our Journey</h2>
            <h3 className="text-3xl md:text-5xl font-serif font-bold text-white">2+ years of Excellence</h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { num: '1', title: 'Foundation', desc: 'Established in 2024 with 5 master craftsmen in Rajasthan, focusing on traditional woodcraft techniques.' },
              { num: '2', title: 'Growth', desc: 'Expanded to include metal crafts, home decor, and partnered with 50+ additional artisans.' },
              { num: '3', title: 'Innovation', desc: 'Introduced contemporary designs while preserving traditional techniques, creating unique fusion pieces.' },
              { num: '4', title: 'Recognition', desc: 'Received ISO 9001 certification and Export Excellence Award for outstanding quality.' },
              { num: '5', title: 'Expansion', desc: 'Launched e-commerce platform and opened flagship showrooms, reaching customers globally.' },
              { num: '6', title: 'Sustainability', desc: 'Implemented Green Craft initiative focusing on eco-friendly materials and sustainable practices.' },
            ].map((step, i) => (
              <div key={i} className="relative p-6 border border-[#2c241c] rounded-none bg-[#1C1713] hover:bg-[#15110F] hover:shadow-none transition-all duration-300 group">
                <div className="text-4xl font-bold text-[#c8956c]/20 mb-4 group-hover:text-[#c8956c]/30 transition-colors">0{step.num}</div>
                <h4 className="text-xl font-bold text-white mb-2">{step.title}</h4>
                <p className="text-[#b5aaa0] leading-relaxed text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-6 md:px-12 bg-[#1C1713] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-sm font-bold tracking-widest text-[#c8956c] uppercase mb-3">Our Values</h2>
            <h3 className="text-3xl md:text-4xl font-serif font-bold">The Principles That Guide Us</h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Heart, title: 'Artisan First', desc: 'Fair wages and ethical conditions for craftsmen, preserving skills for future generations.' },
              { icon: Leaf, title: 'Sustainability', desc: 'Responsibly sourced materials and eco-friendly practices minimizing impact.' },
              { icon: ShieldCheck, title: 'Quality', desc: 'Rigorous checks ensuring every piece meets high standards of excellence.' },
              { icon: Award, title: 'Authenticity', desc: "Genuine techniques combined with authentic materials to tell India's story." },
              { icon: Users, title: 'Empowerment', desc: 'Strengthening artisan communities by providing stable livelihoods.' },
              { icon: Globe, title: 'Trust', desc: 'Building relationships through transparent practices and reliable service.' },
            ].map((value, i) => (
              <div key={i} className="group">
                <div className="w-12 h-12 bg-white/10 rounded-none flex items-center justify-center mb-4 group-hover:bg-[#c8956c] transition-colors duration-300">
                  <value.icon className="text-[#c8956c] group-hover:text-white transition-colors" size={24} />
                </div>
                <h4 className="text-xl font-bold mb-2">{value.title}</h4>
                <p className="text-[#b5aaa0] leading-relaxed text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 md:px-12 bg-[#15110F]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">Ready To Experience Hieil Craftsmanship?</h2>
          <p className="text-lg text-[#b5aaa0] mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers worldwide who have transformed their spaces with our authentic, handcrafted pieces. Discover the perfect blend of traditional artistry and contemporary design.
          </p>
          <button className="px-8 py-4 bg-[#c8956c] hover:bg-[#917751] text-black rounded-none font-semibold transition-all duration-300 shadow-none hover:shadow-none hover:-translate-y-1">
            Contact Us Today
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;
