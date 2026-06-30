const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

function addBorderRadiusToTags() {
  const cssFiles = execSync('powershell "Get-ChildItem -Path src -Recurse -Filter *.css | Select-Object -ExpandProperty FullName"').toString().split('\r\n').filter(Boolean);
  
  cssFiles.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let changed = false;
    
    // List of tag classes we want to add border-radius to
    const tagClasses = [
      'contact-tag', 'testimonials-tag', 'hww-tag', 'ap-tag', 'b2b-tag', 
      'ws-tag', 'highlight-tag', 'cs-tag', 'ex-tag', 'pl-tag', 'service-tag', 'qa-tag', 'about-tag'
    ];
    
    tagClasses.forEach(tagClass => {
      const regex = new RegExp(`(\\.${tagClass}\\s*\\{[^}]+)(\\})`, 'g');
      content = content.replace(regex, (match, p1, p2) => {
        if (!p1.includes('border-radius:')) {
          changed = true;
          return p1.trim() + '\n  border-radius: 50px;\n' + p2;
        }
        return match;
      });
    });
    
    if (changed) {
      fs.writeFileSync(file, content, 'utf8');
      console.log(`Updated ${file}`);
    }
  });
}

addBorderRadiusToTags();
