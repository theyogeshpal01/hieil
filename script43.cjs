const fs = require('fs');
let c = fs.readFileSync('src/admin/config/pageConfigs.js', 'utf8');

c = c.replace(/hideDefaultActions: true,\s*disableBulkDelete: true/g, 'hideDefaultActions: true');

fs.writeFileSync('src/admin/config/pageConfigs.js', c);
