const fs = require('fs');
let c = fs.readFileSync('src/admin/config/pageConfigs.js', 'utf8');

c = c.replace(/React\.createElement\('button', \{\s*className: 'modern-action-btn btn-neutral',\s*onClick: async \(\) => \{\s*try \{\s*const res = await api\.get\('\/vendors'\);/g, 
  `!row.vendorId && React.createElement('button', {
            className: 'modern-action-btn btn-neutral',
            onClick: async () => {
              try {
                const res = await api.get('/vendors');`);

fs.writeFileSync('src/admin/config/pageConfigs.js', c);
