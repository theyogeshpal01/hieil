const fs = require('fs');
let c = fs.readFileSync('src/admin/pages/GenericList/GenericList.jsx', 'utf8');

c = c.replace(/value=\{formData\[col\.key\] \|\| ''\}/g, "value={formData[col.key] !== undefined && formData[col.key] !== null ? formData[col.key] : ''}");

fs.writeFileSync('src/admin/pages/GenericList/GenericList.jsx', c);
