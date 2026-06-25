export const HEADER_LINKS = [
  { label: 'HOME', href: '/' },
  { 
    label: 'ABOUT', 
    href: '/about', 
    hasDropdown: true,
    dropdownItems: [
      { label: 'About Us', href: '/about/us' },
      { label: 'Why Choose Us', href: '/about/why-choose-us' },
      { label: 'How We Work', href: '/about/how-we-work' },
    ]
  },
  { 
    label: 'CATEGORIES', 
    href: '/categories', 
    hasDropdown: true,
    dropdownItems: [
      { label: 'Handcrafted Blue Pottery', href: '/categories/blue-pottery', hasArrow: true },
      { label: 'Handcrafted Metal Products', href: '/categories/metal', hasArrow: true },
      { label: 'Handcrafted Stone Products', href: '/categories/stone', hasArrow: true },
      { label: 'Handcrafted Wooden Products', href: '/categories/wooden', hasArrow: true },
      { label: 'Luxury Clock', href: '/categories/clock', hasArrow: true },
    ]
  },
  { label: 'PRODUCT', href: '/categories' },
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
    { label: 'Our Story & Vision', href: '#' },
    { label: 'Why Choose HIEIL?', href: '#' },
    { label: 'Got Questions? (FAQs)', href: '#' },
    { label: 'What\'s Trending', href: '#' },
    { label: 'Let\'s Connect', href: '#' },
  ],
  products: [
    { label: 'Handcrafted Blue Pottery', href: '#' },
    { label: 'Handcrafted Metal Products', href: '#' },
    { label: 'Handcrafted Stone Products', href: '#' },
    { label: 'Handcrafted Wooden Products', href: '#' },
    { label: 'Luxury clock', href: '#' },
  ],
  care: [
    { label: 'Customer Love & Reviews', href: '#' },
    { label: 'Global Payments', href: '#' },
    { label: 'Support', href: '#' },
    { label: 'Give Feedback', href: '#' },
  ],
  policies: [
    { label: 'Privacy Matters', href: '#' },
    { label: 'Terms & Conditions', href: '#' },
    { label: 'Legal Info', href: '#' },
  ],
};

export const SOCIAL_LINKS = [
  { platform: 'facebook', href: '#' },
  { platform: 'x', href: '#' },
  { platform: 'instagram', href: '#' },
  { platform: 'pinterest', href: '#' },
  { platform: 'youtube', href: '#' },
  { platform: 'linkedin', href: '#' },
];
