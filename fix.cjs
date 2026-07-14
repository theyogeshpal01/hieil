const fs = require('fs');
const path = require('path');

const filesToFix = [
  'src/pages/Blog/Blog.jsx',
  'src/pages/Home/components/CountryRepresentatives/CountryRepresentatives.jsx',
  'src/pages/Home/components/FeaturedProducts/FeaturedProducts.jsx',
  'src/pages/Home/components/MeetOurArtisans/MeetOurArtisans.jsx',
  'src/pages/Home/components/ShopByCategories/ShopByCategories.jsx',
  'src/pages/Shop/Shop.jsx',
  'src/pages/Testimonials/Testimonials.jsx'
];

filesToFix.forEach(relPath => {
  const fullPath = path.join(__dirname, relPath);
  if (fs.existsSync(fullPath)) {
    let content = fs.readFileSync(fullPath, 'utf8');
    // The broken string is like: axios.get(${import.meta.env.VITE_API_URL || 'http://localhost:3000'}/api/products')
    // We want: axios.get(`${import.meta.env.VITE_API_URL || 'http://localhost:3000'}/api/products`)
    
    // First, let's fix the start: replace axios.get(${ or axios.post(${ with axios.get(`${
    content = content.replace(/\(\$\{import\.meta\.env\.VITE_API_URL/g, '(`\${import.meta.env.VITE_API_URL');
    
    // Then let's fix the end: replace '/api/something') with '/api/something`)
    content = content.replace(/\}\/api([^']+)'\)/g, '}/api$1`)');

    fs.writeFileSync(fullPath, content);
    console.log('Fixed ' + relPath);
  }
});
