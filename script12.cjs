const fs = require('fs');
let c = fs.readFileSync('src/admin/config/pageConfigs.js', 'utf8');

const regex = /\{\s*key: 'pendingAmount',[\s\S]*?hideInForm: true\s*\}/;

const replacement = `{ 
          key: 'pendingAmount', 
          label: 'Pending Amount (₹)', 
          render: (val, row) => {
            const agreed = parseFloat(row.agreedPriceInr) || 0;
            let totalPaid = 0;
            if (row.installments && Array.isArray(row.installments)) {
              totalPaid = row.installments.reduce((sum, inst) => inst.status === 'Paid' ? sum + (parseFloat(inst.amount) || 0) : sum, 0);
            } else {
              totalPaid = (parseFloat(row.advancePaidInr) || 0) + (parseFloat(row.balancePaidInr) || 0);
            }
            return (agreed - totalPaid).toFixed(2);
          },
          hideInForm: true 
        }`;

c = c.replace(regex, replacement);

fs.writeFileSync('src/admin/config/pageConfigs.js', c);
