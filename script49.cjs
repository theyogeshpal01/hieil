const fs = require('fs');
let c = fs.readFileSync('src/admin/config/pageConfigs.js', 'utf8');

const regex = /totalPaid = \(parseFloat\(row\.advancePaidInr\) \|\| 0\) \+ \(parseFloat\(row\.balancePaidInr\) \|\| 0\);/g;

const replacement = `if ((parseFloat(row.advancePaidInr) || 0) + (parseFloat(row.balancePaidInr) || 0) > 0) {
              totalPaid = (parseFloat(row.advancePaidInr) || 0) + (parseFloat(row.balancePaidInr) || 0);
            } else if (row.installments && Array.isArray(row.installments)) {
              totalPaid = row.installments.reduce((sum, inst) => inst.status === 'Paid' ? sum + (parseFloat(inst.amount) || 0) : sum, 0);
            } else {
              totalPaid = 0;
            }`;

c = c.replace(regex, replacement);

fs.writeFileSync('src/admin/config/pageConfigs.js', c);
