import React, { useState, useEffect } from 'react';
import * as Icons from 'lucide-react';
import useScrollAnimation from '../../../../hooks/useScrollAnimation';
import api from '../../../../config/api';
import Swal from 'sweetalert2';
import { X } from 'lucide-react';

const { ShieldCheck, BadgeCheck, FileCheck2, Landmark } = Icons;

const certifications = [
  {
    id: '01',
    icon: 'FileCheck2',
    title: 'Importer Exporter Code',
    subtitle: 'IEC Certificate',
    desc: 'Officially registered with DGFT for international trade operations.',
  },
  {
    id: '02',
    icon: <Landmark size={30} strokeWidth={1.5} />,
    title: 'PAN Card',
    subtitle: 'Tax Identity',
    desc: 'Permanent Account Number issued by the Income Tax Department of India.',
  },
  {
    id: '03',
    icon: <BadgeCheck size={30} strokeWidth={1.5} />,
    title: 'Udyam Registration',
    subtitle: 'MSME Certified',
    desc: 'Recognized as a Micro, Small & Medium Enterprise by Govt. of India.',
  },
  {
    id: '04',
    icon: <ShieldCheck size={30} strokeWidth={1.5} />,
    title: 'Income Tax (ITR)',
    subtitle: 'Tax Compliance',
    desc: 'Fully compliant with Indian taxation laws and annual return filings.',
  },
];

