import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Mail, 
  MessageCircle, 
  MapPin, 
  Clock, 
  Send,
  Building,
  HelpCircle,
  AlertCircle,
  ChevronDown
} from 'lucide-react';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    { q: "What Is Your Response Time For Inquiries?", a: "We typically respond to all inquiries within 24 hours. For urgent matters, please use our 24/7 emergency line." },
    { q: "Do You Offer International Shipping?", a: "Yes, we offer seamless worldwide delivery with trusted logistics partners and transparent tracking." },
    { q: "Can I Visit Your Workshop?", a: "We welcome buyers to visit our facilities by appointment. Please contact our team to schedule a visit." },
    { q: "Do You Offer Custom Design Services?", a: "Absolutely. We offer tailored solutions designed to meet your specific market needs and brand requirements." }
  ];

  return (
    <div className="font-sans text-[var(--hww-dark)] bg-[#15110F] overflow-x-hidden">
      {/* Hero Section */}
      <section className="bg-[radial-gradient(circle_at_center,#1C1713_0%,#15110F_100%)] text-white pt-[120px] px-5 pb-[60px] text-center relative">
        <div className="max-w-[800px] mx-auto relative z-10" data-aos="fade-up">
          <span className="inline-block py-[6px] px-4 bg-transparent border border-[#4a3e35] text-[#c8956c] text-xs font-semibold tracking-[3px] uppercase mb-[30px] rounded-[50px]">Contact Us</span>
          <h1 className="font-serif text-[3.5rem] font-normal mb-6 leading-[1.2] text-white">Get In Touch With <span className="text-[var(--color-brand-base)]">Us</span></h1>
          <p className="text-[1.1rem] text-[#b5aaa0] leading-[1.6] max-w-[700px] mx-auto">
            We'd love to hear from you! Whether you have questions about our categories, need assistance with your order, want to discuss a custom project, or just want to learn more about our handicrafts, our team is here to help. Reach out to us through any of the following methods.
          </p>
        </div>
      </section>

      {/* Quick Contacts */}
      <section className="py-[20px] pb-[60px] bg-[#15110F]">
        <div className="container mx-auto">
          <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-[30px]">
            <div className="bg-[rgba(28,23,19,0.6)] backdrop-blur-[10px] p-10 rounded-[20px] text-center border border-[#2c241c] transition-all duration-400 hover:-translate-y-[5px] hover:border-[#4a3e35] hover:shadow-[0_10px_40px_rgba(0,0,0,0.4)] group" data-aos="fade-up" data-aos-delay="0">
              <div className="w-[70px] h-[70px] bg-[rgba(194,163,115,0.1)] text-[#c8956c] rounded-full flex items-center justify-center mx-auto mb-5 transition-all duration-300 group-hover:bg-[#c8956c] group-hover:text-[#15110F]"><Phone size={32} /></div>
              <h3 className="font-serif text-[1.8rem] mb-[10px] text-white font-normal">Call Us</h3>
              <p className="text-[#b5aaa0] mb-[15px] text-[0.95rem]">Speak directly with our experts</p>
              <span className="text-[1.2rem] font-semibold text-[#c8956c]">+91 9050001972</span>
            </div>
            
            <div className="bg-[rgba(28,23,19,0.6)] backdrop-blur-[10px] p-10 rounded-[20px] text-center border border-[#2c241c] transition-all duration-400 hover:-translate-y-[5px] hover:border-[#4a3e35] hover:shadow-[0_10px_40px_rgba(0,0,0,0.4)] group" data-aos="fade-up" data-aos-delay="100">
              <div className="w-[70px] h-[70px] bg-[rgba(194,163,115,0.1)] text-[#c8956c] rounded-full flex items-center justify-center mx-auto mb-5 transition-all duration-300 group-hover:bg-[#c8956c] group-hover:text-[#15110F]"><Mail size={32} /></div>
              <h3 className="font-serif text-[1.8rem] mb-[10px] text-white font-normal">Email Us</h3>
              <p className="text-[#b5aaa0] mb-[15px] text-[0.95rem]">Send us your queries</p>
              <span className="text-[1.2rem] font-semibold text-[#c8956c]">indiaexport@hieil.com</span>
            </div>
            
            <div className="bg-[rgba(28,23,19,0.6)] backdrop-blur-[10px] p-10 rounded-[20px] text-center border border-[#2c241c] transition-all duration-400 hover:-translate-y-[5px] hover:border-[#4a3e35] hover:shadow-[0_10px_40px_rgba(0,0,0,0.4)] group" data-aos="fade-up" data-aos-delay="200">
              <div className="w-[70px] h-[70px] bg-[rgba(194,163,115,0.1)] text-[#c8956c] rounded-full flex items-center justify-center mx-auto mb-5 transition-all duration-300 group-hover:bg-[#c8956c] group-hover:text-[#15110F]"><MessageCircle size={32} /></div>
              <h3 className="font-serif text-[1.8rem] mb-[10px] text-white font-normal">Whatsapp</h3>
              <p className="text-[#b5aaa0] mb-[15px] text-[0.95rem]">Quick chat support</p>
              <span className="text-[1.2rem] font-semibold text-[#c8956c]">+91 9050001972</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area (Form & Sidebar) */}
      <section className="py-[40px] pb-[80px] bg-[#15110F]">
        <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row gap-10 items-start">
            
            {/* Form Section */}
            <div className="flex-[2] bg-[rgba(28,23,19,0.6)] backdrop-blur-[10px] p-[50px] md:p-[30px_20px] rounded-[20px] border border-[#2c241c] w-full" data-aos="fade-right">
              <h2 className="font-serif text-[2.5rem] font-normal mb-[15px] text-white">Send Us <br /> <span className="text-[var(--color-brand-base)]">A Message</span></h2>
              <p className="text-[#b5aaa0] mb-[30px] text-[1.05rem]">Have a specific inquiry? Fill out the form below and our team will get back to you shortly.</p>
              
              <form className="flex flex-col gap-[25px]">
                <div className="flex flex-col md:flex-row gap-[25px]">
                  <div className="flex-1 flex flex-col">
                    <label className="font-medium mb-[10px] text-white text-[0.95rem] tracking-[1px]">Full Name *</label>
                    <input className="w-full p-[15px] border border-[#4a3e35] rounded-[10px] bg-[rgba(21,17,15,0.8)] text-[1rem] text-white transition-all duration-300 outline-none focus:border-[#c8956c] focus:shadow-[0_0_15px_rgba(194,163,115,0.1)]" type="text" placeholder="e.g. John Doe" />
                  </div>
                  <div className="flex-1 flex flex-col">
                    <label className="font-medium mb-[10px] text-white text-[0.95rem] tracking-[1px]">Email Address *</label>
                    <input className="w-full p-[15px] border border-[#4a3e35] rounded-[10px] bg-[rgba(21,17,15,0.8)] text-[1rem] text-white transition-all duration-300 outline-none focus:border-[#c8956c] focus:shadow-[0_0_15px_rgba(194,163,115,0.1)]" type="email" placeholder="john@example.com" />
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-[25px]">
                  <div className="flex-1 flex flex-col">
                    <label className="font-medium mb-[10px] text-white text-[0.95rem] tracking-[1px]">Select Country *</label>
                    <div className="relative">
                      <select className="appearance-none cursor-pointer w-full p-[15px] border border-[#4a3e35] rounded-[10px] bg-[rgba(21,17,15,0.8)] text-[1rem] text-white transition-all duration-300 outline-none focus:border-[#c8956c] focus:shadow-[0_0_15px_rgba(194,163,115,0.1)]">
                        <option>Search country...</option>
                        <option>United States</option>
                        <option>United Kingdom</option>
                        <option>Australia</option>
                        <option>India</option>
                      </select>
                      <ChevronDown className="absolute right-[15px] top-[50%] -translate-y-1/2 text-[#8c8279] pointer-events-none" size={18} />
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col">
                    <label className="font-medium mb-[10px] text-white text-[0.95rem] tracking-[1px]">Phone Number *</label>
                    <div className="flex">
                      <span className="bg-[rgba(21,17,15,0.8)] border border-[#4a3e35] border-r-0 p-[15px] rounded-l-[10px] text-[#b5aaa0] font-medium flex items-center">+00</span>
                      <input className="w-full p-[15px] border border-[#4a3e35] rounded-r-[10px] rounded-l-none bg-[rgba(21,17,15,0.8)] text-[1rem] text-white transition-all duration-300 outline-none focus:border-[#c8956c] focus:shadow-[0_0_15px_rgba(194,163,115,0.1)]" type="text" placeholder="000 000 0000" />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-[25px]">
                  <div className="flex-1 flex flex-col">
                    <label className="font-medium mb-[10px] text-white text-[0.95rem] tracking-[1px]">Subject *</label>
                    <div className="relative">
                      <select className="appearance-none cursor-pointer w-full p-[15px] border border-[#4a3e35] rounded-[10px] bg-[rgba(21,17,15,0.8)] text-[1rem] text-white transition-all duration-300 outline-none focus:border-[#c8956c] focus:shadow-[0_0_15px_rgba(194,163,115,0.1)]">
                        <option>Select a subject</option>
                        <option>Product Inquiry</option>
                        <option>Order Status</option>
                        <option>Custom Project</option>
                        <option>Partnership</option>
                      </select>
                      <ChevronDown className="absolute right-[15px] top-[50%] -translate-y-1/2 text-[#8c8279] pointer-events-none" size={18} />
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col">
                    <label className="font-medium mb-[10px] text-white text-[0.95rem] tracking-[1px]">Inquiry Category *</label>
                    <div className="relative">
                      <select className="appearance-none cursor-pointer w-full p-[15px] border border-[#4a3e35] rounded-[10px] bg-[rgba(21,17,15,0.8)] text-[1rem] text-white transition-all duration-300 outline-none focus:border-[#c8956c] focus:shadow-[0_0_15px_rgba(194,163,115,0.1)]">
                        <option>Select a category</option>
                        <option>Wholesale</option>
                        <option>Retail</option>
                        <option>Support</option>
                      </select>
                      <ChevronDown className="absolute right-[15px] top-[50%] -translate-y-1/2 text-[#8c8279] pointer-events-none" size={18} />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col flex-1">
                  <label className="font-medium mb-[10px] text-white text-[0.95rem] tracking-[1px]">Your Message *</label>
                  <textarea className="w-full p-[15px] border border-[#4a3e35] rounded-[10px] bg-[rgba(21,17,15,0.8)] text-[1rem] text-white transition-all duration-300 outline-none focus:border-[#c8956c] focus:shadow-[0_0_15px_rgba(194,163,115,0.1)]" rows="5" placeholder="Write your message here..."></textarea>
                </div>

                <button type="button" className="bg-[#c8956c] border border-[#c8956c] text-[#15110F] p-[15px_30px] text-[12px] font-medium tracking-[2px] uppercase cursor-pointer flex items-center justify-center gap-[10px] transition-all duration-300 w-full rounded-[6px] hover:bg-transparent hover:text-[#c8956c]">
                  SEND MESSAGE <Send size={18} />
                </button>
              </form>
            </div>

            {/* Sidebar Section */}
            <div className="flex-1 flex flex-col gap-[30px] w-full" data-aos="fade-left">
              <div className="p-[40px] rounded-[20px] bg-[rgba(28,23,19,0.6)] backdrop-blur-[10px] border border-[#2c241c]">
                <h3 className="font-serif text-[1.8rem] mb-[25px] text-white font-normal">Contact Information</h3>
                
                <div className="flex gap-[15px] mb-[25px] items-start">
                  <MapPin className="text-[#c8956c] mt-[2px]" size={24} />
                  <div>
                    <h4 className="text-[1.1rem] mb-[5px] text-white font-medium">Our Showroom</h4>
                    <a href="#map" className="text-[#c8956c] no-underline font-medium text-[0.95rem] border-b border-transparent transition-all duration-300 hover:border-[#c8956c]">Visit Virtual Map</a>
                  </div>
                </div>

                <div className="flex gap-[15px] mb-[25px] items-start">
                  <Clock className="text-[#c8956c] mt-[2px]" size={24} />
                  <div>
                    <h4 className="text-[1.1rem] mb-[5px] text-white font-medium">Business Hours</h4>
                    <p className="text-[#b5aaa0] m-0 mb-[3px] text-[0.95rem]">Mon - Fri: 9:00 AM - 7:00 PM</p>
                    <p className="text-[#b5aaa0] m-0 mb-[3px] text-[0.95rem]">Sat: 10:00 AM - 6:00 PM</p>
                  </div>
                </div>

                <div className="flex gap-[15px] items-start">
                  <HelpCircle className="text-[#c8956c] mt-[2px]" size={24} />
                  <div>
                    <h4 className="text-[1.1rem] mb-[5px] text-white font-medium">Support Hours</h4>
                    <p className="text-[#b5aaa0] m-0 mb-[3px] text-[0.95rem]">Phone Support: 24/7 Available</p>
                    <p className="text-[#b5aaa0] m-0 mb-[3px] text-[0.95rem]">Email: within 24 hours</p>
                  </div>
                </div>
              </div>

              <div className="p-[40px] rounded-[20px] bg-[rgba(21,17,15,0.9)] border border-[#c8956c] text-white relative overflow-hidden shadow-[0_10px_40px_rgba(194,163,115,0.05)]">
                <AlertCircle className="absolute -top-[20px] -right-[20px] opacity-5 text-[#c8956c]" size={120} />
                <div className="relative z-10">
                  <h3 className="font-serif text-[1.8rem] font-normal text-[#c8956c] mb-[15px]">Need Urgent Help?</h3>
                  <p className="text-[#b5aaa0] mb-[20px] text-[0.95rem] leading-[1.6]">Connect with our dedicated support team directly for immediate assistance.</p>
                  <div className="text-[1.8rem] font-semibold text-white mb-[10px]">+91 9050001972</div>
                  <span className="inline-block text-[0.75rem] font-semibold uppercase tracking-[2px] text-[#c8956c]">Available 24/7 for Global Support</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-[80px] bg-[#15110F] border-t border-[#f0f0f0] border-opacity-10">
        <div className="container mx-auto">
          <div className="mb-[50px] text-center" data-aos="fade-up">
            <p className="text-[#c8956c] font-semibold tracking-[2px] uppercase mb-[10px] text-[0.8rem]">Our Office Locations</p>
            <h2 className="font-serif text-[2.8rem] font-normal text-white text-center m-0">Visit Us at Any <br /> <span className="text-[var(--color-brand-base)]">of Our Convenient Locations</span></h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-[40px]">
            {/* Kota HQ */}
            <div className="bg-[rgba(28,23,19,0.6)] backdrop-blur-[10px] rounded-[20px] overflow-hidden border border-[#2c241c] flex flex-col transition-all duration-400 hover:-translate-y-[5px] hover:border-[#4a3e35] hover:shadow-[0_10px_40px_rgba(0,0,0,0.4)]" data-aos="fade-up" data-aos-delay="0">
              <div className="h-[250px] bg-cover bg-center border-b border-[#2c241c] bg-[url('/Kota.png')]"></div>
              <div className="p-[40px] flex-1 flex flex-col">
                <div className="flex items-center gap-[15px] mb-[25px]">
                  <div className="bg-[rgba(194,163,115,0.1)] text-[#c8956c] w-[50px] h-[50px] rounded-[12px] flex items-center justify-center"><Building size={24} /></div>
                  <h4 className="font-serif text-[1.8rem] font-normal text-white m-0">Kota Headquarters</h4>
                </div>
                <ul className="list-none p-0 m-0 mb-[30px] flex flex-col gap-[15px]">
                  <li className="flex gap-[15px] items-start text-[#b5aaa0] leading-[1.6]"><MapPin className="text-[#c8956c] shrink-0 mt-[3px]" size={18} /> <span>Hind Import Export International (OPC) Pvt. Ltd. Ground Floor, Ganesh Nagar, Kota, 324005, Rajasthan, India</span></li>
                  <li className="flex gap-[15px] items-start text-[#b5aaa0] leading-[1.6]"><Phone className="text-[#c8956c] shrink-0 mt-[3px]" size={18} /> <span>+91 9050001972</span></li>
                  <li className="flex gap-[15px] items-start text-[#b5aaa0] leading-[1.6]"><Mail className="text-[#c8956c] shrink-0 mt-[3px]" size={18} /> <span>indiaexport@hieil.com</span></li>
                  <li className="flex gap-[15px] items-start text-[#b5aaa0] leading-[1.6]"><Clock className="text-[#c8956c] shrink-0 mt-[3px]" size={18} /> <span>Mon-Sat: 9:00 AM - 7:00 PM</span></li>
                </ul>
                <button className="bg-transparent border border-[#4a3e35] text-[#c8956c] py-[10px] px-[25px] text-[12px] tracking-[2px] uppercase transition-all duration-300 font-medium cursor-pointer rounded-[30px] self-start flex gap-[8px] hover:border-[#c8956c] hover:bg-[rgba(194,163,115,0.1)]">Kota Map <MapPin size={18} /></button>
              </div>
            </div>

            {/* Jaipur HQ */}
            <div className="bg-[rgba(28,23,19,0.6)] backdrop-blur-[10px] rounded-[20px] overflow-hidden border border-[#2c241c] flex flex-col transition-all duration-400 hover:-translate-y-[5px] hover:border-[#4a3e35] hover:shadow-[0_10px_40px_rgba(0,0,0,0.4)]" data-aos="fade-up" data-aos-delay="100">
              <div className="h-[250px] bg-cover bg-center border-b border-[#2c241c] bg-[url('/jaipur.jpeg')]"></div>
              <div className="p-[40px] flex-1 flex flex-col">
                <div className="flex items-center gap-[15px] mb-[25px]">
                  <div className="bg-[rgba(194,163,115,0.1)] text-[#c8956c] w-[50px] h-[50px] rounded-[12px] flex items-center justify-center"><Building size={24} /></div>
                  <h4 className="font-serif text-[1.8rem] font-normal text-white m-0">Jaipur Headquarters</h4>
                </div>
                <ul className="list-none p-0 m-0 mb-[30px] flex flex-col gap-[15px]">
                  <li className="flex gap-[15px] items-start text-[#b5aaa0] leading-[1.6]"><MapPin className="text-[#c8956c] shrink-0 mt-[3px]" size={18} /> <span>Hind Import Export International (OPC) Pvt. Ltd. Ground Floor, Jaipur, 302021, Rajasthan, India</span></li>
                  <li className="flex gap-[15px] items-start text-[#b5aaa0] leading-[1.6]"><Phone className="text-[#c8956c] shrink-0 mt-[3px]" size={18} /> <span>+91 9050001972</span></li>
                  <li className="flex gap-[15px] items-start text-[#b5aaa0] leading-[1.6]"><Mail className="text-[#c8956c] shrink-0 mt-[3px]" size={18} /> <span>indiaexport@hieil.com</span></li>
                  <li className="flex gap-[15px] items-start text-[#b5aaa0] leading-[1.6]"><Clock className="text-[#c8956c] shrink-0 mt-[3px]" size={18} /> <span>Mon-Sat: 9:30 AM - 7:30 PM</span></li>
                </ul>
                <button className="bg-transparent border border-[#4a3e35] text-[#c8956c] py-[10px] px-[25px] text-[12px] tracking-[2px] uppercase transition-all duration-300 font-medium cursor-pointer rounded-[30px] self-start flex gap-[8px] hover:border-[#c8956c] hover:bg-[rgba(194,163,115,0.1)]">Jaipur Map <MapPin size={18} /></button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ & Support Layout */}
      <section className="py-[80px] bg-[#15110F]">
        <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row gap-[60px] items-start">
            
            {/* FAQs */}
            <div className="flex-[3]" data-aos="fade-right">
              <p className="text-[#c8956c] font-semibold uppercase tracking-[2px] text-[0.8rem] mb-[10px]">Frequently Asked Questions</p>
              <h2 className="font-serif text-[2.8rem] font-normal text-white mb-[40px]">Quick Answers <br /> <span className="text-[var(--color-brand-base)]">to Common Questions</span></h2>
              
              <div className="flex flex-col gap-[15px]">
                {faqs.map((faq, index) => (
                  <div className="bg-[rgba(28,23,19,0.6)] backdrop-blur-[10px] rounded-[12px] border border-[#2c241c] overflow-hidden transition-all duration-300 hover:border-[#4a3e35]" key={index}>
                    <button 
                      className={`w-full text-left bg-transparent border-none p-[25px] text-[0.95rem] font-medium text-white cursor-pointer flex justify-between items-center transition-all duration-300 hover:text-[#c8956c] ${openFaq === index ? '!text-[#c8956c]' : ''}`}
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    >
                      {faq.q}
                      <ChevronDown size={20} className={`transition-transform duration-300 text-[#8c8279] ${openFaq === index ? 'rotate-180 !text-[#c8956c]' : ''}`} />
                    </button>
                    <div className={`overflow-hidden transition-[max-height] duration-400 ease-in-out ${openFaq === index ? 'max-h-[200px]' : 'max-h-0'}`}>
                      <div className="px-[25px] pb-[25px] text-[#b5aaa0] leading-[1.7]">
                        {faq.a}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Support Details */}
            <div className="flex-[2] flex flex-col gap-[30px] w-full" data-aos="fade-left">
              <div className="bg-[rgba(28,23,19,0.6)] backdrop-blur-[10px] p-[40px] rounded-[20px] border border-[#2c241c] flex-1">
                <h3 className="font-serif flex items-center gap-[12px] text-[1.8rem] mb-[25px] font-normal text-white"><Clock size={24} className="text-[#c8956c]" /> Business Hours</h3>
                <ul className="list-none p-0 m-0 flex flex-col gap-[15px]">
                  <li className="flex justify-between pb-[15px] border-b border-[#2c241c] text-[#b5aaa0] text-[0.95rem]"><span className="font-medium text-white">Monday - Friday</span> <span>9:00 AM - 7:00 PM</span></li>
                  <li className="flex justify-between pb-[15px] border-b border-[#2c241c] text-[#b5aaa0] text-[0.95rem]"><span className="font-medium text-white">Saturday</span> <span>10:00 AM - 6:00 PM</span></li>
                  <li className="flex justify-between pb-[0] border-none text-[#b5aaa0] text-[0.95rem]"><span className="font-medium text-white">Sunday</span> <span>11:00 AM - 5:00 PM</span></li>
                </ul>
              </div>

              <div className="bg-[rgba(194,163,115,0.05)] backdrop-blur-[10px] p-[40px] rounded-[20px] border border-[#4a3e35] flex-1">
                <h3 className="font-serif flex items-center gap-[12px] text-[1.8rem] mb-[25px] font-normal text-white"><AlertCircle size={24} className="text-[#c8956c]" /> Need Urgent Assistance?</h3>
                <p className="text-[#b5aaa0] mb-[25px] leading-[1.6] text-[0.95rem]">For urgent matters outside business hours, our emergency support line is available 24/7</p>
                
                <div className="flex flex-col gap-[20px]">
                  <div className="flex items-center gap-[15px]">
                    <div className="w-[45px] h-[45px] rounded-full flex items-center justify-center bg-[rgba(21,17,15,0.8)] border border-[#4a3e35] text-[#c8956c]"><Phone size={20} /></div>
                    <div className="flex flex-col">
                      <strong className="text-[1.1rem] text-white font-medium">+91-9050001972</strong>
                      <span className="text-[0.85rem] text-[#8c8279]">24/7 Emergency Line</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-[15px]">
                    <div className="w-[45px] h-[45px] rounded-full flex items-center justify-center bg-[rgba(21,17,15,0.8)] border border-[#4a3e35] text-[#25D366]"><MessageCircle size={20} /></div>
                    <div className="flex flex-col">
                      <strong className="text-[1.1rem] text-white font-medium">+91-9050001972</strong>
                      <span className="text-[0.85rem] text-[#8c8279]">WhatsApp Support</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Map Section */}
      <section id="map" className="h-[500px] w-full">
         <iframe 
            title="Office Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113911.23861214088!2d75.71714036125071!3d26.885141679549525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4adf4c57e281%3A0xce1c63a0cf22e09!2sJaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
         ></iframe>
      </section>
    </div>
  );
};

export default Contact;
