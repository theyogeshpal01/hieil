const fs = require('fs');

let c = fs.readFileSync('src/admin/config/pageConfigs.js', 'utf8');

const regex = /\{ key: 'vendorId', label: 'Assigned Vendor', render: \(val\) => val \? React\.createElement\('span', \{style: \{color: '#16a34a', fontWeight: 'bold'\}\}, 'Assigned'\) : React\.createElement\('span', \{style: \{color: '#9ca3af'\}\}, 'None'\) \}/g;

const replacement = `{ key: 'vendorId', label: 'Assigned Vendor', render: (val) => val ? React.createElement('span', {style: {color: '#16a34a', fontWeight: 'bold'}}, val.vendorName || val) : React.createElement('span', {style: {color: '#9ca3af'}}, 'None') }`;

c = c.replace(regex, replacement);

fs.writeFileSync('src/admin/config/pageConfigs.js', c);
