const fs = require('fs');
let c = fs.readFileSync('src/admin/config/pageConfigs.js', 'utf8');

c = c.replace(/options: \['FOB', 'EXW', 'CIF', 'DDP', 'DAP', 'FCA', 'CPT', 'CIP', 'CFR', 'FAS'\]/g, 
  "options: [{ value: 'FOB', label: 'FOB (Free On Board)' }, { value: 'EXW', label: 'EXW (Ex Works)' }, { value: 'CIF', label: 'CIF (Cost, Insurance, and Freight)' }, { value: 'DDP', label: 'DDP (Delivered Duty Paid)' }, { value: 'DAP', label: 'DAP (Delivered at Place)' }, { value: 'FCA', label: 'FCA (Free Carrier)' }, { value: 'CPT', label: 'CPT (Carriage Paid To)' }, { value: 'CIP', label: 'CIP (Carriage and Insurance Paid To)' }, { value: 'CFR', label: 'CFR (Cost and Freight)' }, { value: 'FAS', label: 'FAS (Free Alongside Ship)' }]"
);

fs.writeFileSync('src/admin/config/pageConfigs.js', c);
