import React, { useState, useRef } from 'react';
import { ShieldCheck, Award, Globe, Leaf, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import useScrollAnimation from '../../../../hooks/useScrollAnimation';

const features = [
  { icon: <Globe size={16} strokeWidth={1.5} />, label: 'Global Shipping' },
  { icon: <Award size={16} strokeWidth={1.5} />, label: 'Premium Quality' },
  { icon: <ShieldCheck size={16} strokeWidth={1.5} />, label: 'Quality Assured' },
  { icon: <Leaf size={16} strokeWidth={1.5} />, label: 'Expert Support' },
];

const AboutCTASection = () => {
  const leftRef = useScrollAnimation();
  const rightRef = useScrollAnimation();
  const [showControls, setShowControls] = useState(false);
  const videoRef = useRef(null);

  const handleVideoClick = () => {
    if (!showControls) {
      setShowControls(true);
      if (videoRef.current) {
        // When clicked, we might want to unmute it, but the user explicitly asked to "mute it". 
        // We will keep it muted initially, and give controls on click.
        videoRef.current.muted = false;
      }
    }
  };

  return (
    <section className="w-full bg-[#15110F] py-20 px-8">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div className="flex flex-col items-start" ref={leftRef} style={{opacity:0,transform:'translateX(-40px)',transition:'opacity 0.7s ease,transform 0.7s ease'}}>
          <div className="font-['Inter','Outfit',sans-serif] text-xs tracking-[4px] uppercase text-[#c8956c] border border-[#c8956c] rounded-full py-2 px-6 inline-flex items-center gap-3 mb-6 bg-transparent">
              <span>ABOUT HIEIL</span>
            </div>
          <h2 className="text-3xl md:text-5xl font-serif font-normal text-white leading-[1.2] m-0 mb-8 uppercase">
            Handcrafted categories, <br className="max-sm:hidden" />Inspired By <span className="text-[#c8956c]">India</span>
          </h2>
          
          <div className="flex flex-col gap-6 mb-10">
            <p className="font-sans text-[0.95rem] text-[#b5aaa0] leading-[1.8] m-0">
              {/* HIEIL (Hind Import Export International) is a Jaipur-based handicraft export firm lead by Jogendra Singh, with over 2+ years of dedicated industry experience. Our team of 500+ highly skilled artisans carries forward centuries of tradition. */}
              Hind Import Export International (OPC) Pvt.Ltd. is a company that is based in Jaipur. This company is run by Jogendra Singh. He has been doing this work for than two years.

            </p>
            <p className="font-sans text-[0.95rem] text-[#b5aaa0] leading-[1.8] m-0">
              We have a team of artisans who are very good at what they do. There are than 500+ people in our team. They are keeping the traditions of India alive.
            </p>
            <p className="font-sans text-[0.95rem] text-[#b5aaa0] leading-[1.8] m-0">
              {/* Our mission is to empower traditional Indian craftsmen, enhance their livelihoods, and introduce the rich cultural artistry of India to discerning international buyers. Every piece tells a story — of culture, legacy, and passion. */}
              Our goal is to help the people who make handicrafts in India. We want to make their lives better. We also want to show the world how beautiful Indian art is. Every piece that we make has a story behind it. It is a story of our culture and the people who made it. Hind Import Export International (OPC) Pvt.Ltd. wants to share this story with people, over the world.

            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-12">
            {features.map((f, i) => (
              <div key={i} className="flex items-center gap-3 py-4 px-5 border border-[#2c241c] rounded bg-white/[0.02]">
                <span className="text-[#c8956c] flex items-center justify-center">{f.icon}</span>
                <span className="font-sans text-[0.85rem] text-[#e0e0e0]">{f.label}</span>
              </div>
            ))}
          </div>

          <Link to="/about/us" className="inline-flex items-center gap-2 font-sans text-[0.8rem] font-semibold tracking-[1px] text-[#c8956c] no-underline uppercase transition-opacity duration-200 hover:opacity-80">
            LEARN MORE ABOUT US <ArrowRight size={15} />
          </Link>
        </div>

        <div className="relative" ref={rightRef} style={{opacity:0,transform:'translateX(40px)',transition:'opacity 0.7s ease,transform 0.7s ease,transition-delay:0.15s'}}>
          <div className="relative w-full aspect-[4/3] p-6 border border-[#2c241c] before:content-[''] before:absolute before:w-[30px] before:h-[30px] before:border before:border-[#c8956c] before:top-[-1px] before:left-[-1px] before:border-r-0 before:border-b-0 after:content-[''] after:absolute after:w-[30px] after:h-[30px] after:border after:border-[#c8956c] after:bottom-[-1px] after:right-[-1px] after:border-l-0 after:border-t-0">
            <video 
              ref={videoRef}
              src="/about-Video.mp4" 
              className="w-full h-full object-cover rounded-sm cursor-pointer" 
              autoPlay={!showControls}
              muted={true}
              loop={!showControls}
              playsInline
              controls={showControls}
              onClick={handleVideoClick}
            ></video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCTASection;
