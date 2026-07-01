export const HEADER_LINKS = [
  { label: 'HOME', href: '/' },
  { 
    label: 'ABOUT', 
    href: '/about/us', 
    hasDropdown: true,
    dropdownItems: [
      { label: 'About Us', href: '/about/us' },
      { label: 'Why Choose Us', href: '/about/why-choose-us' },
      { label: 'How We Work', href: '/about/how-we-work' },
    ]
  },
  { label: 'SHOP', href: '/shop' },
  { 
    label: 'SERVICES', 
    href: '/services', 
    hasDropdown: true,
    dropdownItems: [
      { label: 'Custom Product Development', href: '/services/custom' },
      { label: 'Bulk Wholesale Supply', href: '/services/wholesale' },
      { label: 'Export Services', href: '/services/export' },
      { label: 'Quality Control & Certifications', href: '/services/quality' },
      { label: 'PRIVATE LABELING & BRANDING', href: '/services/private-labeling' },
      { label: 'B2B Partnerships', href: '/services/b2b' },
      { label: 'Affiliate Program', href: '/services/affiliate' },
    ]
  },
  { label: 'BLOG', href: '/blog' },
  { label: 'GALLERY', href: '/gallery' },
  { label: 'TESTIMONIALS', href: '/testimonials' },
  { label: 'CONTACT', href: '/contact' },
];

export const FOOTER_LINKS = {
  explore: [
    { label: 'Our Story & Vision', href: '/about/us' },
    { label: 'Why Choose HIEIL?', href: '/about/why-choose-us' },
    { label: 'Got Questions? (FAQs)', href: '/#faq' },
    { label: 'What\'s Trending', href: '/products' },
    { label: 'Let\'s Connect', href: '/contact' },
  ],
  categories: [
    { label: 'Handcrafted Blue Pottery', href: '/products' },
    { label: 'Handcrafted Metal categories', href: '/products' },
    { label: 'Handcrafted Stone categories', href: '/products' },
    { label: 'Handcrafted Wooden categories', href: '/products' },
    { label: 'Luxury clock', href: '/products' },
  ],
  care: [
    { label: 'Customer Love & Reviews', href: '/testimonials' },
    { label: 'Global Payments', href: '/services/wholesale' },
    { label: 'Support', href: '/contact' },
  ],
  policies: [
    { label: 'Privacy Matters', href: '/privacy-policy' },
    { label: 'Terms & Conditions', href: '/terms-of-service' },
    { label: 'Legal Info', href: '/legal-info' },
  ],
};

export const SOCIAL_LINKS = [
  { platform: 'facebook', href: 'https://facebook.com/hieil' },
  { platform: 'x', href: 'https://twitter.com/hieil' },
  { platform: 'instagram', href: 'https://instagram.com/hieil' },
  { platform: 'pinterest', href: 'https://pinterest.com/hieil' },
  { platform: 'youtube', href: 'https://youtube.com/c/hieil' },
  { platform: 'linkedin', href: 'https://linkedin.com/company/hieil' },
];
