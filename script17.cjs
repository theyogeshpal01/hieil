const fs = require('fs');

function updatePrint(filepath, filenamePrefixVar) {
  let c = fs.readFileSync(filepath, 'utf8');
  if (!c.includes('html2pdf')) {
    c = c.replace(/import api from '.*?';/, match => `${match}\nimport html2pdf from 'html2pdf.js';`);
  }
  const regex = /const handlePrint = \(\) => \{\s*window\.print\(\);\s*\};/;
  const replacement = `const handlePrint = () => {
    const element = document.querySelector('.po-paper');
    const opt = {
      margin:       [0.2, 0.2, 0.2, 0.2],
      filename:     \`\${${filenamePrefixVar}}-\${id}.pdf\`,
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2, useCORS: true },
      jsPDF:        { unit: 'in', format: 'a4', orientation: 'portrait' }
    };
    html2pdf().set(opt).from(element).save();
  };`;
  c = c.replace(regex, replacement);
  fs.writeFileSync(filepath, c);
}

updatePrint('src/admin/pages/PayoutPreview/PayoutPreview.jsx', '"Payout"');
updatePrint('src/admin/pages/InvoicePreview/InvoicePreview.jsx', '"Invoice"');
updatePrint('src/admin/pages/EWayBillPreview/EWayBillPreview.jsx', '"EWayBill"');

