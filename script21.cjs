const fs = require('fs');

let c = fs.readFileSync('src/admin/pages/QuotationPreview/QuotationPreview.jsx', 'utf8');
if (!c.includes('html2pdf')) {
  c = c.replace(/import api from '.*?';/, match => `${match}\nimport html2pdf from 'html2pdf.js';`);
}

const regex = /const handlePrint = \(\) => \{\s*window\.print\(\);\s*\};/;
const replacement = `const handlePrint = () => {
    const element = document.querySelector('.invoice-paper');
    const opt = {
      margin:       [0.2, 0.2, 0.2, 0.2],
      filename:     \`Quotation-\${quotation?.quoteNo || id}.pdf\`,
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2, useCORS: true },
      jsPDF:        { unit: 'in', format: 'a4', orientation: 'portrait' }
    };
    html2pdf().set(opt).from(element).save();
  };`;
c = c.replace(regex, replacement);
fs.writeFileSync('src/admin/pages/QuotationPreview/QuotationPreview.jsx', c);
