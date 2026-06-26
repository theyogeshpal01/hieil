const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'src');

const replacements = [
    // Text colors (Dark -> Light)
    { regex: /color:\s*(?:#1a1a1a|#1a233a|#2c2c2c|#0f0f0f|#111111|#222222|#333333|#444444|#555555|#666666|#000|#111|#222|#333|#444|#555|#666|black);/gi, replace: 'color: #ffffff;' },
    
    // Also change dark rgb/rgba
    { regex: /color:\s*rgba?\(\s*(?:[0-4][0-9]?|50)\s*,\s*(?:[0-4][0-9]?|50)\s*,\s*(?:[0-4][0-9]?|50)[^)]*\)/gi, replace: 'color: #ffffff' },
    { regex: /color:\s*#8c827a;/gi, replace: 'color: #b5aaa0;' } // specific case
];

function replaceInFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    replacements.forEach(rule => {
        content = content.replace(rule.regex, rule.replace);
    });

    // Replace Tailwind text classes for dark mode
    content = content.replace(/text-(?:gray|slate|zinc|neutral|stone)-(?:900|800|700)/g, 'text-white');
    content = content.replace(/text-(?:gray|slate|zinc|neutral|stone)-(?:600|500)/g, 'text-[#b5aaa0]');
    content = content.replace(/text-black/g, 'text-white');

    // Replace dark backgrounds in tailwind if missed
    content = content.replace(/bg-(?:gray|slate|zinc|neutral|stone)-(?:100|200)/g, 'bg-[#1C1713]');
    content = content.replace(/bg-(?:gray|slate|zinc|neutral|stone)-(?:50)/g, 'bg-[#15110F]');

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
console.log('Done applying text color fixes.');
