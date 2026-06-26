const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'src', 'pages');

const replacements = [
    // Fix broken backgrounds from previous script
    { regex: /bg-\[#15110F\]0/g, replace: 'bg-[#15110F]' },
    { regex: /bg-\[#1C1713\]0/g, replace: 'bg-[#1C1713]' },
    
    // Replace orange/zinc/gray colors with theme colors
    { regex: /orange-500/g, replace: '[#c2a373]' },
    { regex: /orange-600/g, replace: '[#917751]' },
    { regex: /zinc-900/g, replace: '[#1C1713]' },
    { regex: /zinc-800/g, replace: '[#2c241c]' },
    { regex: /zinc-100/g, replace: '[#1C1713]' },
    { regex: /gray-900/g, replace: '[#1C1713]' },
    { regex: /gray-800/g, replace: '[#2c241c]' },
    { regex: /gray-700/g, replace: '[#4a3e35]' },
    { regex: /gray-600/g, replace: '[#8c8279]' },
    { regex: /gray-500/g, replace: '[#b5aaa0]' },
    { regex: /gray-400/g, replace: '[#b5aaa0]' },
    { regex: /gray-300/g, replace: '[#2c241c]' },
    { regex: /gray-200/g, replace: '[#2c241c]' },
    { regex: /gray-100/g, replace: '[#1C1713]' },
    { regex: /gray-50/g, replace: '[#15110F]' },
    { regex: /emerald-500/g, replace: '[#c2a373]' },
    { regex: /blue-500/g, replace: '[#c2a373]' },
    { regex: /blue-600/g, replace: '[#917751]' },
    { regex: /indigo-600/g, replace: '[#917751]' },
    { regex: /purple-500/g, replace: '[#c2a373]' },
    { regex: /rose-500/g, replace: '[#c2a373]' },
    { regex: /amber-500/g, replace: '[#c2a373]' },
    
    // Fix buttons (remove rounded-full, rounded-lg, add luxury border)
    { regex: /rounded-full/g, replace: 'rounded-none' },
    { regex: /rounded-lg/g, replace: 'rounded-none' },
    { regex: /rounded-xl/g, replace: 'rounded-none' },
    { regex: /rounded-2xl/g, replace: 'rounded-none' },
    { regex: /rounded-md/g, replace: 'rounded-none' },
    { regex: /shadow-lg/g, replace: 'shadow-none' },
    { regex: /shadow-xl/g, replace: 'shadow-none' },
    { regex: /shadow-2xl/g, replace: 'shadow-none' },
    { regex: /shadow-md/g, replace: 'shadow-none' },
    { regex: /shadow-sm/g, replace: 'shadow-none' },
    { regex: /shadow-\[#c2a373\]\/30/g, replace: '' },
    
    // Replace text-black with text-white
    { regex: /text-black/g, replace: 'text-white' },
];

function replaceInFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    replacements.forEach(rule => {
        content = content.replace(rule.regex, rule.replace);
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
        } else if (fullPath.endsWith('.jsx')) {
            replaceInFile(fullPath);
        }
    });
}

processDirectory(directoryPath);
console.log('Done fixing remaining pages.');
