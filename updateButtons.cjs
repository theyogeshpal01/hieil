const fs = require('fs');
let content = fs.readFileSync('c:/Users/palyo/OneDrive/Desktop/Folder2/folder/New folder/new-frontend/src/admin/config/pageConfigs.js', 'utf8');

// Replace standard style objects with classNames
content = content.replace(/style:\s*\{[^}]*backgroundColor:\s*['"](#0ea5e9|#3b82f6|#6366f1|#0284c7)['"][^}]*\}/g, "className: 'modern-action-btn btn-primary'");
content = content.replace(/style:\s*\{[^}]*backgroundColor:\s*['"](#22c55e|#10b981)['"][^}]*\}/g, "className: 'modern-action-btn btn-success'");
content = content.replace(/style:\s*\{[^}]*backgroundColor:\s*['"](#f97316|#f59e0b)['"][^}]*\}/g, "className: 'modern-action-btn btn-warning'");
content = content.replace(/style:\s*\{[^}]*backgroundColor:\s*['"](#ef4444)['"][^}]*\}/g, "className: 'modern-action-btn btn-danger'");

fs.writeFileSync('c:/Users/palyo/OneDrive/Desktop/Folder2/folder/New folder/new-frontend/src/admin/config/pageConfigs.js', content);
console.log('Done');
