const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'src');

const replacements = [
    // Backgrounds to Primary Dark (#15110F)
    { regex: /background-color:\s*(?:#ffffff|#fff|white|#f[a-f0-9]{5});/gi, replace: 'background-color: #15110F;' },
    { regex: /background:\s*(?:#ffffff|#fff|white|#f[a-f0-9]{5});/gi, replace: 'background: #15110F;' },
    
    // Some alternating sections to Secondary Dark (#1C1713)
    { regex: /background-color:\s*(?:#f9f9f9|#f8f8f8|#f4f4f4|#f5f5f5|#f8f5f2|#fafafa);/gi, replace: 'background-color: #1C1713;' },
    { regex: /background:\s*(?:#f9f9f9|#f8f8f8|#f4f4f4|#f5f5f5|#f8f5f2|#fafafa);/gi, replace: 'background: #1C1713;' },

    // Text colors (Dark -> Light)
    { regex: /color:\s*(?:#000|#000000|#111|#111111|#222|#222222|#333|#333333|black);/gi, replace: 'color: #ffffff;' },
    { regex: /color:\s*(?:#444|#444444|#555|#555555|#666|#666666|#777|#777777);/gi, replace: 'color: #b5aaa0;' },

    // Borders (Light borders -> Dark borders)
    { regex: /border:\s*1px\s*solid\s*(?:#ddd|#dddddd|#eee|#eeeeee|#e0e0e0|#e5e5e5);/gi, replace: 'border: 1px solid #2c241c;' },
    { regex: /border-color:\s*(?:#ddd|#dddddd|#eee|#eeeeee|#e0e0e0|#e5e5e5|#eaeaea);/gi, replace: 'border-color: #2c241c;' },
    { regex: /border-bottom:\s*1px\s*solid\s*(?:#ddd|#dddddd|#eee|#eeeeee|#e0e0e0|#e5e5e5);/gi, replace: 'border-bottom: 1px solid #2c241c;' },
    { regex: /border-top:\s*1px\s*solid\s*(?:#ddd|#dddddd|#eee|#eeeeee|#e0e0e0|#e5e5e5);/gi, replace: 'border-top: 1px solid #2c241c;' },

    // Box shadows (adjust for dark mode)
    { regex: /box-shadow:\s*0[ \w]+rgba\(0,\s*0,\s*0,\s*0\.[0-9]+\);/gi, replace: 'box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);' }
];

function replaceInFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    replacements.forEach(rule => {
        content = content.replace(rule.regex, rule.replace);
    });

    // Replace Tailwind classes in JSX just in case
    content = content.replace(/bg-white/g, 'bg-[#15110F]');
    content = content.replace(/bg-gray-50/g, 'bg-[#1C1713]');
    content = content.replace(/bg-gray-100/g, 'bg-[#1C1713]');
    content = content.replace(/text-black/g, 'text-white');
    content = content.replace(/text-gray-900/g, 'text-white');
    content = content.replace(/text-gray-800/g, 'text-white');
    content = content.replace(/text-gray-700/g, 'text-[#b5aaa0]');
    content = content.replace(/text-gray-600/g, 'text-[#b5aaa0]');
    content = content.replace(/border-gray-200/g, 'border-[#2c241c]');
    content = content.replace(/border-gray-300/g, 'border-[#2c241c]');

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
console.log('Done applying dark theme colors.');
