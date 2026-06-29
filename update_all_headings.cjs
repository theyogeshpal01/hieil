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

const HIEIL_ICON = `<img src="/favicon.svg" alt="HIEIL" style={{ height: '16px', width: '16px', objectFit: 'contain' }} />`;

function processFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;

    // 1. Replace all <Globe ... /> with the new icon
    content = content.replace(/<Globe\b[^>]*\/>/g, HIEIL_ICON);
    content = content.replace(/<Globe2\b[^>]*\/>/g, HIEIL_ICON);

    // 2. Replace specific inline headings in About/WhyChooseUs
    // Pattern: <h2 className="text-sm font-bold tracking-widest text-[#c8956c] uppercase mb-X">TEXT <br /> <span style={{ color: 'var(--color-brand-base)' }}>HIGHLIGHT</span></h2>
    content = content.replace(/<h2 className="text-sm font-bold tracking-widest text-\[#c8956c\] uppercase mb-\d+">([^<]+)(?:<br \/>\s*)?<span style={{ color: 'var\(--color-brand-base\)' }}>([^<]+)<\/span><\/h2>/g, (match, text1, text2) => {
        text1 = text1.trim();
        text2 = text2.trim();
        const fullText = `${text1} ${text2}`.toUpperCase();
        return `<div className="inline-flex items-center gap-3 px-6 py-2 border border-[#c8956c] text-[#c8956c] rounded-full text-[0.75rem] font-sans tracking-[4px] uppercase mb-6 bg-transparent mx-auto">
              ${HIEIL_ICON}
              <span>${fullText}</span>
            </div>`;
    });
    
    // Some headers have a <div className="text-center mb-12"> enclosing them. We should make sure flex flex-col items-center is added.
    content = content.replace(/<div className="text-center mb-12">/g, '<div className="text-center mb-12 flex flex-col items-center">');

    // 3. Replace spans with styles.eyebrow in Home components
    // Pattern: <span className={styles.eyebrow}>TEXT</span>
    content = content.replace(/<span className={styles\.eyebrow}>([^<]+)<\/span>/g, (match, text) => {
        return `<div className={styles.eyebrowContainer}>
              ${HIEIL_ICON}
              <span>${text.toUpperCase()}</span>
            </div>`;
    });

    if (content !== originalContent) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated JSX: ${filePath}`);
    }
}

processDirectory(path.join(__dirname, 'src'));
