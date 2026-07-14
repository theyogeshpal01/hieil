const fs = require('fs');
const glob = require('glob');
const path = 'c:/Users/palyo/OneDrive/Desktop/Folder2/folder/new-frontend/src/**/*.jsx';
const files = glob.sync(path);
files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  if (content.includes("'http://localhost:3000/api")) {
    const newContent = content.split("'http://localhost:3000/api").join("\`${import.meta.env.VITE_API_URL || 'http://localhost:3000'}/api");
    fs.writeFileSync(f, newContent);
    console.log('Updated ' + f);
  }
});