const Certifications = () => {
  const [certs, setCerts] = useState([]);
  const [viewModalOpen, setViewModalOpen] = useState(false);
  const [currentViewUrl, setCurrentViewUrl] = useState('');
  
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);
  const [currentDownloadCert, setCurrentDownloadCert] = useState(null);
  const [downloadForm, setDownloadForm] = useState({ name: '', mobile: '', email: '' });
  const [isDownloading, setIsDownloading] = useState(false);

  const headerRef = useScrollAnimation();
  const cardsRef = useScrollAnimation();

  useEffect(() => {
    api.get('/certifications')
      .then(res => {
        if (res.data && res.data.length > 0) {
          setCerts(res.data);
        } else {
          setCerts(certifications); // Fallback to static if empty
        }
      })
      .catch(err => {
        console.error('Error fetching certifications:', err);
        setCerts(certifications);
      });
  }, []);

  const dummyPdf = 'data:application/pdf;base64,JVBERi0xLjEKJcKlwrHDqwoKMSAwIG9iagogIDw8IC9UeXBlIC9DYXRhbG9nCiAgICAgL1BhZ2VzIDIgMCBSCiAgPj4KZW5kb2JqCgoyIDAgb2JqCiAgPDwgL1R5cGUgL1BhZ2VzCiAgICAgL0tpZHMgWzMgMCBSXQogICAgIC9Db3VudCAxCiAgICAgL01lZGlhQm94IFswIDAgMzAwIDE0NF0KICA+PgplbmRvYmoKCjMgMCBvYmoKICA8PCAgL1R5cGUgL1BhZ2UKICAgICAgL1BhcmVudCAyIDAgUgogICAgICAvUmVzb3VyY2VzCiAgICAgICA8PCAvRm9udAogICAgICAgICAgIDw8IC9GMQogICAgICAgICAgICAgICA8PCAvVHlwZSAvRm9udAogICAgICAgICAgICAgICAgICAvU3VidHlwZSAvVHlwZTEKICAgICAgICAgICAgICAgICAgL0Jhc2VGb250IC9UaW1lcy1Sb21hbgogICAgICAgICAgICAgICA+PgogICAgICAgICAgID4+CiAgICAgICA+PgogICAgICAvQ29udGVudHMgNCAwIFIKICA+PgplbmRvYmoKCjQgMCBvYmoKICA8PCAvTGVuZ3RoIDU1ID4+CnN0cmVhbQogIEJUCiAgICAvRjEgMTggVGYKICAgIDAgMCAwIHJnCiAgICAoRHVtbXkgUERGIFRlc3QpIFRqCiAgRVQKZW5kc3RyZWFtCmVuZG9iagoKeHJlZgowIDUKMDAwMDAwMDAwMCA2NTUzNSBmIAowMDAwMDAwMDE4IDAwMDAwIG4gCjAwMDAwMDAwNzcgMDAwMDAgbiAKMDAwMDAwMDE3OCAwMDAwMCBuIAowMDAwMDAwNDU3IDAwMDAwIG4gCnRyYWlsZXIKICA8PCAgL1Jvb3QgMSAwIFIKICAgICAgL1NpemUgNQogID4+CnN0YXJ0eHJlZgo1NjUKJSVFT0YK';

  const handleOpenCert = (certUrl) => {
    setCurrentViewUrl(certUrl || dummyPdf);
    setViewModalOpen(true);
  };

  const handleDownloadCertClick = (cert) => {
    setCurrentDownloadCert(cert);
    setDownloadModalOpen(true);
  };

  const submitDownloadLead = async (e) => {
    e.preventDefault();
    setIsDownloading(true);
    try {
      await api.post('/download-leads', {
        name: downloadForm.name,
        mobile: downloadForm.mobile,
        email: downloadForm.email,
        certificateTitle: currentDownloadCert.title,
        fileSource: currentDownloadCert.pdfUrl || dummyPdf
      });
      
      // Proceed with actual download
      const certUrl = currentDownloadCert.pdfUrl || dummyPdf;
      if (certUrl.startsWith('data:')) {
        const link = document.createElement('a');
        link.href = certUrl;
        link.download = currentDownloadCert.title + '.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } else {
        // If it's a remote URL, open it or fetch it and trigger download
        window.open(certUrl, '_blank');
      }

      setDownloadModalOpen(false);
      setDownloadForm({ name: '', mobile: '', email: '' });
      Swal.fire('Success', 'Download started successfully!', 'success');
    } catch (error) {
      console.error(error);
      Swal.fire('Error', 'Something went wrong. Please try again.', 'error');
    }
    setIsDownloading(false);
  };

  return (
    <section className="py-12 px-8 bg-[#15110F]">
      <div className="max-w-[1200px] mx-auto">

        <div className="text-center mb-16" ref={headerRef} style={{opacity:0,transform:'translateY(30px)',transition:'opacity 0.7s ease,transform 0.7s ease'}}>
          <div className="font-['Inter','Outfit',sans-serif] text-xs tracking-[4px] uppercase text-[#c8956c] border border-[#c8956c] rounded-full py-2 px-6 inline-flex items-center gap-3 mb-6 bg-transparent">
              <span>TRUST & TRANSPARENCY</span>
            </div>
          <h2 className="text-3xl md:text-5xl font-serif font-normal text-white m-0 mb-4 leading-[1.2] max-sm:text-[3.5rem]">Our Certifications <br /> <span style={{ color: 'var(--color-brand-base)' }}>& Accreditations</span></h2>
          <p className="font-sans text-[1.1rem] text-[#b5aaa0] leading-[1.7] max-w-[600px] mx-auto m-0">
            Recognized for excellence in quality and authentic Indian handicraft exports — verified, compliant, and trusted worldwide.
          </p>
        </div>

        <div className="w-full overflow-hidden max-lg:overflow-x-auto max-lg:scrollbar-hide max-lg:snap-x max-lg:snap-mandatory" style={{maskImage:'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',WebkitMaskImage:'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',opacity:0,transition:'opacity 0.7s ease,transition-delay:0.15s'}} ref={cardsRef}>
          <div className="flex gap-6 w-max lg:animate-[scroll_20s_linear_infinite] hover:[animation-play-state:paused] max-lg:pb-4 max-lg:px-4">
            {[...certs, ...certs].map((cert, i) => {
              const IconComp = cert.icon ? (Icons[cert.icon] || ShieldCheck) : ShieldCheck;
              return (
              <div key={i} className="group max-lg:snap-center max-lg:snap-always bg-[#15110F] border border-[#2c241c] rounded-none overflow-hidden flex flex-col w-[280px] shrink-0 transition-all duration-300 ease-in-out hover:-translate-y-1.5 hover:shadow-[0_4px_20px_rgba(0,0,0,0.5)] hover:border-[var(--color-brand-base)]">
              <div className="py-10 px-7 pb-6 flex-1 relative">
                <span className="absolute top-6 right-7 font-serif text-[4rem] font-bold text-[rgba(200,149,108,0.15)] leading-none pointer-events-none transition-colors duration-300 ease-in-out group-hover:text-[rgba(200,149,108,0.3)]">{cert.id || `0${(i % certs.length) + 1}`}</span>
                <div className="w-[48px] h-[48px] rounded-full bg-transparent border border-[rgba(200,149,108,0.3)] text-[var(--color-brand-base)] flex items-center justify-center mb-6 transition-colors duration-300 ease-in-out group-hover:bg-[rgba(200,149,108,0.1)]">
                  {React.isValidElement(cert.icon) ? cert.icon : <IconComp size={30} strokeWidth={1.5} />}
                </div>
                <div className="inline-block font-sans text-[0.7rem] font-semibold tracking-[1.5px] uppercase text-white bg-[var(--color-brand-base)] border border-[var(--color-brand-base)] rounded-none py-1 px-3 mb-3">{cert.subtitle}</div>
                <h3 className="font-serif text-[1.25rem] font-bold uppercase tracking-[1px] text-white mb-3 leading-[1.3]">{cert.title}</h3>
                <p className="text-[15.2px] text-[#b5aaa0] leading-[1.6] m-0 font-sans">{cert.description || cert.desc}</p>
              </div>
              <div className="flex gap-3 py-5 px-7 border-t border-[#f0f0f0]">
                <button onClick={() => handleOpenCert(cert.pdfUrl)} className="flex-1 py-2.5 font-sans text-[0.78rem] font-semibold rounded-lg cursor-pointer transition-all duration-200 ease-in-out tracking-[0.3px] bg-[var(--color-brand-base)] text-black border border-[var(--color-brand-base)] hover:bg-[var(--color-brand-accent-dark)] hover:border-[var(--color-brand-accent-dark)]">View Certificate</button>
                <button onClick={() => handleDownloadCertClick(cert)} className="flex-1 py-2.5 font-sans text-[0.78rem] font-semibold rounded-lg cursor-pointer transition-all duration-200 ease-in-out tracking-[0.3px] bg-transparent text-[var(--color-brand-base)] border border-[var(--color-brand-base)] hover:bg-[#15110F] hover:text-[var(--color-brand-base)]">Download</button>
              </div>
            </div>
            )})}
          </div>
        </div>

        {/* View Modal */}
        {viewModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
            <div 
              className="bg-[#1C1713] w-full max-w-4xl h-[85vh] rounded-2xl border border-[#4a3e35] shadow-2xl flex flex-col relative overflow-hidden"
              onContextMenu={(e) => e.preventDefault()}
              style={{ userSelect: 'none' }}
            >
              <div className="flex justify-between items-center p-4 border-b border-[#2c241c] bg-[#15110F]">
                <h3 className="text-white font-serif text-xl m-0">Certificate Viewer</h3>
                <button 
                  onClick={() => setViewModalOpen(false)}
                  className="bg-transparent border-none text-white/70 hover:text-[var(--color-brand-base)] cursor-pointer p-2 transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
              
              <div className="flex-1 relative bg-white overflow-hidden">
                {/* Invisible overlay to block interaction/right clicks on iframe/embed */}
                <div className="absolute inset-0 z-10" onContextMenu={(e) => e.preventDefault()}></div>
                <iframe 
                  src={`${currentViewUrl}#toolbar=0&navpanes=0&scrollbar=0`}
                  className="w-full h-full border-none pointer-events-none"
                  title="Certificate"
                ></iframe>
              </div>
            </div>
          </div>
        )}

        {/* Download Modal */}
        {downloadModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
            <div className="bg-[#1C1713] w-full max-w-md rounded-2xl border border-[#4a3e35] shadow-2xl p-8 relative">
              <button 
                onClick={() => setDownloadModalOpen(false)}
                className="absolute top-4 right-4 bg-transparent border-none text-white/70 hover:text-[var(--color-brand-base)] cursor-pointer p-2 transition-colors"
              >
                <X size={24} />
              </button>
              
              <h3 className="text-white font-serif text-2xl mb-2 text-center">Download Certificate</h3>
              <p className="text-[#b5aaa0] text-sm text-center mb-6">Please provide your details to download {currentDownloadCert?.title}</p>
              
              <form onSubmit={submitDownloadLead} className="flex flex-col gap-4">
                <div>
                  <input 
                    type="text" 
                    placeholder="Full Name" 
                    required
                    value={downloadForm.name}
                    onChange={(e) => setDownloadForm({...downloadForm, name: e.target.value})}
                    className="w-full bg-[#15110F] border border-[#2c241c] rounded-lg px-4 py-3 text-white outline-none focus:border-[var(--color-brand-base)] transition-colors"
                  />
                </div>
                <div>
                  <input 
                    type="tel" 
                    placeholder="Mobile Number" 
                    required
                    value={downloadForm.mobile}
                    onChange={(e) => setDownloadForm({...downloadForm, mobile: e.target.value})}
                    className="w-full bg-[#15110F] border border-[#2c241c] rounded-lg px-4 py-3 text-white outline-none focus:border-[var(--color-brand-base)] transition-colors"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="Email Address" 
                    required
                    value={downloadForm.email}
                    onChange={(e) => setDownloadForm({...downloadForm, email: e.target.value})}
                    className="w-full bg-[#15110F] border border-[#2c241c] rounded-lg px-4 py-3 text-white outline-none focus:border-[var(--color-brand-base)] transition-colors"
                  />
                </div>
                <button 
                  type="submit" 
                  disabled={isDownloading}
                  className="w-full mt-4 bg-[var(--color-brand-base)] text-black border border-[var(--color-brand-base)] font-bold py-3 px-6 rounded-lg uppercase tracking-wide hover:bg-[var(--color-brand-accent-dark)] transition-colors disabled:opacity-50 cursor-pointer"
                >
                  {isDownloading ? 'Processing...' : 'Download Now'}
                </button>
              </form>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default Certifications;
