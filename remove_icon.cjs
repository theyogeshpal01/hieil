const fs = require('fs');
const path = require('path');

const ICON_STRING = `<img src="/favicon.svg" alt="HIEIL" style={{ height: '16px', width: '16px', objectFit: 'contain' }} />`;

function processDirectory(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            processDirectory(fullPath);
        } else if (fullPath.endsWith('.jsx')) {
            processFile(fullPath);
        }
    }
}

function processFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;

    // Remove the icon string and any following whitespace
    const regex = new RegExp(ICON_STRING.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\s*', 'g');
    content = content.replace(regex, '');

    // Also remove the globe icon if they meant "Hatao" completely (I had replaced Globe earlier, so Globe might be gone, but just in case)
    content = content.replace(/<Globe\b[^>]*\/>\s*/g, '');
    content = content.replace(/<Globe2\b[^>]*\/>\s*/g, '');

    if (content !== originalContent) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Removed icon from: ${filePath}`);
    }
}

processDirectory(path.join(__dirname, 'src'));
