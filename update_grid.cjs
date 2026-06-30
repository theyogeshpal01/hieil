const fs = require('fs');
const path = require('path');

const servicesDir = path.join(__dirname, 'src', 'pages', 'Services');

function updateOfferGrid() {
  const files = fs.readdirSync(servicesDir).filter(f => f.endsWith('.css'));
  
  for (const file of files) {
    const filePath = path.join(servicesDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace the desktop grid for .offer-grid from 4 to 2 columns
    // The exact block usually looks like:
    // .offer-grid {
    //   display: grid;
    //   grid-template-columns: repeat(4, 1fr);
    
    const newContent = content.replace(
      /(\.offer-grid\s*\{\s*display:\s*grid;\s*grid-template-columns:\s*repeat\()4(,\s*1fr\);\s*gap:\s*30px;\s*\})/g, 
      '$12$2'
    );
    
    // Let's also do a more generic replacement if the above strict one doesn't match perfectly
    // Just replace grid-template-columns: repeat(4, 1fr); inside .offer-grid
    
    let regex = /(\.offer-grid\s*\{[^}]*grid-template-columns:\s*repeat\()4(,\s*1fr\);)/g;
    let finalContent = newContent.replace(regex, '$12$2');
    
    if (content !== finalContent) {
      fs.writeFileSync(filePath, finalContent, 'utf8');
      console.log(`Updated ${file}`);
    }
  }
}

updateOfferGrid();
