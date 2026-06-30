const fs = require('fs');
const path = require('path');

const servicesDir = path.join(__dirname, 'src', 'pages', 'Services');

function updateOfferGrid() {
  const files = fs.readdirSync(servicesDir).filter(f => f.endsWith('.css'));
  
  for (const file of files) {
    const filePath = path.join(servicesDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace grid-template-columns: repeat(X, 1fr); inside .offer-grid
    let regex = /(\.offer-grid\s*\{[^}]*grid-template-columns:\s*repeat\()[0-9]+(,\s*1fr\);)/g;
    let finalContent = content.replace(regex, '$12$2');
    
    if (content !== finalContent) {
      fs.writeFileSync(filePath, finalContent, 'utf8');
      console.log(`Updated ${file}`);
    }
  }
}

updateOfferGrid();
