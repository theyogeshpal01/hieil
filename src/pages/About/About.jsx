import React from 'react';
import { Link } from 'react-router-dom';
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
  ChevronRight,
  Lightbulb,
  Handshake
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
            <div className="inline-flex items-center gap-3 px-6 py-2 border border-[#c8956c] text-[#c8956c] rounded-full text-[0.75rem] font-sans tracking-[4px] uppercase mb-6 bg-transparent">
              <span>HIEIL CRAFTSMANSHIP</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-normal leading-tight mb-6 font-serif tracking-wide">
              A FEW WORDS <br />
              <span className="text-[#c8956c]">ABOUT US</span>
            </h1>
            <p className="text-lg text-[#b5aaa0] mb-6 leading-relaxed">
              HIEIL wants to keep the ways of Indian craftsmanship alive. We do this by helping skilled artisans sell their work to people around the world.
              {/* HIEIL is committed to preserving the rich heritage of Indian craftsmanship by connecting skilled artisans to global markets. We work directly with artisan communities, ensuring fair wages, transparency, and sustainable growth. */}
            </p>
            <p className="text-lg text-[#b5aaa0] mb-8 leading-relaxed">
              We work directly with the people who make these things so they get a price for what they do. This way everyone knows what is going on. We can all grow together in a good way.
            </p>
            <p className="text-lg text-[#b5aaa0] mb-8 leading-relaxed">
              {/* With every handcrafted creation, we strive to tell a story — a story of culture, legacy, and passion, making each piece a true representation of India's traditional artistry. */}
              When we make something with our hands we are trying to tell a story. This story is about the culture and history of India and the love that people put into making these things. Each thing we make is an example of the traditional art of India. We make each piece so it shows what India is, about.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="px-8 py-4 bg-[#c8956c] hover:bg-[#917751] text-black rounded-none font-normal transition-all duration-300 shadow-none flex items-center gap-2 no-underline">
                Contact Us <ChevronRight size={20} />
              </Link>
            </div>
          </div>
          <div className="hidden md:flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-none border-4 border-[#c8956c]/30 flex items-center justify-center p-4 relative z-10 bg-[url('/aboutus.png')] bg-cover bg-center overflow-hidden shadow-none">
                <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>
                <div className="text-center relative z-20">
                  <span className="block text-6xl font-normal text-[#c8956c] mb-2">2+</span>
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
            <h3 className="text-2xl font-normal text-white mb-1">Company Profile <span className="text-[#c8956c]">Pdf</span></h3>
            <p className="text-[#b5aaa0]">Download our complete journey & catalog</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <button className="px-6 py-3 bg-[#1C1713] text-white border border-[#2c241c] hover:border-[#c8956c] hover:text-[#c8956c] rounded-none font-medium transition-colors flex items-center gap-2 shadow-none">
              View Online
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
          <div className="inline-flex items-center gap-3 px-6 py-2 border border-[#c8956c] text-[#c8956c] rounded-full text-[0.75rem] font-sans tracking-[4px] uppercase mb-6 bg-transparent mx-auto">
              <span>WHO WE ARE</span>
            </div>
          <h3 className="text-3xl md:text-5xl font-serif font-normal text-white mb-8">Crafting Excellence, <span style={{ color: 'var(--color-brand-base)' }}>Empowering Artisans</span></h3>
          <p className="text-lg font-medium text-[#b5aaa0] leading-relaxed mb-6">
            {/* We are a Jaipur-based handicraft export firm led by Jogendra Singh, with over 2+ years of dedicated industry experience and a team of 500+ highly skilled artisans. Our mission is to empower traditional Indian craftsmen, enhance their livelihoods, and introduce the rich cultural artistry of India to discerning international buyers. */}
            We are a company from Jaipur that exports handicrafts. Our leader is Jogendra Singh. He has been working in this field for than two years. We have a team of skilled artisans over 500 people.
          </p>
          <p className="text-lg text-[#b5aaa0] leading-relaxed mb-6">
            {/* Through strict quality assurance, ethical sourcing, and innovative design, we deliver authentic, handcrafted categories that reflect the heritage and craftsmanship of our region. By partnering with us, you support sustainable artisan communities and gain access to exquisite, one-of-a-kind creations that elevate your product offerings. */}
            Our goal is to help craftsmen and improve their lives. We want to show the world the art from India. We want to sell our products to people in countries who appreciate good art.
          </p>
          <p className="text-lg text-[#b5aaa0] leading-relaxed mb-6">
            We make sure our products are of quality. We get our materials from sources and design our products in a new way. This way we can make handicrafts that show the skills of our artisans. If you work with us you will be helping our artisans and their communities. You will also get unique products that will make your business better.
          </p>
          <p className="text-lg font-medium text-white mt-8">
            We want you to see what our company can do for you. We are a company and we want to sell our handicrafts to people all, over the world.
          </p>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-[#1C1713] text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center mb-12">
          <div className="inline-flex items-center gap-3 px-6 py-2 border border-[#c8956c] text-[#c8956c] rounded-full text-[0.75rem] font-sans tracking-[4px] uppercase mb-6 bg-transparent mx-auto">
              <span>OUR IMPACT</span>
            </div>
          <h3 className="text-3xl md:text-5xl font-serif font-normal text-white">Crafting change through innovation,<br/><span className="text-[#c8956c]">sustainability & empowerment.</span></h3>
        </div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: Globe, count: '20+', label: 'Countries', desc: 'Delivering excellence globally' },
            { icon: Users, count: '500+', label: 'Artisans', desc: 'Supported with fair wages' },
            { icon: Award, count: '1500+', label: 'categories', desc: 'Curated premium crafts' },
            { icon: Clock, count: '2+', label: 'Years', desc: 'Of trust & quality' },
          ].map((stat, i) => (
            <div key={i} className="text-center p-6 rounded-none bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
              <stat.icon className="w-10 h-10 text-[#c8956c] mx-auto mb-4 opacity-80" />
              <div className="text-4xl font-normal mb-1">{stat.count}</div>
              <div className="text-base font-medium text-[#2c241c] mb-1">{stat.label}</div>
              <div className="text-sm text-[#b5aaa0]">{stat.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 px-6 md:px-12 bg-[#1C1713]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 flex flex-col items-center">
            <div className="inline-flex items-center gap-3 px-6 py-2 border border-[#c8956c] text-[#c8956c] rounded-full text-[0.75rem] font-sans tracking-[4px] uppercase mb-6 bg-transparent mx-auto">
              <span>OUR LEADERS</span>
            </div>
            <h3 className="text-3xl md:text-5xl font-serif font-normal text-white">Visionaries Crafting India's <span className="text-[#c8956c]">Heritage Legacy</span></h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10">
            {/* Jogendra Singh */}
            <div className="bg-[#15110F] rounded-none p-8 md:p-10 shadow-none hover:shadow-none transition-all duration-300 border border-[#2c241c] relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 transition-transform duration-500">
                <ShieldCheck size={100} />
              </div>
              <div className="relative z-10">
                <div className="flex items-center gap-5 mb-6">
                  <img src="/founder.jpg" alt="Jogendra Singh" className="w-20 h-20 object-cover rounded-none" />
                  <div>
                    <h4 className="text-2xl font-normal text-white">Jogendra Singh</h4>
                    <p className="text-[#c8956c] font-medium text-sm">Founder & Director</p>
                  </div>
                </div>
                <div className="space-y-4 text-[#b5aaa0] leading-relaxed mb-8">
                  <p>
                    Jogendra Singh is the Founder and Director of Hind Import Export International (OPC) Private Limited. He has than seven years of experience, in exporting Indian handicrafts.
                  </p>
                  <p>
                    He loves Indias art and culture. He started the company to show the worlds handmade products as a sign of luxury.
                  </p>
                  <p>
                    He works with artisans to keep traditional methods alive. At the time he helps them make their products meet international standards.
                  </p>
                  <p>
                    Jogendra Singh focuses on quality fair business practices and helping artisans sustainably.
                  </p>
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
                  <img src="/ceo.jpg" alt="Renu Kumari" className="w-20 h-20 object-cover rounded-none" />
                  <div>
                    <h4 className="text-2xl font-normal text-white">Renu Kumari</h4>
                    <p className="text-[#c8956c] font-medium text-sm">Chief Executive Officer</p>
                  </div>
                </div>
                <div className="space-y-4 text-[#b5aaa0] leading-relaxed mb-8">
                  <p>Renu Kumari is the Chief Executive Officer. She leads with a vision and a global perspective.</p>
                  <p>She is very committed to doing things. She makes sure that all Indian handmade products meet the luxury standards in the world.</p>
                  <p>
                    She believes in elegant style and high quality. She is in charge of making strategies working with partners and improving the brand.
                  </p>
                  <p>
                    Her leadership combines craftsmanship with modern business skills. She turns traditions, into special luxury experiences.
                  </p>
                  <p>
                    Renu Kumari does all this with precision.
                  </p>
                  <p>She ensures that every product is of quality.</p>
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
          <div className="text-center mb-12 flex flex-col items-center">
            <div className="inline-flex items-center gap-3 px-6 py-2 border border-[#c8956c] text-[#c8956c] rounded-full text-[0.75rem] font-sans tracking-[4px] uppercase mb-6 bg-transparent mx-auto">
              <span>OUR JOURNEY</span>
            </div>
            <h3 className="text-3xl md:text-5xl font-serif font-normal text-white">2+ years of <span className="text-[#c8956c]">Excellence</span></h3>
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
                <div className="text-4xl font-normal text-[#c8956c]/20 mb-4 group-hover:text-[#c8956c]/30 transition-colors">0{step.num}</div>
                <h4 className="text-xl font-serif font-normal uppercase text-white mb-3 tracking-wide">{step.title}</h4>
                <p className="text-[15.2px] text-[#b5aaa0] leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-6 md:px-12 bg-[#1C1713] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 flex flex-col items-center">
            <div className="inline-flex items-center gap-3 px-6 py-2 border border-[#c8956c] text-[#c8956c] rounded-full text-[0.75rem] font-sans tracking-[4px] uppercase mb-6 bg-transparent mx-auto">
              <span>OUR VALUES</span>
            </div>
            <h3 className="text-3xl md:text-5xl font-serif font-normal text-white">The Principles That <span className="text-[#c8956c]">Guide Us</span></h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Heart, title: 'Artisan First', desc: 'Fair wages and ethical conditions for craftsmen, preserving skills for future generations.' },
              { icon: Leaf, title: 'Sustainability', desc: 'Responsibly sourced materials and eco-friendly practices minimizing impact.' },
              { icon: ShieldCheck, title: 'Quality', desc: 'Rigorous checks ensuring every piece meets high standards of excellence.' },
              { icon: Award, title: 'Authenticity', desc: "Genuine techniques combined with authentic materials to tell India's story." },
              { icon: Users, title: 'Empowerment', desc: 'Strengthening artisan communities by providing stable livelihoods.' },
              { icon: Globe, title: 'Trust', desc: 'Building relationships through transparent practices and reliable service.' },
              { icon: Lightbulb, title: 'Innovation', desc: 'Fusing traditional techniques with contemporary designs for modern lifestyles.' },
              { icon: Handshake, title: 'Partnership', desc: 'Working closely with clients to deliver tailored, high-quality craft solutions.' },
            ].map((value, i) => (
              <div key={i} className="group bg-[#15110F] border border-[#2a241f] p-8 rounded-xl hover:border-[#c8956c] transition-all duration-300 text-left">
                <div className="w-12 h-12 bg-transparent border border-[#c8956c]/30 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#c8956c]/10 transition-colors duration-300">
                  <value.icon className="text-[#c8956c]" size={24} />
                </div>
                <h4 className="text-lg font-serif font-normal uppercase text-white mb-3 tracking-wide">{value.title}</h4>
                <p className="text-[15.2px] text-[#b5aaa0] leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 md:px-12 bg-[#15110F]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-serif font-normal text-white mb-4">Ready To Experience <br /> <span className="text-[#c8956c]">Hieil Craftsmanship?</span></h2>
          <p className="text-lg text-[#b5aaa0] mb-8 max-w-2xl mx-auto">
            People around the world are really happy with the things we make. Thousands of customers have changed their homes with our handcrafted pieces. You can find the mix of old style art and modern design, with our handcrafted pieces. Our handcrafted pieces are made with artistry and contemporary design. 
          </p>
          <Link to="/contact" className="inline-block px-8 py-4 bg-[#c8956c] hover:bg-[#917751] text-black rounded-none font-normal transition-all duration-300 shadow-none hover:shadow-none hover:-translate-y-1 no-underline">
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
