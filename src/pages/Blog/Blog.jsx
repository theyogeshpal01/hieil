import React, { useEffect, useState } from 'react';
import { Search, Mail } from 'lucide-react';
import axios from 'axios';
import Swal from 'sweetalert2';

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [artisans, setArtisans] = useState([]);
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) return;
    
    setLoading(true);
    try {
      await axios.post(`${import.meta.env.VITE_API_URL || 'http://localhost:3000/api'}/submissions/newsletter`, { email });
      Swal.fire({
        title: 'Subscribed!',
        text: 'Thank you for subscribing to our newsletter.',
        icon: 'success',
        background: '#1C1713',
        color: '#fff',
        confirmButtonColor: '#c8956c'
      });
      setEmail('');
    } catch (error) {
      if (error.response?.data?.message?.includes('duplicate key') || error.response?.data?.message?.includes('E11000')) {
        Swal.fire({
          title: 'Already Subscribed',
          text: 'This email is already in our newsletter list.',
          icon: 'info',
          background: '#1C1713',
          color: '#fff',
          confirmButtonColor: '#c8956c'
        });
      } else {
        Swal.fire({
          title: 'Error',
          text: 'Failed to subscribe. Please try again.',
          icon: 'error',
          background: '#1C1713',
          color: '#fff',
          confirmButtonColor: '#c8956c'
        });
      }
    }
    setLoading(false);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    // Fetch blogs
    axios.get(`${import.meta.env.VITE_API_URL || 'http://localhost:3000'}/blogs`)
      .then(res => setBlogs(res.data))
      .catch(err => console.error(err));
      
    // Fetch artisans
    axios.get(`${import.meta.env.VITE_API_URL || 'http://localhost:3000'}/artisans`)
      .then(res => setArtisans(res.data))
      .catch(err => console.error(err));
  }, []);

  const [activeTab, setActiveTab] = useState('All Posts');

  const topics = [
    'All Posts',
    'Handcrafted Wooden categories',
    'Handmade Painting Art'
  ];

  const subTopics = [
    'Latest Blogs',
    'Recommended Blogs',
    'Woven Stories'
  ];


  return (
    <div className="font-sans text-[var(--hww-dark)] bg-[#15110F] overflow-x-hidden">
      {/* Hero Section */}
      <section className="text-white pt-[120px] px-5 pb-[60px] text-center relative">
        <div className="max-w-[800px] mx-auto relative z-10" data-aos="fade-up">
          <h1 className="font-serif text-[3.5rem] font-normal text-white mb-[30px] leading-[1.2]">Hieil <span className="text-[var(--color-brand-base)]">Insights</span></h1>
          <div className="flex max-w-[500px] mx-auto bg-[rgba(28,23,19,0.6)] backdrop-blur-[10px] border border-[#4a3e35] rounded-[30px] p-[5px_5px_5px_25px] transition-all duration-300 focus-within:border-[#c8956c] focus-within:shadow-[0_0_20px_rgba(194,163,115,0.1)] flex-col md:flex-row gap-[15px] md:gap-0 bg-transparent md:bg-[rgba(28,23,19,0.6)] rounded-none md:rounded-[30px] p-0 md:p-[5px_5px_5px_25px] border-none md:border md:border-[#4a3e35]">
            <input type="text" placeholder="Search Topics..." className="flex-grow border-none outline-none text-[1rem] text-white bg-[rgba(28,23,19,0.6)] md:bg-transparent rounded-[30px] md:rounded-none p-[15px_25px] md:p-0 w-full md:w-auto border md:border-none border-[#4a3e35]" />
            <button className="bg-[#c8956c] md:bg-transparent border border-[#c8956c] md:border-none text-[#15110F] md:text-[#c8956c] p-[15px_30px] md:p-[10px_15px] flex items-center justify-center rounded-[25px] md:rounded-full transition-all duration-300 cursor-pointer w-full md:w-auto uppercase tracking-[2px] font-semibold md:font-normal text-[12px] md:text-[inherit] hover:bg-transparent hover:text-[#c8956c] md:hover:bg-[rgba(194,163,115,0.1)] md:hover:text-[#e6c89c]"><Search size={20} className="hidden md:block" /><span className="md:hidden">Search</span></button>
          </div>
        </div>
      </section>

      {/* Topics Section */}
      <section className="py-[60px] bg-[#15110F]">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="flex items-center gap-[20px] mb-[30px] flex-wrap md:flex-row flex-col md:items-center items-start" data-aos="fade-up">
            <h3 className="text-[1.2rem] text-white font-semibold m-0">Explore Topics:</h3>
            <div className="flex gap-[15px] flex-wrap">
              {topics.map((topic, index) => (
                <button 
                  key={index} 
                  className={`bg-transparent border border-[#4a3e35] text-[#c8956c] p-[10px_25px] text-[12px] tracking-[2px] uppercase transition-all duration-300 font-medium cursor-pointer rounded-[30px] hover:bg-[rgba(194,163,115,0.1)] hover:text-[#c8956c] hover:border-[#c8956c] hover:shadow-[0_0_15px_rgba(194,163,115,0.2)] ${activeTab === topic ? 'bg-[rgba(194,163,115,0.1)] !text-[#c8956c] border-[#c8956c] shadow-[0_0_15px_rgba(194,163,115,0.2)]' : ''}`}
                  onClick={() => setActiveTab(topic)}
                >
                  {topic}
                </button>
              ))}
            </div>
          </div>

          <div className="flex gap-[15px] mb-[40px] flex-wrap" data-aos="fade-up" data-aos-delay="100">
            {subTopics.map((sub, index) => (
              <button key={index} className="bg-transparent border-none text-[#8c8279] p-[8px_15px] text-[13px] tracking-[1px] uppercase transition-all duration-300 font-medium cursor-pointer relative hover:text-[#c8956c]">{sub}</button>
            ))}
          </div>

          {blogs.length === 0 ? (
            <div className="bg-[rgba(28,23,19,0.6)] backdrop-blur-[10px] rounded-[20px] p-[100px_20px] text-center border border-[#2c241c]" data-aos="fade-in" data-aos-delay="200">
              <div className="">
                <p className="text-[#b5aaa0] text-[1.2rem] font-normal tracking-[1px]">No Articles Found In This Collection.</p>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-aos="fade-up" data-aos-delay="200">
              {blogs.filter(b => activeTab === 'All Posts' || b.category === activeTab).map(blog => (
                <div key={blog._id} className="bg-[rgba(28,23,19,0.6)] backdrop-blur-[10px] border border-[#2c241c] rounded-[20px] overflow-hidden transition-all duration-400 hover:border-[#4a3e35] hover:-translate-y-[5px]">
                  <div className="h-[240px] overflow-hidden">
                    <img src={blog.image || '/blog1.png'} alt={blog.title} className="w-full h-full object-cover transition-transform duration-400 hover:scale-105" onError={(e) => { e.target.onerror = null; e.target.src="/blog2.png"; }} />
                  </div>
                  <div className="p-[25px]">
                    <span className="text-[#c8956c] font-sans text-[0.7rem] tracking-[2px] uppercase mb-2 block">{blog.tag || blog.category}</span>
                    <h4 className="font-serif text-[1.3rem] text-white mb-[15px]">{blog.title}</h4>
                    <p className="text-[#b5aaa0] text-[0.95rem] leading-[1.6]">{blog.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Artisans Section */}
      <section className="py-[80px] bg-[#15110F]">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="text-center mb-[60px]" data-aos="fade-up">
            <h2 className="font-serif text-[2.5rem] font-normal text-white mb-[15px]">Meet <br /> <span className="text-[var(--color-brand-base)]">Our Artisans</span></h2>
            <p className="text-[1.1rem] text-[#b5aaa0] leading-[1.6] max-w-[600px] mx-auto">Authentic videos showcasing the skill, dedication, and stories behind our master craftsmen.</p>
            <h3 className="text-[1.1rem] text-[var(--color-brand-base)] mt-[30px] font-semibold">The Hands Behind Our Crafts</h3>
          </div>

          <div className="flex flex-col gap-[60px] mt-[50px]">
            {artisans.map((artisan, index) => {
              const textParts = artisan.text ? artisan.text.split('\n\n') : [];
              return (
              <div className="flex flex-col lg:flex-row bg-[rgba(28,23,19,0.6)] backdrop-blur-[10px] border border-[#2c241c] rounded-[20px] overflow-hidden transition-all duration-400 hover:border-[#4a3e35] hover:-translate-y-[5px] hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] group" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="flex-[0_0_45%] relative min-h-[300px] lg:min-h-[400px] overflow-hidden bg-[#3e332a]">
                  {/* Using an image to showcase the artisan */}
                  <img src={artisan.preview || '/artisan1.png'} alt={artisan.title} className="w-full h-full object-cover absolute top-0 left-0 transition-transform duration-400 opacity-80 group-hover:scale-105" onError={(e) => { e.target.onerror = null; e.target.src="/artisan2.png"; }} />
                  <span className="absolute top-[20px] left-[20px] bg-[var(--color-brand-base)] text-white p-[6px_15px] rounded-[20px] text-[0.8rem] font-semibold tracking-[1px] uppercase">Artisan Work</span>
                </div>
                <div className="p-[30px_20px] lg:p-[50px_40px] flex-1">
                  <span className="text-[#c8956c] font-normal text-[1rem] mb-[10px] block">{artisan.description}</span>
                  <h3 className="font-serif text-[1.6rem] lg:text-[2.2rem] text-white mb-[25px]">{artisan.title}</h3>
                  <div className="">
                    {textParts.map((para, i) => (
                      <p className="text-[#b5aaa0] leading-[1.8] mb-[15px] text-[1rem] last:mb-0" key={i}>{para}</p>
                    ))}
                  </div>
                </div>
              </div>
            )})}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="pt-[80px] pb-[120px] bg-[#15110F]">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="bg-[rgba(28,23,19,0.6)] backdrop-blur-[10px] border border-[#c8956c] rounded-[30px] p-[40px_20px] lg:p-[60px] flex flex-col lg:flex-row items-center justify-between gap-[40px] text-white shadow-[0_10px_40px_rgba(194,163,115,0.05)] text-center lg:text-left" data-aos="zoom-in">
            <div className="flex-1">
              <h2 className="font-serif text-[2.5rem] mb-[15px]">Get <br /> <span className="text-[var(--color-brand-base)]">Importer-Focused Insights</span></h2>
              <p className="text-[1.05rem] text-[#b5aaa0] leading-[1.7] max-w-[500px] mx-auto lg:mx-0">Subscribe to receive exclusive guides, market intelligence, and early access to new artisan collections curated for international buyers.</p>
            </div>
            <div className="flex-1 w-full lg:w-[450px] lg:max-w-[500px] max-w-[500px]">
              <form onSubmit={handleSubscribe} className="flex flex-col lg:flex-row items-center bg-transparent lg:bg-[rgba(21,17,15,0.8)] border-none lg:border lg:border-[#4a3e35] rounded-none lg:rounded-[30px] p-0 lg:p-[5px_7px] mb-[15px] transition-all duration-300 focus-within:border-[#c8956c] gap-[15px] lg:gap-0">
                <Mail size={20} className="text-[#8c8279] ml-[20px] hidden lg:block" />
                <input 
                  type="email" 
                  placeholder="Enter your business email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-grow border-none outline-none p-[15px_25px] lg:p-[15px] text-[1rem] text-white bg-[rgba(21,17,15,0.8)] lg:bg-transparent w-full lg:w-auto rounded-[30px] lg:rounded-none border lg:border-none border-[#4a3e35]" 
                />
                <button 
                  type="submit" 
                  disabled={loading}
                  className="bg-[#c8956c] border border-[#c8956c] text-[#15110F] rounded-[25px] p-[15px_30px] text-[12px] tracking-[2px] uppercase transition-all duration-300 font-semibold cursor-pointer w-full lg:w-auto hover:bg-transparent hover:text-[#c8956c] disabled:opacity-50"
                >
                  {loading ? 'WAIT...' : 'Subscribe'}
                </button>
              </form>
              <p className="text-[0.85rem] opacity-70 text-center">We respect your privacy. Unsubscribe anytime.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
