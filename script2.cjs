const fs = require('fs');
let c = fs.readFileSync('src/admin/config/pageConfigs.js', 'utf8');

c = c.replace(/if \(val === 'Paid'\) \{ bg = '#dcfce7'; color = '#166534'; \}/g, "if (val === 'Full Paid' || val === 'Paid') { bg = '#dcfce7'; color = '#166534'; }\n                else if (val === 'Partial Paid') { bg = '#fef3c7'; color = '#92400e'; }");

c = c.replace(/React\.createElement\('option', \{value: 'Paid'\}, 'Paid'\)/g, "React.createElement('option', {value: 'Partial Paid'}, 'Partial Paid'),\n                  React.createElement('option', {value: 'Full Paid'}, 'Full Paid')");

fs.writeFileSync('src/admin/config/pageConfigs.js', c);
