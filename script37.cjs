const fs = require('fs');

let c = fs.readFileSync('src/admin/config/pageConfigs.js', 'utf8');

// 1. Hide Assign Vendor button
const assignVendorSearch = `        React.createElement('button', {
            className: 'modern-action-btn btn-neutral',
            onClick: async () => {
              try {
                const res = await api.get('/vendors');`;

const assignVendorReplace = `        !row.vendorId && React.createElement('button', {
            className: 'modern-action-btn btn-neutral',
            onClick: async () => {
              try {
                const res = await api.get('/vendors');`;

c = c.replace(assignVendorSearch, assignVendorReplace);

// 2. Remove Send to Retailer button
// Note: We need to carefully remove the button from the array, keeping comma syntax valid.
const sendToRetailerRegex = /,?\s*React\.createElement\('button', \{\s*className: 'modern-action-btn btn-warning',\s*onClick: async \(\) => \{\s*try \{\s*await api\.put\(\`\/invoices\/\$\{row\._id\}\`,\s*\{\s*status: 'Sent to Retailer'\s*\}\);\s*Swal\.fire\('Sent!',\s*'Invoice status updated.',\s*'success'\)\.then\(\(\) => window\.location\.reload\(\)\);\s*\}\s*catch\(e\)\s*\{\s*Swal\.fire\('Error',\s*'Failed to send.',\s*'error'\);\s*\}\s*\}\s*\}, React\.createElement\(FaStore, null\), ' Send to Retailer'\)/;

c = c.replace(sendToRetailerRegex, '');

fs.writeFileSync('src/admin/config/pageConfigs.js', c);
