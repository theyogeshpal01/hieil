const fs = require('fs');

function replaceClass(filepath, targetClass) {
  let c = fs.readFileSync(filepath, 'utf8');
  c = c.replace(/document\.querySelector\('\.po-paper'\)/, `document.querySelector('${targetClass}')`);
  fs.writeFileSync(filepath, c);
}

replaceClass('src/admin/pages/InvoicePreview/InvoicePreview.jsx', '.invoice-paper');
replaceClass('src/admin/pages/EWayBillPreview/EWayBillPreview.jsx', '.eway-paper');
