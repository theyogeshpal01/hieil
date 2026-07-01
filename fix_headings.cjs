const fs = require('fs');

// 1. Fix Contact.jsx
let contactJsx = fs.readFileSync('src/pages/Contact/Contact.jsx', 'utf8');
contactJsx = contactJsx.replace(/<h2>Visit Us at Any/g, '<h2 className="global-section-title">Visit Us at Any');
fs.writeFileSync('src/pages/Contact/Contact.jsx', contactJsx);

// 2. Fix ShopByCategories.jsx
let shopByCatJsx = fs.readFileSync('src/pages/Home/components/ShopByCategories/ShopByCategories.jsx', 'utf8');
shopByCatJsx = shopByCatJsx.replace(/<h2 className=\{styles\.title\}>/g, '<h2 className={`${styles.title} global-section-title`}>');
fs.writeFileSync('src/pages/Home/components/ShopByCategories/ShopByCategories.jsx', shopByCatJsx);

// 3 & 5. Fix About.jsx
let aboutJsx = fs.readFileSync('src/pages/About/About.jsx', 'utf8');
aboutJsx = aboutJsx.replace(/<h3 className="text-3xl md:text-5xl font-serif font-normal text-white mb-8">Crafting Excellence/g, '<h3 className="global-section-title text-white mb-8">Crafting Excellence');
aboutJsx = aboutJsx.replace(/<h3 className="text-3xl md:text-4xl font-serif font-normal">Crafting change/g, '<h3 className="global-section-title text-white">Crafting change');
fs.writeFileSync('src/pages/About/About.jsx', aboutJsx);

// 4. Fix GlobalClients.jsx
let globalClientsJsx = fs.readFileSync('src/pages/Home/components/GlobalClients/GlobalClients.jsx', 'utf8');
globalClientsJsx = globalClientsJsx.replace(/<h2 className=\{styles\.title\}>/g, '<h2 className={`${styles.title} global-section-title`}>');
fs.writeFileSync('src/pages/Home/components/GlobalClients/GlobalClients.jsx', globalClientsJsx);

// Append global-section-title to index.css
const css = `\n\n/* Global Section Title added to ensure 100% uniformity */\n.global-section-title {\n  font-family: var(--font-serif) !important;\n  font-size: 3.5rem !important;\n  font-weight: 400 !important;\n  line-height: 1.2 !important;\n  text-align: center !important;\n  letter-spacing: normal !important;\n  margin-bottom: 25px !important;\n}\n@media (max-width: 768px) {\n  .global-section-title {\n    font-size: 2.5rem !important;\n  }\n}\n`;
fs.appendFileSync('src/index.css', css);

console.log("Fixed!");
