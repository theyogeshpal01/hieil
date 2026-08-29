const fs = require('fs');
let c = fs.readFileSync('src/admin/pages/OrderDetails/OrderDetails.jsx', 'utf8');

const regex = /<button\s*onClick=\{\(\) => handleRemoveInstallment\(index\)\}\s*style=\{\{[^}]+\}\}\s*title="Remove Installment"\s*disabled=\{inst\.status === 'Paid'\}\s*>\s*<FaTrash \/>\s*<\/button>/;

c = c.replace(regex, '');

fs.writeFileSync('src/admin/pages/OrderDetails/OrderDetails.jsx', c);
