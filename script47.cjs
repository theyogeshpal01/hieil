const fs = require('fs');
let c = fs.readFileSync('src/admin/config/pageConfigs.js', 'utf8');

const regex = /if \(row\.installments && Array\.isArray\(row\.installments\)\) \{\s*totalPaid = row\.installments\.reduce\(\(sum, inst\) => inst\.status === 'Paid' \? sum \+ \(parseFloat\(inst\.amount\) \|\| 0\) : sum, 0\);\s*\} else \{\s*totalPaid = \(parseFloat\(row\.advancePaidInr\) \|\| 0\) \+ \(parseFloat\(row\.balancePaidInr\) \|\| 0\);\s*\}/g;

const replacement = `totalPaid = (parseFloat(row.advancePaidInr) || 0) + (parseFloat(row.balancePaidInr) || 0);`;

c = c.replace(regex, replacement);

fs.writeFileSync('src/admin/config/pageConfigs.js', c);
