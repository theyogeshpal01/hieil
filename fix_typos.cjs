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
        } else if (fullPath.endsWith('.css')) {
            if (file === 'BulkWholesaleSupply.css') {
                fixCSS(fullPath);
            }
        }
    }
}

function processFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;

    // Fix character encoding issues
    content = content.replace(/DAccor/g, 'Decor');
    content = content.replace(/DÃ©cor/g, 'Decor');
    content = content.replace(/D\xe9cor/g, 'Decor');

    if (content !== originalContent) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Fixed text in: ${filePath}`);
    }
}

function fixCSS(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Ensure .offer-grid uses 4 columns if there are 4 items
    content = content.replace(/grid-template-columns:\s*repeat\(3,\s*1fr\);/g, 'grid-template-columns: repeat(4, 1fr);');
    // Just in case it was auto-fit
    
    fs.writeFileSync(filePath, content, 'utf8');
}

processDirectory(path.join(__dirname, 'src'));
