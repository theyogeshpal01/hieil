const fs = require('fs');
const path = require('path');

const newOfferCardCSS = `
.offer-card {
  background: #15110F;
  border: 1px solid #2c241c;
  padding: 40px;
  text-align: left;
  transition: all 0.4s ease;
  border-radius: 0;
}

.offer-card:hover {
  border-color: #c8956c;
  box-shadow: 0 10px 40px rgba(194, 163, 115, 0.05);
  transform: translateY(-5px);
}

.offer-icon {
  width: 48px;
  height: 48px;
  margin: 0 0 24px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: 1px solid rgba(200, 149, 108, 0.3);
  color: #c8956c;
  border-radius: 50%;
  transition: background-color 0.4s ease;
}

.offer-card:hover .offer-icon {
  background: rgba(200, 149, 108, 0.1);
}

.offer-card h3 {
  font-family: var(--font-serif);
  font-size: 1.25rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.offer-card p {
  color: #b5aaa0;
  line-height: 1.6;
  font-size: 15.2px;
  margin: 0;
}
`;

function processCSSFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // We will find the block starting with .offer-card and ending before the next section 
    // This regex matches from .offer-card { up to just before .cs-advantage-section or similar next main block,
    // but a safer way is to regex replace the specific classes.

    // Regex to replace .offer-card { ... }
    content = content.replace(/\.offer-card\s*\{[^}]+\}/g, '');
    content = content.replace(/\.offer-card:hover\s*\{[^}]+\}/g, '');
    content = content.replace(/\.offer-icon\s*\{[^}]+\}/g, '');
    content = content.replace(/\.offer-card:hover\s*\.offer-icon\s*\{[^}]+\}/g, '');
    content = content.replace(/\.offer-card\s*h3\s*\{[^}]+\}/g, '');
    content = content.replace(/\.offer-card\s*p\s*\{[^}]+\}/g, '');

    // Now insert the new CSS after .offer-grid { ... }
    content = content.replace(/(\.offer-grid\s*\{[^}]+\})/, '$1\n' + newOfferCardCSS);

    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated CSS: ${filePath}`);
}

const dir = path.join(__dirname, 'src/pages/Services');
const files = fs.readdirSync(dir);
for (const file of files) {
    if (file.endsWith('.css') && file !== 'ExportLogistics.css') {
        processCSSFile(path.join(dir, file));
    }
}
// ExportLogistics is skipped because it has complex ::before and .offer-index pseudo-elements 
// that might get broken if we blindly replace. We'll manually check it.
