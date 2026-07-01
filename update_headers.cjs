const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, 'src', 'pages');

const walkSync = (dir, filelist = []) => {
  fs.readdirSync(dir).forEach(file => {
    const dirFile = path.join(dir, file);
    if (fs.statSync(dirFile).isDirectory()) {
      filelist = walkSync(dirFile, filelist);
    } else {
      if (dirFile.endsWith('.css') && !dirFile.includes('Contact.css')) {
        filelist.push(dirFile);
      }
    }
  });
  return filelist;
};

const cssFiles = walkSync(pagesDir);

let updatedFiles = 0;

cssFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;

  // Replace hero padding
  // .page-hero { padding: ... }
  const heroRegex = /(\.[a-zA-Z0-9_-]*hero\s*\{[^}]*?padding:\s*)([^;]+)(;)/g;
  content = content.replace(heroRegex, (match, p1, p2, p3) => {
    if (p2 !== '120px 20px 60px') {
        changed = true;
        return p1 + '120px 20px 60px' + p3;
    }
    return match;
  });

  // Replace title font-size
  // .page-title { font-size: 4.5rem; }
  const titleRegex = /(\.[a-zA-Z0-9_-]*title\s*\{[^}]*?font-size:\s*)([^;]+)(;)/g;
  content = content.replace(titleRegex, (match, p1, p2, p3) => {
    if (p2 !== '3.5rem') {
        changed = true;
        return p1 + '3.5rem' + p3;
    }
    return match;
  });

  // Replace subtitle font-size
  const subtitleRegex = /(\.[a-zA-Z0-9_-]*subtitle\s*\{[^}]*?font-size:\s*)([^;]+)(;)/g;
  content = content.replace(subtitleRegex, (match, p1, p2, p3) => {
    if (p2 !== '1.1rem') {
        changed = true;
        return p1 + '1.1rem' + p3;
    }
    return match;
  });

  if (changed) {
    fs.writeFileSync(file, content, 'utf8');
    console.log('Updated: ' + file);
    updatedFiles++;
  }
});

console.log('Total files updated: ' + updatedFiles);
