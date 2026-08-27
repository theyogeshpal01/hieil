const fs = require('fs');
let c = fs.readFileSync('src/admin/config/pageConfigs.js', 'utf8');

c = c.replace(/\{ key: 'balancePaidInr'[^\}]+\},\s*/g, '');

fs.writeFileSync('src/admin/config/pageConfigs.js', c);
