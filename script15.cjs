const fs = require('fs');
let c = fs.readFileSync('src/admin/config/pageConfigs.js', 'utf8');

const regex = /\{\s*key: 'vendorId',\s*label: 'Vendor',\s*type: 'select'/;
const replacement = `{ key: 'vendorId', label: 'Vendor', render: (val) => val && val.vendorName ? val.vendorName : (val || '-'), type: 'select'`;

c = c.replace(regex, replacement);

fs.writeFileSync('src/admin/config/pageConfigs.js', c);
