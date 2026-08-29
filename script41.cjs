const fs = require('fs');
let c = fs.readFileSync('src/admin/pages/PayoutPreview/PayoutPreview.jsx', 'utf8');

c = c.replace(/onClick=\{\(\) => navigate\(-1\)\}/, "onClick={() => { if(window.history.length > 2) { navigate(-1); } else { window.close(); } }}");

fs.writeFileSync('src/admin/pages/PayoutPreview/PayoutPreview.jsx', c);
