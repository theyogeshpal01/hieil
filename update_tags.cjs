const fs = require('fs');
const path = require('path');

const cssFiles = [
  'src/pages/Services/AffiliateProgram.css',
  'src/pages/Services/B2BPartnerships.css',
  'src/pages/Services/BulkWholesaleSupply.css',
  'src/pages/Services/CustomProductDevelopment.css',
  'src/pages/Services/ExportLogistics.css',
  'src/pages/Services/PrivateLabeling.css',
  'src/pages/Services/QualityAssurance.css',
  'src/pages/HowWeWork/HowWeWork.css'
];

const newTagCss = `  font-family: var(--font-sans);
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
    
    // Replace .[prefix]-tag { ... }
    content = content.replace(/\.[a-z0-9]+-tag\s*\{[^}]+\}/g, (match) => {
      const className = match.split('{')[0].trim();
      return `${className} {\n${newTagCss}\n}`;
    });

    fs.writeFileSync(fullPath, content, 'utf8');
    console.log(`Updated CSS: ${file}`);
  }
}
