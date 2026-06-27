const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'src', 'pages');

const newBtnStyle = `  background: transparent;
  border: 1px solid #4a3e35;
  color: #c8956c;
  padding: 12px 28px;
  font-size: 12px;
  letter-spacing: 2px;
  text-transform: uppercase;
  transition: all 0.3s ease;
  font-weight: 500;
  cursor: pointer;
  border-radius: 0;`;

const newBtnHoverStyle = `  border-color: #c8956c;
  background: rgba(194, 163, 115, 0.05);
  color: #c8956c;`;

function replaceInFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;

    // Fix white gradients
    content = content.replace(/linear-gradient\([^,]+,\s*transparent,\s*#ffffff\)/gi, 'linear-gradient(to bottom, transparent, #15110F)');

    // Fix button CSS classes across all files
    const btnClassesToFix = [
        '.search-btn',
        '.topic-btn',
        '.sub-topic-btn',
        '.btn-submit',
        '.btn-loc-map',
        '.category-btn',
        '.view-btn',
        '.download-btn',
        '.cta-btn',
        '.submit-btn'
    ];

    btnClassesToFix.forEach(btnClass => {
        const regexMain = new RegExp(`\\${btnClass}\\s*\\{[^}]*\\}`, 'g');
        const regexHover = new RegExp(`\\${btnClass}:hover\\s*\\{[^}]*\\}`, 'g');
        content = content.replace(regexMain, `${btnClass} {\n${newBtnStyle}\n}`);
        content = content.replace(regexHover, `${btnClass}:hover {\n${newBtnHoverStyle}\n}`);
    });

    if (content !== originalContent) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated ${filePath}`);
    }
}

function processDirectory(dirPath) {
    const files = fs.readdirSync(dirPath);

    files.forEach(file => {
        const fullPath = path.join(dirPath, file);
        if (fs.statSync(fullPath).isDirectory()) {
            processDirectory(fullPath);
        } else if (fullPath.endsWith('.css') || fullPath.endsWith('.jsx')) {
            replaceInFile(fullPath);
        }
    });
}

processDirectory(directoryPath);
console.log('Done fixing CSS and gradients.');
