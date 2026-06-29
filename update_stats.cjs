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
            processCSSFile(fullPath);
        }
    }
}

function processFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;

    content = content.replace(/'7\+'/g, "'2+'");
    content = content.replace(/7\+ years/g, "2+ years");
    content = content.replace(/7\+ Years/g, "2+ Years");

    if (content !== originalContent) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Fixed 7+ to 2+ in: ${filePath}`);
    }
}

function processCSSFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;

    // We want to reduce font size of h3 in .stat-card
    if (content.includes('.stat-card h3 {')) {
        content = content.replace(/\.stat-card\s*h3\s*\{([^}]+)\}/g, (match, inner) => {
            let newInner = inner.replace(/font-size:\s*[0-9.]+rem;/, 'font-size: 2.5rem;');
            return `.stat-card h3 {${newInner}}`;
        });
        content = content.replace(/\.stat-card\s*p\s*\{([^}]+)\}/g, (match, inner) => {
            let newInner = inner.replace(/font-size:\s*[0-9.]+rem;/, 'font-size: 0.8rem;').replace(/letter-spacing:\s*[0-9.]+px;/, 'letter-spacing: 1px;');
            return `.stat-card p {${newInner}}`;
        });
    }

    if (content !== originalContent) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated CSS stats in: ${filePath}`);
    }
}

processDirectory(path.join(__dirname, 'src'));
