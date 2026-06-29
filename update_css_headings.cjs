const fs = require('fs');
const path = require('path');

const pillCss = `
.eyebrowContainer {
  font-family: 'Inter', 'Outfit', sans-serif;
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
  margin-bottom: 24px;
  background-color: transparent;
}
`;

function processCSSDirectory(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            processCSSDirectory(fullPath);
        } else if (fullPath.endsWith('.module.css')) {
            processCSSFile(fullPath);
        }
    }
}

function processCSSFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;

    if (content.includes('.eyebrow {')) {
        // Replace the existing .eyebrow block with .eyebrowContainer
        content = content.replace(/\.eyebrow\s*\{[^}]+\}/, pillCss.trim());
    }

    if (content !== originalContent) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated CSS: ${filePath}`);
    }
}

processCSSDirectory(path.join(__dirname, 'src', 'pages', 'Home', 'components'));
