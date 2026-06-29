const fs = require('fs');
const path = require('path');

const cssFiles = [
  'src/pages/Home/components/AboutCTASection/AboutCTASection.module.css',
  'src/pages/Home/components/Certifications/Certifications.module.css',
  'src/pages/Home/components/FeaturedProducts/FeaturedProducts.module.css',
  'src/pages/Home/components/GlobalClients/GlobalClients.module.css',
  'src/pages/Home/components/HeroSlider/HeroSlider.module.css',
  'src/pages/Home/components/ProductCatalogue/ProductCatalogue.module.css',
  'src/pages/Home/components/SecurePaymentOptions/SecurePaymentOptions.module.css',
  'src/pages/Home/components/ShopByCategories/ShopByCategories.module.css'
];

const newEyebrowCss = `  font-family: var(--font-sans);
  font-size: 0.75rem;
  letter-spacing: 4px;
  text-transform: uppercase;
  color: #c8956c;
  border: 1px solid #c8956c;
  border-radius: 999px;
  padding: 8px 24px;
  display: inline-flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 30px;
  background-color: transparent;`;

for (const file of cssFiles) {
  const fullPath = path.join(__dirname, file);
  if (fs.existsSync(fullPath)) {
    let content = fs.readFileSync(fullPath, 'utf8');
    
    // Replace the block of .eyebrow { ... }
    content = content.replace(/\.eyebrow\s*\{[^}]+\}/g, `.eyebrow {\n${newEyebrowCss}\n}`);
    
    fs.writeFileSync(fullPath, content, 'utf8');
    console.log(`Updated CSS: ${file}`);
  }
}
