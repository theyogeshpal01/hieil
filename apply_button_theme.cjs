const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'src');

// We want to replace the contents of .btnPrimary, .btnSecondary, .btnOutline, etc.
// A simple way is to use regex to find the blocks and replace them.

const newBtnStyle = `  background: transparent;
  border: 1px solid #4a3e35;
  color: #c8956c;
  padding: 12px 28px;
  font-size: 12px;
  letter-spacing: 2px;
  text-transform: uppercase;
  transition: all 0.3s ease;
  font-weight: 500;
  cursor: pointer;`;

const newBtnHoverStyle = `  border-color: #c8956c;
  background: rgba(194, 163, 115, 0.05);
  color: #c8956c;`;

function replaceInFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;

    // Replace .btnPrimary { ... }
    content = content.replace(/\.btnPrimary\s*\{[^}]*\}/g, `.btnPrimary {\n${newBtnStyle}\n}`);
    content = content.replace(/\.btnPrimary:hover\s*\{[^}]*\}/g, `.btnPrimary:hover {\n${newBtnHoverStyle}\n}`);

    // Replace .btnSecondary { ... }
    content = content.replace(/\.btnSecondary\s*\{[^}]*\}/g, `.btnSecondary {\n${newBtnStyle}\n}`);
    content = content.replace(/\.btnSecondary:hover\s*\{[^}]*\}/g, `.btnSecondary:hover {\n${newBtnHoverStyle}\n}`);

    // Replace .btnOutline { ... }
    content = content.replace(/\.btnOutline\s*\{[^}]*\}/g, `.btnOutline {\n${newBtnStyle}\n}`);
    content = content.replace(/\.btnOutline:hover\s*\{[^}]*\}/g, `.btnOutline:hover {\n${newBtnHoverStyle}\n}`);

    // Replace .btn { ... } (be careful not to match .btn-something else, so match exact .btn)
    content = content.replace(/\.btn\s*\{[^}]*\}/g, `.btn {\n${newBtnStyle}\n}`);
    content = content.replace(/\.btn:hover\s*\{[^}]*\}/g, `.btn:hover {\n${newBtnHoverStyle}\n}`);
    
    // Some buttons use Tailwind classes like bg-black text-white px-8 py-3, let's fix JSX
    if (filePath.endsWith('.jsx')) {
        content = content.replace(/bg-black\s+text-white\s+px-\d+\s+py-\d+/g, 'bg-transparent border border-[#4a3e35] text-[#c8956c] px-6 py-3 uppercase tracking-widest text-xs hover:border-[#c8956c] hover:bg-[#c8956c]/5 transition-all duration-300');
        content = content.replace(/bg-white\s+text-black\s+px-\d+\s+py-\d+/g, 'bg-transparent border border-[#4a3e35] text-[#c8956c] px-6 py-3 uppercase tracking-widest text-xs hover:border-[#c8956c] hover:bg-[#c8956c]/5 transition-all duration-300');
    }

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
console.log('Done styling buttons.');
