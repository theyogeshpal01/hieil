const fs = require('fs');

let c = fs.readFileSync('src/admin/pages/PayoutPreview/PayoutPreview.jsx', 'utf8');

c = c.replace(/const dateStr = [^;]+;/, match => {
  return `${match}

  const handlePrint = () => {
    const element = document.querySelector('.po-paper');
    const opt = {
      margin:       [0.2, 0.2, 0.2, 0.2],
      filename:     \`Payout-\${id}.pdf\`,
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2, useCORS: true },
      jsPDF:        { unit: 'in', format: 'a4', orientation: 'portrait' }
    };
    html2pdf().set(opt).from(element).save();
  };`;
});

c = c.replace(/onClick=\{\(\) => window\.print\(\)\}/, 'onClick={handlePrint}');

fs.writeFileSync('src/admin/pages/PayoutPreview/PayoutPreview.jsx', c);
