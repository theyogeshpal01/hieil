const fs = require('fs');
let c = fs.readFileSync('src/admin/config/pageConfigs.js', 'utf8');

const regex = /\{ key: 'balancePaidInr', label: 'Balance Paid \([^)]+\)', type: 'number', formLabel: 'Balance Paid \(INR\)' \},/;
const replacement = `{ key: 'balancePaidInr', label: 'Balance Paid (₹)', type: 'number', formLabel: 'Balance Paid (INR)' },
        { 
          key: 'pendingAmount', 
          label: 'Pending Amount (₹)', 
          render: (val, row) => {
            const agreed = parseFloat(row.agreedPriceInr) || 0;
            const advance = parseFloat(row.advancePaidInr) || 0;
            const balance = parseFloat(row.balancePaidInr) || 0;
            return (agreed - (advance + balance)).toFixed(2);
          },
          hideInForm: true 
        },`;

c = c.replace(regex, replacement);

fs.writeFileSync('src/admin/config/pageConfigs.js', c);
