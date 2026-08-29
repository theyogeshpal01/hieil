const fs = require('fs');
const path = require('path');

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('.jsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      if (content.includes("onClick={() => navigate(-1)}")) {
        content = content.replace(/onClick=\{\(\) => navigate\(-1\)\}/g, "onClick={() => { if (window.history.length > 2) navigate(-1); else window.close(); }}");
        fs.writeFileSync(fullPath, content);
        console.log('Fixed', fullPath);
      }
    }
  }
}

processDir('src/admin/pages');
