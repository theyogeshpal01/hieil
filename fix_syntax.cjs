const fs = require('fs');
const path = require('path');

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

    // Fix `icon: ,` 
    content = content.replace(/,\s*icon:\s*,/g, ',');
    content = content.replace(/{\s*icon:\s*,/g, '{');
    content = content.replace(/,\s*icon:\s*}/g, '}');
    content = content.replace(/{\s*icon:\s*}/g, '{}');
    
    // Also handle trailing spaces where icon was the last property before the bracket
    content = content.replace(/icon:\s*}/g, '}');

    if (content !== originalContent) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Fixed syntax in: ${filePath}`);
    }
}

processDirectory(path.join(__dirname, 'src'));
