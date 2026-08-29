const fs = require('fs');
let c = fs.readFileSync('src/admin/config/pageConfigs.js', 'utf8');

const regex = /path: 'vendor-management\/payout',[\s\S]*?title: 'PAYOUT LIST',\s*headers: \[\s*\{ key: 'id', label: '#' \},/;

const replacement = `path: 'vendor-management/payout', 
      title: 'Vendor Payout', 
      subtitle: 'Vendor Payout',
      columns: {
        title: 'PAYOUT LIST',
        headers: [
          { key: 'id', label: '#' },
          { key: 'vendorId', label: 'Vendor', render: (val) => val && val.vendorName ? val.vendorName : (val || '-') },
          { key: 'createdAt', label: 'Date', render: (val) => val ? new Date(val).toLocaleDateString('en-IN') : '-' },`;

c = c.replace(regex, replacement);

fs.writeFileSync('src/admin/config/pageConfigs.js', c);
