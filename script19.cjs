const fs = require('fs');

function updatePrintFunc(filepath, containerSelector, prefixStr) {
  let c = fs.readFileSync(filepath, 'utf8');
  if (!c.includes('html2pdf')) {
    c = c.replace(/import .*?from 'react-icons\/fa';/, match => `${match}\nimport html2pdf from 'html2pdf.js';`);
  }

  // Find the print function name (handlePrint or printDocument)
  let printFuncName = 'handlePrint';
  if (c.includes('const printDocument = () => {')) {
    printFuncName = 'printDocument';
  }

  const regex = new RegExp(`const ${printFuncName} = \\(\\) => \\{[\\s\\S]*?\\};`);
  const replacement = `const ${printFuncName} = () => {
    const element = document.querySelector('${containerSelector}');
    const opt = {
      margin:       [0.2, 0.2, 0.2, 0.2],
      filename:     \`\${${prefixStr}}.pdf\`,
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2, useCORS: true },
      jsPDF:        { unit: 'in', format: 'a4', orientation: 'portrait' }
    };
    html2pdf().set(opt).from(element).save();
  };`;
  c = c.replace(regex, replacement);
  fs.writeFileSync(filepath, c);
}

updatePrintFunc('src/admin/pages/PurchaseOrderPreview/PurchaseOrderPreview.jsx', '.po-paper', '`PO-${vendorOrder?.poNumber || id}`');
updatePrintFunc('src/admin/pages/PayoutPreview/PayoutPreview.jsx', '.po-paper', '`Payout-${id}`');
updatePrintFunc('src/admin/pages/InvoicePreview/InvoicePreview.jsx', '.invoice-paper', '`Invoice-${invoice?.invoiceNo || id}`');
updatePrintFunc('src/admin/pages/EWayBillPreview/EWayBillPreview.jsx', '.ewaybill-container', '`EWayBill-${logistics?.ewayBillNo || id}`');

